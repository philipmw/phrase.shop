import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";
import { IWordbank } from "../IWordbank";

interface CountNoun {
  singular: string;
  plural: string;
}

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

const BITS = maxBitsForList(COUNT_NOUNS_ALL);
const COUNT_NOUNS = takeNBitsBestItemsOf(COUNT_NOUNS_ALL, BITS, (cn) => cn.plural.length);

export class CountNounBank implements IWordbank {
  bits() {
    return BITS;
  }

  getEntry(i: number, qty?: number) {
    const substruct = COUNT_NOUNS[i];
    return (qty && qty > 1) ? substruct.plural : substruct.singular;
  }
}