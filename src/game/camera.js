// كاميرا زي البث: مايلة من فوق وبتمشي مع الكورة
import * as THREE from 'three';
import { clamp, damp, randRange } from '../core/util.js';

export class CameraRig {
  constructor(camera, def, ctx) {
    this.cam = camera;
    this.def = def;
    this.ctx = ctx;
    this.focus = new THREE.Vector3();
    this.zoom = 1;
    this.zoomTarget = 1;
    this.shakeT = 0;
    this.shakeA = 0;
    // زاوية بث تلفزيوني: أوطى وأبعد شوية
    this.baseD = 11 + def.halfW * 1.15;
    this.orbit = 0;
    this.mode = 'follow';
  }

  shake(a = 0.3, t = 0.35) { this.shakeA = Math.max(this.shakeA, a); this.shakeT = Math.max(this.shakeT, t); }

  snap(target) {
    this.focus.copy(target);
    this.update(0.001, target, true);
  }

  update(dt, target, snap = false) {
    const b = this.ctx.bounds;
    const aspect = this.cam.aspect;
    const D = this.baseD * this.zoom;
    const H = D * 0.62;
    // نص عرض المنظر على الأرض تقريبًا
    const viewHalf = Math.tan((this.cam.fov * Math.PI) / 360) * Math.hypot(D, H) * aspect * 0.9;
    let fx = target.x;
    const minX = b.minX + viewHalf * 0.7, maxX = b.maxX - viewHalf * 0.7;
    fx = minX < maxX ? clamp(fx, minX, maxX) : (b.minX + b.maxX) / 2;
    // لو الحاجة فوق (بلكونة مثلًا) الكاميرا تطلع تبص عليها
    const high = target.y > 1.6;
    const fz = high ? target.z + 2.5 : clamp(target.z * 0.45, -this.def.halfW * 0.4, this.def.halfW * 0.4) + this.ctx.camZ;
    const fy = high ? target.y * 0.8 : 0;
    const r = snap ? 1 : 1 - Math.exp(-3.2 * dt);
    this.focus.x += (fx - this.focus.x) * r;
    this.focus.z += (fz - this.focus.z) * r;
    this.focus.y += (fy - this.focus.y) * r;
    this.zoom = damp(this.zoom, this.zoomTarget, 2.5, dt);

    let px, py, pz;
    if (this.mode === 'orbit') {
      this.orbit += dt * 0.12;
      const R = D * 1.2;
      px = this.focus.x + Math.sin(this.orbit) * R * 0.6;
      pz = this.focus.z + Math.cos(this.orbit) * R * 0.35 + D * 0.7;
      py = H * 0.75;
    } else {
      px = this.focus.x;
      py = H + this.focus.y * 0.6;
      pz = this.focus.z + D;
    }
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const a = this.shakeA * Math.max(0, this.shakeT) * 3;
      px += randRange(-a, a); py += randRange(-a, a) * 0.5;
      if (this.shakeT <= 0) this.shakeA = 0;
    }
    this.cam.position.set(px, py, pz);
    this.cam.lookAt(this.focus.x, 0.6 + this.focus.y, this.focus.z - 0.8);
  }
}
