// اللعيب: حركة، طاقة، وكل الحركات (باصة، شوطة، كعبلة، شد، كوبري، حارس)
import * as THREE from 'three';
import { buildCharacter, Animator, mat } from './character.js';
import { TUNE } from '../game/config.js';
import { clamp, dampAngle, randRange, chance } from '../core/util.js';

const V = new THREE.Vector3();
const V2 = new THREE.Vector3();

export class Player {
  constructor(match, team, idx, look, info) {
    this.match = match;
    this.team = team;
    this.idx = idx;
    this.name = info.name;
    this.number = info.number;
    this.isGK = !!info.isGK;
    this.char = buildCharacter(look);
    this.anim = new Animator(this.char);
    this.root = this.char.root;
    match.scene.add(this.root);
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.facing = team === 0 ? Math.PI / 2 : -Math.PI / 2;
    this.want = new THREE.Vector2();
    this.wantSprint = false;
    this.lookAt = null;
    this.state = 'play';
    this.stateT = 0;
    this.stateDur = 0;
    this.stamina = 1;
    this.ctrl = null;
    this.ai = { t: Math.random() * 0.3, plan: null, target: new THREE.Vector3(), dirty: 0 };
    this.mods = { speed: 1, shot: 1, control: 1, stamina: 1 };
    this.cool = { kick: 0, steal: 0, slide: 0, touch: 0, pull: 0, call: 0 };
    this.pending = null;
    this.pullTarget = null;
    this.pulledBy = null;
    this.pullT = 0;
    this.walkTo = null;
    this.onArrive = null;
    this.home = new THREE.Vector3();
    this.radius = TUNE.playerRadius * this.char.scale;
    this.stats = { goals: 0, fouls: 0, nutmegs: 0 };

    // دايرة لون الفريق تحت الرجلين
    const ringM = new THREE.MeshBasicMaterial({ color: match.teamColor(team), transparent: true, opacity: 0.5, depthWrite: false });
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.36, 0.41, 32), ringM);
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.renderOrder = 2;
    match.scene.add(this.ring);
    this.marker = null;
    this.anim.onStep = (run) => match.onFootstep(this, run);
  }

  get dir() { return this.team === 0 ? 1 : -1; }
  get hasBall() { return this.match.owner === this; }
  get active() { return !['out', 'hidden', 'leaving', 'returning', 'fetch', 'fetched'].includes(this.state); }
  get canAct() { return this.state === 'play' && !this.pending; }
  get down() { return this.state === 'fallen' || this.state === 'slide' || this.state === 'nutmegged' || this.state === 'dive'; }

  fwd(out = V) { return out.set(Math.sin(this.facing), 0, Math.cos(this.facing)); }

  headPos(out = new THREE.Vector3()) {
    return out.set(this.pos.x, (this.state === 'fallen' ? 0.8 : 2.2) * this.char.scale, this.pos.z);
  }

  setMarker(color) {
    if (this.marker) { this.root.remove(this.marker); this.marker = null; }
    if (!color) return;
    const g = new THREE.Group();
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.26, 4), new THREE.MeshBasicMaterial({ color, depthTest: false }));
    cone.rotation.x = Math.PI;
    cone.renderOrder = 10;
    g.add(cone);
    g.position.y = 2.45;
    this.marker = g;
    this.root.add(g);
    this.ring.material.opacity = 1;
  }

  setState(s, dur = 0) {
    this.state = s;
    this.stateT = 0;
    this.stateDur = dur;
  }

  place(x, z, facing) {
    this.pos.set(x, 0, z);
    this.vel.set(0, 0, 0);
    if (facing !== undefined) this.facing = facing;
    this.sync();
  }

  show(v) {
    this.root.visible = v;
    this.ring.visible = v;
  }

  // ------------------------------------------------------------ تحديث
  update(dt) {
    for (const k in this.cool) if (this.cool[k] > 0) this.cool[k] -= dt;
    this.stateT += dt;
    if (this.pending) {
      this.pending.t -= dt;
      if (this.pending.t <= 0) { const f = this.pending.fn; this.pending = null; f(); }
    }

    const s = this.state;
    if (s === 'out' || s === 'hidden' || s === 'fetched') return;

    let speedMul = 1;
    let free = true;
    switch (s) {
      case 'kick':
        speedMul = 0.3;
        if (this.stateT >= this.stateDur) this.setState('play');
        break;
      case 'slide': {
        free = false;
        const k = Math.max(0, 1 - this.stateT / 0.75);
        this.fwd(V);
        this.vel.set(V.x * this.slideSpeed * k, 0, V.z * this.slideSpeed * k);
        if (this.stateT >= TUNE.slideTime + 0.2) { this.setState('play'); this.cool.slide = 0.6; }
        break;
      }
      case 'fallen':
      case 'nutmegged':
      case 'dive':
        free = false;
        this.vel.multiplyScalar(Math.max(0, 1 - dt * (s === 'dive' ? 2.2 : 5)));
        if (this.stateT >= this.stateDur) this.setState('play');
        break;
      case 'gkhold':
        free = false;
        this.vel.set(0, 0, 0);
        break;
      case 'dazed':
        speedMul = 0.35;
        if (this.stateT >= this.stateDur) { this.setState('play'); this.anim.stop('dazed'); }
        break;
      case 'leaving':
      case 'returning':
      case 'fetch':
        free = false;
        this.walkStep(dt, s === 'fetch' ? 4.2 : 2.4);
        // لو اتزنق في حاجة ما يفضلش ماشي على طول
        if (this.walkTo && this.stateT > 9) { this.pos.copy(this.walkTo); this.walkStep(dt, 1); }
        break;
      default:
        break;
    }

    if (free) this.locomote(dt, speedMul);
    this.pos.addScaledVector(this.vel, dt);

    // الاتجاه
    const sp = Math.hypot(this.vel.x, this.vel.z);
    if (s === 'slide' || s === 'fallen' || s === 'dive') {
      // ثابت
    } else if (sp > 0.45 && s !== 'gkhold') {
      this.facing = dampAngle(this.facing, Math.atan2(this.vel.x, this.vel.z), TUNE.turnRate, dt);
    } else if (this.lookAt) {
      this.facing = dampAngle(this.facing, Math.atan2(this.lookAt.x - this.pos.x, this.lookAt.z - this.pos.z), 6, dt);
    }

    // تسارع ولفّ ومكان الكورة عشان الجسم يميل والراس تبص
    const A = this.anim;
    const prevSp = this.prevSp ?? sp, prevF = this.prevFacing ?? this.facing;
    let df = this.facing - prevF;
    while (df > Math.PI) df -= Math.PI * 2;
    while (df < -Math.PI) df += Math.PI * 2;
    A.accel += ((sp - prevSp) / Math.max(dt, 1e-3) - A.accel) * Math.min(1, dt * 6);
    A.turn += (df / Math.max(dt, 1e-3) - A.turn) * Math.min(1, dt * 8);
    this.prevSp = sp;
    this.prevFacing = this.facing;
    let look = 0, lookX = 0;
    const tgt = this.lookAt || this.match.ball.pos;
    if (tgt && s !== 'fallen' && s !== 'slide') {
      let a = Math.atan2(tgt.x - this.pos.x, tgt.z - this.pos.z) - this.facing;
      while (a > Math.PI) a -= Math.PI * 2;
      while (a < -Math.PI) a += Math.PI * 2;
      if (Math.abs(a) < 2.2) look = a * 0.7;
      const d = Math.hypot(tgt.x - this.pos.x, tgt.z - this.pos.z);
      lookX = d < 3 ? (3 - d) * 0.12 : 0; // يبص لتحت على الكورة لما تبقى قريبة
    }
    A.look += (look - A.look) * Math.min(1, dt * 5);
    A.lookX += (lookX - A.lookX) * Math.min(1, dt * 5);
    A.update(dt, s === 'slide' || s === 'fallen' || s === 'dive' ? 0 : sp);
    this.sync();
  }

  locomote(dt, mul) {
    const w = this.want;
    const wl = Math.min(1, w.length());
    const sprinting = this.wantSprint && this.stamina > 0.05 && wl > 0.3;
    let top = (sprinting ? TUNE.sprint : TUNE.jog) * this.mods.speed * mul;
    if (this.hasBall) top *= TUNE.withBallMul;
    if (this.pulledBy) top *= 0.42;
    if (this.pullTarget) top *= 0.85;
    if (this.state === 'celebrate') top *= 0.9;
    if (sprinting) this.stamina = Math.max(0, this.stamina - TUNE.staminaDrain * dt / this.mods.stamina);
    else this.stamina = Math.min(1, this.stamina + TUNE.staminaRegen * dt * this.mods.stamina * (wl < 0.2 ? 1.6 : 1));
    const tx = wl > 0.01 ? (w.x / Math.max(1e-6, w.length())) * wl * top : 0;
    const tz = wl > 0.01 ? (w.y / Math.max(1e-6, w.length())) * wl * top : 0;
    const dx = tx - this.vel.x, dz = tz - this.vel.z;
    const dl = Math.hypot(dx, dz);
    const speeding = tx * tx + tz * tz > this.vel.x * this.vel.x + this.vel.z * this.vel.z;
    const maxD = (speeding ? TUNE.accel : TUNE.decel) * dt;
    if (dl <= maxD) { this.vel.x = tx; this.vel.z = tz; }
    else { this.vel.x += (dx / dl) * maxD; this.vel.z += (dz / dl) * maxD; }
  }

  walkStep(dt, speed) {
    if (!this.walkTo) return;
    const dx = this.walkTo.x - this.pos.x, dz = this.walkTo.z - this.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.25) {
      this.vel.set(0, 0, 0);
      const cb = this.onArrive;
      this.onArrive = null;
      this.walkTo = null;
      if (cb) cb();
      return;
    }
    this.vel.set((dx / d) * speed, 0, (dz / d) * speed);
  }

  sync() {
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.facing;
    this.ring.position.set(this.pos.x, 0.02, this.pos.z);
  }

  // ------------------------------------------------------------ الحركات
  // باصة لزميل (أو في اتجاه لو مفيش حد)
  pass(target, dirX = 0, dirZ = 0, power = 0.4) {
    if (!this.hasBall || !this.canAct) return false;
    const m = this.match;
    let aimX, aimZ;
    if (target) {
      // نباصي للمكان اللي الزميل هيوصله، مش اللي هو فيه دلوقتي
      const b = m.ball.pos;
      let t = 0;
      for (let i = 0; i < 2; i++) {
        const lx = target.pos.x + target.vel.x * t * 0.8, lz = target.pos.z + target.vel.z * t * 0.8;
        const d = Math.hypot(lx - b.x, lz - b.z);
        t = m.passTime(d, m.passSpeedFor(d, 6.5));
      }
      aimX = target.pos.x + target.vel.x * t * 0.8;
      aimZ = target.pos.z + target.vel.z * t * 0.8;
    } else {
      const l = Math.hypot(dirX, dirZ) || 1;
      const D = 3 + clamp(power, 0, 1) * 19;
      aimX = this.pos.x + (dirX / l) * D;
      aimZ = this.pos.z + (dirZ / l) * D;
    }
    this.faceTo(V.set(aimX, 0, aimZ));
    this.setState('kick', 0.32);
    this.anim.play('pass', { speed: 1.3 });
    this.pending = {
      t: 0.12, fn: () => {
        if (!this.hasBall) return;
        const b = m.ball.pos;
        const dx = aimX - b.x, dz = aimZ - b.z;
        const dist = Math.max(0.5, Math.hypot(dx, dz));
        // الزميل: الكورة توصله بسرعة يقدر يستلمها. مفيش زميل: تقف عند المسافة اللي اخترتها بقوة الدوسة
        let spd = target ? m.passSpeedFor(dist, 6.5) : m.passSpeedFor(dist, 0);
        let vy = 0.3;
        if (target && m.lineBlocked(b.x, b.z, aimX, aimZ, this.team)) {
          // في حد في السكة: نرفعها فوقه
          const T = clamp(dist / 11, 0.5, 1.6);
          spd = dist / T;
          vy = 4.9 * T;
        }
        // دقة اللعيب: الباصات الطويلة والسريعة فيها غلطة صغيرة
        const err = (this.ctrl ? 0.025 : (1 - m.aiSkill(this)) * 0.08) * Math.min(1, dist / 15);
        const a = Math.atan2(dx, dz) + randRange(-err, err);
        m.kickBall(this, Math.sin(a) * spd, vy, Math.cos(a) * spd, { pass: target, kind: 'pass' });
      },
    };
    return true;
  }


  // شوطة على الجون
  shoot(power, aimZ = 0, aimLift = 0) {
    if (!this.hasBall || !this.canAct) return false;
    const m = this.match;
    const goal = m.goalFor(this.team);
    this.faceTo(V.set(goal.x, 0, aimZ * goal.hw));
    this.setState('kick', 0.5);
    this.anim.play('kick', { speed: 1.15 });
    this.pending = {
      t: 0.17, fn: () => {
        if (!this.hasBall) return;
        const b = m.ball.pos;
        const acc = this.ctrl ? 1 : this.match.aiSkill(this);
        const pressure = m.pressureOn(this);
        const err = (1 - acc * 0.75) * 0.9 + pressure * 0.4 + Math.max(0, power - 0.92) * 2.5;
        const tz = clamp(aimZ, -1, 1) * goal.hw * 0.78 + randRange(-1, 1) * err * goal.hw * 0.7;
        const tx = goal.x + Math.sign(goal.x) * 0.6;
        const dx = tx - b.x, dz = tz - b.z;
        const D = Math.max(1, Math.hypot(dx, dz));
        const S = (10.5 + power * 15.5) * this.mods.shot;
        const T = D / S;
        const hTarget = clamp(goal.h * (0.15 + aimLift * 0.55) + randRange(-0.1, 0.35) * err + power * 0.12, 0.12, goal.h * 1.6);
        let vy = (hTarget - b.y + 0.5 * 9.81 * T * T) / T;
        vy = clamp(vy, 0.2, 14);
        m.kickBall(this, (dx / D) * S, vy, (dz / D) * S, { kind: 'shot', power });
      },
    };
    return true;
  }

  // كعبلة
  slide() {
    if (!this.canAct || this.hasBall || this.cool.slide > 0 || this.isGK && !this.ctrl && chance(0.5)) return false;
    this.releasePull();
    this.setState('slide', TUNE.slideTime);
    const sp = Math.hypot(this.vel.x, this.vel.z);
    this.slideSpeed = Math.max(sp * 1.15, TUNE.slideSpeed);
    this.slideHit = new Set();
    this.slideBallFirst = false;
    this.slideTouchedBall = false;
    this.anim.play('slide');
    this.match.onSlide(this);
    return true;
  }

  // شد من الهدوم
  pull(target) {
    if (!this.canAct || this.hasBall || !target || target.pulledBy || this.cool.pull > 0) return false;
    if (target.state !== 'play' && target.state !== 'kick') return false;
    this.pullTarget = target;
    target.pulledBy = this;
    this.pullT = 0;
    this.anim.play('pull');
    target.anim.play('pulled');
    this.match.onPullStart(this, target);
    return true;
  }

  releasePull(knockDown = false) {
    const t = this.pullTarget;
    if (!t) return;
    this.pullTarget = null;
    t.pulledBy = null;
    this.anim.stop('pull');
    t.anim.stop('pulled');
    this.cool.pull = 1.2;
    this.match.onPullEnd(this, t, knockDown);
  }

  // كوبري: الكورة من بين رجلين الخصم
  nutmeg() {
    if (!this.hasBall || !this.canAct) return false;
    const m = this.match;
    const victim = m.nutmegVictim(this);
    if (!victim) {
      // مفيش حد قدامك: نطّة خفيفة لقدام
      this.setState('kick', 0.3);
      this.anim.play('pass', { speed: 1.5 });
      this.pending = { t: 0.1, fn: () => { if (!this.hasBall) return; this.fwd(V); m.kickBall(this, V.x * 6.5, 3.4, V.z * 6.5, { kind: 'chip' }); } };
      return true;
    }
    this.faceTo(victim.pos);
    this.setState('kick', 0.25);
    this.anim.play('pass', { speed: 1.6 });
    this.pending = {
      t: 0.09, fn: () => {
        if (!this.hasBall) return;
        const b = m.ball.pos;
        const dx = victim.pos.x - b.x, dz = victim.pos.z - b.z;
        const d = Math.max(0.3, Math.hypot(dx, dz));
        const tx = victim.pos.x + (dx / d) * 2.2, tz = victim.pos.z + (dz / d) * 2.2;
        const ddx = tx - b.x, ddz = tz - b.z, dd = Math.hypot(ddx, ddz);
        const spd = 7.5;
        m.kickBall(this, (ddx / dd) * spd, 0.2, (ddz / dd) * spd, { kind: 'nutmeg', victim });
      },
    };
    return true;
  }

  fall(dur = TUNE.fallTime) {
    this.releasePull();
    if (this.pulledBy) this.pulledBy.releasePull();
    if (this.hasBall) this.match.loseBall(this, 3);
    this.pending = null;
    this.setState('fallen', dur);
    this.anim.play('fall', { speed: TUNE.fallTime / dur });
  }

  gkCatch() {
    this.setState('gkhold');
    this.anim.play('holdBall');
  }

  gkThrow(target) {
    if (this.state !== 'gkhold') return;
    const m = this.match;
    this.faceTo(target ? target.pos : V.set(this.pos.x + this.dir * 8, 0, this.pos.z));
    this.anim.stop('holdBall');
    this.anim.play('throw');
    this.setState('kick', 0.6);
    this.pending = {
      t: 0.36, fn: () => {
        if (!this.hasBall) return;
        const b = m.ball.pos;
        const tx = target ? target.pos.x : this.pos.x + this.dir * 9, tz = target ? target.pos.z : this.pos.z;
        const dx = tx - b.x, dz = tz - b.z, d = Math.max(1, Math.hypot(dx, dz));
        const spd = clamp(5 + d * 0.8, 7, 14);
        m.kickBall(this, (dx / d) * spd, 2.6, (dz / d) * spd, { pass: target, kind: 'throw' });
      },
    };
  }

  dive(side, speed = 5.5) {
    this.setState('dive', 1.4);
    this.anim.play(side > 0 ? 'diveR' : 'diveL');
    // side = +1 يعني يمين الحارس (اتجاه اليمين = (-fz, 0, fx))
    this.fwd(V);
    this.vel.set(-V.z * side * speed, 0, V.x * side * speed);
  }

  faceTo(p) {
    this.facing = Math.atan2(p.x - this.pos.x, p.z - this.pos.z);
  }

  celebrate(kind) {
    this.setState('celebrate');
    this.anim.play(kind);
  }

  stopCelebrate() {
    this.anim.stop('airplane');
    this.anim.stop('jump');
    this.anim.stop('sad');
    this.anim.stop('cheer');
    if (this.state === 'celebrate') this.setState('play');
  }

  resetForKickoff() {
    this.releasePull();
    if (this.pulledBy) this.pulledBy.releasePull();
    this.pending = null;
    this.anim.stop();
    if (this.active) this.setState('play');
    this.stamina = Math.max(this.stamina, 0.6);
    this.want.set(0, 0);
  }

  dispose() {
    this.match.scene.remove(this.root);
    this.match.scene.remove(this.ring);
  }
}

export { mat };
