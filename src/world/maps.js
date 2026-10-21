// الأماكن: الحارة، الحوش الواسع، حوش المدرسة، السطح
import * as THREE from 'three';
import { mat } from '../actors/character.js';
import { makeRng } from '../core/util.js';
import { groundTexture, plasterTexture, brickTexture, graffitiTexture, signTexture, textTexture, canvasTex } from '../render/textures.js';
import {
  box, cyl, building, balcony, acUnit, satelliteDish, waterTank, laundryLine, cable, streetLamp, fulCart, oldCar,
  bricksGoal, slippersGoal, frameGoal, chalkGoal, tree, barrel, tirePile, plasticChair, cafeTable, pigeonCoop, flagPole, wall, addWindow,
} from './props.js';
import { MAPS } from '../game/config.js';
import { mergeStatic } from '../render/merge.js';

function newCtx(def) {
  return {
    def,
    root: new THREE.Group(),
    static: new THREE.Group(),
    dynamic: new THREE.Group(),
    colliders: [],
    windows: [],
    balconies: [],
    lamps: [],
    pointLights: [],
    litMats: [],
    nightOnly: [],
    dayOnly: [],
    doors: [],
    flags: [],
    clothes: [],
    walkerPaths: [],
    spectators: [],
    goals: [],
    animals: [],
    extras: {},
    bounds: null,
    ballOut: null, // دالة بتقول لو الكورة طلعت برة (السطح)
    camZ: 0,
  };
}

function ground(ctx, kind, sx, sz, seed) {
  const def = ctx.def;
  const t = groundTexture(kind, sx, sz, def, seed);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(sx, sz), new THREE.MeshStandardMaterial({ map: t, roughness: 1 }));
  g.rotation.x = -Math.PI / 2;
  g.receiveShadow = true;
  ctx.root.add(g);
  ctx.groundMesh = g;
  return g;
}

function goals(ctx) {
  const d = ctx.def;
  const gx = d.goal.type === 'chalk' ? d.halfL + 1 : d.halfL - 0.4;
  for (const side of [-1, 1]) {
    const x = side * gx;
    if (d.goal.type === 'bricks') bricksGoal(ctx, x, d.goal.hw, side);
    else if (d.goal.type === 'slippers') slippersGoal(ctx, x, d.goal.hw);
    else if (d.goal.type === 'frame') frameGoal(ctx, x, d.goal.hw, d.goal.h, side);
    else if (d.goal.type === 'chalk') chalkGoal(ctx, x, d.goal.hw, d.goal.h, -side);
    // side هو الناحية؛ الفريق اللي بيدافع عن الجون ده
    ctx.goals.push({ side, x, hw: d.goal.hw, h: d.goal.h, type: d.goal.type });
  }
}

function seated(ctx, x, z, rotY, kind = 'kid') {
  ctx.spectators.push({ pos: new THREE.Vector3(x, 0, z), rotY, kind });
}

// ======================================================================= الحارة
function buildAlley(ctx) {
  const d = ctx.def;
  const rng = makeRng(11);
  ground(ctx, 'asphalt', 46, 15, 4);
  const L = 20.5, BZ = -6.2, NZ = 6.2;
  ctx.bounds = { minX: -L + 0.5, maxX: L - 0.5, minZ: BZ + 0.4, maxZ: NZ - 0.4 };
  ctx.camZ = 0.4;

  // رصيف
  const curbM = mat('#a39a8a', 0.95);
  box(46, 0.16, 1.2, curbM, 0, 0.08, BZ + 0.6, ctx.static);
  box(46, 0.16, 1.2, curbM, 0, 0.08, NZ - 0.6, ctx.static);
  box(46, 0.05, 0.1, mat('#e8e2d0'), 0, 0.17, BZ + 1.2, ctx.static);

  // العماير اللي ورا
  const colors = ['#c9a982', '#b98d6a', '#d7c3a0', '#a9907a', '#c4a07a', '#bfae94', '#c7b7a0', '#b0a08a'];
  const segs = [
    [-24, -17, 10.5, { door: true }],
    [-17, -9.5, 13, { shop: { name: 'قهوة المعلم', bg: '#6a3a1a', open: true, sub: 'شاي • قهوة • شيشة' } }],
    [-9.5, -2.5, 11.5, { door: true }],
    [-2.5, 4.5, 14.5, { shop: { name: 'بقالة الأمل', bg: '#1f6b3a', open: true, awning: '#2f7a48' } }],
    [4.5, 11.5, 12, { door: true }],
    [11.5, 18, 13.5, { shop: { name: 'مكوجي رِجل', bg: '#8a2a2a', open: false } }],
    [18, 25, 11, { door: true }],
  ];
  segs.forEach(([x0, x1, h, o], i) => building(ctx, { x0, x1, z: BZ, face: 1, h, color: colors[i % colors.length], seed: i + 3, floors: 3, lit: 0.55, ...o }));
  balcony(ctx, -6.2, 3.3, BZ, 1, 3.0);
  balcony(ctx, 8.0, 6.4, BZ, 1, 3.0);
  ctx.extras.momBalcony = 0;

  // العماير اللي قدام (مقطوعة عشان الكاميرا تشوف)
  const cut = mat('#3a332c', 1);
  for (let i = 0; i < 7; i++) {
    const x0 = -24 + i * 7, x1 = x0 + 7;
    const c = colors[(i + 3) % colors.length];
    const h = 0.7 + (i % 2) * 0.15;
    const m = new THREE.MeshStandardMaterial({ map: plasterTexture(c, i + 20, { band: 'rgba(70,60,50,0.35)', bricks: false }), roughness: 0.95 });
    const b = box(7, h, 0.35, m, (x0 + x1) / 2, h / 2, NZ + 0.18, ctx.static);
    box(7, 0.04, 0.36, cut, (x0 + x1) / 2, h + 0.02, NZ + 0.18, ctx.static).castShadow = false;
    // بقايا عتبة باب
    if (i % 2 === 0) box(1.6, 0.18, 0.6, mat('#a39a8a'), (x0 + x1) / 2, 0.09, NZ - 0.2, ctx.static);
    void b;
  }
  ctx.colliders.push({ min: new THREE.Vector3(-30, 0, NZ), max: new THREE.Vector3(30, 20, NZ + 3), tag: 'wall', invisible: true });

  // نهاية الحارة من الناحيتين
  const endM = new THREE.MeshStandardMaterial({ map: plasterTexture('#b9a888', 40, { band: 'rgba(60,50,40,0.4)' }), roughness: 0.95 });
  wall(ctx, -L - 0.2, BZ, -L - 0.2, NZ, 4.2, endM, { thick: 0.4, collideH: 20 });
  const g1 = new THREE.Mesh(new THREE.PlaneGeometry(9, 2.2), new THREE.MeshBasicMaterial({
    map: graffitiTexture([
      { text: 'ممنوع لعب الكورة', y: 0.33, color: 'rgba(160,20,20,0.85)', font: '900 96px Cairo' },
      { text: 'بأمر السكان', y: 0.72, color: 'rgba(30,30,30,0.8)', font: '900 70px Cairo' },
    ]), transparent: true,
  }));
  g1.position.set(-L + 0.01, 2.4, 0);
  g1.rotation.y = Math.PI / 2;
  ctx.static.add(g1);
  wall(ctx, L + 0.2, BZ, L + 0.2, NZ, 3.6, new THREE.MeshStandardMaterial({ map: plasterTexture('#7d9a7a', 41, { band: 'rgba(40,50,40,0.4)' }), roughness: 0.95 }), { thick: 0.4, collideH: 20 });
  const g2 = new THREE.Mesh(new THREE.PlaneGeometry(8, 2), new THREE.MeshBasicMaterial({
    map: graffitiTexture([{ text: 'حارة الأبطال', y: 0.45, color: 'rgba(250,245,230,0.9)', font: '900 110px Cairo' }]), transparent: true,
  }));
  g2.position.set(L - 0.01, 2.3, 0);
  g2.rotation.y = -Math.PI / 2;
  ctx.static.add(g2);
  oldCar(ctx, L - 1.8, 3.6, Math.PI / 2 + 0.08, '#d8c9a0');
  barrel(ctx.static, L - 1.0, -4.2, '#2f5a8a');
  barrel(ctx.static, L - 1.7, -4.6, '#8a3a2a');
  ctx.colliders.push({ min: new THREE.Vector3(L - 2.1, 0, -5.2), max: new THREE.Vector3(L, 0.9, -3.8), tag: 'obj', solid: true });

  // عربية الفول والقهوة
  fulCart(ctx, 13.2, BZ + 1.75, 0);
  cafeTable(ctx.static, -14.5, BZ + 1.9);
  cafeTable(ctx.static, -11.8, BZ + 1.9);
  plasticChair(ctx.static, -15.2, BZ + 1.9, Math.PI / 2);
  plasticChair(ctx.static, -13.8, BZ + 1.9, -Math.PI / 2, '#d8402a');
  plasticChair(ctx.static, -12.5, BZ + 1.9, Math.PI / 2, '#2a6ad8');
  seated(ctx, -15.2, BZ + 1.9, Math.PI / 2, 'old');
  seated(ctx, -12.5, BZ + 1.9, Math.PI / 2, 'old');
  // عيال قاعدين على الرصيف اللي قدام بيتفرجوا
  seated(ctx, -7.0, NZ - 0.35, Math.PI, 'kid');
  seated(ctx, -6.2, NZ - 0.35, Math.PI, 'kid');
  seated(ctx, 4.5, NZ - 0.35, Math.PI, 'kid');
  seated(ctx, 9.5, BZ + 0.45, 0, 'kid');

  // كشافات
  streetLamp(ctx, -15.5, BZ + 0.9, 1, { arm: 2.2 });
  streetLamp(ctx, -5, BZ + 0.9, 1, { arm: 2.4 });
  streetLamp(ctx, 4.8, BZ + 0.9, 1, { flicker: true, arm: 2.4 });
  streetLamp(ctx, 15.5, BZ + 0.9, 1, { arm: 2.2 });
  // سلوك كهربا
  for (const [a, b] of [[-15.5, -5], [-5, 4.8], [4.8, 15.5]]) cable(ctx.static, new THREE.Vector3(a, 5.5, BZ + 0.9), new THREE.Vector3(b, 5.5, BZ + 0.9), 0.5);
  cable(ctx.static, new THREE.Vector3(-20, 9, BZ), new THREE.Vector3(20, 8.5, BZ + 0.3), 1.2, '#222');
  // غسيل
  ctx.clothes.push(...laundryLine(ctx.static, new THREE.Vector3(-9, 7.5, BZ + 0.35), new THREE.Vector3(-3.2, 7.4, BZ + 0.35), rng, 0.25));
  ctx.clothes.push(...laundryLine(ctx.static, new THREE.Vector3(5, 10.6, BZ + 0.35), new THREE.Vector3(11, 10.6, BZ + 0.35), rng, 0.2));
  // صندوق زبالة وكراتين
  box(1.4, 1.0, 0.8, mat('#2f6a3a', 0.6, { metalness: 0.3 }), -19, 0.5, BZ + 0.8, ctx.static);
  box(0.6, 0.4, 0.5, mat('#b08a5a'), -18, 0.2, BZ + 1.4, ctx.static).rotation.y = 0.4;
  ctx.colliders.push({ min: new THREE.Vector3(-19.7, 0, BZ + 0.4), max: new THREE.Vector3(-18.3, 1.0, BZ + 1.2), tag: 'obj', solid: true });
  // قطة نايمة
  ctx.animals.push({ kind: 'cat', pos: new THREE.Vector3(-18.0, 0.4, BZ + 1.4), rot: 0.4 });

  // طرق المشاة
  ctx.walkerPaths.push({ a: new THREE.Vector3(-22, 0, BZ + 0.7), b: new THREE.Vector3(22, 0, BZ + 0.7) });
  ctx.walkerPaths.push({ a: new THREE.Vector3(22, 0, NZ - 0.8), b: new THREE.Vector3(-22, 0, NZ - 0.8) });
  ctx.walkerPaths.push({ cross: true, z0: BZ + 0.3, z1: NZ - 0.3 });
  ctx.extras.toktok = { z: 0.6, from: -L - 2, to: L + 2 };
  ctx.extras.bike = { z: -2.5 };
  goals(ctx);
}

// ======================================================================= الحوش الواسع
function buildYard(ctx) {
  const d = ctx.def;
  const rng = makeRng(23);
  const L = 23.5, W = 11.5;
  ground(ctx, 'dirt', 62, 34, 9);
  ctx.bounds = { minX: -L + 0.5, maxX: L - 0.5, minZ: -W + 0.5, maxZ: W - 0.5 };
  ctx.camZ = 0.8;

  const wallM = new THREE.MeshStandardMaterial({ map: plasterTexture('#bdb3a0', 50, { band: 'rgba(80,70,60,0.35)' }), roughness: 0.95 });
  wallM.map.repeat.set(6, 1);
  wall(ctx, -L, -W, L, -W, 3.0, wallM, { thick: 0.35, collideH: 30 });
  wall(ctx, -L, -W, -L, W, 3.0, wallM, { thick: 0.35, collideH: 30 });
  wall(ctx, L, -W, L, W, 3.0, wallM, { thick: 0.35, collideH: 30 });
  const nearM = new THREE.MeshStandardMaterial({ map: plasterTexture('#bdb3a0', 51, { band: 'rgba(80,70,60,0.35)', bricks: false }), roughness: 0.95 });
  wall(ctx, -L, W, L, W, 0.9, nearM, { thick: 0.35, collideH: 30 });
  // إعلانات مرسومة على الحيطة
  const ads = [
    { x: -12, text: 'دهانات النجمة', bg: '#1f4e9a' },
    { x: 0, text: 'حوش الشباب', bg: '#8a2a2a', sub: 'للتأجير • كورة خماسي' },
    { x: 12, text: 'مخبز الحرية', bg: '#c07a1a', sub: 'عيش بلدي وفينو' },
  ];
  for (const a of ads) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 1.4), new THREE.MeshStandardMaterial({ map: signTexture(a.text, a.bg, '#fff', a.sub), roughness: 0.9 }));
    p.position.set(a.x, 1.7, -W + 0.19);
    ctx.static.add(p);
  }
  const graf = new THREE.Mesh(new THREE.PlaneGeometry(10, 2.2), new THREE.MeshBasicMaterial({
    map: graffitiTexture([{ text: 'الكورة للجميع', color: 'rgba(30,30,30,0.7)', font: '900 100px Cairo', rot: -0.04 }]), transparent: true,
  }));
  graf.position.set(-L + 0.19, 1.6, 0);
  graf.rotation.y = Math.PI / 2;
  ctx.static.add(graf);
  // باب حديد
  const gateM = mat('#3a5a7a', 0.6, { metalness: 0.5 });
  box(0.1, 2.6, 3.0, gateM, L - 0.15, 1.3, -6, ctx.static);
  for (let i = 0; i < 8; i++) box(0.12, 2.6, 0.05, mat('#2a4a6a', 0.6, { metalness: 0.5 }), L - 0.2, 1.3, -7.4 + i * 0.4, ctx.static);
  ctx.doors.push(new THREE.Vector3(L - 1, 0, -6));

  // عماير ورا السور
  const colors = ['#c9a982', '#b98d6a', '#d7c3a0', '#a9907a', '#c4a07a', '#bfae94'];
  for (let i = 0; i < 8; i++) {
    const x0 = -30 + i * 7.5;
    building(ctx, { x0, x1: x0 + 7.5, z: -W - 4, face: 1, h: 10 + rng() * 9, color: colors[i % 6], seed: 60 + i, floors: 5, lit: 0.45, roofStuff: true });
  }
  balcony(ctx, -4, 6.4, -W - 4, 1, 3.0);
  // الجنبين
  for (const s of [-1, 1]) building(ctx, { x0: s > 0 ? L + 3 : -L - 30, x1: s > 0 ? L + 30 : -L - 3, z: -W - 4, face: 1, h: 14, color: '#b0a08a', seed: 70 + s, floors: 4, lit: 0.4, roofStuff: false });

  // شجر وحاجات على الأطراف
  tree(ctx.static, -L + 1.6, -W + 1.6, 1.1, rng);
  tree(ctx.static, L - 1.8, W - 2.2, 1.0, rng);
  tree(ctx.static, -L + 2.0, W - 2.0, 0.9, rng);
  ctx.colliders.push({ min: new THREE.Vector3(-L + 1.3, 0, -W + 1.3), max: new THREE.Vector3(-L + 1.9, 3, -W + 1.9), tag: 'obj', solid: true });
  tirePile(ctx.static, L - 1.4, -W + 1.4, 4);
  tirePile(ctx.static, L - 2.3, -W + 1.2, 2);
  barrel(ctx.static, -L + 1.2, 2.5, '#8a3a2a');
  barrel(ctx.static, -L + 1.0, 3.4, '#3a6a3a');
  ctx.colliders.push({ min: new THREE.Vector3(-L + 0.6, 0, 2.0), max: new THREE.Vector3(-L + 1.6, 0.9, 3.9), tag: 'obj', solid: true });
  // خزان ميه على برج
  const tw = new THREE.Group();
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(0.08, 0.08, 6, mat('#5a5a5a', 0.5, { metalness: 0.6 }), sx * 1, 3, sz * 1, tw, 6);
  cyl(1.4, 1.4, 2.2, mat('#d8d4c8', 0.6), 0, 7.1, 0, tw, 20);
  tw.position.set(16, 0, -W - 2.2);
  ctx.static.add(tw);
  // دكك خشب للمتفرجين
  for (const x of [-8, 6]) {
    box(3.0, 0.08, 0.5, mat('#7a5a3a'), x, 0.45, -W + 0.7, ctx.static);
    for (const s of [-1, 1]) box(0.08, 0.45, 0.4, mat('#5a4030'), x + s * 1.3, 0.22, -W + 0.7, ctx.static);
  }
  seated(ctx, -8.8, -W + 0.75, 0, 'kid');
  seated(ctx, -7.6, -W + 0.75, 0, 'kid');
  seated(ctx, 5.4, -W + 0.75, 0, 'old');
  seated(ctx, 6.8, -W + 0.75, 0, 'kid');
  // خروف متربط في الشجرة
  ctx.animals.push({ kind: 'sheep', pos: new THREE.Vector3(-L + 3.2, 0, W - 3.0), rot: 0.8 });
  ctx.colliders.push({ min: new THREE.Vector3(-L + 2.6, 0, W - 3.5), max: new THREE.Vector3(-L + 3.8, 0.9, W - 2.5), tag: 'sheep', solid: true });

  // كشافات كبيرة في الأركان
  for (const [x, z, f, fl] of [[-L + 0.6, -W + 0.6, 1, false], [L - 0.6, -W + 0.6, 1, true], [-L + 0.6, W - 0.6, -1, false], [L - 0.6, W - 0.6, -1, false]]) {
    streetLamp(ctx, x, z, f, { h: 8.5, arm: 0.8, flicker: fl });
    ctx.lamps[ctx.lamps.length - 1].flood = true;
  }
  ctx.walkerPaths.push({ a: new THREE.Vector3(L - 1, 0, -6), b: new THREE.Vector3(-L + 1, 0, -W + 1.2) });
  ctx.walkerPaths.push({ a: new THREE.Vector3(-L + 1, 0, W - 1.2), b: new THREE.Vector3(L - 1, 0, -6) });
  ctx.extras.bike = { z: W - 1.3 };
  goals(ctx);
}

// ======================================================================= حوش المدرسة
function buildSchool(ctx) {
  const d = ctx.def;
  const rng = makeRng(37);
  const L = d.halfL + 1, W = 9.6;
  ground(ctx, 'tiles', 48, 26, 13);
  ctx.bounds = { minX: -L + 0.4, maxX: L - 0.4, minZ: -W + 0.4, maxZ: W - 0.4 };
  ctx.camZ = 0.6;

  // مبنى المدرسة
  const SZ = -W;
  building(ctx, { x0: -L - 6, x1: L + 6, z: SZ, face: 1, h: 13, color: '#e0c98f', seed: 81, floors: 3, lit: 0.25, roofStuff: false, door: true });
  // يافطة المدرسة
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.5), new THREE.MeshStandardMaterial({ map: signTexture('مدرسة النصر الإعدادية بنين', '#1f4e7a', '#fff', 'إدارة شرق التعليمية'), roughness: 0.8 }));
  sg.position.set(0, 10.6, SZ + 0.08);
  ctx.static.add(sg);
  flagPole(ctx, 6.5, SZ + 1.2);
  ctx.colliders.push({ min: new THREE.Vector3(6.4, 0, SZ + 1.1), max: new THREE.Vector3(6.6, 8, SZ + 1.3), tag: 'pole' });
  // جدارية
  const mural = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.4), new THREE.MeshBasicMaterial({
    map: graffitiTexture([{ text: 'العلم نور', color: 'rgba(30,80,150,0.9)', font: '900 120px Cairo' }]), transparent: true,
  }));
  mural.position.set(-10, 1.3, SZ + 0.02);
  ctx.static.add(mural);
  // حيطان الأطراف (عليها الجون بالطباشير)
  const wm = new THREE.MeshStandardMaterial({ map: plasterTexture('#d8cba8', 85, { band: 'rgba(40,80,120,0.55)', bricks: false }), roughness: 0.95 });
  wm.map.repeat.set(3, 1);
  wall(ctx, -L, SZ, -L, W, 3.4, wm, { thick: 0.4, collideH: 30 });
  wall(ctx, L, SZ, L, W, 3.4, wm, { thick: 0.4, collideH: 30 });
  wall(ctx, -L, W, L, W, 0.9, new THREE.MeshStandardMaterial({ map: plasterTexture('#d8cba8', 86, { band: 'rgba(40,80,120,0.55)', bricks: false }), roughness: 0.95 }), { thick: 0.35, collideH: 30 });
  // ديكور: سبورة وكولدير وسلة
  box(1.0, 1.4, 0.5, mat('#c8c8c8', 0.3, { metalness: 0.7 }), 13, 0.7, SZ + 0.3, ctx.static);
  box(0.5, 0.06, 0.2, mat('#666'), 13, 1.0, SZ + 0.6, ctx.static);
  ctx.colliders.push({ min: new THREE.Vector3(12.5, 0, SZ), max: new THREE.Vector3(13.5, 1.4, SZ + 0.6), tag: 'obj', solid: true });
  for (const x of [-13, -3, 9]) {
    box(2.6, 0.08, 0.45, mat('#3a6a9a'), x, 0.45, SZ + 0.6, ctx.static);
    for (const s of [-1, 1]) box(0.08, 0.45, 0.4, mat('#2a4a6a'), x + s * 1.1, 0.22, SZ + 0.6, ctx.static);
  }
  seated(ctx, -13.6, SZ + 0.65, 0, 'kid');
  seated(ctx, -12.4, SZ + 0.65, 0, 'kid');
  seated(ctx, 8.4, SZ + 0.65, 0, 'kid');
  tree(ctx.static, -L - 2.0, W + 2.0, 1.3, rng);
  tree(ctx.static, L + 2.0, W + 2.5, 1.2, rng);
  // كشافات على الحيطة
  for (const [x, fl] of [[-12, false], [-1.5, false], [8, true], [15, false]]) streetLamp(ctx, x, SZ + 0.05, 1, { h: 4.6, arm: 0.9, wall: true, flicker: fl });
  ctx.extras.headmaster = true;
  ctx.walkerPaths.push({ a: new THREE.Vector3(-L + 1, 0, SZ + 1.2), b: new THREE.Vector3(L - 1, 0, SZ + 1.2) });
  goals(ctx);
}

// ======================================================================= السطح
function buildRoof(ctx) {
  const d = ctx.def;
  const rng = makeRng(51);
  const X0 = -17, X1 = 13.2, W = 7.2;
  const g = ground(ctx, 'roof', X1 - X0, W * 2, 21);
  g.position.x = (X0 + X1) / 2;
  ctx.bounds = { minX: -d.halfL - 0.8, maxX: X1 - 0.4, minZ: -W + 0.4, maxZ: W - 0.4 };
  ctx.camZ = 0.4;
  // سور السطح
  const pm = new THREE.MeshStandardMaterial({ map: plasterTexture('#c7bba5', 91, { band: 'rgba(60,55,50,0.3)', bricks: false }), roughness: 0.95 });
  pm.map.repeat.set(8, 0.3);
  const PH = 1.0;
  wall(ctx, X0, -W, X1, -W, PH, pm, { thick: 0.3 });
  wall(ctx, X0, W, X1, W, PH, pm, { thick: 0.3 });
  wall(ctx, X1, -W, X1, W, PH, pm, { thick: 0.3 });
  wall(ctx, X0, -W, X0, W, PH, pm, { thick: 0.3 });
  // جسم العمارة تحت السطح
  const bm = new THREE.MeshStandardMaterial({ map: plasterTexture('#bfae94', 92, {}), roughness: 0.95 });
  box(X1 - X0 + 0.3, 30, W * 2 + 0.3, bm, (X0 + X1) / 2, -15.01, 0, ctx.static).castShadow = false;
  // أوضة السلم
  const sx = -14.6, sz = 4.6;
  const room = box(3.6, 2.8, 3.2, new THREE.MeshStandardMaterial({ map: plasterTexture('#cdbfa6', 93, {}), roughness: 0.95 }), sx, 1.4, sz, ctx.static);
  box(3.8, 0.15, 3.4, mat('#8a8070'), sx, 2.85, sz, ctx.static);
  box(1.0, 2.1, 0.06, mat('#4a3a2a'), sx + 1.0, 1.05, sz - 1.62, ctx.static);
  ctx.colliders.push({ min: new THREE.Vector3(sx - 1.8, 0, sz - 1.6), max: new THREE.Vector3(sx + 1.8, 2.9, sz + 1.6), tag: 'wall', solid: true });
  ctx.doors.push(new THREE.Vector3(sx + 1.0, 0, sz - 2.0));
  void room;
  // غية الحمام
  pigeonCoop(ctx, -14.8, -4.6);
  ctx.extras.pigeons = new THREE.Vector3(-14.8, 3.9, -4.6);
  // خزانات ودشات على السور اللي ورا
  waterTank(ctx.static, -3, 0, -W + 1.0);
  waterTank(ctx.static, 1, 0, -W + 1.0);
  ctx.colliders.push({ min: new THREE.Vector3(-3.7, 0, -W + 0.3), max: new THREE.Vector3(1.7, 2.1, -W + 1.7), tag: 'obj', solid: true });
  for (const x of [-9, -6.5, 5, 8]) satelliteDish(ctx.static, x, 0.6, -W + 0.4, 1);
  // غسيل فوق
  ctx.clothes.push(...laundryLine(ctx.static, new THREE.Vector3(4, 2.3, -W + 0.2), new THREE.Vector3(12.8, 2.3, -W + 0.2), rng, 0.25));
  for (const x of [4, 12.8]) cyl(0.03, 0.03, 2.3, mat('#555'), x, 1.15, -W + 0.2, ctx.static, 6);
  // زينة رمضان: حبل لمبات ملونة وفانوس
  const colors = ['#ff4455', '#44dd66', '#4488ff', '#ffcc33', '#ff66cc'];
  const a = new THREE.Vector3(-12.6, 2.7, sz - 1.6), b = new THREE.Vector3(12.8, 2.5, -W + 0.2);
  cable(ctx.static, a, b, 0.6, '#222');
  const bulbs = [];
  for (let i = 1; i < 28; i++) {
    const t = i / 28;
    const p = new THREE.Vector3().lerpVectors(a, b, t);
    p.y -= Math.sin(t * Math.PI) * 0.6 + 0.05;
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 4), new THREE.MeshBasicMaterial({ color: colors[i % colors.length] }));
    m.position.copy(p);
    ctx.dynamic.add(m);
    bulbs.push(m);
  }
  ctx.extras.fairy = bulbs;
  // فانوس كبير
  const lan = new THREE.Group();
  const gold = mat('#c9a040', 0.35, { metalness: 0.8 });
  cyl(0.02, 0.18, 0.18, gold, 0, 0.62, 0, lan, 8);
  const glassM = new THREE.MeshStandardMaterial({ color: '#ffb040', emissive: '#ff9a30', emissiveIntensity: 0.4, roughness: 0.3, transparent: true, opacity: 0.9 });
  cyl(0.2, 0.2, 0.5, glassM, 0, 0.3, 0, lan, 8);
  cyl(0.2, 0.08, 0.15, gold, 0, -0.02, 0, lan, 8);
  lan.position.set(-12.6 + 0.4, 1.9, sz - 1.7);
  ctx.static.add(lan);
  ctx.litMats.push({ m: glassM, lit: true, k: 2.5, dayK: 0.3 });
  ctx.pointLights.push({ pos: new THREE.Vector3(-12.2, 2.1, sz - 1.9), color: '#ff9a40', intensity: 5, dist: 6, shadow: false });
  // كشاف على أوضة السلم
  streetLamp(ctx, sx + 1.9, sz - 0.6, -1, { h: 2.6, arm: 0.5, wall: true, flicker: true });
  streetLamp(ctx, 12.6, -W + 0.4, 1, { h: 3.4, arm: 0.7 });
  streetLamp(ctx, -4, -W + 0.3, 1, { h: 3.6, arm: 0.9 });
  streetLamp(ctx, -9.5, -W + 0.3, 1, { h: 3.6, arm: 1.6 });
  streetLamp(ctx, 6, -W + 0.3, 1, { h: 3.6, arm: 1.6 });

  // المدينة حوالين: أسطح تانية ومأذنة
  const cityColors = ['#c9a982', '#b98d6a', '#d7c3a0', '#a9907a', '#c4a07a', '#bfae94', '#9a8a78'];
  for (let i = 0; i < 26; i++) {
    const ang = (i / 26) * Math.PI * 2;
    const r = 34 + rng() * 22;
    const x = Math.cos(ang) * r * 1.2, z = Math.sin(ang) * r;
    if (z > 8 && Math.abs(x) < 30) continue; // ما نسدش الكاميرا
    const h = -8 + rng() * 14;
    const w = 8 + rng() * 8, dd = 8 + rng() * 8;
    const m = new THREE.MeshStandardMaterial({ map: plasterTexture(cityColors[i % cityColors.length], 100 + i, {}), roughness: 0.95 });
    const bb = box(w, 30, dd, m, x, h - 15, z, ctx.static);
    bb.castShadow = false;
    // شبابيك منورة بالليل
    for (let k = 0; k < 6; k++) {
      const wm = new THREE.MeshStandardMaterial({ color: '#2a2a2a', emissive: '#ffb860', emissiveIntensity: 0 });
      const wnd = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.1), wm);
      const fz = z > 0 ? z - dd / 2 - 0.01 : z + dd / 2 + 0.01;
      wnd.position.set(x - w / 2 + 1 + rng() * (w - 2), h - 1.5 - Math.floor(rng() * 4) * 3, fz);
      if (z > 0) wnd.rotation.y = Math.PI;
      ctx.dynamic.add(wnd);
      ctx.litMats.push({ m: wm, lit: rng() < 0.7, k: 1 });
    }
    if (rng() < 0.5) waterTank(ctx.static, x, h, z);
    if (rng() < 0.5) satelliteDish(ctx.static, x + 2, h, z, z < 0 ? 1 : -1);
  }
  // مأذنة
  const mn = new THREE.Group();
  const mm = mat('#e8dcc0', 0.8);
  cyl(1.2, 1.4, 22, mm, 0, 11, 0, mn, 10);
  cyl(1.7, 1.7, 0.5, mm, 0, 18, 0, mn, 12);
  cyl(0.9, 1.1, 6, mm, 0, 24, 0, mn, 10);
  cyl(1.3, 1.3, 0.4, mm, 0, 27, 0, mn, 12);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.9, 2.5, 10), mat('#3a7a5a', 0.6));
  cone.position.y = 28.6;
  mn.add(cone);
  const crescent = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.07, 6, 16, Math.PI * 1.4), mat('#d8b040', 0.3, { metalness: 0.8 }));
  crescent.position.y = 30.3;
  mn.add(crescent);
  const mnLight = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.06, 6, 24), new THREE.MeshBasicMaterial({ color: '#7dffb0' }));
  mnLight.rotation.x = Math.PI / 2;
  mnLight.position.y = 18.3;
  mn.add(mnLight);
  ctx.nightOnly.push(mnLight);
  mn.position.set(-30, -12, -48);
  ctx.static.add(mn);

  // الكورة لو عدت السور تقع
  ctx.ballOut = (p) => (p.x < X0 + 0.1 || p.x > X1 - 0.1 || Math.abs(p.z) > W - 0.1);
  ctx.extras.parapet = { X0, X1, W, h: PH };
  ctx.colliders.push({ min: new THREE.Vector3(-40, -40, W + 0.15), max: new THREE.Vector3(40, -2, W + 3), tag: 'void' });
  ctx.walkerPaths.length = 0;
  goals(ctx);
}

const BUILDERS = { alley: buildAlley, yard: buildYard, school: buildSchool, roof: buildRoof };

export function buildMap(id) {
  const def = MAPS[id];
  const ctx = newCtx(def);
  BUILDERS[id](ctx);
  // أرض بعيدة عشان ما يبانش فراغ ورا السور القريب
  const outerColor = { alley: '#5f5950', yard: '#7a6a50', school: '#8a857a', roof: '#6a5f52' }[id];
  const outer = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshStandardMaterial({ color: outerColor, roughness: 1 }));
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = id === 'roof' ? -14 : -0.02;
  outer.receiveShadow = true;
  ctx.root.add(outer);
  ctx.root.add(ctx.static);
  ctx.root.add(ctx.dynamic);
  for (const o of [...ctx.nightOnly, ...ctx.dayOnly]) o.userData.keep = true;
  // تضاريس للحيطان والأرض من نفس الصورة (المحارة والشقوق والأسفلت يبقى ليهم بروز)
  const seen = new Set();
  ctx.root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m || seen.has(m) || !m.isMeshStandardMaterial || !m.map || m.bumpMap || m.transparent) continue;
      seen.add(m);
      m.bumpMap = m.map;
      m.bumpScale = o === ctx.groundMesh ? 3.5 : 2.5;
      m.needsUpdate = true;
    }
  });
  mergeStatic(ctx.static);
  ctx.static.traverse((o) => {
    if (o.isMesh) { o.receiveShadow = true; if (!o.userData.dyn) { o.matrixAutoUpdate = false; o.updateMatrix(); } }
  });
  ctx.static.updateMatrixWorld(true);
  return ctx;
}
