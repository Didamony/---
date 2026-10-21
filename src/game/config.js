// كل الإعدادات والكلام اللي بيظهر في اللعبة (بالعامية المصرية)

export const MAPS = {
  alley: {
    id: 'alley',
    name: 'الحارة',
    desc: 'حارة ضيقة، جون بطوبتين، والحيطان بترجّع الكورة. خلي بالك من التوكتوك!',
    halfL: 17, halfW: 4.6,
    goal: { type: 'bricks', hw: 1.25, h: 1.05 },
    teamSize: 4,
  },
  yard: {
    id: 'yard',
    name: 'الحوش الواسع',
    desc: 'أرض تراب واسعة وعارضتين حديد صدية. فيه مساحة تجري فيها.',
    halfL: 21, halfW: 10,
    goal: { type: 'frame', hw: 2.0, h: 2.0 },
    teamSize: 5,
  },
  school: {
    id: 'school',
    name: 'حوش المدرسة',
    desc: 'الجون متطباشر على الحيطة. والناظر بيطلع كل شوية، لو شافك بتفاول هيطردك!',
    halfL: 18, halfW: 8,
    goal: { type: 'chalk', hw: 1.6, h: 1.9 },
    teamSize: 5,
  },
  roof: {
    id: 'roof',
    name: 'السطح',
    desc: 'سطح عمارة جنب غية الحمام. لو الكورة وقعت تحت حد لازم ينزل يجيبها!',
    halfL: 12, halfW: 6.2,
    goal: { type: 'slippers', hw: 1.0, h: 0.9 },
    teamSize: 3,
  },
};

export const MAP_ORDER = ['alley', 'yard', 'school', 'roof'];

export const TEAMS = {
  home: { name: 'عيال الحارة', short: 'الحُمر', colors: ['#c8322a', '#d0342a', '#b81f1f', '#e04a2f', '#a82424'], accent: '#ffffff', ui: '#c8322a' },
  away: { name: 'شلة الشارع اللي ورا', short: 'الزُّرق', colors: ['#2a63c8', '#3b82d6', '#1f4ea0', '#2f6fe0', '#2456b0'], accent: '#ffffff', ui: '#2a63c8' },
  green: { name: 'عيال الحوش', short: 'الخُضر', colors: ['#2f8f46', '#3aa356', '#237a3a', '#2d9a4f', '#1f6b33'], accent: '#ffffff', ui: '#2f8f46' },
  yellow: { name: 'ولاد تالتة تالت', short: 'الصُّفر', colors: ['#e2b21c', '#f0c22a', '#d4a00e', '#e8b820', '#c99a10'], accent: '#222222', ui: '#d4a00e' },
  black: { name: 'شباب السطوح', short: 'السُّود', colors: ['#2b2b30', '#3a3a40', '#222226', '#35353b', '#2e2e34'], accent: '#ffd23f', ui: '#3a3a40' },
  white: { name: 'كبار الحتة', short: 'البيض', colors: ['#ecebe6', '#f4f2ea', '#dedcd4', '#e8e6de', '#d8d6ce'], accent: '#c8322a', ui: '#8d8a80' },
};

export const NAMES = [
  'حمادة', 'زيزو', 'بيبو', 'شيكا', 'عبده', 'تيتو', 'ميدو', 'حودة', 'سيكا', 'أوكا',
  'كريم', 'مصطفى', 'إسلام', 'بلبل', 'شريف', 'عمرو', 'طارق', 'سعيد', 'ياسين', 'حسونة',
  'مازن', 'وليد', 'رامي', 'بودي', 'فارس', 'سامح', 'حسام', 'نادر', 'تامر', 'عصام',
];

export const SKINS = ['#c98b5a', '#a86b43', '#d9a173', '#8a5634', '#bf7f50', '#e0b088', '#9a6040'];
export const HAIRS = ['#1a1210', '#20140e', '#120c08', '#2a1a10', '#0f0a07'];

// الكلام اللي بيطلع في اللعب
export const LINES = {
  argueHigh: ['دي عالية!', 'فوق الطوبة يا عم!', 'دي فوق راس الحارس!', 'عالية عالية، متضحكش على نفسك'],
  argueGoalHigh: ['جون يا عم، كانت تحت!', 'دي على قد الحارس بالظبط!', 'جوووون، هو قصير بس!', 'لو الحارس طويل كان مسكها'],
  arguePost: ['دي خبطت في الطوبة!', 'برة! لمست الطوبة!', 'القايم يا عم!'],
  argueGoalPost: ['جون! دخلت جوه!', 'دي جوه الطوبة بشبر!', 'إنتوا بتسرقوا!'],
  bigGood: ['جون. خلاص. محدش يتكلم.', 'جون، ورجّعوا ورا', 'أنا شايفها جون، خلصنا'],
  bigBad: ['مش جون. ضربة مرمى.', 'عالية، كمّلوا', 'مفيش جون، يلا العبوا'],
  betWin: ['العزومة عليكم النهارده!', 'هناكل على حسابكم!'],
  betLose: ['يلا هات العزومة بقى', 'هتعزمنا يا معلم'],
  goal: ['جووووون!', 'جوووون يا معلم!', 'في الجووون!', 'يا سلااام!', 'جون ولا أحلى!'],
  goalBricks: ['دخلت بين الطوبتين!', 'جون نضيف بين الطوب!'],
  goalSlippers: ['دخلت بين الشبشبين!'],
  goalChalk: ['خبطت جوه الطباشير!'],
  miss: ['ياااه! جنب الطوبة!', 'كانت هتدخل!', 'طاشت!', 'ده إنت تشوط من البيت أحسن!'],
  foul: ['فاوووول!', 'فاول يا عم!', 'إيه ده؟! ده كسره!', 'حرام عليك!'],
  hurt: ['آآآه يا رجلي!', 'آه يا ركبتي!', 'هو أنا عملتلك إيه؟!', 'رجلي اتكسرت!'],
  pull: ['سيب الفانلة يا عم!', 'هتقطعلي الفانلة!', 'الفانلة دي جديدة!'],
  nutmeg: ['كوبري!', 'اتكبرى خالص!', 'عدّاها من بين رجليه!'],
  nutmegged: ['إيه ده؟!', 'مش شايف حاجة!'],
  save: ['صدّها!', 'يا عم الحارس!', 'إيدين من حديد!'],
  callPass: ['باصي يا عم!', 'هنا! هنا!', 'أنا فاضي!'],
  momCall: (n) => `يا ${n}! الأكل هيبرد، اطلع حالًا!`,
  momCallOut: ['حاضر يا ماما...', 'جاي أهو!'],
  momBack: (n) => `${n} رجع بعد ما اتغدى!`,
  fight: ['خناقة! خناقة!', 'حوشوا! حوشوا!', 'سيبوه! سيبوه!'],
  fightOver: ['خلاص خلاص.. صافي يا لبن', 'خلاص يا جماعة.. نكمل'],
  balcony: ['الكورة دخلت البلكونة!', 'يا خبر! بلكونة الحاجة!'],
  balconyBack: ['خدوا كورتكم واتلهوا!', 'آخر مرة هرجعهالكم!', 'العبوا بعيد عن الشبابيك!'],
  windowBreak: ['مين اللي كسر الإزاز ده؟!', 'أنا نازلكم!', 'هقول لأبوك!'],
  run: ['اجرررري!', 'اهرب يا ابني!'],
  roofDrop: ['الكورة وقعت تحت!', 'حد ينزل يجيبها!'],
  roofBack: ['جبتها أهو!'],
  headmaster: ['الناظر برة! اتلمّوا!'],
  headmasterCatch: (n) => `إنت يا ${n}! اطلع برة!`,
  sentOff: (n) => `${n} اتطرد!`,
  toktok: ['توكتوك جاي!', 'حاسب العربية!', 'وسّعوا يا شباب!'],
  walkerHit: ['حاسب يا ابني!', 'هو ده مكان كورة؟!', 'يا ساتر!', 'إيه ده يا ولد؟!'],
  kickoff: ['يلا بينا!', 'يلا يا رجالة!', 'العبوا!'],
  win: ['كسبنا! كسبنا!', 'الحارة بتاعتنا!'],
  lose: ['خسرنا المرة دي...', 'المرة الجاية هنكسبهم!'],
  draw: ['تعادل.. ماتش رجالة'],
};

export const MONEY = { win: 60, draw: 25, goal: 10, nutmeg: 5, cleanSheet: 15 };

// رهان قبل ماتش البطولة: اللي يخسر يعزم
export const BETS = [
  { id: 'ful', icon: '🥪', name: 'ساندوتش فول وطعمية', stake: 15 },
  { id: 'kebda', icon: '🌯', name: 'ساندوتشين كبدة', stake: 35 },
  { id: 'koshary', icon: '🍲', name: 'كشري للفريق كله', stake: 70 },
];

export const SHOP = [
  { id: 'ball', name: 'كورة جلد أصلية', desc: 'الشوطة أقوى والكورة ماسكة في رجلك أكتر', price: 120, max: 1 },
  { id: 'shoes', name: 'كوتشي جديد', desc: 'بدل الشبشب.. سرعة الفريق تزيد', price: 140, max: 1 },
  { id: 'kits', name: 'فانلات موحدة', desc: 'شكل الفريق متوحد، والنَفَس أطول', price: 90, max: 1 },
  { id: 'foul', name: 'ساندوتش فول قبل الماتش', desc: 'طاقة زيادة الماتش الجاي بس', price: 15, max: 99, consumable: true },
];

export const TOURNAMENT = [
  { map: 'alley', time: 'day', opp: 'away', title: 'الدور الأول: ماتش الحارة' },
  { map: 'yard', time: 'night', opp: 'green', title: 'دور الستاشر' },
  { map: 'school', time: 'sunset', opp: 'yellow', title: 'دور التمانية' },
  { map: 'roof', time: 'night', weather: 'rain', opp: 'black', title: 'نص النهائي' },
  { map: 'alley', time: 'night', opp: 'white', title: 'النهائي: كأس الحتة' },
];

export const DIFFICULTY = {
  easy: { name: 'سهل', react: 0.45, skill: 0.45, speed: 0.9, steal: 0.8, dirty: 0.15 },
  normal: { name: 'عادي', react: 0.28, skill: 0.65, speed: 0.97, steal: 1.0, dirty: 0.3 },
  hard: { name: 'صعب', react: 0.15, skill: 0.85, speed: 1.02, steal: 1.25, dirty: 0.45 },
};

// الأرقام اللي بتتحكم في اللعب
export const TUNE = {
  jog: 5.2,
  sprint: 7.2,
  withBallMul: 0.9,
  accel: 22,
  decel: 26,
  turnRate: 13,
  staminaDrain: 0.22,
  staminaRegen: 0.14,
  playerRadius: 0.36,
  ballRadius: 0.11,
  controlDist: 0.62,
  stealPerSec: 1.15,
  slideSpeed: 8.2,
  slideTime: 1.0,
  fallTime: 2.75,
  pullMax: 1.6,
  scandalTackle: 30,
  scandalCleanTrip: 8,
  scandalPullPerSec: 14,
  scandalWindow: 35,
};
