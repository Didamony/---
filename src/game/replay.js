// إعادة الجون: بنسجّل آخر ثواني من اللعب (مكان ووضع جسم كل لعيب + الكورة) ونعيدها بالبطيء
import * as THREE from 'three';
import { KEYS } from '../actors/character.js';

const FPS = 30;
const SECONDS = 5;
const PER_P = 4 + KEYS.length; // x, z, facing, visible + البوز

export class Recorder {
  constructor(match) {
    this.m = match;
    this.n = match.allPlayers.length;
    this.size = this.n * PER_P + 7;
    this.cap = FPS * SECONDS;
    this.buf = new Float32Array(this.cap * this.size);
    this.count = 0;
    this.head = 0;
    this.acc = 0;
  }

  record(dt) {
    this.acc += dt;
    if (this.acc < 1 / FPS) return;
    this.acc = 0;
    const m = this.m, o = this.head * this.size, b = this.buf;
    m.allPlayers.forEach((p, i) => {
      const k = o + i * PER_P;
      b[k] = p.pos.x; b[k + 1] = p.pos.z; b[k + 2] = p.facing; b[k + 3] = p.root.visible ? 1 : 0;
      const out = p.anim.out;
      for (let j = 0; j < KEYS.length; j++) b[k + 4 + j] = out[KEYS[j]];
    });
    const k = o + this.n * PER_P, bm = m.ball.mesh;
    b[k] = bm.position.x; b[k + 1] = bm.position.y; b[k + 2] = bm.position.z;
    b[k + 3] = bm.quaternion.x; b[k + 4] = bm.quaternion.y; b[k + 5] = bm.quaternion.z; b[k + 6] = bm.quaternion.w;
    this.head = (this.head + 1) % this.cap;
    this.count = Math.min(this.cap, this.count + 1);
  }

  // i من 0 (أقدم) لـ count-1 (أحدث)
  frame(i) {
    const idx = (this.head - this.count + i + this.cap * 2) % this.cap;
    return idx * this.size;
  }

  reset() { this.count = 0; this.head = 0; }
}

const qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
const pose = {};

export class Replay {
  constructor(match, rec, { seconds = 3.6, speed = 0.45 } = {}) {
    this.m = match;
    this.rec = rec;
    this.frames = Math.min(rec.count, Math.round(seconds * FPS));
    this.start = rec.count - this.frames;
    this.speed = speed;
    this.t = 0;
    this.done = this.frames < 10;
    const g = match.lastGoal;
    this.goalX = g ? g.x : 0;
    this.side = Math.random() < 0.5 ? 1 : -1;
  }

  update(dt) {
    if (this.done) return;
    this.t += dt * this.speed;
    const f = this.t * FPS;
    if (f >= this.frames - 1) { this.done = true; return; }
    const i0 = Math.floor(f), u = f - i0;
    const A = this.rec.frame(this.start + i0), B = this.rec.frame(this.start + i0 + 1), b = this.rec.buf;
    const m = this.m;
    m.allPlayers.forEach((p, i) => {
      const a = A + i * PER_P, c = B + i * PER_P;
      p.pos.x = b[a] + (b[c] - b[a]) * u;
      p.pos.z = b[a + 1] + (b[c + 1] - b[a + 1]) * u;
      let df = b[c + 2] - b[a + 2];
      while (df > Math.PI) df -= Math.PI * 2;
      while (df < -Math.PI) df += Math.PI * 2;
      p.facing = b[a + 2] + df * u;
      p.show(b[a + 3] > 0.5);
      for (let j = 0; j < KEYS.length; j++) pose[KEYS[j]] = b[a + 4 + j] + (b[c + 4 + j] - b[a + 4 + j]) * u;
      p.anim.apply(pose);
      p.sync();
    });
    const ka = A + m.allPlayers.length * PER_P, kc = B + m.allPlayers.length * PER_P;
    const bm = m.ball.mesh;
    bm.position.set(b[ka] + (b[kc] - b[ka]) * u, b[ka + 1] + (b[kc + 1] - b[ka + 1]) * u, b[ka + 2] + (b[kc + 2] - b[ka + 2]) * u);
    qa.set(b[ka + 3], b[ka + 4], b[ka + 5], b[ka + 6]);
    qb.set(b[kc + 3], b[kc + 4], b[kc + 5], b[kc + 6]);
    bm.quaternion.slerpQuaternions(qa, qb, u);
    m.ball.blob.position.set(bm.position.x, 0.012, bm.position.z);
    // كاميرا واطية جنب الجون بتتبع الكورة
    const cam = m.camera, gx = this.goalX, dir = Math.sign(gx) || 1;
    const bx = bm.position.x, bz = bm.position.z;
    const px = gx - dir * 5.5 + (bx - gx) * 0.35, pz = this.side * 8 + bz * 0.3;
    cam.position.lerp(new THREE.Vector3(px, 3.2, pz), this.t < 0.05 ? 1 : 0.06);
    cam.lookAt(bx, 0.7 + bm.position.y * 0.4, bz);
  }
}
