// الماتش: القوانين، الجون، الفاولات، عدّاد الفضيحة، الخناقة، أمه نادت عليه، البلكونة، الإزاز، الناظر
import * as THREE from 'three';
import { buildMap } from '../world/maps.js';
import { Environment } from '../world/environment.js';
import { Ball } from './ball.js';
import { Player } from '../actors/player.js';
import { thinkAI } from '../actors/ai.js';
import { playerLook } from '../actors/looks.js';
import { Walker, BreadBike, Toktok, Spectator, Mom, Headmaster, Cat, Sheep, Pigeons } from '../actors/npcs.js';
import { FX } from '../render/fx.js';
import { CameraRig } from './camera.js';
import { MAPS, TEAMS, NAMES, LINES, TUNE, DIFFICULTY } from './config.js';
import { clamp, randRange, pick, chance, dist2, arNum } from '../core/util.js';
import { audio } from '../core/audio.js';
import { crackedGlassTexture } from '../render/textures.js';
import { endInputFrame } from '../core/input.js';
import { Recorder, Replay } from './replay.js';
import { loadProfile, profileLook } from './profile.js';

const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();

const FORMATIONS = {
  3: [[0.06, 0], [0.62, -0.38], [0.62, 0.38]],
  4: [[0.06, 0], [0.42, 0], [0.78, -0.45], [0.78, 0.45]],
  5: [[0.06, 0], [0.38, -0.38], [0.38, 0.38], [0.78, -0.28], [0.78, 0.28]],
};

export class Match {
  constructor(game, opts) {
    this.game = game;
    this.ui = game.ui;
    this.audio = audio;
    this.opts = opts;
    this.scene = new THREE.Scene();
    this.camera = game.camera;
    this.def = MAPS[opts.mapId];
    this.night = opts.night;
    this.sunset = !!opts.sunset && !opts.night;
    this.weather = opts.weather || 'clear';
    this.teamKeys = [opts.home, opts.away];
    this.difficulty = opts.difficulty || 'normal';
    this.humanTeams = opts.controllers.map((c) => !!c);
    this.controllers = opts.controllers;
    this.time = 0;
    this.clock = opts.rule.type === 'time' ? opts.rule.seconds : 0;
    this.score = [0, 0];
    this.scandal = [0, 0];
    this.stats = { fouls: [0, 0], nutmegs: [0, 0], shots: [0, 0], goals: [], windows: 0, fights: 0, momCalls: 0 };
    this.owner = null;
    this.pendingPass = null;
    this.reserved = null;
    this.state = 'intro';
    this.stateT = 0;
    this.queue = [];
    this.headmasterWatching = false;
    this.roles = [{ chaser: null, slots: new Map(), nSlots: 1 }, { chaser: null, slots: new Map(), nSlots: 1 }];
    this.charge = 0;
    this.lastSwitch = [0, 0];
    this.stretch = new Map();
    this.timers = [];

    // المكان
    this.ctx = buildMap(opts.mapId);
    this.scene.add(this.ctx.root);
    this.env = new Environment(this.scene, this.ctx, { night: this.night, sunset: this.sunset, weather: this.weather, quality: game.quality, renderer: game.renderer });
    this.ball = new Ball(this.scene);
    this.ball.setNight(this.night);
    this.ball.friction = ({ yard: 1.15, school: 0.75, beach: 1.7, mosque: 0.8 }[opts.mapId] || 0.85) * (this.weather === 'rain' ? 0.62 : 1);
    this.ball.onBounce = (s) => {
      if (s > 1.5) audio.play('bounce', s);
      if (s > 2 && (opts.mapId === 'yard' || opts.mapId === 'beach') && this.weather !== 'rain') this.fx.puff(this.ball.pos, { n: 2, size: 0.4, life: 0.6, up: 0.3, opacity: 0.5 });
      // مطر: رشة مية لما الكورة تخبط في الأرض
      if (s > 1.2 && this.weather === 'rain') this.fx.puff(this.ball.pos, { n: 4, size: 0.25, life: 0.4, up: 0.6, opacity: 0.45, color: '#c8d4e0' });
    };
    this.ball.onHit = (c, s, p) => this.onBallHit(c, s, p);
    this.fx = new FX(this.scene);
    this.rig = new CameraRig(this.camera, this.def, this.ctx);

    // الفرق
    const names = [...NAMES].sort(() => Math.random() - 0.5);
    let ni = 0;
    this.teams = [[], []];
    const seed = Math.floor(Math.random() * 1000);
    const prof = loadProfile();
    for (let t = 0; t < 2; t++) {
      const team = TEAMS[this.teamKeys[t]];
      const mods = opts.mods?.[t] || {};
      for (let i = 0; i < this.def.teamSize; i++) {
        let name = names[ni++ % names.length];
        // لاعيبك اللي عملته بإيدك
        const mine = t === 0 && i === 1 && this.humanTeams[0] && !opts.demo;
        if (mine) name = prof.name;
        while (!mine && (name === prof.name || name === 'حمادة')) name = names[ni++ % names.length];
        const look = mine ? profileLook(prof, team, { kits: !!mods.kits })
          : playerLook(team, i, seed + t * 50, { kits: !!mods.kits, shoes: !!mods.shoes, isGK: i === 0 });
        const p = new Player(this, t, i, look, { name, number: mine ? prof.number : [1, 7, 10, 9, 4, 11, 8][i % 7], isGK: i === 0 });
        p.mods.speed = (mods.speed || 1) * (this.humanTeams[t] ? 1 : DIFFICULTY[this.difficulty].speed);
        p.mods.shot = mods.shot || 1;
        p.mods.control = mods.control || 1;
        p.mods.stamina = mods.stamina || 1;
        this.teams[t].push(p);
      }
    }
    this.allPlayers = [...this.teams[0], ...this.teams[1]];

    // الناس والحاجات
    this.npcs = [];
    this.walkers = [];
    for (const s of this.ctx.spectators) this.npcs.push(new Spectator(this, s));
    this.mom = this.ctx.balconies.length ? new Mom(this, this.ctx.balconies[0]) : null;
    if (this.mom) this.npcs.push(this.mom);
    this.headmaster = this.ctx.extras.headmaster ? new Headmaster(this, this.ctx.doors[0]) : null;
    if (this.headmaster) this.npcs.push(this.headmaster);
    this.animals = this.ctx.animals.map((a) => (a.kind === 'cat' ? new Cat(this, a) : new Sheep(this, a)));
    if (this.ctx.extras.pigeons) this.npcs.push(new Pigeons(this, this.ctx.extras.pigeons));
    this.walkerT = randRange(4, 9);
    this.toktok = null;
    this.toktokT = this.ctx.extras.toktok ? randRange(35, 60) : Infinity;
    this.bike = null;
    this.bikeT = this.ctx.extras.bike ? randRange(15, 30) : Infinity;
    this.dynColliders = [];

    // التحكم
    for (let t = 0; t < 2; t++) {
      const c = this.controllers[t];
      if (!c) continue;
      this.setControl(t, this.teams[t][1]);
    }

    this.recorder = new Recorder(this);
    this.placeKickoff(chance(0.5) ? 0 : 1);
    this.rig.snap(new THREE.Vector3(0, 0, 0));
    this.rig.mode = 'orbit';
    this.rig.zoomTarget = 1.15;
    this.rig.zoom = 1.3;
    this.ui.matchStart(this);
    if (!opts.demo) {
      audio.startAmbience(this.night, opts.mapId, this.weather);
      if (opts.mapId === 'school') this.after(0.6, () => audio.play('schoolbell'));
      if (opts.bet) {
        const b = opts.bet;
        this.after(0.4, () => this.say(this.teams[1][1], `على ${b.name} ${b.icon}`, { dur: 2.6 }));
        this.after(1.4, () => this.say(this.teams[0][1], 'ماشي، جهّز فلوسك', { dur: 2.2 }));
      }
    }
  }

  // ======================================================== أدوات للعيبة والـAI
  teamColor(t) { return TEAMS[this.teamKeys[t]].ui; }
  teamDef(t) { return TEAMS[this.teamKeys[t]]; }
  aiLevel(team) { return DIFFICULTY[this.humanTeams[team] ? 'normal' : this.difficulty]; }
  aiSkill(p) { return this.aiLevel(p.team).skill; }
  goalFor(team) { return this.pens ? this.pens.goal : this.ctx.goals.find((g) => g.side === (team === 0 ? 1 : -1)); }
  ownGoal(team) { return this.pens ? this.pens.goal : this.ctx.goals.find((g) => g.side === (team === 0 ? -1 : 1)); }
  goalkeeper(team) { return this.teams[team].find((p) => p.isGK && p.active); }

  nearestTo(pos, team, filter) {
    let best = null, bd = Infinity;
    for (const p of this.teams[team]) {
      if (!p.active || (filter && !filter(p))) continue;
      const d = dist2(p.pos.x, p.pos.z, pos.x, pos.z);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  pressureDist(p) {
    let bd = 99;
    for (const o of this.teams[1 - p.team]) {
      if (!o.active || o.down) continue;
      const d = dist2(o.pos.x, o.pos.z, p.pos.x, p.pos.z);
      if (d < bd) bd = d;
    }
    return bd;
  }
  pressureOn(p) { return clamp((2.5 - this.pressureDist(p)) / 2.5, 0, 1); }

  lineBlocked(x0, z0, x1, z1, team, margin = 0.8) {
    const dx = x1 - x0, dz = z1 - z0, L2 = dx * dx + dz * dz;
    if (L2 < 0.01) return false;
    for (const o of this.teams[1 - team]) {
      if (!o.active || o.down) continue;
      const t = ((o.pos.x - x0) * dx + (o.pos.z - z0) * dz) / L2;
      if (t < 0.08 || t > 0.95) continue;
      const px = x0 + dx * t, pz = z0 + dz * t;
      if (dist2(px, pz, o.pos.x, o.pos.z) < margin) return true;
    }
    return false;
  }

  // cone: نص زاوية المساعدة بالراديان. لو حد جوه الزاوية الكورة تروح له، لو لأ ترجع null
  bestPassTarget(p, dir, fromGK = false, cone = null) {
    let best = null;
    const gx = this.goalFor(p.team).x;
    const hasDir = dir && (dir.x || dir.z);
    if (hasDir && cone !== null && cone <= 0) return null;
    for (const t of this.teams[p.team]) {
      if (t === p || !t.active || t.isGK || t.state === 'fallen') continue;
      const dx = t.pos.x - p.pos.x, dz = t.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.5 || d > 30) continue;
      let score = 0;
      if (hasDir) {
        const da = Math.atan2(dir.x, dir.z);
        const lx = dx + t.vel.x * 0.5, lz = dz + t.vel.z * 0.5;
        const ang = (x, z) => { let a = Math.atan2(x, z) - da; while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return Math.abs(a); };
        const a = Math.min(ang(dx, dz), ang(lx, lz));
        const limit = cone ?? 0.6;
        if (a > limit) continue;
        // الأقرب لخط الاتجاه هو اللي بياخدها
        score = -a * 4 - d / 40 + Math.min(4, this.pressureDist(t)) / 4 * 0.3;
        if (this.lineBlocked(p.pos.x, p.pos.z, t.pos.x, t.pos.z, p.team)) score -= 0.3;
      } else {
        const progress = (Math.abs(gx - p.pos.x) - Math.abs(gx - t.pos.x)) / 10;
        score += progress * (fromGK ? 0.3 : 1);
        const open = Math.min(4, this.pressureDist(t)) / 4;
        score += open * 0.8 - d / 28;
        if (this.lineBlocked(p.pos.x, p.pos.z, t.pos.x, t.pos.z, p.team)) score -= 0.7;
      }
      if (!best || score > best.score) best = { player: t, score };
    }
    return best;
  }

  // سرعة الباصة: نحسبها بنفس احتكاك الكورة عشان توصل بالسرعة دي بالظبط
  passSpeedFor(dist, arrive) {
    const f = this.ball.friction, dt = 1 / 60;
    let lo = 2, hi = 30;
    for (let it = 0; it < 18; it++) {
      const v0 = (lo + hi) / 2;
      let v = v0, x = 0;
      while (x < dist && v > 0.05) {
        x += v * dt;
        v = Math.max(0, v - (f * dt * 1.4 + v * f * dt * 0.35));
      }
      const ok = x >= dist && v >= arrive;
      if (ok) hi = v0; else lo = v0;
    }
    return Math.min(22, hi);
  }

  passTime(dist, v0) {
    const f = this.ball.friction, dt = 1 / 30;
    let v = v0, x = 0, t = 0;
    while (x < dist && v > 0.05 && t < 4) {
      x += v * dt; t += dt;
      v = Math.max(0, v - (f * dt * 1.4 + v * f * dt * 0.35));
    }
    return t;
  }

  // اللعيب اللي جاتله باصة: يروح لخط الكورة ويستناها، ما يجريش بعيد
  receiveSteer(p) {
    const b = this.ball;
    const sp = b.groundSpeed();
    let tx = b.pos.x, tz = b.pos.z;
    if (sp > 1.5) {
      const vx = b.vel.x / sp, vz = b.vel.z / sp;
      const along = Math.max(0, (p.pos.x - b.pos.x) * vx + (p.pos.z - b.pos.z) * vz);
      tx = b.pos.x + vx * along;
      tz = b.pos.z + vz * along;
    }
    const dx = tx - p.pos.x, dz = tz - p.pos.z, d = Math.hypot(dx, dz);
    if (d > 0.12) p.want.set((dx / d) * Math.min(1, d / 1.2), (dz / d) * Math.min(1, d / 1.2));
    else p.want.set(0, 0);
    p.wantSprint = d > 3;
    p.lookAt = b.pos;
  }


  nutmegVictim(p) {
    const fx = Math.sin(p.facing), fz = Math.cos(p.facing);
    let best = null, bd = 2.4;
    for (const o of this.teams[1 - p.team]) {
      if (!o.active || o.down || o.state === 'gkhold') continue;
      const dx = o.pos.x - p.pos.x, dz = o.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > bd || d < 0.3) continue;
      if ((dx * fx + dz * fz) / d < 0.55) continue;
      bd = d; best = o;
    }
    return best;
  }

  // ======================================================== الكورة
  kickBall(p, vx, vy, vz, info = {}) {
    const ball = this.ball;
    if (this.owner === p) this.owner = null;
    ball.frozen = false;
    ball.pos.y = Math.max(ball.pos.y, ball.r);
    ball.kick(vx, vy, vz, p);
    if (info.curl) { ball.curl = info.curl; ball.curlT = info.curlT || 1; }
    p.cool.touch = 0.28;
    p.cool.kick = 0.4;
    this.pendingPass = null;
    const sp = Math.hypot(vx, vy, vz);
    if (info.kind === 'shot') {
      audio.play('kick', 0.6 + (info.power || 0.5) * 0.8);
      if (p.ctrl) this.buzz(25 + Math.round((info.power || 0.5) * 30));
      if (!this.pens) this.stats.shots[p.team]++;
      this.lastShot = { team: p.team, t: this.time, by: p };
      if (info.power > 0.8) this.rig.shake(0.12, 0.2);
      this.fx.puff(tmp.set(ball.pos.x, 0.05, ball.pos.z), { n: 3, size: 0.4, life: 0.6 });
    } else {
      audio.play('pass', sp / 10);
    }
    if (info.pass) {
      this.pendingPass = { target: info.pass, t: 0, from: p };
      if (p.ctrl && info.pass && !info.pass.isGK) this.setControl(p.team, info.pass);
    }
    if (info.kind === 'nutmeg') {
      const v = info.victim;
      this.reserved = { p, t: 1.7 };
      v.pending = null;
      v.setState('nutmegged', 1.0);
      v.anim.play('dazed');
      this.after(0.9, () => v.anim.stop('dazed'));
      p.stats.nutmegs++;
      this.stats.nutmegs[p.team]++;
      this.say(p, pick(LINES.nutmeg), { color: '#ffd23f', big: true });
      this.say(v, pick(LINES.nutmegged), { delay: 0.4 });
      audio.play('ooh');
      this.ui.banner('كوبري!', `${p.name} عدّاها من بين رجلين ${v.name}`, 'nut');
      this.slowmo(0.4, 0.5);
      this.game.onEvent?.('nutmeg', p.team);
    }
  }

  loseBall(p, impulse = 2) {
    if (this.owner !== p) return;
    this.owner = null;
    const b = this.ball;
    b.vel.set(p.vel.x * 0.6 + randRange(-impulse, impulse), 0.5, p.vel.z * 0.6 + randRange(-impulse, impulse));
    b.lastTouch = p;
    p.cool.touch = 0.5;
    if (p.state === 'gkhold') p.setState('play');
  }

  giveBall(p) {
    if (this.owner && this.owner !== p) this.owner.cool.touch = 0.4;
    this.owner = p;
    this.ball.frozen = false;
    this.ball.lastTouch = p;
    this.ball.lastKickTeam = p.team;
    this.pendingPass = null;
    this.reserved = null;
    p.cool.steal = 0.45;
    p.ai.t = 0;
    if (this.humanTeams[p.team] && !p.isGK && !p.ctrl) {
      const cur = this.teams[p.team].find((q) => q.ctrl);
      if (cur) this.setControl(p.team, p);
    }
  }

  // ======================================================== التحكم
  setControl(team, p) {
    const c = this.controllers[team];
    if (!c || !p) return;
    for (const q of this.teams[team]) if (q.ctrl) { q.ctrl = null; q.setMarker(null); q.ring.material.opacity = 0.5; }
    p.ctrl = c;
    p.setMarker(c.color);
    this.lastSwitch[team] = this.time;
    this.ui.controlChanged(team, p);
  }

  passCone() {
    const a = this.game.settings.passAssist || 'normal';
    return a === 'high' ? 0.62 : a === 'manual' ? 0 : 0.36;
  }

  humanControl(p, c, dt) {
    const ball = this.ball;
    this.applyMove(p, c);
    p.lookAt = ball.pos;
    if (p.pullTarget) {
      if (!c.b.pull.down) p.releasePull(false);
      return;
    }
    if (!p.active) return;
    if (!p.hasBall) this.passHeld = false;
    // جاتلك باصة: اللعيب يستلمها لوحده لحد ما توصله
    if (this.pendingPass && this.pendingPass.target === p && !this.owner && this.pendingPass.t < 1.8 && p.canAct) {
      this.receiveSteer(p);
      return;
    }
    if (p.hasBall) {
      // الباصة: دوسة خفيفة = قصيرة، تفضل داسس = أقوى وأبعد (لما مفيش زميل في الاتجاه)
      if (c.b.pass.pressed) this.passHeld = true;
      if (this.passHeld && c.b.pass.down && c.b.pass.t > 0.15) this.ui.power(Math.min(1, (c.b.pass.t - 0.15) / 0.85), 'باصة');
      if (this.passHeld && c.b.pass.released) {
        this.passHeld = false;
        const t = this.lastPassT || 0;
        const power = t < 0.15 ? 0.15 : Math.min(1, 0.15 + (t - 0.15) / 0.85 * 0.85);
        this.ui.power(0);
        const manualDir = Math.hypot(c.axis.x, c.axis.z) > 0.25;
        const dir = manualDir ? { x: c.axis.x, z: c.axis.z } : { x: Math.sin(p.facing), z: Math.cos(p.facing) };
        const best = this.bestPassTarget(p, dir, false, this.passCone());
        // عالية: سحبة لفوق على الزرار (موبايل) أو جري + باصة (كيبورد/دراع)
        const lob = c.gest.pass === 'up' || (!c.b.pass.touch && c.b.sprint.down);
        p.pass(best ? best.player : null, dir.x, dir.z, power, lob);
      }
      if (c.b.pass.down) this.lastPassT = c.b.pass.t;
      if (c.b.shoot.down) {
        this.charge = Math.min(1, c.b.shoot.t / 0.85);
        this.ui.power(this.charge);
      }
      if (c.b.shoot.released) {
        const pw = Math.max(0.25, this.charge);
        // لفّة: سحبة يمين/شمال أو ضغطة جامدة (موبايل) أو جري + شوطة (كيبورد/دراع)
        const g = c.gest.shoot;
        const curl = g === 'left' ? -1 : g === 'right' ? 1 : g === 'hard' || (!c.b.shoot.touch && c.b.sprint.down) ? (c.axis.z >= 0 ? 1 : -1) : 0;
        p.shoot(pw, c.axis.z, pw * 0.35, curl);
        this.charge = 0;
        this.ui.power(0);
      }
      if (c.b.skill.pressed) p.nutmeg();
    } else {
      if (this.charge) { this.charge = 0; this.ui.power(0); }
      // قطع: زرار القطع يوجّه اللعيب لوحده على اللي معاه الكورة
      const oppHas = this.owner && this.owner.team !== p.team;
      const mateHas = this.owner && this.owner.team === p.team;
      const pressing = c.b.press.down;
      p.pressing = pressing;
      if (pressing && Math.hypot(c.axis.x, c.axis.z) < 0.25 && p.canAct) {
        let tx, tz;
        if (oppHas) {
          // نقف قدامه ما بينه وبين جوننا
          const o = this.owner, own = this.ownGoal(p.team);
          const gx = own.x - o.pos.x, gz = -o.pos.z, gl = Math.hypot(gx, gz) || 1;
          const d = dist2(o.pos.x, o.pos.z, p.pos.x, p.pos.z);
          const lead = d > 2.5 ? 0.9 : 0.25;
          tx = o.pos.x + o.vel.x * 0.25 + (gx / gl) * lead;
          tz = o.pos.z + o.vel.z * 0.25 + (gz / gl) * lead;
        } else {
          const t = clamp(dist2(ball.pos.x, ball.pos.z, p.pos.x, p.pos.z) / 7, 0, 1);
          tx = ball.pos.x + ball.vel.x * t * 0.7;
          tz = ball.pos.z + ball.vel.z * t * 0.7;
        }
        const dx = tx - p.pos.x, dz = tz - p.pos.z, dl = Math.hypot(dx, dz);
        if (dl > 0.15) p.want.set(dx / dl * Math.min(1, dl / 0.6), dz / dl * Math.min(1, dl / 0.6));
        else p.want.set(0, 0);
      }
      // الكورة في الهوا جنبك: شوطة = راسية/ضربة على الجون، باصة = تلعبها لزميل
      const airNear = !this.owner && ball.pos.y > 0.3 && dist2(ball.pos.x, ball.pos.z, p.pos.x, p.pos.z) < 3;
      if ((c.b.shoot.pressed || c.b.pass.pressed) && airNear) {
        p.airIntent = { kind: c.b.shoot.pressed ? 'shot' : 'pass', t: 0.5, x: c.axis.x, z: c.axis.z };
      }
      // من غير كورة: الشوطة = كعبلة، والباصة = بدّل اللعيب (زرار الكعبلة والتبديل القديم لسه شغالين على الكيبورد والدراع)
      const tackle = c.b.tackle.pressed || (c.b.shoot.pressed && !airNear && !mateHas);
      if (c.b.pass.pressed && !airNear && !mateHas) { this.switchNext(p.team); return; }
      if (tackle) {
        // نلف ناحية الكورة لو مش ماسك اتجاه
        if (!(c.axis.x || c.axis.z)) p.faceTo(oppHas && dist2(this.owner.pos.x, this.owner.pos.z, p.pos.x, p.pos.z) < 4 ? this.owner.pos : ball.pos);
        else p.facing = Math.atan2(c.axis.x, c.axis.z);
        p.slide();
      }
      if (c.b.pull.pressed) {
        let best = null, bd = 1.35;
        for (const o of this.teams[1 - p.team]) {
          if (!o.active || o.down) continue;
          const d = dist2(o.pos.x, o.pos.z, p.pos.x, p.pos.z);
          if (d < bd) { bd = d; best = o; }
        }
        if (best) p.pull(best);
      }
      if ((c.b.pass.pressed || c.b.press.pressed) && this.owner && this.owner.team === p.team && !this.owner.ctrl && p.cool.call <= 0) {
        p.cool.call = 1.2;
        this.say(p, pick(LINES.callPass));
        const o = this.owner;
        this.after(0.18, () => { if (this.owner === o && o.canAct) o.pass(p); });
      }
    }
    if (c.b.switch.pressed) this.switchNext(p.team);
  }

  // السرعة: بالاستيك على قد ما شدّيت (خفيف = مشي، نص = جري، للآخر = سبرنت). بالأسهم = زرار الجري
  applyMove(p, c) {
    const m = Math.hypot(c.axis.x, c.axis.z);
    if (c.analog && m > 0) {
      const k = m < 0.6 ? 0.45 / m : 1 / m;
      p.want.set(c.axis.x * k, c.axis.z * k);
      p.wantSprint = m >= 0.88 || c.b.sprint.down;
    } else {
      p.want.set(c.axis.x, c.axis.z);
      p.wantSprint = c.b.sprint.down;
    }
  }

  switchNext(team) {
    const cur = this.teams[team].find((q) => q.ctrl);
    const ball = this.ball.pos;
    const cands = this.teams[team].filter((q) => q.active && !q.isGK && q !== cur && q.state !== 'fallen');
    if (!cands.length) return;
    cands.sort((a, b) => dist2(a.pos.x, a.pos.z, ball.x, ball.z) - dist2(b.pos.x, b.pos.z, ball.x, ball.z));
    this.setControl(team, cands[0]);
  }

  autoSwitch(team) {
    const cur = this.teams[team].find((q) => q.ctrl);
    if (!cur) { this.switchNext(team); return; }
    if (!cur.active) { this.switchNext(team); return; }
    if (cur.hasBall || cur.pullTarget || cur.state === 'slide' || cur.pending) return;
    if (this.time - this.lastSwitch[team] < 0.9) return;
    if (this.owner && this.owner.team === team) return;
    const ball = this.ball.pos;
    const dc = dist2(cur.pos.x, cur.pos.z, ball.x, ball.z);
    let best = null, bd = dc - 3;
    for (const q of this.teams[team]) {
      if (q === cur || !q.active || q.isGK || q.down) continue;
      const d = dist2(q.pos.x, q.pos.z, ball.x, ball.z);
      if (d < bd) { bd = d; best = q; }
    }
    if (best) this.setControl(team, best);
  }

  // ======================================================== الأدوار
  computeRoles() {
    const ball = this.ball.pos;
    for (let t = 0; t < 2; t++) {
      const R = this.roles[t];
      R.slots.clear();
      const human = this.teams[t].find((q) => q.ctrl);
      const cands = this.teams[t].filter((q) => q.active && !q.isGK && !q.ctrl && q.state !== 'fallen');
      let chaser = null, cd = Infinity;
      for (const q of cands) {
        const d = dist2(q.pos.x, q.pos.z, ball.x, ball.z) + (q.state === 'play' ? 0 : 3);
        if (d < cd) { cd = d; chaser = q; }
      }
      if (human && chaser) {
        const hd = dist2(human.pos.x, human.pos.z, ball.x, ball.z);
        const oppHas = this.owner && this.owner.team !== t;
        if (!(cd < hd - 1.5 || (oppHas && cd < 7))) chaser = null;
      }
      if (this.owner && this.owner.team === t) chaser = null;
      R.chaser = chaser;
      const rest = cands.filter((q) => q !== chaser).sort((a, b) => a.pos.z - b.pos.z);
      rest.forEach((q, i) => R.slots.set(q, i));
      R.nSlots = Math.max(1, rest.length);
    }
  }

  // ======================================================== البداية
  placeKickoff(team) {
    const def = this.def;
    this.owner = null;
    this.pendingPass = null;
    this.reserved = null;
    this.kickTeam = team;
    for (let t = 0; t < 2; t++) {
      const form = FORMATIONS[def.teamSize] || FORMATIONS[4];
      const own = this.ownGoal(t);
      const dir = t === 0 ? 1 : -1;
      const players = this.teams[t];
      players.forEach((p, i) => {
        p.resetForKickoff();
        if (!p.active) return;
        const [ax, az] = form[i] || [0.5, 0];
        let x = own.x + dir * ax * (Math.abs(own.x) - 0.6);
        let z = az * def.halfW;
        if (t === team && i === players.length - 1) { x = -dir * 0.5; z = 0; }
        if (t !== team) x = dir > 0 ? Math.min(x, -1.8) : Math.max(x, 1.8);
        p.place(x, z, t === 0 ? Math.PI / 2 : -Math.PI / 2);
        p.anim.update(0.016, 0);
      });
    }
    this.ball.place(0, 0);
    this.ball.frozen = false;
  }

  startPlay() {
    const kicker = this.teams[this.kickTeam][this.teams[this.kickTeam].length - 1];
    this.setState('play');
    if (kicker && kicker.active) this.giveBall(kicker);
    audio.play('whistle');
    if (this.humanTeams[this.kickTeam] && kicker && !kicker.ctrl) this.setControl(this.kickTeam, kicker);
  }

  setState(s) { this.state = s; this.stateT = 0; }

  // مؤقتات بوقت اللعبة (بتقف لما اللعب يقف)
  after(sec, fn) { this.timers.push({ t: sec, fn }); }

  runTimers(dt) {
    if (!this.timers.length) return;
    const due = [];
    for (const tm of this.timers) { tm.t -= dt; if (tm.t <= 0) due.push(tm); }
    if (!due.length) return;
    this.timers = this.timers.filter((tm) => tm.t > 0);
    for (const tm of due) tm.fn();
  }

  // ======================================================== الحلقة الرئيسية
  // اهتزاز الموبايل (أندرويد؛ الآيفون ما بيدعمش الاهتزاز من المتصفح)
  buzz(pattern) {
    if (this.opts.demo || !this.game.touch || this.game.settings.vibrate === 'off') return;
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) { /* ignore */ }
  }

  // تصوير بطيء للحظات الحلوة
  slowmo(scale, dur) { this.slow = { scale, t: dur }; }

  update(dt) {
    dt = Math.min(dt, 1 / 20);
    if (this.slow) {
      this.slow.t -= dt;
      dt *= this.slow.scale;
      if (this.slow.t <= 0) this.slow = null;
    }
    this.time += dt;
    this.stateT += dt;
    for (const c of this.controllers) if (c) c.update(dt);
    const c0 = this.controllers[0];
    if (c0 && c0.touch) c0.touch.setContext(this.owner && this.owner.team === 0 ? 'attack' : 'defend');
    endInputFrame();
    this.env.update(dt);
    audio.tickAmbience(dt);
    this.runTimers(dt);

    switch (this.state) {
      case 'intro':
        if (this.opts.demo) { if (this.stateT > 1) this.setState('kickoff'); break; }
        if (this.stateT > 2.6 || this.anyPressed()) {
          this.rig.mode = 'follow';
          this.rig.zoomTarget = 1;
          this.setState('kickoff');
          this.ui.banner(pick(LINES.kickoff), `${this.teamDef(0).name} × ${this.teamDef(1).name}`, 'start');
          if (!this.opts.versus && !this.game.touch) this.after(3, () => this.ui.toast('دوس S كتير = شوطة أقوى • D كعبلة • F شدّ من الهدوم • W كوبري'));
        }
        break;
      case 'kickoff':
        if (this.stateT > 1.3) this.startPlay();
        break;
      case 'play':
        if (this.opts.rule.type === 'time') {
          this.clock -= dt;
          if (this.clock <= 0) { this.clock = 0; this.endMatch(); }
        } else this.clock += dt;
        break;
      case 'goal':
        if (this.stateT > 3.0 && !this.replayed && !this.opts.demo && this.game.settings.replay !== 'off') {
          this.replayed = true;
          this.replay = new Replay(this, this.recorder);
          if (!this.replay.done) { this.setState('replay'); this.ui.replay(true); break; }
        }
        if (this.stateT > 4.2) this.afterGoal();
        break;
      case 'replay':
        this.replay.update(dt);
        if (this.replay.done || (this.stateT > 0.6 && this.anyPressed())) {
          this.ui.replay(false);
          this.replay = null;
          this.afterGoal();
        }
        break;
      case 'freekick':
        this.updateFreekick(dt);
        break;
      case 'event':
        this.updateEvent(dt);
        break;
      case 'end':
        if (this.stateT > 3.2 && !this.resultShown) { this.resultShown = true; this.ui.showResult(this); }
        break;
      case 'pens':
        this.updatePens(dt);
        break;
    }

    if (this.state === 'replay') { this.ui.hud(this, dt); return; }
    if (this.state === 'play' || (this.state === 'goal' && this.stateT < 1.2)) this.recorder.record(dt);
    const live = this.state === 'play';
    if (live || this.state === 'freekick' || this.state === 'event') this.computeRoles();

    // اللعيبة
    for (const p of this.allPlayers) {
      if (live) {
        if (p.ctrl) this.humanControl(p, p.ctrl, dt);
        else if (this.freezeAI) p.want.set(0, 0);
        else thinkAI(p, this, dt);
      } else if (this.state === 'freekick' || this.state === 'event') {
        if (p.ctrl && p.state === 'play') this.applyMove(p, p.ctrl);
        else if (!p.ctrl) this.idleAI(p);
      } else if (this.state === 'goal' || this.state === 'end') {
        this.celebrateAI(p);
      } else {
        p.want.set(0, 0);
        p.lookAt = this.ball.pos;
      }
      p.update(dt);
    }
    if (live) for (let t = 0; t < 2; t++) if (this.controllers[t]) this.autoSwitch(t);

    this.resolveCollisions();
    if (live) this.updateAirIntents(dt);
    if (live) {
      this.updatePulls(dt);
      this.updateSlides();
    }
    this.updateBall(dt, live);
    if (!this.owner && this.ball.speed() > 13 && !this.ball.frozen) this.fx.trail(this.ball.pos, this.night);
    if (live) {
      this.checkGoal();
      this.checkSpecialBall();
    }
    this.updateNPCs(dt);
    this.fx.update(dt);
    for (const a of this.animals) a.update(dt);
    if (this.reserved) { this.reserved.t -= dt; if (this.reserved.t <= 0) this.reserved = null; }
    if (this.pendingPass) { this.pendingPass.t += dt; if (this.pendingPass.t > 2.5) this.pendingPass = null; }

    // الكاميرا
    let focus = this.ball.pos;
    if (this.state === 'goal' && this.scorer && this.scorer.active) focus = this.scorer.pos;
    if (this.focusOverride) focus = this.focusOverride;
    this.rig.update(dt, focus);
    this.updateStretch();
    this.ui.hud(this, dt);
  }

  anyPressed() {
    return this.controllers.some((c) => c && Object.values(c.b).some((b) => b.pressed));
  }

  idleAI(p) {
    if (!p.active || p.state !== 'play') return;
    p.lookAt = this.ball.pos;
    // نبعد عن مكان الضربة الحرة
    const b = this.ball.pos;
    const d = dist2(p.pos.x, p.pos.z, b.x, b.z);
    if (this.freekick && p.team !== this.freekick.team && d < 3.2) {
      const k = (3.2 - d) / 3.2;
      p.want.set(((p.pos.x - b.x) / Math.max(0.1, d)) * k * 1.5, ((p.pos.z - b.z) / Math.max(0.1, d)) * k * 1.5);
    } else if (this.fleeFrom) {
      const fdx = p.pos.x - this.fleeFrom.x, fdz = p.pos.z - this.fleeFrom.z;
      const fd = Math.hypot(fdx, fdz) || 1;
      p.want.set(fdx / fd, fdz / fd);
      p.wantSprint = true;
    } else {
      thinkAI(p, this, 0.016);
      if (p.hasBall) p.want.set(0, 0);
    }
  }

  celebrateAI(p) {
    p.want.set(0, 0);
    p.wantSprint = false;
    if (p === this.scorer && p.state === 'celebrate') {
      const tz = this.def.halfW * 0.8;
      const dz = tz - p.pos.z;
      if (Math.abs(dz) > 0.6) p.want.set(-p.dir * 0.25, Math.sign(dz) * 0.9);
      p.wantSprint = true;
    } else if (this.scorer && p.team === this.scorer.team && p.state === 'celebrate' && !p.isGK) {
      const dx = this.scorer.pos.x - p.pos.x, dz = this.scorer.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 1.6) p.want.set(dx / d, dz / d);
    }
    p.lookAt = this.scorer ? this.scorer.pos : this.ball.pos;
  }

  // ======================================================== التصادمات
  resolveCollisions() {
    const ps = this.allPlayers;
    for (let i = 0; i < ps.length; i++) {
      const a = ps[i];
      if (!a.active || a.state === 'fallen') continue;
      for (let j = i + 1; j < ps.length; j++) {
        const b = ps[j];
        if (!b.active || b.state === 'fallen') continue;
        if (a.pullTarget === b || b.pullTarget === a) continue;
        if (a.state === 'slide' || b.state === 'slide') continue; // الزحلقة بتعدي تحت الرجلين
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
        const d = Math.hypot(dx, dz);
        const min = a.radius + b.radius;
        if (d < min && d > 1e-4) {
          const push = (min - d) / 2;
          const nx = dx / d, nz = dz / d;
          a.pos.x -= nx * push; a.pos.z -= nz * push;
          b.pos.x += nx * push; b.pos.z += nz * push;
        }
      }
      // المعدّيين
      for (const w of this.walkers) {
        const dx = a.pos.x - w.pos.x, dz = a.pos.z - w.pos.z;
        const d = Math.hypot(dx, dz), min = a.radius + w.radius;
        if (d < min && d > 1e-4) { a.pos.x += (dx / d) * (min - d); a.pos.z += (dz / d) * (min - d); }
      }
    }
    const solid = this.ctx.colliders.filter((c) => c.solid || c.tag === 'wall' || c.tag === 'pole');
    if (this.toktok) solid.push(this.toktok.collider);
    for (const p of ps) {
      if (!p.active && p.state !== 'leaving' && p.state !== 'returning' && p.state !== 'fetch') continue;
      const r = p.radius;
      for (const c of solid) {
        if (c.min.y > 1.2) continue;
        const qx = clamp(p.pos.x, c.min.x, c.max.x), qz = clamp(p.pos.z, c.min.z, c.max.z);
        const dx = p.pos.x - qx, dz = p.pos.z - qz;
        const d = Math.hypot(dx, dz);
        if (d < r) {
          if (d > 1e-4) { p.pos.x = qx + (dx / d) * r; p.pos.z = qz + (dz / d) * r; }
          else {
            // جوه: نطلعه لأقرب وش
            const opts = [[c.min.x - r - p.pos.x, 0], [c.max.x + r - p.pos.x, 0], [0, c.min.z - r - p.pos.z], [0, c.max.z + r - p.pos.z]];
            opts.sort((u, v) => Math.hypot(...u) - Math.hypot(...v));
            p.pos.x += opts[0][0]; p.pos.z += opts[0][1];
          }
        }
      }
      if (p.active) {
        const b = this.ctx.bounds;
        p.pos.x = clamp(p.pos.x, b.minX, b.maxX);
        p.pos.z = clamp(p.pos.z, b.minZ, b.maxZ);
      }
      p.sync();
    }
  }

  // ======================================================== الكورة كل فريم
  updateBall(dt, live) {
    const ball = this.ball;
    const o = this.owner;
    if (o) {
      if (!o.active || o.state === 'fallen' || o.state === 'nutmegged') { this.loseBall(o, 2); }
    }
    if (this.owner) {
      const p = this.owner;
      if (p.state === 'gkhold' || (p.isGK && p.anim.isPlaying('throw'))) {
        p.char.J.rHand.getWorldPosition(tmp);
        p.char.J.lHand.getWorldPosition(tmp2);
        tmp.add(tmp2).multiplyScalar(0.5);
        p.fwd(tmp2);
        ball.pos.set(tmp.x + tmp2.x * 0.12, Math.max(ball.r, tmp.y), tmp.z + tmp2.z * 0.12);
        ball.vel.set(0, 0, 0);
      } else {
        p.fwd(tmp2);
        const sp = Math.hypot(p.vel.x, p.vel.z);
        // لمسة كل خطوتين: الكورة تبعد عن الرجل وهو يلحقها (أبعد كل ما يجري أسرع)
        const u = ((p.anim.phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) / (Math.PI * 2);
        const amp = clamp((sp - 1.2) * 0.13, 0, 0.8);
        const off = 0.36 + amp * (1 - u) * (1 - u * 0.3);
        const tx = p.pos.x + tmp2.x * off, tz = p.pos.z + tmp2.z * off;
        const k = 1 - Math.exp(-(sp > 1.5 ? 11 : 22) * dt);
        ball.pos.x += (tx - ball.pos.x) * k;
        ball.pos.z += (tz - ball.pos.z) * k;
        ball.pos.y = ball.r;
        ball.vel.set(p.vel.x + tmp2.x * 0.5, 0, p.vel.z + tmp2.z * 0.5);
      }
      ball.update(dt, null, true);
      if (live) this.updateSteals(dt);
      return;
    }
    const cols = this.dynColliders.length || this.toktok ? [...this.ctx.colliders, ...(this.toktok ? [this.toktok.collider] : [])] : this.ctx.colliders;
    ball.update(dt, cols, false);
    if (!live && this.state !== 'freekick') return;
    this.ballVsPeople();
    if (!live) return;
    // مين ياخد الكورة
    let best = null, bd = Infinity;
    for (const p of this.allPlayers) {
      if (!p.active || p.cool.touch > 0) continue;
      if (p.state !== 'play' && p.state !== 'dive' && !(p.state === 'kick' && !p.pending)) continue;
      if (this.reserved && this.reserved.p !== p) continue;
      p.fwd(tmp2);
      const fx = p.pos.x + tmp2.x * 0.28, fz = p.pos.z + tmp2.z * 0.28;
      const d = dist2(fx, fz, ball.pos.x, ball.pos.z);
      const gkReach = p.isGK && this.inOwnBox(p) ? (p.state === 'dive' ? 1.25 : 0.95) : 0;
      const reach = Math.max(TUNE.controlDist, gkReach);
      const maxY = gkReach ? 2.3 : 0.75;
      if (d < reach && ball.pos.y < maxY && d < bd) { bd = d; best = p; }
    }
    if (best) this.touchBall(best);
  }

  inOwnBox(p) {
    const g = this.ownGoal(p.team);
    return Math.abs(p.pos.x - g.x) < 4.5 && Math.abs(p.pos.z) < g.hw + 3;
  }

  touchBall(p) {
    const ball = this.ball;
    const relV = Math.hypot(ball.vel.x - p.vel.x, ball.vel.z - p.vel.z);
    if (p.isGK && this.inOwnBox(p)) {
      // الحارس
      const skill = p.ctrl ? 0.8 : this.aiSkill(p);
      const shot = ball.speed() > 9 && ball.lastKickTeam !== p.team;
      if (!shot || chance(clamp(skill * 1.15 - (ball.speed() - 12) * 0.04, 0.25, 0.95))) {
        this.owner = p;
        this.pendingPass = null;
        ball.lastTouch = p;
        ball.lastKickTeam = p.team;
        p.gkCatch();
        if (shot) {
          audio.play('save');
          this.say(p, pick(LINES.save), { color: '#ffd23f' });
          for (const s of this.npcs) if (s.cheer) s.cheer(1.5);
        }
        p.ai.holdT = 0;
        return;
      }
      // صدّها
      ball.vel.x *= -0.45; ball.vel.z = ball.vel.z * 0.5 + randRange(-4, 4); ball.vel.y = Math.abs(ball.vel.y) * 0.5 + 2;
      p.cool.touch = 0.5;
      ball.lastTouch = p;
      audio.play('save');
      this.say(p, 'صدّها!', { color: '#ffd23f' });
      return;
    }
    const intended = this.pendingPass && this.pendingPass.target === p;
    const ctrlChance = clamp(1.25 - (relV - 9) * 0.06 * (1 / p.mods.control) + (intended ? 0.35 : 0), 0.35, 1);
    if (relV > 9 && !chance(ctrlChance)) {
      // الكورة خبطت فيه وطلعت
      ball.vel.x = ball.vel.x * -0.35 + p.vel.x * 0.5 + randRange(-1.5, 1.5);
      ball.vel.z = ball.vel.z * -0.35 + p.vel.z * 0.5 + randRange(-1.5, 1.5);
      ball.vel.y = Math.abs(ball.vel.y) * 0.3 + 0.8;
      p.cool.touch = 0.35;
      ball.lastTouch = p;
      audio.play('bounce', 6);
      return;
    }
    this.giveBall(p);
  }

  updateSteals(dt) {
    const o = this.owner;
    if (!o || o.state === 'gkhold' || o.cool.steal > 0) return;
    for (const p of this.teams[1 - o.team]) {
      if (!p.active || p.state !== 'play' || p.cool.touch > 0 || p.pulledBy) continue;
      p.fwd(tmp2);
      const fx = p.pos.x + tmp2.x * 0.3, fz = p.pos.z + tmp2.z * 0.3;
      const d = dist2(fx, fz, this.ball.pos.x, this.ball.pos.z);
      if (d > 0.68) continue;
      const lvl = p.ctrl ? (p.pressing ? 1.7 : 1.0) : this.aiLevel(p.team).steal;
      const rate = TUNE.stealPerSec * lvl * (o.wantSprint ? 1.25 : 1) / (o.mods.control * (o.ctrl ? 1.15 : 1));
      if (Math.random() < rate * dt) {
        this.owner = null;
        audio.play('pass', 0.5);
        this.giveBall(p);
        o.cool.touch = 0.5;
        return;
      }
    }
  }

  ballVsPeople() {
    const ball = this.ball;
    const bp = ball.pos;
    const hitCyl = (x, z, r, h, onHit) => {
      if (bp.y > h) return;
      const dx = bp.x - x, dz = bp.z - z, d = Math.hypot(dx, dz), min = r + ball.r;
      if (d >= min || d < 1e-4) return;
      const nx = dx / d, nz = dz / d;
      bp.x = x + nx * min; bp.z = z + nz * min;
      const vn = ball.vel.x * nx + ball.vel.z * nz;
      if (vn < 0) {
        ball.vel.x -= 1.5 * vn * nx; ball.vel.z -= 1.5 * vn * nz;
        if (onHit) onHit(-vn);
      }
    };
    for (const w of this.walkers) hitCyl(w.pos.x, w.pos.z, w.radius, w.height, (s) => { w.hitByBall(s); audio.play('bounce', s); });
    if (this.bike) hitCyl(this.bike.pos.x, this.bike.pos.z, 0.5, 2.2, (s) => { if (s > 3) this.bike.hitByBall(); });
    for (const a of this.animals) if (a.hit) hitCyl(a.g.position.x, a.g.position.z, 0.6, 1.0, (s) => { if (s > 2.5) a.hit(); });
    // لعيبة واقعين على الأرض أو مشغولين: الكورة بتخبط فيهم
    for (const p of this.allPlayers) {
      if (!p.active) continue;
      if (p.state === 'fallen' || p.state === 'slide') continue;
      if (ball.pos.y > 0.75 && ball.pos.y < 2.0 && p.cool.touch <= 0 && !(p.isGK && this.inOwnBox(p))) {
        // صدر / راس
        const d = dist2(p.pos.x, p.pos.z, bp.x, bp.z);
        if (d < 0.42) {
          ball.vel.x = ball.vel.x * -0.25 + p.vel.x * 0.6;
          ball.vel.z = ball.vel.z * -0.25 + p.vel.z * 0.6;
          ball.vel.y = Math.max(0.5, ball.vel.y * -0.2);
          p.cool.touch = 0.3;
          ball.lastTouch = p;
          ball.lastKickTeam = p.team;
          audio.play('bounce', 5);
        }
      }
    }
  }

  // ======================================================== الكعبلة
  onSlide(p) {
    audio.play('slide');
    this.fx.puff(tmp.set(p.pos.x, 0.1, p.pos.z), { n: 4, size: 0.5, life: 0.7 });
  }

  updateSlides() {
    const ball = this.ball;
    for (const s of this.allPlayers) {
      if (s.state !== 'slide' || s.stateT < 0.05 || s.stateT > 0.78) continue;
      s.fwd(tmp2);
      const hx = s.pos.x + tmp2.x * 0.6, hz = s.pos.z + tmp2.z * 0.6;
      if (Math.random() < 0.3) this.fx.puff(tmp.set(s.pos.x, 0.05, s.pos.z), { n: 1, size: 0.45, life: 0.6, up: 0.3 });
      // الكورة
      if (!s.slideTouchedBall && dist2(hx, hz, ball.pos.x, ball.pos.z) < 0.7 && ball.pos.y < 0.55) {
        s.slideTouchedBall = true;
        if (s.slideHit.size === 0) s.slideBallFirst = true;
        if (this.owner) { const o = this.owner; this.owner = null; o.cool.touch = 0.6; }
        ball.kick(tmp2.x * 7 + randRange(-2, 2), 1.2, tmp2.z * 7 + randRange(-2, 2), s);
        s.cool.touch = 0.4;
        audio.play('kick', 0.6);
      }
      // الرجلين
      for (const o of this.allPlayers) {
        if (o === s || !o.active || s.slideHit.has(o) || o.down || o.state === 'gkhold' && false) continue;
        // الرجل الممدودة أو الجسم نفسه
        if (dist2(hx, hz, o.pos.x, o.pos.z) > 0.78 && dist2(s.pos.x + tmp2.x * 0.25, s.pos.z + tmp2.z * 0.25, o.pos.x, o.pos.z) > 0.6) continue;
        s.slideHit.add(o);
        const foul = o.team !== s.team && !s.slideBallFirst;
        o.fall();
        audio.play('thud');
        if (o.ctrl || s.ctrl) this.buzz([60, 40, 90]);
        this.after(0.25, () => audio.play('ouch'));
        this.rig.shake(0.25, 0.4);
        this.fx.dizzy(() => o.headPos(tmp.set(0, 0, 0)).add(tmp2.set(0, -0.6, 0)), 2.6);
        this.fx.puff(tmp.set(o.pos.x, 0.15, o.pos.z), { n: 6, size: 0.6 });
        if (o.team === s.team) { this.say(o, 'إنت بتكعبلني أنا؟!'); continue; }
        this.addScandal(s.team, foul ? TUNE.scandalTackle : TUNE.scandalCleanTrip);
        this.after(0.5, () => this.say(o, pick(LINES.hurt), { color: '#ffe0e0' }));
        this.fx.impact(tmp.set(o.pos.x, 0.9, o.pos.z));
        if (foul) {
          this.slowmo(0.35, 0.45);
          s.stats.fouls++;
          this.stats.fouls[s.team]++;
          const yell = this.nearestTo(o.pos, o.team, (q) => q !== o) || o;
          this.say(yell, pick(LINES.foul), { color: '#ffd23f', big: true });
          for (const sp of this.npcs) if (sp.cheer && chance(0.4)) sp.cheer(1);
          if (this.headmasterWatching) this.expel(s);
          this.callFoul(o.team, o.pos, s, o);
        }
      }
    }
  }

  // ======================================================== الشد من الهدوم
  onPullStart(p, t) {
    audio.play('rip');
    this.say(t, pick(LINES.pull), { color: '#ffe0e0' });
    if (this.headmasterWatching) this.expel(p);
    // قماشة الفانلة المتشدة
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 1), new THREE.MeshStandardMaterial({ color: t.char.look.top.color, roughness: 0.9 }));
    m.castShadow = true;
    this.scene.add(m);
    this.stretch.set(p, { m, t });
  }

  onPullEnd(p, t, knockDown) {
    const s = this.stretch.get(p);
    if (s) { this.scene.remove(s.m); this.stretch.delete(p); }
    if (knockDown && t.active) {
      t.fall(2.2);
      audio.play('thud');
      this.addScandal(p.team, 15);
      this.stats.fouls[p.team]++;
      p.stats.fouls++;
      this.say(t, 'وقعني من الفانلة!', { color: '#ffe0e0' });
      if (this.state === 'play') this.callFoul(t.team, t.pos, p, t);
    }
  }

  updatePulls(dt) {
    for (const p of this.allPlayers) {
      if (!p.pullTarget) continue;
      const t = p.pullTarget;
      p.pullT += dt;
      this.addScandal(p.team, TUNE.scandalPullPerSec * dt, true);
      const d = dist2(p.pos.x, p.pos.z, t.pos.x, t.pos.z);
      // بيمسكه من ورا
      if (d > 0.9) {
        const k = Math.min(1, (d - 0.9) * 4 * dt * 10);
        p.pos.x += ((t.pos.x - p.pos.x) / d) * k * 0.2;
        p.pos.z += ((t.pos.z - p.pos.z) / d) * k * 0.2;
      }
      if (t.hasBall && p.pullT > 0.7) this.loseBall(t, 1.5);
      if (d > 1.9 || p.pullT > TUNE.pullMax || !t.active || t.down || p.down) p.releasePull(p.pullT > 1.2 && chance(0.35));
    }
  }

  updateStretch() {
    for (const [p, s] of this.stretch) {
      p.char.J.rHand.getWorldPosition(tmp);
      s.t.char.J.spine.getWorldPosition(tmp2);
      tmp2.y += 0.25 * s.t.char.scale;
      const len = tmp.distanceTo(tmp2);
      s.m.position.copy(tmp).add(tmp2).multiplyScalar(0.5);
      s.m.lookAt(tmp2);
      s.m.scale.set(1, 1, Math.max(0.05, len));
    }
  }

  // ======================================================== الفضيحة
  addScandal(team, v, quiet = false) {
    const before = this.scandal[team];
    this.scandal[team] = Math.min(100, this.scandal[team] + v);
    if (before < 100 && this.scandal[team] >= 100) {
      this.queue.push({ type: chance(0.5) ? 'fight' : 'mom', team });
    }
    if (!quiet && v > 10) this.ui.scandalPulse(team);
  }

  callFoul(victimTeam, pos, fouler, victim) {
    if (this.state !== 'play') return;
    this.foulInfo = { fouler, victim };
    const fpos = pos.clone();
    this.after(0.65, () => {
      if (this.state !== 'play') return;
      this.startFreekick(victimTeam, fpos);
    });
  }

  startFreekick(team, pos) {
    const b = this.ctx.bounds;
    const x = clamp(pos.x, b.minX + 1.2, b.maxX - 1.2), z = clamp(pos.z, b.minZ + 1, b.maxZ - 1);
    if (this.owner) { const o = this.owner; this.owner = null; if (o.state === 'gkhold') o.setState('play'); }
    this.ball.place(x, z);
    this.freekick = { team, x, z };
    this.setState('freekick');
    audio.play('whistle');
    for (const p of this.allPlayers) if (p.pullTarget) p.releasePull();
    if (this.queue.length) this.runQueuedEvent();
  }

  updateFreekick(dt) {
    const fk = this.freekick;
    if (this.state !== 'freekick') return;
    const kicker = this.nearestTo(this.ball.pos, fk.team, (p) => !p.isGK && p.state === 'play');
    if (kicker) {
      kicker.want.set(0, 0);
      const dir = kicker.dir;
      tmp.set(fk.x - dir * 0.55, 0, fk.z);
      const dx = tmp.x - kicker.pos.x, dz = tmp.z - kicker.pos.z, d = Math.hypot(dx, dz);
      if (d > 0.2) { kicker.want.set(dx / d, dz / d); kicker.wantSprint = d > 3; }
      kicker.lookAt = this.ball.pos;
    }
    if (this.stateT > 1.6 && !this.eventActive) {
      this.setState('play');
      this.freekick = null;
      if (kicker) {
        kicker.place(fk.x - kicker.dir * 0.45, fk.z, kicker.dir > 0 ? Math.PI / 2 : -Math.PI / 2);
        this.giveBall(kicker);
        if (this.humanTeams[fk.team]) this.setControl(fk.team, kicker);
      }
      audio.play('whistle');
    }
  }

  runQueuedEvent() {
    const ev = this.queue.shift();
    if (!ev) return;
    const team = ev.team;
    if (ev.type === 'fight') this.startFight(team);
    else this.momCalls(team);
    this.scandal[team] = 0;
  }

  // خناقة
  startFight(team) {
    const fouler = this.foulInfo?.fouler?.active ? this.foulInfo.fouler : this.teams[team].find((p) => p.active && !p.isGK);
    const victim = this.foulInfo?.victim?.active ? this.foulInfo.victim : this.nearestTo(fouler.pos, 1 - team, (p) => !p.isGK);
    if (!fouler || !victim) return;
    const center = tmp.copy(fouler.pos).add(victim.pos).multiplyScalar(0.5).clone();
    const extra = [this.nearestTo(center, team, (p) => p !== fouler && !p.isGK), this.nearestTo(center, 1 - team, (p) => p !== victim && !p.isGK)].filter(Boolean);
    const who = [fouler, victim, ...extra];
    this.eventActive = { type: 'fight', t: 0, who, center };
    this.setState('event');
    this.stats.fights++;
    this.focusOverride = center;
    this.rig.zoomTarget = 0.78;
    for (const p of who) {
      p.releasePull();
      if (this.owner === p) this.owner = null;
      p.setState('hidden');
      p.show(false);
    }
    this.fx.fight(center, 4);
    audio.play('fight');
    this.rig.shake(0.18, 3.5);
    this.ui.banner('خناقة!', `${fouler.name} و${victim.name} اتخانقوا`, 'fight');
    for (const s of this.npcs) if (s.cheer) s.cheer(4);
    const sp = this.npcs.filter((n) => n instanceof Spectator);
    if (sp.length) this.say(pick(sp), pick(LINES.fight), { color: '#fff' });
  }

  // أمه نادت عليه
  momCalls(team) {
    const cands = this.teams[team].filter((p) => p.active && !p.isGK);
    if (cands.length <= 1) { this.startFight(team); return; }
    const p = this.foulInfo?.fouler && cands.includes(this.foulInfo.fouler) ? this.foulInfo.fouler : pick(cands);
    this.stats.momCalls++;
    if (this.mom) {
      this.mom.call(p.name);
      this.focusOverride = this.mom.pos.clone().setY(this.mom.pos.y + 1.5);
      this.after(2.6, () => { this.focusOverride = null; });
    }
    else {
      const d = this.ctx.doors[0] || new THREE.Vector3(0, 0, this.ctx.bounds.minZ);
      this.say({ headPos: (o = new THREE.Vector3()) => o.set(d.x, 3.2, d.z) }, LINES.momCall(p.name), { color: '#ffe9f0', dur: 3.6 });
      audio.play('mom');
    }
    this.ui.banner('أمه نادت عليه!', `${p.name} لازم يطلع البيت`, 'mom');
    this.after(1.5, () => this.say(p, pick(LINES.momCallOut)));
    this.sendAway(p, 40, () => this.ui.toast(LINES.momBack(p.name)));
  }

  expel(p) {
    if (!p.active || p.expelled) return;
    p.expelled = true;
    this.headmaster?.scold(p);
    this.ui.banner('اتطرد!', LINES.sentOff(p.name) + ' (الناظر شافه)', 'red');
    this.sendAway(p, 45, () => { p.expelled = false; this.ui.toast(`${p.name} رجع الملعب`); });
  }

  sendAway(p, seconds, onBack) {
    p.releasePull();
    if (this.owner === p) this.loseBall(p, 1);
    if (p.ctrl) { const team = p.team; p.ctrl = null; p.setMarker(null); this.after(0, () => this.switchNext(team)); }
    const door = this.nearestDoor(p.pos);
    p.pending = null;
    p.anim.stop();
    p.setState('leaving');
    p.walkTo = door;
    p.onArrive = () => {
      p.setState('out');
      p.show(false);
      this.after(seconds, () => {
        p.place(door.x, door.z);
        p.show(true);
        p.setState('returning');
        p.walkTo = new THREE.Vector3(door.x * 0.8, 0, clamp(door.z, this.ctx.bounds.minZ + 1, this.ctx.bounds.maxZ - 1));
        p.onArrive = () => { p.setState('play'); if (onBack) onBack(); };
      });
    };
  }

  nearestDoor(pos) {
    let best = null, bd = Infinity;
    for (const d of this.ctx.doors) {
      const dd = dist2(d.x, d.z, pos.x, pos.z);
      if (dd < bd) { bd = dd; best = d; }
    }
    if (!best || bd > 25) best = new THREE.Vector3(pos.x, 0, this.ctx.bounds.maxZ + 2.5);
    return best.clone();
  }

  updateEvent(dt) {
    const ev = this.eventActive;
    if (!ev) { this.setState('play'); return; }
    ev.t += dt;
    if (ev.type === 'fight' && ev.t > 4.2) {
      this.ui.banner(pick(LINES.fightOver), '', 'small');
      for (const p of ev.who) {
        p.show(true);
        p.setState('dazed', 2.6);
        p.anim.play('dazed');
        const pp = p;
        this.fx.dizzy(() => pp.headPos(tmp.set(0, 0, 0)), 2.6);
        p.pos.x += randRange(-1, 1); p.pos.z += randRange(-1, 1);
      }
      this.focusOverride = null;
      this.rig.zoomTarget = 1;
      this.eventActive = null;
      this.setState('freekick');
      this.stateT = 0.3;
    } else if (ev.type === 'balcony') {
      if (ev.t > 4.2 && !this.ball.frozen) this.endBallEvent();
    } else if (ev.type === 'window') {
      if (ev.t > 2.6) {
        this.fleeFrom = null;
        this.focusOverride = null;
        this.eventActive = null;
        this.startFreekick(1 - ev.team, new THREE.Vector3(ev.pos.x * 0.7, 0, 0));
      }
    } else if (ev.type === 'roof') {
      this.updateRoofFetch(ev, dt);
    } else if (ev.type === 'argue') {
      this.updateArgue(ev);
    }
  }

  endBallEvent() {
    this.eventActive = null;
    this.focusOverride = null;
    this.setState('play');
  }

  updateAirIntents(dt) {
    const b = this.ball;
    for (const p of this.allPlayers) {
      if (!p.active) continue;
      if (!p.ctrl && !this.owner && b.pos.y > 0.4 && p.canAct && !p.isGK) {
        // الكمبيوتر: لو الكورة جاية عالية عليه
        const d = dist2(p.pos.x, p.pos.z, b.pos.x, b.pos.z);
        if (d < 1.1 && b.speed() > 3 && !p.airIntent) {
          const g = this.goalFor(p.team);
          const near = Math.abs(g.x - p.pos.x) < this.def.halfL * 0.6;
          p.airIntent = { kind: near ? 'shot' : 'pass', t: 0.3, x: 0, z: 0 };
        }
      }
      const it = p.airIntent;
      if (!it) continue;
      it.t -= dt;
      if (p.airPlay(it.kind, it.x, it.z) || it.t <= 0) p.airIntent = null;
    }
  }

  afterGoal() {
    for (const p of this.allPlayers) { p.stopCelebrate(); p.show(p.active); }
    this.recorder.reset();
    if (this.opts.rule.type === 'goals' && Math.max(...this.score) >= this.opts.rule.n) this.endMatch();
    else if (this.opts.rule.type === 'time' && this.clock <= 0) this.endMatch();
    else { this.placeKickoff(this.concededTeam); this.setState('kickoff'); }
  }

  // ======================================================== جون؟
  checkGoal() {
    const b = this.ball.pos;
    for (const g of this.ctx.goals) {
      if (this.checkArgue(g)) return;
      const inX = g.type === 'chalk' ? Math.abs(b.x) > Math.abs(g.x) - this.ball.r - 0.08 : Math.abs(b.x) > Math.abs(g.x) + (g.type === 'frame' ? 0.15 : 0.05);
      if (!inX || Math.sign(b.x) !== Math.sign(g.x)) continue;
      if (Math.abs(b.z) < g.hw - 0.02 && b.y < g.h) {
        const scoringTeam = g.side > 0 ? 0 : 1;
        this.goalScored(scoringTeam, g);
        return;
      }
      // طاشت جنب الجون
      if (this.lastShot && this.time - this.lastShot.t < 2.5 && this.lastShot.team === (g.side > 0 ? 0 : 1) && Math.abs(b.z) < g.hw + 2.5) {
        this.lastShot = null;
        this.say(this.nearestTo(b, g.side > 0 ? 0 : 1) || this.ball, pick(LINES.miss));
        audio.play('ooh');
      }
    }
  }

  // ======================================================== خناقة القوانين
  // الجون من غير عارضة: لو الكورة عدّت قريب من "فوق" أو لمست الطوبة، العيال بتتخانق والكبير يحكم
  checkArgue(g) {
    if (this.pens || this.opts.demo || g.type === 'frame' || this.time < (this.argueAt || 0)) return false;
    const b = this.ball.pos;
    const gx = Math.abs(g.x) + 0.05;
    if (Math.sign(b.x) !== Math.sign(g.x) || Math.abs(b.x) < gx || Math.abs(b.x) > gx + 0.7) return false;
    const az = Math.abs(b.z);
    const high = az < g.hw && b.y >= g.h * 0.82 && b.y < g.h * 1.45;
    const post = b.y < g.h && az > g.hw - 0.22 && az < g.hw + 0.18;
    if (!high && !post) return false;
    this.argueAt = this.time + 20;
    if (!chance(0.7)) return false; // ساعات بتعدّي من غير كلام
    const team = g.side > 0 ? 0 : 1;
    // كل ما كانت أقرب للجون، كل ما الكبير يميل إنها جون
    const k = high ? 1 - (b.y - g.h * 0.82) / (g.h * 0.63) : b.y < g.h && az < g.hw ? 0.75 : 0.3;
    this.startArgue(team, g, high ? 'high' : 'post', clamp(k, 0.15, 0.85));
    return true;
  }

  startArgue(team, g, kind, k) {
    const b = this.ball;
    b.frozen = true;
    b.vel.set(0, 0, 0);
    this.owner = null;
    this.pendingPass = null;
    for (const p of this.allPlayers) p.releasePull();
    this.setState('event');
    const spot = new THREE.Vector3(g.x * 0.9, 0, 0);
    this.eventActive = { type: 'argue', t: 0, team, g, kind, k, spot, said: 0 };
    this.focusOverride = spot.clone().setY(1);
    this.rig.zoomTarget = 0.8;
    audio.play('whistle');
    this.ui.banner(kind === 'high' ? 'عالية ولا جون؟' : 'خبطت في الطوبة؟', 'العيال اتخانقوا على القانون', 'small');
    // أقرب اتنين من كل فريق بيشاوروا ويزعقوا
    this.eventActive.who = [0, 1].flatMap((t) => this.teams[t].filter((p) => p.active && p.state !== 'fallen')
      .sort((a, c) => a.pos.distanceToSquared(spot) - c.pos.distanceToSquared(spot)).slice(0, 2));
    for (const p of this.eventActive.who) { p.faceTo(spot); p.anim.play('point'); }
  }

  updateArgue(ev) {
    const pro = ev.kind === 'high' ? LINES.argueGoalHigh : LINES.argueGoalPost;
    const con = ev.kind === 'high' ? LINES.argueHigh : LINES.arguePost;
    // زعيق بالدور
    if (ev.t > 0.5 + ev.said * 0.75 && ev.said < 4) {
      const who = ev.who.filter((p) => p.team === (ev.said % 2 === 0 ? ev.team : 1 - ev.team));
      const p = who[Math.floor(ev.said / 2) % Math.max(1, who.length)];
      if (p) { this.say(p, pick(ev.said % 2 === 0 ? pro : con)); p.anim.play(ev.said % 2 ? 'point' : 'wave'); }
      ev.said++;
      if (p) this.addScandal(p.team, 4, true);
    }
    // الكبير: أكبر واحد قاعد بيتفرج
    if (ev.t > 3.8 && !ev.ruled) {
      ev.ruled = true;
      ev.good = Math.random() < ev.k;
      const big = this.npcs.filter((n) => n.cheer).sort((a, c) => a.pos.distanceToSquared(ev.spot) - c.pos.distanceToSquared(ev.spot))[0];
      const line = pick(ev.good ? LINES.bigGood : LINES.bigBad);
      if (big) { this.say(big, 'الكبير: ' + line, { big: true, color: '#ffd23f' }); big.cheer(1.5); }
      this.ui.banner(ev.good ? 'الكبير قال: جون!' : 'الكبير قال: مش جون', big ? '' : line, ev.good ? 'goal' : 'small', ev.team);
      for (const p of ev.who) p.anim.play((p.team === ev.team) === ev.good ? 'cheer' : 'sad');
    }
    if (ev.t > 5.4) {
      this.eventActive = null;
      this.focusOverride = null;
      this.rig.zoomTarget = 1;
      this.ball.frozen = false;
      if (ev.good) { this.ball.place(ev.g.x + Math.sign(ev.g.x) * 0.6, 0); this.goalScored(ev.team, ev.g); return; }
      // ضربة مرمى: الحارس ياخدها
      const gk = this.goalkeeper(1 - ev.team) || this.teams[1 - ev.team].find((p) => p.active);
      const sx = Math.sign(ev.g.x);
      gk.place(ev.g.x - sx * 1.6, 0, sx > 0 ? -Math.PI / 2 : Math.PI / 2);
      gk.setState('play');
      this.ball.place(gk.pos.x - sx * 0.4, gk.pos.z);
      this.giveBall(gk);
      this.setState('play');
    }
  }

  goalScored(team, g) {
    this.score[team]++;
    this.lastGoal = g;
    this.replayed = false;
    this.concededTeam = 1 - team;
    const lt = this.ball.lastTouch;
    const scorer = lt && lt.team === team ? lt : null;
    const own = lt && lt.team !== team;
    if (scorer) scorer.stats.goals++;
    this.stats.goals.push({ team, name: scorer ? scorer.name : lt ? lt.name : '؟', own, t: this.clock });
    this.scorer = scorer || this.teams[team].find((p) => p.active && !p.isGK) || null;
    this.owner = null;
    this.pendingPass = null;
    this.setState('goal');
    for (const p of this.allPlayers) { p.releasePull(); }
    const lines = { bricks: LINES.goalBricks, slippers: LINES.goalSlippers, chalk: LINES.goalChalk, tires: LINES.goalTires, crates: LINES.goalCrates, bags: LINES.goalBags }[g.type] || [];
    this.ui.banner(pick(LINES.goal), own ? `جون في نفسه! (${lt.name})` : `${this.scorer ? this.scorer.name : ''} ${lines.length ? '• ' + pick(lines) : ''}`, 'goal', team);
    audio.play('cheer');
    this.buzz(this.humanTeams[team] ? [120, 60, 120, 60, 240] : [200]);
    audio.play('whistle');
    this.rig.zoomTarget = 0.82;
    this.rig.shake(0.2, 0.5);
    this.slowmo(0.3, 0.9);
    this.after(0.5, () => { this.ball.vel.multiplyScalar(0.2); });
    for (const p of this.allPlayers) {
      if (!p.active || p.state === 'fallen') continue;
      if (p === this.scorer) p.celebrate('airplane');
      else if (p.team === team) p.celebrate('jump');
      else p.celebrate('sad');
    }
    for (const s of this.npcs) if (s.cheer) s.cheer(3.5);
    this.game.onEvent?.('goal', team);
  }

  // ======================================================== البلكونة والإزاز والسطح
  checkSpecialBall() {
    const b = this.ball;
    if (this.mom) {
      for (const bal of this.ctx.balconies) {
        const p = b.pos;
        if (p.x > bal.min.x && p.x < bal.max.x && p.y > bal.min.y && p.y < bal.max.y && p.z > bal.min.z && p.z < bal.max.z && this.mom.balc === bal) {
          this.ballOnBalcony();
          return;
        }
      }
    }
    if (this.ctx.ballOut && this.ctx.ballOut(b.pos) && b.pos.y > this.ctx.extras.parapet.h * 0.6) this.ballOffRoof();
    if (b.pos.y < -2) this.ballOffRoof();
  }

  ballOnBalcony() {
    const b = this.ball;
    b.frozen = true;
    b.vel.set(0, 0, 0);
    this.owner = null;
    this.setState('event');
    this.eventActive = { type: 'balcony', t: 0 };
    this.focusOverride = this.mom.pos.clone().setY(this.mom.pos.y + 1.5);
    this.rig.zoomTarget = 0.85;
    this.ui.banner(pick(LINES.balcony), '', 'small');
    audio.play('ooh');
    this.after(0.7, () => this.mom.catchBall());
  }

  onBalconyReturn() {
    this.focusOverride = null;
    this.rig.zoomTarget = 1;
    this.after(0.3, () => { if (this.state === 'event') this.endBallEvent(); });
  }

  onBallHit(c, s, p) {
    if (c.tag === 'post') { audio.play(c.metal ? 'metal' : 'brick'); if (s > 6) this.say(this.ball.lastTouch || this.ball, c.metal ? 'العارضة!' : 'الطوبة!'); }
    else if (c.tag === 'wall' || c.tag === 'obj' || c.tag === 'balconyFloor') audio.play('wall', s);
    else if (c.tag === 'toktok' && this.toktok) {
      audio.play('metal');
      const tk = this.toktok;
      this.say({ headPos: (o = new THREE.Vector3()) => o.set(tk.pos.x, 2.6, tk.pos.z) }, 'حاسب التوكتوك يا عم!');
    }
    else if (c.tag === 'sheep') { const sh = this.animals.find((a) => a.hit); if (sh) sh.hit(); }
    // إزاز؟
    if ((c.tag === 'wall') && s > 9.5 && this.state === 'play') {
      for (const w of this.ctx.windows) {
        if (w.broken) continue;
        if (Math.abs(p.z - w.z) > 0.4 || p.x < w.x0 - 0.05 || p.x > w.x1 + 0.05 || p.y < w.y0 - 0.05 || p.y > w.y1 + 0.05) continue;
        this.breakWindow(w);
        break;
      }
    }
  }

  breakWindow(w) {
    w.broken = true;
    const m = w.mesh.material;
    m.map = crackedGlassTexture();
    m.color.set('#ffffff');
    m.emissiveIntensity = 0;
    m.needsUpdate = true;
    this.fx.shatter(tmp.set((w.x0 + w.x1) / 2, (w.y0 + w.y1) / 2, w.z + w.face * 0.1), w.face);
    audio.play('glass');
    this.buzz([40, 30, 40, 30, 80]);
    this.rig.shake(0.3, 0.5);
    this.stats.windows++;
    const team = this.ball.lastKickTeam >= 0 ? this.ball.lastKickTeam : 0;
    this.addScandal(team, TUNE.scandalWindow);
    const wp = new THREE.Vector3((w.x0 + w.x1) / 2, w.y1 + 0.6, w.z + w.face * 0.3);
    this.after(0.4, () => this.say({ headPos: (o = new THREE.Vector3()) => o.copy(wp) }, pick(LINES.windowBreak), { color: '#ffe0e0', dur: 3 }));
    this.ui.banner('الإزاز اتكسر!', pick(LINES.run), 'red');
    this.owner = null;
    this.setState('event');
    this.eventActive = { type: 'window', t: 0, team, pos: wp };
    this.fleeFrom = wp;
    for (const p of this.allPlayers) if (p.active && chance(0.5)) this.after(randRange(0.2, 0.9), () => this.say(p, pick(LINES.run)));
  }

  ballOffRoof() {
    if (this.state !== 'play') return;
    const b = this.ball;
    const team = b.lastKickTeam >= 0 ? b.lastKickTeam : 0;
    b.frozen = true;
    b.mesh.visible = false;
    b.blob.visible = false;
    b.place(0, 0, -50);
    this.owner = null;
    this.setState('event');
    const fetcher = this.nearestTo(this.ctx.doors[0] || new THREE.Vector3(), team, (p) => !p.isGK && p.state === 'play') || this.teams[team][1];
    this.eventActive = { type: 'roof', t: 0, team, fetcher, phase: 0 };
    this.ui.banner(pick(LINES.roofDrop), `${fetcher.name} نازل يجيبها`, 'small');
    audio.play('ooh');
    if (fetcher.ctrl) { fetcher.ctrl = null; fetcher.setMarker(null); this.after(0, () => this.switchNext(team)); }
    const door = this.nearestDoor(fetcher.pos);
    fetcher.setState('fetch');
    fetcher.walkTo = door;
    fetcher.onArrive = () => { fetcher.setState('fetched'); fetcher.show(false); };
    this.eventActive.door = door;
  }

  updateRoofFetch(ev) {
    const f = ev.fetcher;
    if (ev.phase === 0 && f.state === 'fetched') { ev.phase = 1; ev.t = 0; }
    if (ev.phase === 1 && ev.t > 3) {
      ev.phase = 2;
      f.place(ev.door.x, ev.door.z);
      f.show(true);
      f.setState('play');
      this.say(f, pick(LINES.roofBack));
      const b = this.ball;
      b.mesh.visible = true;
      b.blob.visible = true;
      b.frozen = false;
      this.eventActive = null;
      this.startFreekick(1 - ev.team, new THREE.Vector3(ev.door.x + 3, 0, ev.door.z - 1));
    }
  }

  onHeadmaster(visible) {
    this.headmasterWatching = visible;
    if (visible) {
      this.ui.banner(pick(LINES.headmaster), 'أي فاول دلوقتي = طرد!', 'warn');
      audio.play('whistle');
    }
    this.ui.headmaster(visible);
  }

  // ======================================================== الناس
  updateNPCs(dt) {
    for (const n of this.npcs) n.update(dt);
    // معدّيين
    this.walkerT -= dt;
    if (this.walkerT <= 0 && this.ctx.walkerPaths.length && this.walkers.length < 3) {
      this.walkerT = randRange(7, 16);
      this.walkers.push(new Walker(this, pick(this.ctx.walkerPaths)));
    }
    for (let i = this.walkers.length - 1; i >= 0; i--) {
      const w = this.walkers[i];
      w.update(dt);
      if (w.done) { w.remove(); this.walkers.splice(i, 1); }
    }
    // توكتوك
    this.toktokT -= dt;
    if (this.toktokT <= 0 && !this.toktok && this.state === 'play' && this.ctx.extras.toktok) {
      this.toktok = new Toktok(this, this.ctx.extras.toktok);
      this.ui.banner(pick(LINES.toktok), '', 'warn');
      audio.play('horn');
      audio.toktokMusic(true);
    }
    if (this.toktok) {
      this.toktok.update(dt);
      // اللعيبة توسع
      for (const p of this.allPlayers) {
        if (!p.active || p.ctrl) continue;
        const dz = p.pos.z - this.toktok.pos.z, ax = (p.pos.x - this.toktok.pos.x) * this.toktok.dir;
        if (ax > -2 && ax < 6 && Math.abs(dz) < 2.2) p.want.y += Math.sign(dz || 1) * 1.2;
      }
      if (this.toktok.done) { this.toktok.remove(); this.toktok = null; this.toktokT = randRange(60, 100); audio.toktokMusic(false); }
    }
    // بياع العيش
    this.bikeT -= dt;
    if (this.bikeT <= 0 && !this.bike) this.bike = new BreadBike(this, this.ctx.extras.bike.z);
    if (this.bike) {
      this.bike.update(dt);
      if (this.bike.done) { this.bike.remove(); this.bike = null; this.bikeT = randRange(35, 60); }
    }
  }

  onFootstep(p, run) {
    if ((this.opts.mapId === 'yard' || this.opts.mapId === 'beach') && run > 0.6 && Math.random() < 0.35) {
      this.fx.puff(tmp.set(p.pos.x, 0.05, p.pos.z), { n: 1, size: 0.35, life: 0.5, up: 0.2, opacity: 0.45 });
    }
  }

  say(who, text, opts = {}) {
    this.ui.bubble(who, text, opts);
  }

  // ======================================================== ضربات الجزاء
  startPens() {
    const g = this.ctx.goals.find((q) => q.side > 0);
    const spot = { bricks: 6, slippers: 5, chalk: 6.5, frame: 7.5 }[g.type] || 6;
    this.pens = { goal: g, spotX: g.x - Math.sign(g.x) * spot, kicks: [[], []], turn: this.kickTeam === 0 ? 1 : 0, phase: 'setup', t: 0, aim: 0, charge: 0 };
    this.setState('pens');
    this.owner = null;
    for (const p of this.allPlayers) { p.releasePull(); p.stopCelebrate(); if (!p.active && p.state !== 'out') continue; p.show(true); p.setState('play'); }
    audio.play('whistle', 2);
    this.ui.banner('ضربات جزاء!', 'التعادل بيتحسم من علامة الجزاء', 'warn');
    // علامة الجزاء وعلامة النيشان
    const mk = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), new THREE.MeshBasicMaterial({ color: '#f4f2ea' }));
    mk.rotation.x = -Math.PI / 2;
    mk.position.set(this.pens.spotX, 0.012, 0);
    this.scene.add(mk);
    this.pens.aimMark = new THREE.Mesh(new THREE.RingGeometry(0.11, 0.16, 24), new THREE.MeshBasicMaterial({ color: '#ffd23f', depthTest: false, transparent: true, opacity: 0.9 }));
    this.pens.aimMark.renderOrder = 12;
    this.pens.aimMark.rotation.y = -Math.PI / 2 * Math.sign(g.x);
    this.pens.aimMark.visible = false;
    this.scene.add(this.pens.aimMark);
    this.ui.pens(this.pens, this);
  }

  pensSetupKick() {
    const P = this.pens, g = P.goal, dir = Math.sign(g.x);
    const kt = P.turn, gt = 1 - kt;
    const round = P.kicks[kt].length;
    const outfield = this.teams[kt].filter((p) => !p.isGK);
    P.kicker = outfield[(round + 1) % outfield.length] || this.teams[kt][1];
    P.keeper = this.teams[gt].find((p) => p.isGK) || this.teams[gt][0];
    // الباقيين على خط النص
    this.allPlayers.forEach((p, i) => {
      if (p === P.kicker || p === P.keeper) return;
      p.place(-dir * 1.5 + (p.team ? -1 : 1) * 0.6, -this.def.halfW * 0.7 + (i % 8) * (this.def.halfW * 1.4 / 7), dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      p.want.set(0, 0);
    });
    P.kicker.place(P.spotX - dir * 0.75, 0, dir > 0 ? Math.PI / 2 : -Math.PI / 2);
    P.keeper.place(g.x - dir * 0.5, 0, dir > 0 ? -Math.PI / 2 : Math.PI / 2);
    P.keeper.setState('play');
    P.keeper.anim.play('ready');
    this.owner = null;
    this.ball.place(P.spotX, 0);
    this.ball.vel.set(0, 0, 0);
    this.giveBall(P.kicker);
    P.kicker.cool.steal = 99;
    P.phase = 'aim';
    P.t = 0;
    P.aim = 0;
    P.charge = 0;
    P.lift = 0.3;
    P.result = null;
    P.dove = false;
    const human = this.controllers[kt];
    P.humanKick = !!human;
    P.humanKeep = !!this.controllers[gt];
    P.aiAim = (chance(0.15) ? 0 : (chance(0.5) ? 1 : -1) * randRange(0.45, 0.95));
    P.aiPower = randRange(0.55, 0.85);
    P.aimMark.visible = P.humanKick;
    this.focusOverride = new THREE.Vector3((P.spotX + g.x) / 2, 0, 0);
    this.rig.zoomTarget = 0.62;
    this.say(P.kicker, P.humanKick ? 'يلا بينا..' : 'هجيبها!');
    this.ui.pens(P, this);
    if (P.humanKick || P.humanKeep) this.ui.toast(P.humanKick ? 'وجّه بالاستيك ودوس شوطة (كل ما تفضل داسس أقوى)' : 'إنت الحارس: الاستيك ساعة الشوطة بيحدد هتنط فين');
  }

  updatePens(dt) {
    const P = this.pens;
    P.t += dt;
    const g = P.goal, dir = Math.sign(g.x);
    if (P.phase === 'setup') { if (P.t > (P.kicks[0].length + P.kicks[1].length === 0 ? 2.2 : 1.2)) this.pensSetupKick(); return; }
    const k = P.kicker, gk = P.keeper;
    if (P.phase === 'aim') {
      gk.lookAt = this.ball.pos;
      const kc = this.controllers[k.team];
      if (P.humanKick) {
        P.aim = clamp(P.aim + kc.axis.z * dt * 1.6, -1, 1);
        if (kc.b.shoot.down) { P.charge = Math.min(1, kc.b.shoot.t / 0.9); this.ui.power(P.charge); }
        P.aimMark.position.set(g.x - dir * 0.05, 0.25 + P.charge * g.h * 0.7, P.aim * g.hw * 0.85);
        if (kc.b.shoot.released || P.t > 8) this.pensKick(Math.max(0.35, P.charge), P.aim);
      } else if (P.t > 1.4) this.pensKick(P.aiPower, P.aiAim);
      return;
    }
    if (P.phase === 'kick') {
      // الحارس بينط ساعة ما الكورة تتشاط
      if (!P.dove && !this.owner) {
        P.dove = true;
        let side = 0;
        const gc = this.controllers[gk.team];
        if (P.humanKeep) side = Math.abs(gc.axis.z) > 0.3 ? Math.sign(gc.axis.z) : 0;
        else {
          const read = chance(this.aiSkill(gk) * 0.4);
          side = read ? Math.sign(this.ball.vel.z) : (chance(0.2) ? 0 : (chance(0.5) ? 1 : -1));
        }
        // يمين الحارس = (-cos f, sin f) وهو باصص ناحية الكورة
        if (side !== 0) {
          const rightZ = Math.sin(gk.facing);
          gk.dive(Math.sign(side * rightZ) || 1, 5.5);
        }
      }
      // صدّ؟
      if (!P.result && P.dove) {
        const b = this.ball.pos;
        gk.char.J.lHand.getWorldPosition(tmp);
        gk.char.J.rHand.getWorldPosition(tmp2);
        const near = Math.min(tmp.distanceTo(b), tmp2.distanceTo(b), dist2(gk.pos.x, gk.pos.z, b.x, b.z) + Math.abs(b.y - 0.9));
        if (near < 0.42 && this.ball.speed() > 2) {
          P.result = 'save';
          this.ball.vel.x *= -0.35; this.ball.vel.z = this.ball.vel.z * 0.4 + randRange(-3, 3); this.ball.vel.y = Math.abs(this.ball.vel.y) * 0.4 + 2;
          audio.play('save');
          this.say(gk, pick(LINES.save), { color: '#ffd23f', big: true });
        }
      }
      if (!P.result) {
        const b = this.ball.pos;
        const past = (b.x - g.x) * dir > (g.type === 'chalk' ? -this.ball.r - 0.08 : 0.05);
        if (past) P.result = Math.abs(b.z) < g.hw - 0.02 && b.y < g.h ? 'goal' : 'miss';
        else if (P.t > 2.6 || (this.ball.speed() < 0.6 && P.t > 0.8)) P.result = 'miss';
      }
      if (P.result && !P.shown) {
        P.shown = true;
        const scored = P.result === 'goal';
        P.kicks[k.team].push(scored);
        if (scored) { audio.play('cheer'); this.ui.banner('جووون!', `${k.name} سجّلها`, 'goal', k.team); this.buzz([100, 50, 150]); }
        else { audio.play('ooh'); this.ui.banner(P.result === 'save' ? 'صدّها!' : 'طاشت!', P.result === 'save' ? gk.name : k.name, 'small'); }
        k.anim.play(scored ? 'airplane' : 'sad');
        this.ui.pens(P, this);
        P.after = 0;
      }
      if (P.shown) {
        P.after += dt;
        if (P.after > 2.2) {
          k.anim.stop('airplane'); k.anim.stop('sad');
          P.shown = false;
          const done = this.pensDecided();
          if (done !== null) return this.finishPens(done);
          P.turn = 1 - P.turn;
          P.phase = 'setup';
          P.t = 1;
        }
      }
    }
  }

  pensKick(power, aim) {
    const P = this.pens;
    P.aimMark.visible = false;
    this.ui.power(0);
    const ok = P.kicker.shoot(power, aim, power * 0.4);
    if (!ok) { this.giveBall(P.kicker); return; }
    P.phase = 'kick';
    P.t = 0;
  }

  // مين كسب؟ null = لسه
  pensDecided() {
    const [a, b] = this.pens.kicks;
    const sa = a.filter(Boolean).length, sb = b.filter(Boolean).length;
    if (a.length <= 5 && b.length <= 5) {
      const ra = 5 - a.length, rb = 5 - b.length;
      if (sa + ra < sb) return 1;
      if (sb + rb < sa) return 0;
      if (a.length === 5 && b.length === 5 && sa !== sb) return sa > sb ? 0 : 1;
      return null;
    }
    // موت مفاجئ
    if (a.length === b.length && sa !== sb) return sa > sb ? 0 : 1;
    return null;
  }

  finishPens(w) {
    const [a, b] = this.pens.kicks;
    this.pensResult = [a.filter(Boolean).length, b.filter(Boolean).length];
    this.pensWinner = w;
    this.pensDone = true;
    this.scene.remove(this.pens.aimMark);
    this.pens = null;
    this.focusOverride = null;
    this.rig.zoomTarget = 1;
    this.state = 'postpens';
    this.endMatch();
  }

  // ======================================================== النهاية
  endMatch() {
    if (this.state === 'end' || this.state === 'pens') return;
    if (this.score[0] === this.score[1] && !this.opts.demo && !this.pensDone) { this.startPens(); return; }
    this.setState('end');
    this.owner = null;
    audio.play('whistle', 3);
    const [a, b] = this.score;
    const winner = a > b ? 0 : b > a ? 1 : this.pensWinner ?? -1;
    this.winner = winner;
    for (const p of this.allPlayers) {
      p.releasePull();
      if (!p.active || p.state === 'fallen') continue;
      p.setState('celebrate');
      if (winner === -1) continue;
      p.anim.play(p.team === winner ? 'jump' : 'sad');
    }
    this.scorer = null;
    const pensTxt = this.pensResult ? ` (ضربات جزاء ${arNum(this.pensResult[0])} - ${arNum(this.pensResult[1])})` : '';
    this.ui.banner('خلص الماتش!', `${this.teamDef(0).short} ${arNum(this.score[0])} • ${this.teamDef(1).short} ${arNum(this.score[1])}${pensTxt}`, 'end');
    this.ui.pens(null);
    audio.toktokMusic(false);
    if (this.opts.bet && winner !== -1) {
      const p = this.teams[winner].find((q) => q.active && !q.isGK);
      if (p) this.after(1.2, () => this.say(p, pick(winner === 0 ? LINES.betWin : LINES.betLose) + ' ' + this.opts.bet.icon, { dur: 2.4 }));
    }
  }

  dispose() {
    this.disposed = true;
    audio.toktokMusic(false);
    audio.stopAmbience();
    this.fx.clear();
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    this.ui.matchEnd();
  }
}
