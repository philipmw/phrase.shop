// https://en.wikipedia.org/wiki/Uses_of_English_verb_forms#Tenses,_aspects_and_moods
interface Verb {
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

type VerbsMap = {
  [key: string]: Verb;
};

export const VERBS_ALL_MAP: VerbsMap = {
  "able": { // VoA
    presentSimple: {
      s: "is able",
      p: "are able",
    },
    pastSimple: {
      s: "was able",
      p: "were able",
    },
  },
  "accept": { // VoA
    presentSimple: {
      s: "accepts",
      p: "accept",
    },
    pastSimple: {
      s: "accepted",
      p: "accepted",
    },
  },
  "accuse": { // VoA
    presentSimple: {
      s: "accuses",
      p: "accuse",
    },
    pastSimple: {
      s: "accused",
      p: "accused",
    },
  },
  "act": { // VoA, Fry
    presentSimple: {
      s: "acts",
      p: "act",
    },
    pastSimple: {
      s: "acted",
      p: "acted",
    },
  },
  "add": { // VoA, Fry
    presentSimple: {
      s: "adds",
      p: "add",
    },
    pastSimple: {
      s: "added",
      p: "added",
    },
  },
  "admit": { // VoA
    presentSimple: {
      s: "admits",
      p: "admit",
    },
    pastSimple: {
      s: "admitted",
      p: "admitted",
    },
  },
  "advise": { // VoA
    presentSimple: {
      s: "advises",
      p: "advise",
    },
    pastSimple: {
      s: "advised",
      p: "advised",
    },
  },
  "affect": { // VoA
    presentSimple: {
      s: "affects",
      p: "affect",
    },
    pastSimple: {
      s: "affected",
      p: "affected",
    },
  },
  "age": { // VoA, Fry
    presentSimple: {
      s: "ages",
      p: "age",
    },
    pastSimple: {
      s: "aged",
      p: "aged",
    },
  },
  "agree": { // VoA, Fry
    presentSimple: {
      s: "agrees",
      p: "agree",
    },
    pastSimple: {
      s: "agreed",
      p: "agreed",
    },
  },
  "aid": { // VoA
    presentSimple: {
      s: "aids",
      p: "aid",
    },
    pastSimple: {
      s: "aided",
      p: "aided",
    },
  },
  "aim": { // VoA
    presentSimple: {
      s: "aims",
      p: "aim",
    },
    pastSimple: {
      s: "aimed",
      p: "aimed",
    },
  },
  "air": { // VoA, Fry
    presentSimple: {
      s: "airs",
      p: "air",
    },
    pastSimple: {
      s: "aired",
      p: "aired",
    },
  },
  "allow": { // Fry
    presentSimple: {
      s: "allows",
      p: "allow",
    },
    pastSimple: {
      s: "allowed",
      p: "allowed",
    },
  },
  "ally": { // VoA
    presentSimple: {
      s: "allies",
      p: "ally",
    },
    pastSimple: {
      s: "allied",
      p: "allied",
    },
  },
  "amend": { // VoA
    presentSimple: {
      s: "amends",
      p: "amend",
    },
    pastSimple: {
      s: "amended",
      p: "amended",
    },
  },
  "anger": { // VoA
    presentSimple: {
      s: "angers",
      p: "anger",
    },
    pastSimple: {
      s: "angered",
      p: "angered",
    },
  },
  "angle": { // Fry
    presentSimple: {
      s: "angles",
      p: "angle",
    },
    pastSimple: {
      s: "angled",
      p: "angled",
    },
  },
  "announce": { // VoA
    presentSimple: {
      s: "announces",
      p: "announce",
    },
    pastSimple: {
      s: "announced",
      p: "announced",
    },
  },
  "answer": { // VoA, Fry
    presentSimple: {
      s: "answers",
      p: "answer",
    },
    pastSimple: {
      s: "answered",
      p: "answered",
    },
  },
  "apologize": { // VoA
    presentSimple: {
      s: "apologizes",
      p: "apologize",
    },
    pastSimple: {
      s: "apologized",
      p: "apologized",
    },
  },
  "appeal": { // VoA
    presentSimple: {
      s: "appeals",
      p: "appeal",
    },
    pastSimple: {
      s: "appealed",
      p: "appealed",
    },
  },
  "appear": { // VoA, Fry
    presentSimple: {
      s: "appears",
      p: "appear",
    },
    pastSimple: {
      s: "appeared",
      p: "appeared",
    },
  },
  "appoint": { // VoA
    presentSimple: {
      s: "appoints",
      p: "appoint",
    },
    pastSimple: {
      s: "appointed",
      p: "appointed",
    },
  },
  "approve": { // VoA
    presentSimple: {
      s: "approves",
      p: "approve",
    },
    pastSimple: {
      s: "approved",
      p: "approved",
    },
  },
  "argue": { // VoA
    presentSimple: {
      s: "argues",
      p: "argue",
    },
    pastSimple: {
      s: "argued",
      p: "argued",
    },
  },
  "arrest": { // VoA
    presentSimple: {
      s: "arrests",
      p: "arrest",
    },
    pastSimple: {
      s: "arrested",
      p: "arrested",
    },
  },
  "arrive": { // VoA, Fry
    presentSimple: {
      s: "arrives",
      p: "arrive",
    },
    pastSimple: {
      s: "arrived",
      p: "arrived",
    },
  },
  "ask": { // VoA, Fry
    presentSimple: {
      s: "asks",
      p: "ask",
    },
    pastSimple: {
      s: "asked",
      p: "asked",
    },
  },
  "assist": { // VoA
    presentSimple: {
      s: "assists",
      p: "assist",
    },
    pastSimple: {
      s: "assisted",
      p: "assisted",
    },
  },
  "attach": { // VoA
    presentSimple: {
      s: "attaches",
      p: "attach",
    },
    pastSimple: {
      s: "attached",
      p: "attached",
    },
  },
  "attack": { // VoA
    presentSimple: {
      s: "attacks",
      p: "attack",
    },
    pastSimple: {
      s: "attacked",
      p: "attacked",
    },
  },
  "attempt": { // VoA
    presentSimple: {
      s: "attempts",
      p: "attempt",
    },
    pastSimple: {
      s: "attempted",
      p: "attempted",
    },
  },
  "attend": { // VoA
    presentSimple: {
      s: "attends",
      p: "attend",
    },
    pastSimple: {
      s: "attended",
      p: "attended",
    },
  },
  "average": { // VoA
    presentSimple: {
      s: "averages",
      p: "average",
    },
    pastSimple: {
      s: "averaged",
      p: "averaged",
    },
  },
  "avoid": { // VoA
    presentSimple: {
      s: "avoids",
      p: "avoid",
    },
    pastSimple: {
      s: "avoided",
      p: "avoided",
    },
  },
  "award": { // VoA
    presentSimple: {
      s: "awards",
      p: "award",
    },
    pastSimple: {
      s: "awarded",
      p: "awarded",
    },
  },
  "balance": { // VoA
    presentSimple: {
      s: "balances",
      p: "balance",
    },
    pastSimple: {
      s: "balanced",
      p: "balanced",
    },
  },
  "ban": { // VoA
    presentSimple: {
      s: "bans",
      p: "ban",
    },
    pastSimple: {
      s: "banned",
      p: "banned",
    },
  },
  "bank": { // VoA, Fry
    presentSimple: {
      s: "banks",
      p: "bank",
    },
    pastSimple: {
      s: "banked",
      p: "banked",
    },
  },
  "bar": { // VoA
    presentSimple: {
      s: "bars",
      p: "bar",
    },
    pastSimple: {
      s: "barred",
      p: "barred",
    },
  },
  "base": { // VoA
    presentSimple: {
      s: "bases",
      p: "base",
    },
    pastSimple: {
      s: "based",
      p: "based",
    },
  },
  "battle": { // VoA
    presentSimple: {
      s: "battles",
      p: "battle",
    },
    pastSimple: {
      s: "battled",
      p: "battled",
    },
  },
  "be": { // VoA
    presentSimple: {
      s: "is",
      p: "are",
    },
    pastSimple: {
      s: "was",
      p: "were",
    },
  },
  "beat": { // VoA, Fry
    presentSimple: {
      s: "beats",
      p: "beat",
    },
    pastSimple: {
      s: "beat",
      p: "beat",
    },
  },
  "become": { // VoA, Fry
    presentSimple: {
      s: "becomes",
      p: "become",
    },
    pastSimple: {
      s: "became",
      p: "became",
    },
  },
  "begin": { // VoA, Fry
    presentSimple: {
      s: "begins",
      p: "begin",
    },
    pastSimple: {
      s: "began",
      p: "began",
    },
  },
  "believe": { // VoA, Fry
    presentSimple: {
      s: "believes",
      p: "believe",
    },
    pastSimple: {
      s: "believed",
      p: "believed",
    },
  },
  "belong": { // VoA, Fry
    presentSimple: {
      s: "belongs",
      p: "belong",
    },
    pastSimple: {
      s: "belonged",
      p: "belonged",
    },
  },
  "best": { // VoA, Fry
    presentSimple: {
      s: "bests",
      p: "best",
    },
    pastSimple: {
      s: "bested",
      p: "bested",
    },
  },
  "better": { // VoA, Fry
    presentSimple: {
      s: "betters",
      p: "better",
    },
    pastSimple: {
      s: "bettered",
      p: "bettered",
    },
  },
  "betray": { // VoA
    presentSimple: {
      s: "betrays",
      p: "betray",
    },
    pastSimple: {
      s: "betrayed",
      p: "betrayed",
    },
  },
  "bill": { // VoA, Fry
    presentSimple: {
      s: "bills",
      p: "bill",
    },
    pastSimple: {
      s: "billed",
      p: "billed",
    },
  },
  "bite": { // VoA, Fry
    presentSimple: {
      s: "bites",
      p: "bite",
    },
    pastSimple: {
      s: "bit",
      p: "bit",
    },
  },
  "blame": { // VoA
    presentSimple: {
      s: "blames",
      p: "blame",
    },
    pastSimple: {
      s: "blamed",
      p: "blamed",
    },
  },
  "bleed": { // VoA
    presentSimple: {
      s: "bleeds",
      p: "bleed",
    },
    pastSimple: {
      s: "bled",
      p: "bled",
    },
  },
  "blind": { // VoA
    presentSimple: {
      s: "blinds",
      p: "blind",
    },
    pastSimple: {
      s: "blinded",
      p: "blinded",
    },
  },
  "block": { // VoA, Fry
    presentSimple: {
      s: "blocks",
      p: "block",
    },
    pastSimple: {
      s: "blocked",
      p: "blocked",
    },
  },
  "blow": { // VoA, Fry
    presentSimple: {
      s: "blows",
      p: "blow",
    },
    pastSimple: {
      s: "blew",
      p: "blew",
    },
  },
  "board": { // Fry
    presentSimple: {
      s: "boards",
      p: "board",
    },
    pastSimple: {
      s: "boarded",
      p: "boarded",
    },
  },
  "boil": { // VoA
    presentSimple: {
      s: "boils",
      p: "boil",
    },
    pastSimple: {
      s: "boiled",
      p: "boiled",
    },
  },
  "bomb": { // VoA
    presentSimple: {
      s: "bombs",
      p: "bomb",
    },
    pastSimple: {
      s: "bombed",
      p: "bombed",
    },
  },
  "book": { // VoA
    presentSimple: {
      s: "books",
      p: "book",
    },
    pastSimple: {
      s: "booked",
      p: "booked",
    },
  },
  "border": { // VoA
    presentSimple: {
      s: "borders",
      p: "border",
    },
    pastSimple: {
      s: "bordered",
      p: "bordered",
    },
  },
  "borrow": { // VoA
    presentSimple: {
      s: "borrows",
      p: "borrow",
    },
    pastSimple: {
      s: "borrowed",
      p: "borrowed",
    },
  },
  "bottle": { // VoA
    presentSimple: {
      s: "bottles",
      p: "bottle",
    },
    pastSimple: {
      s: "bottled",
      p: "bottled",
    },
  },
  "box": { // VoA
    presentSimple: {
      s: "boxes",
      p: "box",
    },
    pastSimple: {
      s: "boxed",
      p: "boxed",
    },
  },
  "boycott": { // VoA
    presentSimple: {
      s: "boycotts",
      p: "boycott",
    },
    pastSimple: {
      s: "boycotted",
      p: "boycotted",
    },
  },
  "brave": { // VoA
    presentSimple: {
      s: "braves",
      p: "brave",
    },
    pastSimple: {
      s: "braved",
      p: "braved",
    },
  },
  "break": { // VoA, Fry
    presentSimple: {
      s: "breaks",
      p: "break",
    },
    pastSimple: {
      s: "broke",
      p: "broke",
    },
  },
  "breathe": { // VoA
    presentSimple: {
      s: "breathes",
      p: "breathe",
    },
    pastSimple: {
      s: "breathed",
      p: "breathed",
    },
  },
  "bridge": { // VoA
    presentSimple: {
      s: "bridges",
      p: "bridge",
    },
    pastSimple: {
      s: "bridged",
      p: "bridged",
    },
  },
  "brief": { // VoA
    presentSimple: {
      s: "briefs",
      p: "brief",
    },
    pastSimple: {
      s: "briefed",
      p: "briefed",
    },
  },
  "bring": { // VoA, Fry
    presentSimple: {
      s: "brings",
      p: "bring",
    },
    pastSimple: {
      s: "brought",
      p: "brought",
    },
  },
  "broadcast": { // VoA
    presentSimple: {
      s: "broadcasts",
      p: "broadcast",
    },
    pastSimple: {
      s: "broadcast",
      p: "broadcast",
    },
  },
  "brown": { // VoA
    presentSimple: {
      s: "browns",
      p: "brown",
    },
    pastSimple: {
      s: "browned",
      p: "browned",
    },
  },
  "build": { // VoA, Fry
    presentSimple: {
      s: "builds",
      p: "build",
    },
    pastSimple: {
      s: "built",
      p: "built",
    },
  },
  "burn": { // VoA
    presentSimple: {
      s: "burns",
      p: "burn",
    },
    pastSimple: {
      s: "burned",
      p: "burned",
    },
  },
  "burst": { // VoA
    presentSimple: {
      s: "bursts",
      p: "burst",
    },
    pastSimple: {
      s: "burst",
      p: "burst",
    },
  },
  "bury": { // VoA
    presentSimple: {
      s: "buries",
      p: "bury",
    },
    pastSimple: {
      s: "buried",
      p: "buried",
    },
  },
  "bus": { // VoA
    presentSimple: {
      s: "buses",
      p: "bus",
    },
    pastSimple: {
      s: "bused",
      p: "bused",
    },
  },
  "buy": { // VoA, Fry
    presentSimple: {
      s: "buys",
      p: "buy",
    },
    pastSimple: {
      s: "bought",
      p: "bought",
    },
  },
  "call": { // VoA
    presentSimple: {
      s: "calls",
      p: "call",
    },
    pastSimple: {
      s: "called",
      p: "called",
    },
  },
  "calm": { // VoA
    presentSimple: {
      s: "calms",
      p: "calm",
    },
    pastSimple: {
      s: "calmed",
      p: "calmed",
    },
  },
  "camp": { // VoA
    presentSimple: {
      s: "camps",
      p: "camp",
    },
    pastSimple: {
      s: "camped",
      p: "camped",
    },
  },
  "campaign": { // VoA
    presentSimple: {
      s: "campaigns",
      p: "campaign",
    },
    pastSimple: {
      s: "campaigned",
      p: "campaigned",
    },
  },
  "cancel": { // VoA
    presentSimple: {
      s: "cancels",
      p: "cancel",
    },
    pastSimple: {
      s: "canceled",
      p: "canceled",
    },
  },
  "capture": { // VoA
    presentSimple: {
      s: "captures",
      p: "capture",
    },
    pastSimple: {
      s: "captured",
      p: "captured",
    },
  },
  "care": { // VoA
    presentSimple: {
      s: "cares",
      p: "care",
    },
    pastSimple: {
      s: "cared",
      p: "cared",
    },
  },
  "carry": { // VoA
    presentSimple: {
      s: "carries",
      p: "carry",
    },
    pastSimple: {
      s: "carried",
      p: "carried",
    },
  },
  "catch": { // VoA
    presentSimple: {
      s: "catches",
      p: "catch",
    },
    pastSimple: {
      s: "caught",
      p: "caught",
    },
  },
  "cause": { // VoA
    presentSimple: {
      s: "causes",
      p: "cause",
    },
    pastSimple: {
      s: "caused",
      p: "caused",
    },
  },
  "celebrate": { // VoA
    presentSimple: {
      s: "celebrates",
      p: "celebrate",
    },
    pastSimple: {
      s: "celebrated",
      p: "celebrated",
    },
  },
  "center": { // VoA
    presentSimple: {
      s: "centers",
      p: "center",
    },
    pastSimple: {
      s: "centered",
      p: "centered",
    },
  },
  "chance": { // VoA
    presentSimple: {
      s: "chances",
      p: "chance",
    },
    pastSimple: {
      s: "chanced",
      p: "chanced",
    },
  },
  "change": { // VoA
    presentSimple: {
      s: "changes",
      p: "change",
    },
    pastSimple: {
      s: "changed",
      p: "changed",
    },
  },
  "charge": { // VoA
    presentSimple: {
      s: "charges",
      p: "charge",
    },
    pastSimple: {
      s: "charged",
      p: "charged",
    },
  },
  "chase": { // VoA
    presentSimple: {
      s: "chases",
      p: "chase",
    },
    pastSimple: {
      s: "chased",
      p: "chased",
    },
  },
  "cheat": { // VoA
    presentSimple: {
      s: "cheats",
      p: "cheat",
    },
    pastSimple: {
      s: "cheated",
      p: "cheated",
    },
  },
  "cheer": { // VoA
    presentSimple: {
      s: "cheers",
      p: "cheer",
    },
    pastSimple: {
      s: "cheered",
      p: "cheered",
    },
  },
  "choose": { // VoA
    presentSimple: {
      s: "chooses",
      p: "choose",
    },
    pastSimple: {
      s: "chose",
      p: "chose",
    },
  },
  "circle": { // VoA
    presentSimple: {
      s: "circles",
      p: "circle",
    },
    pastSimple: {
      s: "circled",
      p: "circled",
    },
  },
  "claim": { // VoA
    presentSimple: {
      s: "claims",
      p: "claim",
    },
    pastSimple: {
      s: "claimed",
      p: "claimed",
    },
  },
  "clash": { // VoA
    presentSimple: {
      s: "clashes",
      p: "clash",
    },
    pastSimple: {
      s: "clashed",
      p: "clashed",
    },
  },
  "clean": { // VoA
    presentSimple: {
      s: "cleans",
      p: "clean",
    },
    pastSimple: {
      s: "cleaned",
      p: "cleaned",
    },
  },
  "clear": { // VoA
    presentSimple: {
      s: "clears",
      p: "clear",
    },
    pastSimple: {
      s: "cleared",
      p: "cleared",
    },
  },
  "climb": { // VoA
    presentSimple: {
      s: "climbs",
      p: "climb",
    },
    pastSimple: {
      s: "climbed",
      p: "climbed",
    },
  },
  "close": { // VoA
    presentSimple: {
      s: "closes",
      p: "close",
    },
    pastSimple: {
      s: "closed",
      p: "closed",
    },
  },
  "coast": { // VoA
    presentSimple: {
      s: "coasts",
      p: "coast",
    },
    pastSimple: {
      s: "coasted",
      p: "coasted",
    },
  },
  "collect": { // VoA
    presentSimple: {
      s: "collects",
      p: "collect",
    },
    pastSimple: {
      s: "collected",
      p: "collected",
    },
  },
  "color": { // VoA
    presentSimple: {
      s: "colors",
      p: "color",
    },
    pastSimple: {
      s: "colored",
      p: "colored",
    },
  },
  "combine": { // VoA
    presentSimple: {
      s: "combines",
      p: "combine",
    },
    pastSimple: {
      s: "combined",
      p: "combined",
    },
  },
  "come": { // VoA
    presentSimple: {
      s: "comes",
      p: "come",
    },
    pastSimple: {
      s: "came",
      p: "came",
    },
  },
  "command": { // VoA
    presentSimple: {
      s: "commands",
      p: "command",
    },
    pastSimple: {
      s: "commanded",
      p: "commanded",
    },
  },
  "comment": { // VoA
    presentSimple: {
      s: "comments",
      p: "comment",
    },
    pastSimple: {
      s: "commented",
      p: "commented",
    },
  },
  "communicate": { // VoA
    presentSimple: {
      s: "communicates",
      p: "communicate",
    },
    pastSimple: {
      s: "communicated",
      p: "communicated",
    },
  },
  "compare": { // VoA
    presentSimple: {
      s: "compares",
      p: "compare",
    },
    pastSimple: {
      s: "compared",
      p: "compared",
    },
  },
  "compete": { // VoA
    presentSimple: {
      s: "competes",
      p: "compete",
    },
    pastSimple: {
      s: "competed",
      p: "competed",
    },
  },
  "complete": { // VoA
    presentSimple: {
      s: "completes",
      p: "complete",
    },
    pastSimple: {
      s: "completed",
      p: "completed",
    },
  },
  "compromise": { // VoA
    presentSimple: {
      s: "compromises",
      p: "compromise",
    },
    pastSimple: {
      s: "compromised",
      p: "compromised",
    },
  },
  "concern": { // VoA
    presentSimple: {
      s: "concerns",
      p: "concern",
    },
    pastSimple: {
      s: "concerned",
      p: "concerned",
    },
  },
  "condemn": { // VoA
    presentSimple: {
      s: "condemns",
      p: "condemn",
    },
    pastSimple: {
      s: "condemned",
      p: "condemned",
    },
  },
  "condition": { // VoA
    presentSimple: {
      s: "conditions",
      p: "condition",
    },
    pastSimple: {
      s: "conditioned",
      p: "conditioned",
    },
  },
  "confirm": { // VoA
    presentSimple: {
      s: "confirms",
      p: "confirm",
    },
    pastSimple: {
      s: "confirmed",
      p: "confirmed",
    },
  },
  "congratulate": { // VoA
    presentSimple: {
      s: "congratulates",
      p: "congratulate",
    },
    pastSimple: {
      s: "congratulated",
      p: "congratulated",
    },
  },
  "connect": { // VoA
    presentSimple: {
      s: "connects",
      p: "connect",
    },
    pastSimple: {
      s: "connected",
      p: "connected",
    },
  },
  "consider": { // VoA
    presentSimple: {
      s: "considers",
      p: "consider",
    },
    pastSimple: {
      s: "considered",
      p: "considered",
    },
  },
  "contain": { // VoA
    presentSimple: {
      s: "contains",
      p: "contain",
    },
    pastSimple: {
      s: "contained",
      p: "contained",
    },
  },
  "continue": { // VoA
    presentSimple: {
      s: "continues",
      p: "continue",
    },
    pastSimple: {
      s: "continued",
      p: "continued",
    },
  },
  "control": { // VoA
    presentSimple: {
      s: "controls",
      p: "control",
    },
    pastSimple: {
      s: "controlled",
      p: "controlled",
    },
  },
  "cook": { // VoA
    presentSimple: {
      s: "cooks",
      p: "cook",
    },
    pastSimple: {
      s: "cooked",
      p: "cooked",
    },
  },
  "cool": { // VoA
    presentSimple: {
      s: "cools",
      p: "cool",
    },
    pastSimple: {
      s: "cooled",
      p: "cooled",
    },
  },
  "cooperate": { // VoA
    presentSimple: {
      s: "cooperates",
      p: "cooperate",
    },
    pastSimple: {
      s: "cooperated",
      p: "cooperated",
    },
  },
  "copy": { // VoA
    presentSimple: {
      s: "copies",
      p: "copy",
    },
    pastSimple: {
      s: "copied",
      p: "copied",
    },
  },
  "correct": { // VoA
    presentSimple: {
      s: "corrects",
      p: "correct",
    },
    pastSimple: {
      s: "corrected",
      p: "corrected",
    },
  },
  "cost": { // VoA
    presentSimple: {
      s: "costs",
      p: "cost",
    },
    pastSimple: {
      s: "cost",
      p: "cost",
    },
  },
  "count": { // VoA
    presentSimple: {
      s: "counts",
      p: "count",
    },
    pastSimple: {
      s: "counted",
      p: "counted",
    },
  },
  "court": { // VoA
    presentSimple: {
      s: "courts",
      p: "court",
    },
    pastSimple: {
      s: "courted",
      p: "courted",
    },
  },
  "cover": { // VoA
    presentSimple: {
      s: "covers",
      p: "cover",
    },
    pastSimple: {
      s: "covered",
      p: "covered",
    },
  },
  "crash": { // VoA
    presentSimple: {
      s: "crashes",
      p: "crash",
    },
    pastSimple: {
      s: "crashed",
      p: "crashed",
    },
  },
  "create": { // VoA
    presentSimple: {
      s: "creates",
      p: "create",
    },
    pastSimple: {
      s: "created",
      p: "created",
    },
  },
  "credit": { // VoA
    presentSimple: {
      s: "credits",
      p: "credit",
    },
    pastSimple: {
      s: "credited",
      p: "credited",
    },
  },
  "crew": { // VoA
    presentSimple: {
      s: "crews",
      p: "crew",
    },
    pastSimple: {
      s: "crewed",
      p: "crewed",
    },
  },
  "criticize": { // VoA
    presentSimple: {
      s: "criticizes",
      p: "criticize",
    },
    pastSimple: {
      s: "criticized",
      p: "criticized",
    },
  },
  "cross": { // VoA
    presentSimple: {
      s: "crosses",
      p: "cross",
    },
    pastSimple: {
      s: "crossed",
      p: "crossed",
    },
  },
  "crowd": { // VoA
    presentSimple: {
      s: "crowds",
      p: "crowd",
    },
    pastSimple: {
      s: "crowded",
      p: "crowded",
    },
  },
  "crush": { // VoA
    presentSimple: {
      s: "crushes",
      p: "crush",
    },
    pastSimple: {
      s: "crushed",
      p: "crushed",
    },
  },
  "cry": { // VoA
    presentSimple: {
      s: "cries",
      p: "cry",
    },
    pastSimple: {
      s: "cried",
      p: "cried",
    },
  },
  "culture": { // VoA
    presentSimple: {
      s: "cultures",
      p: "culture",
    },
    pastSimple: {
      s: "cultured",
      p: "cultured",
    },
  },
  "cure": { // VoA
    presentSimple: {
      s: "cures",
      p: "cure",
    },
    pastSimple: {
      s: "cured",
      p: "cured",
    },
  },
  "cut": { // VoA
    presentSimple: {
      s: "cuts",
      p: "cut",
    },
    pastSimple: {
      s: "cut",
      p: "cut",
    },
  },
  "dam": { // VoA
    presentSimple: {
      s: "dams",
      p: "dam",
    },
    pastSimple: {
      s: "dammed",
      p: "dammed",
    },
  },
  "damage": { // VoA
    presentSimple: {
      s: "damages",
      p: "damage",
    },
    pastSimple: {
      s: "damaged",
      p: "damaged",
    },
  },
  "dance": { // VoA
    presentSimple: {
      s: "dances",
      p: "dance",
    },
    pastSimple: {
      s: "danced",
      p: "danced",
    },
  },
  "date": { // VoA
    presentSimple: {
      s: "dates",
      p: "date",
    },
    pastSimple: {
      s: "dated",
      p: "dated",
    },
  },
  "deal": { // VoA
    presentSimple: {
      s: "deals",
      p: "deal",
    },
    pastSimple: {
      s: "dealt",
      p: "dealt",
    },
  },
  "debate": { // VoA
    presentSimple: {
      s: "debates",
      p: "debate",
    },
    pastSimple: {
      s: "debated",
      p: "debated",
    },
  },
  "decide": { // VoA
    presentSimple: {
      s: "decides",
      p: "decide",
    },
    pastSimple: {
      s: "decided",
      p: "decided",
    },
  },
  "declare": { // VoA
    presentSimple: {
      s: "declares",
      p: "declare",
    },
    pastSimple: {
      s: "declared",
      p: "declared",
    },
  },
  "decrease": { // VoA
    presentSimple: {
      s: "decreases",
      p: "decrease",
    },
    pastSimple: {
      s: "decreased",
      p: "decreased",
    },
  },
  "defeat": { // VoA
    presentSimple: {
      s: "defeats",
      p: "defeat",
    },
    pastSimple: {
      s: "defeated",
      p: "defeated",
    },
  },
  "defend": { // VoA
    presentSimple: {
      s: "defends",
      p: "defend",
    },
    pastSimple: {
      s: "defended",
      p: "defended",
    },
  },
  "define": { // VoA
    presentSimple: {
      s: "defines",
      p: "define",
    },
    pastSimple: {
      s: "defined",
      p: "defined",
    },
  },
  "delay": { // VoA
    presentSimple: {
      s: "delays",
      p: "delay",
    },
    pastSimple: {
      s: "delayed",
      p: "delayed",
    },
  },
  "delegate": { // VoA
    presentSimple: {
      s: "delegates",
      p: "delegate",
    },
    pastSimple: {
      s: "delegated",
      p: "delegated",
    },
  },
  "demand": { // VoA
    presentSimple: {
      s: "demands",
      p: "demand",
    },
    pastSimple: {
      s: "demanded",
      p: "demanded",
    },
  },
  "demonstrate": { // VoA
    presentSimple: {
      s: "demonstrates",
      p: "demonstrate",
    },
    pastSimple: {
      s: "demonstrated",
      p: "demonstrated",
    },
  },
  "denounce": { // VoA
    presentSimple: {
      s: "denounces",
      p: "denounce",
    },
    pastSimple: {
      s: "denounced",
      p: "denounced",
    },
  },
  "deny": { // VoA
    presentSimple: {
      s: "denies",
      p: "deny",
    },
    pastSimple: {
      s: "denied",
      p: "denied",
    },
  },
  "depend": { // VoA
    presentSimple: {
      s: "depends",
      p: "depend",
    },
    pastSimple: {
      s: "depended",
      p: "depended",
    },
  },
  "deplore": { // VoA
    presentSimple: {
      s: "deplores",
      p: "deplore",
    },
    pastSimple: {
      s: "deplored",
      p: "deplored",
    },
  },
  "deploy": { // VoA
    presentSimple: {
      s: "deploys",
      p: "deploy",
    },
    pastSimple: {
      s: "deployed",
      p: "deployed",
    },
  },
  "describe": { // VoA
    presentSimple: {
      s: "describes",
      p: "describe",
    },
    pastSimple: {
      s: "described",
      p: "described",
    },
  },
  "design": { // VoA
    presentSimple: {
      s: "designs",
      p: "design",
    },
    pastSimple: {
      s: "designed",
      p: "designed",
    },
  },
  "desire": { // VoA
    presentSimple: {
      s: "desires",
      p: "desire",
    },
    pastSimple: {
      s: "desired",
      p: "desired",
    },
  },
  "destroy": { // VoA
    presentSimple: {
      s: "destroys",
      p: "destroy",
    },
    pastSimple: {
      s: "destroyed",
      p: "destroyed",
    },
  },
  "detail": { // VoA
    presentSimple: {
      s: "details",
      p: "detail",
    },
    pastSimple: {
      s: "detailed",
      p: "detailed",
    },
  },
  "develop": { // VoA
    presentSimple: {
      s: "develops",
      p: "develop",
    },
    pastSimple: {
      s: "developed",
      p: "developed",
    },
  },
  "die": { // VoA
    presentSimple: {
      s: "dies",
      p: "die",
    },
    pastSimple: {
      s: "died",
      p: "died",
    },
  },
  "diet": { // VoA
    presentSimple: {
      s: "diets",
      p: "diet",
    },
    pastSimple: {
      s: "dieted",
      p: "dieted",
    },
  },
  "dig": { // VoA
    presentSimple: {
      s: "digs",
      p: "dig",
    },
    pastSimple: {
      s: "dug",
      p: "dug",
    },
  },
  "direct": { // VoA
    presentSimple: {
      s: "directs",
      p: "direct",
    },
    pastSimple: {
      s: "directed",
      p: "directed",
    },
  },
  "disappear": { // VoA
    presentSimple: {
      s: "disappears",
      p: "disappear",
    },
    pastSimple: {
      s: "disappeared",
      p: "disappeared",
    },
  },
  "disarm": { // VoA
    presentSimple: {
      s: "disarms",
      p: "disarm",
    },
    pastSimple: {
      s: "disarmed",
      p: "disarmed",
    },
  },
  "discover": { // VoA
    presentSimple: {
      s: "discovers",
      p: "discover",
    },
    pastSimple: {
      s: "discovered",
      p: "discovered",
    },
  },
  "discuss": { // VoA
    presentSimple: {
      s: "discusses",
      p: "discuss",
    },
    pastSimple: {
      s: "discussed",
      p: "discussed",
    },
  },
  "dismiss": { // VoA
    presentSimple: {
      s: "dismisses",
      p: "dismiss",
    },
    pastSimple: {
      s: "dismissed",
      p: "dismissed",
    },
  },
  "dispute": { // VoA
    presentSimple: {
      s: "disputes",
      p: "dispute",
    },
    pastSimple: {
      s: "disputed",
      p: "disputed",
    },
  },
  "distance": { // VoA
    presentSimple: {
      s: "distances",
      p: "distance",
    },
    pastSimple: {
      s: "distanced",
      p: "distanced",
    },
  },
  "dive": { // VoA
    presentSimple: {
      s: "dives",
      p: "dive",
    },
    pastSimple: {
      s: "dove",
      p: "dove",
    },
  },
  "divide": { // VoA
    presentSimple: {
      s: "divides",
      p: "divide",
    },
    pastSimple: {
      s: "divided",
      p: "divided",
    },
  },
  "do": { // VoA
    presentSimple: {
      s: "does",
      p: "do",
    },
    pastSimple: {
      s: "did",
      p: "did",
    },
  },
  "document": { // VoA
    presentSimple: {
      s: "documents",
      p: "document",
    },
    pastSimple: {
      s: "documented",
      p: "documented",
    },
  },
  "dream": { // VoA
    presentSimple: {
      s: "dreams",
      p: "dream",
    },
    pastSimple: {
      s: "dreamed",
      p: "dreamed",
    },
  },
  "drink": { // VoA
    presentSimple: {
      s: "drinks",
      p: "drink",
    },
    pastSimple: {
      s: "drank",
      p: "drank",
    },
  },
  "drive": { // VoA
    presentSimple: {
      s: "drives",
      p: "drive",
    },
    pastSimple: {
      s: "drove",
      p: "drove",
    },
  },
  "drop": { // VoA
    presentSimple: {
      s: "drops",
      p: "drop",
    },
    pastSimple: {
      s: "dropped",
      p: "dropped",
    },
  },
  "drown": { // VoA
    presentSimple: {
      s: "drowns",
      p: "drown",
    },
    pastSimple: {
      s: "drowned",
      p: "drowned",
    },
  },
  "drug": { // VoA
    presentSimple: {
      s: "drugs",
      p: "drug",
    },
    pastSimple: {
      s: "drugged",
      p: "drugged",
    },
  },
  "dry": { // VoA
    presentSimple: {
      s: "dries",
      p: "dry",
    },
    pastSimple: {
      s: "dried",
      p: "dried",
    },
  },
  "dust": { // VoA
    presentSimple: {
      s: "dusts",
      p: "dust",
    },
    pastSimple: {
      s: "dusted",
      p: "dusted",
    },
  },
  "earn": { // VoA
    presentSimple: {
      s: "earns",
      p: "earn",
    },
    pastSimple: {
      s: "earned",
      p: "earned",
    },
  },
  "ease": { // VoA
    presentSimple: {
      s: "eases",
      p: "ease",
    },
    pastSimple: {
      s: "eased",
      p: "eased",
    },
  },
  "eat": { // VoA
    presentSimple: {
      s: "eats",
      p: "eat",
    },
    pastSimple: {
      s: "ate",
      p: "ate",
    },
  },
  "edge": { // VoA
    presentSimple: {
      s: "edges",
      p: "edge",
    },
    pastSimple: {
      s: "edged",
      p: "edged",
    },
  },
  "effect": { // VoA
    presentSimple: {
      s: "effects",
      p: "effect",
    },
    pastSimple: {
      s: "effected",
      p: "effected",
    },
  },
  "elect": { // VoA
    presentSimple: {
      s: "elects",
      p: "elect",
    },
    pastSimple: {
      s: "elected",
      p: "elected",
    },
  },
  "employ": { // VoA
    presentSimple: {
      s: "employs",
      p: "employ",
    },
    pastSimple: {
      s: "employed",
      p: "employed",
    },
  },
  "empty": { // VoA
    presentSimple: {
      s: "empties",
      p: "empty",
    },
    pastSimple: {
      s: "emptied",
      p: "emptied",
    },
  },
  "end": { // VoA
    presentSimple: {
      s: "ends",
      p: "end",
    },
    pastSimple: {
      s: "ended",
      p: "ended",
    },
  },
  "enforce": { // VoA
    presentSimple: {
      s: "enforces",
      p: "enforce",
    },
    pastSimple: {
      s: "enforced",
      p: "enforced",
    },
  },
  "engineer": { // VoA
    presentSimple: {
      s: "engineers",
      p: "engineer",
    },
    pastSimple: {
      s: "engineered",
      p: "engineered",
    },
  },
  "enjoy": { // VoA
    presentSimple: {
      s: "enjoys",
      p: "enjoy",
    },
    pastSimple: {
      s: "enjoyed",
      p: "enjoyed",
    },
  },
  "enter": { // VoA
    presentSimple: {
      s: "enters",
      p: "enter",
    },
    pastSimple: {
      s: "entered",
      p: "entered",
    },
  },
  "equal": { // VoA
    presentSimple: {
      s: "equals",
      p: "equal",
    },
    pastSimple: {
      s: "equaled",
      p: "equaled",
    },
  },
  "escape": { // VoA
    presentSimple: {
      s: "escapes",
      p: "escape",
    },
    pastSimple: {
      s: "escaped",
      p: "escaped",
    },
  },
  "establish": { // VoA
    presentSimple: {
      s: "establishes",
      p: "establish",
    },
    pastSimple: {
      s: "established",
      p: "established",
    },
  },
  "estimate": { // VoA
    presentSimple: {
      s: "estimates",
      p: "estimate",
    },
    pastSimple: {
      s: "estimated",
      p: "estimated",
    },
  },
  "evaporate": { // VoA
    presentSimple: {
      s: "evaporates",
      p: "evaporate",
    },
    pastSimple: {
      s: "evaporated",
      p: "evaporated",
    },
  },
  "even": { // VoA
    presentSimple: {
      s: "evens",
      p: "even",
    },
    pastSimple: {
      s: "evened",
      p: "evened",
    },
  },
  "exact": { // VoA
    presentSimple: {
      s: "exacts",
      p: "exact",
    },
    pastSimple: {
      s: "exacted",
      p: "exacted",
    },
  },
  "examine": { // VoA
    presentSimple: {
      s: "examines",
      p: "examine",
    },
    pastSimple: {
      s: "examined",
      p: "examined",
    },
  },
  "except": { // VoA
    presentSimple: {
      s: "excepts",
      p: "except",
    },
    pastSimple: {
      s: "excepted",
      p: "excepted",
    },
  },
  "exchange": { // VoA
    presentSimple: {
      s: "exchanges",
      p: "exchange",
    },
    pastSimple: {
      s: "exchanged",
      p: "exchanged",
    },
  },
  "excuse": { // VoA
    presentSimple: {
      s: "excuses",
      p: "excuse",
    },
    pastSimple: {
      s: "excused",
      p: "excused",
    },
  },
  "execute": { // VoA
    presentSimple: {
      s: "executes",
      p: "execute",
    },
    pastSimple: {
      s: "executed",
      p: "executed",
    },
  },
  "exercise": { // VoA
    presentSimple: {
      s: "exercises",
      p: "exercise",
    },
    pastSimple: {
      s: "exercised",
      p: "exercised",
    },
  },
  "exile": { // VoA
    presentSimple: {
      s: "exiles",
      p: "exile",
    },
    pastSimple: {
      s: "exiled",
      p: "exiled",
    },
  },
  "exist": { // VoA
    presentSimple: {
      s: "exists",
      p: "exist",
    },
    pastSimple: {
      s: "existed",
      p: "existed",
    },
  },
  "expand": { // VoA
    presentSimple: {
      s: "expands",
      p: "expand",
    },
    pastSimple: {
      s: "expanded",
      p: "expanded",
    },
  },
  "expect": { // VoA
    presentSimple: {
      s: "expects",
      p: "expect",
    },
    pastSimple: {
      s: "expected",
      p: "expected",
    },
  },
  "expel": { // VoA
    presentSimple: {
      s: "expels",
      p: "expel",
    },
    pastSimple: {
      s: "expelled",
      p: "expelled",
    },
  },
  "experience": { // VoA
    presentSimple: {
      s: "experiences",
      p: "experience",
    },
    pastSimple: {
      s: "experienced",
      p: "experienced",
    },
  },
  "experiment": { // VoA
    presentSimple: {
      s: "experiments",
      p: "experiment",
    },
    pastSimple: {
      s: "experimented",
      p: "experimented",
    },
  },
  "explain": { // VoA
    presentSimple: {
      s: "explains",
      p: "explain",
    },
    pastSimple: {
      s: "explained",
      p: "explained",
    },
  },
  "explode": { // VoA
    presentSimple: {
      s: "explodes",
      p: "explode",
    },
    pastSimple: {
      s: "exploded",
      p: "exploded",
    },
  },
  "explore": { // VoA
    presentSimple: {
      s: "explores",
      p: "explore",
    },
    pastSimple: {
      s: "explored",
      p: "explored",
    },
  },
  "export": { // VoA
    presentSimple: {
      s: "exports",
      p: "export",
    },
    pastSimple: {
      s: "exported",
      p: "exported",
    },
  },
  "express": { // VoA
    presentSimple: {
      s: "expresses",
      p: "express",
    },
    pastSimple: {
      s: "expressed",
      p: "expressed",
    },
  },
  "extend": { // VoA
    presentSimple: {
      s: "extends",
      p: "extend",
    },
    pastSimple: {
      s: "extended",
      p: "extended",
    },
  },
  "face": { // VoA
    presentSimple: {
      s: "faces",
      p: "face",
    },
    pastSimple: {
      s: "faced",
      p: "faced",
    },
  },
  "fail": { // VoA
    presentSimple: {
      s: "fails",
      p: "fail",
    },
    pastSimple: {
      s: "failed",
      p: "failed",
    },
  },
  "fall": { // VoA
    presentSimple: {
      s: "falls",
      p: "fall",
    },
    pastSimple: {
      s: "fell",
      p: "fell",
    },
  },
  "fare": { // my adaptation of "fair"
    presentSimple: {
      s: "fares",
      p: "fare",
    },
    pastSimple: {
      s: "fared",
      p: "fared",
    },
  },
  "farm": { // VoA
    presentSimple: {
      s: "farms",
      p: "farm",
    },
    pastSimple: {
      s: "farmed",
      p: "farmed",
    },
  },
  "father": { // VoA
    presentSimple: {
      s: "fathers",
      p: "father",
    },
    pastSimple: {
      s: "fathered",
      p: "fathered",
    },
  },
  "fear": { // VoA
    presentSimple: {
      s: "fears",
      p: "fear",
    },
    pastSimple: {
      s: "feared",
      p: "feared",
    },
  },
  "feed": { // VoA
    presentSimple: {
      s: "feeds",
      p: "feed",
    },
    pastSimple: {
      s: "fed",
      p: "fed",
    },
  },
  "feel": { // VoA
    presentSimple: {
      s: "feels",
      p: "feel",
    },
    pastSimple: {
      s: "felt",
      p: "felt",
    },
  },
  "field": { // VoA
    presentSimple: {
      s: "fields",
      p: "field",
    },
    pastSimple: {
      s: "fielded",
      p: "fielded",
    },
  },
  "fight": { // VoA
    presentSimple: {
      s: "fights",
      p: "fight",
    },
    pastSimple: {
      s: "fought",
      p: "fought",
    },
  },
  "fill": { // VoA
    presentSimple: {
      s: "fills",
      p: "fill",
    },
    pastSimple: {
      s: "filled",
      p: "filled",
    },
  },
  "film": { // VoA
    presentSimple: {
      s: "films",
      p: "film",
    },
    pastSimple: {
      s: "filmed",
      p: "filmed",
    },
  },
  "find": { // VoA
    presentSimple: {
      s: "finds",
      p: "find",
    },
    pastSimple: {
      s: "found",
      p: "found",
    },
  },
  "fine": { // VoA
    presentSimple: {
      s: "fines",
      p: "fine",
    },
    pastSimple: {
      s: "fined",
      p: "fined",
    },
  },
  "finish": { // VoA
    presentSimple: {
      s: "finishes",
      p: "finish",
    },
    pastSimple: {
      s: "finished",
      p: "finished",
    },
  },
  "fire": { // VoA
    presentSimple: {
      s: "fires",
      p: "fire",
    },
    pastSimple: {
      s: "fired",
      p: "fired",
    },
  },
  "fish": { // VoA
    presentSimple: {
      s: "fishes",
      p: "fish",
    },
    pastSimple: {
      s: "fished",
      p: "fished",
    },
  },
  "fit": { // VoA
    presentSimple: {
      s: "fits",
      p: "fit",
    },
    pastSimple: {
      s: "fit",
      p: "fit",
    },
  },
  "fix": { // VoA
    presentSimple: {
      s: "fixes",
      p: "fix",
    },
    pastSimple: {
      s: "fixed",
      p: "fixed",
    },
  },
  "flag": { // VoA
    presentSimple: {
      s: "flags",
      p: "flag",
    },
    pastSimple: {
      s: "flagged",
      p: "flagged",
    },
  },
  "flee": { // VoA
    presentSimple: {
      s: "flees",
      p: "flee",
    },
    pastSimple: {
      s: "fleed",
      p: "fleed",
    },
  },
  "float": { // VoA
    presentSimple: {
      s: "floats",
      p: "float",
    },
    pastSimple: {
      s: "floated",
      p: "floated",
    },
  },
  "flood": { // VoA
    presentSimple: {
      s: "floods",
      p: "flood",
    },
    pastSimple: {
      s: "flooded",
      p: "flooded",
    },
  },
  "flow": { // VoA
    presentSimple: {
      s: "flows",
      p: "flow",
    },
    pastSimple: {
      s: "flowed",
      p: "flowed",
    },
  },
  "flower": { // VoA
    presentSimple: {
      s: "flowers",
      p: "flower",
    },
    pastSimple: {
      s: "flowered",
      p: "flowered",
    },
  },
  "fly": { // VoA
    presentSimple: {
      s: "flies",
      p: "fly",
    },
    pastSimple: {
      s: "flew",
      p: "flew",
    },
  },
  "follow": { // VoA
    presentSimple: {
      s: "follows",
      p: "follow",
    },
    pastSimple: {
      s: "followed",
      p: "followed",
    },
  },
  "fool": { // VoA
    presentSimple: {
      s: "fools",
      p: "fool",
    },
    pastSimple: {
      s: "fooled",
      p: "fooled",
    },
  },
  "force": { // VoA
    presentSimple: {
      s: "forces",
      p: "force",
    },
    pastSimple: {
      s: "forced",
      p: "forced",
    },
  },
  "forget": { // VoA
    presentSimple: {
      s: "forgets",
      p: "forget",
    },
    pastSimple: {
      s: "forgot",
      p: "forgot",
    },
  },
  "forgive": { // VoA
    presentSimple: {
      s: "forgives",
      p: "forgive",
    },
    pastSimple: {
      s: "forgave",
      p: "forgave",
    },
  },
  "form": { // VoA
    presentSimple: {
      s: "forms",
      p: "form",
    },
    pastSimple: {
      s: "formed",
      p: "formed",
    },
  },
  "forward": { // VoA
    presentSimple: {
      s: "forwards",
      p: "forward",
    },
    pastSimple: {
      s: "forwarded",
      p: "forwarded",
    },
  },
  "free": { // VoA
    presentSimple: {
      s: "frees",
      p: "free",
    },
    pastSimple: {
      s: "freed",
      p: "freed",
    },
  },
  "freeze": { // VoA
    presentSimple: {
      s: "freezes",
      p: "freeze",
    },
    pastSimple: {
      s: "froze",
      p: "froze",
    },
  },
  "frighten": { // VoA
    presentSimple: {
      s: "frightens",
      p: "frighten",
    },
    pastSimple: {
      s: "frightened",
      p: "frightened",
    },
  },
  "fuel": { // VoA
    presentSimple: {
      s: "fuels",
      p: "fuel",
    },
    pastSimple: {
      s: "fueled",
      p: "fueled",
    },
  },
  "gain": { // VoA
    presentSimple: {
      s: "gains",
      p: "gain",
    },
    pastSimple: {
      s: "gained",
      p: "gained",
    },
  },
  "game": { // VoA
    presentSimple: {
      s: "games",
      p: "game",
    },
    pastSimple: {
      s: "gamed",
      p: "gamed",
    },
  },
  "gather": { // VoA
    presentSimple: {
      s: "gathers",
      p: "gather",
    },
    pastSimple: {
      s: "gathered",
      p: "gathered",
    },
  },
  "get": { // VoA
    presentSimple: {
      s: "gets",
      p: "get",
    },
    pastSimple: {
      s: "got",
      p: "got",
    },
  },
  "gift": { // VoA
    presentSimple: {
      s: "gifts",
      p: "gift",
    },
    pastSimple: {
      s: "gifted",
      p: "gifted",
    },
  },
  "give": { // VoA
    presentSimple: {
      s: "gives",
      p: "give",
    },
    pastSimple: {
      s: "gave",
      p: "gave",
    },
  },
  "go": { // VoA
    presentSimple: {
      s: "goes",
      p: "go",
    },
    pastSimple: {
      s: "went",
      p: "went",
    },
  },
  "govern": { // VoA
    presentSimple: {
      s: "governs",
      p: "govern",
    },
    pastSimple: {
      s: "governed",
      p: "governed",
    },
  },
  "grind": { // VoA
    presentSimple: {
      s: "grinds",
      p: "grind",
    },
    pastSimple: {
      s: "ground",
      p: "ground",
    },
  },
  "ground": { // VoA
    presentSimple: {
      s: "grounds",
      p: "ground",
    },
    pastSimple: {
      s: "grounded",
      p: "grounded",
    },
  },
  "group": { // VoA
    presentSimple: {
      s: "groups",
      p: "group",
    },
    pastSimple: {
      s: "grouped",
      p: "grouped",
    },
  },
  "grow": { // VoA
    presentSimple: {
      s: "grows",
      p: "grow",
    },
    pastSimple: {
      s: "grew",
      p: "grew",
    },
  },
  "guarantee": { // VoA
    presentSimple: {
      s: "guarantees",
      p: "guarantee",
    },
    pastSimple: {
      s: "guaranteed",
      p: "guaranteed",
    },
  },
  "guard": { // VoA
    presentSimple: {
      s: "guards",
      p: "guard",
    },
    pastSimple: {
      s: "guarded",
      p: "guarded",
    },
  },
  "guide": { // VoA
    presentSimple: {
      s: "guides",
      p: "guide",
    },
    pastSimple: {
      s: "guided",
      p: "guided",
    },
  },
  "halt": { // VoA
    presentSimple: {
      s: "halts",
      p: "halt",
    },
    pastSimple: {
      s: "halted",
      p: "halted",
    },
  },
  "hang": { // VoA
    presentSimple: {
      s: "hangs",
      p: "hang",
    },
    pastSimple: {
      s: "hanged",
      p: "hanged",
    },
  },
  "happen": { // VoA
    presentSimple: {
      s: "happens",
      p: "happen",
    },
    pastSimple: {
      s: "happened",
      p: "happened",
    },
  },
  "harm": { // VoA
    presentSimple: {
      s: "harms",
      p: "harm",
    },
    pastSimple: {
      s: "harmed",
      p: "harmed",
    },
  },
  "harvest": { // VoA
    presentSimple: {
      s: "harvests",
      p: "harvest",
    },
    pastSimple: {
      s: "harvested",
      p: "harvested",
    },
  },
  "hate": { // VoA
    presentSimple: {
      s: "hates",
      p: "hate",
    },
    pastSimple: {
      s: "hated",
      p: "hated",
    },
  },
  "have": { // VoA
    presentSimple: {
      s: "has",
      p: "have",
    },
    pastSimple: {
      s: "had",
      p: "had",
    },
  },
  "head": { // VoA
    presentSimple: {
      s: "heads",
      p: "head",
    },
    pastSimple: {
      s: "headed",
      p: "headed",
    },
  },
  "heal": { // VoA
    presentSimple: {
      s: "heals",
      p: "heal",
    },
    pastSimple: {
      s: "healed",
      p: "healed",
    },
  },
  "hear": { // VoA
    presentSimple: {
      s: "hears",
      p: "hear",
    },
    pastSimple: {
      s: "heard",
      p: "heard",
    },
  },
  "heat": { // VoA
    presentSimple: {
      s: "heats",
      p: "heat",
    },
    pastSimple: {
      s: "heated",
      p: "heated",
    },
  },
  "help": { // VoA
    presentSimple: {
      s: "helps",
      p: "help",
    },
    pastSimple: {
      s: "helped",
      p: "helped",
    },
  },
  "hide": { // VoA
    presentSimple: {
      s: "hides",
      p: "hide",
    },
    pastSimple: {
      s: "hid",
      p: "hid",
    },
  },
  "hijack": { // VoA
    presentSimple: {
      s: "hijacks",
      p: "hijack",
    },
    pastSimple: {
      s: "hijacked",
      p: "hijacked",
    },
  },
  "hit": { // VoA
    presentSimple: {
      s: "hits",
      p: "hit",
    },
    pastSimple: {
      s: "hit",
      p: "hit",
    },
  },
  "hold": { // VoA
    presentSimple: {
      s: "holds",
      p: "hold",
    },
    pastSimple: {
      s: "held",
      p: "held",
    },
  },
  "honor": { // VoA
    presentSimple: {
      s: "honors",
      p: "honor",
    },
    pastSimple: {
      s: "honored",
      p: "honored",
    },
  },
  "hope": { // VoA
    presentSimple: {
      s: "hopes",
      p: "hope",
    },
    pastSimple: {
      s: "hoped",
      p: "hoped",
    },
  },
  "humor": { // VoA
    presentSimple: {
      s: "humors",
      p: "humor",
    },
    pastSimple: {
      s: "humored",
      p: "humored",
    },
  },
  "hunger": { // VoA
    presentSimple: {
      s: "hungers",
      p: "hunger",
    },
    pastSimple: {
      s: "hungered",
      p: "hungered",
    },
  },
  "hunt": { // VoA
    presentSimple: {
      s: "hunts",
      p: "hunt",
    },
    pastSimple: {
      s: "hunted",
      p: "hunted",
    },
  },
  "hurry": { // VoA
    presentSimple: {
      s: "hurries",
      p: "hurry",
    },
    pastSimple: {
      s: "hurried",
      p: "hurried",
    },
  },
  "hurt": { // VoA
    presentSimple: {
      s: "hurts",
      p: "hurt",
    },
    pastSimple: {
      s: "hurt",
      p: "hurt",
    },
  },
  "ice": { // VoA
    presentSimple: {
      s: "ices",
      p: "ice",
    },
    pastSimple: {
      s: "iced",
      p: "iced",
    },
  },
  "identify": { // VoA
    presentSimple: {
      s: "identifies",
      p: "identify",
    },
    pastSimple: {
      s: "identified",
      p: "identified",
    },
  },
  "imagine": { // VoA
    presentSimple: {
      s: "imagines",
      p: "imagine",
    },
    pastSimple: {
      s: "imagined",
      p: "imagined",
    },
  },
  "import": { // VoA
    presentSimple: {
      s: "imports",
      p: "import",
    },
    pastSimple: {
      s: "imported",
      p: "imported",
    },
  },
  "improve": { // VoA
    presentSimple: {
      s: "improves",
      p: "improve",
    },
    pastSimple: {
      s: "improved",
      p: "improved",
    },
  },
  "incite": { // VoA
    presentSimple: {
      s: "incites",
      p: "incite",
    },
    pastSimple: {
      s: "incited",
      p: "incited",
    },
  },
  "include": { // VoA
    presentSimple: {
      s: "includes",
      p: "include",
    },
    pastSimple: {
      s: "included",
      p: "included",
    },
  },
  "increase": { // VoA
    presentSimple: {
      s: "increases",
      p: "increase",
    },
    pastSimple: {
      s: "increased",
      p: "increased",
    },
  },
  "infect": { // VoA
    presentSimple: {
      s: "infects",
      p: "infect",
    },
    pastSimple: {
      s: "infected",
      p: "infected",
    },
  },
  "influence": { // VoA
    presentSimple: {
      s: "influences",
      p: "influence",
    },
    pastSimple: {
      s: "influenced",
      p: "influenced",
    },
  },
  "inform": { // VoA
    presentSimple: {
      s: "informs",
      p: "inform",
    },
    pastSimple: {
      s: "informed",
      p: "informed",
    },
  },
  "inject": { // VoA
    presentSimple: {
      s: "injects",
      p: "inject",
    },
    pastSimple: {
      s: "injected",
      p: "injected",
    },
  },
  "injure": { // VoA
    presentSimple: {
      s: "injures",
      p: "injure",
    },
    pastSimple: {
      s: "injured",
      p: "injured",
    },
  },
  "inspect": { // VoA
    presentSimple: {
      s: "inspects",
      p: "inspect",
    },
    pastSimple: {
      s: "inspected",
      p: "inspected",
    },
  },
  "instrument": { // VoA
    presentSimple: {
      s: "instruments",
      p: "instrument",
    },
    pastSimple: {
      s: "instrumented",
      p: "instrumented",
    },
  },
  "insult": { // VoA
    presentSimple: {
      s: "insults",
      p: "insult",
    },
    pastSimple: {
      s: "insulted",
      p: "insulted",
    },
  },
  "interfere": { // VoA
    presentSimple: {
      s: "interferes",
      p: "interfere",
    },
    pastSimple: {
      s: "interfered",
      p: "interfered",
    },
  },
  "intervene": { // VoA
    presentSimple: {
      s: "intervenes",
      p: "intervene",
    },
    pastSimple: {
      s: "intervened",
      p: "intervened",
    },
  },
  "invade": { // VoA
    presentSimple: {
      s: "invades",
      p: "invade",
    },
    pastSimple: {
      s: "invaded",
      p: "invaded",
    },
  },
  "invent": { // VoA
    presentSimple: {
      s: "invents",
      p: "invent",
    },
    pastSimple: {
      s: "invented",
      p: "invented",
    },
  },
  "invest": { // VoA
    presentSimple: {
      s: "invests",
      p: "invest",
    },
    pastSimple: {
      s: "invested",
      p: "invested",
    },
  },
  "investigate": { // VoA
    presentSimple: {
      s: "investigates",
      p: "investigate",
    },
    pastSimple: {
      s: "investigated",
      p: "investigated",
    },
  },
  "invite": { // VoA
    presentSimple: {
      s: "invites",
      p: "invite",
    },
    pastSimple: {
      s: "invited",
      p: "invited",
    },
  },
  "involve": { // VoA
    presentSimple: {
      s: "involves",
      p: "involve",
    },
    pastSimple: {
      s: "involved",
      p: "involved",
    },
  },
  "iron": { // VoA
    presentSimple: {
      s: "irons",
      p: "iron",
    },
    pastSimple: {
      s: "ironed",
      p: "ironed",
    },
  },
  "issue": { // VoA
    presentSimple: {
      s: "issues",
      p: "issue",
    },
    pastSimple: {
      s: "issued",
      p: "issued",
    },
  },
  "jail": { // VoA
    presentSimple: {
      s: "jails",
      p: "jail",
    },
    pastSimple: {
      s: "jailed",
      p: "jailed",
    },
  },
  "join": { // VoA
    presentSimple: {
      s: "joins",
      p: "join",
    },
    pastSimple: {
      s: "joined",
      p: "joined",
    },
  },
  "joke": { // VoA
    presentSimple: {
      s: "jokes",
      p: "joke",
    },
    pastSimple: {
      s: "joked",
      p: "joked",
    },
  },
  "judge": { // VoA
    presentSimple: {
      s: "judges",
      p: "judge",
    },
    pastSimple: {
      s: "judged",
      p: "judged",
    },
  },
  "jump": { // VoA
    presentSimple: {
      s: "jumps",
      p: "jump",
    },
    pastSimple: {
      s: "jumped",
      p: "jumped",
    },
  },
  "keep": { // VoA
    presentSimple: {
      s: "keeps",
      p: "keep",
    },
    pastSimple: {
      s: "kept",
      p: "kept",
    },
  },
  "kick": { // VoA
    presentSimple: {
      s: "kicks",
      p: "kick",
    },
    pastSimple: {
      s: "kicked",
      p: "kicked",
    },
  },
  "kidnap": { // VoA
    presentSimple: {
      s: "kidnaps",
      p: "kidnap",
    },
    pastSimple: {
      s: "kidnapped",
      p: "kidnapped",
    },
  },
  "kill": { // VoA
    presentSimple: {
      s: "kills",
      p: "kill",
    },
    pastSimple: {
      s: "killed",
      p: "killed",
    },
  },
  "kiss": { // VoA
    presentSimple: {
      s: "kisses",
      p: "kiss",
    },
    pastSimple: {
      s: "kissed",
      p: "kissed",
    },
  },
  "know": { // VoA
    presentSimple: {
      s: "knows",
      p: "know",
    },
    pastSimple: {
      s: "knew",
      p: "knew",
    },
  },
  "labor": { // VoA
    presentSimple: {
      s: "labors",
      p: "labor",
    },
    pastSimple: {
      s: "labored",
      p: "labored",
    },
  },
  "lack": { // VoA
    presentSimple: {
      s: "lacks",
      p: "lack",
    },
    pastSimple: {
      s: "lacked",
      p: "lacked",
    },
  },
  "land": { // VoA
    presentSimple: {
      s: "lands",
      p: "land",
    },
    pastSimple: {
      s: "landed",
      p: "landed",
    },
  },
  "laugh": { // VoA
    presentSimple: {
      s: "laughs",
      p: "laugh",
    },
    pastSimple: {
      s: "laughed",
      p: "laughed",
    },
  },
  "launch": { // VoA
    presentSimple: {
      s: "launches",
      p: "launch",
    },
    pastSimple: {
      s: "launched",
      p: "launched",
    },
  },
  "lead": { // VoA
    presentSimple: {
      s: "leads",
      p: "lead",
    },
    pastSimple: {
      s: "led",
      p: "led",
    },
  },
  "leak": { // VoA
    presentSimple: {
      s: "leaks",
      p: "leak",
    },
    pastSimple: {
      s: "leaked",
      p: "leaked",
    },
  },
  "learn": { // VoA
    presentSimple: {
      s: "learns",
      p: "learn",
    },
    pastSimple: {
      s: "learned",
      p: "learned",
    },
  },
  "leave": { // VoA
    presentSimple: {
      s: "leaves",
      p: "leave",
    },
    pastSimple: {
      s: "left",
      p: "left",
    },
  },
  "lend": { // VoA
    presentSimple: {
      s: "lends",
      p: "lend",
    },
    pastSimple: {
      s: "lent",
      p: "lent",
    },
  },
  "let": { // VoA
    presentSimple: {
      s: "lets",
      p: "let",
    },
    pastSimple: {
      s: "let",
      p: "let",
    },
  },
  "level": { // VoA
    presentSimple: {
      s: "levels",
      p: "level",
    },
    pastSimple: {
      s: "leveled",
      p: "leveled",
    },
  },
  "lie": { // VoA
    presentSimple: {
      s: "lies",
      p: "lie",
    },
    pastSimple: {
      s: "lied",
      p: "lied",
    },
  },
  "lift": { // VoA
    presentSimple: {
      s: "lifts",
      p: "lift",
    },
    pastSimple: {
      s: "lifted",
      p: "lifted",
    },
  },
  "light": { // VoA
    presentSimple: {
      s: "lights",
      p: "light",
    },
    pastSimple: {
      s: "lit",
      p: "lit",
    },
  },
  "like": { // VoA
    presentSimple: {
      s: "likes",
      p: "like",
    },
    pastSimple: {
      s: "liked",
      p: "liked",
    },
  },
  "limit": { // VoA
    presentSimple: {
      s: "limits",
      p: "limit",
    },
    pastSimple: {
      s: "limited",
      p: "limited",
    },
  },
  "line": { // VoA
    presentSimple: {
      s: "lines",
      p: "line",
    },
    pastSimple: {
      s: "lined",
      p: "lined",
    },
  },
  "link": { // VoA
    presentSimple: {
      s: "links",
      p: "link",
    },
    pastSimple: {
      s: "linked",
      p: "linked",
    },
  },
  "list": { // VoA
    presentSimple: {
      s: "lists",
      p: "list",
    },
    pastSimple: {
      s: "listed",
      p: "listed",
    },
  },
  "listen": { // VoA
    presentSimple: {
      s: "listens",
      p: "listen",
    },
    pastSimple: {
      s: "listened",
      p: "listened",
    },
  },
  "live": { // VoA
    presentSimple: {
      s: "lives",
      p: "live",
    },
    pastSimple: {
      s: "lived",
      p: "lived",
    },
  },
  "load": { // VoA
    presentSimple: {
      s: "loads",
      p: "load",
    },
    pastSimple: {
      s: "loaded",
      p: "loaded",
    },
  },
  "loan": { // VoA
    presentSimple: {
      s: "loans",
      p: "loan",
    },
    pastSimple: {
      s: "loaned",
      p: "loaned",
    },
  },
  "look": { // VoA
    presentSimple: {
      s: "looks",
      p: "look",
    },
    pastSimple: {
      s: "looked",
      p: "looked",
    },
  },
  "lose": { // VoA
    presentSimple: {
      s: "loses",
      p: "lose",
    },
    pastSimple: {
      s: "lost",
      p: "lost",
    },
  },
  "love": { // VoA
    presentSimple: {
      s: "loves",
      p: "love",
    },
    pastSimple: {
      s: "loved",
      p: "loved",
    },
  },
  "mail": { // VoA
    presentSimple: {
      s: "mails",
      p: "mail",
    },
    pastSimple: {
      s: "mailed",
      p: "mailed",
    },
  },
  "make": { // VoA
    presentSimple: {
      s: "makes",
      p: "make",
    },
    pastSimple: {
      s: "made",
      p: "made",
    },
  },
  "map": { // VoA
    presentSimple: {
      s: "maps",
      p: "map",
    },
    pastSimple: {
      s: "mapped",
      p: "mapped",
    },
  },
  "march": { // VoA
    presentSimple: {
      s: "marches",
      p: "march",
    },
    pastSimple: {
      s: "marched",
      p: "marched",
    },
  },
  "mark": { // VoA
    presentSimple: {
      s: "marks",
      p: "mark",
    },
    pastSimple: {
      s: "marked",
      p: "marked",
    },
  },
  "market": { // VoA
    presentSimple: {
      s: "markets",
      p: "market",
    },
    pastSimple: {
      s: "marketed",
      p: "marketed",
    },
  },
  "marry": { // VoA
    presentSimple: {
      s: "marries",
      p: "marry",
    },
    pastSimple: {
      s: "married",
      p: "married",
    },
  },
  "mate": { // VoA
    presentSimple: {
      s: "mates",
      p: "mate",
    },
    pastSimple: {
      s: "mated",
      p: "mated",
    },
  },
  "matter": { // VoA
    presentSimple: {
      s: "matters",
      p: "matter",
    },
    pastSimple: {
      s: "mattered",
      p: "mattered",
    },
  },
  "measure": { // VoA
    presentSimple: {
      s: "measures",
      p: "measure",
    },
    pastSimple: {
      s: "measured",
      p: "measured",
    },
  },
  "meet": { // VoA
    presentSimple: {
      s: "meets",
      p: "meet",
    },
    pastSimple: {
      s: "met",
      p: "met",
    },
  },
  "melt": { // VoA
    presentSimple: {
      s: "melts",
      p: "melt",
    },
    pastSimple: {
      s: "melted",
      p: "melted",
    },
  },
  "message": { // VoA
    presentSimple: {
      s: "messages",
      p: "message",
    },
    pastSimple: {
      s: "messaged",
      p: "messaged",
    },
  },
  "milk": { // VoA
    presentSimple: {
      s: "milks",
      p: "milk",
    },
    pastSimple: {
      s: "milked",
      p: "milked",
    },
  },
  "mind": { // VoA
    presentSimple: {
      s: "minds",
      p: "mind",
    },
    pastSimple: {
      s: "minded",
      p: "minded",
    },
  },
  "mine": { // VoA
    presentSimple: {
      s: "mines",
      p: "mine",
    },
    pastSimple: {
      s: "mined",
      p: "mined",
    },
  },
  "miss": { // VoA
    presentSimple: {
      s: "misses",
      p: "miss",
    },
    pastSimple: {
      s: "missed",
      p: "missed",
    },
  },
  "mix": { // VoA
    presentSimple: {
      s: "mixes",
      p: "mix",
    },
    pastSimple: {
      s: "mixed",
      p: "mixed",
    },
  },
  "mob": { // VoA
    presentSimple: {
      s: "mobs",
      p: "mob",
    },
    pastSimple: {
      s: "mobbed",
      p: "mobbed",
    },
  },
  "model": { // VoA
    presentSimple: {
      s: "models",
      p: "model",
    },
    pastSimple: {
      s: "modeled",
      p: "modeled",
    },
  },
  "moderate": { // VoA
    presentSimple: {
      s: "moderates",
      p: "moderate",
    },
    pastSimple: {
      s: "moderated",
      p: "moderated",
    },
  },
  "mother": { // VoA
    presentSimple: {
      s: "mothers",
      p: "mother",
    },
    pastSimple: {
      s: "mothered",
      p: "mothered",
    },
  },

  "motion": { // VoA
    presentSimple: {
      s: "motions",
      p: "motion",
    },
    pastSimple: {
      s: "motioned",
      p: "motioned",
    },
  },
  "mourn": { // VoA
    presentSimple: {
      s: "mourns",
      p: "mourn",
    },
    pastSimple: {
      s: "mourned",
      p: "mourned",
    },
  },
  "move": { // VoA
    presentSimple: {
      s: "moves",
      p: "move",
    },
    pastSimple: {
      s: "moved",
      p: "moved",
    },
  },
  "murder": { // VoA
    presentSimple: {
      s: "murders",
      p: "murder",
    },
    pastSimple: {
      s: "murdered",
      p: "murdered",
    },
  },
  "name": { // VoA
    presentSimple: {
      s: "names",
      p: "name",
    },
    pastSimple: {
      s: "named",
      p: "named",
    },
  },
  "narrow": { // VoA
    presentSimple: {
      s: "narrows",
      p: "narrow",
    },
    pastSimple: {
      s: "narrowed",
      p: "narrowed",
    },
  },
  "need": { // VoA
    presentSimple: {
      s: "needs",
      p: "need",
    },
    pastSimple: {
      s: "needed",
      p: "needed",
    },
  },
  "negotiate": { // VoA
    presentSimple: {
      s: "negotiates",
      p: "negotiate",
    },
    pastSimple: {
      s: "negotiated",
      p: "negotiated",
    },
  },
  "nominate": { // VoA
    presentSimple: {
      s: "nominates",
      p: "nominate",
    },
    pastSimple: {
      s: "nominated",
      p: "nominated",
    },
  },
  "note": { // VoA
    presentSimple: {
      s: "notes",
      p: "note",
    },
    pastSimple: {
      s: "noted",
      p: "noted",
    },
  },
  "number": { // VoA
    presentSimple: {
      s: "numbers",
      p: "number",
    },
    pastSimple: {
      s: "numbered",
      p: "numbered",
    },
  },
  "obey": { // VoA
    presentSimple: {
      s: "obeys",
      p: "obey",
    },
    pastSimple: {
      s: "obeyed",
      p: "obeyed",
    },
  },
  "object": { // VoA
    presentSimple: {
      s: "objects",
      p: "object",
    },
    pastSimple: {
      s: "objected",
      p: "objected",
    },
  },
  "observe": { // VoA
    presentSimple: {
      s: "observes",
      p: "observe",
    },
    pastSimple: {
      s: "observed",
      p: "observed",
    },
  },
  "occupy": { // VoA
    presentSimple: {
      s: "occupies",
      p: "occupy",
    },
    pastSimple: {
      s: "occupied",
      p: "occupied",
    },
  },
  "offer": { // VoA
    presentSimple: {
      s: "offers",
      p: "offer",
    },
    pastSimple: {
      s: "offered",
      p: "offered",
    },
  },
  "oil": { // VoA
    presentSimple: {
      s: "oils",
      p: "oil",
    },
    pastSimple: {
      s: "oiled",
      p: "oiled",
    },
  },
  "open": { // VoA
    presentSimple: {
      s: "opens",
      p: "open",
    },
    pastSimple: {
      s: "opened",
      p: "opened",
    },
  },
  "operate": { // VoA
    presentSimple: {
      s: "operates",
      p: "operate",
    },
    pastSimple: {
      s: "operated",
      p: "operated",
    },
  },
  "oppose": { // VoA
    presentSimple: {
      s: "opposes",
      p: "oppose",
    },
    pastSimple: {
      s: "opposed",
      p: "opposed",
    },
  },
  "oppress": { // VoA
    presentSimple: {
      s: "oppresses",
      p: "oppress",
    },
    pastSimple: {
      s: "oppressed",
      p: "oppressed",
    },
  },
  "orbit": { // VoA
    presentSimple: {
      s: "orbits",
      p: "orbit",
    },
    pastSimple: {
      s: "orbited",
      p: "orbited",
    },
  },
  "order": { // VoA
    presentSimple: {
      s: "orders",
      p: "order",
    },
    pastSimple: {
      s: "ordered",
      p: "ordered",
    },
  },
  "organize": { // VoA
    presentSimple: {
      s: "organizes",
      p: "organize",
    },
    pastSimple: {
      s: "organized",
      p: "organized",
    },
  },
  "oust": { // VoA
    presentSimple: {
      s: "ousts",
      p: "oust",
    },
    pastSimple: {
      s: "ousted",
      p: "ousted",
    },
  },
  "out": { // VoA
    presentSimple: {
      s: "outs",
      p: "out",
    },
    pastSimple: {
      s: "outed",
      p: "outed",
    },
  },
  "overthrow": { // VoA
    presentSimple: {
      s: "overthrows",
      p: "overthrow",
    },
    pastSimple: {
      s: "overthrew",
      p: "overthrew",
    },
  },
  "owe": { // VoA
    presentSimple: {
      s: "owes",
      p: "owe",
    },
    pastSimple: {
      s: "owed",
      p: "owed",
    },
  },
  "own": { // VoA
    presentSimple: {
      s: "owns",
      p: "own",
    },
    pastSimple: {
      s: "owned",
      p: "owned",
    },
  },
  "paint": { // VoA
    presentSimple: {
      s: "paints",
      p: "paint",
    },
    pastSimple: {
      s: "painted",
      p: "painted",
    },
  },
  "pan": { // VoA
    presentSimple: {
      s: "pans",
      p: "pan",
    },
    pastSimple: {
      s: "panned",
      p: "panned",
    },
  },
  "parachute": { // VoA
    presentSimple: {
      s: "parachutes",
      p: "parachute",
    },
    pastSimple: {
      s: "parachuted",
      p: "parachuted",
    },
  },
  "parade": { // VoA
    presentSimple: {
      s: "parades",
      p: "parade",
    },
    pastSimple: {
      s: "paraded",
      p: "paraded",
    },
  },
  "pardon": { // VoA
    presentSimple: {
      s: "pardons",
      p: "pardon",
    },
    pastSimple: {
      s: "pardoned",
      p: "pardoned",
    },
  },
  "parent": { // VoA
    presentSimple: {
      s: "parents",
      p: "parent",
    },
    pastSimple: {
      s: "parented",
      p: "parented",
    },
  },
  "part": { // VoA
    presentSimple: {
      s: "parts",
      p: "part",
    },
    pastSimple: {
      s: "parted",
      p: "parted",
    },
  },
  "party": { // VoA
    presentSimple: {
      s: "parties",
      p: "party",
    },
    pastSimple: {
      s: "partied",
      p: "partied",
    },
  },
  "pass": { // VoA
    presentSimple: {
      s: "passes",
      p: "pass",
    },
    pastSimple: {
      s: "passed",
      p: "passed",
    },
  },
  "pay": { // VoA
    presentSimple: {
      s: "pays",
      p: "pay",
    },
    pastSimple: {
      s: "paid",
      p: "paid",
    },
  },
  "perfect": { // VoA
    presentSimple: {
      s: "perfects",
      p: "perfect",
    },
    pastSimple: {
      s: "perfected",
      p: "perfected",
    },
  },
  "perform": { // VoA
    presentSimple: {
      s: "performs",
      p: "perform",
    },
    pastSimple: {
      s: "performed",
      p: "performed",
    },
  },
  "permit": { // VoA
    presentSimple: {
      s: "permits",
      p: "permit",
    },
    pastSimple: {
      s: "permitted",
      p: "permitted",
    },
  },
  "picture": { // VoA
    presentSimple: {
      s: "pictures",
      p: "picture",
    },
    pastSimple: {
      s: "pictured",
      p: "pictured",
    },
  },
  "piece": { // VoA
    presentSimple: {
      s: "pieces",
      p: "piece",
    },
    pastSimple: {
      s: "pieced",
      p: "pieced",
    },
  },
  "pilot": { // VoA
    presentSimple: {
      s: "pilots",
      p: "pilot",
    },
    pastSimple: {
      s: "piloted",
      p: "piloted",
    },
  },
  "pipe": { // VoA
    presentSimple: {
      s: "pipes",
      p: "pipe",
    },
    pastSimple: {
      s: "piped",
      p: "piped",
    },
  },
  "place": { // VoA
    presentSimple: {
      s: "places",
      p: "place",
    },
    pastSimple: {
      s: "placed",
      p: "placed",
    },
  },
  "plan": { // VoA
    presentSimple: {
      s: "plans",
      p: "plan",
    },
    pastSimple: {
      s: "planned",
      p: "planned",
    },
  },
  "plant": { // VoA
    presentSimple: {
      s: "plants",
      p: "plant",
    },
    pastSimple: {
      s: "planted",
      p: "planted",
    },
  },
  "play": { // VoA
    presentSimple: {
      s: "plays",
      p: "play",
    },
    pastSimple: {
      s: "played",
      p: "played",
    },
  },
  "please": { // VoA
    presentSimple: {
      s: "pleases",
      p: "please",
    },
    pastSimple: {
      s: "pleased",
      p: "pleased",
    },
  },
  "plot": { // VoA
    presentSimple: {
      s: "plots",
      p: "plot",
    },
    pastSimple: {
      s: "plotted",
      p: "plotted",
    },
  },
  "point": { // VoA
    presentSimple: {
      s: "points",
      p: "point",
    },
    pastSimple: {
      s: "pointed",
      p: "pointed",
    },
  },
  "poison": { // VoA
    presentSimple: {
      s: "poisons",
      p: "poison",
    },
    pastSimple: {
      s: "poisoned",
      p: "poisoned",
    },
  },
  "police": { // VoA
    presentSimple: {
      s: "polices",
      p: "police",
    },
    pastSimple: {
      s: "policed",
      p: "policed",
    },
  },
  "pollute": { // VoA
    presentSimple: {
      s: "pollutes",
      p: "pollute",
    },
    pastSimple: {
      s: "polluted",
      p: "polluted",
    },
  },
  "position": { // VoA
    presentSimple: {
      s: "positions",
      p: "position",
    },
    pastSimple: {
      s: "positioned",
      p: "positioned",
    },
  },
  "possess": { // VoA
    presentSimple: {
      s: "possesses",
      p: "possess",
    },
    pastSimple: {
      s: "possessed",
      p: "possessed",
    },
  },
  "postpone": { // VoA
    presentSimple: {
      s: "postpones",
      p: "postpone",
    },
    pastSimple: {
      s: "postponed",
      p: "postponed",
    },
  },
  "pour": { // VoA
    presentSimple: {
      s: "pours",
      p: "pour",
    },
    pastSimple: {
      s: "poured",
      p: "poured",
    },
  },
  "power": { // VoA
    presentSimple: {
      s: "powers",
      p: "power",
    },
    pastSimple: {
      s: "powered",
      p: "powered",
    },
  },
  "praise": { // VoA
    presentSimple: {
      s: "praises",
      p: "praise",
    },
    pastSimple: {
      s: "praised",
      p: "praised",
    },
  },
  "pray": { // VoA
    presentSimple: {
      s: "prays",
      p: "pray",
    },
    pastSimple: {
      s: "prayed",
      p: "prayed",
    },
  },
  "present": { // VoA
    presentSimple: {
      s: "presents",
      p: "present",
    },
    pastSimple: {
      s: "presented",
      p: "presented",
    },
  },
  "press": { // VoA
    presentSimple: {
      s: "presses",
      p: "press",
    },
    pastSimple: {
      s: "pressed",
      p: "pressed",
    },
  },
  "prevent": { // VoA
    presentSimple: {
      s: "prevents",
      p: "prevent",
    },
    pastSimple: {
      s: "prevented",
      p: "prevented",
    },
  },
  "price": { // VoA
    presentSimple: {
      s: "prices",
      p: "price",
    },
    pastSimple: {
      s: "priced",
      p: "priced",
    },
  },
  "prize": { // VoA
    presentSimple: {
      s: "prizes",
      p: "prize",
    },
    pastSimple: {
      s: "prized",
      p: "prized",
    },
  },
  "process": { // VoA
    presentSimple: {
      s: "processes",
      p: "process",
    },
    pastSimple: {
      s: "processed",
      p: "processed",
    },
  },
  "produce": { // VoA
    presentSimple: {
      s: "produces",
      p: "produce",
    },
    pastSimple: {
      s: "produced",
      p: "produced",
    },
  },
  "profit": { // VoA
    presentSimple: {
      s: "profits",
      p: "profit",
    },
    pastSimple: {
      s: "profited",
      p: "profited",
    },
  },
  "program": { // VoA
    presentSimple: {
      s: "programs",
      p: "program",
    },
    pastSimple: {
      s: "programmed",
      p: "programmed",
    },
  },
  "progress": { // VoA
    presentSimple: {
      s: "progresses",
      p: "progress",
    },
    pastSimple: {
      s: "progressed",
      p: "progressed",
    },
  },
  "project": { // VoA
    presentSimple: {
      s: "projects",
      p: "project",
    },
    pastSimple: {
      s: "projected",
      p: "projected",
    },
  },
  "propose": { // VoA
    presentSimple: {
      s: "proposes",
      p: "propose",
    },
    pastSimple: {
      s: "proposed",
      p: "proposed",
    },
  },
  "protect": { // VoA
    presentSimple: {
      s: "protects",
      p: "protect",
    },
    pastSimple: {
      s: "protected",
      p: "protected",
    },
  },
  "protest": { // VoA
    presentSimple: {
      s: "protests",
      p: "protest",
    },
    pastSimple: {
      s: "protested",
      p: "protested",
    },
  },
  "prove": { // VoA
    presentSimple: {
      s: "proves",
      p: "prove",
    },
    pastSimple: {
      s: "proved",
      p: "proved",
    },
  },
  "provide": { // VoA
    presentSimple: {
      s: "provides",
      p: "provide",
    },
    pastSimple: {
      s: "provided",
      p: "provided",
    },
  },
  "publish": { // VoA
    presentSimple: {
      s: "publishes",
      p: "publish",
    },
    pastSimple: {
      s: "published",
      p: "published",
    },
  },
  "pull": { // VoA
    presentSimple: {
      s: "pulls",
      p: "pull",
    },
    pastSimple: {
      s: "pulled",
      p: "pulled",
    },
  },
  "pump": { // VoA
    presentSimple: {
      s: "pumps",
      p: "pump",
    },
    pastSimple: {
      s: "pumped",
      p: "pumped",
    },
  },
  "punish": { // VoA
    presentSimple: {
      s: "punishes",
      p: "punish",
    },
    pastSimple: {
      s: "punished",
      p: "punished",
    },
  },
  "purchase": { // VoA
    presentSimple: {
      s: "purchases",
      p: "purchase",
    },
    pastSimple: {
      s: "purchased",
      p: "purchased",
    },
  },
  "push": { // VoA
    presentSimple: {
      s: "pushes",
      p: "push",
    },
    pastSimple: {
      s: "pushed",
      p: "pushed",
    },
  },
  "put": { // VoA
    presentSimple: {
      s: "puts",
      p: "put",
    },
    pastSimple: {
      s: "put",
      p: "put",
    },
  },
  "question": { // VoA
    presentSimple: {
      s: "questions",
      p: "question",
    },
    pastSimple: {
      s: "questioned",
      p: "questioned",
    },
  },
  "quiet": { // VoA
    presentSimple: {
      s: "quiets",
      p: "quiet",
    },
    pastSimple: {
      s: "quieted",
      p: "quieted",
    },
  },
  "race": { // VoA
    presentSimple: {
      s: "races",
      p: "race",
    },
    pastSimple: {
      s: "raced",
      p: "raced",
    },
  },
  "radio": { // VoA
    presentSimple: {
      s: "radios",
      p: "radio",
    },
    pastSimple: {
      s: "radioed",
      p: "radioed",
    },
  },
  "raid": { // VoA
    presentSimple: {
      s: "raids",
      p: "raid",
    },
    pastSimple: {
      s: "raided",
      p: "raided",
    },
  },
  "rain": { // VoA
    presentSimple: {
      s: "rains",
      p: "rain",
    },
    pastSimple: {
      s: "rained",
      p: "rained",
    },
  },
  "raise": { // VoA
    presentSimple: {
      s: "raises",
      p: "raise",
    },
    pastSimple: {
      s: "raised",
      p: "raised",
    },
  },
  "rate": { // VoA
    presentSimple: {
      s: "rates",
      p: "rate",
    },
    pastSimple: {
      s: "rated",
      p: "rated",
    },
  },
  "reach": { // VoA
    presentSimple: {
      s: "reaches",
      p: "reach",
    },
    pastSimple: {
      s: "reached",
      p: "reached",
    },
  },
  "react": { // VoA
    presentSimple: {
      s: "reacts",
      p: "react",
    },
    pastSimple: {
      s: "reacted",
      p: "reacted",
    },
  },
  "read": { // VoA
    presentSimple: {
      s: "reads",
      p: "read",
    },
    pastSimple: {
      s: "read",
      p: "read",
    },
  },
  "ready": { // VoA
    presentSimple: {
      s: "readies",
      p: "ready",
    },
    pastSimple: {
      s: "readied",
      p: "readied",
    },
  },
  "reason": { // VoA
    presentSimple: {
      s: "reasons",
      p: "reason",
    },
    pastSimple: {
      s: "reasoned",
      p: "reasoned",
    },
  },
  "rebel": { // VoA
    presentSimple: {
      s: "rebels",
      p: "rebel",
    },
    pastSimple: {
      s: "rebelled",
      p: "rebelled",
    },
  },
  "receive": { // VoA
    presentSimple: {
      s: "receives",
      p: "receive",
    },
    pastSimple: {
      s: "received",
      p: "received",
    },
  },
  "recognize": { // VoA
    presentSimple: {
      s: "recognizes",
      p: "recognize",
    },
    pastSimple: {
      s: "recognized",
      p: "recognized",
    },
  },
  "record": { // VoA
    presentSimple: {
      s: "records",
      p: "record",
    },
    pastSimple: {
      s: "recorded",
      p: "recorded",
    },
  },
  "recover": { // VoA
    presentSimple: {
      s: "recovers",
      p: "recover",
    },
    pastSimple: {
      s: "recovered",
      p: "recovered",
    },
  },
  "reduce": { // VoA
    presentSimple: {
      s: "reduces",
      p: "reduce",
    },
    pastSimple: {
      s: "reduced",
      p: "reduced",
    },
  },
  "reform": { // VoA
    presentSimple: {
      s: "reforms",
      p: "reform",
    },
    pastSimple: {
      s: "reformed",
      p: "reformed",
    },
  },
  "refuse": { // VoA
    presentSimple: {
      s: "refuses",
      p: "refuse",
    },
    pastSimple: {
      s: "refused",
      p: "refused",
    },
  },
  "regret": { // VoA
    presentSimple: {
      s: "regrets",
      p: "regret",
    },
    pastSimple: {
      s: "regretted",
      p: "regretted",
    },
  },
  "reject": { // VoA
    presentSimple: {
      s: "rejects",
      p: "reject",
    },
    pastSimple: {
      s: "rejected",
      p: "rejected",
    },
  },
  "release": { // VoA
    presentSimple: {
      s: "releases",
      p: "release",
    },
    pastSimple: {
      s: "released",
      p: "released",
    },
  },
  "remain": { // VoA
    presentSimple: {
      s: "remains",
      p: "remain",
    },
    pastSimple: {
      s: "remained",
      p: "remained",
    },
  },
  "remember": { // VoA
    presentSimple: {
      s: "remembers",
      p: "remember",
    },
    pastSimple: {
      s: "remembered",
      p: "remembered",
    },
  },
  "remove": { // VoA
    presentSimple: {
      s: "removes",
      p: "remove",
    },
    pastSimple: {
      s: "removed",
      p: "removed",
    },
  },
  "repair": { // VoA
    presentSimple: {
      s: "repairs",
      p: "repair",
    },
    pastSimple: {
      s: "repaired",
      p: "repaired",
    },
  },
  "repeat": { // VoA
    presentSimple: {
      s: "repeats",
      p: "repeat",
    },
    pastSimple: {
      s: "repeated",
      p: "repeated",
    },
  },
  "report": { // VoA
    presentSimple: {
      s: "reports",
      p: "report",
    },
    pastSimple: {
      s: "reported",
      p: "reported",
    },
  },
  "represent": { // VoA
    presentSimple: {
      s: "represents",
      p: "represent",
    },
    pastSimple: {
      s: "represented",
      p: "represented",
    },
  },
  "repress": { // VoA
    presentSimple: {
      s: "represses",
      p: "repress",
    },
    pastSimple: {
      s: "repressed",
      p: "repressed",
    },
  },
  "request": { // VoA
    presentSimple: {
      s: "requests",
      p: "request",
    },
    pastSimple: {
      s: "requested",
      p: "requested",
    },
  },
  "require": { // VoA
    presentSimple: {
      s: "requires",
      p: "require",
    },
    pastSimple: {
      s: "required",
      p: "required",
    },
  },
  "rescue": { // VoA
    presentSimple: {
      s: "rescues",
      p: "rescue",
    },
    pastSimple: {
      s: "rescued",
      p: "rescued",
    },
  },
  "research": { // VoA
    presentSimple: {
      s: "researches",
      p: "research",
    },
    pastSimple: {
      s: "researched",
      p: "researched",
    },
  },
  "resign": { // VoA
    presentSimple: {
      s: "resigns",
      p: "resign",
    },
    pastSimple: {
      s: "resigned",
      p: "resigned",
    },
  },
  "resist": { // VoA
    presentSimple: {
      s: "resists",
      p: "resist",
    },
    pastSimple: {
      s: "resisted",
      p: "resisted",
    },
  },
  "rest": { // VoA
    presentSimple: {
      s: "rests",
      p: "rest",
    },
    pastSimple: {
      s: "rested",
      p: "rested",
    },
  },
  "restrain": { // VoA
    presentSimple: {
      s: "restrains",
      p: "restrain",
    },
    pastSimple: {
      s: "restrained",
      p: "restrained",
    },
  },
  "restrict": { // VoA
    presentSimple: {
      s: "restricts",
      p: "restrict",
    },
    pastSimple: {
      s: "restricted",
      p: "restricted",
    },
  },
  "result": { // VoA
    presentSimple: {
      s: "results",
      p: "result",
    },
    pastSimple: {
      s: "resulted",
      p: "resulted",
    },
  },
  "retire": { // VoA
    presentSimple: {
      s: "retires",
      p: "retire",
    },
    pastSimple: {
      s: "retired",
      p: "retired",
    },
  },
  "return": { // VoA
    presentSimple: {
      s: "returns",
      p: "return",
    },
    pastSimple: {
      s: "returned",
      p: "returned",
    },
  },
  "revolt": { // VoA
    presentSimple: {
      s: "revolts",
      p: "revolt",
    },
    pastSimple: {
      s: "revolted",
      p: "revolted",
    },
  },
  "ride": { // VoA
    presentSimple: {
      s: "rides",
      p: "ride",
    },
    pastSimple: {
      s: "rode",
      p: "rode",
    },
  },
  "riot": { // VoA
    presentSimple: {
      s: "riots",
      p: "riot",
    },
    pastSimple: {
      s: "rioted",
      p: "rioted",
    },
  },
  "rise": { // VoA
    presentSimple: {
      s: "rises",
      p: "rise",
    },
    pastSimple: {
      s: "rose",
      p: "rose",
    },
  },
  "risk": { // VoA
    presentSimple: {
      s: "risks",
      p: "risk",
    },
    pastSimple: {
      s: "risked",
      p: "risked",
    },
  },
  "rob": { // VoA
    presentSimple: {
      s: "robs",
      p: "rob",
    },
    pastSimple: {
      s: "robbed",
      p: "robbed",
    },
  },
  "rock": { // VoA
    presentSimple: {
      s: "rocks",
      p: "rock",
    },
    pastSimple: {
      s: "rocked",
      p: "rocked",
    },
  },
  "roll": { // VoA
    presentSimple: {
      s: "rolls",
      p: "roll",
    },
    pastSimple: {
      s: "rolled",
      p: "rolled",
    },
  },
  "root": { // VoA
    presentSimple: {
      s: "roots",
      p: "root",
    },
    pastSimple: {
      s: "rooted",
      p: "rooted",
    },
  },
  "round": { // VoA
    presentSimple: {
      s: "rounds",
      p: "round",
    },
    pastSimple: {
      s: "rounded",
      p: "rounded",
    },
  },
  "rub": { // VoA
    presentSimple: {
      s: "rubs",
      p: "rub",
    },
    pastSimple: {
      s: "rubbed",
      p: "rubbed",
    },
  },
  "ruin": { // VoA
    presentSimple: {
      s: "ruins",
      p: "ruin",
    },
    pastSimple: {
      s: "ruined",
      p: "ruined",
    },
  },
  "rule": { // VoA
    presentSimple: {
      s: "rules",
      p: "rule",
    },
    pastSimple: {
      s: "ruled",
      p: "ruled",
    },
  },
  "run": { // VoA
    presentSimple: {
      s: "runs",
      p: "run",
    },
    pastSimple: {
      s: "ran",
      p: "ran",
    },
  },
  "sabotage": { // VoA
    presentSimple: {
      s: "sabotages",
      p: "sabotage",
    },
    pastSimple: {
      s: "sabotaged",
      p: "sabotaged",
    },
  },
  "sacrifice": { // VoA
    presentSimple: {
      s: "sacrifices",
      p: "sacrifice",
    },
    pastSimple: {
      s: "sacrificed",
      p: "sacrificed",
    },
  },
  "sail": { // VoA
    presentSimple: {
      s: "sails",
      p: "sail",
    },
    pastSimple: {
      s: "sailed",
      p: "sailed",
    },
  },
  "salt": { // VoA
    presentSimple: {
      s: "salts",
      p: "salt",
    },
    pastSimple: {
      s: "salted",
      p: "salted",
    },
  },
  "sand": { // VoA
    presentSimple: {
      s: "sands",
      p: "sand",
    },
    pastSimple: {
      s: "sanded",
      p: "sanded",
    },
  },
  "satisfy": { // VoA
    presentSimple: {
      s: "satisfies",
      p: "satisfy",
    },
    pastSimple: {
      s: "satisfied",
      p: "satisfied",
    },
  },
  "save": { // VoA
    presentSimple: {
      s: "saves",
      p: "save",
    },
    pastSimple: {
      s: "saved",
      p: "saved",
    },
  },
  "say": { // VoA
    presentSimple: {
      s: "says",
      p: "say",
    },
    pastSimple: {
      s: "said",
      p: "said",
    },
  },
  "search": { // VoA
    presentSimple: {
      s: "searches",
      p: "search",
    },
    pastSimple: {
      s: "searched",
      p: "searched",
    },
  },
  "season": { // VoA
    presentSimple: {
      s: "seasons",
      p: "season",
    },
    pastSimple: {
      s: "seasoned",
      p: "seasoned",
    },
  },
  "see": { // VoA
    presentSimple: {
      s: "sees",
      p: "see",
    },
    pastSimple: {
      s: "saw",
      p: "saw",
    },
  },
  "seed": { // VoA
    presentSimple: {
      s: "seeds",
      p: "seed",
    },
    pastSimple: {
      s: "seeded",
      p: "seeded",
    },
  },
  "seek": { // VoA
    presentSimple: {
      s: "seeks",
      p: "seek",
    },
    pastSimple: {
      s: "sought",
      p: "sought",
    },
  },
  "seem": { // VoA
    presentSimple: {
      s: "seems",
      p: "seem",
    },
    pastSimple: {
      s: "seemed",
      p: "seemed",
    },
  },
  "seize": { // VoA
    presentSimple: {
      s: "seizes",
      p: "seize",
    },
    pastSimple: {
      s: "seized",
      p: "seized",
    },
  },
  "sell": { // VoA
    presentSimple: {
      s: "sells",
      p: "sell",
    },
    pastSimple: {
      s: "sold",
      p: "sold",
    },
  },
  "send": { // VoA
    presentSimple: {
      s: "sends",
      p: "send",
    },
    pastSimple: {
      s: "sent",
      p: "sent",
    },
  },
  "sense": { // VoA
    presentSimple: {
      s: "senses",
      p: "sense",
    },
    pastSimple: {
      s: "sensed",
      p: "sensed",
    },
  },
  "sentence": { // VoA
    presentSimple: {
      s: "sentences",
      p: "sentence",
    },
    pastSimple: {
      s: "sentenced",
      p: "sentenced",
    },
  },
  "separate": { // VoA
    presentSimple: {
      s: "separates",
      p: "separate",
    },
    pastSimple: {
      s: "separated",
      p: "separated",
    },
  },
  "serve": { // VoA
    presentSimple: {
      s: "serves",
      p: "serve",
    },
    pastSimple: {
      s: "served",
      p: "served",
    },
  },
  "service": { // VoA
    presentSimple: {
      s: "services",
      p: "service",
    },
    pastSimple: {
      s: "serviced",
      p: "serviced",
    },
  },
  "set": { // VoA
    presentSimple: {
      s: "sets",
      p: "set",
    },
    pastSimple: {
      s: "set",
      p: "set",
    },
  },
  "settle": { // VoA
    presentSimple: {
      s: "settles",
      p: "settle",
    },
    pastSimple: {
      s: "settled",
      p: "settled",
    },
  },
  "shake": { // VoA
    presentSimple: {
      s: "shakes",
      p: "shake",
    },
    pastSimple: {
      s: "shook",
      p: "shook",
    },
  },
  "shape": { // VoA
    presentSimple: {
      s: "shapes",
      p: "shape",
    },
    pastSimple: {
      s: "shaped",
      p: "shaped",
    },
  },
  "share": { // VoA
    presentSimple: {
      s: "shares",
      p: "share",
    },
    pastSimple: {
      s: "shared",
      p: "shared",
    },
  },
  "shell": { // VoA
    presentSimple: {
      s: "shells",
      p: "shell",
    },
    pastSimple: {
      s: "shelled",
      p: "shelled",
    },
  },
  "shelter": { // VoA
    presentSimple: {
      s: "shelters",
      p: "shelter",
    },
    pastSimple: {
      s: "sheltered",
      p: "sheltered",
    },
  },
  "shine": { // VoA
    presentSimple: {
      s: "shines",
      p: "shine",
    },
    pastSimple: {
      s: "shone",
      p: "shone",
    },
  },
  "ship": { // VoA
    presentSimple: {
      s: "ships",
      p: "ship",
    },
    pastSimple: {
      s: "shipped",
      p: "shipped",
    },
  },
  "shock": { // VoA
    presentSimple: {
      s: "shocks",
      p: "shock",
    },
    pastSimple: {
      s: "shocked",
      p: "shocked",
    },
  },
  "shoot": { // VoA
    presentSimple: {
      s: "shoots",
      p: "shoot",
    },
    pastSimple: {
      s: "shot",
      p: "shot",
    },
  },
  "should": { // VoA
    presentSimple: {
      s: "should",
      p: "should",
    },
    pastSimple: {
      s: "should have",
      p: "should have",
    },
  },
  "shout": { // VoA
    presentSimple: {
      s: "shouts",
      p: "shout",
    },
    pastSimple: {
      s: "shouted",
      p: "shouted",
    },
  },
  "show": { // VoA
    presentSimple: {
      s: "shows",
      p: "show",
    },
    pastSimple: {
      s: "showed",
      p: "showed",
    },
  },
  "shrink": { // VoA
    presentSimple: {
      s: "shrinks",
      p: "shrink",
    },
    pastSimple: {
      s: "shrank",
      p: "shrank",
    },
  },
  "side": { // VoA
    presentSimple: {
      s: "sides",
      p: "side",
    },
    pastSimple: {
      s: "sided",
      p: "sided",
    },
  },
  "sign": { // VoA
    presentSimple: {
      s: "signs",
      p: "sign",
    },
    pastSimple: {
      s: "signed",
      p: "signed",
    },
  },
  "signal": { // VoA
    presentSimple: {
      s: "signals",
      p: "signal",
    },
    pastSimple: {
      s: "signaled",
      p: "signaled",
    },
  },
  "silence": { // VoA
    presentSimple: {
      s: "silences",
      p: "silence",
    },
    pastSimple: {
      s: "silenced",
      p: "silenced",
    },
  },
  "sing": { // VoA
    presentSimple: {
      s: "sings",
      p: "sing",
    },
    pastSimple: {
      s: "sang",
      p: "sang",
    },
  },
  "sink": { // VoA
    presentSimple: {
      s: "sinks",
      p: "sink",
    },
    pastSimple: {
      s: "sank",
      p: "sank",
    },
  },
  "sit": { // VoA
    presentSimple: {
      s: "sits",
      p: "sit",
    },
    pastSimple: {
      s: "sat",
      p: "sat",
    },
  },
  "size": { // VoA
    presentSimple: {
      s: "sizes",
      p: "size",
    },
    pastSimple: {
      s: "sized",
      p: "sized",
    },
  },
  "sleep": { // VoA
    presentSimple: {
      s: "sleeps",
      p: "sleep",
    },
    pastSimple: {
      s: "slept",
      p: "slept",
    },
  },
  "slide": { // VoA
    presentSimple: {
      s: "slides",
      p: "slide",
    },
    pastSimple: {
      s: "slid",
      p: "slid",
    },
  },
  "slow": { // VoA
    presentSimple: {
      s: "slows",
      p: "slow",
    },
    pastSimple: {
      s: "slowed",
      p: "slowed",
    },
  },
  "smash": { // VoA
    presentSimple: {
      s: "smashes",
      p: "smash",
    },
    pastSimple: {
      s: "smashed",
      p: "smashed",
    },
  },
  "smell": { // VoA
    presentSimple: {
      s: "smells",
      p: "smell",
    },
    pastSimple: {
      s: "smelled",
      p: "smelled",
    },
  },
  "smoke": { // VoA
    presentSimple: {
      s: "smokes",
      p: "smoke",
    },
    pastSimple: {
      s: "smoked",
      p: "smoked",
    },
  },
  "smooth": { // VoA
    presentSimple: {
      s: "smooths",
      p: "smooth",
    },
    pastSimple: {
      s: "smoothed",
      p: "smoothed",
    },
  },
  "snow": { // VoA
    presentSimple: {
      s: "snows",
      p: "snow",
    },
    pastSimple: {
      s: "snowed",
      p: "snowed",
    },
  },
  "soil": { // VoA
    presentSimple: {
      s: "soils",
      p: "soil",
    },
    pastSimple: {
      s: "soiled",
      p: "soiled",
    },
  },
  "solve": { // VoA
    presentSimple: {
      s: "solves",
      p: "solve",
    },
    pastSimple: {
      s: "solved",
      p: "solved",
    },
  },
  "sort": { // VoA
    presentSimple: {
      s: "sorts",
      p: "sort",
    },
    pastSimple: {
      s: "sorted",
      p: "sorted",
    },
  },
  "sound": { // VoA
    presentSimple: {
      s: "sounds",
      p: "sound",
    },
    pastSimple: {
      s: "sounded",
      p: "sounded",
    },
  },
  "speak": { // VoA
    presentSimple: {
      s: "speaks",
      p: "speak",
    },
    pastSimple: {
      s: "spoke",
      p: "spoke",
    },
  },
  "speed": { // VoA
    presentSimple: {
      s: "speeds",
      p: "speed",
    },
    pastSimple: {
      s: "sped",
      p: "sped",
    },
  },
  "spend": { // VoA
    presentSimple: {
      s: "spends",
      p: "spend",
    },
    pastSimple: {
      s: "spent",
      p: "spent",
    },
  },
  "spill": { // VoA
    presentSimple: {
      s: "spills",
      p: "spill",
    },
    pastSimple: {
      s: "spilled",
      p: "spilled",
    },
  },
  "split": { // VoA
    presentSimple: {
      s: "splits",
      p: "split",
    },
    pastSimple: {
      s: "split",
      p: "split",
    },
  },
  "spread": { // VoA
    presentSimple: {
      s: "spreads",
      p: "spread",
    },
    pastSimple: {
      s: "spread",
      p: "spread",
    },
  },
  "spring": { // VoA
    presentSimple: {
      s: "springs",
      p: "spring",
    },
    pastSimple: {
      s: "sprung",
      p: "sprung",
    },
  },
  "spy": { // VoA
    presentSimple: {
      s: "spies",
      p: "spy",
    },
    pastSimple: {
      s: "spied",
      p: "spied",
    },
  },
  "square": { // VoA
    presentSimple: {
      s: "squares",
      p: "square",
    },
    pastSimple: {
      s: "squared",
      p: "squared",
    },
  },
  "stab": { // VoA
    presentSimple: {
      s: "stabs",
      p: "stab",
    },
    pastSimple: {
      s: "stabbed",
      p: "stabbed",
    },
  },
  "stand": { // VoA
    presentSimple: {
      s: "stands",
      p: "stand",
    },
    pastSimple: {
      s: "stood",
      p: "stood",
    },
  },
  "star": { // VoA
    presentSimple: {
      s: "stars",
      p: "star",
    },
    pastSimple: {
      s: "starred",
      p: "starred",
    },
  },
  "start": { // VoA
    presentSimple: {
      s: "starts",
      p: "start",
    },
    pastSimple: {
      s: "started",
      p: "started",
    },
  },
  "starve": { // VoA
    presentSimple: {
      s: "starves",
      p: "starve",
    },
    pastSimple: {
      s: "starved",
      p: "starved",
    },
  },
  "state": { // VoA
    presentSimple: {
      s: "states",
      p: "state",
    },
    pastSimple: {
      s: "stated",
      p: "stated",
    },
  },
  "station": { // VoA
    presentSimple: {
      s: "stations",
      p: "station",
    },
    pastSimple: {
      s: "stationed",
      p: "stationed",
    },
  },
  "stay": { // VoA
    presentSimple: {
      s: "stays",
      p: "stay",
    },
    pastSimple: {
      s: "stayed",
      p: "stayed",
    },
  },
  "steal": { // VoA
    presentSimple: {
      s: "steals",
      p: "steal",
    },
    pastSimple: {
      s: "stole",
      p: "stole",
    },
  },
  "steam": { // VoA
    presentSimple: {
      s: "steams",
      p: "steam",
    },
    pastSimple: {
      s: "steamed",
      p: "steamed",
    },
  },
  "step": { // VoA
    presentSimple: {
      s: "steps",
      p: "step",
    },
    pastSimple: {
      s: "stepped",
      p: "stepped",
    },
  },
  "stick": { // VoA
    presentSimple: {
      s: "sticks",
      p: "stick",
    },
    pastSimple: {
      s: "stuck",
      p: "stuck",
    },
  },
  "stop": { // VoA
    presentSimple: {
      s: "stops",
      p: "stop",
    },
    pastSimple: {
      s: "stopped",
      p: "stopped",
    },
  },
  "store": { // VoA
    presentSimple: {
      s: "stores",
      p: "store",
    },
    pastSimple: {
      s: "stored",
      p: "stored",
    },
  },
  "storm": { // VoA
    presentSimple: {
      s: "storms",
      p: "storm",
    },
    pastSimple: {
      s: "stormed",
      p: "stormed",
    },
  },
  "stretch": { // VoA
    presentSimple: {
      s: "stretches",
      p: "stretch",
    },
    pastSimple: {
      s: "stretched",
      p: "stretched",
    },
  },
  "strike": { // VoA
    presentSimple: {
      s: "strikes",
      p: "strike",
    },
    pastSimple: {
      s: "striked",
      p: "striked",
    },
  },
  "struggle": { // VoA
    presentSimple: {
      s: "struggles",
      p: "struggle",
    },
    pastSimple: {
      s: "struggled",
      p: "struggled",
    },
  },
  "study": { // VoA
    presentSimple: {
      s: "studies",
      p: "study",
    },
    pastSimple: {
      s: "studied",
      p: "studied",
    },
  },
  "substitute": { // VoA
    presentSimple: {
      s: "substitutes",
      p: "substitute",
    },
    pastSimple: {
      s: "substituted",
      p: "substituted",
    },
  },
  "succeed": { // VoA
    presentSimple: {
      s: "succeeds",
      p: "succeed",
    },
    pastSimple: {
      s: "succeeded",
      p: "succeeded",
    },
  },
  "suffer": { // VoA
    presentSimple: {
      s: "suffers",
      p: "suffer",
    },
    pastSimple: {
      s: "suffered",
      p: "suffered",
    },
  },
  "suggest": { // VoA
    presentSimple: {
      s: "suggests",
      p: "suggest",
    },
    pastSimple: {
      s: "suggested",
      p: "suggested",
    },
  },
  "supervise": { // VoA
    presentSimple: {
      s: "supervises",
      p: "supervise",
    },
    pastSimple: {
      s: "supervised",
      p: "supervised",
    },
  },
  "supply": { // VoA
    presentSimple: {
      s: "supplies",
      p: "supply",
    },
    pastSimple: {
      s: "supplied",
      p: "supplied",
    },
  },
  "support": { // VoA
    presentSimple: {
      s: "supports",
      p: "support",
    },
    pastSimple: {
      s: "supported",
      p: "supported",
    },
  },
  "suppose": { // VoA
    presentSimple: {
      s: "supposes",
      p: "suppose",
    },
    pastSimple: {
      s: "supposed",
      p: "supposed",
    },
  },
  "suppress": { // VoA
    presentSimple: {
      s: "suppresses",
      p: "suppress",
    },
    pastSimple: {
      s: "suppressed",
      p: "suppressed",
    },
  },
  "surface": { // VoA
    presentSimple: {
      s: "surfaces",
      p: "surface",
    },
    pastSimple: {
      s: "surfaced",
      p: "surfaced",
    },
  },
  "surprise": { // VoA
    presentSimple: {
      s: "surprises",
      p: "surprise",
    },
    pastSimple: {
      s: "surprised",
      p: "surprised",
    },
  },
  "surrender": { // VoA
    presentSimple: {
      s: "surrenders",
      p: "surrender",
    },
    pastSimple: {
      s: "surrendered",
      p: "surrendered",
    },
  },
  "surround": { // VoA
    presentSimple: {
      s: "surrounds",
      p: "surround",
    },
    pastSimple: {
      s: "surrounded",
      p: "surrounded",
    },
  },
  "survive": { // VoA
    presentSimple: {
      s: "survives",
      p: "survive",
    },
    pastSimple: {
      s: "survived",
      p: "survived",
    },
  },
  "suspect": { // VoA
    presentSimple: {
      s: "suspects",
      p: "suspect",
    },
    pastSimple: {
      s: "suspected",
      p: "suspected",
    },
  },
  "suspend": { // VoA
    presentSimple: {
      s: "suspends",
      p: "suspend",
    },
    pastSimple: {
      s: "suspended",
      p: "suspended",
    },
  },
  "swallow": { // VoA
    presentSimple: {
      s: "swallows",
      p: "swallow",
    },
    pastSimple: {
      s: "swallowed",
      p: "swallowed",
    },
  },
  "swim": { // VoA
    presentSimple: {
      s: "swims",
      p: "swim",
    },
    pastSimple: {
      s: "swam",
      p: "swam",
    },
  },
  "take": { // VoA
    presentSimple: {
      s: "takes",
      p: "take",
    },
    pastSimple: {
      s: "took",
      p: "took",
    },
  },
  "talk": { // VoA
    presentSimple: {
      s: "talks",
      p: "talk",
    },
    pastSimple: {
      s: "talked",
      p: "talked",
    },
  },
  "target": { // VoA
    presentSimple: {
      s: "targets",
      p: "target",
    },
    pastSimple: {
      s: "targeted",
      p: "targeted",
    },
  },
  "taste": { // VoA
    presentSimple: {
      s: "tastes",
      p: "taste",
    },
    pastSimple: {
      s: "tasted",
      p: "tasted",
    },
  },
  "tax": { // VoA
    presentSimple: {
      s: "taxes",
      p: "tax",
    },
    pastSimple: {
      s: "taxed",
      p: "taxed",
    },
  },
  "teach": { // VoA
    presentSimple: {
      s: "teaches",
      p: "teach",
    },
    pastSimple: {
      s: "taught",
      p: "taught",
    },
  },
  "tear": { // VoA
    presentSimple: {
      s: "tears",
      p: "tear",
    },
    pastSimple: {
      s: "teared",
      p: "teared",
    },
  },
  "telephone": { // VoA
    presentSimple: {
      s: "telephones",
      p: "telephone",
    },
    pastSimple: {
      s: "telephoned",
      p: "telephoned",
    },
  },
  "tell": { // VoA
    presentSimple: {
      s: "tells",
      p: "tell",
    },
    pastSimple: {
      s: "told",
      p: "told",
    },
  },
  "tense": { // VoA
    presentSimple: {
      s: "tenses",
      p: "tense",
    },
    pastSimple: {
      s: "tensed",
      p: "tensed",
    },
  },
  "test": { // VoA
    presentSimple: {
      s: "tests",
      p: "test",
    },
    pastSimple: {
      s: "tested",
      p: "tested",
    },
  },
  "thank": { // VoA
    presentSimple: {
      s: "thanks",
      p: "thank",
    },
    pastSimple: {
      s: "thanked",
      p: "thanked",
    },
  },
  "thin": { // VoA
    presentSimple: {
      s: "thins",
      p: "thin",
    },
    pastSimple: {
      s: "thinned",
      p: "thinned",
    },
  },
  "think": { // VoA
    presentSimple: {
      s: "thinks",
      p: "think",
    },
    pastSimple: {
      s: "thought",
      p: "thought",
    },
  },
  "threaten": { // VoA
    presentSimple: {
      s: "threatens",
      p: "threaten",
    },
    pastSimple: {
      s: "threatened",
      p: "threatened",
    },
  },
  "throw": { // VoA
    presentSimple: {
      s: "throws",
      p: "throw",
    },
    pastSimple: {
      s: "threw",
      p: "threw",
    },
  },
  "tie": { // VoA
    presentSimple: {
      s: "ties",
      p: "tie",
    },
    pastSimple: {
      s: "tied",
      p: "tied",
    },
  },
  "time": { // VoA
    presentSimple: {
      s: "times",
      p: "time",
    },
    pastSimple: {
      s: "timed",
      p: "timed",
    },
  },
  "top": { // VoA
    presentSimple: {
      s: "tops",
      p: "top",
    },
    pastSimple: {
      s: "topped",
      p: "topped",
    },
  },
  "torture": { // VoA
    presentSimple: {
      s: "tortures",
      p: "torture",
    },
    pastSimple: {
      s: "tortured",
      p: "tortured",
    },
  },
  "total": { // VoA
    presentSimple: {
      s: "totals",
      p: "total",
    },
    pastSimple: {
      s: "totaled",
      p: "totaled",
    },
  },
  "touch": { // VoA
    presentSimple: {
      s: "touches",
      p: "touch",
    },
    pastSimple: {
      s: "touched",
      p: "touched",
    },
  },
  "trade": { // VoA
    presentSimple: {
      s: "trades",
      p: "trade",
    },
    pastSimple: {
      s: "traded",
      p: "traded",
    },
  },
  "train": { // VoA
    presentSimple: {
      s: "trains",
      p: "train",
    },
    pastSimple: {
      s: "trained",
      p: "trained",
    },
  },
  "transport": { // VoA
    presentSimple: {
      s: "transports",
      p: "transport",
    },
    pastSimple: {
      s: "transported",
      p: "transported",
    },
  },
  "trap": { // VoA
    presentSimple: {
      s: "traps",
      p: "trap",
    },
    pastSimple: {
      s: "trapped",
      p: "trapped",
    },
  },
  "travel": { // VoA
    presentSimple: {
      s: "travels",
      p: "travel",
    },
    pastSimple: {
      s: "traveled",
      p: "traveled",
    },
  },
  "treasure": { // VoA
    presentSimple: {
      s: "treasures",
      p: "treasure",
    },
    pastSimple: {
      s: "treasured",
      p: "treasured",
    },
  },
  "treat": { // VoA
    presentSimple: {
      s: "treats",
      p: "treat",
    },
    pastSimple: {
      s: "treated",
      p: "treated",
    },
  },
  "trial": { // VoA
    presentSimple: {
      s: "trials",
      p: "trial",
    },
    pastSimple: {
      s: "trialed",
      p: "trialed",
    },
  },
  "trick": { // VoA
    presentSimple: {
      s: "tricks",
      p: "trick",
    },
    pastSimple: {
      s: "tricked",
      p: "tricked",
    },
  },
  "trip": { // VoA
    presentSimple: {
      s: "trips",
      p: "trip",
    },
    pastSimple: {
      s: "tripped",
      p: "tripped",
    },
  },
  "trouble": { // VoA
    presentSimple: {
      s: "troubles",
      p: "trouble",
    },
    pastSimple: {
      s: "troubled",
      p: "troubled",
    },
  },
  "trust": { // VoA
    presentSimple: {
      s: "trusts",
      p: "trust",
    },
    pastSimple: {
      s: "trusted",
      p: "trusted",
    },
  },
  "try": { // VoA
    presentSimple: {
      s: "tries",
      p: "try",
    },
    pastSimple: {
      s: "tried",
      p: "tried",
    },
  },
  "turn": { // VoA
    presentSimple: {
      s: "turns",
      p: "turn",
    },
    pastSimple: {
      s: "turned",
      p: "turned",
    },
  },
  "understand": { // VoA
    presentSimple: {
      s: "understands",
      p: "understand",
    },
    pastSimple: {
      s: "understood",
      p: "understood",
    },
  },
  "unite": { // VoA
    presentSimple: {
      s: "unites",
      p: "unite",
    },
    pastSimple: {
      s: "united",
      p: "united",
    },
  },
  "urge": { // VoA
    presentSimple: {
      s: "urges",
      p: "urge",
    },
    pastSimple: {
      s: "urged",
      p: "urged",
    },
  },
  "use": { // VoA
    presentSimple: {
      s: "uses",
      p: "use",
    },
    pastSimple: {
      s: "used",
      p: "used",
    },
  },
  "value": { // VoA
    presentSimple: {
      s: "values",
      p: "value",
    },
    pastSimple: {
      s: "valued",
      p: "valued",
    },
  },
  "veto": { // VoA
    presentSimple: {
      s: "vetoes",
      p: "veto",
    },
    pastSimple: {
      s: "vetoed",
      p: "vetoed",
    },
  },
  "violate": { // VoA
    presentSimple: {
      s: "violates",
      p: "violate",
    },
    pastSimple: {
      s: "violated",
      p: "violated",
    },
  },
  "visit": { // VoA
    presentSimple: {
      s: "visits",
      p: "visit",
    },
    pastSimple: {
      s: "visited",
      p: "visited",
    },
  },
  "voice": { // VoA
    presentSimple: {
      s: "voices",
      p: "voice",
    },
    pastSimple: {
      s: "voiced",
      p: "voiced",
    },
  },
  "vote": { // VoA
    presentSimple: {
      s: "votes",
      p: "vote",
    },
    pastSimple: {
      s: "voted",
      p: "voted",
    },
  },
  "wait": { // VoA
    presentSimple: {
      s: "waits",
      p: "wait",
    },
    pastSimple: {
      s: "waited",
      p: "waited",
    },
  },
  "walk": { // VoA
    presentSimple: {
      s: "walks",
      p: "walk",
    },
    pastSimple: {
      s: "walked",
      p: "walked",
    },
  },
  "want": { // VoA
    presentSimple: {
      s: "wants",
      p: "want",
    },
    pastSimple: {
      s: "wanted",
      p: "wanted",
    },
  },
  "war": { // VoA
    presentSimple: {
      s: "wars",
      p: "war",
    },
    pastSimple: {
      s: "warred",
      p: "warred",
    },
  },
  "warm": { // VoA
    presentSimple: {
      s: "warms",
      p: "warm",
    },
    pastSimple: {
      s: "warmed",
      p: "warmed",
    },
  },
  "warn": { // VoA
    presentSimple: {
      s: "warns",
      p: "warn",
    },
    pastSimple: {
      s: "warned",
      p: "warned",
    },
  },
  "wash": { // VoA
    presentSimple: {
      s: "washes",
      p: "wash",
    },
    pastSimple: {
      s: "washed",
      p: "washed",
    },
  },
  "waste": { // VoA
    presentSimple: {
      s: "wastes",
      p: "waste",
    },
    pastSimple: {
      s: "wasted",
      p: "wasted",
    },
  },
  "watch": { // VoA
    presentSimple: {
      s: "watches",
      p: "watch",
    },
    pastSimple: {
      s: "watched",
      p: "watched",
    },
  },
  "water": { // VoA
    presentSimple: {
      s: "waters",
      p: "water",
    },
    pastSimple: {
      s: "watered",
      p: "watered",
    },
  },
  "wave": { // VoA
    presentSimple: {
      s: "waves",
      p: "wave",
    },
    pastSimple: {
      s: "waved",
      p: "waved",
    },
  },
  "wear": { // VoA
    presentSimple: {
      s: "wears",
      p: "wear",
    },
    pastSimple: {
      s: "wore",
      p: "wore",
    },
  },
  "weather": { // VoA
    presentSimple: {
      s: "weathers",
      p: "weather",
    },
    pastSimple: {
      s: "weathered",
      p: "weathered",
    },
  },
  "weigh": { // VoA
    presentSimple: {
      s: "weighs",
      p: "weigh",
    },
    pastSimple: {
      s: "weighed",
      p: "weighed",
    },
  },
  "welcome": { // VoA
    presentSimple: {
      s: "welcomes",
      p: "welcome",
    },
    pastSimple: {
      s: "welcomed",
      p: "welcomed",
    },
  },
  "wet": { // VoA
    presentSimple: {
      s: "wets",
      p: "wet",
    },
    pastSimple: {
      s: "wet",
      p: "wet",
    },
  },
  "wheel": { // VoA
    presentSimple: {
      s: "wheels",
      p: "wheel",
    },
    pastSimple: {
      s: "wheeled",
      p: "wheeled",
    },
  },
  "will": { // VoA
    presentSimple: {
      s: "wills",
      p: "will",
    },
    pastSimple: {
      s: "willed",
      p: "willed",
    },
  },
  "win": { // VoA
    presentSimple: {
      s: "wins",
      p: "win",
    },
    pastSimple: {
      s: "won",
      p: "won",
    },
  },
  "wind": { // VoA
    presentSimple: {
      s: "winds",
      p: "wind",
    },
    pastSimple: {
      s: "wound",
      p: "wound",
    },
  },
  "wire": { // VoA
    presentSimple: {
      s: "wires",
      p: "wire",
    },
    pastSimple: {
      s: "wired",
      p: "wired",
    },
  },
  "wish": { // VoA
    presentSimple: {
      s: "wishes",
      p: "wish",
    },
    pastSimple: {
      s: "wished",
      p: "wished",
    },
  },
  "withdraw": { // VoA
    presentSimple: {
      s: "withdraws",
      p: "withdraw",
    },
    pastSimple: {
      s: "withdrew",
      p: "withdrew",
    },
  },
  "wonder": { // VoA
    presentSimple: {
      s: "wonders",
      p: "wonder",
    },
    pastSimple: {
      s: "wondered",
      p: "wondered",
    },
  },
  "work": { // VoA
    presentSimple: {
      s: "works",
      p: "work",
    },
    pastSimple: {
      s: "worked",
      p: "worked",
    },
  },
  "worry": { // VoA
    presentSimple: {
      s: "worries",
      p: "worry",
    },
    pastSimple: {
      s: "worried",
      p: "worried",
    },
  },
  "wound": { // VoA
    presentSimple: {
      s: "wounds",
      p: "wound",
    },
    pastSimple: {
      s: "wounded",
      p: "wounded",
    },
  },
  "wreck": { // VoA
    presentSimple: {
      s: "wrecks",
      p: "wreck",
    },
    pastSimple: {
      s: "wrecked",
      p: "wrecked",
    },
  },
  "write": { // VoA
    presentSimple: {
      s: "writes",
      p: "write",
    },
    pastSimple: {
      s: "wrote",
      p: "wrote",
    },
  },
  "wrong": { // VoA
    presentSimple: {
      s: "wrongs",
      p: "wrong",
    },
    pastSimple: {
      s: "wronged",
      p: "wronged",
    },
  },
  "compound": { // VoA
    presentSimple: {
      s: "compounds",
      p: "compound",
    },
    pastSimple: {
      s: "compounded",
      p: "compounded",
    },
  },
};
