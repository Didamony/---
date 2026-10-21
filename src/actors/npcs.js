// الناس اللي رايحة جاية، التوكتوك، بياع العيش، الأم في البلكونة، الناظر، والقطة والخروف والحمام
import * as THREE from 'three';
import { buildCharacter, Animator, mat } from './character.js';
import { civilianLook } from './looks.js';
import { toktokModel, box, cyl } from '../world/props.js';
import { randRange, pick, chance, dampAngle, clamp } from '../core/util.js';
import { LINES } from '../game/config.js';

let seedCounter = 100;

class Human {
  constructor(m, look) {
    this.m = m;
    this.char = buildCharacter(look);
    this.anim = new Animator(this.char);
    this.root = this.char.root;
    m.scene.add(this.root);
    this.pos = new THREE.Vector3();
    this.facing = 0;
    this.radius = 0.32;
    this.height = 1.75 * this.char.scale;
  }
  headPos(out = new THREE.Vector3()) { return out.set(this.pos.x, this.height + 0.35, this.pos.z); }
  sync() { this.root.position.copy(this.pos); this.root.rotation.y = this.facing; }
  remove() { this.m.scene.remove(this.root); }
}

// ------------------------------------------------------------------ واحد معدّي
export class Walker extends Human {
  constructor(m, path) {
    const kind = pick(['man', 'woman', 'old', 'man', 'woman', 'kid']);
    super(m, civilianLook(kind, seedCounter++));
    this.kind = kind;
    if (kind === 'old' || this.char.look.top.type === 'galabeya') this.anim.ampScale = 0.55;
    if (kind === 'woman') this.anim.ampScale = 0.6;
    this.speed = kind === 'old' ? 0.95 : kind === 'kid' ? 1.9 : randRange(1.15, 1.45);
    if (path.cross) {
      const b = m.ctx.bounds;
      const x = randRange(b.minX * 0.7, b.maxX * 0.7);
      const flip = chance(0.5);
      this.a = new THREE.Vector3(x, 0, flip ? path.z0 : path.z1);
      this.b = new THREE.Vector3(x + randRange(-3, 3), 0, flip ? path.z1 : path.z0);
    } else {
      const flip = chance(0.5);
      this.a = (flip ? path.b : path.a).clone();
      this.b = (flip ? path.a : path.b).clone();
    }
    this.pos.copy(this.a);
    this.state = 'walk';
    this.t = 0;
    this.done = false;
    this.carry = null;
    if (kind === 'woman' && chance(0.6)) {
      const bag = box(0.28, 0.32, 0.18, mat('#f0f0f0'), 0, -0.2, 0);
      this.char.J.rHand.add(bag);
    }
    if (kind === 'man' && chance(0.4)) {
      const paper = box(0.25, 0.32, 0.03, mat('#dcd8cc'), 0, -0.1, 0.05);
      this.char.J.lHand.add(paper);
    }
  }

  hitByBall(speed) {
    if (this.state !== 'walk' || speed < 2.5) return;
    this.state = 'react';
    this.t = 0;
    this.facing = Math.atan2(this.m.ball.pos.x - this.pos.x, this.m.ball.pos.z - this.pos.z);
    this.anim.play('point');
    this.m.say(this, pick(LINES.walkerHit), { color: '#fff' });
    this.m.audio.play('ouch');
  }

  update(dt) {
    this.t += dt;
    let sp = 0;
    if (this.state === 'walk') {
      const dx = this.b.x - this.pos.x, dz = this.b.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 0.3) { this.done = true; return; }
      // يستنى لو لعيب قدامه على طول
      let blocked = false;
      for (const p of this.m.allPlayers) {
        if (!p.active) continue;
        const px = p.pos.x - this.pos.x, pz = p.pos.z - this.pos.z;
        if (Math.hypot(px, pz) < 0.75 && (px * dx + pz * dz) > 0) { blocked = true; break; }
      }
      sp = blocked ? 0 : this.speed;
      this.pos.x += (dx / d) * sp * dt;
      this.pos.z += (dz / d) * sp * dt;
      this.facing = dampAngle(this.facing, Math.atan2(dx, dz), 6, dt);
    } else if (this.state === 'react') {
      if (this.t > 1.8) { this.state = 'walk'; this.anim.stop('point'); }
    }
    this.anim.update(dt, sp);
    this.sync();
  }
}

// ------------------------------------------------------------------ بياع العيش على العجلة
export class BreadBike extends Human {
  constructor(m, z) {
    super(m, civilianLook('baker', seedCounter++));
    this.anim.mode = 'ride';
    const b = m.ctx.bounds;
    this.dir = chance(0.5) ? 1 : -1;
    this.pos.set(this.dir > 0 ? b.minX - 3 : b.maxX + 3, 0, z);
    this.end = this.dir > 0 ? b.maxX + 3 : b.minX - 3;
    this.facing = this.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    this.speed = 3.4;
    this.radius = 0.55;
    this.done = false;
    // العجلة
    const bike = new THREE.Group();
    const tm = mat('#1b1b1b', 0.6);
    for (const zz of [-0.55, 0.55]) {
      const w = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.035, 6, 20), tm);
      w.rotation.y = Math.PI / 2;
      w.position.set(0, 0.35, zz);
      w.castShadow = true;
      bike.add(w);
    }
    const fm = mat('#2a5a8a', 0.5, { metalness: 0.5 });
    const f1 = box(0.05, 0.05, 1.0, fm, 0, 0.62, 0, bike);
    f1.rotation.x = 0.1;
    box(0.05, 0.5, 0.05, fm, 0, 0.6, -0.2, bike);
    box(0.5, 0.04, 0.04, fm, 0, 1.0, 0.45, bike);
    box(0.18, 0.05, 0.25, mat('#222'), 0, 0.88, -0.25, bike);
    this.bike = bike;
    this.root.add(bike);
    this.char.J.hips.position.z = -0.25;
    // مشنة العيش على الراس
    const tray = new THREE.Group();
    box(1.1, 0.06, 0.55, mat('#8b5a2b'), 0, 0, 0, tray);
    for (let i = 0; i < 10; i++) {
      const br = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), mat('#d8a860'));
      br.scale.set(1, 0.4, 1);
      br.position.set(-0.42 + (i % 5) * 0.21, 0.06, i < 5 ? -0.12 : 0.12);
      tray.add(br);
    }
    tray.position.set(0, 0.32, 0);
    this.char.J.head.add(tray);
    this.char.J.head.scale.multiplyScalar(1);
    this.rang = false;
  }
  hitByBall() { this.m.say(this, 'حاسب العيش يا ابني!'); }
  update(dt) {
    this.pos.x += this.dir * this.speed * dt;
    if ((this.dir > 0 && this.pos.x > this.end) || (this.dir < 0 && this.pos.x < this.end)) this.done = true;
    if (!this.rang && Math.abs(this.pos.x - this.m.ball.pos.x) < 8) { this.rang = true; this.m.audio.play('bell'); }
    this.anim.update(dt, this.speed);
    this.sync();
  }
}

// ------------------------------------------------------------------ توكتوك
export class Toktok {
  constructor(m, cfg) {
    this.m = m;
    const { grp, wheels, disco } = toktokModel();
    this.grp = grp; this.wheels = wheels; this.disco = disco;
    m.scene.add(grp);
    this.dir = chance(0.5) ? 1 : -1;
    this.pos = new THREE.Vector3(this.dir > 0 ? cfg.from : cfg.to, 0, cfg.z);
    this.end = this.dir > 0 ? cfg.to : cfg.from;
    this.speed = 5.2;
    this.grp.rotation.y = this.dir > 0 ? 0 : Math.PI;
    this.done = false;
    this.t = 0;
    this.honked = 0;
    this.collider = { min: new THREE.Vector3(), max: new THREE.Vector3(), tag: 'toktok', solid: true };
    // كشاف التوكتوك بالليل
    if (m.night) {
      const sl = new THREE.SpotLight('#fff0c0', 120, 18, 0.5, 0.5, 1.5);
      sl.position.set(1.45, 0.95, 0);
      sl.target.position.set(8, 0, 0);
      grp.add(sl, sl.target);
    }
    this.update(0);
  }
  update(dt) {
    this.t += dt;
    // يهدّي لو فيه حد قدامه
    let slow = 1;
    for (const p of this.m.allPlayers) {
      if (!p.active) continue;
      const ahead = (p.pos.x - this.pos.x) * this.dir;
      if (ahead > 0 && ahead < 3.5 && Math.abs(p.pos.z - this.pos.z) < 1.3) slow = Math.min(slow, 0.25);
    }
    this.vx = this.dir * this.speed * slow;
    this.pos.x += this.vx * dt;
    this.honked -= dt;
    if (slow < 1 && this.honked <= 0) { this.m.audio.play('horn'); this.honked = 1.4; }
    if ((this.dir > 0 && this.pos.x > this.end) || (this.dir < 0 && this.pos.x < this.end)) this.done = true;
    this.grp.position.copy(this.pos);
    this.grp.position.y = Math.abs(Math.sin(this.t * 14)) * 0.02;
    for (const w of this.wheels) w.rotation.y += this.vx * dt * 3;
    this.disco.forEach((d, i) => { d.visible = ((Math.floor(this.t * 6) + i) % 2) === 0; });
    const c = this.collider;
    c.min.set(this.pos.x - 1.6, 0, this.pos.z - 0.7);
    c.max.set(this.pos.x + 1.6, 2.1, this.pos.z + 0.7);
  }
  remove() { this.m.scene.remove(this.grp); }
}

// ------------------------------------------------------------------ متفرج قاعد
export class Spectator extends Human {
  constructor(m, spot) {
    super(m, civilianLook(spot.kind, seedCounter++));
    this.pos.copy(spot.pos);
    this.facing = spot.rotY;
    this.anim.play('sit');
    this.cheerT = 0;
    this.sync();
    this.anim.update(1, 0);
  }
  cheer(t = 3) {
    this.cheerT = t;
    this.anim.play('sitCheer');
  }
  update(dt) {
    if (this.cheerT > 0) {
      this.cheerT -= dt;
      if (this.cheerT <= 0) this.anim.play('sit');
    }
    this.anim.update(dt, 0);
    this.sync();
  }
}

// ------------------------------------------------------------------ الأم في البلكونة
export class Mom extends Human {
  constructor(m, balc) {
    super(m, civilianLook('mom', 7));
    this.balc = balc;
    this.pos.copy(balc.momPos);
    this.facing = balc.face > 0 ? 0 : Math.PI;
    this.root.visible = false;
    this.t = 0;
    this.mode = null;
    this.anim.ampScale = 0.6;
    this.sync();
  }
  headPos(out = new THREE.Vector3()) { return out.set(this.pos.x, this.pos.y + 2.1, this.pos.z); }
  call(name) {
    this.root.visible = true;
    this.mode = 'call';
    this.t = 0;
    this.anim.play('wave');
    this.m.say(this, LINES.momCall(name), { color: '#ffe9f0', dur: 3.6 });
    this.m.audio.play('mom');
  }
  catchBall() {
    this.root.visible = true;
    this.mode = 'ball';
    this.t = 0;
    this.anim.stop();
    this.anim.play('holdBall');
  }
  update(dt) {
    this.t += dt;
    if (this.mode === 'call' && this.t > 4) { this.mode = null; this.root.visible = false; this.anim.stop(); }
    if (this.mode === 'ball') {
      const m = this.m;
      // الكورة في إيديها
      const hand = new THREE.Vector3();
      this.char.J.rHand.getWorldPosition(hand);
      if (this.t < 2.6) m.ball.place(hand.x, hand.z + (this.balc.face > 0 ? 0.25 : -0.25), hand.y);
      if (this.t > 0.6 && this.t < 0.7) m.say(this, pick(LINES.balconyBack), { color: '#ffe9f0', dur: 2.6 });
      if (this.t > 2.0 && !this.thrown) {
        this.thrown = true;
        this.anim.play('throw');
      }
      if (this.t > 2.38 && !this.released) {
        this.released = true;
        m.ball.frozen = false;
        const tx = randRange(-3, 3), tz = 0;
        const dx = tx - m.ball.pos.x, dz = tz - m.ball.pos.z, d = Math.hypot(dx, dz);
        m.ball.kick((dx / d) * 6, 3, (dz / d) * 6, null);
        m.onBalconyReturn();
      }
      if (this.t > 3.6) { this.mode = null; this.root.visible = false; this.thrown = this.released = false; this.anim.stop(); }
    }
    if (this.root.visible) { this.anim.update(dt, 0); this.sync(); }
  }
}

// ------------------------------------------------------------------ الناظر
export class Headmaster extends Human {
  constructor(m, door) {
    super(m, civilianLook('headmaster', 3));
    this.door = door.clone();
    this.pos.copy(door);
    this.root.visible = false;
    this.state = 'inside';
    this.t = 0;
    this.wait = randRange(25, 40);
    this.anim.ampScale = 0.8;
    // عصاية
    const stick = cyl(0.015, 0.015, 0.8, mat('#6a4a2a'), 0, -0.35, 0.05);
    stick.rotation.x = 0.4;
    this.char.J.rHand.add(stick);
    this.target = new THREE.Vector3();
  }
  get watching() { return this.state === 'patrol' || this.state === 'out'; }
  update(dt) {
    this.t += dt;
    let sp = 0;
    const walk = (tx, tz, s) => {
      const dx = tx - this.pos.x, dz = tz - this.pos.z, d = Math.hypot(dx, dz);
      if (d < 0.2) return true;
      this.pos.x += (dx / d) * s * dt;
      this.pos.z += (dz / d) * s * dt;
      this.facing = dampAngle(this.facing, Math.atan2(dx, dz), 6, dt);
      sp = s;
      return false;
    };
    switch (this.state) {
      case 'inside':
        if (this.t > this.wait) {
          this.state = 'out'; this.t = 0; this.root.visible = true;
          this.target.set(this.door.x + randRange(-8, 8), 0, this.door.z + randRange(1.0, 2.0));
          this.m.onHeadmaster(true);
        }
        break;
      case 'out':
        if (walk(this.target.x, this.target.z, 1.2)) { this.state = 'patrol'; this.t = 0; }
        break;
      case 'patrol':
        this.facing = dampAngle(this.facing, Math.atan2(this.m.ball.pos.x - this.pos.x, this.m.ball.pos.z - this.pos.z), 3, dt);
        if (this.t > 11) { this.state = 'back'; this.t = 0; this.anim.stop('point'); }
        break;
      case 'back':
        if (walk(this.door.x, this.door.z, 1.3)) {
          this.state = 'inside'; this.t = 0; this.wait = randRange(30, 50); this.root.visible = false;
          this.m.onHeadmaster(false);
        }
        break;
    }
    if (this.root.visible) { this.anim.update(dt, sp); this.sync(); }
  }
  scold(p) {
    this.anim.play('point');
    this.m.say(this, LINES.headmasterCatch(p.name), { color: '#ffeaa0', dur: 3 });
    this.m.audio.play('whistle');
  }
}

// ------------------------------------------------------------------ حيوانات
export class Cat {
  constructor(m, a) {
    this.m = m;
    const g = new THREE.Group();
    const fur = mat('#d98a3a', 0.95);
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.26, 4, 8), fur);
    body.rotation.z = Math.PI / 2;
    body.position.y = 0.12;
    g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), fur);
    head.position.set(0.25, 0.18, 0);
    g.add(head);
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.06, 4), fur);
      ear.position.set(0.26, 0.27, s * 0.045);
      g.add(ear);
    }
    const tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.02, 0.25, 3, 6), fur);
    tail.position.set(-0.25, 0.18, 0);
    tail.rotation.z = 0.9;
    g.add(tail);
    this.tail = tail;
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    g.position.copy(a.pos);
    g.rotation.y = a.rot;
    m.scene.add(g);
    this.g = g;
    this.t = Math.random() * 5;
    this.run = 0;
  }
  update(dt) {
    this.t += dt;
    this.tail.rotation.x = Math.sin(this.t * 2) * 0.4;
    const b = this.m.ball.pos;
    if (!this.run && Math.hypot(b.x - this.g.position.x, b.z - this.g.position.z) < 1.4 && this.m.ball.speed() > 2) {
      this.run = 1;
      this.m.audio.play('meow');
    }
    if (this.run) {
      this.g.position.x -= dt * 6;
      this.g.position.y = Math.max(0, this.g.position.y - dt);
      if (this.g.position.x < -40) this.g.visible = false;
    }
  }
}

export class Sheep {
  constructor(m, a) {
    this.m = m;
    const g = new THREE.Group();
    const wool = mat('#efeadf', 1);
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), wool);
    body.scale.set(1.4, 0.95, 1);
    body.position.y = 0.62;
    g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), mat('#3a3030'));
    head.scale.set(1.3, 1, 0.9);
    head.position.set(0.62, 0.78, 0);
    g.add(head);
    this.head = head;
    for (const [x, z] of [[0.3, 0.18], [0.3, -0.18], [-0.32, 0.18], [-0.32, -0.18]]) {
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.42, 6), mat('#3a3030'));
      l.position.set(x, 0.21, z);
      g.add(l);
    }
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    g.position.copy(a.pos);
    g.rotation.y = a.rot;
    m.scene.add(g);
    this.g = g;
    this.t = 0;
    this.hop = 0;
  }
  hit() { this.hop = 0.5; this.m.audio.play('baa'); this.m.say({ headPos: (o = new THREE.Vector3()) => o.set(this.g.position.x, 1.6, this.g.position.z) }, 'مااااء!'); }
  update(dt) {
    this.t += dt;
    this.head.position.y = 0.78 + Math.sin(this.t * 1.3) * 0.05;
    this.head.rotation.z = Math.sin(this.t * 0.7) * 0.2;
    if (this.hop > 0) { this.hop -= dt; this.g.position.y = Math.sin((0.5 - this.hop) * Math.PI * 2) * 0.25 * (this.hop > 0 ? 1 : 0); }
  }
}

export class Pigeons {
  constructor(m, center) {
    this.m = m;
    this.center = center;
    this.birds = [];
    for (let i = 0; i < 9; i++) {
      const g = new THREE.Group();
      const c = chance(0.3) ? '#e8e4dc' : chance(0.5) ? '#7a7a88' : '#5a4a3a';
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), mat(c));
      body.scale.set(1.6, 0.9, 0.9);
      g.add(body);
      const wings = [];
      for (const s of [-1, 1]) {
        const wg = new THREE.PlaneGeometry(0.28, 0.12);
        wg.translate(0, 0, s * 0.14);
        const w = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.01, 0.26), mat(c, 0.9));
        w.geometry.translate(0, 0, s * 0.13);
        g.add(w);
        wings.push(w);
      }
      this.m.scene.add(g);
      this.birds.push({ g, wings, a: (i / 9) * Math.PI * 2, r: randRange(4, 8), h: randRange(5, 9), sp: randRange(0.6, 0.9), ph: Math.random() * 6 });
    }
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    for (const b of this.birds) {
      b.a += b.sp * dt;
      const x = this.center.x + Math.cos(b.a) * b.r * 1.6 + 6;
      const z = this.center.z + Math.sin(b.a) * b.r;
      b.g.position.set(x, b.h + Math.sin(this.t + b.ph) * 0.6, z);
      b.g.rotation.y = -b.a;
      const f = Math.sin(this.t * 14 + b.ph) * 0.8;
      b.wings[0].rotation.x = f;
      b.wings[1].rotation.x = -f;
    }
  }
}

export { clamp };
