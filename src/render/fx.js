// مؤثرات: تراب، إزاز مكسور، نجوم فوق الراس، وسحابة الخناقة
import * as THREE from 'three';
import { puffTexture, starTexture } from './textures.js';
import { randRange } from '../core/util.js';

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.puffs = [];
    this.shards = [];
    this.stars = [];
    this.clouds = [];
    this.limbs = [];
    this.puffTex = puffTexture();
    this.starTex = starTexture();
    this.shardGeo = new THREE.BufferGeometry();
    this.shardGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0.12, 0.02, 0, 0.03, 0.14, 0], 3));
    this.shardGeo.computeVertexNormals();
    this.shardMat = new THREE.MeshBasicMaterial({ color: '#cfe8f5', transparent: true, opacity: 0.85, side: THREE.DoubleSide });
  }

  puff(pos, { color = '#c8b08a', n = 6, size = 0.6, spread = 0.4, up = 0.6, life = 0.9, opacity = 0.7 } = {}) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.puffTex, color, transparent: true, opacity, depthWrite: false }));
      s.position.set(pos.x + randRange(-spread, spread), pos.y + randRange(0, spread * 0.5), pos.z + randRange(-spread, spread));
      const sc = size * randRange(0.7, 1.2);
      s.scale.setScalar(sc);
      this.scene.add(s);
      this.puffs.push({ s, vx: randRange(-0.6, 0.6), vy: randRange(0.2, up), vz: randRange(-0.6, 0.6), life, t: 0, sc, op: opacity });
    }
  }

  shatter(pos, face) {
    for (let i = 0; i < 26; i++) {
      const m = new THREE.Mesh(this.shardGeo, this.shardMat);
      m.position.set(pos.x + randRange(-0.4, 0.4), pos.y + randRange(-0.5, 0.5), pos.z);
      m.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      this.scene.add(m);
      this.shards.push({ m, v: new THREE.Vector3(randRange(-2, 2), randRange(0, 2.5), face * randRange(1, 4)), w: new THREE.Vector3(randRange(-9, 9), randRange(-9, 9), 0), t: 0 });
    }
  }

  // نجوم بتلف فوق راس اللي اتخبط
  dizzy(getPos, dur = 2.5) {
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, depthWrite: false, transparent: true }));
      s.scale.setScalar(0.28);
      g.add(s);
    }
    this.scene.add(g);
    this.stars.push({ g, getPos, t: 0, dur });
  }

  // سحابة خناقة كرتونية
  fight(pos, dur = 4) {
    const c = { pos: pos.clone(), t: 0, dur, spawn: 0 };
    this.clouds.push(c);
    return c;
  }

  update(dt) {
    for (let i = this.puffs.length - 1; i >= 0; i--) {
      const p = this.puffs[i];
      p.t += dt;
      const k = p.t / p.life;
      if (k >= 1) { this.scene.remove(p.s); p.s.material.dispose(); this.puffs.splice(i, 1); continue; }
      p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
      p.s.scale.setScalar(p.sc * (1 + k * 1.4));
      p.s.material.opacity = p.op * (1 - k);
    }
    for (let i = this.shards.length - 1; i >= 0; i--) {
      const s = this.shards[i];
      s.t += dt;
      s.v.y -= 9.8 * dt;
      s.m.position.addScaledVector(s.v, dt);
      if (s.m.position.y < 0.01) { s.m.position.y = 0.01; s.v.set(0, 0, 0); s.w.set(0, 0, 0); }
      s.m.rotation.x += s.w.x * dt; s.m.rotation.y += s.w.y * dt;
      if (s.t > 8) { this.scene.remove(s.m); this.shards.splice(i, 1); }
    }
    for (let i = this.stars.length - 1; i >= 0; i--) {
      const s = this.stars[i];
      s.t += dt;
      if (s.t > s.dur) { this.scene.remove(s.g); this.stars.splice(i, 1); continue; }
      const p = s.getPos();
      s.g.position.copy(p);
      s.g.children.forEach((c, j) => {
        const a = s.t * 5 + (j / 3) * Math.PI * 2;
        c.position.set(Math.cos(a) * 0.32, Math.sin(s.t * 7 + j) * 0.05, Math.sin(a) * 0.32);
      });
    }
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      const c = this.clouds[i];
      c.t += dt;
      c.spawn -= dt;
      if (c.t < c.dur && c.spawn <= 0) {
        c.spawn = 0.045;
        this.puff(new THREE.Vector3(c.pos.x, 0.6 + Math.random() * 1.0, c.pos.z), { color: '#efe4d0', n: 3, size: 1.9, spread: 1.1, up: 0.6, life: 0.8, opacity: 0.95 });
        if (Math.random() < 0.7) {
          // إيد أو رجل طالعة من السحابة
          const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.5, 3, 6), new THREE.MeshStandardMaterial({ color: Math.random() < 0.5 ? '#c98b5a' : '#a86b43' }));
          const a = Math.random() * Math.PI * 2;
          m.position.set(c.pos.x + Math.cos(a) * 1.3, 0.5 + Math.random() * 1.2, c.pos.z + Math.sin(a) * 1.3);
          m.rotation.set(Math.random() * 3, 0, Math.PI / 2 + a);
          this.scene.add(m);
          this.limbs.push({ m, t: 0 });
        }
        if (Math.random() < 0.3) {
          const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, transparent: true, depthWrite: false }));
          s.position.set(c.pos.x + randRange(-1, 1), randRange(0.8, 2), c.pos.z + randRange(-1, 1));
          s.scale.setScalar(0.45);
          this.scene.add(s);
          this.limbs.push({ m: s, t: 0 });
        }
      }
      if (c.t > c.dur + 1) this.clouds.splice(i, 1);
    }
    for (let i = this.limbs.length - 1; i >= 0; i--) {
      const l = this.limbs[i];
      l.t += dt;
      if (l.t > 0.22) { this.scene.remove(l.m); this.limbs.splice(i, 1); }
    }
  }

  clear() {
    for (const p of this.puffs) this.scene.remove(p.s);
    for (const s of this.shards) this.scene.remove(s.m);
    for (const s of this.stars) this.scene.remove(s.g);
    for (const l of this.limbs) this.scene.remove(l.m);
    this.puffs = []; this.shards = []; this.stars = []; this.clouds = []; this.limbs = [];
  }
}
