// معاينة 3D صغيرة للاعيبك في شاشة "اعمل لاعيبك": بيلف ويتحرك ويسلّم عليك
import * as THREE from 'three';
import { buildCharacter, Animator } from '../actors/character.js';

export class Preview {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.AgXToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, 0.75, 0.1, 50);
    this.scene.add(new THREE.HemisphereLight('#fff4e0', '#4a3c30', 1.6));
    const key = new THREE.DirectionalLight('#fff1d6', 2.4);
    key.position.set(2, 4, 3);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight('#9ec3ff', 1.4);
    rim.position.set(-3, 2, -3);
    this.scene.add(rim);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(0.6, 32), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.3, depthWrite: false }));
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);
    this.spin = 0.4;
    this.drag = null;
    this.running = false;
    this.t = 0;
    canvas.addEventListener('pointerdown', (e) => { this.drag = e.clientX; canvas.setPointerCapture?.(e.pointerId); });
    canvas.addEventListener('pointermove', (e) => { if (this.drag == null) return; this.spin += (e.clientX - this.drag) * 0.012; this.drag = e.clientX; });
    const up = () => { this.drag = null; };
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
  }

  setLook(look) {
    if (this.char) {
      this.scene.remove(this.char.root);
      this.char.root.traverse((o) => { if (o.isSkinnedMesh) o.geometry.dispose(); });
    }
    this.char = buildCharacter(look);
    this.anim = new Animator(this.char);
    this.scene.add(this.char.root);
    this.anim.play('wave');
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    const tick = () => {
      if (!this.running) return;
      requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.frame(dt);
    };
    tick();
  }

  stop() { this.running = false; }

  frame(dt) {
    const c = this.canvas;
    const w = c.clientWidth || 240, h = c.clientHeight || 320;
    if (c.width !== Math.round(w * this.renderer.getPixelRatio()) || c.height !== Math.round(h * this.renderer.getPixelRatio())) {
      this.renderer.setSize(w, h, false);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
    this.t += dt;
    if (this.drag == null) this.spin += dt * 0.35;
    if (this.char) {
      // كل شوية حركة: يسلّم، يفرح، أو يشاور
      if (this.t > 5) { this.t = 0; this.anim.play(['cheer', 'wave', 'point'][Math.floor(Math.random() * 3)]); }
      this.anim.update(dt, 0);
      this.char.root.rotation.y = this.spin;
      this.char.root.updateMatrixWorld(true);
    }
    const H = 0.95 * (this.char?.scale || 1);
    this.camera.position.set(0, H + 0.1, 4.8);
    this.camera.lookAt(0, H, 0);
    this.renderer.render(this.scene, this.camera);
  }
}
