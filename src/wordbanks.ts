interface CountNoun {
  singular: string;
  plural: string;
}

const ADJECTIVES = [
  "able", // VoA
  "adult", // VoA
  "afraid", // VoA
  "alive", // VoA
  "alone", // VoA
  "ancient", // VoA
  "awake", // VoA
  "baby", // VoA
  "back", // VoA
  "bad", // VoA
  "best", // VoA
  "better", // VoA
  "big", // VoA
  "black", // VoA
  "blue", // VoA
  "born", // VoA
  "bottom", // VoA
  "brave", // VoA
  "brief", // VoA
  "bright", // VoA
  "brown", // VoA
  "busy", // VoA
  "calm", // VoA
  "careful", // VoA
  "center", // VoA
  "chemical", // VoA
  "chief", // VoA
  "clean", // VoA
  "clear", // VoA
  "close", // VoA
  "cold", // VoA
  "common", // VoA
  "complete", // VoA
  "complex", // VoA
  "conservative", // VoA
  "cool", // VoA
  "correct", // VoA
  "cotton", // VoA
  "country", // VoA
  "current", // VoA
  "custom", // VoA
  "cut", // VoA
  "dark", // VoA
  "dead", // VoA
  "deaf", // VoA
  "deep", // VoA
  "different", // VoA
  "difficult", // VoA
  "direct", // VoA
  "dirt", // VoA
  "down", // VoA
  "dry", // VoA
  "early", // VoA
  "east", // VoA
  "easy", // VoA
  "empty", // VoA
  "equal", // VoA
  "ethnic", // VoA
  "even", // VoA
  "evil", // VoA
  "exact", // VoA
  "excellent", // VoA
  "expert", // VoA
  "express", // VoA
  "extra", // VoA
  "extreme", // VoA
  "fair", // VoA
  "false", // VoA
  "family", // VoA
  "famous", // VoA
  "far", // VoA
  "fast", // VoA
  "fat", // VoA
  "federal", // VoA
  "female", // VoA
  "fertile", // VoA
  "fierce", // VoA
  "final", // VoA
  "financial", // VoA
  "fine", // VoA
  "firm", // VoA
  "first", // VoA
  "fit", // VoA
  "flat", // VoA
  "fluid", // VoA
  "foreign", // VoA
  "former", // VoA
  "forward", // VoA
  "free", // VoA
  "fresh", // VoA
  "front", // VoA
  "full", // VoA
  "fun", // VoA
  "future", // VoA
  "general", // VoA
  "gentle", // VoA
  "glass", // VoA
  "gold", // VoA
  "good", // VoA
  "gray", // VoA
  "great", // VoA
  "green", // VoA
  "ground", // VoA
  "group", // VoA
  "guerrilla", // VoA
  "guilty", // VoA
  "half", // VoA
  "happy", // VoA
  "hard", // VoA
  "head", // VoA
  "heavy", // VoA
  "high", // VoA
  "hit", // VoA
  "holy", // VoA
  "home", // VoA
  "honest", // VoA
  "horrible", // VoA
  "hostile", // VoA
  "hot", // VoA
  "house", // VoA
  "huge", // VoA
  "human", // VoA
  "illegal", // VoA
  "immediate", // VoA
  "immigrant", // VoA
  "important", // VoA
  "independent", // VoA
  "individual", // VoA
  "innocent", // VoA
  "insane", // VoA
  "intelligent", // VoA
  "intense", // VoA
  "international", // VoA
  "iron", // VoA
  "joint", // VoA
  "just", // VoA
  "kind", // VoA
  "large", // VoA
  "last", // VoA
  "late", // VoA
  "lead", // VoA
  "left", // VoA
  "legal", // VoA
  "level", // VoA
  "liberal", // VoA
  "light", // VoA
  "liquid", // VoA
  "little", // VoA
  "live", // VoA
  "local", // VoA
  "lonely", // VoA
  "long", // VoA
  "loud", // VoA
  "low", // VoA
  "loyal", // VoA
  "main", // VoA
  "major", // VoA
  "male", // VoA
  "material", // VoA
  "mean", // VoA
  "mental", // VoA
  "metal", // VoA
  "middle", // VoA
  "militant", // VoA
  "military", // VoA
  "mineral", // VoA
  "minor", // VoA
  "minority", // VoA
  "minute", // VoA
  "missing", // VoA
  "model", // VoA
  "moderate", // VoA
  "modern", // VoA
  "narrow", // VoA
  "native", // VoA
  "natural", // VoA
  "navy", // VoA
  "near", // VoA
  "necessary", // VoA
  "neutral", // VoA
  "new", // VoA
  "next", // VoA
  "nice", // VoA
  "normal", // VoA
  "north", // VoA
  "now", // VoA
  "nuclear", // VoA
  "offensive", // VoA
  "official", // VoA
  "old", // VoA
  "only", // VoA
  "open", // VoA
  "opposite", // VoA
  "other", // VoA
  "own", // VoA
  "paper", // VoA
  "part", // VoA
  "past", // VoA
  "patient", // VoA
  "pay", // VoA
  "perfect", // VoA
  "period", // VoA
  "permanent", // VoA
  "physical", // VoA
  "pilot", // VoA
  "plastic", // VoA
  "poor", // VoA
  "popular", // VoA
  "possible", // VoA
  "power", // VoA
  "pregnant", // VoA
  "present", // VoA
  "private", // VoA
  "problem", // VoA
  "public", // VoA
  "pure", // VoA
  "quality", // VoA
  "quick", // VoA
  "quiet", // VoA
  "rare", // VoA
  "ready", // VoA
  "real", // VoA
  "realistic", // VoA
  "reasonable", // VoA
  "recent", // VoA
  "red", // VoA
  "responsible", // VoA
  "rich", // VoA
  "right", // VoA
  "rough", // VoA
  "round", // VoA
  "rubber", // VoA
  "sad", // VoA
  "safe", // VoA
  "salt", // VoA
  "same", // VoA
  "sand", // VoA
  "second", // VoA
  "secret", // VoA
  "self", // VoA
  "separate", // VoA
  "serious", // VoA
  "set", // VoA
  "several", // VoA
  "severe", // VoA
  "sharp", // VoA
  "short", // VoA
  "sick", // VoA
  "side", // VoA
  "silver", // VoA
  "similar", // VoA
  "simple", // VoA
  "single", // VoA
  "slow", // VoA
  "small", // VoA
  "smooth", // VoA
  "social", // VoA
  "soft", // VoA
  "solid", // VoA
  "south", // VoA
  "special", // VoA
  "square", // VoA
  "steel", // VoA
  "still", // VoA
  "stone", // VoA
  "straight", // VoA
  "strange", // VoA
  "strong", // VoA
  "stupid", // VoA
  "submarine", // VoA
  "sudden", // VoA
  "sure", // VoA
  "surplus", // VoA
  "sweet", // VoA
  "tall", // VoA
  "technical", // VoA
  "temporary", // VoA
  "tense", // VoA
  "terrible", // VoA
  "thick", // VoA
  "thin", // VoA
  "third", // VoA
  "through", // VoA
  "tired", // VoA
  "top", // VoA
  "total", // VoA
  "toward", // VoA
  "tragic", // VoA
  "trial", // VoA
  "true", // VoA
  "under", // VoA
  "urgent", // VoA
  "usual", // VoA
  "vicious", // VoA
  "warm", // VoA
  "weak", // VoA
  "welcome", // VoA
  "well", // VoA
  "west", // VoA
  "wet", // VoA
  "white", // VoA
  "whole", // VoA
  "wide", // VoA
  "wild", // VoA
  "willing", // VoA
  "wise", // VoA
  "wonderful", // VoA
  "worse", // VoA
  "wrong", // VoA
  "yellow", // VoA
  "young", // VoA
  "compound", // VoA
  "dense", // VoA
];

const DETERMINERS = [
  "a", // VoA
  "all", // VoA
  "another", // VoA
  "any", // VoA
  "both", // VoA
  "each", // VoA
  "either", // VoA
  "enough", // VoA
  "every", // VoA
  "few", // VoA
  "last", // VoA
  "less", // VoA
  "little", // VoA
  "many", // VoA
  "more", // VoA
  "most", // VoA
  "much", // VoA
  "neither", // VoA
  "next", // VoA
  "no", // VoA
  "other", // VoA
  "our", // VoA
  "several", // VoA
  "some", // VoA
  "such", // VoA
  "that", // VoA
  "the", // VoA
  "these", // VoA
  "this", // VoA
  "us", // VoA
  "we", // VoA
  "what", // VoA
  "which", // VoA
  "you", // VoA
];

const PREPOSITIONS = [
  "about", // VoA
  "above", // VoA
  "across", // VoA
  "after", // VoA
  "against", // VoA
  "along", // VoA
  "among", // VoA
  "around", // VoA
  "as", // VoA
  "at", // VoA
  "before", // VoA
  "behind", // VoA
  "below", // VoA
  "between", // VoA
  "but", // VoA
  "by", // VoA
  "down", // VoA
  "during", // VoA
  "except", // VoA
  "from", // VoA
  "in", // VoA
  "less", // VoA
  "near", // VoA
  "no", // VoA
  "of", // VoA
  "off", // VoA
  "on", // VoA
  "opposite", // VoA
  "out", // VoA
  "over", // VoA
  "past", // VoA
  "since", // VoA
  "than", // VoA
  "through", // VoA
  "to", // VoA
  "toward", // VoA
  "under", // VoA
  "until", // VoA
  "up", // VoA
  "with", // VoA
  "without", // VoA
];

const COUNT_NOUNS_ALL: CountNoun[] = [
  {singular: "accident", plural: "accidents"},
  {singular: "act", plural: "acts"},
  {singular: "activist", plural: "activists"},
  {singular: "actor", plural: "actors"},
  {singular: "administration", plural: "administrations"},
  {singular: "admit", plural: "admits"},
  {singular: "adult", plural: "adults"},
  {singular: "age", plural: "ages"},
  {singular: "agency", plural: "agencies"},
  {singular: "aim", plural: "aims"},
  {singular: "airplane", plural: "airplanes"},
  {singular: "airport", plural: "airports"},
  {singular: "album", plural: "albums"},
  {singular: "ally", plural: "allies"},
  {singular: "ambassador", plural: "ambassadors"},
  {singular: "amount", plural: "amounts"},
  {singular: "ancestor", plural: "ancestors"},
  {singular: "animal", plural: "animals"},
  {singular: "anniversary", plural: "anniversaries"},
  {singular: "answer", plural: "answers"},
  {singular: "appeal", plural: "appeals"},
  {singular: "area", plural: "areas"},
  {singular: "army", plural: "armies"},
  {singular: "arrest", plural: "arrests"},
  {singular: "art", plural: "arts"},
  {singular: "artillery", plural: "artilleries"},
  {singular: "astronaut", plural: "astronauts"},
  {singular: "asylum", plural: "asylums"},
  {singular: "attack", plural: "attacks"},
  {singular: "attempt", plural: "attempts"},
  {singular: "automobile", plural: "automobiles"},
  {singular: "average", plural: "averages"},
  {singular: "award", plural: "awards"},
  {singular: "baby", plural: "babies"},
  {singular: "balance", plural: "balances"},
  {singular: "ball", plural: "balls"},
  {singular: "balloon", plural: "balloons"},
  {singular: "ballot", plural: "ballots"},
  {singular: "ban", plural: "bans"},
  {singular: "bank", plural: "banks"},
  {singular: "bar", plural: "bars"},
  {singular: "barrier", plural: "barriers"},
  {singular: "base", plural: "bases"},
  {singular: "battle", plural: "battles"},
  {singular: "beat", plural: "beats"},
  {singular: "beauty", plural: "beauties"},
  {singular: "bed", plural: "beds"},
  {singular: "bell", plural: "bells"},
  {singular: "bill", plural: "bills"},
  {singular: "bird", plural: "birds"},
  {singular: "bite", plural: "bites"},
  {singular: "blanket", plural: "blankets"},
  {singular: "block", plural: "blocks"},
  {singular: "blow", plural: "blows"},
  {singular: "boat", plural: "boats"},
  {singular: "body", plural: "bodies"},
  {singular: "boil", plural: "boils"},
  {singular: "bomb", plural: "bombs"},
  {singular: "bone", plural: "bones"},
  {singular: "book", plural: "books"},
  {singular: "border", plural: "borders"},
  {singular: "bottle", plural: "bottles"},
  {singular: "bottom", plural: "bottoms"},
  {singular: "box", plural: "boxes"},
  {singular: "boy", plural: "boys"},
  {singular: "boycott", plural: "boycotts"},
  {singular: "brain", plural: "brains"},
  {singular: "break", plural: "breaks"},
  {singular: "bridge", plural: "bridges"},
  {singular: "brief", plural: "briefs"},
  {singular: "broadcast", plural: "broadcasts"},
  {singular: "brother", plural: "brothers"},
  {singular: "budget", plural: "budgets"},
  {singular: "build", plural: "builds"},
  {singular: "building", plural: "buildings"},
  {singular: "bullet", plural: "bullets"},
  {singular: "burn", plural: "burns"},
  {singular: "burst", plural: "bursts"},
  {singular: "bus", plural: "buses"},
  {singular: "business", plural: "businesses"},
  {singular: "cabinet", plural: "cabinets"},
  {singular: "call", plural: "calls"},
  {singular: "camera", plural: "cameras"},
  {singular: "camp", plural: "camps"},
  {singular: "campaign", plural: "campaigns"},
  {singular: "can", plural: "cans"},
  {singular: "cancer", plural: "cancers"},
  {singular: "candidate", plural: "candidates"},
  {singular: "capital", plural: "capitals"},
  {singular: "capture", plural: "captures"},
  {singular: "car", plural: "cars"},
  {singular: "case", plural: "cases"},
  {singular: "cat", plural: "cats"},
  {singular: "catch", plural: "catches"},
  {singular: "cause", plural: "causes"},
  {singular: "ceasefire", plural: "ceasefires"},
  {singular: "center", plural: "centers"},
  {singular: "century", plural: "centuries"},
  {singular: "ceremony", plural: "ceremonies"},
  {singular: "chairman", plural: "chairmen"},
  {singular: "champion", plural: "champions"},
  {singular: "chance", plural: "chances"},
  {singular: "change", plural: "changes"},
  {singular: "charge", plural: "charges"},
  {singular: "chase", plural: "chases"},
  {singular: "cheat", plural: "cheats"},
  {singular: "cheer", plural: "cheers"},
  {singular: "chemical", plural: "chemicals"},
  {singular: "chemistry", plural: "chemistries"},
  {singular: "chief", plural: "chiefs"},
  {singular: "child", plural: "children"},
  {singular: "circle", plural: "circles"},
  {singular: "citizen", plural: "citizens"},
  {singular: "city", plural: "cities"},
  {singular: "civilian", plural: "civilians"},
  {singular: "claim", plural: "claims"},
  {singular: "clash", plural: "clashes"},
  {singular: "clergy", plural: "clergies"},
  {singular: "climate", plural: "climates"},
  {singular: "climb", plural: "climbs"},
  {singular: "clock", plural: "clocks"},
  {singular: "cloth", plural: "clothes"},
  {singular: "cloud", plural: "clouds"},
  {singular: "coal", plural: "coals"},
  {singular: "coalition", plural: "coalitions"},
  {singular: "coast", plural: "coasts"},
  {singular: "coffee", plural: "coffees"},
  {singular: "college", plural: "colleges"},
  {singular: "colony", plural: "colonies"},
  {singular: "color", plural: "colors"},
  {singular: "command", plural: "commands"},
  {singular: "comment", plural: "comments"},
  {singular: "committee", plural: "committees"},
  {singular: "community", plural: "communities"},
  {singular: "company", plural: "companies"},
  {singular: "complex", plural: "complexes"},
  {singular: "compromise", plural: "compromises"},
  {singular: "computer", plural: "computers"},
  {singular: "concern", plural: "concerns"},
  {singular: "condition", plural: "conditions"},
  {singular: "conference", plural: "conferences"},
  {singular: "conflict", plural: "conflicts"},
  {singular: "conservative", plural: "conservatives"},
  {singular: "constitution", plural: "constitutions"},
  {singular: "container", plural: "containers"},
  {singular: "continent", plural: "continents"},
  {singular: "control", plural: "controls"},
  {singular: "convention", plural: "conventions"},
  {singular: "cook", plural: "cooks"},
  {singular: "copy", plural: "copies"},
  {singular: "cost", plural: "costs"},
  {singular: "cotton", plural: "cottons"},
  {singular: "count", plural: "counts"},
  {singular: "country", plural: "countries"},
  {singular: "court", plural: "courts"},
  {singular: "cover", plural: "covers"},
  {singular: "cow", plural: "cows"},
  {singular: "crash", plural: "crashes"},
  {singular: "creature", plural: "creatures"},
  {singular: "credit", plural: "credits"},
  {singular: "crew", plural: "crews"},
  {singular: "crime", plural: "crimes"},
  {singular: "criminal", plural: "criminals"},
  {singular: "crisis", plural: "crises"},
  {singular: "crop", plural: "crops"},
  {singular: "cross", plural: "crosses"},
  {singular: "crowd", plural: "crowds"},
  {singular: "crush", plural: "crushes"},
  {singular: "cry", plural: "cries"},
  {singular: "culture", plural: "cultures"},
  {singular: "cure", plural: "cures"},
  {singular: "curfew", plural: "curfews"},
  {singular: "current", plural: "currents"},
  {singular: "custom", plural: "customs"},
  {singular: "cut", plural: "cuts"},
  {singular: "dam", plural: "dams"},
  {singular: "damage", plural: "damages"},
  {singular: "dance", plural: "dances"},
  {singular: "danger", plural: "dangers"},
  {singular: "date", plural: "dates"},
  {singular: "daughter", plural: "daughters"},
  {singular: "day", plural: "days"},
  {singular: "deal", plural: "deals"},
  {singular: "debate", plural: "debates"},
  {singular: "debt", plural: "debts"},
  {singular: "defeat", plural: "defeats"},
  {singular: "deficit", plural: "deficits"},
  {singular: "degree", plural: "degrees"},
  {singular: "delay", plural: "delays"},
  {singular: "demand", plural: "demands"},
  {singular: "democracy", plural: "democracies"},
  {singular: "desert", plural: "deserts"},
  {singular: "design", plural: "designs"},
  {singular: "desire", plural: "desires"},
  {singular: "detail", plural: "details"},
  {singular: "device", plural: "devices"},
  {singular: "dictator", plural: "dictators"},
  {singular: "die", plural: "dice"},
  {singular: "diet", plural: "diets"},
  {singular: "dig", plural: "digs"},
  {singular: "dinner", plural: "dinners"},
  {singular: "diplomat", plural: "diplomats"},
  {singular: "direction", plural: "directions"},
  {singular: "disease", plural: "diseases"},
  {singular: "dispute", plural: "disputes"},
  {singular: "dissident", plural: "dissidents"},
  {singular: "distance", plural: "distances"},
  {singular: "divide", plural: "divides"},
  {singular: "doctor", plural: "doctors"},
  {singular: "document", plural: "documents"},
  {singular: "dog", plural: "dogs"},
  {singular: "dollar", plural: "dollars"},
  {singular: "door", plural: "doors"},
  {singular: "dream", plural: "dreams"},
  {singular: "drink", plural: "drinks"},
  {singular: "drive", plural: "drives"},
  {singular: "drug", plural: "drugs"},
  {singular: "duty", plural: "duties"},
  {singular: "earthquake", plural: "earthquakes"},
  {singular: "economy", plural: "economies"},
  {singular: "edge", plural: "edges"},
  {singular: "effect", plural: "effects"},
  {singular: "effort", plural: "efforts"},
  {singular: "egg", plural: "eggs"},
  {singular: "embassy", plural: "embassies"},
  {singular: "emergency", plural: "emergencies"},
  {singular: "emotion", plural: "emotions"},
  {singular: "end", plural: "ends"},
  {singular: "enemy", plural: "enemies"},
  {singular: "engine", plural: "engines"},
  {singular: "engineer", plural: "engineers"},
  {singular: "environment", plural: "environments"},
  {singular: "escape", plural: "escapes"},
  {singular: "estimate", plural: "estimates"},
  {singular: "event", plural: "events"},
  {singular: "evil", plural: "evils"},
  {singular: "example", plural: "examples"},
  {singular: "exchange", plural: "exchanges"},
  {singular: "excuse", plural: "excuses"},
  {singular: "exercise", plural: "exercises"},
  {singular: "experience", plural: "experiences"},
  {singular: "experiment", plural: "experiments"},
  {singular: "expert", plural: "experts"},
  {singular: "export", plural: "exports"},
  {singular: "extra", plural: "extras"},
  {singular: "extreme", plural: "extremes"},
  {singular: "extremist", plural: "extremists"},
  {singular: "face", plural: "faces"},
  {singular: "fact", plural: "facts"},
  {singular: "factory", plural: "factories"},
  {singular: "fair", plural: "fairs"},
  {singular: "fall", plural: "falls"},
  {singular: "family", plural: "families"},
  {singular: "farm", plural: "farms"},
  {singular: "fat", plural: "fats"},
  {singular: "father", plural: "fathers"},
  {singular: "fear", plural: "fears"},
  {singular: "female", plural: "females"},
  {singular: "fence", plural: "fences"},
  {singular: "field", plural: "fields"},
  {singular: "fight", plural: "fights"},
  {singular: "film", plural: "films"},
  {singular: "final", plural: "finals"},
  {singular: "find", plural: "finds"},
  {singular: "fine", plural: "fines"},
  {singular: "finish", plural: "finishes"},
  {singular: "fire", plural: "fires"},
  {singular: "firework", plural: "fireworks"},
  {singular: "firm", plural: "firms"},
  {singular: "first", plural: "firsts"},
  {singular: "fish", plural: "fishes"},
  {singular: "fix", plural: "fixes"},
  {singular: "flag", plural: "flags"},
  {singular: "flat", plural: "flats"},
  {singular: "float", plural: "floats"},
  {singular: "flood", plural: "floods"},
  {singular: "floor", plural: "floors"},
  {singular: "flow", plural: "flows"},
  {singular: "flower", plural: "flowers"},
  {singular: "fluid", plural: "fluids"},
  {singular: "fly", plural: "flies"},
  {singular: "food", plural: "foods"},
  {singular: "fool", plural: "fools"},
  {singular: "foot", plural: "feet"},
  {singular: "force", plural: "forces"},
  {singular: "forest", plural: "forests"},
  {singular: "form", plural: "forms"},
  {singular: "freedom", plural: "freedoms"},
  {singular: "friend", plural: "friends"},
  {singular: "front", plural: "fronts"},
  {singular: "fruit", plural: "fruits"},
  {singular: "fuel", plural: "fuels"},
  {singular: "funeral", plural: "funerals"},
  {singular: "gain", plural: "gains"},
  {singular: "game", plural: "games"},
  {singular: "gas", plural: "gases"},
  {singular: "general", plural: "generals"},
  {singular: "gift", plural: "gifts"},
  {singular: "girl", plural: "girls"},
  {singular: "glass", plural: "glasses"},
  {singular: "goal", plural: "goals"},
  {singular: "god", plural: "gods"},
  {singular: "good", plural: "goods"},
  {singular: "government", plural: "governments"},
  {singular: "grain", plural: "grains"},
  {singular: "granddaughter", plural: "granddaughters"},
  {singular: "grandfather", plural: "grandfathers"},
  {singular: "grandmother", plural: "grandmothers"},
  {singular: "grandson", plural: "grandsons"},
  {singular: "gray", plural: "grays"},
  {singular: "great", plural: "greats"},
  {singular: "green", plural: "greens"},
  {singular: "grind", plural: "grinds"},
  {singular: "ground", plural: "grounds"},
  {singular: "group", plural: "groups"},
  {singular: "guarantee", plural: "guarantees"},
  {singular: "guard", plural: "guards"},
  {singular: "guerrilla", plural: "guerrillas"},
  {singular: "guide", plural: "guides"},
  {singular: "gun", plural: "guns"},
  {singular: "hair", plural: "hairs"},
  {singular: "half", plural: "halves"},
  {singular: "harm", plural: "harms"},
  {singular: "harvest", plural: "harvests"},
  {singular: "hat", plural: "hats"},
  {singular: "head", plural: "heads"},
  {singular: "helicopter", plural: "helicopters"},
  {singular: "hero", plural: "heroes"},
  {singular: "hide", plural: "hides"},
  {singular: "high", plural: "highs"},
  {singular: "hill", plural: "hills"},
  {singular: "history", plural: "histories"},
  {singular: "hit", plural: "hits"},
  {singular: "hold", plural: "holds"},
  {singular: "hole", plural: "holes"},
  {singular: "holiday", plural: "holidays"},
  {singular: "home", plural: "homes"},
  {singular: "honor", plural: "honors"},
  {singular: "hope", plural: "hopes"},
  {singular: "horse", plural: "horses"},
  {singular: "hospital", plural: "hospitals"},
  {singular: "hostage", plural: "hostages"},
  {singular: "hotel", plural: "hotels"},
  {singular: "hour", plural: "hours"},
  {singular: "house", plural: "houses"},
  {singular: "human", plural: "humans"},
  {singular: "humor", plural: "humors"},
  {singular: "hunt", plural: "hunts"},
  {singular: "hurt", plural: "hurts"},
  {singular: "husband", plural: "husbands"},
  {singular: "idea", plural: "ideas"},
  {singular: "immigrant", plural: "immigrants"},
  {singular: "import", plural: "imports"},
  {singular: "in", plural: "ins"},
  {singular: "incident", plural: "incidents"},
  {singular: "increase", plural: "increases"},
  {singular: "individual", plural: "individuals"},
  {singular: "industry", plural: "industries"},
  {singular: "influence", plural: "influences"},
  {singular: "insect", plural: "insects"},
  {singular: "instrument", plural: "instruments"},
  {singular: "insult", plural: "insults"},
  {singular: "interest", plural: "interests"},
  {singular: "iron", plural: "irons"},
  {singular: "island", plural: "islands"},
  {singular: "issue", plural: "issues"},
  {singular: "jail", plural: "jails"},
  {singular: "jewel", plural: "jewels"},
  {singular: "job", plural: "jobs"},
  {singular: "joint", plural: "joints"},
  {singular: "joke", plural: "jokes"},
  {singular: "judge", plural: "judges"},
  {singular: "jump", plural: "jumps"},
  {singular: "jury", plural: "juries"},
  {singular: "kick", plural: "kicks"},
  {singular: "kill", plural: "kills"},
  {singular: "kind", plural: "kinds"},
  {singular: "kiss", plural: "kisses"},
  {singular: "knife", plural: "knives"},
  {singular: "laboratory", plural: "laboratories"},
  {singular: "lake", plural: "lakes"},
  {singular: "land", plural: "lands"},
  {singular: "language", plural: "languages"},
  {singular: "laugh", plural: "laughs"},
  {singular: "launch", plural: "launches"},
  {singular: "law", plural: "laws"},
  {singular: "lead", plural: "leads"},
  {singular: "leak", plural: "leaks"},
  {singular: "legislature", plural: "legislatures"},
  {singular: "letter", plural: "letters"},
  {singular: "level", plural: "levels"},
  {singular: "liberal", plural: "liberals"},
  {singular: "lie", plural: "lies"},
  {singular: "life", plural: "lives"},
  {singular: "lift", plural: "lifts"},
  {singular: "light", plural: "lights"},
  {singular: "like", plural: "likes"},
  {singular: "limit", plural: "limits"},
  {singular: "line", plural: "lines"},
  {singular: "link", plural: "links"},
  {singular: "liquid", plural: "liquids"},
  {singular: "list", plural: "lists"},
  {singular: "load", plural: "loads"},
  {singular: "loan", plural: "loans"},
  {singular: "local", plural: "locals"},
  {singular: "look", plural: "looks"},
  {singular: "love", plural: "loves"},
  {singular: "low", plural: "lows"},
  {singular: "machine", plural: "machines"},
  {singular: "magazine", plural: "magazines"},
  {singular: "major", plural: "majors"},
  {singular: "majority", plural: "majorities"},
  {singular: "make", plural: "makes"},
  {singular: "male", plural: "males"},
  {singular: "man", plural: "men"},
  {singular: "map", plural: "maps"},
  {singular: "march", plural: "marches"},
  {singular: "mark", plural: "marks"},
  {singular: "market", plural: "markets"},
  {singular: "mass", plural: "masses"},
  {singular: "mate", plural: "mates"},
  {singular: "material", plural: "materials"},
  {singular: "matter", plural: "matters"},
  {singular: "mayor", plural: "mayors"},
  {singular: "meal", plural: "meals"},
  {singular: "mean", plural: "means"},
  {singular: "measure", plural: "measures"},
  {singular: "meat", plural: "meats"},
  {singular: "medium", plural: "media"},
  {singular: "medicine", plural: "medicines"},
  {singular: "meet", plural: "meets"},
  {singular: "member", plural: "members"},
  {singular: "memorial", plural: "memorials"},
  {singular: "memory", plural: "memories"},
  {singular: "message", plural: "messages"},
  {singular: "metal", plural: "metals"},
  {singular: "method", plural: "methods"},
  {singular: "microscope", plural: "microscopes"},
  {singular: "military", plural: "militaries"},
  {singular: "mind", plural: "minds"},
  {singular: "mine", plural: "mines"},
  {singular: "mineral", plural: "minerals"},
  {singular: "minister", plural: "ministers"},
  {singular: "minor", plural: "minors"},
  {singular: "minority", plural: "minorities"},
  {singular: "minute", plural: "minutes"},
  {singular: "miss", plural: "misses"},
  {singular: "missile", plural: "missiles"},
  {singular: "mistake", plural: "mistakes"},
  {singular: "mix", plural: "mixes"},
  {singular: "mob", plural: "mobs"},
  {singular: "model", plural: "models"},
  {singular: "moderate", plural: "moderates"},
  {singular: "month", plural: "months"},
  {singular: "moon", plural: "moons"},
  {singular: "moral", plural: "morals"},
  {singular: "morning", plural: "mornings"},
  {singular: "mother", plural: "mothers"},
  {singular: "motion", plural: "motions"},
  {singular: "mountain", plural: "mountains"},
  {singular: "move", plural: "moves"},
  {singular: "movement", plural: "movements"},
  {singular: "movie", plural: "movies"},
  {singular: "murder", plural: "murders"},
  {singular: "mystery", plural: "mysteries"},
  {singular: "name", plural: "names"},
  {singular: "nation", plural: "nations"},
  {singular: "native", plural: "natives"},
  {singular: "navy", plural: "navies"},
  {singular: "need", plural: "needs"},
  {singular: "night", plural: "nights"},
  {singular: "noise", plural: "noises"},
  {singular: "normal", plural: "normals"},
  {singular: "note", plural: "notes"},
  {singular: "nothing", plural: "nothings"},
  {singular: "number", plural: "numbers"},
  {singular: "object", plural: "objects"},
  {singular: "ocean", plural: "oceans"},
  {singular: "offer", plural: "offers"},
  {singular: "office", plural: "offices"},
  {singular: "officer", plural: "officers"},
  {singular: "oil", plural: "oils"},
  {singular: "opinion", plural: "opinions"},
  {singular: "opposite", plural: "opposites"},
  {singular: "orbit", plural: "orbits"},
  {singular: "order", plural: "orders"},
  {singular: "other", plural: "others"},
  {singular: "out", plural: "outs"},
  {singular: "pain", plural: "pains"},
  {singular: "paint", plural: "paints"},
  {singular: "pan", plural: "pans"},
  {singular: "paper", plural: "papers"},
  {singular: "parachute", plural: "parachutes"},
  {singular: "parade", plural: "parades"},
  {singular: "pardon", plural: "pardons"},
  {singular: "parent", plural: "parents"},
  {singular: "parliament", plural: "parliaments"},
  {singular: "part", plural: "parts"},
  {singular: "party", plural: "parties"},
  {singular: "pass", plural: "passes"},
  {singular: "passenger", plural: "passengers"},
  {singular: "passport", plural: "passports"},
  {singular: "past", plural: "pasts"},
  {singular: "path", plural: "paths"},
  {singular: "patient", plural: "patients"},
  {singular: "peace", plural: "peaces"},
  {singular: "percent", plural: "percent"},
  {singular: "period", plural: "periods"},
  {singular: "permit", plural: "permits"},
  {singular: "person", plural: "people"},
  {singular: "physical", plural: "physicals"},
  {singular: "picture", plural: "pictures"},
  {singular: "piece", plural: "pieces"},
  {singular: "pig", plural: "pigs"},
  {singular: "pilot", plural: "pilots"},
  {singular: "pipe", plural: "pipes"},
  {singular: "place", plural: "places"},
  {singular: "plan", plural: "plans"},
  {singular: "planet", plural: "planets"},
  {singular: "plant", plural: "plants"},
  {singular: "plastic", plural: "plastics"},
  {singular: "play", plural: "plays"},
  {singular: "plot", plural: "plots"},
  {singular: "poem", plural: "poems"},
  {singular: "point", plural: "points"},
  {singular: "poison", plural: "poisons"},
  {singular: "policy", plural: "policies"},
  {singular: "population", plural: "populations"},
  {singular: "port", plural: "ports"},
  {singular: "position", plural: "positions"},
  {singular: "pour", plural: "pours"},
  {singular: "power", plural: "powers"},
  {singular: "praise", plural: "praises"},
  {singular: "present", plural: "presents"},
  {singular: "president", plural: "presidents"},
  {singular: "press", plural: "presses"},
  {singular: "pressure", plural: "pressures"},
  {singular: "price", plural: "prices"},
  {singular: "prison", plural: "prisons"},
  {singular: "private", plural: "privates"},
  {singular: "prize", plural: "prizes"},
  {singular: "problem", plural: "problems"},
  {singular: "process", plural: "processes"},
  {singular: "profession", plural: "professions"},
  {singular: "professor", plural: "professors"},
  {singular: "profit", plural: "profits"},
  {singular: "program", plural: "programs"},
  {singular: "project", plural: "projects"},
  {singular: "property", plural: "properties"},
  {singular: "protest", plural: "protests"},
  {singular: "publication", plural: "publications"},
  {singular: "pull", plural: "pulls"},
  {singular: "pump", plural: "pumps"},
  {singular: "purchase", plural: "purchases"},
  {singular: "purpose", plural: "purposes"},
  {singular: "push", plural: "pushes"},
  {singular: "quality", plural: "qualities"},
  {singular: "question", plural: "questions"},
  {singular: "race", plural: "races"},
  {singular: "radio", plural: "radios"},
  {singular: "raid", plural: "raids"},
  {singular: "railroad", plural: "railroads"},
  {singular: "rain", plural: "rains"},
  {singular: "raise", plural: "raises"},
  {singular: "rate", plural: "rates"},
  {singular: "reach", plural: "reaches"},
  {singular: "reason", plural: "reasons"},
  {singular: "rebel", plural: "rebels"},
  {singular: "recession", plural: "recessions"},
  {singular: "record", plural: "records"},
  {singular: "reform", plural: "reforms"},
  {singular: "refugee", plural: "refugees"},
  {singular: "regret", plural: "regrets"},
  {singular: "reject", plural: "rejects"},
  {singular: "relation", plural: "relations"},
  {singular: "release", plural: "releases"},
  {singular: "religion", plural: "religions"},
  {singular: "repeat", plural: "repeats"},
  {singular: "report", plural: "reports"},
  {singular: "request", plural: "requests"},
  {singular: "rescue", plural: "rescues"},
  {singular: "resolution", plural: "resolutions"},
  {singular: "resource", plural: "resources"},
  {singular: "rest", plural: "rests"},
  {singular: "result", plural: "results"},
  {singular: "revolt", plural: "revolts"},
  {singular: "rich", plural: "riches"},
  {singular: "ride", plural: "rides"},
  {singular: "right", plural: "rights"},
  {singular: "riot", plural: "riots"},
  {singular: "risk", plural: "risks"},
  {singular: "river", plural: "rivers"},
  {singular: "road", plural: "roads"},
  {singular: "rock", plural: "rocks"},
  {singular: "rocket", plural: "rockets"},
  {singular: "roll", plural: "rolls"},
  {singular: "room", plural: "rooms"},
  {singular: "root", plural: "roots"},
  {singular: "rope", plural: "ropes"},
  {singular: "rough", plural: "roughs"},
  {singular: "round", plural: "rounds"},
  {singular: "rub", plural: "rubs"},
  {singular: "ruin", plural: "ruins"},
  {singular: "rule", plural: "rules"},
  {singular: "run", plural: "runs"},
  {singular: "sabotage", plural: "sabotages"},
  {singular: "sacrifice", plural: "sacrifices"},
  {singular: "safe", plural: "safes"},
  {singular: "sail", plural: "sails"},
  {singular: "sailor", plural: "sailors"},
  {singular: "salt", plural: "salts"},
  {singular: "sand", plural: "sands"},
  {singular: "satellite", plural: "satellites"},
  {singular: "say", plural: "says"},
  {singular: "school", plural: "schools"},
  {singular: "science", plural: "sciences"},
  {singular: "sea", plural: "seas"},
  {singular: "search", plural: "searches"},
  {singular: "season", plural: "seasons"},
  {singular: "seat", plural: "seats"},
  {singular: "second", plural: "seconds"},
  {singular: "secret", plural: "secrets"},
  {singular: "security", plural: "securities"},
  {singular: "seed", plural: "seeds"},
  {singular: "self", plural: "selves"},
  {singular: "sense", plural: "senses"},
  {singular: "sentence", plural: "sentences"},
  {singular: "series", plural: "series"},
  {singular: "service", plural: "services"},
  {singular: "set", plural: "sets"},
  {singular: "sex", plural: "sexes"},
  {singular: "shake", plural: "shakes"},
  {singular: "shape", plural: "shapes"},
  {singular: "share", plural: "shares"},
  {singular: "sheep", plural: "sheeps"},
  {singular: "shell", plural: "shells"},
  {singular: "shelter", plural: "shelters"},
  {singular: "shine", plural: "shines"},
  {singular: "ship", plural: "ships"},
  {singular: "shock", plural: "shocks"},
  {singular: "shoe", plural: "shoes"},
  {singular: "shoot", plural: "shoots"},
  {singular: "short", plural: "shorts"},
  {singular: "shout", plural: "shouts"},
  {singular: "show", plural: "shows"},
  {singular: "sickness", plural: "sicknesses"},
  {singular: "side", plural: "sides"},
  {singular: "sign", plural: "signs"},
  {singular: "signal", plural: "signals"},
  {singular: "silence", plural: "silences"},
  {singular: "silver", plural: "silvers"},
  {singular: "sink", plural: "sinks"},
  {singular: "sister", plural: "sisters"},
  {singular: "situation", plural: "situations"},
  {singular: "size", plural: "sizes"},
  {singular: "skeleton", plural: "skeletons"},
  {singular: "skill", plural: "skills"},
  {singular: "skin", plural: "skins"},
  {singular: "sky", plural: "skies"},
  {singular: "slave", plural: "slaves"},
  {singular: "sleep", plural: "sleeps"},
  {singular: "slide", plural: "slides"},
  {singular: "smell", plural: "smells"},
  {singular: "smoke", plural: "smokes"},
  {singular: "snow", plural: "snows"},
  {singular: "social", plural: "socials"},
  {singular: "soldier", plural: "soldiers"},
  {singular: "solid", plural: "solids"},
  {singular: "son", plural: "sons"},
  {singular: "sort", plural: "sorts"},
  {singular: "sound", plural: "sounds"},
  {singular: "south", plural: "souths"},
  {singular: "space", plural: "spaces"},
  {singular: "special", plural: "specials"},
  {singular: "speech", plural: "speeches"},
  {singular: "speed", plural: "speeds"},
  {singular: "spend", plural: "spends"},
  {singular: "spill", plural: "spills"},
  {singular: "spirit", plural: "spirits"},
  {singular: "split", plural: "splits"},
  {singular: "sport", plural: "sports"},
  {singular: "spread", plural: "spreads"},
  {singular: "spring", plural: "springs"},
  {singular: "spy", plural: "spies"},
  {singular: "square", plural: "squares"},
  {singular: "stab", plural: "stabs"},
  {singular: "stand", plural: "stands"},
  {singular: "star", plural: "stars"},
  {singular: "start", plural: "starts"},
  {singular: "state", plural: "states"},
  {singular: "station", plural: "stations"},
  {singular: "statue", plural: "statues"},
  {singular: "stay", plural: "stays"},
  {singular: "steal", plural: "steals"},
  {singular: "steam", plural: "steams"},
  {singular: "steel", plural: "steels"},
  {singular: "step", plural: "steps"},
  {singular: "stick", plural: "sticks"},
  {singular: "still", plural: "stills"},
  {singular: "stone", plural: "stones"},
  {singular: "stop", plural: "stops"},
  {singular: "store", plural: "stores"},
  {singular: "storm", plural: "storms"},
  {singular: "story", plural: "stories"},
  {singular: "stove", plural: "stoves"},
  {singular: "street", plural: "streets"},
  {singular: "stretch", plural: "stretches"},
  {singular: "strike", plural: "strikes"},
  {singular: "structure", plural: "structures"},
  {singular: "struggle", plural: "struggles"},
  {singular: "study", plural: "studies"},
  {singular: "subject", plural: "subjects"},
  {singular: "submarine", plural: "submarines"},
  {singular: "substance", plural: "substances"},
  {singular: "substitute", plural: "substitutes"},
  {singular: "sugar", plural: "sugars"},
  {singular: "summer", plural: "summers"},
  {singular: "sun", plural: "suns"},
  {singular: "supply", plural: "supplies"},
  {singular: "support", plural: "supports"},
  {singular: "surface", plural: "surfaces"},
  {singular: "surplus", plural: "surpluses"},
  {singular: "surprise", plural: "surprises"},
  {singular: "surrender", plural: "surrenders"},
  {singular: "suspect", plural: "suspects"},
  {singular: "swallow", plural: "swallows"},
  {singular: "swim", plural: "swims"},
  {singular: "sympathy", plural: "sympathies"},
  {singular: "system", plural: "systems"},
  {singular: "take", plural: "takes"},
  {singular: "talk", plural: "talks"},
  {singular: "tank", plural: "tanks"},
  {singular: "target", plural: "targets"},
  {singular: "taste", plural: "tastes"},
  {singular: "tax", plural: "taxes"},
  {singular: "tea", plural: "teas"},
  {singular: "team", plural: "teams"},
  {singular: "tear", plural: "tears"},
  {singular: "technology", plural: "technologies"},
  {singular: "telephone", plural: "telephones"},
  {singular: "telescope", plural: "telescopes"},
  {singular: "television", plural: "televisions"},
  {singular: "tell", plural: "tells"},
  {singular: "temperature", plural: "temperatures"},
  {singular: "tense", plural: "tenses"},
  {singular: "term", plural: "terms"},
  {singular: "territory", plural: "territories"},
  {singular: "terror", plural: "terrors"},
  {singular: "terrorist", plural: "terrorists"},
  {singular: "test", plural: "tests"},
  {singular: "theater", plural: "theaters"},
  {singular: "theory", plural: "theories"},
  {singular: "thing", plural: "things"},
  {singular: "third", plural: "thirds"},
  {singular: "throw", plural: "throws"},
  {singular: "tie", plural: "ties"},
  {singular: "time", plural: "times"},
  {singular: "tool", plural: "tools"},
  {singular: "top", plural: "tops"},
  {singular: "torture", plural: "tortures"},
  {singular: "total", plural: "totals"},
  {singular: "touch", plural: "touches"},
  {singular: "town", plural: "towns"},
  {singular: "trade", plural: "trades"},
  {singular: "tradition", plural: "traditions"},
  {singular: "train", plural: "trains"},
  {singular: "transportation", plural: "transportations"},
  {singular: "trap", plural: "traps"},
  {singular: "travel", plural: "travels"},
  {singular: "treason", plural: "treasons"},
  {singular: "treasure", plural: "treasures"},
  {singular: "treat", plural: "treats"},
  {singular: "treatment", plural: "treatments"},
  {singular: "treaty", plural: "treaties"},
  {singular: "tree", plural: "trees"},
  {singular: "trial", plural: "trials"},
  {singular: "tribe", plural: "tribes"},
  {singular: "trick", plural: "tricks"},
  {singular: "trip", plural: "trips"},
  {singular: "troop", plural: "troops"},
  {singular: "trouble", plural: "troubles"},
  {singular: "truck", plural: "trucks"},
  {singular: "trust", plural: "trusts"},
  {singular: "try", plural: "tries"},
  {singular: "tube", plural: "tubes"},
  {singular: "turn", plural: "turns"},
  {singular: "universe", plural: "universes"},
  {singular: "university", plural: "universities"},
  {singular: "urge", plural: "urges"},
  {singular: "use", plural: "uses"},
  {singular: "valley", plural: "valleys"},
  {singular: "value", plural: "values"},
  {singular: "vegetable", plural: "vegetables"},
  {singular: "vehicle", plural: "vehicles"},
  {singular: "version", plural: "versions"},
  {singular: "veto", plural: "vetoes"},
  {singular: "victim", plural: "victims"},
  {singular: "victory", plural: "victories"},
  {singular: "village", plural: "villages"},
  {singular: "visit", plural: "visits"},
  {singular: "voice", plural: "voices"},
  {singular: "volcano", plural: "volcanoes"},
  {singular: "vote", plural: "votes"},
  {singular: "wage", plural: "wages"},
  {singular: "wait", plural: "waits"},
  {singular: "walk", plural: "walks"},
  {singular: "wall", plural: "walls"},
  {singular: "want", plural: "wants"},
  {singular: "war", plural: "wars"},
  {singular: "wash", plural: "washes"},
  {singular: "waste", plural: "wastes"},
  {singular: "watch", plural: "watches"},
  {singular: "water", plural: "waters"},
  {singular: "wave", plural: "waves"},
  {singular: "way", plural: "ways"},
  {singular: "weapon", plural: "weapons"},
  {singular: "week", plural: "weeks"},
  {singular: "wheat", plural: "wheats"},
  {singular: "wheel", plural: "wheels"},
  {singular: "whole", plural: "wholes"},
  {singular: "wife", plural: "wives"},
  {singular: "will", plural: "wills"},
  {singular: "win", plural: "wins"},
  {singular: "wind", plural: "winds"},
  {singular: "window", plural: "windows"},
  {singular: "winter", plural: "winters"},
  {singular: "wire", plural: "wires"},
  {singular: "wish", plural: "wishes"},
  {singular: "woman", plural: "women"},
  {singular: "wonder", plural: "wonders"},
  {singular: "wood", plural: "woods"},
  {singular: "word", plural: "words"},
  {singular: "work", plural: "works"},
  {singular: "world", plural: "worlds"},
  {singular: "worry", plural: "worries"},
  {singular: "wound", plural: "wounds"},
  {singular: "wreck", plural: "wrecks"},
  {singular: "wreckage", plural: "wreckages"},
  {singular: "wrong", plural: "wrongs"},
  {singular: "year", plural: "years"},
  {singular: "zero", plural: "zeroes"},
  {singular: "zoo", plural: "zoos"},
  {singular: "atom", plural: "atoms"},
  {singular: "bacterium", plural: "bacteria"},
  {singular: "cell", plural: "cells"},
  {singular: "chromosome", plural: "chromosomes"},
  {singular: "compound", plural: "compounds"},
  {singular: "electron", plural: "electrons"},
  {singular: "element", plural: "elements"},
  {singular: "enzyme", plural: "enzymes"},
  {singular: "fetus", plural: "fetuses"},
  {singular: "fission", plural: "fissions"},
  {singular: "fusion", plural: "fusions"},
  {singular: "gene", plural: "genes"},
  {singular: "gravity", plural: "gravities"},
  {singular: "image", plural: "images"},
  {singular: "laser", plural: "lasers"},
  {singular: "magnet", plural: "magnets"},
  {singular: "molecule", plural: "molecules"},
  {singular: "nerve", plural: "nerves"},
  {singular: "nucleus", plural: "nuclei"},
  {singular: "nutrient", plural: "nutrients"},
  {singular: "organ", plural: "organs"},
  {singular: "organism", plural: "organisms"},
  {singular: "particle", plural: "particles"},
  {singular: "protein", plural: "proteins"},
  {singular: "robot", plural: "robots"},
  {singular: "tissue", plural: "tissues"},
  {singular: "virus", plural: "viruses"},
  {singular: "x-ray", plural: "x-rays"},
  {singular: "heart", plural: "hearts"},
  {singular: "intestine", plural: "intestines"},
  {singular: "kidney", plural: "kidneys"},
  {singular: "liver", plural: "livers"},
  {singular: "lung", plural: "lungs"},
  {singular: "prostate", plural: "prostates"},
  {singular: "stomach", plural: "stomachs"},
  {singular: "uterus", plural: "uteruses"}
];

const NOTCOUNT_NOUNS_ALL = [
  "aggression",
  "agriculture",
  "aid",
  "air",
  "alcohol",
  "ammunition",
  "anarchy",
  "anger",
  "archeology",
  "arms",
  "ash",
  "ashes",
  "assist",
  "astronomy",
  "atmosphere",
  "autumn",
  "biology",
  "blame",
  "blood",
  "bread",
  "calm",
  "capitalism",
  "cold",
  "congress",
  "corn",
  "depression",
  "dirt",
  "dust",
  "earth",
  "ease",
  "ecology",
  "education",
  "electricity",
  "energy",
  "equipment",
  "evidence",
  "exile",
  "fast",
  "feed",
  "fit",
  "fog",
  "freeze",
  "fun",
  "future",
  "gold",
  "grass",
  "hatred",
  "headquarters",
  "health",
  "heat",
  "help",
  "hunger",
  "hurry",
  "ice",
  "inflation",
  "information",
  "ingelligence",
  "knowledge",
  "labor",
  "lack",
  "lightning",
  "literature",
  "luck",
  "mail",
  "mathematics",
  "mercy",
  "middle",
  "milk",
  "money",
  "music",
  "must",
  "nature",
  "news",
  "noon",
  "north",
  "nowhere",
  "physics",
  "plenty",
  "police",
  "politics",
  "poverty",
  "produce",
  "progress",
  "propaganda",
  "public",
  "quiet",
  "radar",
  "radiation",
  "refuse",
  "remains",
  "research",
  "rice",
  "senate",
  "sex",
  "soil",
  "subversion",
  "today",
  "tomorrow",
  "tonight",
  "traffic",
  "truce",
  "violence",
  "wealth",
  "wear",
  "weather",
  "welcome",
  "west",
  "worth",
  "yesterday",
];

const ADVERBS = [
  "afterward",
  "again",
  "almost",
  "alone",
  "along",
  "already",
  "also",
  "always",
  "away",
  "back",
  "badly",
  "before",
  "behind",
  "below",
  "best",
  "better",
  "by",
  "clearly",
  "deeply",
  "differently",
  "directly",
  "down",
  "early",
  "easy",
  "enough",
  "especially",
  "evenly",
  "extra",
  "fairly",
  "falsely",
  "far",
  "finely",
  "first",
  "flatly",
  "forward",
  "freely",
  "freshly",
  "hard",
  "here",
  "high",
  "home",
  "instead",
  "justly",
  "lastly",
  "late",
  "left",
  "less",
  "lightly",
  "little",
  "lively",
  "locally",
  "long",
  "low",
  "more",
  "near",
  "never",
  "nicely",
  "north",
  "now",
  "nowhere",
  "off",
  "often",
  "on",
  "once",
  "only",
  "out",
  "over",
  "past",
  "plenty",
  "probably",
  "quickly",
  "right",
  "second",
  "short",
  "some",
  "soon",
  "south",
  "still",
  "straight",
  "strongly",
  "surely",
  "there",
  "thickly",
  "thinly",
  "through",
  "today",
  "together",
  "tomorrow",
  "tonight",
  "true",
  "under",
  "up",
  "well",
  "west",
  "wide",
  "worse",
  "yesterday",
];

const CONJUNCTIONS = [
  // Words that are part of VoA, and considered conjunctions by the dictionary, but I exclude
  // because I consider them poor conjunctions in test phrases:
  //   both, either, for, how, neither, not, now, only, than, that
  "after",
  "although",
  "and",
  "as",
  "because",
  "before",
  "but",
  "except",
  "however",
  "if",
  "once",
  "or",
  "since",
  "so",
  "unless",
  "until",
  "when",
  "whereas",
  "while",
  "yet",
];

// https://en.wikipedia.org/wiki/Uses_of_English_verb_forms#Tenses,_aspects_and_moods
interface Verb {
  i: string; // infinitive

  // https://en.wikipedia.org/wiki/Grammatical_aspect#English
  // All verbs must be conjugated for count nouns.
  presentSimple: {
    s: string; // singular
    p: string; // plural
  },
  pastSimple: {
    s: string; // singular
    p: string; // plural
  },
}

const VERBS_FULL: Verb[] = [
  { // VoA
    i: "able",
    presentSimple: {
      s: "is able",
      p: "are able",
    },
    pastSimple: {
      s: "was able",
      p: "were able",
    },
  },
  { // VoA
    i: "accept",
    presentSimple: {
      s: "accepts",
      p: "accept",
    },
    pastSimple: {
      s: "accepted",
      p: "accepted",
    },
  },
  { // VoA
    i: "accuse",
    presentSimple: {
      s: "accuses",
      p: "accuse",
    },
    pastSimple: {
      s: "accused",
      p: "accused",
    },
  },
  { // VoA
    i: "act",
    presentSimple: {
      s: "acts",
      p: "act",
    },
    pastSimple: {
      s: "acted",
      p: "acted",
    },
  },
  { // VoA
    i: "add",
    presentSimple: {
      s: "adds",
      p: "add",
    },
    pastSimple: {
      s: "added",
      p: "added",
    },
  },
  { // VoA
    i: "admit",
    presentSimple: {
      s: "admits",
      p: "admit",
    },
    pastSimple: {
      s: "admitted",
      p: "admitted",
    },
  },
  { // VoA
    i: "advise",
    presentSimple: {
      s: "advises",
      p: "advise",
    },
    pastSimple: {
      s: "advised",
      p: "advised",
    },
  },
  { // VoA
    i: "affect",
    presentSimple: {
      s: "affects",
      p: "affect",
    },
    pastSimple: {
      s: "affected",
      p: "affected",
    },
  },
  { // VoA
    i: "age",
    presentSimple: {
      s: "ages",
      p: "age",
    },
    pastSimple: {
      s: "aged",
      p: "aged",
    },
  },
  { // VoA
    i: "agree",
    presentSimple: {
      s: "agrees",
      p: "agree",
    },
    pastSimple: {
      s: "agreed",
      p: "agreed",
    },
  },
  { // VoA
    i: "aid",
    presentSimple: {
      s: "aids",
      p: "aid",
    },
    pastSimple: {
      s: "aided",
      p: "aided",
    },
  },
  { // VoA
    i: "aim",
    presentSimple: {
      s: "aims",
      p: "aim",
    },
    pastSimple: {
      s: "aimed",
      p: "aimed",
    },
  },
  { // VoA
    i: "air",
    presentSimple: {
      s: "airs",
      p: "air",
    },
    pastSimple: {
      s: "aired",
      p: "aired",
    },
  },
  { // VoA
    i: "ally",
    presentSimple: {
      s: "allies",
      p: "ally",
    },
    pastSimple: {
      s: "allied",
      p: "allied",
    },
  },
  { // VoA
    i: "amend",
    presentSimple: {
      s: "amends",
      p: "amend",
    },
    pastSimple: {
      s: "amended",
      p: "amended",
    },
  },
  { // VoA
    i: "anger",
    presentSimple: {
      s: "angers",
      p: "anger",
    },
    pastSimple: {
      s: "angered",
      p: "angered",
    },
  },
  { // VoA
    i: "announce",
    presentSimple: {
      s: "announces",
      p: "announce",
    },
    pastSimple: {
      s: "announced",
      p: "announced",
    },
  },
  { // VoA
    i: "answer",
    presentSimple: {
      s: "answers",
      p: "answer",
    },
    pastSimple: {
      s: "answered",
      p: "answered",
    },
  },
  { // VoA
    i: "apologize",
    presentSimple: {
      s: "apologizes",
      p: "apologize",
    },
    pastSimple: {
      s: "apologized",
      p: "apologized",
    },
  },
  { // VoA
    i: "appeal",
    presentSimple: {
      s: "appeals",
      p: "appeal",
    },
    pastSimple: {
      s: "appealed",
      p: "appealed",
    },
  },
  { // VoA
    i: "appear",
    presentSimple: {
      s: "appears",
      p: "appear",
    },
    pastSimple: {
      s: "appeared",
      p: "appeared",
    },
  },
  { // VoA
    i: "appoint",
    presentSimple: {
      s: "appoints",
      p: "appoint",
    },
    pastSimple: {
      s: "appointed",
      p: "appointed",
    },
  },
  { // VoA
    i: "approve",
    presentSimple: {
      s: "approves",
      p: "approve",
    },
    pastSimple: {
      s: "approved",
      p: "approved",
    },
  },
  { // VoA
    i: "argue",
    presentSimple: {
      s: "argues",
      p: "argue",
    },
    pastSimple: {
      s: "argued",
      p: "argued",
    },
  },
  { // VoA
    i: "arrest",
    presentSimple: {
      s: "arrests",
      p: "arrest",
    },
    pastSimple: {
      s: "arrested",
      p: "arrested",
    },
  },
  { // VoA
    i: "arrive",
    presentSimple: {
      s: "arrives",
      p: "arrive",
    },
    pastSimple: {
      s: "arrived",
      p: "arrived",
    },
  },
  { // VoA
    i: "ask",
    presentSimple: {
      s: "asks",
      p: "ask",
    },
    pastSimple: {
      s: "asked",
      p: "asked",
    },
  },
  { // VoA
    i: "assist",
    presentSimple: {
      s: "assists",
      p: "assist",
    },
    pastSimple: {
      s: "assisted",
      p: "assisted",
    },
  },
  { // VoA
    i: "attach",
    presentSimple: {
      s: "attaches",
      p: "attach",
    },
    pastSimple: {
      s: "attached",
      p: "attached",
    },
  },
  { // VoA
    i: "attack",
    presentSimple: {
      s: "attacks",
      p: "attack",
    },
    pastSimple: {
      s: "attacked",
      p: "attacked",
    },
  },
  { // VoA
    i: "attempt",
    presentSimple: {
      s: "attempts",
      p: "attempt",
    },
    pastSimple: {
      s: "attempted",
      p: "attempted",
    },
  },
  { // VoA
    i: "attend",
    presentSimple: {
      s: "attends",
      p: "attend",
    },
    pastSimple: {
      s: "attended",
      p: "attended",
    },
  },
  { // VoA
    i: "average",
    presentSimple: {
      s: "averages",
      p: "average",
    },
    pastSimple: {
      s: "averaged",
      p: "averaged",
    },
  },
  { // VoA
    i: "avoid",
    presentSimple: {
      s: "avoids",
      p: "avoid",
    },
    pastSimple: {
      s: "avoided",
      p: "avoided",
    },
  },
  { // VoA
    i: "award",
    presentSimple: {
      s: "awards",
      p: "award",
    },
    pastSimple: {
      s: "awarded",
      p: "awarded",
    },
  },
  { // VoA
    i: "balance",
    presentSimple: {
      s: "balances",
      p: "balance",
    },
    pastSimple: {
      s: "balanced",
      p: "balanced",
    },
  },
  { // VoA
    i: "ban",
    presentSimple: {
      s: "bans",
      p: "ban",
    },
    pastSimple: {
      s: "banned",
      p: "banned",
    },
  },
  { // VoA
    i: "bank",
    presentSimple: {
      s: "banks",
      p: "bank",
    },
    pastSimple: {
      s: "banked",
      p: "banked",
    },
  },
  { // VoA
    i: "bar",
    presentSimple: {
      s: "bars",
      p: "bar",
    },
    pastSimple: {
      s: "barred",
      p: "barred",
    },
  },
  { // VoA
    i: "base",
    presentSimple: {
      s: "bases",
      p: "base",
    },
    pastSimple: {
      s: "based",
      p: "based",
    },
  },
  { // VoA
    i: "battle",
    presentSimple: {
      s: "battles",
      p: "battle",
    },
    pastSimple: {
      s: "battled",
      p: "battled",
    },
  },
  { // VoA
    i: "be",
    presentSimple: {
      s: "is",
      p: "are",
    },
    pastSimple: {
      s: "was",
      p: "were",
    },
  },
  { // VoA
    i: "beat",
    presentSimple: {
      s: "beats",
      p: "beat",
    },
    pastSimple: {
      s: "beat",
      p: "beat",
    },
  },
  { // VoA
    i: "become",
    presentSimple: {
      s: "becomes",
      p: "become",
    },
    pastSimple: {
      s: "became",
      p: "became",
    },
  },
  { // VoA
    i: "begin",
    presentSimple: {
      s: "begins",
      p: "begin",
    },
    pastSimple: {
      s: "began",
      p: "began",
    },
  },
  { // VoA
    i: "believe",
    presentSimple: {
      s: "believes",
      p: "believe",
    },
    pastSimple: {
      s: "believed",
      p: "believed",
    },
  },
  { // VoA
    i: "belong",
    presentSimple: {
      s: "belongs",
      p: "belong",
    },
    pastSimple: {
      s: "belonged",
      p: "belonged",
    },
  },
  { // VoA
    i: "best",
    presentSimple: {
      s: "bests",
      p: "best",
    },
    pastSimple: {
      s: "bested",
      p: "bested",
    },
  },
  { // VoA
    i: "betray",
    presentSimple: {
      s: "betrays",
      p: "betray",
    },
    pastSimple: {
      s: "betrayed",
      p: "betrayed",
    },
  },
  { // VoA
    i: "bill",
    presentSimple: {
      s: "bills",
      p: "bill",
    },
    pastSimple: {
      s: "billed",
      p: "billed",
    },
  },
  { // VoA
    i: "bite",
    presentSimple: {
      s: "bites",
      p: "bite",
    },
    pastSimple: {
      s: "bit",
      p: "bit",
    },
  },
  { // VoA
    i: "blame",
    presentSimple: {
      s: "blames",
      p: "blame",
    },
    pastSimple: {
      s: "blamed",
      p: "blamed",
    },
  },
  { // VoA
    i: "bleed",
    presentSimple: {
      s: "bleeds",
      p: "bleed",
    },
    pastSimple: {
      s: "bled",
      p: "bled",
    },
  },
  { // VoA
    i: "blind",
    presentSimple: {
      s: "blinds",
      p: "blind",
    },
    pastSimple: {
      s: "blinded",
      p: "blinded",
    },
  },
  { // VoA
    i: "block",
    presentSimple: {
      s: "blocks",
      p: "block",
    },
    pastSimple: {
      s: "blocked",
      p: "blocked",
    },
  },
  { // VoA
    i: "blow",
    presentSimple: {
      s: "blows",
      p: "blow",
    },
    pastSimple: {
      s: "blew",
      p: "blew",
    },
  },
  { // VoA
    i: "boil",
    presentSimple: {
      s: "boils",
      p: "boil",
    },
    pastSimple: {
      s: "boiled",
      p: "boiled",
    },
  },
  { // VoA
    i: "bomb",
    presentSimple: {
      s: "bombs",
      p: "bomb",
    },
    pastSimple: {
      s: "bombed",
      p: "bombed",
    },
  },
  { // VoA
    i: "book",
    presentSimple: {
      s: "books",
      p: "book",
    },
    pastSimple: {
      s: "booked",
      p: "booked",
    },
  },
  { // VoA
    i: "border",
    presentSimple: {
      s: "borders",
      p: "border",
    },
    pastSimple: {
      s: "bordered",
      p: "bordered",
    },
  },
  { // VoA
    i: "borrow",
    presentSimple: {
      s: "borrows",
      p: "borrow",
    },
    pastSimple: {
      s: "borrowed",
      p: "borrowed",
    },
  },
  { // VoA
    i: "bottle",
    presentSimple: {
      s: "bottles",
      p: "bottle",
    },
    pastSimple: {
      s: "bottled",
      p: "bottled",
    },
  },
  { // VoA
    i: "box",
    presentSimple: {
      s: "boxes",
      p: "box",
    },
    pastSimple: {
      s: "boxed",
      p: "boxed",
    },
  },
  { // VoA
    i: "boycott",
    presentSimple: {
      s: "boycotts",
      p: "boycott",
    },
    pastSimple: {
      s: "boycotted",
      p: "boycotted",
    },
  },
  { // VoA
    i: "brave",
    presentSimple: {
      s: "braves",
      p: "brave",
    },
    pastSimple: {
      s: "braved",
      p: "braved",
    },
  },
  { // VoA
    i: "break",
    presentSimple: {
      s: "breaks",
      p: "break",
    },
    pastSimple: {
      s: "broke",
      p: "broke",
    },
  },
  { // VoA
    i: "breathe",
    presentSimple: {
      s: "breathes",
      p: "breathe",
    },
    pastSimple: {
      s: "breathed",
      p: "breathed",
    },
  },
  { // VoA
    i: "bridge",
    presentSimple: {
      s: "bridges",
      p: "bridge",
    },
    pastSimple: {
      s: "bridged",
      p: "bridged",
    },
  },
  { // VoA
    i: "brief",
    presentSimple: {
      s: "briefs",
      p: "brief",
    },
    pastSimple: {
      s: "briefed",
      p: "briefed",
    },
  },
  { // VoA
    i: "bring",
    presentSimple: {
      s: "brings",
      p: "bring",
    },
    pastSimple: {
      s: "brought",
      p: "brought",
    },
  },
  { // VoA
    i: "broadcast",
    presentSimple: {
      s: "broadcasts",
      p: "broadcast",
    },
    pastSimple: {
      s: "broadcast",
      p: "broadcast",
    },
  },
  { // VoA
    i: "brown",
    presentSimple: {
      s: "browns",
      p: "brown",
    },
    pastSimple: {
      s: "browned",
      p: "browned",
    },
  },
  { // VoA
    i: "build",
    presentSimple: {
      s: "builds",
      p: "build",
    },
    pastSimple: {
      s: "built",
      p: "built",
    },
  },
  { // VoA
    i: "burn",
    presentSimple: {
      s: "burns",
      p: "burn",
    },
    pastSimple: {
      s: "burned",
      p: "burned",
    },
  },
  { // VoA
    i: "burst",
    presentSimple: {
      s: "bursts",
      p: "burst",
    },
    pastSimple: {
      s: "burst",
      p: "burst",
    },
  },
  { // VoA
    i: "bury",
    presentSimple: {
      s: "buries",
      p: "bury",
    },
    pastSimple: {
      s: "buried",
      p: "buried",
    },
  },
  { // VoA
    i: "bus",
    presentSimple: {
      s: "buses",
      p: "bus",
    },
    pastSimple: {
      s: "bused",
      p: "bused",
    },
  },
  { // VoA
    i: "buy",
    presentSimple: {
      s: "buys",
      p: "buy",
    },
    pastSimple: {
      s: "bought",
      p: "bought",
    },
  },
  { // VoA
    i: "call",
    presentSimple: {
      s: "calls",
      p: "call",
    },
    pastSimple: {
      s: "called",
      p: "called",
    },
  },
  { // VoA
    i: "calm",
    presentSimple: {
      s: "calms",
      p: "calm",
    },
    pastSimple: {
      s: "calmed",
      p: "calmed",
    },
  },
  { // VoA
    i: "camp",
    presentSimple: {
      s: "camps",
      p: "camp",
    },
    pastSimple: {
      s: "camped",
      p: "camped",
    },
  },
  { // VoA
    i: "campaign",
    presentSimple: {
      s: "campaigns",
      p: "campaign",
    },
    pastSimple: {
      s: "campaigned",
      p: "campaigned",
    },
  },
  { // VoA
    i: "cancel",
    presentSimple: {
      s: "cancels",
      p: "cancel",
    },
    pastSimple: {
      s: "canceled",
      p: "canceled",
    },
  },
  { // VoA
    i: "capture",
    presentSimple: {
      s: "captures",
      p: "capture",
    },
    pastSimple: {
      s: "captured",
      p: "captured",
    },
  },
  { // VoA
    i: "care",
    presentSimple: {
      s: "cares",
      p: "care",
    },
    pastSimple: {
      s: "cared",
      p: "cared",
    },
  },
  { // VoA
    i: "carry",
    presentSimple: {
      s: "carries",
      p: "carry",
    },
    pastSimple: {
      s: "carried",
      p: "carried",
    },
  },
  { // VoA
    i: "catch",
    presentSimple: {
      s: "catches",
      p: "catch",
    },
    pastSimple: {
      s: "caught",
      p: "caught",
    },
  },
  { // VoA
    i: "cause",
    presentSimple: {
      s: "causes",
      p: "cause",
    },
    pastSimple: {
      s: "caused",
      p: "caused",
    },
  },
  { // VoA
    i: "celebrate",
    presentSimple: {
      s: "celebrates",
      p: "celebrate",
    },
    pastSimple: {
      s: "celebrated",
      p: "celebrated",
    },
  },
  { // VoA
    i: "center",
    presentSimple: {
      s: "centers",
      p: "center",
    },
    pastSimple: {
      s: "centered",
      p: "centered",
    },
  },
  { // VoA
    i: "chance",
    presentSimple: {
      s: "chances",
      p: "chance",
    },
    pastSimple: {
      s: "chanced",
      p: "chanced",
    },
  },
  { // VoA
    i: "change",
    presentSimple: {
      s: "changes",
      p: "change",
    },
    pastSimple: {
      s: "changed",
      p: "changed",
    },
  },
  { // VoA
    i: "charge",
    presentSimple: {
      s: "charges",
      p: "charge",
    },
    pastSimple: {
      s: "charged",
      p: "charged",
    },
  },
  { // VoA
    i: "chase",
    presentSimple: {
      s: "chases",
      p: "chase",
    },
    pastSimple: {
      s: "chased",
      p: "chased",
    },
  },
  { // VoA
    i: "cheat",
    presentSimple: {
      s: "cheats",
      p: "cheat",
    },
    pastSimple: {
      s: "cheated",
      p: "cheated",
    },
  },
  { // VoA
    i: "cheer",
    presentSimple: {
      s: "cheers",
      p: "cheer",
    },
    pastSimple: {
      s: "cheered",
      p: "cheered",
    },
  },
  { // VoA
    i: "choose",
    presentSimple: {
      s: "chooses",
      p: "choose",
    },
    pastSimple: {
      s: "chose",
      p: "chose",
    },
  },
  { // VoA
    i: "circle",
    presentSimple: {
      s: "circles",
      p: "circle",
    },
    pastSimple: {
      s: "circled",
      p: "circled",
    },
  },
  { // VoA
    i: "claim",
    presentSimple: {
      s: "claims",
      p: "claim",
    },
    pastSimple: {
      s: "claimed",
      p: "claimed",
    },
  },
  { // VoA
    i: "clash",
    presentSimple: {
      s: "clashes",
      p: "clash",
    },
    pastSimple: {
      s: "clashed",
      p: "clashed",
    },
  },
  { // VoA
    i: "clean",
    presentSimple: {
      s: "cleans",
      p: "clean",
    },
    pastSimple: {
      s: "cleaned",
      p: "cleaned",
    },
  },
  { // VoA
    i: "clear",
    presentSimple: {
      s: "clears",
      p: "clear",
    },
    pastSimple: {
      s: "cleared",
      p: "cleared",
    },
  },
  { // VoA
    i: "climb",
    presentSimple: {
      s: "climbs",
      p: "climb",
    },
    pastSimple: {
      s: "climbed",
      p: "climbed",
    },
  },
  { // VoA
    i: "close",
    presentSimple: {
      s: "closes",
      p: "close",
    },
    pastSimple: {
      s: "closed",
      p: "closed",
    },
  },
  { // VoA
    i: "coast",
    presentSimple: {
      s: "coasts",
      p: "coast",
    },
    pastSimple: {
      s: "coasted",
      p: "coasted",
    },
  },
  { // VoA
    i: "collect",
    presentSimple: {
      s: "collects",
      p: "collect",
    },
    pastSimple: {
      s: "collected",
      p: "collected",
    },
  },
  { // VoA
    i: "color",
    presentSimple: {
      s: "colors",
      p: "color",
    },
    pastSimple: {
      s: "colored",
      p: "colored",
    },
  },
  { // VoA
    i: "combine",
    presentSimple: {
      s: "combines",
      p: "combine",
    },
    pastSimple: {
      s: "combined",
      p: "combined",
    },
  },
  { // VoA
    i: "come",
    presentSimple: {
      s: "comes",
      p: "come",
    },
    pastSimple: {
      s: "came",
      p: "came",
    },
  },
  { // VoA
    i: "command",
    presentSimple: {
      s: "commands",
      p: "command",
    },
    pastSimple: {
      s: "commanded",
      p: "commanded",
    },
  },
  { // VoA
    i: "comment",
    presentSimple: {
      s: "comments",
      p: "comment",
    },
    pastSimple: {
      s: "commented",
      p: "commented",
    },
  },
  { // VoA
    i: "communicate",
    presentSimple: {
      s: "communicates",
      p: "communicate",
    },
    pastSimple: {
      s: "communicated",
      p: "communicated",
    },
  },
  { // VoA
    i: "compare",
    presentSimple: {
      s: "compares",
      p: "compare",
    },
    pastSimple: {
      s: "compared",
      p: "compared",
    },
  },
  { // VoA
    i: "compete",
    presentSimple: {
      s: "competes",
      p: "compete",
    },
    pastSimple: {
      s: "competed",
      p: "competed",
    },
  },
  { // VoA
    i: "complete",
    presentSimple: {
      s: "completes",
      p: "complete",
    },
    pastSimple: {
      s: "completed",
      p: "completed",
    },
  },
  { // VoA
    i: "compromise",
    presentSimple: {
      s: "compromises",
      p: "compromise",
    },
    pastSimple: {
      s: "compromised",
      p: "compromised",
    },
  },
  { // VoA
    i: "concern",
    presentSimple: {
      s: "concerns",
      p: "concern",
    },
    pastSimple: {
      s: "concerned",
      p: "concerned",
    },
  },
  { // VoA
    i: "condemn",
    presentSimple: {
      s: "condemns",
      p: "condemn",
    },
    pastSimple: {
      s: "condemned",
      p: "condemned",
    },
  },
  { // VoA
    i: "condition",
    presentSimple: {
      s: "conditions",
      p: "condition",
    },
    pastSimple: {
      s: "conditioned",
      p: "conditioned",
    },
  },
  { // VoA
    i: "confirm",
    presentSimple: {
      s: "confirms",
      p: "confirm",
    },
    pastSimple: {
      s: "confirmed",
      p: "confirmed",
    },
  },
  { // VoA
    i: "congratulate",
    presentSimple: {
      s: "congratulates",
      p: "congratulate",
    },
    pastSimple: {
      s: "congratulated",
      p: "congratulated",
    },
  },
  { // VoA
    i: "connect",
    presentSimple: {
      s: "connects",
      p: "connect",
    },
    pastSimple: {
      s: "connected",
      p: "connected",
    },
  },
  { // VoA
    i: "consider",
    presentSimple: {
      s: "considers",
      p: "consider",
    },
    pastSimple: {
      s: "considered",
      p: "considered",
    },
  },
  { // VoA
    i: "contain",
    presentSimple: {
      s: "contains",
      p: "contain",
    },
    pastSimple: {
      s: "contained",
      p: "contained",
    },
  },
  { // VoA
    i: "continue",
    presentSimple: {
      s: "continues",
      p: "continue",
    },
    pastSimple: {
      s: "continued",
      p: "continued",
    },
  },
  { // VoA
    i: "control",
    presentSimple: {
      s: "controls",
      p: "control",
    },
    pastSimple: {
      s: "controlled",
      p: "controlled",
    },
  },
  { // VoA
    i: "cook",
    presentSimple: {
      s: "cooks",
      p: "cook",
    },
    pastSimple: {
      s: "cooked",
      p: "cooked",
    },
  },
  { // VoA
    i: "cool",
    presentSimple: {
      s: "cools",
      p: "cool",
    },
    pastSimple: {
      s: "cooled",
      p: "cooled",
    },
  },
  { // VoA
    i: "cooperate",
    presentSimple: {
      s: "cooperates",
      p: "cooperate",
    },
    pastSimple: {
      s: "cooperated",
      p: "cooperated",
    },
  },
  { // VoA
    i: "copy",
    presentSimple: {
      s: "copies",
      p: "copy",
    },
    pastSimple: {
      s: "copied",
      p: "copied",
    },
  },
  { // VoA
    i: "correct",
    presentSimple: {
      s: "corrects",
      p: "correct",
    },
    pastSimple: {
      s: "corrected",
      p: "corrected",
    },
  },
  { // VoA
    i: "cost",
    presentSimple: {
      s: "costs",
      p: "cost",
    },
    pastSimple: {
      s: "cost",
      p: "cost",
    },
  },
  { // VoA
    i: "count",
    presentSimple: {
      s: "counts",
      p: "count",
    },
    pastSimple: {
      s: "counted",
      p: "counted",
    },
  },
  { // VoA
    i: "court",
    presentSimple: {
      s: "courts",
      p: "court",
    },
    pastSimple: {
      s: "courted",
      p: "courted",
    },
  },
  { // VoA
    i: "cover",
    presentSimple: {
      s: "covers",
      p: "cover",
    },
    pastSimple: {
      s: "covered",
      p: "covered",
    },
  },
  { // VoA
    i: "crash",
    presentSimple: {
      s: "crashes",
      p: "crash",
    },
    pastSimple: {
      s: "crashed",
      p: "crashed",
    },
  },
  { // VoA
    i: "create",
    presentSimple: {
      s: "creates",
      p: "create",
    },
    pastSimple: {
      s: "created",
      p: "created",
    },
  },
  { // VoA
    i: "credit",
    presentSimple: {
      s: "credits",
      p: "credit",
    },
    pastSimple: {
      s: "credited",
      p: "credited",
    },
  },
  { // VoA
    i: "crew",
    presentSimple: {
      s: "crews",
      p: "crew",
    },
    pastSimple: {
      s: "crewed",
      p: "crewed",
    },
  },
  { // VoA
    i: "criticize",
    presentSimple: {
      s: "criticizes",
      p: "criticize",
    },
    pastSimple: {
      s: "criticized",
      p: "criticized",
    },
  },
  { // VoA
    i: "cross",
    presentSimple: {
      s: "crosses",
      p: "cross",
    },
    pastSimple: {
      s: "crossed",
      p: "crossed",
    },
  },
  { // VoA
    i: "crowd",
    presentSimple: {
      s: "crowds",
      p: "crowd",
    },
    pastSimple: {
      s: "crowded",
      p: "crowded",
    },
  },
  { // VoA
    i: "crush",
    presentSimple: {
      s: "crushes",
      p: "crush",
    },
    pastSimple: {
      s: "crushed",
      p: "crushed",
    },
  },
  { // VoA
    i: "cry",
    presentSimple: {
      s: "cries",
      p: "cry",
    },
    pastSimple: {
      s: "cried",
      p: "cried",
    },
  },
  { // VoA
    i: "culture",
    presentSimple: {
      s: "cultures",
      p: "culture",
    },
    pastSimple: {
      s: "cultured",
      p: "cultured",
    },
  },
  { // VoA
    i: "cure",
    presentSimple: {
      s: "cures",
      p: "cure",
    },
    pastSimple: {
      s: "cured",
      p: "cured",
    },
  },
  { // VoA
    i: "cut",
    presentSimple: {
      s: "cuts",
      p: "cut",
    },
    pastSimple: {
      s: "cut",
      p: "cut",
    },
  },
  { // VoA
    i: "dam",
    presentSimple: {
      s: "dams",
      p: "dam",
    },
    pastSimple: {
      s: "dammed",
      p: "dammed",
    },
  },
  { // VoA
    i: "damage",
    presentSimple: {
      s: "damages",
      p: "damage",
    },
    pastSimple: {
      s: "damaged",
      p: "damaged",
    },
  },
  { // VoA
    i: "dance",
    presentSimple: {
      s: "dances",
      p: "dance",
    },
    pastSimple: {
      s: "danced",
      p: "danced",
    },
  },
  { // VoA
    i: "date",
    presentSimple: {
      s: "dates",
      p: "date",
    },
    pastSimple: {
      s: "dated",
      p: "dated",
    },
  },
  { // VoA
    i: "deal",
    presentSimple: {
      s: "deals",
      p: "deal",
    },
    pastSimple: {
      s: "dealt",
      p: "dealt",
    },
  },
  { // VoA
    i: "debate",
    presentSimple: {
      s: "debates",
      p: "debate",
    },
    pastSimple: {
      s: "debated",
      p: "debated",
    },
  },
  { // VoA
    i: "decide",
    presentSimple: {
      s: "decides",
      p: "decide",
    },
    pastSimple: {
      s: "decided",
      p: "decided",
    },
  },
  { // VoA
    i: "declare",
    presentSimple: {
      s: "declares",
      p: "declare",
    },
    pastSimple: {
      s: "declared",
      p: "declared",
    },
  },
  { // VoA
    i: "decrease",
    presentSimple: {
      s: "decreases",
      p: "decrease",
    },
    pastSimple: {
      s: "decreased",
      p: "decreased",
    },
  },
  { // VoA
    i: "defeat",
    presentSimple: {
      s: "defeats",
      p: "defeat",
    },
    pastSimple: {
      s: "defeated",
      p: "defeated",
    },
  },
  { // VoA
    i: "defend",
    presentSimple: {
      s: "defends",
      p: "defend",
    },
    pastSimple: {
      s: "defended",
      p: "defended",
    },
  },
  { // VoA
    i: "define",
    presentSimple: {
      s: "defines",
      p: "define",
    },
    pastSimple: {
      s: "defined",
      p: "defined",
    },
  },
  { // VoA
    i: "delay",
    presentSimple: {
      s: "delays",
      p: "delay",
    },
    pastSimple: {
      s: "delayed",
      p: "delayed",
    },
  },
  { // VoA
    i: "delegate",
    presentSimple: {
      s: "delegates",
      p: "delegate",
    },
    pastSimple: {
      s: "delegated",
      p: "delegated",
    },
  },
  { // VoA
    i: "demand",
    presentSimple: {
      s: "demands",
      p: "demand",
    },
    pastSimple: {
      s: "demanded",
      p: "demanded",
    },
  },
  { // VoA
    i: "demonstrate",
    presentSimple: {
      s: "demonstrates",
      p: "demonstrate",
    },
    pastSimple: {
      s: "demonstrated",
      p: "demonstrated",
    },
  },
  { // VoA
    i: "denounce",
    presentSimple: {
      s: "denounces",
      p: "denounce",
    },
    pastSimple: {
      s: "denounced",
      p: "denounced",
    },
  },
  { // VoA
    i: "deny",
    presentSimple: {
      s: "denies",
      p: "deny",
    },
    pastSimple: {
      s: "denied",
      p: "denied",
    },
  },
  { // VoA
    i: "depend",
    presentSimple: {
      s: "depends",
      p: "depend",
    },
    pastSimple: {
      s: "depended",
      p: "depended",
    },
  },
  { // VoA
    i: "deplore",
    presentSimple: {
      s: "deplores",
      p: "deplore",
    },
    pastSimple: {
      s: "deplored",
      p: "deplored",
    },
  },
  { // VoA
    i: "deploy",
    presentSimple: {
      s: "deploys",
      p: "deploy",
    },
    pastSimple: {
      s: "deployed",
      p: "deployed",
    },
  },
  { // VoA
    i: "describe",
    presentSimple: {
      s: "describes",
      p: "describe",
    },
    pastSimple: {
      s: "described",
      p: "described",
    },
  },
  { // VoA
    i: "design",
    presentSimple: {
      s: "designs",
      p: "design",
    },
    pastSimple: {
      s: "designed",
      p: "designed",
    },
  },
  { // VoA
    i: "desire",
    presentSimple: {
      s: "desires",
      p: "desire",
    },
    pastSimple: {
      s: "desired",
      p: "desired",
    },
  },
  { // VoA
    i: "destroy",
    presentSimple: {
      s: "destroys",
      p: "destroy",
    },
    pastSimple: {
      s: "destroyed",
      p: "destroyed",
    },
  },
  { // VoA
    i: "detail",
    presentSimple: {
      s: "details",
      p: "detail",
    },
    pastSimple: {
      s: "detailed",
      p: "detailed",
    },
  },
  { // VoA
    i: "develop",
    presentSimple: {
      s: "develops",
      p: "develop",
    },
    pastSimple: {
      s: "developed",
      p: "developed",
    },
  },
  { // VoA
    i: "die",
    presentSimple: {
      s: "dies",
      p: "die",
    },
    pastSimple: {
      s: "died",
      p: "died",
    },
  },
  { // VoA
    i: "diet",
    presentSimple: {
      s: "diets",
      p: "diet",
    },
    pastSimple: {
      s: "dieted",
      p: "dieted",
    },
  },
  { // VoA
    i: "dig",
    presentSimple: {
      s: "digs",
      p: "dig",
    },
    pastSimple: {
      s: "dug",
      p: "dug",
    },
  },
  { // VoA
    i: "direct",
    presentSimple: {
      s: "directs",
      p: "direct",
    },
    pastSimple: {
      s: "directed",
      p: "directed",
    },
  },
  { // VoA
    i: "disappear",
    presentSimple: {
      s: "disappears",
      p: "disappear",
    },
    pastSimple: {
      s: "disappeared",
      p: "disappeared",
    },
  },
  { // VoA
    i: "disarm",
    presentSimple: {
      s: "disarms",
      p: "disarm",
    },
    pastSimple: {
      s: "disarmed",
      p: "disarmed",
    },
  },
  { // VoA
    i: "discover",
    presentSimple: {
      s: "discovers",
      p: "discover",
    },
    pastSimple: {
      s: "discovered",
      p: "discovered",
    },
  },
  { // VoA
    i: "discuss",
    presentSimple: {
      s: "discusses",
      p: "discuss",
    },
    pastSimple: {
      s: "discussed",
      p: "discussed",
    },
  },
  { // VoA
    i: "dismiss",
    presentSimple: {
      s: "dismisses",
      p: "dismiss",
    },
    pastSimple: {
      s: "dismissed",
      p: "dismissed",
    },
  },
  { // VoA
    i: "dispute",
    presentSimple: {
      s: "disputes",
      p: "dispute",
    },
    pastSimple: {
      s: "disputed",
      p: "disputed",
    },
  },
  { // VoA
    i: "distance",
    presentSimple: {
      s: "distances",
      p: "distance",
    },
    pastSimple: {
      s: "distanced",
      p: "distanced",
    },
  },
  { // VoA
    i: "dive",
    presentSimple: {
      s: "dives",
      p: "dive",
    },
    pastSimple: {
      s: "dove",
      p: "dove",
    },
  },
  { // VoA
    i: "divide",
    presentSimple: {
      s: "divides",
      p: "divide",
    },
    pastSimple: {
      s: "divided",
      p: "divided",
    },
  },
  { // VoA
    i: "do",
    presentSimple: {
      s: "does",
      p: "do",
    },
    pastSimple: {
      s: "did",
      p: "did",
    },
  },
  { // VoA
    i: "document",
    presentSimple: {
      s: "documents",
      p: "document",
    },
    pastSimple: {
      s: "documented",
      p: "documented",
    },
  },
  { // VoA
    i: "dream",
    presentSimple: {
      s: "dreams",
      p: "dream",
    },
    pastSimple: {
      s: "dreamed",
      p: "dreamed",
    },
  },
  { // VoA
    i: "drink",
    presentSimple: {
      s: "drinks",
      p: "drink",
    },
    pastSimple: {
      s: "drank",
      p: "drank",
    },
  },
  { // VoA
    i: "drive",
    presentSimple: {
      s: "drives",
      p: "drive",
    },
    pastSimple: {
      s: "drove",
      p: "drove",
    },
  },
  { // VoA
    i: "drop",
    presentSimple: {
      s: "drops",
      p: "drop",
    },
    pastSimple: {
      s: "dropped",
      p: "dropped",
    },
  },
  { // VoA
    i: "drown",
    presentSimple: {
      s: "drowns",
      p: "drown",
    },
    pastSimple: {
      s: "drowned",
      p: "drowned",
    },
  },
  { // VoA
    i: "drug",
    presentSimple: {
      s: "drugs",
      p: "drug",
    },
    pastSimple: {
      s: "drugged",
      p: "drugged",
    },
  },
  { // VoA
    i: "dry",
    presentSimple: {
      s: "dries",
      p: "dry",
    },
    pastSimple: {
      s: "dried",
      p: "dried",
    },
  },
  { // VoA
    i: "dust",
    presentSimple: {
      s: "dusts",
      p: "dust",
    },
    pastSimple: {
      s: "dusted",
      p: "dusted",
    },
  },
  { // VoA
    i: "earn",
    presentSimple: {
      s: "earns",
      p: "earn",
    },
    pastSimple: {
      s: "earned",
      p: "earned",
    },
  },
  { // VoA
    i: "ease",
    presentSimple: {
      s: "eases",
      p: "ease",
    },
    pastSimple: {
      s: "eased",
      p: "eased",
    },
  },
  { // VoA
    i: "eat",
    presentSimple: {
      s: "eats",
      p: "eat",
    },
    pastSimple: {
      s: "ate",
      p: "ate",
    },
  },
  { // VoA
    i: "edge",
    presentSimple: {
      s: "edges",
      p: "edge",
    },
    pastSimple: {
      s: "edged",
      p: "edged",
    },
  },
  { // VoA
    i: "effect",
    presentSimple: {
      s: "effects",
      p: "effect",
    },
    pastSimple: {
      s: "effected",
      p: "effected",
    },
  },
  { // VoA
    i: "elect",
    presentSimple: {
      s: "elects",
      p: "elect",
    },
    pastSimple: {
      s: "elected",
      p: "elected",
    },
  },
  { // VoA
    i: "employ",
    presentSimple: {
      s: "employs",
      p: "employ",
    },
    pastSimple: {
      s: "employed",
      p: "employed",
    },
  },
  { // VoA
    i: "empty",
    presentSimple: {
      s: "empties",
      p: "empty",
    },
    pastSimple: {
      s: "emptied",
      p: "emptied",
    },
  },
  { // VoA
    i: "end",
    presentSimple: {
      s: "ends",
      p: "end",
    },
    pastSimple: {
      s: "ended",
      p: "ended",
    },
  },
  { // VoA
    i: "enforce",
    presentSimple: {
      s: "enforces",
      p: "enforce",
    },
    pastSimple: {
      s: "enforced",
      p: "enforced",
    },
  },
  { // VoA
    i: "engineer",
    presentSimple: {
      s: "engineers",
      p: "engineer",
    },
    pastSimple: {
      s: "engineered",
      p: "engineered",
    },
  },
  { // VoA
    i: "enjoy",
    presentSimple: {
      s: "enjoys",
      p: "enjoy",
    },
    pastSimple: {
      s: "enjoyed",
      p: "enjoyed",
    },
  },
  { // VoA
    i: "enter",
    presentSimple: {
      s: "enters",
      p: "enter",
    },
    pastSimple: {
      s: "entered",
      p: "entered",
    },
  },
  { // VoA
    i: "equal",
    presentSimple: {
      s: "equals",
      p: "equal",
    },
    pastSimple: {
      s: "equaled",
      p: "equaled",
    },
  },
  { // VoA
    i: "escape",
    presentSimple: {
      s: "escapes",
      p: "escape",
    },
    pastSimple: {
      s: "escaped",
      p: "escaped",
    },
  },
  { // VoA
    i: "establish",
    presentSimple: {
      s: "establishes",
      p: "establish",
    },
    pastSimple: {
      s: "established",
      p: "established",
    },
  },
  { // VoA
    i: "estimate",
    presentSimple: {
      s: "estimates",
      p: "estimate",
    },
    pastSimple: {
      s: "estimated",
      p: "estimated",
    },
  },
  { // VoA
    i: "evaporate",
    presentSimple: {
      s: "evaporates",
      p: "evaporate",
    },
    pastSimple: {
      s: "evaporated",
      p: "evaporated",
    },
  },
  { // VoA
    i: "even",
    presentSimple: {
      s: "evens",
      p: "even",
    },
    pastSimple: {
      s: "evened",
      p: "evened",
    },
  },
  { // VoA
    i: "exact",
    presentSimple: {
      s: "exacts",
      p: "exact",
    },
    pastSimple: {
      s: "exacted",
      p: "exacted",
    },
  },
  { // VoA
    i: "examine",
    presentSimple: {
      s: "examines",
      p: "examine",
    },
    pastSimple: {
      s: "examined",
      p: "examined",
    },
  },
  { // VoA
    i: "except",
    presentSimple: {
      s: "excepts",
      p: "except",
    },
    pastSimple: {
      s: "excepted",
      p: "excepted",
    },
  },
  { // VoA
    i: "exchange",
    presentSimple: {
      s: "exchanges",
      p: "exchange",
    },
    pastSimple: {
      s: "exchanged",
      p: "exchanged",
    },
  },
  { // VoA
    i: "excuse",
    presentSimple: {
      s: "excuses",
      p: "excuse",
    },
    pastSimple: {
      s: "excused",
      p: "excused",
    },
  },
  { // VoA
    i: "execute",
    presentSimple: {
      s: "executes",
      p: "execute",
    },
    pastSimple: {
      s: "executed",
      p: "executed",
    },
  },
  { // VoA
    i: "exercise",
    presentSimple: {
      s: "exercises",
      p: "exercise",
    },
    pastSimple: {
      s: "exercised",
      p: "exercised",
    },
  },
  { // VoA
    i: "exile",
    presentSimple: {
      s: "exiles",
      p: "exile",
    },
    pastSimple: {
      s: "exiled",
      p: "exiled",
    },
  },
  { // VoA
    i: "exist",
    presentSimple: {
      s: "exists",
      p: "exist",
    },
    pastSimple: {
      s: "existed",
      p: "existed",
    },
  },
  { // VoA
    i: "expand",
    presentSimple: {
      s: "expands",
      p: "expand",
    },
    pastSimple: {
      s: "expanded",
      p: "expanded",
    },
  },
  { // VoA
    i: "expect",
    presentSimple: {
      s: "expects",
      p: "expect",
    },
    pastSimple: {
      s: "expected",
      p: "expected",
    },
  },
  { // VoA
    i: "expel",
    presentSimple: {
      s: "expels",
      p: "expel",
    },
    pastSimple: {
      s: "expelled",
      p: "expelled",
    },
  },
  { // VoA
    i: "experience",
    presentSimple: {
      s: "experiences",
      p: "experience",
    },
    pastSimple: {
      s: "experienced",
      p: "experienced",
    },
  },
  { // VoA
    i: "experiment",
    presentSimple: {
      s: "experiments",
      p: "experiment",
    },
    pastSimple: {
      s: "experimented",
      p: "experimented",
    },
  },
  { // VoA
    i: "explain",
    presentSimple: {
      s: "explains",
      p: "explain",
    },
    pastSimple: {
      s: "explained",
      p: "explained",
    },
  },
  { // VoA
    i: "explode",
    presentSimple: {
      s: "explodes",
      p: "explode",
    },
    pastSimple: {
      s: "exploded",
      p: "exploded",
    },
  },
  { // VoA
    i: "explore",
    presentSimple: {
      s: "explores",
      p: "explore",
    },
    pastSimple: {
      s: "explored",
      p: "explored",
    },
  },
  { // VoA
    i: "export",
    presentSimple: {
      s: "exports",
      p: "export",
    },
    pastSimple: {
      s: "exported",
      p: "exported",
    },
  },
  { // VoA
    i: "express",
    presentSimple: {
      s: "expresses",
      p: "express",
    },
    pastSimple: {
      s: "expressed",
      p: "expressed",
    },
  },
  { // VoA
    i: "extend",
    presentSimple: {
      s: "extends",
      p: "extend",
    },
    pastSimple: {
      s: "extended",
      p: "extended",
    },
  },
  { // VoA
    i: "face",
    presentSimple: {
      s: "faces",
      p: "face",
    },
    pastSimple: {
      s: "faced",
      p: "faced",
    },
  },
  { // VoA
    i: "fail",
    presentSimple: {
      s: "fails",
      p: "fail",
    },
    pastSimple: {
      s: "failed",
      p: "failed",
    },
  },
  { // VoA
    i: "fall",
    presentSimple: {
      s: "falls",
      p: "fall",
    },
    pastSimple: {
      s: "fell",
      p: "fell",
    },
  },
  { // my adaptation of "fair"
    i: "fare",
    presentSimple: {
      s: "fares",
      p: "fare",
    },
    pastSimple: {
      s: "fared",
      p: "fared",
    },
  },
  { // VoA
    i: "farm",
    presentSimple: {
      s: "farms",
      p: "farm",
    },
    pastSimple: {
      s: "farmed",
      p: "farmed",
    },
  },
  { // VoA
    i: "father",
    presentSimple: {
      s: "fathers",
      p: "father",
    },
    pastSimple: {
      s: "fathered",
      p: "fathered",
    },
  },
  { // VoA
    i: "fear",
    presentSimple: {
      s: "fears",
      p: "fear",
    },
    pastSimple: {
      s: "feared",
      p: "feared",
    },
  },
  { // VoA
    i: "feed",
    presentSimple: {
      s: "feeds",
      p: "feed",
    },
    pastSimple: {
      s: "fed",
      p: "fed",
    },
  },
  { // VoA
    i: "feel",
    presentSimple: {
      s: "feels",
      p: "feel",
    },
    pastSimple: {
      s: "felt",
      p: "felt",
    },
  },
  { // VoA
    i: "field",
    presentSimple: {
      s: "fields",
      p: "field",
    },
    pastSimple: {
      s: "fielded",
      p: "fielded",
    },
  },
  { // VoA
    i: "fight",
    presentSimple: {
      s: "fights",
      p: "fight",
    },
    pastSimple: {
      s: "fought",
      p: "fought",
    },
  },
  { // VoA
    i: "fill",
    presentSimple: {
      s: "fills",
      p: "fill",
    },
    pastSimple: {
      s: "filled",
      p: "filled",
    },
  },
  { // VoA
    i: "film",
    presentSimple: {
      s: "films",
      p: "film",
    },
    pastSimple: {
      s: "filmed",
      p: "filmed",
    },
  },
  { // VoA
    i: "find",
    presentSimple: {
      s: "finds",
      p: "find",
    },
    pastSimple: {
      s: "found",
      p: "found",
    },
  },
  { // VoA
    i: "fine",
    presentSimple: {
      s: "fines",
      p: "fine",
    },
    pastSimple: {
      s: "fined",
      p: "fined",
    },
  },
  { // VoA
    i: "finish",
    presentSimple: {
      s: "finishes",
      p: "finish",
    },
    pastSimple: {
      s: "finished",
      p: "finished",
    },
  },
  { // VoA
    i: "fire",
    presentSimple: {
      s: "fires",
      p: "fire",
    },
    pastSimple: {
      s: "fired",
      p: "fired",
    },
  },
  { // VoA
    i: "fish",
    presentSimple: {
      s: "fishes",
      p: "fish",
    },
    pastSimple: {
      s: "fished",
      p: "fished",
    },
  },
  { // VoA
    i: "fit",
    presentSimple: {
      s: "fits",
      p: "fit",
    },
    pastSimple: {
      s: "fit",
      p: "fit",
    },
  },
  { // VoA
    i: "fix",
    presentSimple: {
      s: "fixes",
      p: "fix",
    },
    pastSimple: {
      s: "fixed",
      p: "fixed",
    },
  },
  { // VoA
    i: "flag",
    presentSimple: {
      s: "flags",
      p: "flag",
    },
    pastSimple: {
      s: "flagged",
      p: "flagged",
    },
  },
  { // VoA
    i: "flee",
    presentSimple: {
      s: "flees",
      p: "flee",
    },
    pastSimple: {
      s: "fleed",
      p: "fleed",
    },
  },
  { // VoA
    i: "float",
    presentSimple: {
      s: "floats",
      p: "float",
    },
    pastSimple: {
      s: "floated",
      p: "floated",
    },
  },
  { // VoA
    i: "flood",
    presentSimple: {
      s: "floods",
      p: "flood",
    },
    pastSimple: {
      s: "flooded",
      p: "flooded",
    },
  },
  { // VoA
    i: "flow",
    presentSimple: {
      s: "flows",
      p: "flow",
    },
    pastSimple: {
      s: "flowed",
      p: "flowed",
    },
  },
  { // VoA
    i: "flower",
    presentSimple: {
      s: "flowers",
      p: "flower",
    },
    pastSimple: {
      s: "flowered",
      p: "flowered",
    },
  },
  { // VoA
    i: "fly",
    presentSimple: {
      s: "flies",
      p: "fly",
    },
    pastSimple: {
      s: "flew",
      p: "flew",
    },
  },
  { // VoA
    i: "follow",
    presentSimple: {
      s: "follows",
      p: "follow",
    },
    pastSimple: {
      s: "followed",
      p: "followed",
    },
  },
  { // VoA
    i: "fool",
    presentSimple: {
      s: "fools",
      p: "fool",
    },
    pastSimple: {
      s: "fooled",
      p: "fooled",
    },
  },
  { // VoA
    i: "force",
    presentSimple: {
      s: "forces",
      p: "force",
    },
    pastSimple: {
      s: "forced",
      p: "forced",
    },
  },
  { // VoA
    i: "forget",
    presentSimple: {
      s: "forgets",
      p: "forget",
    },
    pastSimple: {
      s: "forgot",
      p: "forgot",
    },
  },
  { // VoA
    i: "forgive",
    presentSimple: {
      s: "forgives",
      p: "forgive",
    },
    pastSimple: {
      s: "forgave",
      p: "forgave",
    },
  },
  { // VoA
    i: "form",
    presentSimple: {
      s: "forms",
      p: "form",
    },
    pastSimple: {
      s: "formed",
      p: "formed",
    },
  },
  { // VoA
    i: "forward",
    presentSimple: {
      s: "forwards",
      p: "forward",
    },
    pastSimple: {
      s: "forwarded",
      p: "forwarded",
    },
  },
  { // VoA
    i: "free",
    presentSimple: {
      s: "frees",
      p: "free",
    },
    pastSimple: {
      s: "freed",
      p: "freed",
    },
  },
  { // VoA
    i: "freeze",
    presentSimple: {
      s: "freezes",
      p: "freeze",
    },
    pastSimple: {
      s: "froze",
      p: "froze",
    },
  },
  { // VoA
    i: "frighten",
    presentSimple: {
      s: "frightens",
      p: "frighten",
    },
    pastSimple: {
      s: "frightened",
      p: "frightened",
    },
  },
  { // VoA
    i: "fuel",
    presentSimple: {
      s: "fuels",
      p: "fuel",
    },
    pastSimple: {
      s: "fueled",
      p: "fueled",
    },
  },
  { // VoA
    i: "gain",
    presentSimple: {
      s: "gains",
      p: "gain",
    },
    pastSimple: {
      s: "gained",
      p: "gained",
    },
  },
  { // VoA
    i: "game",
    presentSimple: {
      s: "games",
      p: "game",
    },
    pastSimple: {
      s: "gamed",
      p: "gamed",
    },
  },
  { // VoA
    i: "gather",
    presentSimple: {
      s: "gathers",
      p: "gather",
    },
    pastSimple: {
      s: "gathered",
      p: "gathered",
    },
  },
  { // VoA
    i: "get",
    presentSimple: {
      s: "gets",
      p: "get",
    },
    pastSimple: {
      s: "got",
      p: "got",
    },
  },
  { // VoA
    i: "gift",
    presentSimple: {
      s: "gifts",
      p: "gift",
    },
    pastSimple: {
      s: "gifted",
      p: "gifted",
    },
  },
  { // VoA
    i: "give",
    presentSimple: {
      s: "gives",
      p: "give",
    },
    pastSimple: {
      s: "gave",
      p: "gave",
    },
  },
  { // VoA
    i: "go",
    presentSimple: {
      s: "goes",
      p: "go",
    },
    pastSimple: {
      s: "went",
      p: "went",
    },
  },
  { // VoA
    i: "govern",
    presentSimple: {
      s: "governs",
      p: "govern",
    },
    pastSimple: {
      s: "governed",
      p: "governed",
    },
  },
  { // VoA
    i: "grind",
    presentSimple: {
      s: "grinds",
      p: "grind",
    },
    pastSimple: {
      s: "ground",
      p: "ground",
    },
  },
  { // VoA
    i: "ground",
    presentSimple: {
      s: "grounds",
      p: "ground",
    },
    pastSimple: {
      s: "grounded",
      p: "grounded",
    },
  },
  { // VoA
    i: "group",
    presentSimple: {
      s: "groups",
      p: "group",
    },
    pastSimple: {
      s: "grouped",
      p: "grouped",
    },
  },
  { // VoA
    i: "grow",
    presentSimple: {
      s: "grows",
      p: "grow",
    },
    pastSimple: {
      s: "grew",
      p: "grew",
    },
  },
  { // VoA
    i: "guarantee",
    presentSimple: {
      s: "guarantees",
      p: "guarantee",
    },
    pastSimple: {
      s: "guaranteed",
      p: "guaranteed",
    },
  },
  { // VoA
    i: "guard",
    presentSimple: {
      s: "guards",
      p: "guard",
    },
    pastSimple: {
      s: "guarded",
      p: "guarded",
    },
  },
  { // VoA
    i: "guide",
    presentSimple: {
      s: "guides",
      p: "guide",
    },
    pastSimple: {
      s: "guided",
      p: "guided",
    },
  },
  { // VoA
    i: "halt",
    presentSimple: {
      s: "halts",
      p: "halt",
    },
    pastSimple: {
      s: "halted",
      p: "halted",
    },
  },
  { // VoA
    i: "hang",
    presentSimple: {
      s: "hangs",
      p: "hang",
    },
    pastSimple: {
      s: "hanged",
      p: "hanged",
    },
  },
  { // VoA
    i: "happen",
    presentSimple: {
      s: "happens",
      p: "happen",
    },
    pastSimple: {
      s: "happened",
      p: "happened",
    },
  },
  { // VoA
    i: "harm",
    presentSimple: {
      s: "harms",
      p: "harm",
    },
    pastSimple: {
      s: "harmed",
      p: "harmed",
    },
  },
  { // VoA
    i: "harvest",
    presentSimple: {
      s: "harvests",
      p: "harvest",
    },
    pastSimple: {
      s: "harvested",
      p: "harvested",
    },
  },
  { // VoA
    i: "hate",
    presentSimple: {
      s: "hates",
      p: "hate",
    },
    pastSimple: {
      s: "hated",
      p: "hated",
    },
  },
  { // VoA
    i: "have",
    presentSimple: {
      s: "has",
      p: "have",
    },
    pastSimple: {
      s: "had",
      p: "had",
    },
  },
  { // VoA
    i: "head",
    presentSimple: {
      s: "heads",
      p: "head",
    },
    pastSimple: {
      s: "headed",
      p: "headed",
    },
  },
  { // VoA
    i: "heal",
    presentSimple: {
      s: "heals",
      p: "heal",
    },
    pastSimple: {
      s: "healed",
      p: "healed",
    },
  },
  { // VoA
    i: "hear",
    presentSimple: {
      s: "hears",
      p: "hear",
    },
    pastSimple: {
      s: "heard",
      p: "heard",
    },
  },
  { // VoA
    i: "heat",
    presentSimple: {
      s: "heats",
      p: "heat",
    },
    pastSimple: {
      s: "heated",
      p: "heated",
    },
  },
  { // VoA
    i: "help",
    presentSimple: {
      s: "helps",
      p: "help",
    },
    pastSimple: {
      s: "helped",
      p: "helped",
    },
  },
  { // VoA
    i: "hide",
    presentSimple: {
      s: "hides",
      p: "hide",
    },
    pastSimple: {
      s: "hid",
      p: "hid",
    },
  },
  { // VoA
    i: "hijack",
    presentSimple: {
      s: "hijacks",
      p: "hijack",
    },
    pastSimple: {
      s: "hijacked",
      p: "hijacked",
    },
  },
  { // VoA
    i: "hit",
    presentSimple: {
      s: "hits",
      p: "hit",
    },
    pastSimple: {
      s: "hit",
      p: "hit",
    },
  },
  { // VoA
    i: "hold",
    presentSimple: {
      s: "holds",
      p: "hold",
    },
    pastSimple: {
      s: "held",
      p: "held",
    },
  },
  { // VoA
    i: "honor",
    presentSimple: {
      s: "honors",
      p: "honor",
    },
    pastSimple: {
      s: "honored",
      p: "honored",
    },
  },
  { // VoA
    i: "hope",
    presentSimple: {
      s: "hopes",
      p: "hope",
    },
    pastSimple: {
      s: "hoped",
      p: "hoped",
    },
  },
  { // VoA
    i: "humor",
    presentSimple: {
      s: "humors",
      p: "humor",
    },
    pastSimple: {
      s: "humored",
      p: "humored",
    },
  },
  { // VoA
    i: "hunger",
    presentSimple: {
      s: "hungers",
      p: "hunger",
    },
    pastSimple: {
      s: "hungered",
      p: "hungered",
    },
  },
  { // VoA
    i: "hunt",
    presentSimple: {
      s: "hunts",
      p: "hunt",
    },
    pastSimple: {
      s: "hunted",
      p: "hunted",
    },
  },
  { // VoA
    i: "hurry",
    presentSimple: {
      s: "hurries",
      p: "hurry",
    },
    pastSimple: {
      s: "hurried",
      p: "hurried",
    },
  },
  { // VoA
    i: "hurt",
    presentSimple: {
      s: "hurts",
      p: "hurt",
    },
    pastSimple: {
      s: "hurt",
      p: "hurt",
    },
  },
  { // VoA
    i: "ice",
    presentSimple: {
      s: "ices",
      p: "ice",
    },
    pastSimple: {
      s: "iced",
      p: "iced",
    },
  },
  { // VoA
    i: "identify",
    presentSimple: {
      s: "identifies",
      p: "identify",
    },
    pastSimple: {
      s: "identified",
      p: "identified",
    },
  },
  { // VoA
    i: "imagine",
    presentSimple: {
      s: "imagines",
      p: "imagine",
    },
    pastSimple: {
      s: "imagined",
      p: "imagined",
    },
  },
  { // VoA
    i: "import",
    presentSimple: {
      s: "imports",
      p: "import",
    },
    pastSimple: {
      s: "imported",
      p: "imported",
    },
  },
  { // VoA
    i: "improve",
    presentSimple: {
      s: "improves",
      p: "improve",
    },
    pastSimple: {
      s: "improved",
      p: "improved",
    },
  },
  { // VoA
    i: "incite",
    presentSimple: {
      s: "incites",
      p: "incite",
    },
    pastSimple: {
      s: "incited",
      p: "incited",
    },
  },
  { // VoA
    i: "include",
    presentSimple: {
      s: "includes",
      p: "include",
    },
    pastSimple: {
      s: "included",
      p: "included",
    },
  },
  { // VoA
    i: "increase",
    presentSimple: {
      s: "increases",
      p: "increase",
    },
    pastSimple: {
      s: "increased",
      p: "increased",
    },
  },
  { // VoA
    i: "infect",
    presentSimple: {
      s: "infects",
      p: "infect",
    },
    pastSimple: {
      s: "infected",
      p: "infected",
    },
  },
  { // VoA
    i: "influence",
    presentSimple: {
      s: "influences",
      p: "influence",
    },
    pastSimple: {
      s: "influenced",
      p: "influenced",
    },
  },
  { // VoA
    i: "inform",
    presentSimple: {
      s: "informs",
      p: "inform",
    },
    pastSimple: {
      s: "informed",
      p: "informed",
    },
  },
  { // VoA
    i: "inject",
    presentSimple: {
      s: "injects",
      p: "inject",
    },
    pastSimple: {
      s: "injected",
      p: "injected",
    },
  },
  { // VoA
    i: "injure",
    presentSimple: {
      s: "injures",
      p: "injure",
    },
    pastSimple: {
      s: "injured",
      p: "injured",
    },
  },
  { // VoA
    i: "inspect",
    presentSimple: {
      s: "inspects",
      p: "inspect",
    },
    pastSimple: {
      s: "inspected",
      p: "inspected",
    },
  },
  { // VoA
    i: "instrument",
    presentSimple: {
      s: "instruments",
      p: "instrument",
    },
    pastSimple: {
      s: "instrumented",
      p: "instrumented",
    },
  },
  { // VoA
    i: "insult",
    presentSimple: {
      s: "insults",
      p: "insult",
    },
    pastSimple: {
      s: "insulted",
      p: "insulted",
    },
  },
  { // VoA
    i: "interfere",
    presentSimple: {
      s: "interferes",
      p: "interfere",
    },
    pastSimple: {
      s: "interfered",
      p: "interfered",
    },
  },
  { // VoA
    i: "intervene",
    presentSimple: {
      s: "intervenes",
      p: "intervene",
    },
    pastSimple: {
      s: "intervened",
      p: "intervened",
    },
  },
  { // VoA
    i: "invade",
    presentSimple: {
      s: "invades",
      p: "invade",
    },
    pastSimple: {
      s: "invaded",
      p: "invaded",
    },
  },
  { // VoA
    i: "invent",
    presentSimple: {
      s: "invents",
      p: "invent",
    },
    pastSimple: {
      s: "invented",
      p: "invented",
    },
  },
  { // VoA
    i: "invest",
    presentSimple: {
      s: "invests",
      p: "invest",
    },
    pastSimple: {
      s: "invested",
      p: "invested",
    },
  },
  { // VoA
    i: "investigate",
    presentSimple: {
      s: "investigates",
      p: "investigate",
    },
    pastSimple: {
      s: "investigated",
      p: "investigated",
    },
  },
  { // VoA
    i: "invite",
    presentSimple: {
      s: "invites",
      p: "invite",
    },
    pastSimple: {
      s: "invited",
      p: "invited",
    },
  },
  { // VoA
    i: "involve",
    presentSimple: {
      s: "involves",
      p: "involve",
    },
    pastSimple: {
      s: "involved",
      p: "involved",
    },
  },
  { // VoA
    i: "iron",
    presentSimple: {
      s: "irons",
      p: "iron",
    },
    pastSimple: {
      s: "ironed",
      p: "ironed",
    },
  },
  { // VoA
    i: "issue",
    presentSimple: {
      s: "issues",
      p: "issue",
    },
    pastSimple: {
      s: "issued",
      p: "issued",
    },
  },
  { // VoA
    i: "jail",
    presentSimple: {
      s: "jails",
      p: "jail",
    },
    pastSimple: {
      s: "jailed",
      p: "jailed",
    },
  },
  { // VoA
    i: "join",
    presentSimple: {
      s: "joins",
      p: "join",
    },
    pastSimple: {
      s: "joined",
      p: "joined",
    },
  },
  { // VoA
    i: "joke",
    presentSimple: {
      s: "jokes",
      p: "joke",
    },
    pastSimple: {
      s: "joked",
      p: "joked",
    },
  },
  { // VoA
    i: "judge",
    presentSimple: {
      s: "judges",
      p: "judge",
    },
    pastSimple: {
      s: "judged",
      p: "judged",
    },
  },
  { // VoA
    i: "jump",
    presentSimple: {
      s: "jumps",
      p: "jump",
    },
    pastSimple: {
      s: "jumped",
      p: "jumped",
    },
  },
  { // VoA
    i: "keep",
    presentSimple: {
      s: "keeps",
      p: "keep",
    },
    pastSimple: {
      s: "kept",
      p: "kept",
    },
  },
  { // VoA
    i: "kick",
    presentSimple: {
      s: "kicks",
      p: "kick",
    },
    pastSimple: {
      s: "kicked",
      p: "kicked",
    },
  },
  { // VoA
    i: "kidnap",
    presentSimple: {
      s: "kidnaps",
      p: "kidnap",
    },
    pastSimple: {
      s: "kidnapped",
      p: "kidnapped",
    },
  },
  { // VoA
    i: "kill",
    presentSimple: {
      s: "kills",
      p: "kill",
    },
    pastSimple: {
      s: "killed",
      p: "killed",
    },
  },
  { // VoA
    i: "kiss",
    presentSimple: {
      s: "kisses",
      p: "kiss",
    },
    pastSimple: {
      s: "kissed",
      p: "kissed",
    },
  },
  { // VoA
    i: "know",
    presentSimple: {
      s: "knows",
      p: "know",
    },
    pastSimple: {
      s: "knew",
      p: "knew",
    },
  },
  { // VoA
    i: "labor",
    presentSimple: {
      s: "labors",
      p: "labor",
    },
    pastSimple: {
      s: "labored",
      p: "labored",
    },
  },
  { // VoA
    i: "lack",
    presentSimple: {
      s: "lacks",
      p: "lack",
    },
    pastSimple: {
      s: "lacked",
      p: "lacked",
    },
  },
  { // VoA
    i: "land",
    presentSimple: {
      s: "lands",
      p: "land",
    },
    pastSimple: {
      s: "landed",
      p: "landed",
    },
  },
  { // VoA
    i: "laugh",
    presentSimple: {
      s: "laughs",
      p: "laugh",
    },
    pastSimple: {
      s: "laughed",
      p: "laughed",
    },
  },
  { // VoA
    i: "launch",
    presentSimple: {
      s: "launches",
      p: "launch",
    },
    pastSimple: {
      s: "launched",
      p: "launched",
    },
  },
  { // VoA
    i: "lead",
    presentSimple: {
      s: "leads",
      p: "lead",
    },
    pastSimple: {
      s: "led",
      p: "led",
    },
  },
  { // VoA
    i: "leak",
    presentSimple: {
      s: "leaks",
      p: "leak",
    },
    pastSimple: {
      s: "leaked",
      p: "leaked",
    },
  },
  { // VoA
    i: "learn",
    presentSimple: {
      s: "learns",
      p: "learn",
    },
    pastSimple: {
      s: "learned",
      p: "learned",
    },
  },
  { // VoA
    i: "leave",
    presentSimple: {
      s: "leaves",
      p: "leave",
    },
    pastSimple: {
      s: "left",
      p: "left",
    },
  },
  { // VoA
    i: "lend",
    presentSimple: {
      s: "lends",
      p: "lend",
    },
    pastSimple: {
      s: "lent",
      p: "lent",
    },
  },
  { // VoA
    i: "let",
    presentSimple: {
      s: "lets",
      p: "let",
    },
    pastSimple: {
      s: "let",
      p: "let",
    },
  },
  { // VoA
    i: "level",
    presentSimple: {
      s: "levels",
      p: "level",
    },
    pastSimple: {
      s: "leveled",
      p: "leveled",
    },
  },
  { // VoA
    i: "lie",
    presentSimple: {
      s: "lies",
      p: "lie",
    },
    pastSimple: {
      s: "lied",
      p: "lied",
    },
  },
  { // VoA
    i: "lift",
    presentSimple: {
      s: "lifts",
      p: "lift",
    },
    pastSimple: {
      s: "lifted",
      p: "lifted",
    },
  },
  { // VoA
    i: "light",
    presentSimple: {
      s: "lights",
      p: "light",
    },
    pastSimple: {
      s: "lit",
      p: "lit",
    },
  },
  { // VoA
    i: "like",
    presentSimple: {
      s: "likes",
      p: "like",
    },
    pastSimple: {
      s: "liked",
      p: "liked",
    },
  },
  { // VoA
    i: "limit",
    presentSimple: {
      s: "limits",
      p: "limit",
    },
    pastSimple: {
      s: "limited",
      p: "limited",
    },
  },
  { // VoA
    i: "line",
    presentSimple: {
      s: "lines",
      p: "line",
    },
    pastSimple: {
      s: "lined",
      p: "lined",
    },
  },
  { // VoA
    i: "link",
    presentSimple: {
      s: "links",
      p: "link",
    },
    pastSimple: {
      s: "linked",
      p: "linked",
    },
  },
  { // VoA
    i: "list",
    presentSimple: {
      s: "lists",
      p: "list",
    },
    pastSimple: {
      s: "listed",
      p: "listed",
    },
  },
  { // VoA
    i: "listen",
    presentSimple: {
      s: "listens",
      p: "listen",
    },
    pastSimple: {
      s: "listened",
      p: "listened",
    },
  },
  { // VoA
    i: "live",
    presentSimple: {
      s: "lives",
      p: "live",
    },
    pastSimple: {
      s: "lived",
      p: "lived",
    },
  },
  { // VoA
    i: "load",
    presentSimple: {
      s: "loads",
      p: "load",
    },
    pastSimple: {
      s: "loaded",
      p: "loaded",
    },
  },
  { // VoA
    i: "loan",
    presentSimple: {
      s: "loans",
      p: "loan",
    },
    pastSimple: {
      s: "loaned",
      p: "loaned",
    },
  },
  { // VoA
    i: "look",
    presentSimple: {
      s: "looks",
      p: "look",
    },
    pastSimple: {
      s: "looked",
      p: "looked",
    },
  },
  { // VoA
    i: "lose",
    presentSimple: {
      s: "loses",
      p: "lose",
    },
    pastSimple: {
      s: "lost",
      p: "lost",
    },
  },
  { // VoA
    i: "love",
    presentSimple: {
      s: "loves",
      p: "love",
    },
    pastSimple: {
      s: "loved",
      p: "loved",
    },
  },
  { // VoA
    i: "mail",
    presentSimple: {
      s: "mails",
      p: "mail",
    },
    pastSimple: {
      s: "mailed",
      p: "mailed",
    },
  },
  { // VoA
    i: "make",
    presentSimple: {
      s: "makes",
      p: "make",
    },
    pastSimple: {
      s: "made",
      p: "made",
    },
  },
  { // VoA
    i: "map",
    presentSimple: {
      s: "maps",
      p: "map",
    },
    pastSimple: {
      s: "mapped",
      p: "mapped",
    },
  },
  { // VoA
    i: "march",
    presentSimple: {
      s: "marches",
      p: "march",
    },
    pastSimple: {
      s: "marched",
      p: "marched",
    },
  },
  { // VoA
    i: "mark",
    presentSimple: {
      s: "marks",
      p: "mark",
    },
    pastSimple: {
      s: "marked",
      p: "marked",
    },
  },
  { // VoA
    i: "market",
    presentSimple: {
      s: "markets",
      p: "market",
    },
    pastSimple: {
      s: "marketed",
      p: "marketed",
    },
  },
  { // VoA
    i: "marry",
    presentSimple: {
      s: "marries",
      p: "marry",
    },
    pastSimple: {
      s: "married",
      p: "married",
    },
  },
  { // VoA
    i: "mate",
    presentSimple: {
      s: "mates",
      p: "mate",
    },
    pastSimple: {
      s: "mated",
      p: "mated",
    },
  },
  { // VoA
    i: "matter",
    presentSimple: {
      s: "matters",
      p: "matter",
    },
    pastSimple: {
      s: "mattered",
      p: "mattered",
    },
  },
  { // VoA
    i: "measure",
    presentSimple: {
      s: "measures",
      p: "measure",
    },
    pastSimple: {
      s: "measured",
      p: "measured",
    },
  },
  { // VoA
    i: "meet",
    presentSimple: {
      s: "meets",
      p: "meet",
    },
    pastSimple: {
      s: "met",
      p: "met",
    },
  },
  { // VoA
    i: "melt",
    presentSimple: {
      s: "melts",
      p: "melt",
    },
    pastSimple: {
      s: "melted",
      p: "melted",
    },
  },
  { // VoA
    i: "message",
    presentSimple: {
      s: "messages",
      p: "message",
    },
    pastSimple: {
      s: "messaged",
      p: "messaged",
    },
  },
  { // VoA
    i: "milk",
    presentSimple: {
      s: "milks",
      p: "milk",
    },
    pastSimple: {
      s: "milked",
      p: "milked",
    },
  },
  { // VoA
    i: "mind",
    presentSimple: {
      s: "minds",
      p: "mind",
    },
    pastSimple: {
      s: "minded",
      p: "minded",
    },
  },
  { // VoA
    i: "mine",
    presentSimple: {
      s: "mines",
      p: "mine",
    },
    pastSimple: {
      s: "mined",
      p: "mined",
    },
  },
  { // VoA
    i: "miss",
    presentSimple: {
      s: "misses",
      p: "miss",
    },
    pastSimple: {
      s: "missed",
      p: "missed",
    },
  },
  { // VoA
    i: "mix",
    presentSimple: {
      s: "mixes",
      p: "mix",
    },
    pastSimple: {
      s: "mixed",
      p: "mixed",
    },
  },
  { // VoA
    i: "mob",
    presentSimple: {
      s: "mobs",
      p: "mob",
    },
    pastSimple: {
      s: "mobbed",
      p: "mobbed",
    },
  },
  { // VoA
    i: "model",
    presentSimple: {
      s: "models",
      p: "model",
    },
    pastSimple: {
      s: "modeled",
      p: "modeled",
    },
  },
  { // VoA
    i: "moderate",
    presentSimple: {
      s: "moderates",
      p: "moderate",
    },
    pastSimple: {
      s: "moderated",
      p: "moderated",
    },
  },
  { // VoA
    i: "mother",
    presentSimple: {
      s: "mothers",
      p: "mother",
    },
    pastSimple: {
      s: "mothered",
      p: "mothered",
    },
  },

  { // VoA
    i: "motion",
    presentSimple: {
      s: "motions",
      p: "motion",
    },
    pastSimple: {
      s: "motioned",
      p: "motioned",
    },
  },
  { // VoA
    i: "mourn",
    presentSimple: {
      s: "mourns",
      p: "mourn",
    },
    pastSimple: {
      s: "mourned",
      p: "mourned",
    },
  },
  { // VoA
    i: "move",
    presentSimple: {
      s: "moves",
      p: "move",
    },
    pastSimple: {
      s: "moved",
      p: "moved",
    },
  },
  { // VoA
    i: "murder",
    presentSimple: {
      s: "murders",
      p: "murder",
    },
    pastSimple: {
      s: "murdered",
      p: "murdered",
    },
  },
  { // VoA
    i: "name",
    presentSimple: {
      s: "names",
      p: "name",
    },
    pastSimple: {
      s: "named",
      p: "named",
    },
  },
  { // VoA
    i: "narrow",
    presentSimple: {
      s: "narrows",
      p: "narrow",
    },
    pastSimple: {
      s: "narrowed",
      p: "narrowed",
    },
  },
  { // VoA
    i: "need",
    presentSimple: {
      s: "needs",
      p: "need",
    },
    pastSimple: {
      s: "needed",
      p: "needed",
    },
  },
  { // VoA
    i: "negotiate",
    presentSimple: {
      s: "negotiates",
      p: "negotiate",
    },
    pastSimple: {
      s: "negotiated",
      p: "negotiated",
    },
  },
  { // VoA
    i: "nominate",
    presentSimple: {
      s: "nominates",
      p: "nominate",
    },
    pastSimple: {
      s: "nominated",
      p: "nominated",
    },
  },
  { // VoA
    i: "note",
    presentSimple: {
      s: "notes",
      p: "note",
    },
    pastSimple: {
      s: "noted",
      p: "noted",
    },
  },
  { // VoA
    i: "number",
    presentSimple: {
      s: "numbers",
      p: "number",
    },
    pastSimple: {
      s: "numbered",
      p: "numbered",
    },
  },
  { // VoA
    i: "obey",
    presentSimple: {
      s: "obeys",
      p: "obey",
    },
    pastSimple: {
      s: "obeyed",
      p: "obeyed",
    },
  },
  { // VoA
    i: "object",
    presentSimple: {
      s: "objects",
      p: "object",
    },
    pastSimple: {
      s: "objected",
      p: "objected",
    },
  },
  { // VoA
    i: "observe",
    presentSimple: {
      s: "observes",
      p: "observe",
    },
    pastSimple: {
      s: "observed",
      p: "observed",
    },
  },
  { // VoA
    i: "occupy",
    presentSimple: {
      s: "occupies",
      p: "occupy",
    },
    pastSimple: {
      s: "occupied",
      p: "occupied",
    },
  },
  { // VoA
    i: "offer",
    presentSimple: {
      s: "offers",
      p: "offer",
    },
    pastSimple: {
      s: "offered",
      p: "offered",
    },
  },
  { // VoA
    i: "oil",
    presentSimple: {
      s: "oils",
      p: "oil",
    },
    pastSimple: {
      s: "oiled",
      p: "oiled",
    },
  },
  { // VoA
    i: "open",
    presentSimple: {
      s: "opens",
      p: "open",
    },
    pastSimple: {
      s: "opened",
      p: "opened",
    },
  },
  { // VoA
    i: "operate",
    presentSimple: {
      s: "operates",
      p: "operate",
    },
    pastSimple: {
      s: "operated",
      p: "operated",
    },
  },
  { // VoA
    i: "oppose",
    presentSimple: {
      s: "opposes",
      p: "oppose",
    },
    pastSimple: {
      s: "opposed",
      p: "opposed",
    },
  },
  { // VoA
    i: "oppress",
    presentSimple: {
      s: "oppresses",
      p: "oppress",
    },
    pastSimple: {
      s: "oppressed",
      p: "oppressed",
    },
  },
  { // VoA
    i: "orbit",
    presentSimple: {
      s: "orbits",
      p: "orbit",
    },
    pastSimple: {
      s: "orbited",
      p: "orbited",
    },
  },
  { // VoA
    i: "order",
    presentSimple: {
      s: "orders",
      p: "order",
    },
    pastSimple: {
      s: "ordered",
      p: "ordered",
    },
  },
  { // VoA
    i: "organize",
    presentSimple: {
      s: "organizes",
      p: "organize",
    },
    pastSimple: {
      s: "organized",
      p: "organized",
    },
  },
  { // VoA
    i: "oust",
    presentSimple: {
      s: "ousts",
      p: "oust",
    },
    pastSimple: {
      s: "ousted",
      p: "ousted",
    },
  },
  { // VoA
    i: "out",
    presentSimple: {
      s: "outs",
      p: "out",
    },
    pastSimple: {
      s: "outed",
      p: "outed",
    },
  },
  { // VoA
    i: "overthrow",
    presentSimple: {
      s: "overthrows",
      p: "overthrow",
    },
    pastSimple: {
      s: "overthrew",
      p: "overthrew",
    },
  },
  { // VoA
    i: "owe",
    presentSimple: {
      s: "owes",
      p: "owe",
    },
    pastSimple: {
      s: "owed",
      p: "owed",
    },
  },
  { // VoA
    i: "own",
    presentSimple: {
      s: "owns",
      p: "own",
    },
    pastSimple: {
      s: "owned",
      p: "owned",
    },
  },
  { // VoA
    i: "paint",
    presentSimple: {
      s: "paints",
      p: "paint",
    },
    pastSimple: {
      s: "painted",
      p: "painted",
    },
  },
  { // VoA
    i: "pan",
    presentSimple: {
      s: "pans",
      p: "pan",
    },
    pastSimple: {
      s: "panned",
      p: "panned",
    },
  },
  { // VoA
    i: "parachute",
    presentSimple: {
      s: "parachutes",
      p: "parachute",
    },
    pastSimple: {
      s: "parachuted",
      p: "parachuted",
    },
  },
  { // VoA
    i: "parade",
    presentSimple: {
      s: "parades",
      p: "parade",
    },
    pastSimple: {
      s: "paraded",
      p: "paraded",
    },
  },
  { // VoA
    i: "pardon",
    presentSimple: {
      s: "pardons",
      p: "pardon",
    },
    pastSimple: {
      s: "pardoned",
      p: "pardoned",
    },
  },
  { // VoA
    i: "parent",
    presentSimple: {
      s: "parents",
      p: "parent",
    },
    pastSimple: {
      s: "parented",
      p: "parented",
    },
  },
  { // VoA
    i: "part",
    presentSimple: {
      s: "parts",
      p: "part",
    },
    pastSimple: {
      s: "parted",
      p: "parted",
    },
  },
  { // VoA
    i: "party",
    presentSimple: {
      s: "parties",
      p: "party",
    },
    pastSimple: {
      s: "partied",
      p: "partied",
    },
  },
  { // VoA
    i: "pass",
    presentSimple: {
      s: "passes",
      p: "pass",
    },
    pastSimple: {
      s: "passed",
      p: "passed",
    },
  },
  { // VoA
    i: "pay",
    presentSimple: {
      s: "pays",
      p: "pay",
    },
    pastSimple: {
      s: "paid",
      p: "paid",
    },
  },
  { // VoA
    i: "perfect",
    presentSimple: {
      s: "perfects",
      p: "perfect",
    },
    pastSimple: {
      s: "perfected",
      p: "perfected",
    },
  },
  { // VoA
    i: "perform",
    presentSimple: {
      s: "performs",
      p: "perform",
    },
    pastSimple: {
      s: "performed",
      p: "performed",
    },
  },
  { // VoA
    i: "permit",
    presentSimple: {
      s: "permits",
      p: "permit",
    },
    pastSimple: {
      s: "permitted",
      p: "permitted",
    },
  },
  { // VoA
    i: "picture",
    presentSimple: {
      s: "pictures",
      p: "picture",
    },
    pastSimple: {
      s: "pictured",
      p: "pictured",
    },
  },
  { // VoA
    i: "piece",
    presentSimple: {
      s: "pieces",
      p: "piece",
    },
    pastSimple: {
      s: "pieced",
      p: "pieced",
    },
  },
  { // VoA
    i: "pilot",
    presentSimple: {
      s: "pilots",
      p: "pilot",
    },
    pastSimple: {
      s: "piloted",
      p: "piloted",
    },
  },
  { // VoA
    i: "pipe",
    presentSimple: {
      s: "pipes",
      p: "pipe",
    },
    pastSimple: {
      s: "piped",
      p: "piped",
    },
  },
  { // VoA
    i: "place",
    presentSimple: {
      s: "places",
      p: "place",
    },
    pastSimple: {
      s: "placed",
      p: "placed",
    },
  },
  { // VoA
    i: "plan",
    presentSimple: {
      s: "plans",
      p: "plan",
    },
    pastSimple: {
      s: "planned",
      p: "planned",
    },
  },
  { // VoA
    i: "plant",
    presentSimple: {
      s: "plants",
      p: "plant",
    },
    pastSimple: {
      s: "planted",
      p: "planted",
    },
  },
  { // VoA
    i: "play",
    presentSimple: {
      s: "plays",
      p: "play",
    },
    pastSimple: {
      s: "played",
      p: "played",
    },
  },
  { // VoA
    i: "please",
    presentSimple: {
      s: "pleases",
      p: "please",
    },
    pastSimple: {
      s: "pleased",
      p: "pleased",
    },
  },
  { // VoA
    i: "plot",
    presentSimple: {
      s: "plots",
      p: "plot",
    },
    pastSimple: {
      s: "plotted",
      p: "plotted",
    },
  },
  { // VoA
    i: "point",
    presentSimple: {
      s: "points",
      p: "point",
    },
    pastSimple: {
      s: "pointed",
      p: "pointed",
    },
  },
  { // VoA
    i: "poison",
    presentSimple: {
      s: "poisons",
      p: "poison",
    },
    pastSimple: {
      s: "poisoned",
      p: "poisoned",
    },
  },
  { // VoA
    i: "police",
    presentSimple: {
      s: "polices",
      p: "police",
    },
    pastSimple: {
      s: "policed",
      p: "policed",
    },
  },
  { // VoA
    i: "pollute",
    presentSimple: {
      s: "pollutes",
      p: "pollute",
    },
    pastSimple: {
      s: "polluted",
      p: "polluted",
    },
  },
  { // VoA
    i: "position",
    presentSimple: {
      s: "positions",
      p: "position",
    },
    pastSimple: {
      s: "positioned",
      p: "positioned",
    },
  },
  { // VoA
    i: "possess",
    presentSimple: {
      s: "possesses",
      p: "possess",
    },
    pastSimple: {
      s: "possessed",
      p: "possessed",
    },
  },
  { // VoA
    i: "postpone",
    presentSimple: {
      s: "postpones",
      p: "postpone",
    },
    pastSimple: {
      s: "postponed",
      p: "postponed",
    },
  },
  { // VoA
    i: "pour",
    presentSimple: {
      s: "pours",
      p: "pour",
    },
    pastSimple: {
      s: "poured",
      p: "poured",
    },
  },
  { // VoA
    i: "power",
    presentSimple: {
      s: "powers",
      p: "power",
    },
    pastSimple: {
      s: "powered",
      p: "powered",
    },
  },
  { // VoA
    i: "praise",
    presentSimple: {
      s: "praises",
      p: "praise",
    },
    pastSimple: {
      s: "praised",
      p: "praised",
    },
  },
  { // VoA
    i: "pray",
    presentSimple: {
      s: "prays",
      p: "pray",
    },
    pastSimple: {
      s: "prayed",
      p: "prayed",
    },
  },
  { // VoA
    i: "present",
    presentSimple: {
      s: "presents",
      p: "present",
    },
    pastSimple: {
      s: "presented",
      p: "presented",
    },
  },
  { // VoA
    i: "press",
    presentSimple: {
      s: "presses",
      p: "press",
    },
    pastSimple: {
      s: "pressed",
      p: "pressed",
    },
  },
  { // VoA
    i: "prevent",
    presentSimple: {
      s: "prevents",
      p: "prevent",
    },
    pastSimple: {
      s: "prevented",
      p: "prevented",
    },
  },
  { // VoA
    i: "price",
    presentSimple: {
      s: "prices",
      p: "price",
    },
    pastSimple: {
      s: "priced",
      p: "priced",
    },
  },
  { // VoA
    i: "prize",
    presentSimple: {
      s: "prizes",
      p: "prize",
    },
    pastSimple: {
      s: "prized",
      p: "prized",
    },
  },
  { // VoA
    i: "process",
    presentSimple: {
      s: "processes",
      p: "process",
    },
    pastSimple: {
      s: "processed",
      p: "processed",
    },
  },
  { // VoA
    i: "produce",
    presentSimple: {
      s: "produces",
      p: "produce",
    },
    pastSimple: {
      s: "produced",
      p: "produced",
    },
  },
  { // VoA
    i: "profit",
    presentSimple: {
      s: "profits",
      p: "profit",
    },
    pastSimple: {
      s: "profited",
      p: "profited",
    },
  },
  { // VoA
    i: "program",
    presentSimple: {
      s: "programs",
      p: "program",
    },
    pastSimple: {
      s: "programmed",
      p: "programmed",
    },
  },
  { // VoA
    i: "progress",
    presentSimple: {
      s: "progresses",
      p: "progress",
    },
    pastSimple: {
      s: "progressed",
      p: "progressed",
    },
  },
  { // VoA
    i: "project",
    presentSimple: {
      s: "projects",
      p: "project",
    },
    pastSimple: {
      s: "projected",
      p: "projected",
    },
  },
  { // VoA
    i: "propose",
    presentSimple: {
      s: "proposes",
      p: "propose",
    },
    pastSimple: {
      s: "proposed",
      p: "proposed",
    },
  },
  { // VoA
    i: "protect",
    presentSimple: {
      s: "protects",
      p: "protect",
    },
    pastSimple: {
      s: "protected",
      p: "protected",
    },
  },
  { // VoA
    i: "protest",
    presentSimple: {
      s: "protests",
      p: "protest",
    },
    pastSimple: {
      s: "protested",
      p: "protested",
    },
  },
  { // VoA
    i: "prove",
    presentSimple: {
      s: "proves",
      p: "prove",
    },
    pastSimple: {
      s: "proved",
      p: "proved",
    },
  },
  { // VoA
    i: "provide",
    presentSimple: {
      s: "provides",
      p: "provide",
    },
    pastSimple: {
      s: "provided",
      p: "provided",
    },
  },
  { // VoA
    i: "publish",
    presentSimple: {
      s: "publishes",
      p: "publish",
    },
    pastSimple: {
      s: "published",
      p: "published",
    },
  },
  { // VoA
    i: "pull",
    presentSimple: {
      s: "pulls",
      p: "pull",
    },
    pastSimple: {
      s: "pulled",
      p: "pulled",
    },
  },
  { // VoA
    i: "pump",
    presentSimple: {
      s: "pumps",
      p: "pump",
    },
    pastSimple: {
      s: "pumped",
      p: "pumped",
    },
  },
  { // VoA
    i: "punish",
    presentSimple: {
      s: "punishes",
      p: "punish",
    },
    pastSimple: {
      s: "punished",
      p: "punished",
    },
  },
  { // VoA
    i: "purchase",
    presentSimple: {
      s: "purchases",
      p: "purchase",
    },
    pastSimple: {
      s: "purchased",
      p: "purchased",
    },
  },
  { // VoA
    i: "push",
    presentSimple: {
      s: "pushes",
      p: "push",
    },
    pastSimple: {
      s: "pushed",
      p: "pushed",
    },
  },
  { // VoA
    i: "put",
    presentSimple: {
      s: "puts",
      p: "put",
    },
    pastSimple: {
      s: "put",
      p: "put",
    },
  },
  { // VoA
    i: "question",
    presentSimple: {
      s: "questions",
      p: "question",
    },
    pastSimple: {
      s: "questioned",
      p: "questioned",
    },
  },
  { // VoA
    i: "quiet",
    presentSimple: {
      s: "quiets",
      p: "quiet",
    },
    pastSimple: {
      s: "quieted",
      p: "quieted",
    },
  },
  { // VoA
    i: "race",
    presentSimple: {
      s: "races",
      p: "race",
    },
    pastSimple: {
      s: "raced",
      p: "raced",
    },
  },
  { // VoA
    i: "radio",
    presentSimple: {
      s: "radios",
      p: "radio",
    },
    pastSimple: {
      s: "radioed",
      p: "radioed",
    },
  },
  { // VoA
    i: "raid",
    presentSimple: {
      s: "raids",
      p: "raid",
    },
    pastSimple: {
      s: "raided",
      p: "raided",
    },
  },
  { // VoA
    i: "rain",
    presentSimple: {
      s: "rains",
      p: "rain",
    },
    pastSimple: {
      s: "rained",
      p: "rained",
    },
  },
  { // VoA
    i: "raise",
    presentSimple: {
      s: "raises",
      p: "raise",
    },
    pastSimple: {
      s: "raised",
      p: "raised",
    },
  },
  { // VoA
    i: "rate",
    presentSimple: {
      s: "rates",
      p: "rate",
    },
    pastSimple: {
      s: "rated",
      p: "rated",
    },
  },
  { // VoA
    i: "reach",
    presentSimple: {
      s: "reaches",
      p: "reach",
    },
    pastSimple: {
      s: "reached",
      p: "reached",
    },
  },
  { // VoA
    i: "react",
    presentSimple: {
      s: "reacts",
      p: "react",
    },
    pastSimple: {
      s: "reacted",
      p: "reacted",
    },
  },
  { // VoA
    i: "read",
    presentSimple: {
      s: "reads",
      p: "read",
    },
    pastSimple: {
      s: "read",
      p: "read",
    },
  },
  { // VoA
    i: "ready",
    presentSimple: {
      s: "readies",
      p: "ready",
    },
    pastSimple: {
      s: "readied",
      p: "readied",
    },
  },
  { // VoA
    i: "reason",
    presentSimple: {
      s: "reasons",
      p: "reason",
    },
    pastSimple: {
      s: "reasoned",
      p: "reasoned",
    },
  },
  { // VoA
    i: "rebel",
    presentSimple: {
      s: "rebels",
      p: "rebel",
    },
    pastSimple: {
      s: "rebelled",
      p: "rebelled",
    },
  },
  { // VoA
    i: "receive",
    presentSimple: {
      s: "receives",
      p: "receive",
    },
    pastSimple: {
      s: "received",
      p: "received",
    },
  },
  { // VoA
    i: "recognize",
    presentSimple: {
      s: "recognizes",
      p: "recognize",
    },
    pastSimple: {
      s: "recognized",
      p: "recognized",
    },
  },
  { // VoA
    i: "record",
    presentSimple: {
      s: "records",
      p: "record",
    },
    pastSimple: {
      s: "recorded",
      p: "recorded",
    },
  },
  { // VoA
    i: "recover",
    presentSimple: {
      s: "recovers",
      p: "recover",
    },
    pastSimple: {
      s: "recovered",
      p: "recovered",
    },
  },
  { // VoA
    i: "reduce",
    presentSimple: {
      s: "reduces",
      p: "reduce",
    },
    pastSimple: {
      s: "reduced",
      p: "reduced",
    },
  },
  { // VoA
    i: "reform",
    presentSimple: {
      s: "reforms",
      p: "reform",
    },
    pastSimple: {
      s: "reformed",
      p: "reformed",
    },
  },
  { // VoA
    i: "refuse",
    presentSimple: {
      s: "refuses",
      p: "refuse",
    },
    pastSimple: {
      s: "refused",
      p: "refused",
    },
  },
  { // VoA
    i: "regret",
    presentSimple: {
      s: "regrets",
      p: "regret",
    },
    pastSimple: {
      s: "regretted",
      p: "regretted",
    },
  },
  { // VoA
    i: "reject",
    presentSimple: {
      s: "rejects",
      p: "reject",
    },
    pastSimple: {
      s: "rejected",
      p: "rejected",
    },
  },
  { // VoA
    i: "release",
    presentSimple: {
      s: "releases",
      p: "release",
    },
    pastSimple: {
      s: "released",
      p: "released",
    },
  },
  { // VoA
    i: "remain",
    presentSimple: {
      s: "remains",
      p: "remain",
    },
    pastSimple: {
      s: "remained",
      p: "remained",
    },
  },
  { // VoA
    i: "remember",
    presentSimple: {
      s: "remembers",
      p: "remember",
    },
    pastSimple: {
      s: "remembered",
      p: "remembered",
    },
  },
  { // VoA
    i: "remove",
    presentSimple: {
      s: "removes",
      p: "remove",
    },
    pastSimple: {
      s: "removed",
      p: "removed",
    },
  },
  { // VoA
    i: "repair",
    presentSimple: {
      s: "repairs",
      p: "repair",
    },
    pastSimple: {
      s: "repaired",
      p: "repaired",
    },
  },
  { // VoA
    i: "repeat",
    presentSimple: {
      s: "repeats",
      p: "repeat",
    },
    pastSimple: {
      s: "repeated",
      p: "repeated",
    },
  },
  { // VoA
    i: "report",
    presentSimple: {
      s: "reports",
      p: "report",
    },
    pastSimple: {
      s: "reported",
      p: "reported",
    },
  },
  { // VoA
    i: "represent",
    presentSimple: {
      s: "represents",
      p: "represent",
    },
    pastSimple: {
      s: "represented",
      p: "represented",
    },
  },
  { // VoA
    i: "repress",
    presentSimple: {
      s: "represses",
      p: "repress",
    },
    pastSimple: {
      s: "repressed",
      p: "repressed",
    },
  },
  { // VoA
    i: "request",
    presentSimple: {
      s: "requests",
      p: "request",
    },
    pastSimple: {
      s: "requested",
      p: "requested",
    },
  },
  { // VoA
    i: "require",
    presentSimple: {
      s: "requires",
      p: "require",
    },
    pastSimple: {
      s: "required",
      p: "required",
    },
  },
  { // VoA
    i: "rescue",
    presentSimple: {
      s: "rescues",
      p: "rescue",
    },
    pastSimple: {
      s: "rescued",
      p: "rescued",
    },
  },
  { // VoA
    i: "research",
    presentSimple: {
      s: "researches",
      p: "research",
    },
    pastSimple: {
      s: "researched",
      p: "researched",
    },
  },
  { // VoA
    i: "resign",
    presentSimple: {
      s: "resigns",
      p: "resign",
    },
    pastSimple: {
      s: "resigned",
      p: "resigned",
    },
  },
  { // VoA
    i: "resist",
    presentSimple: {
      s: "resists",
      p: "resist",
    },
    pastSimple: {
      s: "resisted",
      p: "resisted",
    },
  },
  { // VoA
    i: "rest",
    presentSimple: {
      s: "rests",
      p: "rest",
    },
    pastSimple: {
      s: "rested",
      p: "rested",
    },
  },
  { // VoA
    i: "restrain",
    presentSimple: {
      s: "restrains",
      p: "restrain",
    },
    pastSimple: {
      s: "restrained",
      p: "restrained",
    },
  },
  { // VoA
    i: "restrict",
    presentSimple: {
      s: "restricts",
      p: "restrict",
    },
    pastSimple: {
      s: "restricted",
      p: "restricted",
    },
  },
  { // VoA
    i: "result",
    presentSimple: {
      s: "results",
      p: "result",
    },
    pastSimple: {
      s: "resulted",
      p: "resulted",
    },
  },
  { // VoA
    i: "retire",
    presentSimple: {
      s: "retires",
      p: "retire",
    },
    pastSimple: {
      s: "retired",
      p: "retired",
    },
  },
  { // VoA
    i: "return",
    presentSimple: {
      s: "returns",
      p: "return",
    },
    pastSimple: {
      s: "returned",
      p: "returned",
    },
  },
  { // VoA
    i: "revolt",
    presentSimple: {
      s: "revolts",
      p: "revolt",
    },
    pastSimple: {
      s: "revolted",
      p: "revolted",
    },
  },
  { // VoA
    i: "ride",
    presentSimple: {
      s: "rides",
      p: "ride",
    },
    pastSimple: {
      s: "rode",
      p: "rode",
    },
  },
  { // VoA
    i: "riot",
    presentSimple: {
      s: "riots",
      p: "riot",
    },
    pastSimple: {
      s: "rioted",
      p: "rioted",
    },
  },
  { // VoA
    i: "rise",
    presentSimple: {
      s: "rises",
      p: "rise",
    },
    pastSimple: {
      s: "rose",
      p: "rose",
    },
  },
  { // VoA
    i: "risk",
    presentSimple: {
      s: "risks",
      p: "risk",
    },
    pastSimple: {
      s: "risked",
      p: "risked",
    },
  },
  { // VoA
    i: "rob",
    presentSimple: {
      s: "robs",
      p: "rob",
    },
    pastSimple: {
      s: "robbed",
      p: "robbed",
    },
  },
  { // VoA
    i: "rock",
    presentSimple: {
      s: "rocks",
      p: "rock",
    },
    pastSimple: {
      s: "rocked",
      p: "rocked",
    },
  },
  { // VoA
    i: "roll",
    presentSimple: {
      s: "rolls",
      p: "roll",
    },
    pastSimple: {
      s: "rolled",
      p: "rolled",
    },
  },
  { // VoA
    i: "root",
    presentSimple: {
      s: "roots",
      p: "root",
    },
    pastSimple: {
      s: "rooted",
      p: "rooted",
    },
  },
  { // VoA
    i: "round",
    presentSimple: {
      s: "rounds",
      p: "round",
    },
    pastSimple: {
      s: "rounded",
      p: "rounded",
    },
  },
  { // VoA
    i: "rub",
    presentSimple: {
      s: "rubs",
      p: "rub",
    },
    pastSimple: {
      s: "rubbed",
      p: "rubbed",
    },
  },
  { // VoA
    i: "ruin",
    presentSimple: {
      s: "ruins",
      p: "ruin",
    },
    pastSimple: {
      s: "ruined",
      p: "ruined",
    },
  },
  { // VoA
    i: "rule",
    presentSimple: {
      s: "rules",
      p: "rule",
    },
    pastSimple: {
      s: "ruled",
      p: "ruled",
    },
  },
  { // VoA
    i: "run",
    presentSimple: {
      s: "runs",
      p: "run",
    },
    pastSimple: {
      s: "ran",
      p: "ran",
    },
  },
  { // VoA
    i: "sabotage",
    presentSimple: {
      s: "sabotages",
      p: "sabotage",
    },
    pastSimple: {
      s: "sabotaged",
      p: "sabotaged",
    },
  },
  { // VoA
    i: "sacrifice",
    presentSimple: {
      s: "sacrifices",
      p: "sacrifice",
    },
    pastSimple: {
      s: "sacrificed",
      p: "sacrificed",
    },
  },
  { // VoA
    i: "sail",
    presentSimple: {
      s: "sails",
      p: "sail",
    },
    pastSimple: {
      s: "sailed",
      p: "sailed",
    },
  },
  { // VoA
    i: "salt",
    presentSimple: {
      s: "salts",
      p: "salt",
    },
    pastSimple: {
      s: "salted",
      p: "salted",
    },
  },
  { // VoA
    i: "sand",
    presentSimple: {
      s: "sands",
      p: "sand",
    },
    pastSimple: {
      s: "sanded",
      p: "sanded",
    },
  },
  { // VoA
    i: "satisfy",
    presentSimple: {
      s: "satisfies",
      p: "satisfy",
    },
    pastSimple: {
      s: "satisfied",
      p: "satisfied",
    },
  },
  { // VoA
    i: "save",
    presentSimple: {
      s: "saves",
      p: "save",
    },
    pastSimple: {
      s: "saved",
      p: "saved",
    },
  },
  { // VoA
    i: "say",
    presentSimple: {
      s: "says",
      p: "say",
    },
    pastSimple: {
      s: "said",
      p: "said",
    },
  },
  { // VoA
    i: "search",
    presentSimple: {
      s: "searches",
      p: "search",
    },
    pastSimple: {
      s: "searched",
      p: "searched",
    },
  },
  { // VoA
    i: "season",
    presentSimple: {
      s: "seasons",
      p: "season",
    },
    pastSimple: {
      s: "seasoned",
      p: "seasoned",
    },
  },
  { // VoA
    i: "see",
    presentSimple: {
      s: "sees",
      p: "see",
    },
    pastSimple: {
      s: "saw",
      p: "saw",
    },
  },
  { // VoA
    i: "seed",
    presentSimple: {
      s: "seeds",
      p: "seed",
    },
    pastSimple: {
      s: "seeded",
      p: "seeded",
    },
  },
  { // VoA
    i: "seek",
    presentSimple: {
      s: "seeks",
      p: "seek",
    },
    pastSimple: {
      s: "sought",
      p: "sought",
    },
  },
  { // VoA
    i: "seem",
    presentSimple: {
      s: "seems",
      p: "seem",
    },
    pastSimple: {
      s: "seemed",
      p: "seemed",
    },
  },
  { // VoA
    i: "seize",
    presentSimple: {
      s: "seizes",
      p: "seize",
    },
    pastSimple: {
      s: "seized",
      p: "seized",
    },
  },
  { // VoA
    i: "sell",
    presentSimple: {
      s: "sells",
      p: "sell",
    },
    pastSimple: {
      s: "sold",
      p: "sold",
    },
  },
  { // VoA
    i: "send",
    presentSimple: {
      s: "sends",
      p: "send",
    },
    pastSimple: {
      s: "sent",
      p: "sent",
    },
  },
  { // VoA
    i: "sense",
    presentSimple: {
      s: "senses",
      p: "sense",
    },
    pastSimple: {
      s: "sensed",
      p: "sensed",
    },
  },
  { // VoA
    i: "sentence",
    presentSimple: {
      s: "sentences",
      p: "sentence",
    },
    pastSimple: {
      s: "sentenced",
      p: "sentenced",
    },
  },
  { // VoA
    i: "separate",
    presentSimple: {
      s: "separates",
      p: "separate",
    },
    pastSimple: {
      s: "separated",
      p: "separated",
    },
  },
  { // VoA
    i: "serve",
    presentSimple: {
      s: "serves",
      p: "serve",
    },
    pastSimple: {
      s: "served",
      p: "served",
    },
  },
  { // VoA
    i: "service",
    presentSimple: {
      s: "services",
      p: "service",
    },
    pastSimple: {
      s: "serviced",
      p: "serviced",
    },
  },
  { // VoA
    i: "set",
    presentSimple: {
      s: "sets",
      p: "set",
    },
    pastSimple: {
      s: "set",
      p: "set",
    },
  },
  { // VoA
    i: "settle",
    presentSimple: {
      s: "settles",
      p: "settle",
    },
    pastSimple: {
      s: "settled",
      p: "settled",
    },
  },
  { // VoA
    i: "shake",
    presentSimple: {
      s: "shakes",
      p: "shake",
    },
    pastSimple: {
      s: "shook",
      p: "shook",
    },
  },
  { // VoA
    i: "shape",
    presentSimple: {
      s: "shapes",
      p: "shape",
    },
    pastSimple: {
      s: "shaped",
      p: "shaped",
    },
  },
  { // VoA
    i: "share",
    presentSimple: {
      s: "shares",
      p: "share",
    },
    pastSimple: {
      s: "shared",
      p: "shared",
    },
  },
  { // VoA
    i: "shell",
    presentSimple: {
      s: "shells",
      p: "shell",
    },
    pastSimple: {
      s: "shelled",
      p: "shelled",
    },
  },
  { // VoA
    i: "shelter",
    presentSimple: {
      s: "shelters",
      p: "shelter",
    },
    pastSimple: {
      s: "sheltered",
      p: "sheltered",
    },
  },
  { // VoA
    i: "shine",
    presentSimple: {
      s: "shines",
      p: "shine",
    },
    pastSimple: {
      s: "shone",
      p: "shone",
    },
  },
  { // VoA
    i: "ship",
    presentSimple: {
      s: "ships",
      p: "ship",
    },
    pastSimple: {
      s: "shipped",
      p: "shipped",
    },
  },
  { // VoA
    i: "shock",
    presentSimple: {
      s: "shocks",
      p: "shock",
    },
    pastSimple: {
      s: "shocked",
      p: "shocked",
    },
  },
  { // VoA
    i: "shoot",
    presentSimple: {
      s: "shoots",
      p: "shoot",
    },
    pastSimple: {
      s: "shot",
      p: "shot",
    },
  },
  { // VoA
    i: "should",
    presentSimple: {
      s: "should",
      p: "should",
    },
    pastSimple: {
      s: "should have",
      p: "should have",
    },
  },
  { // VoA
    i: "shout",
    presentSimple: {
      s: "shouts",
      p: "shout",
    },
    pastSimple: {
      s: "shouted",
      p: "shouted",
    },
  },
  { // VoA
    i: "show",
    presentSimple: {
      s: "shows",
      p: "show",
    },
    pastSimple: {
      s: "showed",
      p: "showed",
    },
  },
  { // VoA
    i: "shrink",
    presentSimple: {
      s: "shrinks",
      p: "shrink",
    },
    pastSimple: {
      s: "shrank",
      p: "shrank",
    },
  },
  { // VoA
    i: "side",
    presentSimple: {
      s: "sides",
      p: "side",
    },
    pastSimple: {
      s: "sided",
      p: "sided",
    },
  },
  { // VoA
    i: "sign",
    presentSimple: {
      s: "signs",
      p: "sign",
    },
    pastSimple: {
      s: "signed",
      p: "signed",
    },
  },
  { // VoA
    i: "signal",
    presentSimple: {
      s: "signals",
      p: "signal",
    },
    pastSimple: {
      s: "signaled",
      p: "signaled",
    },
  },
  { // VoA
    i: "silence",
    presentSimple: {
      s: "silences",
      p: "silence",
    },
    pastSimple: {
      s: "silenced",
      p: "silenced",
    },
  },
  { // VoA
    i: "sing",
    presentSimple: {
      s: "sings",
      p: "sing",
    },
    pastSimple: {
      s: "sang",
      p: "sang",
    },
  },
  { // VoA
    i: "sink",
    presentSimple: {
      s: "sinks",
      p: "sink",
    },
    pastSimple: {
      s: "sank",
      p: "sank",
    },
  },
  { // VoA
    i: "sit",
    presentSimple: {
      s: "sits",
      p: "sit",
    },
    pastSimple: {
      s: "sat",
      p: "sat",
    },
  },
  { // VoA
    i: "size",
    presentSimple: {
      s: "sizes",
      p: "size",
    },
    pastSimple: {
      s: "sized",
      p: "sized",
    },
  },
  { // VoA
    i: "sleep",
    presentSimple: {
      s: "sleeps",
      p: "sleep",
    },
    pastSimple: {
      s: "slept",
      p: "slept",
    },
  },
  { // VoA
    i: "slide",
    presentSimple: {
      s: "slides",
      p: "slide",
    },
    pastSimple: {
      s: "slid",
      p: "slid",
    },
  },
  { // VoA
    i: "slow",
    presentSimple: {
      s: "slows",
      p: "slow",
    },
    pastSimple: {
      s: "slowed",
      p: "slowed",
    },
  },
  { // VoA
    i: "smash",
    presentSimple: {
      s: "smashes",
      p: "smash",
    },
    pastSimple: {
      s: "smashed",
      p: "smashed",
    },
  },
  { // VoA
    i: "smell",
    presentSimple: {
      s: "smells",
      p: "smell",
    },
    pastSimple: {
      s: "smelled",
      p: "smelled",
    },
  },
  { // VoA
    i: "smoke",
    presentSimple: {
      s: "smokes",
      p: "smoke",
    },
    pastSimple: {
      s: "smoked",
      p: "smoked",
    },
  },
  { // VoA
    i: "smooth",
    presentSimple: {
      s: "smooths",
      p: "smooth",
    },
    pastSimple: {
      s: "smoothed",
      p: "smoothed",
    },
  },
  { // VoA
    i: "snow",
    presentSimple: {
      s: "snows",
      p: "snow",
    },
    pastSimple: {
      s: "snowed",
      p: "snowed",
    },
  },
  { // VoA
    i: "soil",
    presentSimple: {
      s: "soils",
      p: "soil",
    },
    pastSimple: {
      s: "soiled",
      p: "soiled",
    },
  },
  { // VoA
    i: "solve",
    presentSimple: {
      s: "solves",
      p: "solve",
    },
    pastSimple: {
      s: "solved",
      p: "solved",
    },
  },
  { // VoA
    i: "sort",
    presentSimple: {
      s: "sorts",
      p: "sort",
    },
    pastSimple: {
      s: "sorted",
      p: "sorted",
    },
  },
  { // VoA
    i: "sound",
    presentSimple: {
      s: "sounds",
      p: "sound",
    },
    pastSimple: {
      s: "sounded",
      p: "sounded",
    },
  },
  { // VoA
    i: "speak",
    presentSimple: {
      s: "speaks",
      p: "speak",
    },
    pastSimple: {
      s: "spoke",
      p: "spoke",
    },
  },
  { // VoA
    i: "speed",
    presentSimple: {
      s: "speeds",
      p: "speed",
    },
    pastSimple: {
      s: "sped",
      p: "sped",
    },
  },
  { // VoA
    i: "spend",
    presentSimple: {
      s: "spends",
      p: "spend",
    },
    pastSimple: {
      s: "spent",
      p: "spent",
    },
  },
  { // VoA
    i: "spill",
    presentSimple: {
      s: "spills",
      p: "spill",
    },
    pastSimple: {
      s: "spilled",
      p: "spilled",
    },
  },
  { // VoA
    i: "split",
    presentSimple: {
      s: "splits",
      p: "split",
    },
    pastSimple: {
      s: "split",
      p: "split",
    },
  },
  { // VoA
    i: "spread",
    presentSimple: {
      s: "spreads",
      p: "spread",
    },
    pastSimple: {
      s: "spread",
      p: "spread",
    },
  },
  { // VoA
    i: "spring",
    presentSimple: {
      s: "springs",
      p: "spring",
    },
    pastSimple: {
      s: "sprung",
      p: "sprung",
    },
  },
  { // VoA
    i: "spy",
    presentSimple: {
      s: "spies",
      p: "spy",
    },
    pastSimple: {
      s: "spied",
      p: "spied",
    },
  },
  { // VoA
    i: "square",
    presentSimple: {
      s: "squares",
      p: "square",
    },
    pastSimple: {
      s: "squared",
      p: "squared",
    },
  },
  { // VoA
    i: "stab",
    presentSimple: {
      s: "stabs",
      p: "stab",
    },
    pastSimple: {
      s: "stabbed",
      p: "stabbed",
    },
  },
  { // VoA
    i: "stand",
    presentSimple: {
      s: "stands",
      p: "stand",
    },
    pastSimple: {
      s: "stood",
      p: "stood",
    },
  },
  { // VoA
    i: "star",
    presentSimple: {
      s: "stars",
      p: "star",
    },
    pastSimple: {
      s: "starred",
      p: "starred",
    },
  },
  { // VoA
    i: "start",
    presentSimple: {
      s: "starts",
      p: "start",
    },
    pastSimple: {
      s: "started",
      p: "started",
    },
  },
  { // VoA
    i: "starve",
    presentSimple: {
      s: "starves",
      p: "starve",
    },
    pastSimple: {
      s: "starved",
      p: "starved",
    },
  },
  { // VoA
    i: "state",
    presentSimple: {
      s: "states",
      p: "state",
    },
    pastSimple: {
      s: "stated",
      p: "stated",
    },
  },
  { // VoA
    i: "station",
    presentSimple: {
      s: "stations",
      p: "station",
    },
    pastSimple: {
      s: "stationed",
      p: "stationed",
    },
  },
  { // VoA
    i: "stay",
    presentSimple: {
      s: "stays",
      p: "stay",
    },
    pastSimple: {
      s: "stayed",
      p: "stayed",
    },
  },
  { // VoA
    i: "steal",
    presentSimple: {
      s: "steals",
      p: "steal",
    },
    pastSimple: {
      s: "stole",
      p: "stole",
    },
  },
  { // VoA
    i: "steam",
    presentSimple: {
      s: "steams",
      p: "steam",
    },
    pastSimple: {
      s: "steamed",
      p: "steamed",
    },
  },
  { // VoA
    i: "step",
    presentSimple: {
      s: "steps",
      p: "step",
    },
    pastSimple: {
      s: "stepped",
      p: "stepped",
    },
  },
  { // VoA
    i: "stick",
    presentSimple: {
      s: "sticks",
      p: "stick",
    },
    pastSimple: {
      s: "stuck",
      p: "stuck",
    },
  },
  { // VoA
    i: "stop",
    presentSimple: {
      s: "stops",
      p: "stop",
    },
    pastSimple: {
      s: "stopped",
      p: "stopped",
    },
  },
  { // VoA
    i: "store",
    presentSimple: {
      s: "stores",
      p: "store",
    },
    pastSimple: {
      s: "stored",
      p: "stored",
    },
  },
  { // VoA
    i: "storm",
    presentSimple: {
      s: "storms",
      p: "storm",
    },
    pastSimple: {
      s: "stormed",
      p: "stormed",
    },
  },
  { // VoA
    i: "stretch",
    presentSimple: {
      s: "stretches",
      p: "stretch",
    },
    pastSimple: {
      s: "stretched",
      p: "stretched",
    },
  },
  { // VoA
    i: "strike",
    presentSimple: {
      s: "strikes",
      p: "strike",
    },
    pastSimple: {
      s: "striked",
      p: "striked",
    },
  },
  { // VoA
    i: "struggle",
    presentSimple: {
      s: "struggles",
      p: "struggle",
    },
    pastSimple: {
      s: "struggled",
      p: "struggled",
    },
  },
  { // VoA
    i: "study",
    presentSimple: {
      s: "studies",
      p: "study",
    },
    pastSimple: {
      s: "studied",
      p: "studied",
    },
  },
  { // VoA
    i: "substitute",
    presentSimple: {
      s: "substitutes",
      p: "substitute",
    },
    pastSimple: {
      s: "substituted",
      p: "substituted",
    },
  },
  { // VoA
    i: "succeed",
    presentSimple: {
      s: "succeeds",
      p: "succeed",
    },
    pastSimple: {
      s: "succeeded",
      p: "succeeded",
    },
  },
  { // VoA
    i: "suffer",
    presentSimple: {
      s: "suffers",
      p: "suffer",
    },
    pastSimple: {
      s: "suffered",
      p: "suffered",
    },
  },
  { // VoA
    i: "suggest",
    presentSimple: {
      s: "suggests",
      p: "suggest",
    },
    pastSimple: {
      s: "suggested",
      p: "suggested",
    },
  },
  { // VoA
    i: "supervise",
    presentSimple: {
      s: "supervises",
      p: "supervise",
    },
    pastSimple: {
      s: "supervised",
      p: "supervised",
    },
  },
  { // VoA
    i: "supply",
    presentSimple: {
      s: "supplies",
      p: "supply",
    },
    pastSimple: {
      s: "supplied",
      p: "supplied",
    },
  },
  { // VoA
    i: "support",
    presentSimple: {
      s: "supports",
      p: "support",
    },
    pastSimple: {
      s: "supported",
      p: "supported",
    },
  },
  { // VoA
    i: "suppose",
    presentSimple: {
      s: "supposes",
      p: "suppose",
    },
    pastSimple: {
      s: "supposed",
      p: "supposed",
    },
  },
  { // VoA
    i: "suppress",
    presentSimple: {
      s: "suppresses",
      p: "suppress",
    },
    pastSimple: {
      s: "suppressed",
      p: "suppressed",
    },
  },
  { // VoA
    i: "surface",
    presentSimple: {
      s: "surfaces",
      p: "surface",
    },
    pastSimple: {
      s: "surfaced",
      p: "surfaced",
    },
  },
  { // VoA
    i: "surprise",
    presentSimple: {
      s: "surprises",
      p: "surprise",
    },
    pastSimple: {
      s: "surprised",
      p: "surprised",
    },
  },
  { // VoA
    i: "surrender",
    presentSimple: {
      s: "surrenders",
      p: "surrender",
    },
    pastSimple: {
      s: "surrendered",
      p: "surrendered",
    },
  },
  { // VoA
    i: "surround",
    presentSimple: {
      s: "surrounds",
      p: "surround",
    },
    pastSimple: {
      s: "surrounded",
      p: "surrounded",
    },
  },
  { // VoA
    i: "survive",
    presentSimple: {
      s: "survives",
      p: "survive",
    },
    pastSimple: {
      s: "survived",
      p: "survived",
    },
  },
  { // VoA
    i: "suspect",
    presentSimple: {
      s: "suspects",
      p: "suspect",
    },
    pastSimple: {
      s: "suspected",
      p: "suspected",
    },
  },
  { // VoA
    i: "suspend",
    presentSimple: {
      s: "suspends",
      p: "suspend",
    },
    pastSimple: {
      s: "suspended",
      p: "suspended",
    },
  },
  { // VoA
    i: "swallow",
    presentSimple: {
      s: "swallows",
      p: "swallow",
    },
    pastSimple: {
      s: "swallowed",
      p: "swallowed",
    },
  },
  { // VoA
    i: "swim",
    presentSimple: {
      s: "swims",
      p: "swim",
    },
    pastSimple: {
      s: "swam",
      p: "swam",
    },
  },
  { // VoA
    i: "take",
    presentSimple: {
      s: "takes",
      p: "take",
    },
    pastSimple: {
      s: "took",
      p: "took",
    },
  },
  { // VoA
    i: "talk",
    presentSimple: {
      s: "talks",
      p: "talk",
    },
    pastSimple: {
      s: "talked",
      p: "talked",
    },
  },
  { // VoA
    i: "target",
    presentSimple: {
      s: "targets",
      p: "target",
    },
    pastSimple: {
      s: "targeted",
      p: "targeted",
    },
  },
  { // VoA
    i: "taste",
    presentSimple: {
      s: "tastes",
      p: "taste",
    },
    pastSimple: {
      s: "tasted",
      p: "tasted",
    },
  },
  { // VoA
    i: "tax",
    presentSimple: {
      s: "taxes",
      p: "tax",
    },
    pastSimple: {
      s: "taxed",
      p: "taxed",
    },
  },
  { // VoA
    i: "teach",
    presentSimple: {
      s: "teaches",
      p: "teach",
    },
    pastSimple: {
      s: "taught",
      p: "taught",
    },
  },
  { // VoA
    i: "tear",
    presentSimple: {
      s: "tears",
      p: "tear",
    },
    pastSimple: {
      s: "teared",
      p: "teared",
    },
  },
  { // VoA
    i: "telephone",
    presentSimple: {
      s: "telephones",
      p: "telephone",
    },
    pastSimple: {
      s: "telephoned",
      p: "telephoned",
    },
  },
  { // VoA
    i: "tell",
    presentSimple: {
      s: "tells",
      p: "tell",
    },
    pastSimple: {
      s: "told",
      p: "told",
    },
  },
  { // VoA
    i: "tense",
    presentSimple: {
      s: "tenses",
      p: "tense",
    },
    pastSimple: {
      s: "tensed",
      p: "tensed",
    },
  },
  { // VoA
    i: "test",
    presentSimple: {
      s: "tests",
      p: "test",
    },
    pastSimple: {
      s: "tested",
      p: "tested",
    },
  },
  { // VoA
    i: "thank",
    presentSimple: {
      s: "thanks",
      p: "thank",
    },
    pastSimple: {
      s: "thanked",
      p: "thanked",
    },
  },
  { // VoA
    i: "thin",
    presentSimple: {
      s: "thins",
      p: "thin",
    },
    pastSimple: {
      s: "thinned",
      p: "thinned",
    },
  },
  { // VoA
    i: "think",
    presentSimple: {
      s: "thinks",
      p: "think",
    },
    pastSimple: {
      s: "thought",
      p: "thought",
    },
  },
  { // VoA
    i: "threaten",
    presentSimple: {
      s: "threatens",
      p: "threaten",
    },
    pastSimple: {
      s: "threatened",
      p: "threatened",
    },
  },
  { // VoA
    i: "throw",
    presentSimple: {
      s: "throws",
      p: "throw",
    },
    pastSimple: {
      s: "threw",
      p: "threw",
    },
  },
  { // VoA
    i: "tie",
    presentSimple: {
      s: "ties",
      p: "tie",
    },
    pastSimple: {
      s: "tied",
      p: "tied",
    },
  },
  { // VoA
    i: "time",
    presentSimple: {
      s: "times",
      p: "time",
    },
    pastSimple: {
      s: "timed",
      p: "timed",
    },
  },
  { // VoA
    i: "top",
    presentSimple: {
      s: "tops",
      p: "top",
    },
    pastSimple: {
      s: "topped",
      p: "topped",
    },
  },
  { // VoA
    i: "torture",
    presentSimple: {
      s: "tortures",
      p: "torture",
    },
    pastSimple: {
      s: "tortured",
      p: "tortured",
    },
  },
  { // VoA
    i: "total",
    presentSimple: {
      s: "totals",
      p: "total",
    },
    pastSimple: {
      s: "totaled",
      p: "totaled",
    },
  },
  { // VoA
    i: "touch",
    presentSimple: {
      s: "touches",
      p: "touch",
    },
    pastSimple: {
      s: "touched",
      p: "touched",
    },
  },
  { // VoA
    i: "trade",
    presentSimple: {
      s: "trades",
      p: "trade",
    },
    pastSimple: {
      s: "traded",
      p: "traded",
    },
  },
  { // VoA
    i: "train",
    presentSimple: {
      s: "trains",
      p: "train",
    },
    pastSimple: {
      s: "trained",
      p: "trained",
    },
  },
  { // VoA
    i: "transport",
    presentSimple: {
      s: "transports",
      p: "transport",
    },
    pastSimple: {
      s: "transported",
      p: "transported",
    },
  },
  { // VoA
    i: "trap",
    presentSimple: {
      s: "traps",
      p: "trap",
    },
    pastSimple: {
      s: "trapped",
      p: "trapped",
    },
  },
  { // VoA
    i: "travel",
    presentSimple: {
      s: "travels",
      p: "travel",
    },
    pastSimple: {
      s: "traveled",
      p: "traveled",
    },
  },
  { // VoA
    i: "treasure",
    presentSimple: {
      s: "treasures",
      p: "treasure",
    },
    pastSimple: {
      s: "treasured",
      p: "treasured",
    },
  },
  { // VoA
    i: "treat",
    presentSimple: {
      s: "treats",
      p: "treat",
    },
    pastSimple: {
      s: "treated",
      p: "treated",
    },
  },
  { // VoA
    i: "trial",
    presentSimple: {
      s: "trials",
      p: "trial",
    },
    pastSimple: {
      s: "trialed",
      p: "trialed",
    },
  },
  { // VoA
    i: "trick",
    presentSimple: {
      s: "tricks",
      p: "trick",
    },
    pastSimple: {
      s: "tricked",
      p: "tricked",
    },
  },
  { // VoA
    i: "trip",
    presentSimple: {
      s: "trips",
      p: "trip",
    },
    pastSimple: {
      s: "tripped",
      p: "tripped",
    },
  },
  { // VoA
    i: "trouble",
    presentSimple: {
      s: "troubles",
      p: "trouble",
    },
    pastSimple: {
      s: "troubled",
      p: "troubled",
    },
  },
  { // VoA
    i: "trust",
    presentSimple: {
      s: "trusts",
      p: "trust",
    },
    pastSimple: {
      s: "trusted",
      p: "trusted",
    },
  },
  { // VoA
    i: "try",
    presentSimple: {
      s: "tries",
      p: "try",
    },
    pastSimple: {
      s: "tried",
      p: "tried",
    },
  },
  { // VoA
    i: "turn",
    presentSimple: {
      s: "turns",
      p: "turn",
    },
    pastSimple: {
      s: "turned",
      p: "turned",
    },
  },
  { // VoA
    i: "understand",
    presentSimple: {
      s: "understands",
      p: "understand",
    },
    pastSimple: {
      s: "understood",
      p: "understood",
    },
  },
  { // VoA
    i: "unite",
    presentSimple: {
      s: "unites",
      p: "unite",
    },
    pastSimple: {
      s: "united",
      p: "united",
    },
  },
  { // VoA
    i: "urge",
    presentSimple: {
      s: "urges",
      p: "urge",
    },
    pastSimple: {
      s: "urged",
      p: "urged",
    },
  },
  { // VoA
    i: "use",
    presentSimple: {
      s: "uses",
      p: "use",
    },
    pastSimple: {
      s: "used",
      p: "used",
    },
  },
  { // VoA
    i: "value",
    presentSimple: {
      s: "values",
      p: "value",
    },
    pastSimple: {
      s: "valued",
      p: "valued",
    },
  },
  { // VoA
    i: "veto",
    presentSimple: {
      s: "vetoes",
      p: "veto",
    },
    pastSimple: {
      s: "vetoed",
      p: "vetoed",
    },
  },
  { // VoA
    i: "violate",
    presentSimple: {
      s: "violates",
      p: "violate",
    },
    pastSimple: {
      s: "violated",
      p: "violated",
    },
  },
  { // VoA
    i: "visit",
    presentSimple: {
      s: "visits",
      p: "visit",
    },
    pastSimple: {
      s: "visited",
      p: "visited",
    },
  },
  { // VoA
    i: "voice",
    presentSimple: {
      s: "voices",
      p: "voice",
    },
    pastSimple: {
      s: "voiced",
      p: "voiced",
    },
  },
  { // VoA
    i: "vote",
    presentSimple: {
      s: "votes",
      p: "vote",
    },
    pastSimple: {
      s: "voted",
      p: "voted",
    },
  },
  { // VoA
    i: "wait",
    presentSimple: {
      s: "waits",
      p: "wait",
    },
    pastSimple: {
      s: "waited",
      p: "waited",
    },
  },
  { // VoA
    i: "walk",
    presentSimple: {
      s: "walks",
      p: "walk",
    },
    pastSimple: {
      s: "walked",
      p: "walked",
    },
  },
  { // VoA
    i: "want",
    presentSimple: {
      s: "wants",
      p: "want",
    },
    pastSimple: {
      s: "wanted",
      p: "wanted",
    },
  },
  { // VoA
    i: "war",
    presentSimple: {
      s: "wars",
      p: "war",
    },
    pastSimple: {
      s: "warred",
      p: "warred",
    },
  },
  { // VoA
    i: "warm",
    presentSimple: {
      s: "warms",
      p: "warm",
    },
    pastSimple: {
      s: "warmed",
      p: "warmed",
    },
  },
  { // VoA
    i: "warn",
    presentSimple: {
      s: "warns",
      p: "warn",
    },
    pastSimple: {
      s: "warned",
      p: "warned",
    },
  },
  { // VoA
    i: "wash",
    presentSimple: {
      s: "washes",
      p: "wash",
    },
    pastSimple: {
      s: "washed",
      p: "washed",
    },
  },
  { // VoA
    i: "waste",
    presentSimple: {
      s: "wastes",
      p: "waste",
    },
    pastSimple: {
      s: "wasted",
      p: "wasted",
    },
  },
  { // VoA
    i: "watch",
    presentSimple: {
      s: "watches",
      p: "watch",
    },
    pastSimple: {
      s: "watched",
      p: "watched",
    },
  },
  { // VoA
    i: "water",
    presentSimple: {
      s: "waters",
      p: "water",
    },
    pastSimple: {
      s: "watered",
      p: "watered",
    },
  },
  { // VoA
    i: "wave",
    presentSimple: {
      s: "waves",
      p: "wave",
    },
    pastSimple: {
      s: "waved",
      p: "waved",
    },
  },
  { // VoA
    i: "wear",
    presentSimple: {
      s: "wears",
      p: "wear",
    },
    pastSimple: {
      s: "wore",
      p: "wore",
    },
  },
  { // VoA
    i: "weather",
    presentSimple: {
      s: "weathers",
      p: "weather",
    },
    pastSimple: {
      s: "weathered",
      p: "weathered",
    },
  },
  { // VoA
    i: "weigh",
    presentSimple: {
      s: "weighs",
      p: "weigh",
    },
    pastSimple: {
      s: "weighed",
      p: "weighed",
    },
  },
  { // VoA
    i: "welcome",
    presentSimple: {
      s: "welcomes",
      p: "welcome",
    },
    pastSimple: {
      s: "welcomed",
      p: "welcomed",
    },
  },
  { // VoA
    i: "wet",
    presentSimple: {
      s: "wets",
      p: "wet",
    },
    pastSimple: {
      s: "wet",
      p: "wet",
    },
  },
  { // VoA
    i: "wheel",
    presentSimple: {
      s: "wheels",
      p: "wheel",
    },
    pastSimple: {
      s: "wheeled",
      p: "wheeled",
    },
  },
  { // VoA
    i: "will",
    presentSimple: {
      s: "wills",
      p: "will",
    },
    pastSimple: {
      s: "willed",
      p: "willed",
    },
  },
  { // VoA
    i: "win",
    presentSimple: {
      s: "wins",
      p: "win",
    },
    pastSimple: {
      s: "won",
      p: "won",
    },
  },
  { // VoA
    i: "wind",
    presentSimple: {
      s: "winds",
      p: "wind",
    },
    pastSimple: {
      s: "wound",
      p: "wound",
    },
  },
  { // VoA
    i: "wire",
    presentSimple: {
      s: "wires",
      p: "wire",
    },
    pastSimple: {
      s: "wired",
      p: "wired",
    },
  },
  { // VoA
    i: "wish",
    presentSimple: {
      s: "wishes",
      p: "wish",
    },
    pastSimple: {
      s: "wished",
      p: "wished",
    },
  },
  { // VoA
    i: "withdraw",
    presentSimple: {
      s: "withdraws",
      p: "withdraw",
    },
    pastSimple: {
      s: "withdrew",
      p: "withdrew",
    },
  },
  { // VoA
    i: "wonder",
    presentSimple: {
      s: "wonders",
      p: "wonder",
    },
    pastSimple: {
      s: "wondered",
      p: "wondered",
    },
  },
  { // VoA
    i: "work",
    presentSimple: {
      s: "works",
      p: "work",
    },
    pastSimple: {
      s: "worked",
      p: "worked",
    },
  },
  { // VoA
    i: "worry",
    presentSimple: {
      s: "worries",
      p: "worry",
    },
    pastSimple: {
      s: "worried",
      p: "worried",
    },
  },
  { // VoA
    i: "wound",
    presentSimple: {
      s: "wounds",
      p: "wound",
    },
    pastSimple: {
      s: "wounded",
      p: "wounded",
    },
  },
  { // VoA
    i: "wreck",
    presentSimple: {
      s: "wrecks",
      p: "wreck",
    },
    pastSimple: {
      s: "wrecked",
      p: "wrecked",
    },
  },
  { // VoA
    i: "write",
    presentSimple: {
      s: "writes",
      p: "write",
    },
    pastSimple: {
      s: "wrote",
      p: "wrote",
    },
  },
  { // VoA
    i: "wrong",
    presentSimple: {
      s: "wrongs",
      p: "wrong",
    },
    pastSimple: {
      s: "wronged",
      p: "wronged",
    },
  },
  { // VoA
    i: "compound",
    presentSimple: {
      s: "compounds",
      p: "compound",
    },
    pastSimple: {
      s: "compounded",
      p: "compounded",
    },
  },
];

export enum PartType {
  countNoun = "countNoun",
  notcountNoun = "notcountNoun",
  verb = "verb",
  adjective = "adjective",
  adverb = "adverb",
  preposition = "preposition",
  conjunction = "conjunction",
  determiner = "determiner",
  digit = "digit",
  symbol = "symbol",
}

// This exists because iterating over an enum appears to be discouraged in TypeScript.
export const partTypeList: PartType[] = [
  PartType.countNoun,
  PartType.notcountNoun,
  PartType.verb,
  PartType.adjective,
  PartType.adverb,
  PartType.preposition,
  PartType.conjunction,
  PartType.determiner,
  PartType.digit,
  PartType.symbol,
];

type Dict = {
  [key in PartType]: string[];
};

const BINARY_BASE = 2;

function takeNBitsShortestItemsOf<T>(items: T[], bits: number, lenFn: (T) => number): T[] {
  const minSize = Math.pow(BINARY_BASE, bits);
  if (items.length < minSize) {
    // Internal error indicating that our entropy variables are wrong; customer should never see this.
    throw new Error(`Input list has size ${items.length}, but expected >= ${minSize}`);
  }
  return items
    .sort((a, b) => lenFn(a) - lenFn(b))
    .slice(0, Math.pow(BINARY_BASE, bits));
}

const COUNT_NOUN_ENTROPY_BITS = 9; // currently 878
const NOTCOUNT_NOUN_ENTROPY_BITS = 6; // currently 109
const VERB_ENTROPY_BITS = 9; // currently 722
const ADJECTIVE_ENTROPY_BITS = 8; // currently 313
const ADVERB_ENTROPY_BITS = 6; // currently 97
const PREPOSITION_ENTROPY_BITS = 5; // currently 41
const CONJUNCTION_ENTROPY_BITS = 4; // currently 20
const DETERMINER_ENTROPY_BITS = 5; // currently 34

/**
 * For most of these wordbanks, we want a whole number of entropy bits.
 * We remove longest words to reduce phrase length variance, then take the first 2^N entries,
 * where N is hard-coded and verified correct through unit tests.
 *
 * This means that, if the word bank is not exactly sized power-of-two, some words will
 * not be included. That's not ideal, and I used to shuffle words before taking 2^N entries,
 * but this hurt unit testability since we could never rely on a specific word being returned
 * for a given input.
 */

const COUNT_NOUNS = takeNBitsShortestItemsOf(
  COUNT_NOUNS_ALL,
  COUNT_NOUN_ENTROPY_BITS,
  (cn: CountNoun) => cn.singular.length);

const NOTCOUNT_NOUNS = takeNBitsShortestItemsOf(
  NOTCOUNT_NOUNS_ALL,
  NOTCOUNT_NOUN_ENTROPY_BITS,
  (n: string) => n.length);

const VERBS = takeNBitsShortestItemsOf(
  VERBS_FULL.map(v => v.presentSimple.s),
  VERB_ENTROPY_BITS,
  (n: string) => n.length);

export function getCountNoun(i: number, qty: number): string {
  return (qty === 1) ? COUNT_NOUNS[i].singular : COUNT_NOUNS[i].plural;
}

export function getVerb(i: number, qty: number): string {
  // FIXME: use an insecure RNG to select between past and present
  if (qty === 1) {
    return VERBS_FULL[i].presentSimple.s;
  }
  return VERBS_FULL[i].presentSimple.p;
}

// This dictionary is for *independent* generation of words based on part type.
// Words here do not require any metadata.
export const indepDict: Dict = {
  // countNoun is here for animation only.
  // For forming phrases, use `getCountNoun()`, which takes metadata.
  [PartType.countNoun]: COUNT_NOUNS.map(cn => cn.singular),
  [PartType.notcountNoun]: NOTCOUNT_NOUNS,
  [PartType.verb]:
    takeNBitsShortestItemsOf(VERBS, VERB_ENTROPY_BITS, (s) => s.length),
  [PartType.adjective]:
    takeNBitsShortestItemsOf(ADJECTIVES, ADJECTIVE_ENTROPY_BITS, (s) => s.length),
  [PartType.adverb]:
    takeNBitsShortestItemsOf(ADVERBS, ADVERB_ENTROPY_BITS, (s) => s.length),
  [PartType.preposition]:
    takeNBitsShortestItemsOf(PREPOSITIONS, PREPOSITION_ENTROPY_BITS, (s) => s.length),
  [PartType.conjunction]:
    takeNBitsShortestItemsOf(CONJUNCTIONS, CONJUNCTION_ENTROPY_BITS, (s) => s.length),
  [PartType.determiner]:
    takeNBitsShortestItemsOf(DETERMINERS, DETERMINER_ENTROPY_BITS, (s) => s.length),
  [PartType.digit]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [PartType.symbol]: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"],
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
  [PartType.countNoun]: {
    entropyReqBits: COUNT_NOUN_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.countNoun].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.countNoun].map((entry) => entry.length)),
  },
  [PartType.notcountNoun]: {
    entropyReqBits: NOTCOUNT_NOUN_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.notcountNoun].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.notcountNoun].map((entry) => entry.length)),
  },
  [PartType.verb]: {
    entropyReqBits: VERB_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.verb].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.verb].map((entry) => entry.length)),
  },
  [PartType.adjective]: {
    entropyReqBits: ADJECTIVE_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.adjective].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.adjective].map((entry) => entry.length)),
  },
  [PartType.adverb]: {
    entropyReqBits: ADVERB_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.adverb].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.adverb].map((entry) => entry.length)),
  },
  [PartType.preposition]: {
    entropyReqBits: PREPOSITION_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.preposition].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.preposition].map((entry) => entry.length)),
  },
  [PartType.conjunction]: {
    entropyReqBits: CONJUNCTION_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.conjunction].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.conjunction].map((entry) => entry.length)),
  },
  [PartType.determiner]: {
    entropyReqBits: DETERMINER_ENTROPY_BITS,
    maxLength: Math.max(...indepDict[PartType.determiner].map((entry) => entry.length)),
    minLength: Math.min(...indepDict[PartType.determiner].map((entry) => entry.length)),
  },
  [PartType.digit]: {
    entropyReqBits: 3,
    maxLength: 1,
    minLength: 1,
  },
  [PartType.symbol]: {
    entropyReqBits: 4,
    maxLength: 1,
    minLength: 1,
  },
};
