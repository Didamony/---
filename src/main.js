// نقطة البداية: الرندر، اللوب، القوايم، والماتشات
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Match } from './game/match.js';
import { UI } from './ui/ui.js';
import { Tournament } from './game/tournament.js';
import { Controller, TouchPad, isTouch } from './core/input.js';
import { audio } from './core/audio.js';
import { MAP_ORDER, TEAMS, TOURNAMENT } from './game/config.js';
import { pick } from './core/util.js';

const SETTINGS_KEY = 'matsh-elhara-settings-v1';

class Game {
  constructor() {
    this.settings = { quality: 'high', volume: 0.8, muted: false, hints: 'on' };
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')); } catch (e) { /* ignore */ }
    if (isTouch() && !localStorage.getItem?.(SETTINGS_KEY)) this.settings.quality = 'medium';
    audio.setVolume(this.settings.volume);
    audio.setMuted(this.settings.muted);

    this.container = document.getElementById('view');
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 900);

    this.ui = new UI(this);
    this.tourney = new Tournament();
    this.touch = isTouch();
    this.touchPad = this.touch ? new TouchPad(document.getElementById('touch')) : null;
    if (this.touchPad) this.touchPad.show(false);
    this.match = null;
    this.paused = false;
    this.clock = new THREE.Clock();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('keydown', (e) => {
      if (!this.match || this.match.opts.demo || this.match.state === 'end') return;
      // في وضع الاتنين زرار P بتاع الكوبري للاعب التاني
      if (e.code === 'Escape' || (e.code === 'KeyP' && !this.match.opts.versus)) this.togglePause();
    });
    const unlock = () => audio.init();
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.match && !this.match.opts.demo && !this.paused) this.togglePause(true); });
    this.resize();
  }

  get quality() { return this.settings.quality; }

  async init() {
    this.ui.show('loading');
    try {
      await Promise.race([
        Promise.all(['400', '700', '900'].map((w) => document.fonts.load(`${w} 20px Cairo`, 'عربي'))),
        new Promise((r) => setTimeout(r, 2500)),
      ]);
    } catch (e) { /* الخط مش مهم قوي */ }
    this.startDemo();
    this.ui.show('menu');
    this.loop();
    document.body.dataset.ready = '1';
  }

  // للتجربة: نمشي الماتش لقدام من غير ما نستنى
  debugStep(sec, dt = 1 / 60) {
    const n = Math.round(sec / dt);
    for (let i = 0; i < n; i++) if (this.match) this.match.update(dt);
  }

  setupComposer() {
    const night = this.match && this.match.night;
    const q = this.quality;
    const pr = Math.min(window.devicePixelRatio || 1, q === 'high' ? 2 : q === 'medium' ? 1.5 : 1);
    this.renderer.setPixelRatio(pr);
    this.renderer.shadowMap.enabled = q !== 'low' || !night;
    this.composer = null;
    if (night && q !== 'low' && this.match) {
      const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
      const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: q === 'high' ? 4 : 0 });
      const c = new EffectComposer(this.renderer, rt);
      c.addPass(new RenderPass(this.match.scene, this.camera));
      c.addPass(new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.5, 0.5, 0.9));
      c.addPass(new OutputPass());
      this.composer = c;
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.width = w; this.height = h;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 1.2 ? 50 : 34;
    this.camera.updateProjectionMatrix();
    if (this.composer) this.composer.setSize(w, h);
  }

  setSetting(k, v) {
    this.settings[k] = v;
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch (e) { /* ignore */ }
    if (k === 'volume') audio.setVolume(v);
    if (k === 'muted') audio.setMuted(v);
    if (k === 'quality') {
      // الجودة بتتطبق على الماتش الجاي؛ بس البيكسلات والبلوم دلوقتي
      this.setupComposer();
      this.resize();
    }
  }

  // ------------------------------------------------------------- ماتشات
  disposeMatch() {
    if (!this.match) return;
    this.match.dispose();
    this.match = null;
    this.composer = null;
  }

  startDemo(mapId, night) {
    this.disposeMatch();
    const keys = Object.keys(TEAMS);
    const home = pick(keys);
    let away = pick(keys);
    while (away === home) away = pick(keys);
    this.match = new Match(this, {
      mapId: mapId || pick(MAP_ORDER), night: night ?? Math.random() < 0.5, home, away, difficulty: 'normal',
      controllers: [null, null], rule: { type: 'time', seconds: 99999 }, demo: true,
    });
    this.setupComposer();
    this.resize();
    if (this.touchPad) this.touchPad.show(false);
  }

  makeControllers(versus) {
    if (versus) {
      return [
        new Controller({ keymap: 'p1', gamepad: 0, color: '#ffd23f', label: '١' }),
        new Controller({ keymap: 'p2', gamepad: 1, color: '#62f0ff', label: '٢' }),
      ];
    }
    return [new Controller({ keymap: 'solo', gamepad: 0, touch: this.touchPad, color: '#ffd23f' }), null];
  }

  startFromSetup(sel) {
    const rule = sel.rule.startsWith('t') ? { type: 'time', seconds: +sel.rule.slice(1) } : { type: 'goals', n: +sel.rule.slice(1) };
    this.startMatch({
      mapId: sel.map, night: sel.time === 'night', home: sel.home, away: sel.away,
      difficulty: sel.diff, versus: sel.versus, rule,
    });
  }

  startTourneyMatch() {
    const m = this.tourney.current();
    if (!m) return;
    this.startMatch({
      mapId: m.map, night: m.time === 'night', home: 'home', away: m.opp,
      difficulty: this.tourney.stage >= 3 ? 'hard' : 'normal', rule: { type: 'time', seconds: 180 },
      tourney: true, mods: [this.tourney.mods(), {}],
    });
  }

  startMatch(opts) {
    audio.init();
    this.lastOpts = opts;
    this.ui.hideScreens();
    this.ui.show('loading');
    // نسيب فريم للشاشة تظهر
    setTimeout(() => {
      this.disposeMatch();
      const controllers = this.makeControllers(opts.versus);
      this.match = new Match(this, { ...opts, controllers });
      this.setupComposer();
      this.resize();
      this.paused = false;
      this.ui.hideScreens();
      if (this.touchPad) this.touchPad.show(!opts.versus);
      this.clock.getDelta();
    }, 30);
  }

  restartMatch() {
    if (this.lastOpts) this.startMatch(this.lastOpts);
  }

  quitToMenu(toTourney = false) {
    this.paused = false;
    this.startDemo();
    if (toTourney || (this.lastOpts && this.lastOpts.tourney && toTourney)) this.ui.showTourney();
    else this.ui.show('menu');
  }

  togglePause(force) {
    if (!this.match || this.match.opts.demo) return;
    this.paused = force !== undefined ? force : !this.paused;
    if (this.paused) this.ui.show('pause');
    else this.ui.hideScreens();
    for (const c of this.match.controllers) if (c) c.clear();
  }

  onEvent() { /* للبطولة لو احتجنا */ }

  loop() {
    requestAnimationFrame(() => this.loop());
    const dt = Math.min(this.clock.getDelta(), 0.05);
    if (this.match && !this.paused) this.match.update(dt);
    if (this.match) {
      if (this.composer) this.composer.render();
      else this.renderer.render(this.match.scene, this.camera);
    }
  }
}

const game = new Game();
window.__game = game;
game.init();
