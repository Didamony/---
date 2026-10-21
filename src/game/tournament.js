// البطولة: ٥ ماتشات في أماكن مختلفة، فلوس، ومحل تشتري منه حاجات للفريق
import { TOURNAMENT, SHOP, MONEY } from './config.js';

const KEY = 'matsh-elhara-tourney-v1';

function fresh() {
  return { stage: 0, money: 0, owned: {}, foul: 0, results: [], done: false };
}

export class Tournament {
  constructor() {
    this.s = fresh();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) this.s = Object.assign(fresh(), JSON.parse(raw));
    } catch (e) { /* مفيش تخزين */ }
  }
  save() { try { localStorage.setItem(KEY, JSON.stringify(this.s)); } catch (e) { /* ignore */ } }
  reset() { this.s = fresh(); this.save(); }
  get stage() { return this.s.stage; }
  get money() { return this.s.money; }
  get list() { return TOURNAMENT; }
  current() { return TOURNAMENT[this.s.stage]; }
  owned(id) { return this.s.owned[id] || 0; }

  buy(id) {
    const item = SHOP.find((i) => i.id === id);
    if (!item || this.s.money < item.price) return false;
    if (!item.consumable && this.owned(id) >= item.max) return false;
    this.s.money -= item.price;
    if (item.consumable) this.s.foul = (this.s.foul || 0) + 1;
    else this.s.owned[id] = (this.s.owned[id] || 0) + 1;
    this.save();
    return true;
  }

  mods() {
    const o = this.s.owned;
    const fuel = this.s.foul > 0;
    return {
      speed: (o.shoes ? 1.06 : 1) * (fuel ? 1.03 : 1),
      shot: o.ball ? 1.1 : 1,
      control: o.ball ? 1.2 : 1,
      stamina: (o.kits ? 1.2 : 1) * (fuel ? 1.25 : 1),
      kits: !!o.kits,
      shoes: !!o.shoes,
    };
  }

  // بنرجع الفلوس اللي اتكسبت
  record(match) {
    const [a, b] = match.score;
    let earn = a * MONEY.goal + match.stats.nutmegs[0] * MONEY.nutmeg;
    let result = 'draw';
    if (a > b) { earn += MONEY.win; result = 'win'; }
    else if (a === b) earn += MONEY.draw;
    else result = 'lose';
    if (b === 0) earn += MONEY.cleanSheet;
    this.s.money += earn;
    if (this.s.foul > 0) this.s.foul--;
    this.s.results[this.s.stage] = { score: [a, b], result };
    if (result === 'win') {
      this.s.stage++;
      if (this.s.stage >= TOURNAMENT.length) this.s.done = true;
    }
    this.save();
    return { earn, result };
  }
}
