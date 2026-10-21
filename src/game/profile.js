// لاعيبك: الاسم والشكل بتوعك، بيتحفظوا على الجهاز وبيلعبوا مكان حمادة
import { SKINS, HAIRS } from './config.js';

const KEY = 'karat-elshawarea-player-v1';

// الألوان من الفاتح للغامق عشان الاختيار يبقى مرتب
export const SKIN_TONES = [...SKINS].sort((a, b) => lum(b) - lum(a));
function lum(c) { const n = parseInt(c.slice(1), 16); return (n >> 16) * 0.3 + ((n >> 8) & 255) * 0.59 + (n & 255) * 0.11; }

export const OPTIONS = {
  hairStyle: [['short', 'عادي'], ['curly', 'كيرلي'], ['buzz', 'زيرو'], ['cap', 'كاب'], ['bald', 'أقرع']],
  face: [['none', 'دقن ناعمة'], ['mustache', 'شنب'], ['beard', 'دقن'], ['glasses', 'نضارة']],
  top: [['tshirt', 'تيشيرت'], ['jersey', 'فانلة نادي'], ['tank', 'حمالات'], ['tracksuit', 'ترينج'], ['shirt', 'قميص']],
  bottom: [['shorts', 'شورت'], ['pants', 'بنطلون']],
  shoes: [['white', 'كوتشي أبيض'], ['black', 'كوتشي أسود'], ['slippers', 'شبشب']],
  height: [['short', 'قصير'], ['mid', 'متوسط'], ['tall', 'طويل']],
  build: [['thin', 'رفيع'], ['mid', 'عادي'], ['big', 'مليان']],
};

export function defaultProfile() {
  return { name: 'حمادة', number: 7, skin: 3, hairStyle: 'short', face: 'none', top: 'tshirt', bottom: 'shorts', shoes: 'white', height: 'mid', build: 'mid' };
}

export function loadProfile() {
  const p = defaultProfile();
  try { Object.assign(p, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* مفيش تخزين */ }
  return p;
}

export function saveProfile(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
}

export function cleanName(s) {
  return (s || '').replace(/[<>&"']/g, '').trim().slice(0, 12) || 'حمادة';
}

// الشكل اللي بيروح لـ buildCharacter بلون الفريق
export function profileLook(p, team, { kits = false } = {}) {
  const col = team.colors[0];
  const skin = SKIN_TONES[Math.max(0, Math.min(SKIN_TONES.length - 1, p.skin | 0))];
  const number = p.number | 0 || 7;
  const look = {
    skin, hair: HAIRS[0], hairStyle: p.hairStyle, capColor: col,
    mustache: p.face === 'mustache' || p.face === 'beard',
    beard: p.face === 'beard',
    glasses: p.face === 'glasses',
    scale: { short: 0.9, mid: 0.95, tall: 1.0 }[p.height] || 0.95,
    build: { thin: 0.94, mid: 1.02, big: 1.1 }[p.build] || 1.02,
  };
  if (kits) {
    return Object.assign(look, {
      top: { type: 'jersey', color: col, number, numColor: team.accent },
      bottom: { type: 'shorts', color: team.accent === '#ffffff' ? '#f2f2f2' : '#222' },
      socks: col, shoes: '#1a1a1a',
    });
  }
  const pants = p.top === 'tracksuit' ? col : '#26262b';
  look.top = { type: p.top, color: col, color2: '#ffffff', number: p.top === 'jersey' || p.top === 'tshirt' ? number : null, numColor: team.accent };
  look.bottom = { type: p.bottom, color: p.bottom === 'shorts' && p.top === 'jersey' ? '#f2f2f2' : pants };
  look.slippers = p.shoes === 'slippers';
  look.shoes = p.shoes === 'black' ? '#222' : p.shoes === 'slippers' ? '#3a6fd8' : '#e8e4dc';
  look.socks = p.bottom === 'shorts' && p.shoes !== 'slippers' ? '#f2f2f2' : null;
  return look;
}
