// النهار والليل: سما، شمس، كشافات بترعش، شبابيك منورة
import * as THREE from 'three';
import { glowTexture, coneTexture } from '../render/textures.js';
import { randRange } from '../core/util.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Sky } from 'three/addons/objects/Sky.js';

const DAY_DIR = new THREE.Vector3(14, 30, 16).normalize();
const SUNSET_DIR = new THREE.Vector3(36, 6, 14).normalize();

let envTex = null;
function roomEnv(renderer) {
  if (!envTex) {
    const pm = new THREE.PMREMGenerator(renderer);
    envTex = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    pm.dispose();
  }
  return envTex;
}

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
  constructor(scene, ctx, { night, sunset = false, weather = 'clear', quality, renderer }) {
    this.scene = scene;
    this.ctx = ctx;
    this.night = night;
    this.sunset = sunset = sunset && !night;
    this.weather = weather;
    const rain = weather === 'rain', dust = weather === 'dust';
    this.quality = quality;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.flickers = [];
    this.t = 0;

    if (night) this.group.add(skyDome(night));
    else {
      // سما حقيقية بتشتت الضوء زي الجو بتاعنا (شوية تراب في الهوا)
      const sky = new Sky();
      sky.scale.setScalar(450);
      const u = sky.material.uniforms;
      u.turbidity.value = sunset ? 9 : dust ? 18 : rain ? 20 : 7;
      u.rayleigh.value = sunset ? 2.8 : rain ? 0.4 : dust ? 0.9 : 1.6;
      u.mieCoefficient.value = sunset ? 0.012 : dust ? 0.03 : rain ? 0.02 : 0.006;
      u.mieDirectionalG.value = sunset ? 0.9 : 0.8;
      // المغرب: الشمس واطية في آخر الحتة
      u.sunPosition.value.copy(sunset ? SUNSET_DIR : DAY_DIR);
      sky.material.depthWrite = false;
      sky.renderOrder = -10;
      this.group.add(sky);
    }
    // إضاءة محيطة ناعمة (انعكاسات خفيفة على الحاجات)
    if (renderer) {
      scene.environment = roomEnv(renderer);
      scene.environmentIntensity = night ? (rain ? 0.1 : 0.06) : sunset ? 0.14 : rain ? 0.3 : 0.32;
    }
    // الضباب: خماسين = تراب أصفر، مطر = رمادي، المغرب = برتقاني خفيف
    const fogC = night ? (dust ? '#2a2018' : rain ? '#10141c' : '#0a0f22') : dust ? '#c49a5c' : rain ? '#727a84' : sunset ? '#e09a68' : '#c8d4d8';
    const fogN = dust ? (night ? 10 : 14) : rain ? (night ? 22 : 28) : night ? 30 : 60;
    const fogF = dust ? (night ? 55 : 72) : rain ? (night ? 85 : 110) : night ? 110 : 170;
    scene.fog = new THREE.Fog(fogC, fogN, fogF);
    scene.background = new THREE.Color(night ? '#050a1e' : fogC);

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
      const sky = sunset ? '#ffb47c' : dust ? '#f0d8a8' : rain ? '#aab4c0' : '#dfefff';
      this.group.add(new THREE.HemisphereLight(sky, sunset ? '#4a2c34' : rain ? '#3a3c40' : '#7a6a55', sunset ? 0.6 : rain ? 0.85 : 1.0));
      // المغرب: نور دهبي واطي وضل طويل. خماسين/مطر: الشمس مستخبية
      const sun = new THREE.DirectionalLight(sunset ? '#ff8c3a' : dust ? '#ffd9a0' : '#fff0d4', sunset ? 3.6 : dust ? 1.5 : rain ? 0.45 : 2.6);
      sun.position.copy(sunset ? SUNSET_DIR : DAY_DIR).multiplyScalar(sunset ? 40 : 38);
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
    // المغرب: الكشافات لسه بتتفتح، نورها ضعيف
    const lampK = night ? 1 : sunset ? 0.3 : 0;
    for (const L of ctx.lamps) {
      L.bulbMat.emissiveIntensity = 3 * Math.sqrt(lampK);
      if (!lampK) continue;
      const color = new THREE.Color(L.color);
      const spot = new THREE.SpotLight(color, (L.flood ? 170 : 55) * lampK, L.flood ? 48 : 20, L.flood ? 0.8 : 1.05, 0.65, 1.5);
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
      sp.scale.setScalar((L.flood ? 3.2 : 2.0) * (night ? 1 : 0.6));
      this.group.add(sp);
      // عمود نور
      const h = L.pos.y;
      const rBottom = L.flood ? 6 : h * 0.62;
      const coneGeo = new THREE.CylinderGeometry(0.12, rBottom, h, 24, 1, true);
      coneGeo.translate(0, -h / 2, 0);
      const coneM = new THREE.MeshBasicMaterial({ map: coneTexture(), color, transparent: true, opacity: night ? (rain || dust ? 0.24 : 0.16) : 0.04, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
      const cone = new THREE.Mesh(coneGeo, coneM);
      cone.position.copy(L.pos);
      this.group.add(cone);
      const entry = { L, spot, sprite: sp, cone, base: spot.intensity, coneBase: coneM.opacity, level: 1, target: 1, timer: 0 };
      if (L.flicker) this.flickers.push(entry);
    }

    this.lampK = lampK;
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
      lm.m.emissiveIntensity = night ? (lm.lit ? lm.k * randRange(0.7, 1.2) : 0) : sunset && lm.lit && Math.random() < 0.5 ? lm.k * 0.5 : (lm.dayK || 0);
      if (lm.emissiveMap && night) { lm.m.emissiveMap = lm.m.map; lm.m.emissiveIntensity = lm.k; }
    }
    for (const o of ctx.nightOnly) o.visible = night;
    for (const o of ctx.dayOnly) o.visible = !night;
    if (ctx.extras.fairy) for (const b of ctx.extras.fairy) b.visible = true;

    // الجو
    if (rain) this.makeRain(quality);
    if (dust) this.makeDust(quality);
    if (rain && ctx.groundMesh) {
      // أرض مبلولة: بتلمع وبتعكس النور
      const gm = ctx.groundMesh.material;
      gm.roughness = 0.28;
      gm.color.multiplyScalar(0.6);
      gm.envMapIntensity = 1.6;
    }
  }

  // خطوط مطر بتنزل حوالين الملعب
  makeRain(quality) {
    const n = quality === 'high' ? 4200 : quality === 'medium' ? 2400 : 1200;
    const pos = new Float32Array(n * 6);
    this.rainData = { n, pos, speed: new Float32Array(n) };
    for (let i = 0; i < n; i++) this.resetDrop(i, true);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.LineBasicMaterial({ color: this.night ? '#9fb2d8' : '#eef3f8', transparent: true, opacity: this.night ? 0.45 : 0.55, depthWrite: false });
    this.rain = new THREE.LineSegments(g, m);
    this.rain.frustumCulled = false;
    this.group.add(this.rain);
  }

  resetDrop(i, any) {
    const { pos, speed } = this.rainData;
    const x = randRange(-34, 34), z = randRange(-24, 24), y = any ? randRange(0, 22) : randRange(18, 24);
    const k = i * 6;
    pos[k] = x; pos[k + 1] = y; pos[k + 2] = z;
    pos[k + 3] = x + 0.08; pos[k + 4] = y + 0.55; pos[k + 5] = z;
    speed[i] = randRange(16, 22);
  }

  // تراب الخماسين: حبيبات بتطير مع الريح
  makeDust(quality) {
    const n = quality === 'high' ? 2600 : quality === 'medium' ? 1500 : 700;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = randRange(-36, 36); pos[i * 3 + 1] = randRange(0, 9); pos[i * 3 + 2] = randRange(-26, 26); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({ map: glowTexture(), color: this.night ? '#8a7050' : '#d8b880', size: 0.35, transparent: true, opacity: 0.55, depthWrite: false });
    this.dust = new THREE.Points(g, m);
    this.dust.frustumCulled = false;
    this.group.add(this.dust);
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
      f.L.bulbMat.emissiveIntensity = 3 * Math.sqrt(this.lampK) * v;
    }
    if (this.ctx.extras.fairy) {
      const bulbs = this.ctx.extras.fairy;
      for (let i = 0; i < bulbs.length; i++) bulbs[i].visible = ((Math.floor(this.t * 2.5) + i) % 3) !== 0 || !this.night;
    }
    for (const fl of this.ctx.flags) {
      fl.children.forEach((c, i) => { c.rotation.y = Math.sin(this.t * 3 + c.position.x * 2) * 0.25; });
    }
    for (const c of this.ctx.clothes) c.rotation.x = Math.sin(this.t * 1.7 + c.position.x) * 0.12;
    if (this.rain) {
      const { n, pos, speed } = this.rainData;
      for (let i = 0; i < n; i++) {
        const k = i * 6, d = speed[i] * dt;
        pos[k + 1] -= d; pos[k + 4] -= d; pos[k] -= d * 0.05; pos[k + 3] -= d * 0.05;
        if (pos[k + 1] < 0) this.resetDrop(i, false);
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
    if (this.dust) {
      const p = this.dust.geometry.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) {
        p[i] += dt * (5 + Math.sin(i + this.t) * 1.5);
        p[i + 1] += dt * Math.sin(this.t * 1.3 + i) * 0.6;
        p[i + 2] += dt * Math.cos(this.t * 0.7 + i) * 0.8;
        if (p[i] > 36) { p[i] = -36; p[i + 1] = randRange(0, 9); }
        if (p[i + 1] < 0) p[i + 1] = 9;
        if (p[i + 1] > 9) p[i + 1] = 0;
      }
      this.dust.geometry.attributes.position.needsUpdate = true;
    }
  }

  dispose() {
    this.scene.remove(this.group);
  }
}
