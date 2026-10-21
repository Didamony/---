// حاجات الشارع: عماير، شبابيك، بلكونات، تكييفات، دش، عربية، توكتوك، عربية فول، كشافات...
import * as THREE from 'three';
import { mat } from '../actors/character.js';
import { plasterTexture, shutterTexture, signTexture, crackedGlassTexture, textTexture, netTexture } from '../render/textures.js';
import { makeRng } from '../core/util.js';

export function box(w, h, d, m, x = 0, y = 0, z = 0, parent) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  if (parent) parent.add(o);
  return o;
}
export function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, parent, seg = 14) {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  if (parent) parent.add(o);
  return o;
}

const facadeMats = new Map();
function facadeMat(color, seed, band) {
  const k = color + seed + band;
  if (!facadeMats.has(k)) {
    facadeMats.set(k, new THREE.MeshStandardMaterial({ map: plasterTexture(color, seed, { band }), roughness: 0.95 }));
  }
  return facadeMats.get(k);
}

// ------------------------------------------------------------ عمارة
// face: 1 يعني الواجهة باصة ناحية +z ، -1 ناحية -z
export function building(ctx, { x0, x1, z, face = 1, h = 12, color = '#c9a982', seed = 1, floors = 3, shop = null, depth = 5, roofStuff = true, lit = 0.5, door = false }) {
  const g = ctx.static;
  const rng = makeRng(seed * 31 + 7);
  const w = x1 - x0;
  const cx = (x0 + x1) / 2;
  const m = facadeMat(color, seed, 'rgba(70,60,50,0.35)');
  const side = mat(new THREE.Color(color).multiplyScalar(0.82).getStyle(), 0.95);
  const top = mat('#6a6058', 0.95);
  const mats = [side, side, top, side, face > 0 ? m : side, face > 0 ? side : m];
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, depth), mats);
  b.position.set(cx, h / 2, z - face * depth / 2);
  b.castShadow = true; b.receiveShadow = true;
  g.add(b);
  // الحيطة بتخبط فيها الكورة
  ctx.colliders.push({ min: new THREE.Vector3(x0, 0, Math.min(z, z - face * depth)), max: new THREE.Vector3(x1, h, Math.max(z, z - face * depth)), tag: 'wall', face });
  // كورنيش فوق
  box(w + 0.1, 0.25, 0.3, mat('#d8cfc0'), cx, h - 0.1, z + face * 0.1, g);
  // بين الأدوار
  for (let f = 1; f < floors + 1; f++) box(w, 0.12, 0.12, mat('#b8ad9c'), cx, f * 3.1, z + face * 0.04, g);

  const winW = 1.05, winH = 1.35;
  const cols = Math.max(1, Math.floor(w / 2.4));
  const colSp = w / cols;
  for (let f = shop ? 1 : 0; f < floors + 1; f++) {
    const wy = f * 3.1 + 1.6;
    if (wy + winH / 2 > h - 0.4) break;
    for (let c = 0; c < cols; c++) {
      const wx = x0 + colSp * (c + 0.5);
      if (door && f === 0 && c === Math.floor(cols / 2)) continue;
      addWindow(ctx, wx, wy, z, face, winW, winH, rng, lit);
    }
  }
  if (door) {
    const c = Math.floor(cols / 2);
    const dx = x0 + colSp * (c + 0.5);
    const dm = mat('#5a3a22', 0.8);
    box(1.3, 2.4, 0.12, dm, dx, 1.2, z + face * 0.04, g);
    box(1.5, 0.15, 0.2, mat('#c9c0b0'), dx, 2.48, z + face * 0.08, g);
    // سلمتين
    box(1.8, 0.16, 0.5, mat('#a39a8a'), dx, 0.08, z + face * 0.25, g);
    ctx.doors.push(new THREE.Vector3(dx, 0, z + face * 0.6));
  }
  if (shop) addShop(ctx, x0 + 0.3, x1 - 0.3, z, face, shop);
  if (roofStuff) {
    const n = 1 + Math.floor(rng() * 3);
    for (let i = 0; i < n; i++) {
      const rx = x0 + 0.8 + rng() * (w - 1.6);
      const t = rng();
      if (t < 0.4) satelliteDish(g, rx, h, z - face * (1 + rng() * 2), face);
      else if (t < 0.7) waterTank(g, rx, h, z - face * 2.5);
      else box(1.2, 1.4, 1.2, mat('#8a7f70'), rx, h + 0.7, z - face * 2.5, g);
    }
  }
  // تكييف ودش على الواجهة
  if (rng() < 0.7) acUnit(g, x0 + 0.8 + rng() * (w - 1.6), 4.4 + Math.floor(rng() * 2) * 3.1, z, face);
}

export function addWindow(ctx, wx, wy, z, face, winW, winH, rng, lit) {
  const g = ctx.static;
  const frameM = mat('#e2dccf', 0.8);
  // إطار
  box(winW + 0.16, 0.1, 0.18, frameM, wx, wy - winH / 2 - 0.05, z + face * 0.06, g);
  box(winW + 0.16, 0.08, 0.12, frameM, wx, wy + winH / 2 + 0.04, z + face * 0.04, g);
  const r = rng();
  const shutterM = mat(rng() < 0.5 ? '#6b4a2e' : '#4f6a52', 0.85);
  if (r < 0.28) {
    // شيش مقفول
    const sh = box(winW, winH, 0.06, shutterM, wx, wy, z + face * 0.03, g);
    sh.castShadow = false;
    return;
  }
  // شيش مفتوح على الجنبين
  for (const s of [-1, 1]) {
    const p = box(winW / 2, winH, 0.04, shutterM, wx + s * (winW / 2 + winW / 4 + 0.02), wy, z + face * 0.05, g);
    p.castShadow = false;
  }
  const isLit = rng() < lit;
  const glassMat = new THREE.MeshStandardMaterial({
    color: isLit ? '#3a3020' : '#2c3a42', roughness: 0.15, metalness: 0.3,
    emissive: isLit ? '#ffb85a' : '#000000', emissiveIntensity: 0,
  });
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), glassMat);
  glass.position.set(wx, wy, z + face * 0.015);
  if (face < 0) glass.rotation.y = Math.PI;
  ctx.dynamic.add(glass);
  // صليب الشباك
  box(0.05, winH, 0.03, frameM, wx, wy, z + face * 0.03, g).castShadow = false;
  box(winW, 0.05, 0.03, frameM, wx, wy + 0.15, z + face * 0.03, g).castShadow = false;
  // ستارة
  if (rng() < 0.6) {
    const cm = new THREE.MeshStandardMaterial({ color: rng() < 0.5 ? '#c9a0a0' : '#a8b8c8', roughness: 1, emissive: isLit ? '#ffb070' : '#000', emissiveIntensity: 0 });
    const cur = new THREE.Mesh(new THREE.PlaneGeometry(winW * 0.35, winH * 0.9), cm);
    cur.position.set(wx - winW * 0.3, wy, z + face * 0.02);
    if (face < 0) cur.rotation.y = Math.PI;
    ctx.dynamic.add(cur);
    ctx.litMats.push({ m: cm, lit: isLit, k: 0.5 });
  }
  ctx.litMats.push({ m: glassMat, lit: isLit, k: 1 });
  ctx.windows.push({ mesh: glass, x0: wx - winW / 2, x1: wx + winW / 2, y0: wy - winH / 2, y1: wy + winH / 2, z, face, broken: false, lit: isLit });
}

function addShop(ctx, x0, x1, z, face, shop) {
  const g = ctx.static;
  const w = x1 - x0, cx = (x0 + x1) / 2;
  // باب صاج
  const st = new THREE.MeshStandardMaterial({ map: shutterTexture(shop.shutter || '#6f7378'), roughness: 0.6, metalness: 0.4 });
  if (shop.open) {
    const inside = mat('#2a2420', 1);
    box(w * 0.8, 2.5, 0.1, inside, cx, 1.25, z + face * 0.02, g);
    // رفوف وبضاعة
    const rng = makeRng(w * 10);
    for (let r = 0; r < 3; r++) {
      box(w * 0.75, 0.05, 0.3, mat('#6a4a2a'), cx, 0.6 + r * 0.6, z + face * 0.15, g);
      for (let i = 0; i < 10; i++) {
        const c = ['#d84b4b', '#f2d24b', '#4a8bd8', '#3c9a4a', '#f08a30', '#eee'][Math.floor(rng() * 6)];
        box(0.15, 0.25, 0.15, mat(c), cx - w * 0.35 + (i / 9) * w * 0.7, 0.75 + r * 0.6, z + face * 0.18, g).castShadow = false;
      }
    }
    const shopLight = { pos: new THREE.Vector3(cx, 2.3, z + face * 0.8), color: '#ffe0a0', intensity: 6, dist: 7, shadow: false };
    ctx.pointLights.push(shopLight);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), new THREE.MeshBasicMaterial({ color: '#fff3c8' }));
    bulb.position.copy(shopLight.pos);
    ctx.dynamic.add(bulb);
    ctx.nightOnly.push(bulb);
  } else {
    const s = box(w * 0.8, 2.5, 0.08, st, cx, 1.25, z + face * 0.04, g);
    s.castShadow = false;
  }
  // يافطة
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(w * 0.85, 4.2), 1.0),
    new THREE.MeshStandardMaterial({ map: signTexture(shop.name, shop.bg, '#fff', shop.sub), roughness: 0.7, emissive: '#ffffff', emissiveIntensity: 0 }));
  sign.position.set(cx, 3.0, z + face * 0.1);
  if (face < 0) sign.rotation.y = Math.PI;
  g.add(sign);
  ctx.litMats.push({ m: sign.material, lit: true, k: 0.25, emissiveMap: true });
  // تندة مقلمة
  if (shop.awning) {
    const n = Math.floor(w / 0.5);
    for (let i = 0; i < n; i++) {
      const a = box(0.5, 0.06, 1.3, mat(i % 2 ? '#e9e2cf' : shop.awning), x0 + 0.25 + i * 0.5 + (w - n * 0.5) / 2, 2.6, z + face * 0.6, g);
      a.rotation.x = face * 0.28;
    }
  }
}

export function balcony(ctx, x, y, z, face, w = 3.2) {
  const g = ctx.static;
  const d = 1.15;
  box(w, 0.16, d, mat('#8a8070'), x, y, z + face * d / 2, g);
  const railM = mat('#2f2a24', 0.6, { metalness: 0.5 });
  box(w, 0.06, 0.06, railM, x, y + 0.95, z + face * d, g);
  box(0.06, 0.06, d, railM, x - w / 2, y + 0.95, z + face * d / 2, g);
  box(0.06, 0.06, d, railM, x + w / 2, y + 0.95, z + face * d / 2, g);
  for (let i = 0; i <= 14; i++) {
    const bx = x - w / 2 + (i / 14) * w;
    box(0.035, 0.9, 0.035, railM, bx, y + 0.5, z + face * d, g).castShadow = true;
  }
  for (const s of [-1, 1]) for (let i = 1; i < 5; i++) box(0.035, 0.9, 0.035, railM, x + s * w / 2, y + 0.5, z + face * (i / 5) * d, g);
  // باب البلكونة
  box(1.1, 2.1, 0.06, mat('#5a3a22'), x - 0.4, y + 1.1, z + face * 0.03, g);
  // زرعة
  cyl(0.18, 0.13, 0.3, mat('#a4532e'), x + 1.1, y + 0.23, z + face * 0.35, g);
  const pl = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), mat('#3c7a3a'));
  pl.position.set(x + 1.1, y + 0.6, z + face * 0.35);
  pl.castShadow = true;
  g.add(pl);
  // منطقة البلكونة: لو الكورة دخلتها بتعلق
  ctx.balconies.push({
    min: new THREE.Vector3(x - w / 2, y + 0.08, Math.min(z, z + face * d)),
    max: new THREE.Vector3(x + w / 2, y + 1.0, Math.max(z, z + face * d)),
    momPos: new THREE.Vector3(x + 0.2, y + 0.08, z + face * 0.45),
    face,
  });
  ctx.colliders.push({ min: new THREE.Vector3(x - w / 2, y - 0.08, Math.min(z, z + face * d)), max: new THREE.Vector3(x + w / 2, y + 0.08, Math.max(z, z + face * d)), tag: 'balconyFloor' });
}

export function acUnit(g, x, y, z, face) {
  const m = mat('#e8e4dc', 0.6);
  box(0.85, 0.5, 0.45, m, x, y, z + face * 0.25, g);
  const grill = mat('#9a9a9a');
  for (let i = 0; i < 6; i++) box(0.05, 0.38, 0.02, grill, x - 0.3 + i * 0.12, y, z + face * 0.48, g).castShadow = false;
  // مية بتنقط
  box(0.03, 0.03, 0.3, mat('#555'), x + 0.3, y - 0.27, z + face * 0.3, g);
}

export function satelliteDish(g, x, y, z, face = 1) {
  const m = mat('#e4e4e0', 0.5);
  const dish = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.28), m);
  dish.material = mat('#e4e4e0', 0.5, { side: THREE.DoubleSide });
  dish.position.set(x, y + 0.9, z);
  dish.rotation.x = face * 1.9;
  dish.castShadow = true;
  g.add(dish);
  cyl(0.03, 0.03, 0.9, mat('#666'), x, y + 0.45, z, g);
  cyl(0.02, 0.02, 0.6, mat('#666'), x, y + 1.0, z + face * 0.3, g).rotation.x = face * 0.8;
}

export function waterTank(g, x, y, z) {
  const m = mat('#2f2f33', 0.6);
  cyl(0.6, 0.6, 1.4, m, x, y + 1.3, z, g, 18);
  cyl(0.3, 0.3, 0.12, m, x, y + 2.05, z, g);
  // رجول حديد
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.06, 0.6, 0.06, mat('#555'), x + sx * 0.4, y + 0.3, z + sz * 0.4, g);
}

export function laundryLine(g, a, b, rng, sag = 0.4) {
  const pts = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const p = new THREE.Vector3().lerpVectors(a, b, t);
    p.y -= Math.sin(t * Math.PI) * sag;
    pts.push(p);
  }
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: '#222' }));
  g.add(line);
  const colors = ['#e0e0ff', '#d84b4b', '#f2d24b', '#4a8bd8', '#ffffff', '#3c9a4a', '#f08a30', '#c070c0'];
  const clothes = [];
  const n = Math.floor(a.distanceTo(b) / 0.8);
  for (let i = 1; i < n; i++) {
    if (rng() < 0.25) continue;
    const t = i / n;
    const p = new THREE.Vector3().lerpVectors(a, b, t);
    p.y -= Math.sin(t * Math.PI) * sag;
    const w = 0.4 + rng() * 0.35, h = 0.45 + rng() * 0.45;
    const geo = new THREE.PlaneGeometry(w, h);
    geo.translate(0, -h / 2, 0);
    const c = new THREE.Mesh(geo, mat(colors[Math.floor(rng() * colors.length)], 0.95, { side: THREE.DoubleSide }));
    c.position.copy(p);
    c.rotation.y = Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2;
    c.castShadow = true;
    c.userData.dyn = true;
    g.add(c);
    clothes.push(c);
  }
  return clothes;
}

export function cable(g, a, b, sag = 0.6, color = '#151515') {
  const pts = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16;
    const p = new THREE.Vector3().lerpVectors(a, b, t);
    p.y -= Math.sin(t * Math.PI) * sag;
    pts.push(p);
  }
  g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color })));
}

// كشاف عمود نور: بيرجع مكان اللمبة
export function streetLamp(ctx, x, z, face, { flicker = false, h = 5.6, arm = 1.3, wall = false } = {}) {
  const g = ctx.static;
  const pm = mat('#2a2a2a', 0.5, { metalness: 0.6 });
  if (!wall) {
    cyl(0.07, 0.1, h, pm, x, h / 2, z, g, 8);
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.1, 0, z - 0.1), max: new THREE.Vector3(x + 0.1, h, z + 0.1), tag: 'pole' });
  }
  const armM = box(0.06, 0.06, arm, pm, x, h, z + face * arm / 2, g);
  armM.castShadow = false;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.28, 0.18, 12), mat('#333', 0.5));
  head.position.set(x, h - 0.05, z + face * arm);
  g.add(head);
  const bulbMat = new THREE.MeshStandardMaterial({ color: '#fff5d6', emissive: '#ffd27a', emissiveIntensity: 0 });
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), bulbMat);
  bulb.position.set(x, h - 0.16, z + face * arm);
  ctx.dynamic.add(bulb);
  ctx.lamps.push({ pos: bulb.position.clone(), bulbMat, flicker, face, wall, color: flicker ? '#ffc070' : '#ffd28a' });
}

// عربية فول
export function fulCart(ctx, x, z, rot = 0) {
  const grp = new THREE.Group();
  grp.position.set(x, 0, z);
  grp.rotation.y = rot;
  ctx.static.add(grp);
  const blue = mat('#2d6aa8', 0.6);
  box(2.4, 0.9, 1.1, blue, 0, 0.85, 0, grp);
  box(2.45, 0.08, 1.15, mat('#f1c232'), 0, 1.0, 0, grp);
  box(2.5, 0.06, 1.2, mat('#c8c8c8', 0.4, { metalness: 0.6 }), 0, 1.33, 0, grp);
  const steel = mat('#c9c9c9', 0.3, { metalness: 0.85 });
  cyl(0.32, 0.36, 0.55, steel, -0.6, 1.62, 0, grp);
  cyl(0.25, 0.28, 0.45, steel, 0.25, 1.58, 0.1, grp);
  // قدرة الفول بغطاها
  cyl(0.3, 0.3, 0.04, steel, -0.6, 1.92, 0, grp);
  for (const s of [-1, 1]) {
    const w = cyl(0.35, 0.35, 0.12, mat('#222'), s * 0.75, 0.35, 0.6, grp, 16);
    w.rotation.x = Math.PI / 2;
  }
  // يافطة
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.45), new THREE.MeshStandardMaterial({ map: signTexture('فول وفلافل', '#2d6aa8', '#fff'), roughness: 0.7 }));
  sg.position.set(0, 0.75, 0.56);
  grp.add(sg);
  // عمود ولمبة
  cyl(0.025, 0.025, 1.4, mat('#555'), 0.95, 2.0, 0, grp, 6);
  const lp = new THREE.Vector3(0.95, 2.65, 0).applyEuler(new THREE.Euler(0, rot, 0)).add(new THREE.Vector3(x, 0, z));
  ctx.pointLights.push({ pos: lp, color: '#ffeab0', intensity: 9, dist: 9, shadow: false });
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshBasicMaterial({ color: '#fff6d0' }));
  bulb.position.copy(lp);
  ctx.dynamic.add(bulb);
  ctx.nightOnly.push(bulb);
  addBoxCollider(ctx, grp, 2.5, 1.4, 1.2, 0.85);
}

function addBoxCollider(ctx, grp, w, h, d, cy = h / 2) {
  // بنفترض الدوران مضاعفات 90
  const c = Math.abs(Math.cos(grp.rotation.y)) > 0.5;
  const hw = (c ? w : d) / 2, hd = (c ? d : w) / 2;
  ctx.colliders.push({ min: new THREE.Vector3(grp.position.x - hw, 0, grp.position.z - hd), max: new THREE.Vector3(grp.position.x + hw, cy + h / 2, grp.position.z + hd), tag: 'obj', solid: true });
}

// فيات ١٢٨ قديمة راكنة
export function oldCar(ctx, x, z, rot = 0, color = '#c9b48a') {
  const grp = new THREE.Group();
  grp.position.set(x, 0, z);
  grp.rotation.y = rot;
  ctx.static.add(grp);
  const body = mat(color, 0.45, { metalness: 0.3 });
  box(3.9, 0.6, 1.6, body, 0, 0.62, 0, grp);
  box(2.0, 0.55, 1.45, body, -0.2, 1.18, 0, grp);
  const glassM = mat('#2a3540', 0.1, { metalness: 0.5 });
  box(2.02, 0.42, 1.3, glassM, -0.2, 1.2, 0, grp);
  box(1.6, 0.44, 1.47, glassM, -0.2, 1.2, 0, grp);
  const chrome = mat('#d0d0d0', 0.25, { metalness: 0.9 });
  box(0.12, 0.18, 1.62, chrome, 1.97, 0.45, 0, grp);
  box(0.12, 0.18, 1.62, chrome, -1.97, 0.45, 0, grp);
  for (const s of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), mat('#fff8e0', 0.2));
    hl.position.set(1.96, 0.72, s * 0.55);
    hl.rotation.y = Math.PI / 2;
    grp.add(hl);
  }
  for (const sx of [-1.25, 1.25]) for (const sz of [-0.78, 0.78]) {
    const w = cyl(0.3, 0.3, 0.2, mat('#1b1b1b'), sx, 0.3, sz, grp, 16);
    w.rotation.x = Math.PI / 2;
  }
  // غطا تراب على السقف
  box(1.8, 0.04, 1.3, mat('#8a7f6a'), -0.2, 1.47, 0, grp).castShadow = false;
  addBoxCollider(ctx, grp, 3.9, 1.5, 1.6, 0.75);
}

// توكتوك (بيتحرك، مش static)
export function toktokModel() {
  const grp = new THREE.Group();
  const body = mat('#e0a21c', 0.4, { metalness: 0.3 });
  const black = mat('#1b1b1b', 0.7);
  // الجسم
  box(2.2, 0.8, 1.2, body, 0, 0.75, 0, grp);
  box(1.6, 0.9, 1.25, black, -0.25, 1.55, 0, grp).material = mat('#111', 0.9);
  box(2.3, 0.08, 1.35, black, -0.1, 2.05, 0, grp);
  box(0.08, 0.9, 1.15, mat('#2a3540', 0.1, { metalness: 0.5 }), 0.85, 1.55, 0, grp);
  // بوز
  const nose = cyl(0.25, 0.45, 0.6, body, 1.2, 0.75, 0, grp);
  nose.rotation.z = Math.PI / 2;
  box(0.4, 0.04, 1.1, mat('#ffd23f'), 0.2, 1.15, 0, grp);
  // كتابة "ما شاء الله" على الضهر
  const txt = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.35), new THREE.MeshBasicMaterial({ map: textTexture('ما شاء الله', { color: '#b81f1f', font: '900 70px Cairo' }), transparent: true }));
  txt.position.set(-1.11, 1.0, 0);
  txt.rotation.y = -Math.PI / 2;
  grp.add(txt);
  const wheels = [];
  for (const [wx, wz] of [[1.25, 0], [-0.75, 0.62], [-0.75, -0.62]]) {
    const w = cyl(0.26, 0.26, 0.16, black, wx, 0.26, wz, grp, 14);
    w.rotation.x = Math.PI / 2;
    wheels.push(w);
  }
  // لمبة قدام
  const hl = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: '#fff4c0' }));
  hl.position.set(1.45, 0.95, 0);
  grp.add(hl);
  // لمبات ملونة ديسكو
  const disco = [];
  for (let i = 0; i < 6; i++) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 4), new THREE.MeshBasicMaterial({ color: ['#ff3355', '#33ff88', '#3388ff', '#ffdd33'][i % 4] }));
    d.position.set(-1.2 + i * 0.42, 2.1, 0.68);
    grp.add(d);
    disco.push(d);
  }
  grp.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { grp, wheels, disco };
}

export function bricksGoal(ctx, x, hw, side) {
  const m = mat('#a8452c', 0.9);
  const m2 = mat('#c65a3c', 0.9);
  for (const s of [-1, 1]) {
    const z = s * hw;
    // طوبتين فوق بعض
    const b1 = box(0.45, 0.22, 0.22, m, x, 0.11, z, ctx.static);
    b1.rotation.y = 0.15 * s;
    const b2 = box(0.45, 0.22, 0.22, m2, x + 0.03, 0.33, z + 0.02, ctx.static);
    b2.rotation.y = -0.1 * s;
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.24, 0, z - 0.13), max: new THREE.Vector3(x + 0.24, 0.45, z + 0.13), tag: 'post' });
  }
  // شبشب زيادة جنب الجون الأولاني
  if (side < 0) {
    const s = box(0.26, 0.03, 0.1, mat('#2e8b57'), x + 0.2, 0.015, hw + 0.45, ctx.static);
    s.rotation.y = 0.6;
  }
}

export function slippersGoal(ctx, x, hw) {
  const colors = ['#2e8b57', '#3a6fd8', '#e05a30', '#222'];
  let i = 0;
  for (const s of [-1, 1]) {
    const z = s * hw;
    for (const o of [-0.06, 0.08]) {
      const sl = box(0.28, 0.035, 0.11, mat(colors[(i++) % 4], 0.8), x + o, 0.018, z + o, ctx.static);
      sl.rotation.y = s * 0.4 + o * 4;
      const strap = box(0.04, 0.05, 0.12, mat('#eee'), x + o + 0.05, 0.04, z + o, ctx.static);
      strap.rotation.y = sl.rotation.y;
    }
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.18, 0, z - 0.12), max: new THREE.Vector3(x + 0.18, 0.08, z + 0.12), tag: 'post' });
  }
}

// عارضة حديد صدية بشبكة مقطعة
export function frameGoal(ctx, x, hw, h, side) {
  const rust = mat('#8a5a3a', 0.6, { metalness: 0.5 });
  const paint = mat('#d8d4c8', 0.5, { metalness: 0.3 });
  const depth = 1.4;
  const r = 0.06;
  for (const s of [-1, 1]) {
    const p = cyl(r, r, h, s > 0 ? paint : rust, x, h / 2, s * hw, ctx.static, 10);
    ctx.colliders.push({ min: new THREE.Vector3(x - r, 0, s * hw - r), max: new THREE.Vector3(x + r, h, s * hw + r), tag: 'post', metal: true });
    // ضهر
    const back = cyl(0.03, 0.03, Math.hypot(depth, h), rust, x + side * depth / 2, h / 2, s * hw, ctx.static, 6);
    back.rotation.z = side * Math.atan2(depth, h);
    box(0.05, 0.05, 0.05, rust, x + side * depth, 0.02, s * hw, ctx.static);
  }
  const bar = cyl(r, r, hw * 2, paint, x, h, 0, ctx.static, 10);
  bar.rotation.x = Math.PI / 2;
  ctx.colliders.push({ min: new THREE.Vector3(x - r, h - r, -hw), max: new THREE.Vector3(x + r, h + r, hw), tag: 'post', metal: true });
  // شبكة
  const netM = new THREE.MeshStandardMaterial({ map: netTexture(), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 1 });
  netM.map.repeat.set(6, 3);
  const backNet = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, Math.hypot(depth, h)), netM);
  backNet.position.set(x + side * depth / 2, h / 2, 0);
  backNet.rotation.y = Math.PI / 2;
  backNet.rotation.order = 'YXZ';
  backNet.rotation.x = -side * Math.atan2(depth, h);
  ctx.static.add(backNet);
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); shape.lineTo(side * depth, 0); shape.lineTo(0, h); shape.closePath();
    const sn = new THREE.Mesh(new THREE.ShapeGeometry(shape), netM);
    sn.position.set(x, 0, s * hw);
    ctx.static.add(sn);
  }
  // الكورة لما تدخل بتهدى في الشبكة
  ctx.colliders.push({ min: new THREE.Vector3(Math.min(x + side * depth, x + side * (depth + 0.1)), 0, -hw), max: new THREE.Vector3(Math.max(x + side * depth, x + side * (depth + 0.1)), h, hw), tag: 'net' });
  ctx.colliders.push({ min: new THREE.Vector3(Math.min(x, x + side * depth), 0, -hw - 0.05), max: new THREE.Vector3(Math.max(x, x + side * depth), h, -hw), tag: 'net' });
  ctx.colliders.push({ min: new THREE.Vector3(Math.min(x, x + side * depth), 0, hw), max: new THREE.Vector3(Math.max(x, x + side * depth), h, hw + 0.05), tag: 'net' });
  ctx.colliders.push({ min: new THREE.Vector3(Math.min(x, x + side * depth), h, -hw), max: new THREE.Vector3(Math.max(x, x + side * depth), h + 0.05, hw), tag: 'net' });
}

export function chalkGoal(ctx, x, hw, h, face) {
  // مرسوم بالطباشير على الحيطة
  const t = textTexture('', { w: 8, h: 8 });
  const m = new THREE.MeshBasicMaterial({ color: '#f4f2ea', transparent: true, opacity: 0.85 });
  const th = 0.07;
  const mk = (w, hh, px, py) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), m);
    p.position.set(x + face * 0.012, py, px);
    p.rotation.y = face * Math.PI / 2;
    ctx.static.add(p);
  };
  mk(th, h, -hw, h / 2);
  mk(th, h, hw, h / 2);
  mk(hw * 2 + th, th, 0, h);
  // شخبطة جوا الجون
  for (let i = 0; i < 5; i++) mk(0.03, h * 0.9, -hw + (i + 1) * (hw * 2) / 6, h * 0.45);
  for (let i = 0; i < 3; i++) mk(hw * 2, 0.03, 0, (i + 1) * h / 4);
  t.dispose();
}

export function tree(g, x, z, s = 1, rng = Math.random) {
  const trunk = cyl(0.14 * s, 0.22 * s, 2.6 * s, mat('#5a4030', 0.95), x, 1.3 * s, z, g, 8);
  trunk.rotation.z = (rng() - 0.5) * 0.15;
  const leafM = mat(rng() < 0.5 ? '#4f7a3a' : '#5d8a40', 0.9);
  for (let i = 0; i < 6; i++) {
    const l = new THREE.Mesh(new THREE.IcosahedronGeometry((0.9 + rng() * 0.5) * s, 1), leafM);
    l.position.set(x + (rng() - 0.5) * 1.4 * s, (2.8 + rng() * 1.2) * s, z + (rng() - 0.5) * 1.4 * s);
    l.castShadow = true;
    g.add(l);
  }
}

export function barrel(g, x, z, color = '#3a5a8a') {
  const b = cyl(0.32, 0.32, 0.9, mat(color, 0.6, { metalness: 0.4 }), x, 0.45, z, g, 14);
  for (const y of [0.2, 0.7]) cyl(0.335, 0.335, 0.04, mat('#5a3a2a', 0.6, { metalness: 0.4 }), x, y, z, g, 14);
  return b;
}

export function tirePile(g, x, z, n = 3) {
  for (let i = 0; i < n; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.13, 8, 16), mat('#1c1c1c', 0.9));
    t.rotation.x = Math.PI / 2;
    t.position.set(x + (i % 2) * 0.05, 0.13 + i * 0.24, z);
    t.castShadow = true;
    g.add(t);
  }
}

export function plasticChair(g, x, z, rot = 0, color = '#e8e8e2') {
  const grp = new THREE.Group();
  grp.position.set(x, 0, z);
  grp.rotation.y = rot;
  const m = mat(color, 0.5);
  box(0.45, 0.05, 0.45, m, 0, 0.45, 0, grp);
  box(0.45, 0.45, 0.04, m, 0, 0.7, -0.21, grp);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.04, 0.45, 0.04, m, sx * 0.19, 0.22, sz * 0.19, grp);
  g.add(grp);
  return grp;
}

export function cafeTable(g, x, z) {
  cyl(0.35, 0.35, 0.04, mat('#d8d0c0', 0.5), x, 0.72, z, g, 16);
  cyl(0.04, 0.04, 0.72, mat('#666'), x, 0.36, z, g, 6);
  // طاولة زهر
  box(0.4, 0.04, 0.25, mat('#6a3a1a'), x, 0.76, z, g);
  // كوبايتين شاي
  for (const s of [-1, 1]) cyl(0.03, 0.025, 0.08, mat('#c8603a', 0.2), x + s * 0.25, 0.78, z + 0.1, g, 8);
}

export function pigeonCoop(ctx, x, z) {
  const g = ctx.static;
  const wood = mat('#7a5a3a', 0.9);
  const mesh = mat('#3a3a3a', 0.7);
  // رجول
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.1, 2.2, 0.1, wood, x + sx * 1.2, 1.1, z + sz * 0.9, g);
  box(2.6, 1.6, 2.0, wood, x, 2.9, z, g);
  box(2.5, 1.4, 0.02, mesh, x, 2.9, z + 1.01, g);
  // سقف
  const roof = box(3.0, 0.08, 2.4, mat('#8a8a8a', 0.5, { metalness: 0.5 }), x, 3.8, z, g);
  roof.rotation.z = 0.08;
  // سلم
  for (let i = 0; i < 6; i++) box(0.5, 0.04, 0.06, wood, x - 1.6, 0.3 + i * 0.38, z + 1.0, g);
  box(0.05, 2.4, 0.06, wood, x - 1.85, 1.2, z + 1.0, g);
  box(0.05, 2.4, 0.06, wood, x - 1.35, 1.2, z + 1.0, g);
  ctx.colliders.push({ min: new THREE.Vector3(x - 1.3, 0, z - 1.0), max: new THREE.Vector3(x + 1.3, 3.8, z + 1.0), tag: 'obj', solid: true });
}

export function flagPole(ctx, x, z) {
  const g = ctx.static;
  cyl(0.05, 0.07, 8, mat('#c0c0c0', 0.3, { metalness: 0.8 }), x, 4, z, g, 8);
  // علم مصر
  const flag = new THREE.Group();
  flag.position.set(x, 7.3, z);
  const cols = ['#ce1126', '#ffffff', '#000000'];
  for (let i = 0; i < 3; i++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.33), mat(cols[i], 0.9, { side: THREE.DoubleSide }));
    p.position.set(0.78, 0.33 - i * 0.33, 0);
    flag.add(p);
  }
  const eagle = new THREE.Mesh(new THREE.CircleGeometry(0.1, 10), mat('#c09a30', 0.6, { side: THREE.DoubleSide }));
  eagle.position.set(0.78, 0, 0.005);
  flag.add(eagle);
  g.add(flag);
  ctx.flags.push(flag);
}

export function wall(ctx, x0, z0, x1, z1, h, m, { thick = 0.3, collide = true, collideH = null, cap = true } = {}) {
  const len = Math.hypot(x1 - x0, z1 - z0);
  const w = new THREE.Mesh(new THREE.BoxGeometry(len, h, thick), m);
  w.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2);
  w.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
  w.castShadow = true; w.receiveShadow = true;
  ctx.static.add(w);
  if (cap) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(len + 0.05, 0.08, thick + 0.08), mat('#b3aa9a'));
    c.position.set(w.position.x, h + 0.04, w.position.z);
    c.rotation.y = w.rotation.y;
    c.castShadow = true;
    ctx.static.add(c);
  }
  if (collide) {
    const hx = Math.abs(x1 - x0) / 2 + thick / 2, hz = Math.abs(z1 - z0) / 2 + thick / 2;
    ctx.colliders.push({ min: new THREE.Vector3((x0 + x1) / 2 - hx, 0, (z0 + z1) / 2 - hz), max: new THREE.Vector3((x0 + x1) / 2 + hx, collideH ?? h, (z0 + z1) / 2 + hz), tag: 'wall' });
  }
  return w;
}

export { netTexture, crackedGlassTexture };
