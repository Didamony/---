// شكل اللعيبة والناس: هدوم عادية بس كل فريق ليه لون غالب
import { SKINS, HAIRS } from '../game/config.js';
import { makeRng } from '../core/util.js';

const NEUTRAL_PANTS = ['#26262b', '#3b4a6b', '#4a4038', '#2f3a4a', '#555046'];
const HAIR_STYLES = ['short', 'curly', 'buzz', 'short', 'cap', 'short', 'curly'];

export function playerLook(team, idx, seed, { kits = false, shoes = false, isGK = false } = {}) {
  const rng = makeRng(seed * 97 + idx * 13 + 5);
  const col = team.colors[idx % team.colors.length];
  const skin = rng.pick(SKINS);
  const hair = rng.pick(HAIRS);
  const number = [1, 7, 10, 9, 4, 11, 8, 5, 3, 6][idx % 10];
  const slip = !shoes && rng.chance(0.35);
  if (kits) {
    return {
      skin, hair, hairStyle: rng.pick(HAIR_STYLES),
      top: { type: 'jersey', color: isGK ? '#2f2f33' : team.colors[0], number, numColor: team.accent },
      bottom: { type: 'shorts', color: isGK ? '#2f2f33' : team.accent === '#ffffff' ? '#f2f2f2' : '#222' },
      socks: team.colors[0], shoes: '#1a1a1a', scale: rng.range(0.92, 1.0), build: rng.range(0.95, 1.08),
      capColor: team.colors[0],
    };
  }
  const style = isGK ? 'tracksuit' : rng.pick(['tracksuit', 'tshirt', 'tank', 'jersey', 'tshirt', 'shirt']);
  let top, bottom;
  switch (style) {
    case 'tracksuit':
      top = { type: 'tracksuit', color: col, color2: '#ffffff' };
      bottom = { type: 'pants', color: rng.chance(0.6) ? col : '#26262b' };
      break;
    case 'tank':
      top = { type: 'tank', color: col };
      bottom = { type: rng.chance(0.5) ? 'shorts' : 'pants', color: rng.pick(NEUTRAL_PANTS) };
      break;
    case 'jersey':
      top = { type: 'jersey', color: col, number, numColor: team.accent };
      bottom = { type: 'shorts', color: rng.chance(0.5) ? '#f2f2f2' : '#222' };
      break;
    case 'shirt':
      top = { type: 'shirt', color: col, color2: '#ffffff' };
      bottom = { type: 'pants', color: rng.pick(NEUTRAL_PANTS) };
      break;
    default:
      top = { type: 'tshirt', color: col, number: rng.chance(0.4) ? number : null, numColor: team.accent };
      bottom = { type: rng.chance(0.4) ? 'shorts' : 'pants', color: rng.pick(NEUTRAL_PANTS) };
  }
  if (isGK) {
    top = { type: 'tracksuit', color: '#2f2f33', color2: col };
    bottom = { type: 'pants', color: '#2f2f33' };
  }
  return {
    skin, hair, hairStyle: rng.pick(HAIR_STYLES), capColor: rng.pick([col, '#222', '#eee']),
    top, bottom,
    slippers: slip,
    shoes: slip ? rng.pick(['#2e8b57', '#3a6fd8', '#e05a30', '#222']) : rng.pick(['#e8e4dc', '#e8e4dc', '#222', '#c8c0b0']),
    socks: rng.chance(0.5) ? '#f2f2f2' : null,
    scale: rng.range(0.9, 1.0),
    build: rng.range(0.94, 1.1),
  };
}

export function civilianLook(kind, seed) {
  const rng = makeRng(seed * 31 + 3);
  const skin = rng.pick(SKINS);
  switch (kind) {
    case 'woman':
      return { skin, hairStyle: 'scarf', scarfColor: rng.pick(['#3b2a4a', '#1c1c24', '#6a2a3a', '#2a4a5a', '#a07a5a']),
        top: { type: 'dress', color: rng.pick(['#2e2e3a', '#4a1f3a', '#3a4a2a', '#5a4a3a', '#222']) }, bottom: { type: 'pants', color: '#222' },
        shoes: '#1a1a1a', scale: rng.range(0.92, 0.98) };
    case 'mom':
      return { skin, hairStyle: 'scarf', scarfColor: '#1c1c24', top: { type: 'dress', color: '#4a1f3a' }, bottom: { type: 'pants', color: '#222' }, shoes: '#222', scale: 0.96, build: 1.15 };
    case 'old':
      return { skin, hair: '#9a9a9a', hairStyle: rng.pick(['gray', 'bald', 'gray']), mustache: true,
        top: { type: 'galabeya', color: rng.pick(['#8a7a5e', '#d8d4c8', '#5a6a7a', '#7a6a5a', '#c8c0a8']) }, bottom: { type: 'pants', color: '#555' },
        shoes: '#4a3a2a', slippers: rng.chance(0.5), scale: rng.range(0.94, 1.0), build: rng.range(1.0, 1.15) };
    case 'headmaster':
      return { skin, hair: '#555', hairStyle: 'bald', mustache: true, glasses: true,
        top: { type: 'suit', color: '#4a4a52', color2: '#7a1f1f' }, bottom: { type: 'pants', color: '#4a4a52' }, shoes: '#111', scale: 1.02, build: 1.2 };
    case 'kid':
      return { skin, hair: rng.pick(HAIRS), hairStyle: rng.pick(HAIR_STYLES),
        top: { type: 'tshirt', color: rng.pick(['#e8b830', '#3aa356', '#e05a30', '#7a5ad8', '#eee', '#30a0c0']) },
        bottom: { type: 'shorts', color: rng.pick(NEUTRAL_PANTS) }, slippers: rng.chance(0.6), shoes: '#2e8b57', scale: rng.range(0.72, 0.82) };
    case 'baker':
      return { skin, hair: rng.pick(HAIRS), hairStyle: 'buzz', mustache: true, top: { type: 'tshirt', color: '#e8e4dc' }, bottom: { type: 'pants', color: '#5a5a5a' }, shoes: '#333', scale: 0.98 };
    case 'man':
    default:
      return { skin, hair: rng.pick(HAIRS), hairStyle: rng.pick(['short', 'buzz', 'gray']), mustache: rng.chance(0.6),
        top: { type: rng.pick(['shirt', 'tshirt', 'galabeya']), color: rng.pick(['#8a7a5e', '#5a7a9a', '#d8d4c8', '#7a4a3a', '#3a5a4a']), color2: '#eee' },
        bottom: { type: 'pants', color: rng.pick(NEUTRAL_PANTS) }, shoes: '#2a2a2a', scale: rng.range(0.95, 1.02), build: rng.range(1.0, 1.15) };
  }
}
