// النهار والليل: سما، شمس، كشافات بترعش، شبابيك منورة
import * as THREE from 'three';
import { glowTexture, coneTexture } from '../render/textures.js';
import { randRange } from '../core/util.js';

function skyDome(night) {
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color(night ? '#050a1e' : '#4f8fd0') },
      mid: { value: new THREE.Color(night ? '#1c2850' : '#9cc7e8') },
      bottom: { value: new THREE.Color(night ? '#2a2030' : '#e8dcc0') },
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.6, h)) : mix(mid, bottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0); }`,
  });
  const s = new THREE.Mesh(geo, m);
  s.renderOrder = -10;
  return s;
}

function stars() {
  const n = 900;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = Math.random() * Math.PI * 2, v = Math.random() * 0.45 + 0.08;
    pos[i * 3] = Math.cos(u) * Math.cos(v * Math.PI / 2) * 380;
    pos[i * 3 + 1] = Math.sin(v * Math.PI / 2) * 380;
    pos[i * 3 + 2] = Math.sin(u) * Math.cos(v * Math.PI / 2) * 380;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({ color: '#ffffff', size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0.8, fog: false }));
}

export class Environment {
  constructor(scene, ctx, { night, quality }) {
    this.scene = scene;
    this.ctx = ctx;
    this.night = night;
    this.quality = quality;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.flickers = [];
    this.t = 0;

    this.group.add(skyDome(night));
    scene.fog = new THREE.Fog(night ? '#0a0f22' : '#c8d4d8', night ? 30 : 60, night ? 110 : 170);
    scene.background = new THREE.Color(night ? '#050a1e' : '#9cc7e8');

    const hi = quality === 'high';
    if (night) {
      this.group.add(stars());
      const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: '#dfe8ff', fog: false, depthWrite: false }));
      moon.position.set(-120, 160, -260);
      moon.scale.setScalar(40);
      this.group.add(moon);
      const moonCore = new THREE.Mesh(new THREE.CircleGeometry(6, 24), new THREE.MeshBasicMaterial({ color: '#f4f6ff', fog: false }));
      moonCore.position.copy(moon.position);
      moonCore.lookAt(0, 0, 0);
      this.group.add(moonCore);
      this.group.add(new THREE.HemisphereLight('#3a4a80', '#120e10', 0.7));
      // نور قمر خفيف من ناحية الكاميرا عشان وشوش اللعيبة تبان
      const moonL = new THREE.DirectionalLight('#8a9ad8', 0.55);
      moonL.position.set(8, 30, 30);
      this.group.add(moonL);
    } else {
      this.group.add(new THREE.HemisphereLight('#dfefff', '#7a6a55', 1.0));
      const sun = new THREE.DirectionalLight('#fff0d4', 2.6);
      sun.position.set(14, 30, 16);
      sun.castShadow = true;
      const sm = hi ? 4096 : 2048;
      sun.shadow.mapSize.set(sm, sm);
      const c = sun.shadow.camera;
      c.left = -36; c.right = 36; c.top = 26; c.bottom = -26; c.near = 1; c.far = 120;
      sun.shadow.bias = -0.0004;
      sun.shadow.normalBias = 0.03;
      this.group.add(sun);
      this.group.add(sun.target);
      this.sun = sun;
    }

    // الكشافات
    let shadowsLeft = hi ? 3 : quality === 'medium' ? 1 : 0;
    const halo = glowTexture();
    for (const L of ctx.lamps) {
      L.bulbMat.emissiveIntensity = night ? 3 : 0;
      if (!night) continue;
      const color = new THREE.Color(L.color);
      const spot = new THREE.SpotLight(color, L.flood ? 170 : 55, L.flood ? 48 : 20, L.flood ? 0.8 : 1.05, 0.65, 1.5);
      spot.position.copy(L.pos);
      const tgt = L.pos.clone();
      tgt.y = 0;
      if (L.flood) { tgt.x *= 0.55; tgt.z *= 0.4; }
      else tgt.z += (L.face || 0) * (L.wall ? 5 : 2.5);
      spot.target.position.copy(tgt);
      if (shadowsLeft > 0 && !L.flicker) {
        spot.castShadow = true;
        spot.shadow.mapSize.set(hi ? 1024 : 512, hi ? 1024 : 512);
        spot.shadow.bias = -0.0006;
        spot.shadow.normalBias = 0.04;
        shadowsLeft--;
      }
      this.group.add(spot, spot.target);
      // هالة حوالين اللمبة
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: halo, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9 }));
      sp.position.copy(L.pos);
      sp.scale.setScalar(L.flood ? 3.2 : 2.0);
      this.group.add(sp);
      // عمود نور
      const h = L.pos.y;
      const rBottom = L.flood ? 6 : h * 0.62;
      const coneGeo = new THREE.CylinderGeometry(0.12, rBottom, h, 24, 1, true);
      coneGeo.translate(0, -h / 2, 0);
      const coneM = new THREE.MeshBasicMaterial({ map: coneTexture(), color, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
      const cone = new THREE.Mesh(coneGeo, coneM);
      cone.position.copy(L.pos);
      this.group.add(cone);
      const entry = { L, spot, sprite: sp, cone, base: spot.intensity, coneBase: coneM.opacity, level: 1, target: 1, timer: 0 };
      if (L.flicker) this.flickers.push(entry);
    }

    for (const P of ctx.pointLights) {
      if (!night) continue;
      const pl = new THREE.PointLight(P.color, P.intensity * 1.2, P.dist, 1.6);
      pl.position.copy(P.pos);
      this.group.add(pl);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: halo, color: P.color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7 }));
      sp.position.copy(P.pos);
      sp.scale.setScalar(1.4);
      this.group.add(sp);
    }

    for (const lm of ctx.litMats) {
      lm.m.emissiveIntensity = night ? (lm.lit ? lm.k * randRange(0.7, 1.2) : 0) : (lm.dayK || 0);
      if (lm.emissiveMap && night) { lm.m.emissiveMap = lm.m.map; lm.m.emissiveIntensity = lm.k; }
    }
    for (const o of ctx.nightOnly) o.visible = night;
    for (const o of ctx.dayOnly) o.visible = !night;
    if (ctx.extras.fairy) for (const b of ctx.extras.fairy) b.visible = true;
  }

  update(dt) {
    this.t += dt;
    // الكشاف اللي بيرعش
    for (const f of this.flickers) {
      f.timer -= dt;
      if (f.timer <= 0) {
        const r = Math.random();
        if (r < 0.12) { f.target = 0.02; f.timer = randRange(0.05, 0.35); }
        else if (r < 0.45) { f.target = randRange(0.15, 0.6); f.timer = randRange(0.03, 0.12); }
        else { f.target = randRange(0.75, 1.0); f.timer = randRange(0.1, 0.9); }
      }
      f.level += (f.target - f.level) * Math.min(1, dt * 40);
      const v = f.level * (0.92 + 0.08 * Math.sin(this.t * 90));
      f.spot.intensity = f.base * v;
      f.sprite.material.opacity = 0.9 * v;
      f.cone.material.opacity = f.coneBase * v;
      f.L.bulbMat.emissiveIntensity = 3 * v;
    }
    if (this.ctx.extras.fairy) {
      const bulbs = this.ctx.extras.fairy;
      for (let i = 0; i < bulbs.length; i++) bulbs[i].visible = ((Math.floor(this.t * 2.5) + i) % 3) !== 0 || !this.night;
    }
    for (const fl of this.ctx.flags) {
      fl.children.forEach((c, i) => { c.rotation.y = Math.sin(this.t * 3 + c.position.x * 2) * 0.25; });
    }
    for (const c of this.ctx.clothes) c.rotation.x = Math.sin(this.t * 1.7 + c.position.x) * 0.12;
  }

  dispose() {
    this.scene.remove(this.group);
  }
}
