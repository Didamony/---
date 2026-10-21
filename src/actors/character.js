// الشخصيات: هيكل بمفاصل حقيقية (وسط ← فخد ← ركبة ← كاحل، وصدر ← كتف ← كوع ← إيد)
// والحركة كلها محسوبة من المفاصل دي عشان الرجل تفضل متركبة صح تحت الجسم
import * as THREE from 'three';
import { clamp, lerp, smooth, smoothstep, damp } from '../core/util.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------- خامات
const matCache = new Map();
export function mat(color, rough = 0.85, extra) {
  const key = color + '|' + rough + (extra ? JSON.stringify(extra) : '');
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial(Object.assign({ color, roughness: rough, metalness: 0 }, extra || {}));
    matCache.set(key, m);
  }
  return m;
}

const geoCache = new Map();
function geo(key, make) {
  let g = geoCache.get(key);
  if (!g) { g = make(); geoCache.set(key, g); }
  return g;
}

// جزء جسم بشكل عضلي (فخد، سمانة، دراع): بروفايل بيلف حوالين المحور
// profile: [[نص القطر, y], ...] من فوق لتحت، والمفصل عند y = 0
function taper(key, profile, seg = 12) {
  return geo('tp_' + key, () => {
    const pts = [...profile].reverse().map(([r, y]) => new THREE.Vector2(r, y));
    return new THREE.LatheGeometry(pts, seg);
  });
}

const P = {
  thigh: [[0, 0.03], [0.07, 0.02], [0.087, -0.02], [0.084, -0.12], [0.075, -0.24], [0.062, -0.35], [0.053, -0.42], [0, -0.445]],
  pantsThigh: [[0, 0.035], [0.08, 0.025], [0.095, -0.02], [0.092, -0.14], [0.084, -0.28], [0.072, -0.4], [0.066, -0.43], [0, -0.445]],
  shortsLeg: [[0, 0.04], [0.09, 0.03], [0.102, -0.03], [0.1, -0.15], [0.098, -0.23], [0, -0.24]],
  shin: [[0, 0.03], [0.05, 0.02], [0.055, -0.03], [0.062, -0.1], [0.056, -0.19], [0.043, -0.3], [0.034, -0.39], [0, -0.42]],
  pantsShin: [[0, 0.03], [0.064, 0.02], [0.066, -0.06], [0.064, -0.2], [0.062, -0.34], [0.064, -0.4], [0, -0.415]],
  sock: [[0, 0.0], [0.046, -0.0], [0.047, -0.1], [0.04, -0.14], [0, -0.141]],
  upperArm: [[0, 0.03], [0.05, 0.02], [0.054, -0.04], [0.05, -0.12], [0.043, -0.22], [0.037, -0.28], [0, -0.3]],
  sleeveArm: [[0, 0.035], [0.06, 0.025], [0.063, -0.04], [0.058, -0.14], [0.051, -0.24], [0.047, -0.29], [0, -0.3]],
  shortSleeve: [[0, 0.03], [0.058, 0.025], [0.062, -0.04], [0.06, -0.12], [0.059, -0.15], [0, -0.152]],
  forearm: [[0, 0.025], [0.037, 0.015], [0.043, -0.05], [0.037, -0.14], [0.028, -0.235], [0, -0.25]],
  sleeveFore: [[0, 0.025], [0.048, 0.015], [0.05, -0.06], [0.045, -0.16], [0.04, -0.23], [0, -0.235]],
  neck: [[0, 0.09], [0.044, 0.08], [0.047, 0.03], [0.056, -0.01], [0, -0.02]],
};

// كبسولة صغيرة (للإيد والصباع والودن)
function capsule(key, r, len, sx = 1, sy = 1, sz = 1, rx = 0) {
  return geo('cap_' + key, () => {
    const g = new THREE.CapsuleGeometry(r, len, 4, 8);
    if (rx) g.rotateX(rx);
    g.scale(sx, sy, sz);
    return g;
  });
}

function mesh(g, m, shadow = true) {
  const o = new THREE.Mesh(g, m);
  o.castShadow = shadow;
  o.receiveShadow = false;
  return o;
}

const numberTexCache = new Map();
function numberTexture(num, color) {
  const key = num + color;
  if (numberTexCache.has(key)) return numberTexCache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = color;
  g.font = '900 96px Cairo, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(String(num), 64, 70);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  numberTexCache.set(key, t);
  return t;
}

// ---------------------------------------------------------------- المقاسات (بني آدم طوله ~١.٧٥)
const HIP_H = 0.92;
const THIGH = 0.42;
const HEAD_SCALE = 1.04;
const SHIN = 0.41;
const UPPER_ARM = 0.28;
const FOREARM = 0.25;

// خامة الجلد أنعم شوية من القماش
const skinMat = (c) => mat(c, 0.58);
const darker = (c, k) => '#' + new THREE.Color(c).multiplyScalar(k).getHexString();

// ---------------------------------------------------------------- بناء الشخصية
// look = { skin, hair, hairStyle, top:{type,color,color2,number,numColor}, bottom:{type,color}, shoes, scale, build, mustache, glasses, beard }
export function buildCharacter(look) {
  const root = new THREE.Group();
  const s = look.scale || 1;
  const bw = look.build || 1; // تخن الجسم
  root.scale.setScalar(s);

  const skinM = skinMat(look.skin);
  const lipM = skinMat(darker(look.skin, 0.72));
  const top = look.top || { type: 'tshirt', color: '#c33' };
  const bottom = look.bottom || { type: 'pants', color: '#333' };
  const topM = mat(top.color, 0.9);
  const top2M = mat(top.color2 || '#ffffff', 0.9);
  const botM = mat(bottom.color, 0.92);
  const shoeM = mat(look.shoes || '#e8e4dc', 0.75);
  const soleM = mat(look.slippers ? darker(look.shoes || '#2e8b57', 0.7) : '#f2f0ea', 0.8);
  const hairM = mat(look.hair || '#1a1210', 0.95);

  const J = {};
  const add = (parent, name, x, y, z) => {
    const g = new THREE.Bone();
    g.name = name;
    g.position.set(x, y, z);
    parent.add(g);
    J[name] = g;
    return g;
  };

  const hips = add(root, 'hips', 0, HIP_H, 0);
  // الحوض
  const pelvisCovered = top.type === 'galabeya' || top.type === 'dress';
  const pelvis = mesh(geo('pelvis', () => new THREE.SphereGeometry(1, 18, 12)), pelvisCovered ? topM : botM);
  pelvis.scale.set(0.168 * bw, 0.13, 0.125 * bw);
  pelvis.position.y = 0.0;
  hips.add(pelvis);
  // حزام الشورت/البنطلون
  const belt = mesh(geo('belt', () => new THREE.TorusGeometry(0.152, 0.018, 6, 22)), pelvisCovered ? topM : botM, false);
  belt.rotation.x = Math.PI / 2;
  belt.scale.set(bw, 0.8 * bw, 1);
  belt.position.y = 0.08;
  hips.add(belt);

  // ---------- الجذع
  const spine = add(hips, 'spine', 0, 0.06, 0);
  const torsoGeo = geo('torso', () => {
    const pts = [
      [0.0, -0.03], [0.128, -0.02], [0.138, 0.06], [0.132, 0.15], [0.145, 0.25], [0.163, 0.34],
      [0.176, 0.4], [0.172, 0.45], [0.14, 0.49], [0.085, 0.51], [0.0, 0.515],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 22);
  });
  const torso = mesh(torsoGeo, topM);
  torso.scale.set(1.08 * bw, 1, 0.66 * bw);
  spine.add(torso);
  // صدر وضهر (عشان الجذع ما يبقاش أسطوانة)
  const pec = geo('pec', () => new THREE.SphereGeometry(0.075, 12, 8));
  for (const sx of [-1, 1]) {
    const pm = mesh(pec, top.type === 'tank' ? topM : topM, false);
    pm.position.set(sx * 0.06 * bw, 0.36, 0.055 * bw);
    pm.scale.set(1.0, 0.75, 0.55);
    spine.add(pm);
  }
  const back = mesh(geo('backM', () => new THREE.SphereGeometry(0.15, 14, 8)), topM, false);
  back.position.set(0, 0.36, -0.035 * bw);
  back.scale.set(1.05 * bw, 0.6, 0.5 * bw);
  spine.add(back);
  // طرف الفانلة تحت
  if (!['galabeya', 'dress', 'suit'].includes(top.type)) {
    const hem = mesh(geo('hem', () => new THREE.TorusGeometry(0.14, 0.014, 6, 22)), topM, false);
    hem.rotation.x = Math.PI / 2;
    hem.scale.set(1.08 * bw, 0.7 * bw, 1);
    hem.position.y = -0.015;
    spine.add(hem);
  }

  if (top.type === 'tank') {
    // فانلة داخلي: الكتاف والرقبة باينين
    const sh = geo('tankShoulder', () => new THREE.SphereGeometry(0.07, 12, 8));
    for (const sx of [-1, 1]) {
      const o = mesh(sh, skinM);
      o.position.set(sx * 0.15 * bw, 0.45, 0);
      o.scale.set(1.1, 0.75, 0.95);
      spine.add(o);
    }
    const chestSkin = mesh(geo('tankV', () => new THREE.SphereGeometry(0.06, 10, 8)), skinM, false);
    chestSkin.position.set(0, 0.47, 0.06 * bw);
    chestSkin.scale.set(1, 0.6, 0.5);
    spine.add(chestSkin);
  } else if (['tshirt', 'jersey'].includes(top.type)) {
    // ياقة مدورة
    const col = mesh(geo('crew', () => new THREE.TorusGeometry(0.06, 0.012, 6, 16)), top.type === 'jersey' ? top2M : topM, false);
    col.rotation.x = Math.PI / 2 - 0.25;
    col.position.set(0, 0.5, 0.008);
    spine.add(col);
  }
  if (top.type === 'tracksuit') {
    const zip = mesh(geo('zip', () => new THREE.BoxGeometry(0.012, 0.44, 0.01)), top2M, false);
    zip.position.set(0, 0.25, 0.098 * bw);
    spine.add(zip);
    const col = mesh(geo('tsCollar', () => new THREE.CylinderGeometry(0.068, 0.075, 0.06, 14, 1, true)), topM, false);
    col.position.y = 0.52;
    spine.add(col);
  }
  if (top.type === 'shirt') {
    const collar = mesh(geo('collar', () => new THREE.TorusGeometry(0.062, 0.02, 6, 14)), top2M, false);
    collar.rotation.x = Math.PI / 2 - 0.2;
    collar.position.y = 0.505;
    spine.add(collar);
    for (let i = 0; i < 4; i++) {
      const b = mesh(geo('btn', () => new THREE.SphereGeometry(0.008, 6, 4)), top2M, false);
      b.position.set(0, 0.42 - i * 0.1, 0.1 * bw + (i === 0 ? 0.008 : 0));
      spine.add(b);
    }
  }
  if (top.type === 'suit') {
    const tie = mesh(geo('tie', () => new THREE.BoxGeometry(0.035, 0.26, 0.012)), mat(top.color2 || '#7a1f1f'), false);
    tie.position.set(0, 0.36, 0.098 * bw);
    spine.add(tie);
    const shirtV = mesh(geo('shirtV', () => new THREE.BoxGeometry(0.08, 0.14, 0.01)), mat('#f2f2f2'), false);
    shirtV.position.set(0, 0.44, 0.094 * bw);
    spine.add(shirtV);
  }
  if (top.number != null) {
    const plane = mesh(geo('numPlane', () => new THREE.PlaneGeometry(0.19, 0.19)),
      new THREE.MeshStandardMaterial({ map: numberTexture(top.number, top.numColor || '#fff'), transparent: true, roughness: 0.9 }), false);
    plane.position.set(0, 0.3, -0.105 * bw);
    plane.rotation.y = Math.PI;
    plane.userData.keep = true;
    spine.add(plane);
  }
  if (top.type === 'galabeya' || top.type === 'dress') {
    // جلابية: جيبة طويلة متعلقة في الوسط
    const skirt = mesh(geo('skirt', () => {
      const pts = [[0.165, 0.1], [0.2, -0.1], [0.26, -0.45], [0.31, -0.8]].map(([x, y]) => new THREE.Vector2(x, y));
      return new THREE.LatheGeometry(pts, 22);
    }), mat(top.color, 0.9, { side: THREE.DoubleSide }));
    skirt.scale.set(bw, 1, 0.8 * bw);
    add(hips, 'skirt', 0, 0, 0).add(skirt);
  }

  // ---------- الرقبة والراس
  const neck = add(spine, 'neck', 0, 0.5, 0);
  const neckM = mesh(taper('neck', P.neck, 12), skinM);
  neck.add(neckM);
  const head = add(neck, 'head', 0, 0.062, 0);
  head.scale.setScalar(HEAD_SCALE);
  // جمجمة + فك عشان الوش يبقى بيضاوي
  const cranium = mesh(geo('cranium', () => new THREE.SphereGeometry(0.105, 22, 16)), skinM);
  cranium.scale.set(0.88, 1.0, 1.0);
  cranium.position.set(0, 0.125, -0.008);
  head.add(cranium);
  const jaw = mesh(geo('jaw', () => new THREE.SphereGeometry(0.08, 16, 12)), skinM);
  jaw.scale.set(0.82, 0.9, 0.95);
  jaw.position.set(0, 0.068, 0.018);
  head.add(jaw);
  // ودان
  for (const sx of [-1, 1]) {
    const e = mesh(capsule('ear', 0.016, 0.03, 0.55, 1, 1), skinM, false);
    e.position.set(sx * 0.091, 0.112, -0.006);
    e.rotation.z = sx * 0.15;
    head.add(e);
  }
  // عينين
  const eyeW = mat('#f2eee6', 0.35), eyeB = mat('#2a1a10', 0.3);
  for (const sx of [-1, 1]) {
    const w = mesh(geo('eyeW', () => new THREE.SphereGeometry(0.0125, 10, 8)), eyeW, false);
    w.position.set(sx * 0.033, 0.122, 0.083);
    w.scale.set(1.25, 0.8, 0.6);
    head.add(w);
    const p = mesh(geo('eyeP', () => new THREE.SphereGeometry(0.0075, 8, 6)), eyeB, false);
    p.position.set(sx * 0.033, 0.122, 0.0905);
    head.add(p);
    const lid = mesh(geo('lid', () => new THREE.SphereGeometry(0.014, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.45)), skinM, false);
    lid.position.set(sx * 0.033, 0.124, 0.081);
    lid.scale.set(1.25, 0.8, 0.75);
    head.add(lid);
    const brow = mesh(geo('brow', () => new THREE.BoxGeometry(0.034, 0.008, 0.012)), hairM, false);
    brow.position.set(sx * 0.034, 0.141, 0.088);
    brow.rotation.z = sx * -0.14;
    head.add(brow);
  }
  // مناخير
  const nose = mesh(geo('nose', () => {
    const g = new THREE.ConeGeometry(0.016, 0.042, 6);
    g.rotateX(Math.PI / 2 + 0.55);
    return g;
  }), skinM, false);
  nose.position.set(0, 0.1, 0.098);
  head.add(nose);
  const nostril = mesh(geo('nostril', () => new THREE.SphereGeometry(0.014, 8, 6)), skinM, false);
  nostril.position.set(0, 0.088, 0.1);
  nostril.scale.set(1.2, 0.7, 0.8);
  head.add(nostril);
  // شفايف
  const lip = mesh(geo('lip', () => new THREE.CapsuleGeometry(0.008, 0.026, 3, 6)), lipM, false);
  lip.rotation.z = Math.PI / 2;
  lip.position.set(0, 0.062, 0.09);
  head.add(lip);
  if (look.mustache) {
    const m = mesh(geo('mustache', () => new THREE.CapsuleGeometry(0.009, 0.04, 3, 6)), hairM, false);
    m.rotation.z = Math.PI / 2;
    m.position.set(0, 0.075, 0.095);
    head.add(m);
  }
  if (look.beard) {
    const b = mesh(geo('beard', () => new THREE.SphereGeometry(0.085, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2)), hairM, false);
    b.position.set(0, 0.08, 0.02);
    b.scale.set(0.9, 0.7, 1.0);
    head.add(b);
  }
  if (look.glasses) {
    const gm = mat('#111', 0.3);
    for (const sx of [-1, 1]) {
      const ring = mesh(geo('glass', () => new THREE.TorusGeometry(0.019, 0.0035, 5, 14)), gm, false);
      ring.position.set(sx * 0.034, 0.122, 0.095);
      head.add(ring);
    }
    const bridge = mesh(geo('gbridge', () => new THREE.BoxGeometry(0.03, 0.004, 0.004)), gm, false);
    bridge.position.set(0, 0.124, 0.097);
    head.add(bridge);
  }
  const hairG = new THREE.Group();

  head.add(hairG);
  buildHair(hairG, look.hairStyle || 'short', hairM, look);

  // ---------- الدراعات
  const longSleeve = ['tracksuit', 'shirt', 'galabeya', 'suit', 'dress', 'jacket'].includes(top.type);
  const shortSleeve = ['tshirt', 'jersey'].includes(top.type);
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const sh = add(spine, side + 'Sh', sx * 0.19 * bw, 0.435, 0);
    const delt = mesh(geo('delt', () => new THREE.SphereGeometry(0.055, 12, 8)), top.type === 'tank' ? skinM : topM);
    delt.scale.set(1.05, 0.95, 1.0);
    sh.add(delt);
    sh.add(mesh(taper(longSleeve ? 'sleeveArm' : 'upperArm', longSleeve ? P.sleeveArm : P.upperArm), longSleeve ? topM : skinM));
    if (shortSleeve) sh.add(mesh(taper('shortSleeve', P.shortSleeve), topM));
    if (top.type === 'tracksuit') {
      const stripe = mesh(geo('armStripe', () => { const g = new THREE.BoxGeometry(0.012, UPPER_ARM, 0.02); g.translate(0, -UPPER_ARM / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.05;
      sh.add(stripe);
    }
    const el = add(sh, side + 'El', 0, -UPPER_ARM + 0.02, 0);
    el.add(mesh(taper(longSleeve ? 'sleeveFore' : 'forearm', longSleeve ? P.sleeveFore : P.forearm), longSleeve ? topM : skinM));
    if (top.type === 'tracksuit') {
      const stripe = mesh(geo('foreStripe', () => { const g = new THREE.BoxGeometry(0.012, FOREARM - 0.04, 0.02); g.translate(0, -(FOREARM - 0.04) / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.044;
      el.add(stripe);
    }
    if (longSleeve) {
      // رسغ باين من الكم
      const wrist = mesh(geo('wrist', () => new THREE.CylinderGeometry(0.027, 0.03, 0.03, 8)), skinM, false);
      wrist.position.y = -FOREARM + 0.01;
      el.add(wrist);
    }
    const hb = add(el, side + 'Hand', 0, -FOREARM - 0.01, 0);
    const palm = mesh(capsule('palm', 0.032, 0.05, 1.15, 1, 0.62), skinM);
    palm.position.y = -0.035;
    hb.add(palm);
    const thumb = mesh(capsule('thumb', 0.012, 0.03), skinM, false);
    thumb.position.set(0, -0.03, 0.03);
    thumb.rotation.x = 0.6;
    hb.add(thumb);
  }

  // ---------- الرجلين (متركبين تحت الوسط مباشرة)
  const shorts = bottom.type === 'shorts';
  const robe = top.type === 'galabeya' || top.type === 'dress';
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const th = add(hips, side + 'Th', sx * 0.09 * bw, -0.03, 0);
    const thighM = mesh(taper(shorts || robe ? 'thigh' : 'pantsThigh', shorts || robe ? P.thigh : P.pantsThigh), shorts ? skinM : botM);
    thighM.scale.set(Math.sqrt(bw), 1, Math.sqrt(bw));
    th.add(thighM);
    if (shorts) {
      const sl = mesh(taper('shortsLeg', P.shortsLeg), botM);
      sl.scale.set(Math.sqrt(bw), 1, Math.sqrt(bw));
      th.add(sl);
    }
    if (!shorts && (bottom.type === 'tracksuit' || top.type === 'tracksuit')) {
      const stripe = mesh(geo('legStripe', () => { const g = new THREE.BoxGeometry(0.014, THIGH, 0.022); g.translate(0, -THIGH / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.088;
      th.add(stripe);
    }
    const kn = add(th, side + 'Kn', 0, -THIGH, 0);
    const shinMesh = mesh(taper(shorts ? 'shin' : 'pantsShin', shorts ? P.shin : P.pantsShin), shorts ? skinM : botM);
    shinMesh.position.z = shorts ? -0.006 : 0;
    kn.add(shinMesh);
    if (shorts && look.socks) {
      const sock = mesh(taper('sock', P.sock), mat(look.socks, 0.95), false);
      sock.position.y = -SHIN + 0.14;
      kn.add(sock);
    }
    if (!shorts && (bottom.type === 'tracksuit' || top.type === 'tracksuit')) {
      const stripe = mesh(geo('shinStripe', () => { const g = new THREE.BoxGeometry(0.014, SHIN - 0.04, 0.02); g.translate(0, -(SHIN - 0.04) / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.064;
      kn.add(stripe);
    }
    const an = add(kn, side + 'An', 0, -SHIN, 0);
    if (look.slippers) {
      const foot = mesh(capsule('bareFoot', 0.036, 0.14, 1.05, 0.62, 1, Math.PI / 2), skinM);
      foot.position.set(0, -0.032, 0.045);
      an.add(foot);
      const sole = mesh(geo('slipSole', () => new THREE.BoxGeometry(0.095, 0.018, 0.25)), soleM);
      sole.position.set(0, -0.062, 0.045);
      an.add(sole);
      const strap = mesh(geo('slipStrap', () => new THREE.BoxGeometry(0.1, 0.03, 0.05)), shoeM, false);
      strap.position.set(0, -0.035, 0.07);
      an.add(strap);
    } else {
      const shoe = mesh(capsule('shoe', 0.046, 0.16, 1.08, 0.72, 1, Math.PI / 2), shoeM);
      shoe.position.set(0, -0.032, 0.045);
      an.add(shoe);
      const sole = mesh(geo('sole', () => new THREE.BoxGeometry(0.096, 0.02, 0.255)), soleM);
      sole.position.set(0, -0.063, 0.045);
      an.add(sole);
      const tongue = mesh(geo('tongue', () => new THREE.BoxGeometry(0.05, 0.03, 0.06)), soleM, false);
      tongue.position.set(0, -0.004, 0.06);
      tongue.rotation.x = -0.4;
      an.add(tongue);
    }
  }

  const skinned = bakeSkinned(root);
  return { root, J, look, scale: s, mesh: skinned };
}

// ---------------------------------------------------------------- جسم واحد بهيكل عظمي
// كل الأجزاء بتتجمع في ميش واحد متربط بالعضم: draw call واحد للشخصية بدل ~٤٥
// نسيج القماش: خيوط ناعمة + كرمشة، ومسام خفيفة للجلد (مرسومين بالكود)
function detailTex(kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  let seed = kind === 'cloth' ? 7 : 13;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  g.fillStyle = '#f2f2f2';
  g.fillRect(0, 0, 256, 256);
  if (kind === 'cloth') {
    // كرمشة
    for (let i = 0; i < 40; i++) {
      const x = rnd() * 256, y = rnd() * 256, w = 30 + rnd() * 90, a = rnd() * Math.PI;
      const gr = g.createLinearGradient(x, y, x + Math.cos(a) * w, y + Math.sin(a) * w);
      gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, `rgba(0,0,0,${0.06 + rnd() * 0.08})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.strokeStyle = gr; g.lineWidth = 4 + rnd() * 8; g.lineCap = 'round';
      g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + rnd() * 30, y + rnd() * 30, x + Math.cos(a) * w, y + Math.sin(a) * w); g.stroke();
    }
    // خيوط
    for (let y = 0; y < 256; y += 2) { g.fillStyle = `rgba(0,0,0,${0.035 + (y % 4 ? 0.02 : 0)})`; g.fillRect(0, y, 256, 1); }
    for (let x = 0; x < 256; x += 2) { g.fillStyle = 'rgba(255,255,255,0.03)'; g.fillRect(x, 0, 1, 256); }
  } else {
    for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '90,40,30' : '255,230,220'},${rnd() * 0.06})`; g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd(), 1 + rnd()); }
    for (let i = 0; i < 25; i++) { const x = rnd() * 256, y = rnd() * 256, r = 10 + rnd() * 40; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(160,70,60,0.05)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(kind === 'cloth' ? 3 : 2, kind === 'cloth' ? 3 : 2);
  t.anisotropy = 4;
  return t;
}
const clothTex = detailTex('cloth');
const skinTex = detailTex('skin');
const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, map: clothTex, bumpMap: clothTex, bumpScale: 2.2 });
const skinMatShared = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.52, metalness: 0, map: skinTex, bumpMap: skinTex, bumpScale: 0.6 });
const skirtMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide, map: clothTex, bumpMap: clothTex, bumpScale: 2.2 });

function bakeSkinned(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const bones = [];
  root.traverse((o) => { if (o.isBone) bones.push(o); });
  const boneIndex = new Map(bones.map((b, i) => [b, i]));
  const parts = { body: [], skin: [], skirt: [] };
  const remove = [];
  const rel = new THREE.Matrix4();
  root.traverse((o) => {
    if (!o.isMesh || o.userData.keep) return;
    let b = o.parent;
    while (b && !b.isBone) b = b.parent;
    if (!b) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    rel.multiplyMatrices(inv, o.matrixWorld);
    g.applyMatrix4(rel);
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    const c = o.material.color;
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    const bi = boneIndex.get(b);
    for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
    g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
    g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    (o.material.side === THREE.DoubleSide ? parts.skirt : o.material.roughness < 0.65 ? parts.skin : parts.body).push(g);
    remove.push(o);
  });
  for (const o of remove) o.parent.remove(o);
  const skeleton = new THREE.Skeleton(bones);
  let main = null;
  for (const [k, list] of Object.entries(parts)) {
    if (!list.length) continue;
    const merged = mergeGeometries(list, false);
    list.forEach((g) => g.dispose());
    const m = new THREE.SkinnedMesh(merged, k === 'skirt' ? skirtMat : k === 'skin' ? skinMatShared : bodyMat);
    m.castShadow = true;
    m.frustumCulled = false;
    root.add(m);
    m.bind(skeleton);
    if (!main) main = m;
  }
  return main;
}

function buildHair(head, style, hairM, look) {
  const add = (g, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0) => {
    const m = mesh(g, hairM, false);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    m.rotation.x = rx;
    head.add(m);
    return m;
  };
  // غطا الشعر مايل لورا: الجبين باين والقفا متغطي
  const cap = geo('hairCap2', () => new THREE.SphereGeometry(0.112, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.6));
  const vol = geo('hairVol', () => new THREE.SphereGeometry(0.08, 14, 8));
  switch (style) {
    case 'bald':
      break;
    case 'buzz':
      add(cap, 0, 0.128, -0.01, 0.86, 0.97, 0.98, -0.5);
      break;
    case 'curly': {
      add(cap, 0, 0.13, -0.01, 0.9, 1.0, 1.0, -0.5);
      const ball = geo('curl', () => new THREE.SphereGeometry(0.032, 8, 6));
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        add(ball, Math.cos(a) * 0.075, 0.205 + Math.sin(i * 1.7) * 0.012, Math.sin(a) * 0.085 - 0.012);
      }
      add(vol, 0, 0.215, -0.01, 1.0, 0.6, 1.1);
      break;
    }
    case 'cap': {
      const capM = mat(look.capColor || '#e8e2d0', 0.8);
      const dome = geo('capDome', () => new THREE.SphereGeometry(0.114, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.52));
      const c = mesh(dome, capM, false);
      c.position.set(0, 0.13, -0.008);
      c.scale.set(0.92, 1, 1.02);
      c.rotation.x = -0.25;
      head.add(c);
      const brim = mesh(geo('brim2', () => new THREE.CylinderGeometry(0.075, 0.075, 0.01, 16, 1, false, -Math.PI / 2, Math.PI)), capM, false);
      brim.position.set(0, 0.162, 0.07);
      brim.rotation.set(0.2, Math.PI / 2, 0);
      brim.scale.set(1.15, 1, 1);
      head.add(brim);
      // شعر باين من تحت الكاب
      add(cap, 0, 0.122, -0.016, 0.86, 0.9, 0.95, -0.7);
      break;
    }
    case 'scarf': {
      // طرحة
      const scM = mat(look.scarfColor || '#3b2a4a', 0.95);
      const sc = mesh(geo('scarf', () => new THREE.SphereGeometry(0.128, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.62)), scM, false);
      sc.position.set(0, 0.115, -0.014);
      sc.scale.set(0.92, 1, 1);
      sc.rotation.x = -0.3;
      head.add(sc);
      const drape = mesh(geo('drape', () => new THREE.CylinderGeometry(0.11, 0.19, 0.24, 16, 1, true)), scM, false);
      drape.position.set(0, -0.02, -0.02);
      head.add(drape);
      break;
    }
    case 'gray':
      // صلعة من فوق وشعر على الجناب
      add(cap, 0, 0.12, -0.014, 0.89, 0.85, 0.98, -0.95);
      break;
    case 'short':
    default: {
      add(cap, 0, 0.13, -0.01, 0.89, 1.0, 1.0, -0.5);
      add(vol, 0, 0.198, 0.006, 0.95, 0.42, 1.12);
      const fringe = geo('fringe2', () => new THREE.CapsuleGeometry(0.018, 0.1, 3, 6));
      const fr = add(fringe, 0, 0.165, 0.078);
      fr.rotation.z = Math.PI / 2;
      break;
    }
  }
}

// ---------------------------------------------------------------- الحركة
const KEYS = ['hy', 'hrx', 'hry', 'hrz', 'srx', 'sry', 'srz', 'nrx', 'nry',
  'lsx', 'lsz', 'lex', 'rsx', 'rsz', 'rex', 'ltx', 'ltz', 'lkx', 'lax', 'rtx', 'rtz', 'rkx', 'rax'];
const UPPER = ['srx', 'sry', 'srz', 'nrx', 'nry', 'lsx', 'lsz', 'lex', 'rsx', 'rsz', 'rex'];
const DEF = { hy: 0, hrx: 0, hry: 0, hrz: 0, srx: 0, sry: 0, srz: 0, nrx: 0, nry: 0,
  lsx: 0, lsz: 0.1, lex: -0.15, rsx: 0, rsz: -0.1, rex: -0.15,
  ltx: 0, ltz: 0, lkx: 0, lax: 0, rtx: 0, rtz: 0, rkx: 0, rax: 0 };

function makeAction(def) {
  const channels = def.channels === 'upper' ? UPPER : def.channels || KEYS;
  let prev = Object.assign({}, DEF);
  const frames = def.frames.map(([t, p]) => {
    const full = Object.assign({}, p === 'def' ? DEF : prev, p === 'def' ? {} : p);
    prev = full;
    return [t, full];
  });
  return {
    dur: def.dur ?? frames[frames.length - 1][0],
    loop: !!def.loop,
    hold: !!def.hold,
    fadeIn: def.fadeIn ?? 0.07,
    fadeOut: def.fadeOut ?? 0.15,
    channels,
    frames,
  };
}

function divePose(s) {
  return makeAction({
    dur: 1.5,
    frames: [
      [0, 'def'],
      [0.12, { hy: -0.16, ltx: -0.35, lkx: 0.75, rtx: -0.35, rkx: 0.75, lax: 0.3, rax: 0.3, lsx: -1.0, rsx: -1.0, srx: 0.2 }],
      [0.38, { hy: -0.48, hrz: s * 1.3, srx: 0, srz: s * 0.15, lsx: -2.9, rsx: -2.9, lsz: 0.25, rsz: -0.25, lex: -0.1, rex: -0.1,
        ltx: -0.1, rtx: -0.1, ltz: -s * 0.35, rtz: -s * 0.25, lkx: 0.3, rkx: 0.4, lax: 0, rax: 0, nrx: 0 }],
      [0.8, { hy: -0.74, hrz: s * 1.52 }],
      [1.15, { hy: -0.4, hrz: s * 0.6, lsx: -0.6, rsx: -0.6, lkx: 0.9, rkx: 0.9, ltx: -0.5, rtx: -0.5 }],
      [1.5, 'def'],
    ],
  });
}

export const ACTIONS = {
  // شوطة بالرجل اليمين
  kick: makeAction({
    frames: [
      [0, 'def'],
      [0.13, { rtx: 0.78, rkx: 1.5, rax: 0.35, ltx: -0.12, lkx: 0.28, hy: -0.04, lsx: -0.7, lsz: 0.6, rsx: 0.6, rsz: -0.3, srx: 0.08, sry: 0.35, nry: -0.25, hry: 0.12 }],
      [0.21, { rtx: -1.25, rkx: 0.12, rax: 0.4, ltx: 0.08, lkx: 0.22, lax: -0.1, lsx: 0.55, lsz: 0.75, rsx: -0.55, rsz: -0.45, srx: -0.12, sry: -0.35, nry: 0.1, hry: -0.15, hy: -0.02 }],
      [0.36, { rtx: -0.75, rkx: 0.55, rax: 0.15, srx: -0.04, sry: -0.15, hry: -0.05 }],
      [0.52, 'def'],
    ],
  }),
  // راسية: نطة وضربة بالراس
  header: makeAction({
    frames: [
      [0, 'def'],
      [0.1, { hy: -0.09, ltx: -0.35, lkx: 0.7, lax: 0.3, rtx: -0.35, rkx: 0.7, rax: 0.3, lsx: -0.4, rsx: -0.4, srx: 0.15 }],
      [0.24, { hy: 0.3, ltx: 0.05, lkx: 0.35, lax: 0.4, rtx: 0.15, rkx: 0.6, rax: 0.4, srx: -0.32, nrx: -0.45, lsx: -1.1, lsz: 0.7, rsx: -1.1, rsz: -0.7 }],
      [0.34, { hy: 0.26, srx: 0.38, nrx: 0.55 }],
      [0.48, { hy: 0.02, srx: 0.12, nrx: 0.1, ltx: -0.2, lkx: 0.5, rtx: -0.2, rkx: 0.5 }],
      [0.6, 'def'],
    ],
  }),
  // ضربة طايرة
  volley: makeAction({
    frames: [
      [0, 'def'],
      [0.1, { rtx: 0.6, rkx: 1.4, rax: 0.3, lkx: 0.3, hrx: -0.1, lsx: -0.5, lsz: 0.9, rsz: -0.8, sry: 0.3 }],
      [0.2, { rtx: -1.55, rkx: 0.08, rax: 0.4, hrx: -0.28, srx: -0.15, lsz: 1.1, rsz: -1.0, sry: -0.3, hy: -0.04 }],
      [0.36, { rtx: -0.9, rkx: 0.5, hrx: -0.1, srx: 0 }],
      [0.5, 'def'],
    ],
  }),
  // باصة بوش الرجل
  pass: makeAction({
    frames: [
      [0, 'def'],
      [0.1, { rtx: 0.45, rtz: 0.12, rkx: 0.85, rax: 0.1, lkx: 0.2, lsx: -0.3, lsz: 0.45, rsz: -0.4, sry: 0.2, hry: 0.18, hy: -0.03 }],
      [0.17, { rtx: -0.62, rtz: -0.22, rkx: 0.22, rax: 0.15, sry: -0.18, hry: -0.28, lsz: 0.5, rsz: -0.35 }],
      [0.27, { rtx: -0.3, rtz: -0.08, rkx: 0.32, hry: -0.1 }],
      [0.4, 'def'],
    ],
  }),
  // كعبلة (زحلقة)
  slide: makeAction({
    fadeIn: 0.05,
    frames: [
      [0, 'def'],
      [0.13, { hy: -0.7, hrx: -0.78, srx: 0.18, nrx: 0.45, rtx: -0.88, rkx: 0.05, rax: 0.35, ltx: -1.25, ltz: 0.35, lkx: 1.9, lax: 0.3,
        lsx: -0.7, lsz: 0.75, lex: -0.3, rsx: 0.55, rsz: -1.05, rex: -0.1 }],
      [0.72, { hy: -0.7 }],
      [0.98, { hy: -0.38, hrx: -0.1, srx: 0.3, rtx: -0.55, rkx: 0.9, ltx: -1.3, lkx: 1.7, ltz: 0.1, rsx: 0.2, rsz: -0.5, lsx: -0.4, lsz: 0.4, nrx: 0 }],
      [1.22, 'def'],
    ],
  }),
  // وقعة على الوش بعد الكعبلة، ومسكة الرجل، وبعدين يقوم
  fall: makeAction({
    fadeIn: 0.05,
    frames: [
      [0, 'def'],
      [0.18, { hy: -0.1, hrx: 0.45, lsx: -1.6, lsz: 0.5, rsx: -1.4, rsz: -0.5, lex: -0.3, rex: -0.3, ltx: 0.4, lkx: 0.6, rtx: -0.3, rkx: 0.3, nrx: -0.3 }],
      [0.42, { hy: -0.73, hrx: 1.5, srx: 0, lsx: -2.7, lsz: 0.4, rsx: -2.5, rsz: -0.4, lex: -0.2, rex: -0.2, ltx: 0.05, lkx: 0.25, rtx: 0.1, rkx: 0.4, nrx: -0.65 }],
      [0.6, { hy: -0.75 }],
      [1.0, { rkx: 1.7, rtx: 0.25, rax: 0.5, lsx: -2.2, rsx: -1.2, rsz: -0.9, nry: 0.5, nrx: -0.9 }],
      [1.35, { rkx: 1.3, lsx: -2.6, rsx: -1.6, nry: 0.2 }],
      [1.7, { rkx: 1.75, lsx: -2.3, rsx: -1.1, nry: 0.5 }],
      [2.05, { hy: -0.44, hrx: 0.35, srx: 0.2, ltx: -1.45, lkx: 1.7, lax: 0.25, rtx: 0.15, rkx: 1.6, rax: 0, lsx: -0.4, lsz: 0.35, rsx: -0.3, rsz: -0.35, lex: -0.4, rex: -0.4, nrx: 0, nry: 0 }],
      [2.45, { hy: -0.14, hrx: 0.12, srx: 0.12, ltx: -0.5, lkx: 0.7, lax: 0, rtx: 0.05, rkx: 0.35, lsx: 0, rsx: 0, lsz: 0.15, rsz: -0.15, lex: -0.2, rex: -0.2 }],
      [2.75, 'def'],
    ],
  }),
  // مكعبل وقاعد ماسك رجله (أطول)
  // اللي بيشد الفانلة
  pull: makeAction({
    channels: 'upper', hold: true, dur: 0.25,
    frames: [[0, 'def'], [0.18, { srx: -0.18, lsx: -1.45, lsz: 0.12, lex: -0.15, rsx: -1.35, rsz: -0.12, rex: -0.25, nrx: 0.12 }], [0.25, {}]],
  }),
  // اللي فانلته متشدة
  pulled: makeAction({
    channels: 'upper', loop: true,
    frames: [
      [0, { srx: 0.32, lsx: -2.3, lsz: 0.6, lex: -0.3, rsx: -1.2, rsz: -0.9, rex: -0.4, nrx: -0.35 }],
      [0.22, { lsx: -1.3, lsz: 0.95, rsx: -2.25, rsz: -0.5 }],
      [0.44, { lsx: -2.3, lsz: 0.6, rsx: -1.2, rsz: -0.9 }],
    ],
  }),
  // طيارة بعد الجون
  airplane: makeAction({
    channels: 'upper', loop: true,
    frames: [
      [0, { lsx: -0.1, lsz: 1.45, rsx: -0.1, rsz: -1.45, lex: 0, rex: 0, srz: 0.18, srx: 0.05 }],
      [0.6, { srz: -0.18 }],
      [1.2, { srz: 0.18 }],
    ],
  }),
  jump: makeAction({
    loop: true,
    frames: [
      [0, { hy: -0.1, ltx: -0.3, lkx: 0.6, rtx: -0.3, rkx: 0.6, lax: 0.3, rax: 0.3, lsx: -2.8, rsx: -2.8, lsz: 0.35, rsz: -0.35, lex: -0.2, rex: -0.2 }],
      [0.32, { hy: 0.22, ltx: 0.05, lkx: 0.15, rtx: 0.05, rkx: 0.15, lax: 0.4, rax: 0.4, lsx: -3.0, rsx: -3.0 }],
      [0.64, { hy: -0.1, ltx: -0.3, lkx: 0.6, rtx: -0.3, rkx: 0.6, lax: 0.3, rax: 0.3, lsx: -2.8, rsx: -2.8 }],
    ],
  }),
  // زعلان: إيديه على راسه
  sad: makeAction({
    channels: 'upper', hold: true, dur: 0.5,
    frames: [[0, 'def'], [0.4, { srx: 0.15, nrx: 0.35, lsx: -2.5, lsz: 0.95, lex: -2.0, rsx: -2.5, rsz: -0.95, rex: -2.0 }], [0.5, {}]],
  }),
  cheer: makeAction({
    channels: 'upper', loop: true,
    frames: [
      [0, { lsx: -2.7, lsz: 0.4, rsx: -2.7, rsz: -0.4, lex: -0.3, rex: -0.3 }],
      [0.25, { lsx: -2.95, lsz: 0.2, rsx: -2.95, rsz: -0.2, lex: -0.6, rex: -0.6 }],
      [0.5, { lsx: -2.7, lsz: 0.4, rsx: -2.7, rsz: -0.4, lex: -0.3, rex: -0.3 }],
    ],
  }),
  wave: makeAction({
    channels: 'upper', loop: true,
    frames: [
      [0, { rsx: -2.5, rsz: -0.45, rex: -0.7, lsx: -0.2, nrx: 0.15 }],
      [0.25, { rsz: -0.95, rex: -0.4 }],
      [0.5, { rsz: -0.45, rex: -0.7 }],
    ],
  }),
  point: makeAction({
    channels: 'upper', hold: true, dur: 0.3,
    frames: [[0, 'def'], [0.25, { rsx: -1.55, rsz: -0.15, rex: -0.05, srx: -0.05, nrx: 0.05 }], [0.3, {}]],
  }),
  holdBall: makeAction({
    channels: 'upper', hold: true, dur: 0.25,
    frames: [[0, 'def'], [0.2, { lsx: -1.05, rsx: -1.05, lsz: 0.15, rsz: -0.15, lex: -1.15, rex: -1.15 }], [0.25, {}]],
  }),
  throw: makeAction({
    channels: 'upper',
    frames: [
      [0, { lsx: -1.05, rsx: -1.05, lex: -1.15, rex: -1.15 }],
      [0.25, { rsx: -2.95, rsz: -0.25, rex: -0.9, lsx: -0.6, sry: 0.45, srx: -0.15 }],
      [0.4, { rsx: -0.9, rex: -0.1, sry: -0.35, srx: 0.18 }],
      [0.7, 'def'],
    ],
  }),
  dazed: makeAction({
    channels: 'upper', loop: true,
    frames: [
      [0, { nry: 0.32, srz: 0.08, nrx: 0.15, lsz: 0.25, rsz: -0.25 }],
      [0.8, { nry: -0.32, srz: -0.08 }],
      [1.6, { nry: 0.32, srz: 0.08 }],
    ],
  }),
  sit: makeAction({
    hold: true, dur: 0.4, fadeIn: 0.2,
    frames: [[0, 'def'], [0.35, { hy: -0.45, ltx: -1.5, lkx: 1.5, rtx: -1.5, rkx: 1.5, lax: 0, rax: 0, srx: 0.06, lsx: -0.5, rsx: -0.5, lex: -0.8, rex: -0.8, lsz: 0.15, rsz: -0.15 }], [0.4, {}]],
  }),
  sitCheer: makeAction({
    loop: true,
    frames: [
      [0, { hy: -0.45, ltx: -1.5, lkx: 1.5, rtx: -1.5, rkx: 1.5, srx: 0.02, lsx: -2.7, lsz: 0.4, rsx: -2.7, rsz: -0.4, lex: -0.3, rex: -0.3 }],
      [0.25, { lsx: -2.95, rsx: -2.95, lex: -0.6, rex: -0.6 }],
      [0.5, { lsx: -2.7, rsx: -2.7, lex: -0.3, rex: -0.3 }],
    ],
  }),
  diveL: divePose(-1),
  diveR: divePose(1),
  // الحارس متحفز
  ready: makeAction({
    hold: true, dur: 0.3, fadeIn: 0.2,
    channels: ['hy', 'srx', 'ltx', 'lkx', 'lax', 'rtx', 'rkx', 'rax', 'lsz', 'rsz', 'lex', 'rex', 'lsx', 'rsx', 'ltz', 'rtz'],
    frames: [[0, 'def'], [0.3, { hy: -0.1, srx: 0.22, ltx: -0.38, lkx: 0.75, lax: -0.38, rtx: -0.38, rkx: 0.75, rax: -0.38, ltz: 0.12, rtz: -0.12, lsz: 0.45, rsz: -0.45, lsx: -0.4, rsx: -0.4, lex: -0.7, rex: -0.7 }]],
  }),
};

// ---------------------------------------------------------------- المحرّك
export class Animator {
  constructor(char) {
    this.c = char;
    this.phase = Math.random() * Math.PI * 2;
    this.spd = 0;
    this.t = Math.random() * 10;
    this.loco = Object.assign({}, DEF);
    this.out = Object.assign({}, DEF);
    this.layers = []; // {a, t, w, stopping}
    this.mode = 'normal';
    this.stepLenScale = 1;
    this.ampScale = 1;
    this.onStep = null;
    // بيتحطوا من اللعيب كل فريم: تسارع لقدام، سرعة اللف، وفين الكورة بالنسبة لوشه
    this.accel = 0;
    this.turn = 0;
    this.look = 0;
    this.lookX = 0;
  }

  play(name, { speed = 1, restart = true } = {}) {
    const a = ACTIONS[name];
    if (!a) return;
    const upper = a.channels === UPPER;
    // نوقف أي حركة تانية بتستخدم نفس المفاصل
    for (const l of this.layers) {
      if (l.name === name && !restart && !l.stopping) return;
      if ((l.a.channels === UPPER) === upper || !upper) l.stopping = true;
    }
    this.layers.push({ name, a, t: 0, w: 0, speed, stopping: false });
  }

  stop(name) {
    for (const l of this.layers) if (!name || l.name === name) l.stopping = true;
  }

  isPlaying(name) {
    return this.layers.some((l) => l.name === name && !l.stopping);
  }

  // speed بالمتر/ثانية
  update(dt, speed) {
    this.t += dt;
    this.spd = damp(this.spd, speed, 10, dt);
    this.locomotion(dt);

    const out = this.out;
    for (const k of KEYS) out[k] = this.loco[k];

    for (let i = 0; i < this.layers.length; i++) {
      const l = this.layers[i];
      const a = l.a;
      l.t += dt * l.speed;
      let done = false;
      if (l.t >= a.dur) {
        if (a.loop) l.t %= a.dur;
        else if (a.hold) l.t = a.dur;
        else { l.t = a.dur; done = true; }
      }
      const target = done || l.stopping ? 0 : 1;
      const rate = target > l.w ? 1 / Math.max(0.01, a.fadeIn) : 1 / Math.max(0.01, a.fadeOut);
      l.w = clamp(l.w + Math.sign(target - l.w) * rate * dt, 0, 1);
      if ((done || l.stopping) && l.w <= 0) { this.layers.splice(i--, 1); continue; }
      // نجيب البوز في الوقت ده
      const fr = a.frames;
      let j = 0;
      while (j < fr.length - 2 && fr[j + 1][0] < l.t) j++;
      const [t0, p0] = fr[j];
      const [t1, p1] = fr[Math.min(j + 1, fr.length - 1)];
      const u = t1 > t0 ? smooth(clamp((l.t - t0) / (t1 - t0), 0, 1)) : 1;
      const w = smooth(l.w);
      for (const k of a.channels) out[k] = lerp(out[k], lerp(p0[k], p1[k], u), w);
    }
    this.apply(out);
  }

  locomotion(dt) {
    const L = this.loco;
    const spd = this.spd;
    const t = this.t;
    if (this.mode === 'ride') {
      this.phase += dt * (1.5 + spd * 1.2);
      const p = this.phase;
      Object.assign(L, DEF);
      L.hy = -0.32; L.srx = 0.32; L.nrx = -0.25;
      L.ltx = -1.15 + 0.38 * Math.sin(p); L.lkx = 1.35 + 0.45 * Math.cos(p);
      L.rtx = -1.15 - 0.38 * Math.sin(p); L.rkx = 1.35 - 0.45 * Math.cos(p);
      L.lsx = -1.05; L.rsx = -1.05; L.lex = -0.35; L.rex = -0.35; L.lsz = 0.22; L.rsz = -0.22;
      return;
    }
    const run = smoothstep(2.2, 5.2, spd);
    const move = smoothstep(0.05, 0.7, spd);
    const idle = 1 - move;
    const stepLen = lerp(0.6, 1.3, run) * this.c.scale * this.stepLenScale;
    const prev = this.phase;
    this.phase += (spd / stepLen) * Math.PI * dt;
    if (this.onStep && Math.floor(prev / Math.PI) !== Math.floor(this.phase / Math.PI) && move > 0.5) this.onStep(run);
    const p = this.phase;
    const s = Math.sin(p), c = Math.cos(p);

    const sprint = smoothstep(5.6, 7.2, spd);
    const A = (lerp(0.36, 0.7, run) + sprint * 0.08) * move * this.ampScale;
    const B = (lerp(0.72, 1.6, run) + sprint * 0.15) * move;
    const stanceK = lerp(0.05, 0.26, run) * move + 0.06 * idle;
    const thighBias = -0.12 * run;

    const swingL = Math.max(0, c), swingR = Math.max(0, -c);
    L.ltx = -A * s + thighBias;
    L.rtx = A * s + thighBias;
    L.lkx = stanceK + B * swingL * swingL;
    L.rkx = stanceK + B * swingR * swingR;
    // دحرجة القدم: الكعب ينزل الأول وبعدين يزق بالصوابع
    const heelL = Math.pow(Math.max(0, s), 3), heelR = Math.pow(Math.max(0, -s), 3);
    const pushL = Math.max(0, -s) * Math.max(0, -c), pushR = Math.max(0, s) * Math.max(0, c);
    L.lax = -(L.ltx + L.lkx) * 0.75 * move + swingL * 0.3 * move - 0.06 * idle - heelL * 0.22 * move + pushL * 0.45 * move;
    L.rax = -(L.rtx + L.rkx) * 0.75 * move + swingR * 0.3 * move - 0.06 * idle - heelR * 0.22 * move + pushR * 0.45 * move;
    L.ltz = 0.02; L.rtz = -0.02;

    const as = Math.abs(s);
    L.hy = move * lerp(-0.028 * as, 0.055 * (as - 0.6), run) - 0.025 * run - 0.012 * idle;
    L.hry = -0.09 * s * move;
    // ميلة خفيفة جوه اللفّة زي أي حد بيجري
    const bank = clamp(-this.turn * spd * 0.022, -0.13, 0.13);
    L.hrz = 0.03 * s * move * (1 - 0.5 * run) + idle * 0.018 * Math.sin(t * 0.7) + bank;
    L.hrx = 0;
    L.srx = lerp(0.03, 0.13, run) * move + idle * 0.015 * Math.sin(t * 2.1) + clamp(this.accel * 0.02, -0.1, 0.14);
    L.sry = -L.hry * 1.5;
    L.srz = -L.hrz * 0.8;
    L.nrx = -L.srx * 0.6;
    // الراس بتبص على الكورة (أو بتتلفت وهو واقف)
    const glance = idle * 0.25 * Math.sin(t * 0.37 + this.phase);
    L.nry = -L.sry * 0.85 + clamp(this.look + glance, -1.15, 1.15);
    L.nrx += clamp(this.lookX, -0.3, 0.45);

    const armA = lerp(0.32, 0.85, run) * move * this.ampScale;
    L.lsx = armA * s;
    L.rsx = -armA * s;
    L.lsz = lerp(0.09, 0.17, run) + idle * 0.01 * Math.sin(t * 2.1);
    L.rsz = -L.lsz;
    const elb = lerp(0.22, 1.3, run) * move + 0.15 * idle;
    L.lex = -elb - Math.max(0, -L.lsx) * 0.45;
    L.rex = -elb - Math.max(0, -L.rsx) * 0.45;
  }

  apply(o) {
    const J = this.c.J;
    J.hips.position.y = HIP_H + o.hy;
    J.hips.rotation.set(o.hrx, o.hry, o.hrz);
    J.spine.rotation.set(o.srx, o.sry, o.srz);
    J.neck.rotation.set(o.nrx * 0.5, o.nry * 0.5, 0);
    J.head.rotation.set(o.nrx * 0.5, o.nry * 0.5, 0);
    J.lSh.rotation.set(o.lsx, 0, o.lsz);
    J.rSh.rotation.set(o.rsx, 0, o.rsz);
    J.lEl.rotation.x = o.lex;
    J.rEl.rotation.x = o.rex;
    J.lTh.rotation.set(o.ltx, 0, o.ltz);
    J.rTh.rotation.set(o.rtx, 0, o.rtz);
    J.lKn.rotation.x = o.lkx;
    J.rKn.rotation.x = o.rkx;
    J.lAn.rotation.x = o.lax;
    J.rAn.rotation.x = o.rax;
    if (J.skirt) {
      // الجلابية بتتهز مع الرجلين
      J.skirt.rotation.x = (o.ltx + o.rtx) * 0.25;
    }
  }
}

export { HIP_H, KEYS };
