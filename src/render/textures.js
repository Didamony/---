// خامات مرسومة بالكود (مفيش صور من برة)
import * as THREE from 'three';
import { makeRng } from '../core/util.js';

export function canvasTex(w, h, draw, { repeat, color = true, aniso = 8 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  if (repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat[0], repeat[1]);
  }
  return t;
}

function speckle(g, w, h, rng, n, colors, sMin = 1, sMax = 4) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[Math.floor(rng() * colors.length)];
    const s = sMin + rng() * (sMax - sMin);
    g.fillRect(rng() * w, rng() * h, s, s * (0.5 + rng()));
  }
}

function blotches(g, w, h, rng, n, color, rMin, rMax) {
  for (let i = 0; i < n; i++) {
    const x = rng() * w, y = rng() * h, r = rMin + rng() * (rMax - rMin);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, color);
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr;
    g.beginPath();
    g.ellipse(x, y, r, r * (0.4 + rng() * 0.6), rng() * 3, 0, 7);
    g.fill();
  }
}

function cracks(g, w, h, rng, n, color, len = 8, step = 22) {
  g.strokeStyle = color;
  for (let i = 0; i < n; i++) {
    let x = rng() * w, y = rng() * h;
    g.lineWidth = 1 + rng() * 1.5;
    g.beginPath();
    g.moveTo(x, y);
    for (let k = 0; k < len; k++) {
      x += (rng() - 0.5) * step * 2;
      y += (rng() - 0.5) * step;
      g.lineTo(x, y);
      if (rng() < 0.15) {
        g.moveTo(x, y);
      }
    }
    g.stroke();
  }
}

// أرض الملعب كلها في صورة واحدة (مع العلامات المرسومة بالطباشير)
export function groundTexture(kind, sizeX, sizeZ, field, seed = 3) {
  const rng = makeRng(seed);
  const pxPerM = 48;
  const W = Math.min(4096, Math.round(sizeX * pxPerM));
  const H = Math.min(2048, Math.round(sizeZ * pxPerM));
  const sx = W / sizeX, sz = H / sizeZ;
  const X = (x) => (x + sizeX / 2) * sx;
  const Z = (z) => (z + sizeZ / 2) * sz;
  return canvasTex(W, H, (g) => {
    if (kind === 'asphalt') {
      g.fillStyle = '#7d766a';
      g.fillRect(0, 0, W, H);
      blotches(g, W, H, rng, 60, 'rgba(60,55,48,0.35)', 40, 160);
      blotches(g, W, H, rng, 40, 'rgba(150,130,100,0.35)', 40, 140);
      speckle(g, W, H, rng, 60000, ['rgba(40,36,32,0.25)', 'rgba(200,190,170,0.18)', 'rgba(120,110,95,0.3)'], 1, 3);
      // رقع أسفلت جديدة
      for (let i = 0; i < 8; i++) {
        g.fillStyle = 'rgba(60,57,54,0.28)';
        const x = rng() * W, y = rng() * H, w = 50 + rng() * 120, h = 30 + rng() * 60;
        g.beginPath();
        g.moveTo(x, y);
        for (let k = 1; k <= 9; k++) {
          const a = (k / 9) * Math.PI * 2;
          g.lineTo(x + Math.cos(a) * w * (0.7 + rng() * 0.3), y + Math.sin(a) * h * (0.7 + rng() * 0.3));
        }
        g.fill();
      }
      blotches(g, W, H, rng, 8, 'rgba(20,20,25,0.45)', 20, 50); // بقع زيت
      cracks(g, W, H, rng, 60, 'rgba(30,26,22,0.55)');
      // مجرى ميه في النص
      g.fillStyle = 'rgba(55,50,45,0.4)';
      g.fillRect(0, Z(0) - 3, W, 6);
    } else if (kind === 'dirt') {
      g.fillStyle = '#a58a64';
      g.fillRect(0, 0, W, H);
      blotches(g, W, H, rng, 90, 'rgba(130,105,75,0.22)', 40, 200);
      blotches(g, W, H, rng, 60, 'rgba(195,170,130,0.3)', 40, 160);
      speckle(g, W, H, rng, 70000, ['rgba(80,60,40,0.3)', 'rgba(220,200,165,0.25)', 'rgba(140,115,85,0.35)'], 1, 4);
      // زلط صغير
      speckle(g, W, H, rng, 3000, ['#8d8577', '#c9c1b2', '#6f675b'], 3, 7);
      // حشايش ناشفة على الأطراف
      for (let i = 0; i < 900; i++) {
        const edge = rng() < 0.5 ? rng() * H * 0.12 : H - rng() * H * 0.12;
        const x = rng() * W;
        g.strokeStyle = rng() < 0.5 ? 'rgba(120,130,60,0.6)' : 'rgba(150,140,70,0.6)';
        g.lineWidth = 1.5;
        g.beginPath(); g.moveTo(x, edge); g.lineTo(x + (rng() - 0.5) * 8, edge - 6 - rng() * 8); g.stroke();
      }
      // آثار رجلين في نص الملعب
      blotches(g, W, H, rng, 30, 'rgba(140,110,75,0.2)', 60, 120);
    } else if (kind === 'tiles') {
      g.fillStyle = '#b9b3a6';
      g.fillRect(0, 0, W, H);
      const t = 0.5 * sx;
      for (let y = 0; y < H; y += t) {
        for (let x = 0; x < W; x += t) {
          const v = 165 + Math.floor(rng() * 30);
          g.fillStyle = `rgb(${v},${v - 6},${v - 16})`;
          g.fillRect(x + 1, y + 1, t - 2, t - 2);
          if (rng() < 0.06) { g.fillStyle = 'rgba(90,85,75,0.5)'; g.fillRect(x + 1, y + 1, t - 2, t - 2); }
          if (rng() < 0.04) { cracksAt(g, x + t / 2, y + t / 2, t, rng); }
        }
      }
      blotches(g, W, H, rng, 50, 'rgba(70,65,55,0.25)', 40, 160);
      speckle(g, W, H, rng, 25000, ['rgba(60,55,50,0.2)', 'rgba(240,235,225,0.2)'], 1, 3);
    } else if (kind === 'roof') {
      g.fillStyle = '#9b9488';
      g.fillRect(0, 0, W, H);
      blotches(g, W, H, rng, 30, 'rgba(50,48,50,0.22)', 40, 140); // زفت
      blotches(g, W, H, rng, 40, 'rgba(180,170,150,0.35)', 30, 120);
      speckle(g, W, H, rng, 50000, ['rgba(60,55,50,0.25)', 'rgba(220,215,200,0.2)'], 1, 3);
      cracks(g, W, H, rng, 50, 'rgba(40,35,30,0.5)');
      // بقع ميه من الخزانات
      blotches(g, W, H, rng, 6, 'rgba(70,75,80,0.35)', 60, 140);
    }

    // علامات الطباشير
    g.save();
    g.strokeStyle = kind === 'dirt' ? 'rgba(240,235,220,0.55)' : 'rgba(245,245,238,0.7)';
    g.lineWidth = 6;
    g.lineCap = 'round';
    const wob = (x0, y0, x1, y1) => {
      g.beginPath(); g.moveTo(x0, y0);
      const n = 12;
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        g.lineTo(x0 + (x1 - x0) * t + (rng() - 0.5) * 4, y0 + (y1 - y0) * t + (rng() - 0.5) * 4);
      }
      g.stroke();
    };
    const fl = field.halfL, fw = field.halfW;
    if (kind === 'asphalt' || kind === 'tiles' || kind === 'roof') {
      g.setLineDash([22, 14]);
      wob(X(0), Z(-fw), X(0), Z(fw));
      g.setLineDash([]);
      g.beginPath(); g.arc(X(0), Z(0), 1.6 * sx, 0, 7); g.stroke();
    }
    if (kind === 'tiles') {
      g.strokeRect(X(-fl), Z(-fw), 2 * fl * sx, 2 * fw * sz);
      for (const s of [-1, 1]) {
        const x0 = X(s * fl), x1 = X(s * (fl - 3.5));
        g.beginPath(); g.moveTo(x0, Z(-3.5)); g.lineTo(x1, Z(-3.5)); g.lineTo(x1, Z(3.5)); g.lineTo(x0, Z(3.5)); g.stroke();
      }
      // حجلة مرسومة في الركن
      g.lineWidth = 4;
      const hx = X(-fl + 2), hz = Z(fw + 1.2);
      for (let i = 0; i < 6; i++) g.strokeRect(hx + i * 0.6 * sx, hz, 0.6 * sx, 0.6 * sz);
    }
    if (kind === 'dirt') {
      g.lineWidth = 8;
      for (const s of [-1, 1]) {
        wob(X(s * fl), Z(-fw + 0.5), X(s * fl), Z(fw - 0.5));
        wob(X(s * fl), Z(-4.5), X(s * (fl - 4)), Z(-4.5));
        wob(X(s * (fl - 4)), Z(-4.5), X(s * (fl - 4)), Z(4.5));
        wob(X(s * (fl - 4)), Z(4.5), X(s * fl), Z(4.5));
      }
      wob(X(0), Z(-fw + 0.5), X(0), Z(fw - 0.5));
    }
    g.restore();
  });
}

function cracksAt(g, x, y, s, rng) {
  g.strokeStyle = 'rgba(60,55,45,0.6)';
  g.lineWidth = 1;
  g.beginPath(); g.moveTo(x - s / 2, y + (rng() - 0.5) * s);
  g.lineTo(x, y); g.lineTo(x + s / 2, y + (rng() - 0.5) * s); g.stroke();
}

// حيطة محارة قديمة
const plasterCache = new Map();
export function plasterTexture(base, seed = 1, opts = {}) {
  const key = base + seed + JSON.stringify(opts);
  if (plasterCache.has(key)) return plasterCache.get(key);
  const rng = makeRng(seed);
  const t = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = base;
    g.fillRect(0, 0, w, h);
    blotches(g, w, h, rng, 30, 'rgba(0,0,0,0.08)', 30, 120);
    blotches(g, w, h, rng, 20, 'rgba(255,255,255,0.07)', 30, 100);
    speckle(g, w, h, rng, 9000, ['rgba(0,0,0,0.07)', 'rgba(255,255,255,0.06)'], 1, 3);
    // سيل ميه من فوق
    for (let i = 0; i < 6; i++) {
      const x = rng() * w;
      const gr = g.createLinearGradient(0, 0, 0, h * 0.6);
      gr.addColorStop(0, 'rgba(40,35,30,0.18)'); gr.addColorStop(1, 'rgba(40,35,30,0)');
      g.fillStyle = gr;
      g.fillRect(x, 0, 6 + rng() * 18, h * 0.6);
    }
    // محارة واقعة باين منها الطوب
    if (opts.bricks !== false) {
      for (let i = 0; i < 3; i++) {
        const x = rng() * w * 0.8, y = h * 0.3 + rng() * h * 0.6, bw = 40 + rng() * 60, bh = 20 + rng() * 40;
        g.fillStyle = '#9a5a3c';
        g.fillRect(x, y, bw, bh);
        g.strokeStyle = 'rgba(200,190,170,0.6)';
        g.lineWidth = 1;
        for (let yy = y; yy < y + bh; yy += 8) { g.beginPath(); g.moveTo(x, yy); g.lineTo(x + bw, yy); g.stroke(); }
      }
    }
    cracks(g, w, h, rng, 8, 'rgba(50,40,30,0.35)', 6, 14);
    // بانوه تحت
    if (opts.band) {
      g.fillStyle = opts.band;
      g.fillRect(0, h * 0.86, w, h * 0.14);
      speckle(g, w, h * 0.14, rng, 800, ['rgba(0,0,0,0.12)'], 1, 4);
    }
  }, { repeat: [1, 1] });
  plasterCache.set(key, t);
  return t;
}

export function brickTexture(seed = 2) {
  const rng = makeRng(seed);
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#b8ab98';
    g.fillRect(0, 0, w, h);
    const bh = 16, bw = 40;
    for (let y = 0; y < h; y += bh) {
      const off = (y / bh) % 2 ? bw / 2 : 0;
      for (let x = -bw; x < w + bw; x += bw) {
        const r = 150 + rng() * 40, gg = 70 + rng() * 25, b = 45 + rng() * 20;
        g.fillStyle = `rgb(${r},${gg},${b})`;
        g.fillRect(x + off + 1, y + 1, bw - 2, bh - 2);
      }
    }
    speckle(g, w, h, rng, 2000, ['rgba(0,0,0,0.12)', 'rgba(255,255,255,0.08)'], 1, 3);
  }, { repeat: [1, 1] });
}

export function shutterTexture(color = '#6f7378') {
  return canvasTex(128, 256, (g, w, h) => {
    g.fillStyle = color; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) {
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, y, w, 2);
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(0, y + 3, w, 2);
    }
    const rng = makeRng(9);
    blotches(g, w, h, rng, 10, 'rgba(120,60,30,0.35)', 10, 40); // صدا
  });
}

export function textTexture(text, { w = 512, h = 128, bg = null, color = '#fff', font = '900 72px Cairo', stroke = null, rot = 0, shadow = null } = {}) {
  return canvasTex(w, h, (g) => {
    if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
    g.translate(w / 2, h / 2);
    g.rotate(rot);
    g.font = font;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.direction = 'rtl';
    if (shadow) { g.shadowColor = shadow; g.shadowBlur = 8; }
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = 8; g.strokeText(text, 0, 4); }
    g.fillStyle = color;
    g.fillText(text, 0, 4);
  });
}

// لافتة محل
export function signTexture(text, bg, fg = '#fff', sub = null) {
  return canvasTex(512, 128, (g, w, h) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,0.5)'; g.lineWidth = 6; g.strokeRect(6, 6, w - 12, h - 12);
    g.fillStyle = fg;
    g.font = sub ? '900 58px Cairo' : '900 68px Cairo';
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.direction = 'rtl';
    g.fillText(text, w / 2, sub ? 52 : 68);
    if (sub) { g.font = '700 30px Cairo'; g.fillText(sub, w / 2, 102); }
    const rng = makeRng(text.length);
    blotches(g, w, h, rng, 6, 'rgba(0,0,0,0.15)', 10, 50);
  });
}

// ---------- مؤثرات
let glowTex, puffTex, starTex, coneTex, netTex, shardTex, crackTex;
export function glowTexture() {
  return glowTex || (glowTex = canvasTex(128, 128, (g, w) => {
    const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.2, 'rgba(255,255,255,0.6)');
    gr.addColorStop(0.5, 'rgba(255,255,255,0.15)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  }));
}
export function puffTexture() {
  return puffTex || (puffTex = canvasTex(128, 128, (g, w) => {
    const rng = makeRng(5);
    for (let i = 0; i < 9; i++) {
      const x = w / 2 + (rng() - 0.5) * w * 0.4, y = w / 2 + (rng() - 0.5) * w * 0.4, r = w * (0.18 + rng() * 0.14);
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,255,255,0.75)');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
    }
  }));
}
export function starTexture() {
  return starTex || (starTex = canvasTex(64, 64, (g, w) => {
    g.translate(w / 2, w / 2);
    g.fillStyle = '#ffd23f'; g.strokeStyle = '#7a5200'; g.lineWidth = 3;
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 11 : 26, a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      g.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    g.closePath(); g.fill(); g.stroke();
  }));
}
export function coneTexture() {
  return coneTex || (coneTex = canvasTex(64, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, 'rgba(255,255,255,0.55)');
    gr.addColorStop(0.35, 'rgba(255,255,255,0.18)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  }, { aniso: 1 }));
}
export function netTexture() {
  return netTex || (netTex = canvasTex(128, 128, (g, w) => {
    g.clearRect(0, 0, w, w);
    g.strokeStyle = 'rgba(240,240,235,0.9)'; g.lineWidth = 2.5;
    for (let i = 0; i <= w; i += 16) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, w); g.stroke();
      g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke();
    }
  }, { repeat: [1, 1] }));
}
export function shardTexture() {
  return shardTex || (shardTex = canvasTex(32, 32, (g) => {
    g.fillStyle = 'rgba(200,230,255,0.85)';
    g.beginPath(); g.moveTo(4, 2); g.lineTo(30, 10); g.lineTo(12, 30); g.closePath(); g.fill();
  }));
}
export function crackedGlassTexture() {
  return crackTex || (crackTex = canvasTex(128, 128, (g, w) => {
    g.fillStyle = '#20262a'; g.fillRect(0, 0, w, w);
    g.strokeStyle = 'rgba(220,235,245,0.9)'; g.lineWidth = 2;
    const cx = w * 0.45, cy = w * 0.55;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + i * 0.3;
      g.beginPath(); g.moveTo(cx, cy);
      g.lineTo(cx + Math.cos(a) * w * 0.3, cy + Math.sin(a) * w * 0.3);
      g.lineTo(cx + Math.cos(a + 0.2) * w, cy + Math.sin(a + 0.2) * w);
      g.stroke();
    }
    for (let r = 12; r < w; r += 18) { g.beginPath(); g.arc(cx, cy, r, 0, 7); g.stroke(); }
    g.clearRect(cx - 18, cy - 14, 34, 30);
  }));
}

export function graffitiTexture(lines, color = 'rgba(30,30,30,0.75)', w = 1024, h = 256) {
  return canvasTex(w, h, (g) => {
    g.clearRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.direction = 'rtl';
    lines.forEach((l, i) => {
      g.font = l.font || '900 90px Cairo';
      g.fillStyle = l.color || color;
      g.save();
      g.translate(w * (l.x ?? 0.5), h * (l.y ?? 0.5));
      g.rotate(l.rot || 0);
      g.fillText(l.text, 0, 0);
      g.restore();
    });
  });
}
