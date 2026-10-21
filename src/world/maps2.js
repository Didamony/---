// أماكن زيادة: موقف الميكروباص، قدام الجامع، البلاج، ساحة السوق
import * as THREE from 'three';
import { mat } from '../actors/character.js';
import { makeRng } from '../core/util.js';
import { plasterTexture, graffitiTexture, signTexture, canvasTex } from '../render/textures.js';
import {
  box, cyl, building, balcony, cable, streetLamp, fulCart, barrel, tirePile, plasticChair, cafeTable, wall,
} from './props.js';
import { ground, goals, seated } from './maps.js';

// ------------------------------------------------------------ حاجات خاصة بالأماكن دي
function microbus(ctx, x, z, rot, color = '#f2efe6', stripe = '#2a63c8') {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rot;
  ctx.static.add(g);
  const body = mat(color, 0.55);
  box(4.6, 1.55, 1.85, body, 0, 1.25, 0, g);
  box(4.0, 0.5, 1.8, body, -0.2, 2.2, 0, g);
  box(4.62, 0.16, 1.87, mat(stripe, 0.5), 0, 1.05, 0, g);
  const glass = mat('#2a3540', 0.15, { metalness: 0.4 });
  for (const s of [-1, 1]) {
    for (let i = 0; i < 4; i++) box(0.75, 0.42, 0.02, glass, -1.6 + i * 0.95, 2.15, s * 0.93, g);
  }
  box(0.02, 0.7, 1.6, glass, 2.31, 1.95, 0, g);
  box(0.04, 0.3, 1.6, mat('#bbb', 0.4, { metalness: 0.6 }), 2.32, 0.65, 0, g);
  for (const sx of [-1.5, 1.5]) for (const s of [-1, 1]) {
    const w = cyl(0.36, 0.36, 0.24, mat('#1a1a1a', 0.9), sx, 0.36, s * 0.86, g, 16);
    w.rotation.x = Math.PI / 2;
  }
  // يافطة الخط فوق الزجاج
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.28), new THREE.MeshStandardMaterial({ map: signTexture(['المنيب', 'رمسيس', 'الجيزة', 'العتبة'][Math.abs(Math.round(x)) % 4], '#111', '#ffd23f'), roughness: 0.7 }));
  sg.position.set(2.33, 2.45, 0);
  sg.rotation.y = Math.PI / 2;
  g.add(sg);
  const c = Math.abs(Math.cos(rot)) > 0.5;
  const hw = c ? 2.35 : 0.95, hd = c ? 0.95 : 2.35;
  ctx.colliders.push({ min: new THREE.Vector3(x - hw, 0, z - hd), max: new THREE.Vector3(x + hw, 2.5, z + hd), tag: 'obj', solid: true, metal: true });
}

function kiosk(ctx, x, z, name, color) {
  const g = ctx.static;
  box(2.2, 2.4, 1.6, mat(color, 0.6), x, 1.2, z, g);
  box(2.5, 0.1, 1.9, mat('#d8d0c0', 0.5), x, 2.45, z + 0.1, g);
  box(1.6, 0.9, 0.05, mat('#20262a', 0.2, { metalness: 0.3 }), x, 1.5, z + 0.81, g);
  // ثلاجة حاجة ساقعة
  box(0.7, 1.4, 0.6, mat('#c8202a', 0.4), x + 1.5, 0.7, z + 0.2, g);
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.45), new THREE.MeshStandardMaterial({ map: signTexture(name, '#1f4e7a', '#fff'), roughness: 0.7 }));
  sg.position.set(x, 2.15, z + 0.82);
  g.add(sg);
  ctx.colliders.push({ min: new THREE.Vector3(x - 1.1, 0, z - 0.8), max: new THREE.Vector3(x + 1.9, 2.5, z + 0.85), tag: 'obj', solid: true });
}

function tiresGoal(ctx, x, hw) {
  for (const s of [-1, 1]) {
    tirePile(ctx.static, x, s * hw, 2);
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.42, 0, s * hw - 0.42), max: new THREE.Vector3(x + 0.42, 0.5, s * hw + 0.42), tag: 'post' });
  }
}

function cratesGoal(ctx, x, hw) {
  const wood = mat('#b08a55', 0.9);
  const fruit = [mat('#e8762a', 0.6), mat('#c8282a', 0.6), mat('#5a9a3a', 0.7)];
  let i = 0;
  for (const s of [-1, 1]) {
    for (let k = 0; k < 2; k++) {
      box(0.5, 0.3, 0.38, wood, x, 0.15 + k * 0.31, s * hw, ctx.static);
    }
    for (let k = 0; k < 4; k++) {
      const f = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), fruit[(i++) % 3]);
      f.position.set(x - 0.12 + (k % 2) * 0.24, 0.66, s * hw - 0.08 + Math.floor(k / 2) * 0.16);
      ctx.static.add(f);
    }
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.26, 0, s * hw - 0.2), max: new THREE.Vector3(x + 0.26, 0.7, s * hw + 0.2), tag: 'post' });
  }
}

function bagsGoal(ctx, x, hw) {
  const colors = ['#2a63c8', '#e05a30', '#e8c020', '#2e8b57'];
  let i = 0;
  for (const s of [-1, 1]) {
    // شنطة بحر وفوطة مطبقة عليها
    const b = box(0.5, 0.32, 0.3, mat(colors[(i++) % 4], 0.8), x, 0.16, s * hw, ctx.static);
    b.rotation.y = 0.3 * s;
    box(0.55, 0.06, 0.35, mat(colors[(i++) % 4], 0.95), x + 0.02, 0.35, s * hw, ctx.static).rotation.y = -0.2 * s;
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.28, 0, s * hw - 0.2), max: new THREE.Vector3(x + 0.28, 0.4, s * hw + 0.2), tag: 'post' });
  }
}

const GOAL_BUILDERS = { tires: tiresGoal, crates: cratesGoal, bags: bagsGoal };
export function extraGoal(ctx, type, x, hw) {
  const fn = GOAL_BUILDERS[type];
  if (fn) fn(ctx, x, hw);
  return !!fn;
}

function stall(ctx, x, z, face, { w = 3, awning = '#c8322a', goods = 'veg' } = {}) {
  const g = ctx.static;
  const wood = mat('#8a6a42', 0.9);
  box(w, 0.8, 1.1, wood, x, 0.4, z, g);
  // بضاعة
  const palette = goods === 'veg' ? ['#c8282a', '#e8762a', '#5a9a3a', '#7a3a8a', '#e8c020'] : goods === 'fish' ? ['#9aa6b0', '#b8c4cc', '#7a8a96'] : ['#e8d8b0', '#c8a070', '#f0ece0'];
  const rng = makeRng(Math.round(x * 13 + z * 7));
  for (let k = 0; k < Math.round(w * 3); k++) {
    const pile = new THREE.Mesh(new THREE.SphereGeometry(0.2 + rng() * 0.08, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), mat(palette[k % palette.length], 0.65));
    pile.position.set(x - w / 2 + 0.25 + (k % Math.round(w * 1.5)) * (w - 0.5) / Math.max(1, Math.round(w * 1.5) - 1), 0.8, z + (k < w * 1.5 ? -0.25 : 0.25));
    pile.scale.y = 0.7;
    g.add(pile);
  }
  // مظلة
  const am = new THREE.MeshStandardMaterial({
    map: canvasTex(128, 32, (c, W, H) => { for (let i = 0; i < 8; i++) { c.fillStyle = i % 2 ? '#f2efe6' : awning; c.fillRect(i * W / 8, 0, W / 8, H); } }),
    roughness: 0.9, side: THREE.DoubleSide,
  });
  const aw = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.4, 1.6), am);
  aw.position.set(x, 2.25, z - face * 0.1);
  aw.rotation.x = -Math.PI / 2 + face * 0.25;
  aw.castShadow = true;
  g.add(aw);
  for (const sx of [-1, 1]) cyl(0.03, 0.03, 2.3, mat('#555'), x + sx * (w / 2 + 0.1), 1.15, z + face * 0.6, g, 6);
  ctx.colliders.push({ min: new THREE.Vector3(x - w / 2, 0, z - 0.55), max: new THREE.Vector3(x + w / 2, 0.9, z + 0.55), tag: 'obj', solid: true });
}

function bulbString(ctx, a, b, n, sag = 0.5) {
  cable(ctx.static, a, b, sag, '#222');
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const p = new THREE.Vector3().lerpVectors(a, b, t);
    p.y -= Math.sin(t * Math.PI) * sag + 0.06;
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffe6a0' }));
    m.position.copy(p);
    ctx.dynamic.add(m);
    ctx.nightOnly.push(m);
    if (i % Math.ceil(n / 3) === 0) ctx.pointLights.push({ pos: p.clone(), color: '#ffcf80', intensity: 4, dist: 7, shadow: false });
  }
}

function umbrella(g, x, z, color, rng) {
  cyl(0.03, 0.03, 2.3, mat('#ddd', 0.5), x, 1.15, z, g, 6).rotation.z = (rng() - 0.5) * 0.2;
  const top = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.5, 12, 1, true), new THREE.MeshStandardMaterial({
    map: canvasTex(128, 16, (c, W, H) => { for (let i = 0; i < 12; i++) { c.fillStyle = i % 2 ? '#f6f2e8' : color; c.fillRect(i * W / 12, 0, W / 12, H); } }),
    roughness: 0.8, side: THREE.DoubleSide,
  }));
  top.position.set(x, 2.4, z);
  top.castShadow = true;
  g.add(top);
}

function palm(g, x, z, s = 1, rng = Math.random) {
  const trunkM = mat('#7a6040', 0.95);
  let px = x, py = 0;
  const lean = (rng() - 0.5) * 0.3;
  for (let i = 0; i < 7; i++) {
    const seg = cyl(0.16 * s, 0.2 * s, 0.75 * s, trunkM, px, py + 0.37 * s, z, g, 7);
    seg.rotation.z = lean;
    px -= Math.sin(lean) * 0.75 * s;
    py += 0.73 * s;
  }
  const leafM = mat('#4a7a32', 0.85);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const leaf = box(2.2 * s, 0.04, 0.42 * s, leafM, px + Math.cos(a) * 1.0 * s, py + 0.1, z + Math.sin(a) * 1.0 * s, g);
    leaf.rotation.y = -a;
    leaf.rotation.z = -0.45;
  }
}

function seaTexture() {
  return canvasTex(512, 256, (g, W, H) => {
    const gr = g.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, '#1d5a7a');
    gr.addColorStop(0.7, '#2a7f96');
    gr.addColorStop(1, '#4aa8b0');
    g.fillStyle = gr;
    g.fillRect(0, 0, W, H);
    for (let i = 0; i < 260; i++) {
      g.strokeStyle = `rgba(255,255,255,${0.08 + Math.random() * 0.15})`;
      g.lineWidth = 1 + Math.random() * 2;
      const x = Math.random() * W, y = Math.random() * H;
      g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 10, y - 3, x + 22 + Math.random() * 20, y); g.stroke();
    }
  });
}

// ======================================================================= موقف الميكروباص
export function buildMicrobus(ctx) {
  const rng = makeRng(61);
  const L = ctx.def.halfL + 1.6, W = ctx.def.halfW + 2.2;
  ground(ctx, 'asphalt', 52, 28, 31);
  ctx.bounds = { minX: -L + 0.4, maxX: L - 0.4, minZ: -W + 0.4, maxZ: W - 0.4 };
  ctx.camZ = 0.6;
  // رصيف ورا وعماير
  box(52, 0.18, 2.2, mat('#a39a8a', 0.95), 0, 0.09, -W - 1.1, ctx.static);
  const colors = ['#c4a07a', '#bfae94', '#b98d6a', '#d7c3a0', '#a9907a', '#c9a982'];
  for (let i = 0; i < 7; i++) {
    const x0 = -27 + i * 7.7;
    building(ctx, { x0, x1: x0 + 7.7, z: -W - 2.2, face: 1, h: 11 + rng() * 6, color: colors[i % 6], seed: 120 + i, floors: 4, lit: 0.5, ...(i === 2 ? { shop: { name: 'كشري التحرير', bg: '#a8321a', open: true } } : i === 4 ? { shop: { name: 'عصير قصب', bg: '#2f7a48', open: true, awning: '#3a8a52' } } : { door: true }) });
  }
  balcony(ctx, 2, 6.4, -W - 2.2, 1, 3.0);
  ctx.colliders.push({ min: new THREE.Vector3(-30, 0, -W - 3), max: new THREE.Vector3(30, 20, -W), tag: 'wall', invisible: true });
  // ميكروباصات راكنة على الجنبين
  microbus(ctx, -L - 0.4, -3.2, Math.PI / 2, '#f2efe6', '#2a63c8');
  microbus(ctx, -L - 0.6, 3.0, Math.PI / 2 + 0.06, '#f4f0e0', '#c8322a');
  microbus(ctx, L + 0.5, -2.6, -Math.PI / 2, '#efeadc', '#2f8f46');
  microbus(ctx, -9, -W + 0.9, 0.02, '#f2efe6', '#e2b21c');
  microbus(ctx, 10, -W + 0.9, -0.03, '#f6f2ea', '#2a63c8');
  ctx.colliders.push({ min: new THREE.Vector3(-L - 3, 0, -W), max: new THREE.Vector3(-L, 20, W), tag: 'wall', invisible: true });
  ctx.colliders.push({ min: new THREE.Vector3(L, 0, -W), max: new THREE.Vector3(L + 3, 20, W), tag: 'wall', invisible: true });
  // الكشك
  kiosk(ctx, 1, -W + 0.9, 'كشك الأمانة', '#e8e0d0');
  // سور قصير قدام
  const nearM = new THREE.MeshStandardMaterial({ map: plasterTexture('#b9a888', 125, { band: 'rgba(60,50,40,0.4)', bricks: false }), roughness: 0.95 });
  wall(ctx, -L - 3, W, L + 3, W, 0.8, nearM, { thick: 0.35, collideH: 30 });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(7, 1.2), new THREE.MeshBasicMaterial({
    map: graffitiTexture([{ text: 'موقف المنيب', color: 'rgba(250,245,230,0.9)', font: '900 110px Cairo' }]), transparent: true,
  }));
  sign.position.set(-6, 3.6, -W - 2.15);
  ctx.static.add(sign);
  // ستاند الشاي بتاع السواقين
  cafeTable(ctx.static, 6.5, -W + 0.9);
  plasticChair(ctx.static, 5.7, -W + 0.9, Math.PI / 2, '#2a6ad8');
  plasticChair(ctx.static, 7.3, -W + 0.9, -Math.PI / 2, '#d8402a');
  seated(ctx, 5.7, -W + 0.9, Math.PI / 2, 'old');
  seated(ctx, 7.3, -W + 0.9, -Math.PI / 2, 'old');
  seated(ctx, -3.5, W - 0.45, Math.PI, 'kid');
  seated(ctx, 3.8, W - 0.45, Math.PI, 'kid');
  barrel(ctx.static, -L + 1.2, W - 1.4, '#2f5a8a');
  ctx.colliders.push({ min: new THREE.Vector3(-L + 0.8, 0, W - 1.8), max: new THREE.Vector3(-L + 1.6, 0.9, W - 1.0), tag: 'obj', solid: true });
  // كشافات
  for (const [x, fl] of [[-14, false], [-4.5, true], [5, false], [14.5, false]]) streetLamp(ctx, x, -W + 0.1, 1, { arm: 2.2, h: 6, flicker: fl });
  for (const [a, b] of [[-14, -4.5], [-4.5, 5], [5, 14.5]]) cable(ctx.static, new THREE.Vector3(a, 5.9, -W + 0.1), new THREE.Vector3(b, 5.9, -W + 0.1), 0.5);
  ctx.walkerPaths.push({ a: new THREE.Vector3(-L + 1, 0, -W + 2.2), b: new THREE.Vector3(L - 1, 0, -W + 2.2) });
  ctx.walkerPaths.push({ a: new THREE.Vector3(L - 1, 0, W - 1), b: new THREE.Vector3(-L + 1, 0, W - 1) });
  ctx.walkerPaths.push({ cross: true, z0: -W + 2.2, z1: W - 1 });
  ctx.extras.toktok = { z: 1.5, from: -L - 2, to: L + 2 };
  goals(ctx);
}

// ======================================================================= قدام الجامع
export function buildMosque(ctx) {
  const rng = makeRng(71);
  const L = ctx.def.halfL + 1.2, W = ctx.def.halfW + 1.6;
  ground(ctx, 'tiles', 48, 26, 41);
  ctx.bounds = { minX: -L + 0.4, maxX: L - 0.4, minZ: -W + 0.4, maxZ: W - 0.4 };
  ctx.camZ = 0.6;
  // واجهة الجامع: أقواس وباب أخضر
  const MZ = -W;
  const facade = new THREE.MeshStandardMaterial({
    map: canvasTex(1024, 256, (g, Wd, H) => {
      g.fillStyle = '#e6dcc4'; g.fillRect(0, 0, Wd, H);
      g.fillStyle = 'rgba(160,140,110,0.25)'; for (let i = 0; i < 300; i++) g.fillRect(Math.random() * Wd, Math.random() * H, 3, 2);
      // شريط زخرفة
      g.fillStyle = '#3a7a5a'; g.fillRect(0, 26, Wd, 10);
      for (let i = 0; i < 9; i++) {
        const cx = (i + 0.5) * Wd / 9;
        g.fillStyle = '#5a4a38';
        g.beginPath(); g.moveTo(cx - 34, H - 20); g.lineTo(cx - 34, 120); g.arc(cx, 120, 34, Math.PI, 0); g.lineTo(cx + 34, H - 20); g.fill();
        g.strokeStyle = '#c9a040'; g.lineWidth = 4; g.stroke();
      }
    }),
    roughness: 0.9,
  });
  box(L * 2 + 10, 7, 1.0, facade, 0, 3.5, MZ - 0.5, ctx.static);
  box(L * 2 + 10.4, 0.4, 1.3, mat('#d8ccb0', 0.85), 0, 7.2, MZ - 0.5, ctx.static);
  // الباب الكبير
  box(2.4, 3.4, 0.1, mat('#2f6a4a', 0.6), 0, 1.7, MZ + 0.02, ctx.static);
  for (const s of [-1, 1]) cyl(0.04, 0.04, 0.3, mat('#c9a040', 0.3, { metalness: 0.8 }), s * 0.18, 1.6, MZ + 0.1, ctx.static, 6);
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.1), new THREE.MeshStandardMaterial({ map: signTexture('مسجد النور', '#2f6a4a', '#fff4c8'), roughness: 0.7 }));
  sg.position.set(0, 4.4, MZ + 0.03);
  ctx.static.add(sg);
  // قبة
  const dome = new THREE.Mesh(new THREE.SphereGeometry(4, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat('#d8ccb0', 0.7));
  dome.position.set(0, 7.3, MZ - 5);
  ctx.static.add(dome);
  const crescent = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.06, 6, 16, Math.PI * 1.4), mat('#d8b040', 0.3, { metalness: 0.8 }));
  crescent.position.set(0, 11.9, MZ - 5);
  ctx.static.add(crescent);
  // مأذنة
  const mn = new THREE.Group();
  const mm = mat('#e8dcc0', 0.8);
  cyl(0.9, 1.1, 14, mm, 0, 7, 0, mn, 10);
  cyl(1.4, 1.4, 0.4, mm, 0, 12, 0, mn, 12);
  cyl(0.7, 0.85, 4, mm, 0, 16, 0, mn, 10);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.75, 2, 10), mat('#3a7a5a', 0.6));
  cone.position.y = 19;
  mn.add(cone);
  // سماعات
  for (const a of [0.6, 2.4]) { const sp = cyl(0.12, 0.25, 0.4, mat('#ccc', 0.4), Math.cos(a) * 0.9, 14.5, Math.sin(a) * 0.9, mn, 8); sp.rotation.z = Math.PI / 2; }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.05, 6, 24), new THREE.MeshBasicMaterial({ color: '#7dffb0' }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 12.25;
  mn.add(ring);
  ctx.nightOnly.push(ring);
  mn.position.set(L - 2, 0, MZ - 2.2);
  ctx.static.add(mn);
  ctx.colliders.push({ min: new THREE.Vector3(-40, 0, MZ - 1), max: new THREE.Vector3(40, 20, MZ), tag: 'wall' });
  // رف الجزم والشباشب قدام الباب
  const shelf = mat('#7a5a3a', 0.9);
  for (const s of [-1, 1]) {
    box(1.8, 0.9, 0.4, shelf, s * 2.6, 0.45, MZ + 0.25, ctx.static);
    for (let k = 0; k < 6; k++) box(0.24, 0.05, 0.1, mat(['#222', '#6a4a2a', '#2e8b57', '#3a6fd8'][k % 4], 0.8), s * 2.6 - 0.6 + (k % 3) * 0.6, 0.47 + Math.floor(k / 3) * 0.4, MZ + 0.4, ctx.static);
    ctx.colliders.push({ min: new THREE.Vector3(s * 2.6 - 0.9, 0, MZ), max: new THREE.Vector3(s * 2.6 + 0.9, 0.9, MZ + 0.45), tag: 'obj', solid: true });
  }
  // كولدير
  box(0.9, 1.5, 0.5, mat('#c8c8c8', 0.3, { metalness: 0.7 }), -7, 0.75, MZ + 0.3, ctx.static);
  ctx.colliders.push({ min: new THREE.Vector3(-7.5, 0, MZ), max: new THREE.Vector3(-6.5, 1.5, MZ + 0.55), tag: 'obj', solid: true });
  // دكك الحجارة للكبار
  for (const x of [-11, 8.5]) {
    box(3.0, 0.45, 0.6, mat('#c8bca0', 0.9), x, 0.22, MZ + 0.5, ctx.static);
    ctx.colliders.push({ min: new THREE.Vector3(x - 1.5, 0, MZ), max: new THREE.Vector3(x + 1.5, 0.45, MZ + 0.8), tag: 'obj', solid: true });
  }
  seated(ctx, -11.8, MZ + 0.55, 0, 'old');
  seated(ctx, -10.3, MZ + 0.55, 0, 'old');
  seated(ctx, 8.5, MZ + 0.55, 0, 'old');
  // حيطان الجنب: عماير
  building(ctx, { x0: -L - 9, x1: -L, z: MZ + 0.5, face: 1, h: 12, color: '#c4a07a', seed: 131, floors: 4, lit: 0.5, door: true });
  building(ctx, { x0: L, x1: L + 9, z: MZ + 0.5, face: 1, h: 13, color: '#bfae94', seed: 132, floors: 4, lit: 0.5, shop: { name: 'عطارة الحاج سيد', bg: '#6a3a1a', open: true } });
  balcony(ctx, -L - 4.5, 6.4, MZ + 0.5, 1, 3.0);
  const sideM = new THREE.MeshStandardMaterial({ map: plasterTexture('#c9b896', 133, { band: 'rgba(60,50,40,0.4)' }), roughness: 0.95 });
  wall(ctx, -L, MZ, -L, W, 2.6, sideM, { thick: 0.4, collideH: 30 });
  wall(ctx, L, MZ, L, W, 2.6, sideM, { thick: 0.4, collideH: 30 });
  wall(ctx, -L, W, L, W, 0.75, new THREE.MeshStandardMaterial({ map: plasterTexture('#c9b896', 134, { bricks: false }), roughness: 0.95 }), { thick: 0.35, collideH: 30 });
  palm(ctx.static, -L + 1.2, W - 1.3, 1, rng);
  palm(ctx.static, L - 1.3, W - 1.4, 0.9, rng);
  ctx.colliders.push({ min: new THREE.Vector3(-L + 0.9, 0, W - 1.6), max: new THREE.Vector3(-L + 1.5, 4, W - 1.0), tag: 'obj', solid: true });
  ctx.colliders.push({ min: new THREE.Vector3(L - 1.6, 0, W - 1.7), max: new THREE.Vector3(L - 1.0, 4, W - 1.1), tag: 'obj', solid: true });
  // فوانيس على الواجهة
  for (const [x, fl] of [[-9, false], [-3.2, false], [3.2, true], [9, false]]) streetLamp(ctx, x, MZ + 0.05, 1, { h: 5.2, arm: 0.8, wall: true, flicker: fl });
  ctx.walkerPaths.push({ a: new THREE.Vector3(-L + 1, 0, MZ + 1.4), b: new THREE.Vector3(L - 1, 0, MZ + 1.4) });
  ctx.walkerPaths.push({ a: new THREE.Vector3(L - 1, 0, MZ + 1.4), b: new THREE.Vector3(0, 0, MZ + 0.4) });
  ctx.extras.bike = { z: W - 1.2 };
  goals(ctx);
}

// ======================================================================= البلاج
export function buildBeach(ctx) {
  const rng = makeRng(83);
  const L = ctx.def.halfL + 2.5, W = ctx.def.halfW + 2;
  ground(ctx, 'sand', 64, 32, 51);
  ctx.bounds = { minX: -L + 0.4, maxX: L - 0.4, minZ: -W + 0.4, maxZ: W - 0.4 };
  ctx.camZ = 0.8;
  // البحر ورا
  const seaM = new THREE.MeshStandardMaterial({ map: seaTexture(), roughness: 0.15, metalness: 0.1, color: '#ffffff' });
  seaM.map.wrapS = seaM.map.wrapT = THREE.RepeatWrapping;
  seaM.map.repeat.set(6, 3);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(400, 160), seaM);
  sea.rotation.x = -Math.PI / 2;
  sea.position.set(0, 0.03, -W - 1 - 80);
  ctx.root.add(sea);
  ctx.extras.sea = seaM.map;
  // رغوة الموج على الشط
  const foamM = new THREE.MeshBasicMaterial({ color: '#f4f8f8', transparent: true, opacity: 0.6, depthWrite: false });
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(200, 0.6), foamM);
  foam.rotation.x = -Math.PI / 2;
  foam.position.set(0, 0.04, -W - 1.2);
  ctx.dynamic.add(foam);
  ctx.extras.foam = foam;
  ctx.colliders.push({ min: new THREE.Vector3(-60, 0, -W - 4), max: new THREE.Vector3(60, 20, -W), tag: 'wall', invisible: true });
  // جانبين: صخور (حواجز أمواج)
  const rockM = mat('#8a8478', 0.95);
  for (const s of [-1, 1]) {
    for (let i = 0; i < 9; i++) {
      const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8 + rng() * 0.6, 0), rockM);
      r.position.set(s * (L + 0.6 + rng() * 0.8), 0.4, -W + i * (W * 2 / 8));
      r.rotation.set(rng() * 3, rng() * 3, rng() * 3);
      r.castShadow = true;
      ctx.static.add(r);
    }
    ctx.colliders.push({ min: new THREE.Vector3(s > 0 ? L : -L - 3, 0, -W - 2), max: new THREE.Vector3(s > 0 ? L + 3 : -L, 20, W + 2), tag: 'wall', invisible: true });
  }
  // الكورنيش قدام: سور واطي وكشافات
  const kM = new THREE.MeshStandardMaterial({ map: plasterTexture('#d8d0c0', 141, { bricks: false, band: 'rgba(40,90,140,0.5)' }), roughness: 0.9 });
  wall(ctx, -L - 4, W, L + 4, W, 0.7, kM, { thick: 0.4, collideH: 30 });
  // كشافات على الشط (اللي قدام بتسد الكاميرا)
  for (const [x, fl] of [[-L + 2, false], [-4, false], [4, true], [L - 2, false]]) streetLamp(ctx, x, -W + 0.3, 1, { h: 6.5, arm: 1.8, flicker: fl });
  // شماسي وكراسي
  const cols = ['#e05a30', '#2a63c8', '#e8c020', '#2e8b57', '#c8322a'];
  const spots = [[-15, -W + 1.6], [-9, -W + 1.2], [8, -W + 1.4], [14.5, -W + 1.6], [-19, W - 2], [18.5, W - 2.2]];
  spots.forEach(([x, z], i) => {
    umbrella(ctx.static, x, z, cols[i % cols.length], rng);
    plasticChair(ctx.static, x + 0.7, z + 0.2, -0.5 + rng(), '#f2f2ec');
    ctx.colliders.push({ min: new THREE.Vector3(x - 0.08, 0, z - 0.08), max: new THREE.Vector3(x + 0.08, 2.4, z + 0.08), tag: 'pole' });
  });
  seated(ctx, -15 + 0.7, -W + 1.8, 0.4, 'old');
  seated(ctx, 8.7, -W + 1.6, -0.3, 'kid');
  seated(ctx, -4, W - 0.45, Math.PI, 'kid');
  seated(ctx, 3, W - 0.45, Math.PI, 'kid');
  // كشك درة مشوي
  const corn = new THREE.Group();
  box(1.2, 0.8, 0.7, mat('#4a4a4a', 0.6, { metalness: 0.4 }), 0, 0.4, 0, corn);
  for (let k = 0; k < 5; k++) { const c = cyl(0.04, 0.04, 0.3, mat('#e8c040', 0.7), -0.4 + k * 0.2, 0.86, 0, corn, 6); c.rotation.z = Math.PI / 2; }
  corn.position.set(-1.5, 0, W - 1.0);
  ctx.static.add(corn);
  ctx.pointLights.push({ pos: new THREE.Vector3(-1.5, 1.2, W - 1.0), color: '#ff7a30', intensity: 3, dist: 4, shadow: false });
  ctx.colliders.push({ min: new THREE.Vector3(-2.1, 0, W - 1.4), max: new THREE.Vector3(-0.9, 0.9, W - 0.6), tag: 'obj', solid: true });
  palm(ctx.static, -L + 1.0, W - 1.0, 1.1, rng);
  palm(ctx.static, L - 1.2, W - 1.1, 1.0, rng);
  ctx.walkerPaths.push({ a: new THREE.Vector3(-L + 1, 0, -W + 0.6), b: new THREE.Vector3(L - 1, 0, -W + 0.6) });
  ctx.walkerPaths.push({ a: new THREE.Vector3(L - 1, 0, W - 0.8), b: new THREE.Vector3(-L + 1, 0, W - 0.8) });
  goals(ctx);
}

// ======================================================================= ساحة السوق
export function buildMarket(ctx) {
  const rng = makeRng(97);
  const L = ctx.def.halfL + 1.4, W = ctx.def.halfW + 2.2;
  ground(ctx, 'asphalt', 50, 26, 61);
  ctx.bounds = { minX: -L + 0.4, maxX: L - 0.4, minZ: -W + 0.4, maxZ: W - 0.4 };
  ctx.camZ = 0.6;
  // عماير ورا فيها محلات
  const colors = ['#c9a982', '#b98d6a', '#d7c3a0', '#a9907a', '#c4a07a', '#bfae94', '#c7b7a0'];
  const shops = [
    { name: 'جزارة الأمانة', bg: '#8a2a2a', open: true },
    { door: true },
    { name: 'حلواني العائلات', bg: '#c07a1a', open: true, awning: '#d08a2a' },
    { door: true },
    { name: 'خردوات ومنظفات', bg: '#1f4e7a', open: false },
    { door: true },
    { name: 'عيش وفينو', bg: '#6a3a1a', open: true },
  ];
  shops.forEach((o, i) => {
    const x0 = -25 + i * 7.2;
    building(ctx, { x0, x1: x0 + 7.2, z: -W - 1.6, face: 1, h: 10 + rng() * 6, color: colors[i % colors.length], seed: 150 + i, floors: 3, lit: 0.6, ...(o.door ? { door: true } : { shop: o }) });
  });
  balcony(ctx, -3.5, 3.3, -W - 1.6, 1, 3.0);
  balcony(ctx, 11, 6.4, -W - 1.6, 1, 3.0);
  ctx.colliders.push({ min: new THREE.Vector3(-30, 0, -W - 3), max: new THREE.Vector3(30, 20, -W - 1.6), tag: 'wall', invisible: true });
  // فرشات السوق ورا وعلى الجناب
  stall(ctx, -12, -W + 0.2, 1, { w: 3.2, awning: '#c8322a', goods: 'veg' });
  stall(ctx, -6, -W + 0.2, 1, { w: 2.6, awning: '#2a63c8', goods: 'bread' });
  stall(ctx, 6.5, -W + 0.2, 1, { w: 3.0, awning: '#2f8f46', goods: 'veg' });
  stall(ctx, 12.5, -W + 0.2, 1, { w: 2.8, awning: '#e2b21c', goods: 'fish' });
  // أقفاص وجرادل
  for (const [x, z] of [[-L + 1.2, -2], [-L + 1.0, -1.2], [L - 1.1, 2.2]]) box(0.6, 0.4, 0.45, mat('#b08a55', 0.9), x, 0.2, z, ctx.static);
  ctx.colliders.push({ min: new THREE.Vector3(-L + 0.7, 0, -2.4), max: new THREE.Vector3(-L + 1.6, 0.4, -0.8), tag: 'obj', solid: true });
  ctx.colliders.push({ min: new THREE.Vector3(L - 1.5, 0, 1.9), max: new THREE.Vector3(L - 0.7, 0.4, 2.5), tag: 'obj', solid: true });
  // نهايات الساحة
  const endM = new THREE.MeshStandardMaterial({ map: plasterTexture('#b9a888', 161, { band: 'rgba(60,50,40,0.4)' }), roughness: 0.95 });
  wall(ctx, -L - 0.2, -W, -L - 0.2, W, 3.6, endM, { thick: 0.4, collideH: 20 });
  wall(ctx, L + 0.2, -W, L + 0.2, W, 3.6, endM, { thick: 0.4, collideH: 20 });
  const g1 = new THREE.Mesh(new THREE.PlaneGeometry(8, 2), new THREE.MeshBasicMaterial({
    map: graffitiTexture([{ text: 'سوق الجمعة', y: 0.45, color: 'rgba(30,30,30,0.8)', font: '900 110px Cairo' }]), transparent: true,
  }));
  g1.position.set(-L + 0.01, 2.2, 0);
  g1.rotation.y = Math.PI / 2;
  ctx.static.add(g1);
  wall(ctx, -L, W, L, W, 0.8, new THREE.MeshStandardMaterial({ map: plasterTexture('#b9a888', 162, { bricks: false }), roughness: 0.95 }), { thick: 0.35, collideH: 30 });
  fulCart(ctx, L - 3, W - 1.2, Math.PI);
  seated(ctx, -6, W - 0.45, Math.PI, 'kid');
  seated(ctx, 1.5, W - 0.45, Math.PI, 'kid');
  seated(ctx, -12.6, -W + 1.0, 0, 'old');
  seated(ctx, 12.9, -W + 1.0, 0, 'old');
  // لمبات معلقة فوق الساحة
  bulbString(ctx, new THREE.Vector3(-L, 5.5, -W - 1), new THREE.Vector3(L, 5.5, W - 0.4), 22, 1.0);
  bulbString(ctx, new THREE.Vector3(L, 5.2, -W - 1), new THREE.Vector3(-L, 5.2, W - 0.4), 22, 1.0);
  for (const [x, fl] of [[-16, false], [-1, true], [16, false]]) streetLamp(ctx, x, -W - 1.4, 1, { arm: 2.0, h: 5.6, flicker: fl });
  ctx.walkerPaths.push({ a: new THREE.Vector3(-L + 1, 0, -W + 1.2), b: new THREE.Vector3(L - 1, 0, -W + 1.2) });
  ctx.walkerPaths.push({ a: new THREE.Vector3(L - 1, 0, W - 0.9), b: new THREE.Vector3(-L + 1, 0, W - 0.9) });
  ctx.walkerPaths.push({ cross: true, z0: -W + 1.2, z1: W - 0.9 });
  ctx.extras.bike = { z: 0.5 };
  goals(ctx);
}
