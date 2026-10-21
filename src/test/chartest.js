import * as THREE from 'three';
import { buildCharacter, Animator } from '../actors/character.js';

const R = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
R.setSize(1280, 720); R.shadowMap.enabled = true; R.outputColorSpace = THREE.SRGBColorSpace;
R.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(R.domElement);
const S = new THREE.Scene(); S.background = new THREE.Color(0x9cc7e8);
S.add(new THREE.HemisphereLight(0xdfefff, 0x7a6a55, 1.0));
const sun = new THREE.DirectionalLight(0xfff1d6, 2.2); sun.position.set(5, 10, 6); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8 }); S.add(sun);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0x8a8274 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; S.add(ground);
const looks = [
  { skin: '#c98b5a', hairStyle: 'short', top: { type: 'tracksuit', color: '#c8322a', color2: '#fff' }, bottom: { type: 'pants', color: '#c8322a' } },
  { skin: '#a86b43', hairStyle: 'curly', top: { type: 'tshirt', color: '#d0342a', number: 7 }, bottom: { type: 'jeans', color: '#3b4a6b' } },
  { skin: '#d9a173', hairStyle: 'cap', capColor: '#222', top: { type: 'tank', color: '#2a63c8' }, bottom: { type: 'shorts', color: '#222' }, slippers: true, shoes: '#2e8b57' },
  { skin: '#8a5634', hairStyle: 'buzz', top: { type: 'jersey', color: '#2a63c8', number: 10 }, bottom: { type: 'shorts', color: '#f2f2f2' }, socks: '#2a63c8' },
  { skin: '#bf7f50', hairStyle: 'gray', hair: '#888', mustache: true, top: { type: 'galabeya', color: '#8a7a5e' }, bottom: { type: 'pants', color: '#8a7a5e' } },
];
const speeds = [0, 1.4, 4.0, 7.0, 1.2];
const chars = looks.map((l, i) => {
  const c = buildCharacter(l); const a = new Animator(c);
  c.root.position.set((i - 2) * 1.6, 0, 0); S.add(c.root);
  if (l.top.type === 'galabeya') a.ampScale = 0.6;
  return { c, a, sp: speeds[i] };
});
const cam = new THREE.PerspectiveCamera(30, 1280 / 720, 0.1, 100);
window.view = (v) => {
  if (v === 'side') { cam.position.set(0, 1.0, 14); cam.lookAt(0, 0.9, 0); chars.forEach(o => o.c.root.rotation.y = Math.PI / 2); }
  else if (v === 'front') { cam.position.set(0, 1.4, 12); cam.lookAt(0, 0.9, 0); chars.forEach(o => o.c.root.rotation.y = 0.5); }
  else if (v === 'game') { cam.position.set(-1, 7, 10); cam.lookAt(0, 0.6, 0); chars.forEach(o => o.c.root.rotation.y = Math.PI / 2); }
};
window.step = (t, act) => {
  if (act) chars.forEach(o => { o.a.play(act); o.sp = 0; });
  const dt = 1 / 60; for (let i = 0; i < t * 60; i++) chars.forEach(o => o.a.update(dt, o.sp));
  R.render(S, cam);
};
window.view('side'); window.step(1);
document.body.dataset.ready = 1;
