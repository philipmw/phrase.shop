import shuffle from "fisher-yates";

export enum PartType {
  english,
  digit,
  usstate,
  color,
  symbol,
  musicalnote,
}

// This exists because iterating over an enum appears to be discouraged in TypeScript.
export const partTypeList: PartType[] = [
  PartType.english,
  PartType.digit,
  PartType.usstate,
  PartType.color,
  PartType.symbol,
  PartType.musicalnote,
];

type Dict = {
  [key in PartType]: string[];
};

// The following exists to try to satisfy TSLint.  Ideally I could convince
// TSLint that `shuffle` is safe, but I have not been able to, so I at least
// centralize its usage and disable warnings on this line.
const typedShuffle = (things: string[]): string[] => shuffle(things); // tslint:disable-line

const BINARY_BASE = 2;
const ENGLISH_ENTROPY_BITS = 9;

/**
 * The dictionary works in one of two ways:
 *
 *   For English, I start with Ogden's Basic English, which has 850 words.  I want a whole number
 *   of entropy bits, so I round down to 512 words, so I need to eliminate 338 words.  I choose to
 *   eliminate the longest words, so I sort the original word list ascending by word length and take
 *   the first (the shortest) 512 words.
 *
 *   For all other parts, I want a whole number of entropy bits without permanently eliminating
 *   any particular value.  Each time the app starts, it shuffles the full set so that the bottom
 *   2^n elements of the resulting list are different each time the program runs.
 */
export const dictionary: Dict = {
  [PartType.english]: [ // http://ogden.basic-english.org/words.html
    // operations (100 words)
    "come", "get", "give", "go", "keep", "let", "make", "put", "seem", "take", "be", "do", "have", "say", "see", "send",
    "may", "will", "about", "across", "after", "against", "among", "at", "before", "between", "by", "down", "from",
    "in", "off", "on", "over", "through", "to", "under", "up", "with", "as", "for", "of", "till", "than", "a", "the",
    "all", "any", "every", "little", "much", "no", "other", "some", "such", "that", "this", "I", "he", "you", "who",
    "and", "because", "but", "or", "if", "though", "while", "how", "when", "where", "why", "again", "ever", "far",
    "forward", "here", "near", "now", "out", "still", "then", "there", "together", "well", "almost", "enough", "even",
    "not", "only", "quite", "so", "very", "tomorrow", "yesterday", "north", "south", "east", "west", "please", "yes",
    // general things (400 words)
    "account", "act", "addition", "adjustment", "advertisement", "agreement", "air", "amount", "amusement", "animal",
    "answer", "apparatus", "approval", "argument", "art", "attack", "attempt", "attention", "attraction", "authority",
    "back", "balance", "base", "behavior", "belief", "birth", "bit", "bite", "blood", "blow", "body", "brass", "bread",
    "breath", "brother", "building", "burn", "burst", "business", "butter", "canvas", "care", "cause", "chalk",
    "chance", "change", "cloth", "coal", "color", "comfort", "committee", "company", "comparison", "competition",
    "condition", "connection", "control", "cook", "copper", "copy", "cork", "cotton", "cough", "country", "cover",
    "crack", "credit", "crime", "crush", "cry", "current", "curve", "damage", "danger", "daughter", "day", "death",
    "debt", "decision", "degree", "design", "desire", "destruction", "detail", "development", "digestion", "direction",
    "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "doubt", "drink",
    "driving", "dust", "earth", "edge", "education", "effect", "end", "error", "event", "example", "exchange",
    "existence", "expansion", "experience", "expert", "fact", "fall", "family", "father", "fear", "feeling", "fiction",
    "field", "fight", "fire", "flame", "flight", "flower", "fold", "food", "force", "form", "friend", "front", "fruit",
    "glass", "gold", "government", "grain", "grass", "grip", "group", "growth", "guide", "harbor", "harmony", "hate",
    "hearing", "heat", "help", "history", "hole", "hope", "hour", "humor", "ice", "idea", "impulse", "increase",
    "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "jelly", "join", "journey",
    "judge", "jump", "kick", "kiss", "knowledge", "land", "language", "laugh", "law", "lead", "learning", "leather",
    "letter", "level", "lift", "light", "limit", "linen", "liquid", "list", "look", "loss", "love", "machine", "man",
    "manager", "mark", "market", "mass", "meal", "measure", "meat", "meeting", "memory", "metal", "middle", "milk",
    "mind", "mine", "minute", "mist", "money", "month", "morning", "mother", "motion", "mountain", "move", "music",
    "name", "nation", "need", "news", "night", "noise", "note", "number", "observation", "offer", "oil", "operation",
    "opinion", "order", "organization", "ornament", "owner", "page", "pain", "paint", "paper", "part", "paste",
    "payment", "peace", "person", "place", "plant", "play", "pleasure", "point", "poison", "polish", "porter",
    "position", "powder", "power", "price", "print", "process", "produce", "profit", "property", "prose", "protest",
    "pull", "punishment", "purpose", "push", "quality", "question", "rain", "range", "rate", "ray", "reaction",
    "reading", "reason", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest",
    "reward", "rhythm", "rice", "river", "road", "roll", "room", "rub", "rule", "run", "salt", "sand", "scale",
    "science", "sea", "seat", "secretary", "selection", "self", "sense", "servant", "sex", "shade", "shake", "shame",
    "shock", "side", "sign", "silk", "silver", "sister", "size", "sky", "sleep", "slip", "slope", "smash", "smell",
    "smile", "smoke", "sneeze", "snow", "soap", "society", "son", "song", "sort", "sound", "soup", "space", "stage",
    "start", "statement", "steam", "steel", "step", "stitch", "stone", "stop", "story", "stretch", "structure",
    "substance", "sugar", "suggestion", "summer", "support", "surprise", "swim", "system", "talk", "taste", "tax",
    "teaching", "tendency", "test", "theory", "thing", "thought", "thunder", "time", "tin", "top", "touch", "trade",
    "transport", "trick", "trouble", "turn", "twist", "unit", "use", "value", "verse", "vessel", "view", "voice",
    "walk", "war", "wash", "waste", "water", "wave", "wax", "way", "weather", "week", "weight", "wind", "wine",
    "winter", "woman", "wood", "wool", "word", "work", "wound", "writing ", "year",
    // picturable things (200 words)
    "angle", "ant", "apple", "arch", "arm", "army", "baby", "bag", "ball", "band", "basin", "basket", "bath", "bed",
    "bee", "bell", "berry", "bird", "blade", "board", "boat", "bone", "book", "boot", "bottle", "box", "boy", "brain",
    "brake", "branch", "brick", "bridge", "brush", "bucket", "bulb", "button", "cake", "camera", "card", "cart",
    "carriage", "cat", "chain", "cheese", "chest", "chin", "church", "circle", "clock", "cloud", "coat", "collar",
    "comb", "cord", "cow", "cup", "curtain", "cushion", "dog", "door", "drain", "drawer", "dress", "drop", "ear",
    "egg", "engine", "eye", "face", "farm", "feather", "finger", "fish", "flag", "floor", "fly", "foot", "fork", "fowl",
    "frame", "garden", "girl", "glove", "goat", "gun", "hair", "hammer", "hand", "hat", "head", "heart", "hook", "horn",
    "horse", "hospital", "house", "island", "jewel", "kettle", "key", "knee", "knife", "knot", "leaf", "leg", "library",
    "line", "lip", "lock", "map", "match", "monkey", "moon", "mouth", "muscle", "nail", "neck", "needle", "nerve",
    "net", "nose", "nut", "office", "orange", "oven", "parcel", "pen", "pencil", "picture", "pig", "pin", "pipe",
    "plane", "plate", "plough/plow", "pocket", "pot", "potato", "prison", "pump", "rail", "rat", "receipt", "ring",
    "rod", "roof", "root", "sail", "school", "scissors", "screw", "seed", "sheep", "shelf", "ship", "shirt", "shoe",
    "skin", "skirt", "snake", "sock", "spade", "sponge", "spoon", "spring", "square", "stamp", "star", "station",
    "stem", "stick", "stocking", "stomach", "store", "street", "sun", "table", "tail", "thread", "throat", "thumb",
    "ticket", "toe", "tongue", "tooth", "town", "train", "tray", "tree", "trousers", "umbrella", "wall", "watch",
    "wheel", "whip", "whistle", "window", "wing", "wire", "worm",
    // qualities (100 words)
    "able", "acid", "angry", "automatic", "beautiful", "black", "boiling", "bright", "broken", "brown", "cheap",
    "chemical", "chief", "clean", "clear", "common", "complex", "conscious", "cut", "deep", "dependent", "early",
    "elastic", "electric", "equal", "fat", "fertile", "first", "fixed", "flat", "free", "frequent", "full", "general",
    "good", "great", "grey/gray", "hanging", "happy", "hard", "healthy", "high", "hollow", "important", "kind", "like",
    "living", "long", "male", "married", "material", "medical", "military", "natural", "necessary", "new", "normal",
    "open", "parallel", "past", "physical", "political", "poor", "possible", "present", "private", "probable", "quick",
    "quiet", "ready", "red", "regular", "responsible", "right", "round", "same", "second", "separate", "serious",
    "sharp", "smooth", "sticky", "stiff", "straight", "strong", "sudden", "sweet", "tall", "thick", "tight", "tired",
    "true", "violent", "waiting", "warm", "wet", "wide", "wise", "yellow", "young",
    // opposite qualities (50 words)
    "awake", "bad", "bent", "bitter", "blue", "certain", "cold", "complete", "cruel", "dark", "dead", "dear",
    "delicate", "different", "dirty", "dry", "false", "feeble", "female", "foolish", "future", "green", "ill", "last",
    "late", "left", "loose", "loud", "low", "mixed", "narrow", "old", "opposite", "public", "rough", "sad", "safe",
    "secret", "short", "shut", "simple", "slow", "small", "soft", "solid", "special", "strange", "thin", "white",
    "wrong",
  ]
    .sort((a, b) => a.length - b.length)
    .slice(0, Math.pow(BINARY_BASE, ENGLISH_ENTROPY_BITS)),
  [PartType.digit]: typedShuffle(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
  [PartType.usstate]: typedShuffle([
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]),
  [PartType.color]: typedShuffle([ // https://en.wikipedia.org/wiki/List_of_software_palettes#Microsoft_Windows_default_16-color_palette
    "black", "maroon", "green", "olive",
    "navy", "purple", "teal", "silver",
    "gray", "red", "lime", "yellow",
    "blue", "fuchsia", "aqua", "white",
  ]),
  [PartType.symbol]: typedShuffle(["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "_", "+"]),
  [PartType.musicalnote]: typedShuffle([
    "A", "Ab", "A#",
    "B", "Bb", "B#",
    "C", "Cb", "C#",
    "D", "Db", "D#",
    "E", "Eb", "E#",
    "F", "Fb", "F#",
    "G", "Gb", "G#"]),
};

interface IProps {
  entropyReqBits: number;
  maxLength: number;
  minLength: number;

}
type Props = {
  [key in PartType]: IProps
};

export const partTypeProps: Props = {
  [PartType.english]: {
    entropyReqBits: ENGLISH_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.english].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.english].map((entry) => entry.length)),
  },
  [PartType.digit]: {
    entropyReqBits: 3,
    maxLength: 1,
    minLength: 1,
  },
  [PartType.usstate]: {
    entropyReqBits: 5,
    maxLength: 2,
    minLength: 2,
  },
  [PartType.color]: {
    entropyReqBits: 4,
    maxLength: Math.max(...dictionary[PartType.color].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.color].map((entry) => entry.length)),
  },
  [PartType.symbol]: {
    entropyReqBits: 4,
    maxLength: 1,
    minLength: 1,
  },
  [PartType.musicalnote]: {
    entropyReqBits: 4,
    maxLength: 2,
    minLength: 1,
  },
};
