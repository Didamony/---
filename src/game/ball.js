// الكورة: جاذبية، نطّ، احتكاك، وخبط في الحيطان والعربيات
import * as THREE from 'three';
import { canvasTex, glowTexture } from '../render/textures.js';
import { TUNE } from './config.js';

function ballTexture() {
  return canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#f4f1e8';
    g.fillRect(0, 0, w, h);
    // خماسيات سودا متوزعة على الكورة (إسقاط equirect)
    const pts = [];
    pts.push([0, 90], [0, -90]);
    for (let i = 0; i < 5; i++) { pts.push([i * 72, 27]); pts.push([i * 72 + 36, -27]); }
    g.fillStyle = '#1b1b1b';
    for (const [lon, lat] of pts) {
      for (const off of [-360, 0, 360]) {
        const cx = ((lon + off + 180) / 360) * w;
        const cy = ((90 - lat) / 180) * h;
        const sx = 26 / Math.max(0.35, Math.cos((lat * Math.PI) / 180));
        g.beginPath();
        for (let k = 0; k < 5; k++) {
          const a = (k / 5) * Math.PI * 2 - Math.PI / 2;
          g.lineTo(cx + Math.cos(a) * sx, cy + Math.sin(a) * 24);
        }
        g.closePath();
        g.fill();
      }
    }
    // خطوط وبهدلة
    g.strokeStyle = 'rgba(80,70,60,0.35)';
    g.lineWidth = 2;
    for (let i = 0; i < 40; i++) { g.beginPath(); const x = Math.random() * w, y = Math.random() * h; g.moveTo(x, y); g.lineTo(x + Math.random() * 30 - 15, y + Math.random() * 10 - 5); g.stroke(); }
  });
}

const tmpV = new THREE.Vector3();
const tmpQ = new THREE.Vector3();

export class Ball {
  constructor(scene) {
    this.r = TUNE.ballRadius;
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(this.r, 24, 16), new THREE.MeshStandardMaterial({ map: ballTexture(), roughness: 0.55 }));
    this.mesh.castShadow = true;
    scene.add(this.mesh);
    // ضل صغير تحت الكورة عشان تعرف هي فين بالظبط (خصوصًا بالليل)
    this.blob = new THREE.Mesh(new THREE.CircleGeometry(this.r * 1.3, 16), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.35, depthWrite: false }));
    this.blob.rotation.x = -Math.PI / 2;
    this.blob.renderOrder = 1;
    scene.add(this.blob);
    // هالة خفيفة بالليل
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: '#fff6e0', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.glow.scale.setScalar(0.9);
    scene.add(this.glow);
    this.pos = new THREE.Vector3(0, this.r, 0);
    this.vel = new THREE.Vector3();
    this.lastTouch = null;
    this.lastKickTeam = -1;
    this.frozen = false;
    this.friction = 0.85;
    this.onBounce = null;
    this.onHit = null;
    this.spinAxis = new THREE.Vector3(1, 0, 0);
  }

  place(x, z, y = this.r) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
  }

  kick(vx, vy, vz, by) {
    this.vel.set(vx, vy, vz);
    this.curl = 0;
    this.curlT = 0;
    if (by) { this.lastTouch = by; this.lastKickTeam = by.team; }
  }

  speed() { return this.vel.length(); }
  groundSpeed() { return Math.hypot(this.vel.x, this.vel.z); }

  update(dt, colliders, owned) {
    if (this.frozen) { this.syncMesh(dt, 0); return; }
    if (owned) { this.syncMesh(dt, Math.hypot(this.vel.x, this.vel.z)); return; }
    const sp = this.vel.length();
    const steps = Math.min(8, Math.max(1, Math.ceil((sp * dt) / 0.08)));
    const h = dt / steps;
    for (let s = 0; s < steps; s++) this.step(h, colliders);
    this.syncMesh(dt, Math.hypot(this.vel.x, this.vel.z));
  }

  step(dt, colliders) {
    const v = this.vel, p = this.pos, r = this.r;
    const air = p.y > r + 0.02;
    v.y -= 9.81 * dt;
    // لفّة: قوة جانبية عمودية على الحركة
    if (this.curlT > 0) {
      this.curlT -= dt;
      const gs = Math.hypot(v.x, v.z);
      if (gs > 2) { v.x += (-v.z / gs) * this.curl * dt; v.z += (v.x / gs) * this.curl * dt; }
    }
    const drag = air ? 0.12 : 0.0;
    v.multiplyScalar(1 - drag * dt);
    p.addScaledVector(v, dt);
    if (p.y < r) {
      p.y = r;
      if (v.y < -0.6) {
        const s = -v.y;
        v.y = s * 0.56;
        v.x *= 0.88; v.z *= 0.88;
        if (this.onBounce) this.onBounce(s);
      } else v.y = 0;
    }
    if (p.y <= r + 0.01) {
      const f = this.friction * dt;
      const gs = Math.hypot(v.x, v.z);
      if (gs > 0) {
        const ns = Math.max(0, gs - (f * 1.4 + gs * f * 0.35));
        v.x *= ns / gs; v.z *= ns / gs;
      }
    }
    for (const c of colliders) {
      if (c.tag === 'void') continue;
      tmpQ.set(
        Math.max(c.min.x, Math.min(p.x, c.max.x)),
        Math.max(c.min.y, Math.min(p.y, c.max.y)),
        Math.max(c.min.z, Math.min(p.z, c.max.z)),
      );
      tmpV.subVectors(p, tmpQ);
      let d = tmpV.length();
      if (d >= r) continue;
      if (d < 1e-5) {
        // جوه الصندوق: نطلعها من أقرب وش
        const dx0 = p.x - c.min.x, dx1 = c.max.x - p.x, dz0 = p.z - c.min.z, dz1 = c.max.z - p.z, dy1 = c.max.y - p.y;
        const m = Math.min(dx0, dx1, dz0, dz1, dy1);
        tmpV.set(m === dx0 ? -1 : m === dx1 ? 1 : 0, m === dy1 ? 1 : 0, m === dz0 ? -1 : m === dz1 ? 1 : 0);
        d = 0;
        p.addScaledVector(tmpV, m + r);
      } else {
        tmpV.divideScalar(d);
        p.copy(tmpQ).addScaledVector(tmpV, r);
      }
      const vn = v.dot(tmpV);
      if (vn < 0) {
        const e = c.tag === 'net' ? 0.08 : c.metal ? 0.72 : c.tag === 'sheep' ? 0.4 : 0.58;
        v.addScaledVector(tmpV, -(1 + e) * vn);
        if (c.tag === 'net') v.multiplyScalar(0.3);
        else v.multiplyScalar(0.94);
        if (this.onHit) this.onHit(c, -vn, p);
      }
    }
  }

  syncMesh(dt, gs) {
    this.mesh.position.copy(this.pos);
    if (gs > 0.05) {
      this.spinAxis.set(this.vel.z, 0, -this.vel.x).normalize();
      this.mesh.rotateOnWorldAxis(this.spinAxis, (gs * dt) / this.r);
    }
    this.blob.position.set(this.pos.x, 0.012, this.pos.z);
    const hgt = Math.max(0, this.pos.y - this.r);
    const k = Math.max(0.25, 1 - hgt * 0.25);
    this.blob.scale.setScalar(k);
    this.blob.material.opacity = 0.35 * k;
    this.glow.position.copy(this.pos);
  }

  setNight(n) { this.glow.material.opacity = n ? 0.22 : 0; }

  dispose(scene) {
    scene.remove(this.mesh, this.blob, this.glow);
  }
}
