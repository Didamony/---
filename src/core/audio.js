// الأصوات كلها متولّدة بالكود (WebAudio): شوطة، صفارة، جمهور، إزاز بيتكسر، جرس عجلة، كلاكس توكتوك...
import { randRange } from './util.js';

export class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.volume = 0.8;
    this.muted = false;
    this.amb = null;
    this.toktokLoop = null;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.volume;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);
    // نويز جاهز
    const len = this.ctx.sampleRate * 2;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = this.muted ? 0 : v; }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : this.volume; }

  // ------------------------------------------------ أدوات
  env(g, t, a, peak, d, end = 0.0001) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(end, t + a + d);
  }
  noise(t, dur, { type = 'bandpass', f = 1000, q = 1, gain = 0.5, a = 0.005, f2 = null, dest = null } = {}) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    s.loop = true;
    const flt = c.createBiquadFilter();
    flt.type = type; flt.frequency.setValueAtTime(f, t); flt.Q.value = q;
    if (f2) flt.frequency.exponentialRampToValueAtTime(f2, t + dur);
    const g = c.createGain();
    this.env(g, t, a, gain, dur);
    s.connect(flt); flt.connect(g); g.connect(dest || this.master);
    s.start(t, Math.random()); s.stop(t + a + dur + 0.05);
    return g;
  }
  tone(t, dur, { type = 'sine', f = 440, f2 = null, gain = 0.3, a = 0.005, dest = null, vib = 0, vibF = 6 } = {}) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    if (vib) {
      const l = c.createOscillator(); const lg = c.createGain();
      l.frequency.value = vibF; lg.gain.value = vib;
      l.connect(lg); lg.connect(o.frequency); l.start(t); l.stop(t + a + dur + 0.05);
    }
    const g = c.createGain();
    this.env(g, t, a, gain, dur);
    o.connect(g); g.connect(dest || this.master);
    o.start(t); o.stop(t + a + dur + 0.05);
    return o;
  }

  play(name, p = 1) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + 0.005;
    switch (name) {
      case 'kick': {
        const k = Math.min(1.4, p);
        this.tone(t, 0.12, { f: 140, f2: 50, gain: 0.5 * k, type: 'sine' });
        this.noise(t, 0.06, { type: 'lowpass', f: 1800, gain: 0.35 * k });
        break;
      }
      case 'pass':
        this.tone(t, 0.08, { f: 160, f2: 70, gain: 0.3 });
        this.noise(t, 0.04, { type: 'lowpass', f: 1500, gain: 0.18 });
        break;
      case 'bounce':
        this.tone(t, 0.07, { f: 110, f2: 60, gain: Math.min(0.35, 0.05 * p) });
        break;
      case 'wall':
        this.noise(t, 0.12, { type: 'lowpass', f: 600, gain: Math.min(0.5, 0.05 * p) });
        this.tone(t, 0.09, { f: 90, f2: 50, gain: Math.min(0.4, 0.04 * p) });
        break;
      case 'metal':
        for (const f of [520, 1310, 2150]) this.tone(t, 0.9, { f, gain: 0.12, type: 'sine', a: 0.002 });
        this.noise(t, 0.05, { type: 'highpass', f: 3000, gain: 0.2 });
        break;
      case 'brick':
        this.noise(t, 0.08, { type: 'bandpass', f: 900, q: 2, gain: 0.4 });
        break;
      case 'whistle': {
        const long = p > 1;
        this.tone(t, long ? 0.9 : 0.35, { f: 2900, gain: 0.18, vib: 140, vibF: 28, type: 'sine' });
        this.noise(t, long ? 0.9 : 0.35, { type: 'bandpass', f: 2900, q: 8, gain: 0.08 });
        if (p > 2) { this.tone(t + 1.1, 0.35, { f: 2900, gain: 0.18, vib: 140, vibF: 28 }); this.tone(t + 1.6, 1.0, { f: 2900, gain: 0.18, vib: 140, vibF: 28 }); }
        break;
      }
      case 'cheer':
        this.noise(t, 2.6, { type: 'bandpass', f: 1300, q: 0.6, gain: 0.35, a: 0.25 });
        this.noise(t + 0.1, 2.2, { type: 'bandpass', f: 700, q: 0.8, gain: 0.25, a: 0.3 });
        for (let i = 0; i < 6; i++) this.tone(t + randRange(0, 0.8), randRange(0.4, 0.9), { type: 'sawtooth', f: randRange(380, 650), f2: randRange(500, 900), gain: 0.025, a: 0.05, vib: 20 });
        break;
      case 'ooh':
        for (let i = 0; i < 5; i++) this.tone(t + randRange(0, 0.1), 0.9, { type: 'triangle', f: randRange(260, 420), f2: randRange(170, 240), gain: 0.05, a: 0.1 });
        this.noise(t, 0.9, { type: 'bandpass', f: 500, q: 1, gain: 0.12, a: 0.1 });
        break;
      case 'glass':
        this.noise(t, 0.5, { type: 'highpass', f: 2500, gain: 0.5, f2: 6000 });
        for (let i = 0; i < 14; i++) this.tone(t + randRange(0, 0.6), randRange(0.05, 0.25), { f: randRange(2500, 7000), gain: 0.06, a: 0.001 });
        this.noise(t, 0.15, { type: 'lowpass', f: 400, gain: 0.4 });
        break;
      case 'bell':
        for (const dt of [0, 0.22]) { this.tone(t + dt, 0.7, { f: 2100, gain: 0.15, a: 0.001 }); this.tone(t + dt, 0.5, { f: 3370, gain: 0.06, a: 0.001 }); }
        break;
      case 'horn':
        this.tone(t, 0.32, { type: 'square', f: 440, gain: 0.07 });
        this.tone(t, 0.32, { type: 'square', f: 554, gain: 0.05 });
        this.tone(t + 0.4, 0.2, { type: 'square', f: 440, gain: 0.07 });
        break;
      case 'ouch':
        this.tone(t, 0.35, { type: 'sawtooth', f: 520, f2: 260, gain: 0.06, vib: 12 });
        break;
      case 'thud':
        this.tone(t, 0.2, { f: 90, f2: 40, gain: 0.45 });
        this.noise(t, 0.12, { type: 'lowpass', f: 500, gain: 0.3 });
        break;
      case 'slide':
        this.noise(t, 0.45, { type: 'bandpass', f: 1200, q: 0.7, gain: 0.25, f2: 500, a: 0.02 });
        break;
      case 'rip':
        for (let i = 0; i < 8; i++) this.noise(t + i * 0.035, 0.03, { type: 'highpass', f: 2500, gain: 0.15 });
        break;
      case 'meow':
        this.tone(t, 0.45, { type: 'triangle', f: 700, f2: 450, gain: 0.08, vib: 30, vibF: 8 });
        break;
      case 'baa':
        this.tone(t, 0.7, { type: 'sawtooth', f: 330, f2: 300, gain: 0.07, vib: 25, vibF: 11 });
        break;
      case 'mom':
        this.tone(t, 0.35, { type: 'triangle', f: 620, gain: 0.07, vib: 8 });
        this.tone(t + 0.38, 0.6, { type: 'triangle', f: 520, f2: 480, gain: 0.07, vib: 8 });
        break;
      case 'schoolbell':
        for (let i = 0; i < 14; i++) this.tone(t + i * 0.08, 0.08, { type: 'square', f: 1450, gain: 0.04, a: 0.001 });
        break;
      case 'fight':
        for (let i = 0; i < 18; i++) {
          this.noise(t + i * 0.15 + randRange(0, 0.1), 0.06, { type: 'lowpass', f: 700, gain: 0.35 });
          if (i % 3 === 0) this.tone(t + i * 0.15, 0.12, { type: 'sawtooth', f: randRange(300, 600), f2: 200, gain: 0.04 });
        }
        break;
      case 'click':
        this.tone(t, 0.04, { f: 900, gain: 0.08, type: 'triangle' });
        break;
      case 'coin':
        this.tone(t, 0.08, { f: 988, gain: 0.08, type: 'square' });
        this.tone(t + 0.08, 0.3, { f: 1319, gain: 0.08, type: 'square' });
        break;
      case 'save':
        this.tone(t, 0.12, { f: 200, f2: 90, gain: 0.4 });
        this.noise(t, 0.1, { type: 'bandpass', f: 1200, gain: 0.25 });
        break;
      case 'buzz':
        this.tone(t, 0.08, { type: 'sawtooth', f: 100, gain: 0.03 });
        break;
      default:
        break;
    }
  }

  // ------------------------------------------------ جو المكان
  startAmbience(night, kind, weather = 'clear') {
    this.stopAmbience();
    if (!this.ctx) return;
    const c = this.ctx;
    const g = c.createGain();
    g.gain.value = 0.0001;
    g.gain.exponentialRampToValueAtTime(1, c.currentTime + 2);
    g.connect(this.master);
    const nodes = [];
    // زحمة بعيدة
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf; s.loop = true;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = night ? 220 : 380;
    const ng = c.createGain(); ng.gain.value = night ? 0.05 : 0.09;
    s.connect(lp); lp.connect(ng); ng.connect(g); s.start();
    nodes.push(s);
    if (weather === 'rain' || weather === 'dust') {
      // مطر: وشّ عالي. خماسين: ريح بتعلى وتوطى
      const w = c.createBufferSource();
      w.buffer = this.noiseBuf; w.loop = true; w.playbackRate.value = weather === 'rain' ? 1 : 0.6;
      const f = c.createBiquadFilter();
      f.type = weather === 'rain' ? 'highpass' : 'bandpass';
      f.frequency.value = weather === 'rain' ? 1800 : 520;
      f.Q.value = weather === 'rain' ? 0.5 : 0.9;
      const wg = c.createGain(); wg.gain.value = weather === 'rain' ? 0.16 : 0.11;
      w.connect(f); f.connect(wg); wg.connect(g); w.start();
      nodes.push(w);
      if (weather === 'dust') {
        const lfo = c.createOscillator(); lfo.frequency.value = 0.13;
        const lg = c.createGain(); lg.gain.value = 260;
        lfo.connect(lg); lg.connect(f.frequency); lfo.start();
        nodes.push(lfo);
      }
    }
    this.amb = { g, nodes, night, kind, timer: 0 };
  }

  tickAmbience(dt) {
    const a = this.amb;
    if (!a || !this.ctx || this.muted) return;
    a.timer -= dt;
    if (a.timer > 0) return;
    const t = this.ctx.currentTime;
    if (a.night) {
      // صراصير
      a.timer = randRange(0.4, 1.2);
      const f = randRange(4200, 5200);
      for (let i = 0; i < 3; i++) this.tone(t + i * 0.07, 0.04, { f, gain: 0.018, a: 0.002, dest: a.g });
      if (Math.random() < 0.04) this.bark(t, a.g);
    } else {
      a.timer = randRange(1.5, 4);
      const r = Math.random();
      if (r < 0.25) this.tone(t, 0.25, { type: 'square', f: randRange(380, 480), gain: 0.012, dest: a.g });
      else if (r < 0.6) for (let i = 0; i < 3; i++) this.tone(t + i * 0.12, 0.08, { f: randRange(2800, 3800), f2: randRange(2400, 3200), gain: 0.015, dest: a.g });
    }
  }

  bark(t, dest) {
    for (let i = 0; i < 2; i++) {
      this.tone(t + i * 0.28, 0.12, { type: 'sawtooth', f: 420, f2: 250, gain: 0.03, dest });
      this.noise(t + i * 0.28, 0.1, { type: 'bandpass', f: 800, gain: 0.04, dest });
    }
  }

  stopAmbience() {
    if (!this.amb) return;
    try { this.amb.nodes.forEach((n) => n.stop()); } catch (e) { /* ignore */ }
    this.amb.g.disconnect();
    this.amb = null;
  }

  // موسيقى التوكتوك
  toktokMusic(on) {
    if (!this.ctx) return;
    if (on && !this.toktokLoop) {
      const c = this.ctx;
      const g = c.createGain(); g.gain.value = 0.05; g.connect(this.master);
      const notes = [392, 440, 466, 440, 392, 349, 392, 440];
      let i = 0;
      const id = setInterval(() => {
        if (this.muted) return;
        const t = c.currentTime;
        this.tone(t, 0.12, { type: 'square', f: notes[i % notes.length], gain: 0.5, dest: g });
        if (i % 2 === 0) this.tone(t, 0.08, { f: 110, f2: 60, gain: 0.8, dest: g });
        i++;
      }, 160);
      this.toktokLoop = { g, id };
    } else if (!on && this.toktokLoop) {
      clearInterval(this.toktokLoop.id);
      this.toktokLoop.g.disconnect();
      this.toktokLoop = null;
    }
  }
}

export const audio = new Audio();
