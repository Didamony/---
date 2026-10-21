// الشخصيات: هيكل بمفاصل حقيقية (وسط ← فخد ← ركبة ← كاحل، وصدر ← كتف ← كوع ← إيد)
// والحركة كلها محسوبة من المفاصل دي عشان الرجل تفضل متركبة صح تحت الجسم
import * as THREE from 'three';
import { clamp, lerp, smooth, smoothstep, damp } from '../core/util.js';

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

// كبسولة متعلقة من فوق (المفصل في أولها) ونازلة لتحت
function limbGeo(r, len) {
  return geo('limb' + r + '_' + len, () => {
    const g = new THREE.CapsuleGeometry(r, Math.max(0.001, len - 2 * r), 5, 10);
    g.translate(0, -len / 2, 0);
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

// ---------------------------------------------------------------- المقاسات
const HIP_H = 0.92;
const THIGH = 0.42;
const HEAD_SCALE = 1.16;
const SHIN = 0.41;
const UPPER_ARM = 0.28;
const FOREARM = 0.25;

// ---------------------------------------------------------------- بناء الشخصية
// look = { skin, hair, hairStyle, top:{type,color,color2,number,numColor}, bottom:{type,color}, shoes, scale, build, mustache, glasses, beard }
export function buildCharacter(look) {
  const root = new THREE.Group();
  const s = look.scale || 1;
  const bw = look.build || 1; // تخن الجسم
  root.scale.setScalar(s);

  const skinM = mat(look.skin);
  const top = look.top || { type: 'tshirt', color: '#c33' };
  const bottom = look.bottom || { type: 'pants', color: '#333' };
  const topM = mat(top.color, 0.9);
  const top2M = mat(top.color2 || '#ffffff', 0.9);
  const botM = mat(bottom.color, 0.92);
  const shoeM = mat(look.shoes || '#e8e4dc', 0.7);
  const hairM = mat(look.hair || '#1a1210', 0.95);

  const J = {};
  const add = (parent, name, x, y, z) => {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    parent.add(g);
    J[name] = g;
    return g;
  };

  const hips = add(root, 'hips', 0, HIP_H, 0);
  // الحوض
  const pelvisCovered = top.type === 'galabeya' || top.type === 'dress';
  const pelvis = mesh(geo('pelvis', () => new THREE.SphereGeometry(1, 16, 10)), pelvisCovered ? topM : botM);
  pelvis.scale.set(0.18 * bw, 0.125, 0.13 * bw);
  pelvis.position.y = 0.01;
  hips.add(pelvis);

  // ---------- الجذع
  const spine = add(hips, 'spine', 0, 0.06, 0);
  const torsoGeo = geo('torso', () => {
    const pts = [
      [0.0, -0.02], [0.135, 0.0], [0.15, 0.1], [0.155, 0.22], [0.172, 0.34],
      [0.182, 0.41], [0.16, 0.47], [0.1, 0.505], [0.05, 0.515], [0.0, 0.515],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 20);
  });
  const torsoM = top.type === 'tank' ? topM : topM;
  const torso = mesh(torsoGeo, torsoM);
  torso.scale.set(1.1 * bw, 1, 0.72 * bw);
  spine.add(torso);

  if (top.type === 'tank') {
    // فانلة داخلي: الكتاف باينة
    const sh = geo('tankShoulder', () => new THREE.SphereGeometry(0.075, 10, 8));
    for (const sx of [-1, 1]) {
      const o = mesh(sh, skinM);
      o.position.set(sx * 0.15 * bw, 0.455, 0);
      o.scale.set(1, 0.8, 1);
      spine.add(o);
    }
  }
  if (top.type === 'tracksuit') {
    // سوستة وخطين على الصدر
    const zip = mesh(geo('zip', () => new THREE.BoxGeometry(0.012, 0.42, 0.01)), top2M, false);
    zip.position.set(0, 0.25, 0.104 * bw);
    spine.add(zip);
  }
  if (top.type === 'shirt') {
    const collar = mesh(geo('collar', () => new THREE.TorusGeometry(0.06, 0.018, 6, 14)), top2M, false);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.5;
    spine.add(collar);
  }
  if (top.type === 'suit') {
    const tie = mesh(geo('tie', () => new THREE.BoxGeometry(0.035, 0.26, 0.012)), mat(top.color2 || '#7a1f1f'), false);
    tie.position.set(0, 0.36, 0.105 * bw);
    spine.add(tie);
    const shirtV = mesh(geo('shirtV', () => new THREE.BoxGeometry(0.08, 0.14, 0.01)), mat('#f2f2f2'), false);
    shirtV.position.set(0, 0.44, 0.1 * bw);
    spine.add(shirtV);
  }
  if (top.number != null) {
    const plane = mesh(geo('numPlane', () => new THREE.PlaneGeometry(0.2, 0.2)),
      new THREE.MeshStandardMaterial({ map: numberTexture(top.number, top.numColor || '#fff'), transparent: true, roughness: 0.9 }), false);
    plane.position.set(0, 0.3, -0.112 * bw);
    plane.rotation.y = Math.PI;
    spine.add(plane);
  }
  if (top.type === 'galabeya' || top.type === 'dress') {
    // جلابية: جيبة طويلة متعلقة في الوسط
    const skirt = mesh(geo('skirt', () => {
      const pts = [[0.17, 0.1], [0.21, -0.1], [0.27, -0.45], [0.33, -0.8]].map(([x, y]) => new THREE.Vector2(x, y));
      return new THREE.LatheGeometry(pts, 20);
    }), mat(top.color, 0.9, { side: THREE.DoubleSide }));
    skirt.scale.set(bw, 1, 0.8 * bw);
    hips.add(skirt);
    J.skirt = skirt;
  }

  // ---------- الرقبة والراس
  const neck = add(spine, 'neck', 0, 0.5, 0);
  const neckM = mesh(geo('neckM', () => new THREE.CylinderGeometry(0.048, 0.055, 0.1, 10)), skinM);
  neckM.position.y = 0.03;
  neck.add(neckM);
  const head = add(neck, 'head', 0, 0.075, 0);
  head.scale.setScalar(HEAD_SCALE);
  const skull = mesh(geo('skull', () => new THREE.SphereGeometry(0.115, 20, 16)), skinM);
  skull.scale.set(0.93, 1.06, 1.0);
  skull.position.y = 0.105;
  head.add(skull);
  // ودان
  const ear = geo('ear', () => new THREE.SphereGeometry(0.028, 8, 6));
  for (const sx of [-1, 1]) {
    const e = mesh(ear, skinM, false);
    e.position.set(sx * 0.105, 0.1, -0.005);
    e.scale.set(0.5, 1, 0.8);
    head.add(e);
  }
  // وش
  const eyeW = mat('#f4f1ea', 0.4), eyeB = mat('#1b120c', 0.3);
  for (const sx of [-1, 1]) {
    const w = mesh(geo('eyeW', () => new THREE.SphereGeometry(0.017, 8, 6)), eyeW, false);
    w.position.set(sx * 0.038, 0.112, 0.099);
    w.scale.set(1.0, 0.85, 0.6);
    head.add(w);
    const p = mesh(geo('eyeP', () => new THREE.SphereGeometry(0.011, 8, 6)), eyeB, false);
    p.position.set(sx * 0.038, 0.111, 0.108);
    head.add(p);
    const brow = mesh(geo('brow', () => new THREE.BoxGeometry(0.04, 0.009, 0.012)), hairM, false);
    brow.position.set(sx * 0.04, 0.142, 0.104);
    brow.rotation.z = sx * -0.12;
    head.add(brow);
  }
  const nose = mesh(geo('nose', () => new THREE.SphereGeometry(0.018, 8, 6)), skinM, false);
  nose.position.set(0, 0.09, 0.113);
  nose.scale.set(0.9, 1.1, 1);
  head.add(nose);
  const mouth = mesh(geo('mouth', () => new THREE.BoxGeometry(0.045, 0.008, 0.01)), mat('#5a2a22'), false);
  mouth.position.set(0, 0.055, 0.104);
  head.add(mouth);
  if (look.mustache) {
    const m = mesh(geo('mustache', () => new THREE.BoxGeometry(0.06, 0.014, 0.015)), hairM, false);
    m.position.set(0, 0.07, 0.11);
    head.add(m);
  }
  if (look.beard) {
    const b = mesh(geo('beard', () => new THREE.SphereGeometry(0.1, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2)), hairM, false);
    b.position.set(0, 0.09, 0.015);
    b.scale.set(0.95, 0.75, 1.0);
    head.add(b);
  }
  if (look.glasses) {
    const gm = mat('#111', 0.3);
    for (const sx of [-1, 1]) {
      const ring = mesh(geo('glass', () => new THREE.TorusGeometry(0.022, 0.004, 5, 14)), gm, false);
      ring.position.set(sx * 0.038, 0.115, 0.113);
      head.add(ring);
    }
  }
  buildHair(head, look.hairStyle || 'short', hairM, look);

  // ---------- الدراعات
  const longSleeve = ['tracksuit', 'shirt', 'galabeya', 'suit', 'dress', 'jacket'].includes(top.type);
  const shortSleeve = ['tshirt', 'jersey'].includes(top.type);
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const sh = add(spine, side + 'Sh', sx * 0.205 * bw, 0.44, 0);
    const shoulderBall = mesh(geo('shBall', () => new THREE.SphereGeometry(0.068, 10, 8)), top.type === 'tank' ? skinM : topM);
    sh.add(shoulderBall);
    const upper = mesh(limbGeo(0.055, UPPER_ARM), longSleeve ? topM : skinM);
    sh.add(upper);
    if (shortSleeve) {
      const sleeve = mesh(limbGeo(0.068, 0.16), topM);
      sleeve.position.y = 0.01;
      sh.add(sleeve);
    }
    if (top.type === 'tracksuit') {
      const stripe = mesh(geo('armStripe', () => { const g = new THREE.BoxGeometry(0.012, UPPER_ARM, 0.02); g.translate(0, -UPPER_ARM / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.044;
      sh.add(stripe);
    }
    const el = add(sh, side + 'El', 0, -UPPER_ARM + 0.02, 0);
    const fore = mesh(limbGeo(0.047, FOREARM), longSleeve ? topM : skinM);
    const elbowBall = mesh(geo('elbowBall', () => new THREE.SphereGeometry(0.05, 8, 6)), longSleeve ? topM : skinM, false);
    el.add(elbowBall);
    el.add(fore);
    if (top.type === 'tracksuit') {
      const stripe = mesh(geo('foreStripe', () => { const g = new THREE.BoxGeometry(0.012, FOREARM - 0.04, 0.02); g.translate(0, -(FOREARM - 0.04) / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.038;
      el.add(stripe);
    }
    const hand = mesh(geo('hand', () => new THREE.SphereGeometry(0.052, 10, 8)), skinM);
    hand.position.y = -FOREARM - 0.015;
    hand.scale.set(0.8, 1.1, 0.9);
    el.add(hand);
    J[side + 'Hand'] = hand;
  }

  // ---------- الرجلين (متركبين تحت الوسط مباشرة)
  const shorts = bottom.type === 'shorts';
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const th = add(hips, side + 'Th', sx * 0.092 * bw, -0.03, 0);
    const thigh = mesh(limbGeo(0.085 * Math.sqrt(bw), THIGH), shorts ? skinM : botM);
    th.add(thigh);
    if (shorts) {
      const short = mesh(limbGeo(0.1 * Math.sqrt(bw), 0.26), botM);
      short.position.y = 0.02;
      th.add(short);
    }
    if (bottom.type === 'tracksuit' || top.type === 'tracksuit') {
      if (!shorts) {
        const stripe = mesh(geo('legStripe', () => { const g = new THREE.BoxGeometry(0.014, THIGH, 0.022); g.translate(0, -THIGH / 2, 0); return g; }), top2M, false);
        stripe.position.x = sx * 0.07;
        th.add(stripe);
      }
    }
    const kn = add(th, side + 'Kn', 0, -THIGH, 0);
    const shinM = shorts ? (look.socks ? mat(look.socks) : skinM) : botM;
    const shin = mesh(limbGeo(0.066, SHIN), shinM);
    const kneeBall = mesh(geo('kneeBall', () => new THREE.SphereGeometry(0.072, 8, 6)), shorts ? skinM : botM, false);
    kn.add(kneeBall);
    kn.add(shin);
    if (!shorts && (bottom.type === 'tracksuit' || top.type === 'tracksuit')) {
      const stripe = mesh(geo('shinStripe', () => { const g = new THREE.BoxGeometry(0.014, SHIN - 0.04, 0.02); g.translate(0, -(SHIN - 0.04) / 2, 0); return g; }), top2M, false);
      stripe.position.x = sx * 0.054;
      kn.add(stripe);
    }
    const an = add(kn, side + 'An', 0, -SHIN, 0);
    const shoe = look.slippers
      ? mesh(geo('slipper', () => { const g = new THREE.BoxGeometry(0.1, 0.025, 0.25); g.translate(0, -0.06, 0.045); return g; }), shoeM)
      : mesh(geo('shoe', () => {
        const g = new THREE.CapsuleGeometry(0.048, 0.15, 4, 10);
        g.rotateX(Math.PI / 2);
        g.scale(1.05, 0.75, 1);
        g.translate(0, -0.035, 0.045);
        return g;
      }), shoeM);
    an.add(shoe);
    if (look.slippers) {
      const foot = mesh(geo('bareFoot', () => { const g = new THREE.CapsuleGeometry(0.04, 0.12, 4, 8); g.rotateX(Math.PI / 2); g.scale(1, 0.6, 1); g.translate(0, -0.03, 0.04); return g; }), skinM);
      an.add(foot);
    }
    J[side + 'Foot'] = shoe;
  }

  root.traverse((o) => { if (o.isMesh) o.frustumCulled = true; });
  return { root, J, look, scale: s };
}

function buildHair(head, style, hairM, look) {
  const add = (g, x, y, z, sx = 1, sy = 1, sz = 1) => {
    const m = mesh(g, hairM, false);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    head.add(m);
    return m;
  };
  const cap = geo('hairCap', () => new THREE.SphereGeometry(0.122, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.55));
  switch (style) {
    case 'bald':
      break;
    case 'buzz':
      add(cap, 0, 0.11, -0.005, 0.95, 0.95, 1.0);
      break;
    case 'curly': {
      add(cap, 0, 0.115, -0.005, 0.98, 1.0, 1.02);
      const ball = geo('curl', () => new THREE.SphereGeometry(0.04, 8, 6));
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * Math.PI * 2;
        const r = 0.09;
        add(ball, Math.cos(a) * r * 0.95, 0.2 + Math.sin(i * 1.7) * 0.015, Math.sin(a) * r - 0.01);
      }
      add(ball, 0, 0.23, 0, 1.6, 0.9, 1.6);
      break;
    }
    case 'cap': {
      const capM = mat(look.capColor || '#e8e2d0', 0.8);
      const c = mesh(cap, capM, false);
      c.position.set(0, 0.12, 0);
      head.add(c);
      const brim = mesh(geo('brim', () => new THREE.CylinderGeometry(0.09, 0.09, 0.012, 16, 1, false, -Math.PI / 2, Math.PI)), capM, false);
      brim.position.set(0, 0.155, 0.1);
      brim.rotation.y = Math.PI / 2;
      brim.scale.set(1, 1, 0.8);
      head.add(brim);
      break;
    }
    case 'scarf': {
      // طرحة
      const scM = mat(look.scarfColor || '#3b2a4a', 0.95);
      const s = mesh(geo('scarf', () => new THREE.SphereGeometry(0.135, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.62)), scM, false);
      s.position.set(0, 0.1, -0.012);
      s.rotation.x = -0.25;
      head.add(s);
      const drape = mesh(geo('drape', () => new THREE.CylinderGeometry(0.12, 0.2, 0.25, 16, 1, true)), scM, false);
      drape.position.set(0, -0.04, -0.02);
      head.add(drape);
      break;
    }
    case 'gray':
    case 'short':
    default: {
      add(cap, 0, 0.115, -0.008, 1.0, 1.0, 1.03);
      const fringe = geo('fringe', () => new THREE.BoxGeometry(0.17, 0.035, 0.05));
      add(fringe, 0, 0.19, 0.075);
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
    const stepLen = lerp(0.6, 1.08, run) * this.c.scale * this.stepLenScale;
    const prev = this.phase;
    this.phase += (spd / stepLen) * Math.PI * dt;
    if (this.onStep && Math.floor(prev / Math.PI) !== Math.floor(this.phase / Math.PI) && move > 0.5) this.onStep(run);
    const p = this.phase;
    const s = Math.sin(p), c = Math.cos(p);

    const A = lerp(0.36, 0.7, run) * move * this.ampScale;
    const B = lerp(0.72, 1.6, run) * move;
    const stanceK = lerp(0.05, 0.26, run) * move + 0.06 * idle;
    const thighBias = -0.12 * run;

    const swingL = Math.max(0, c), swingR = Math.max(0, -c);
    L.ltx = -A * s + thighBias;
    L.rtx = A * s + thighBias;
    L.lkx = stanceK + B * swingL * swingL;
    L.rkx = stanceK + B * swingR * swingR;
    L.lax = -(L.ltx + L.lkx) * 0.75 * move + swingL * 0.3 * move - 0.06 * idle;
    L.rax = -(L.rtx + L.rkx) * 0.75 * move + swingR * 0.3 * move - 0.06 * idle;
    L.ltz = 0.02; L.rtz = -0.02;

    const as = Math.abs(s);
    L.hy = move * lerp(-0.028 * as, 0.055 * (as - 0.6), run) - 0.025 * run - 0.012 * idle;
    L.hry = -0.09 * s * move;
    L.hrz = 0.03 * s * move * (1 - 0.5 * run) + idle * 0.018 * Math.sin(t * 0.7);
    L.hrx = 0;
    L.srx = lerp(0.03, 0.13, run) * move + idle * 0.015 * Math.sin(t * 2.1);
    L.sry = -L.hry * 1.5;
    L.srz = -L.hrz * 0.8;
    L.nrx = -L.srx * 0.6;
    L.nry = -L.sry * 0.85;

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

export { HIP_H };
