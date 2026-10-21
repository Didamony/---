// نقطة البداية: الرندر، اللوب، القوايم، والماتشات
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { Match } from './game/match.js';
import { UI } from './ui/ui.js';
import { Tournament } from './game/tournament.js';
import { Controller, TouchPad, isTouch, view } from './core/input.js';
import { audio } from './core/audio.js';
import { MAP_ORDER, TEAMS, TOURNAMENT } from './game/config.js';
import { pick } from './core/util.js';

const SETTINGS_KEY = 'matsh-elhara-settings-v1';

class Game {
  constructor() {
    this.settings = { quality: 'high', volume: 0.8, muted: false, hints: 'on', passAssist: 'normal', vibrate: 'on', autoQuality: 'on', replay: 'on' };
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')); } catch (e) { /* ignore */ }
    if (isTouch() && !localStorage.getItem?.(SETTINGS_KEY)) this.settings.quality = 'medium';
    audio.setVolume(this.settings.volume);
    audio.setMuted(this.settings.muted);

    this.container = document.getElementById('view');
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.AgXToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 900);

    this.ui = new UI(this);
    this.tourney = new Tournament();
    this.touch = isTouch();
    this.touchPad = null;
    if (this.touch) this.ensureTouchPad();
    this.match = null;
    this.paused = false;
    this.clock = new THREE.Clock();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    window.addEventListener('keydown', (e) => {
      if (!this.match || this.match.opts.demo || this.match.state === 'end') return;
      // في وضع الاتنين زرار P بتاع الكوبري للاعب التاني
      if (e.code === 'Escape' || (e.code === 'KeyP' && !this.match.opts.versus)) this.togglePause();
    });
    const unlock = () => { audio.init(); this.goLandscape(); };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.match && !this.match.opts.demo && !this.paused) this.togglePause(true); });
    this.resize();
  }

  get quality() { return this.settings.quality; }

  // زراير الموبايل (بتتعمل على الكمبيوتر برضه لو حد فتح شاشة التظبيط)
  ensureTouchPad() {
    if (!this.touchPad) {
      this.touchPad = new TouchPad(document.getElementById('touch'));
      this.touchPad.setLayout(this.settings.touchLayout);
      this.touchPad.show(false);
    }
    return this.touchPad;
  }

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
    // جو مطر بالنهار: الدنيا مغيمة شوية
    this.renderer.toneMappingExposure = this.match && !night && this.match.weather === 'rain' ? 0.95 : 1.15;
    const q = this.quality;
    const pr = Math.min(window.devicePixelRatio || 1, q === 'high' ? 2 : q === 'medium' ? 1.5 : 1);
    this.renderer.setPixelRatio(pr);
    this.renderer.shadowMap.enabled = q !== 'low' || !night;
    this.composer = null;
    const demo = this.match && this.match.opts.demo;
    // عالية: ضل ناعم في الأركان وتحت الرجلين (AO). بالليل: هالة النور
    const ao = false; // جرّبنا GTAO وعمل مربعات غلط تحت اللعيبة؛ الضل الناعم تحت كل لعيب بيعمل الشغل
    void demo;
    if ((night && q !== 'low') || ao) {
      const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
      const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: q === 'high' ? 4 : 0 });
      const c = new EffectComposer(this.renderer, rt);
      c.addPass(new RenderPass(this.match.scene, this.camera));
      if (ao) {
        const g = new GTAOPass(this.match.scene, this.camera, size.x, size.y);
        g.output = GTAOPass.OUTPUT.Default;
        g.blendIntensity = 0.85;
        g.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.5, thickness: 1.2, scale: 1.0, samples: 12 });
        c.addPass(g);
      }
      if (night) c.addPass(new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.5, 0.5, 0.9));
      c.addPass(new OutputPass());
      this.composer = c;
    }
  }


  resize() {
    // موبايل بالطول: نرسم اللعبة بالعرض ونلفها، وإنت تلف الموبايل في إيدك
    const portrait = this.touch && window.innerHeight > window.innerWidth;
    view.rot = portrait;
    document.documentElement.classList.toggle('rot', portrait);
    const w = portrait ? window.innerHeight : window.innerWidth;
    const h = portrait ? window.innerWidth : window.innerHeight;
    const app = document.getElementById('app');
    app.style.width = w + 'px';
    app.style.height = h + 'px';
    this.width = w; this.height = h;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 1.2 ? 50 : 34;
    this.camera.updateProjectionMatrix();
    if (this.composer) this.composer.setSize(w, h);
  }

  // أول لمسة: شاشة كاملة وقفل على العرض (بيشتغل على أندرويد؛ الآيفون ما بيسمحش)
  async goLandscape() {
    if (!this.touch || this.triedLock) return;
    this.triedLock = true;
    try {
      const el = document.documentElement;
      if (!document.fullscreenElement && el.requestFullscreen) await el.requestFullscreen({ navigationUI: 'hide' });
      if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape');
    } catch (e) { /* الآيفون أو المتصفح رفض: اللعبة ملفوفة بالـCSS */ }
    setTimeout(() => this.resize(), 300);
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
      mapId: mapId || pick(MAP_ORDER), night: night ?? Math.random() < 0.45, sunset: Math.random() < 0.35, home, away, difficulty: 'normal',
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
    return [new Controller({ keymap: 'solo', gamepad: 0, touch: this.touch ? this.touchPad : null, color: '#ffd23f' }), null];
  }

  startFromSetup(sel) {
    const rule = sel.rule.startsWith('t') ? { type: 'time', seconds: +sel.rule.slice(1) } : { type: 'goals', n: +sel.rule.slice(1) };
    this.startMatch({
      mapId: sel.map, night: sel.time === 'night', sunset: sel.time === 'sunset', weather: sel.weather || 'clear', home: sel.home, away: sel.away,
      difficulty: sel.diff, versus: sel.versus, rule,
    });
  }

  startTourneyMatch() {
    const m = this.tourney.current();
    if (!m) return;
    this.startMatch({
      mapId: m.map, night: m.time === 'night', sunset: m.time === 'sunset', weather: m.weather || 'clear', home: 'home', away: m.opp,
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
      if (this.touchPad) this.touchPad.show(this.touch && !opts.versus);
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

  // لو الجهاز بيهنج في أول الماتش نخفف الرسومات لوحدنا
  watchFps(rawDt) {
    const m = this.match;
    if (!m || m.opts.demo || this.paused || this.settings.autoQuality === 'off' || this.settings.quality === 'low') { this.fpsT = 0; this.fpsN = 0; return; }
    if (m !== this.fpsMatch) { this.fpsMatch = m; this.fpsT = 0; this.fpsN = 0; this.fpsWarm = 0; }
    this.fpsWarm = (this.fpsWarm || 0) + rawDt;
    if (this.fpsWarm < 2) return;
    this.fpsT += rawDt; this.fpsN++;
    if (this.fpsT < 4) return;
    const fps = this.fpsN / this.fpsT;
    this.fpsT = 0; this.fpsN = 0;
    if (fps < 30) {
      const next = this.settings.quality === 'high' ? 'medium' : 'low';
      this.setSetting('quality', next);
      this.ui.toast(next === 'medium' ? 'خففنا الرسومات شوية عشان اللعب يبقى ناعم' : 'خففنا الرسومات للآخر عشان الجهاز');
      this.fpsWarm = 0;
    }
  }

  loop() {
    requestAnimationFrame(() => this.loop());
    const raw = this.clock.getDelta();
    this.watchFps(raw);
    const dt = Math.min(raw, 0.05);
    if (this.match && !this.paused) this.match.update(dt);
    if (this.match) {
      if (this.composer) this.composer.render();
      else this.renderer.render(this.match.scene, this.camera);
    }
  }
}

// يشتغل من غير نت بعد أول فتحة (بس من على موقع، مش من ملف)
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

const game = new Game();
window.__game = game;
game.init();
