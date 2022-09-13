import shuffle from "fisher-yates";

import { adjectives, adverbs, conjunctions, determiners, nouns, prepositions, verbs } from "./voiceofamerica";

export enum PartType {
  noun = "noun",
  verb = "verb",
  adjective = "adjective",
  adverb = "adverb",
  preposition = "preposition",
  conjunction = "conjunction",
  determiner = "determiner",
  digit = "digit",
  usstate = "usstate",
  color = "color",
  symbol = "symbol",
}

// This exists because iterating over an enum appears to be discouraged in TypeScript.
export const partTypeList: PartType[] = [
  PartType.noun,
  PartType.verb,
  PartType.adjective,
  PartType.adverb,
  PartType.preposition,
  PartType.conjunction,
  PartType.determiner,
  PartType.digit,
  PartType.symbol,
  PartType.color,
  PartType.usstate,
];

type Dict = {
  [key in PartType]: string[];
};

// The following exists to try to satisfy TSLint.  Ideally I could convince
// TSLint that `shuffle` is safe, but I have not been able to, so I at least
// centralize its usage and disable warnings on this line.
const typedShuffle = (things: string[]): string[] => shuffle(things); // tslint:disable-line

const takeRandomNBitsShortestItemsOf = (items: string[], bits: number) =>
  typedShuffle(items)
    .sort((a, b) => a.length - b.length)
    .slice(0, Math.pow(BINARY_BASE, bits));

const BINARY_BASE = 2;
const NOUN_ENTROPY_BITS = 10;
const VERB_ENTROPY_BITS = 9;
const ADJECTIVE_ENTROPY_BITS = 8;
const ADVERB_ENTROPY_BITS = 7;
const PREPOSITION_ENTROPY_BITS = 5;
const CONJUNCTION_ENTROPY_BITS = 4;
const DETERMINER_ENTROPY_BITS = 5;

/**
 * For most of these wordbanks, we want a whole number of entropy bits without permanently
 * eliminating any particular value.  So we shuffle using a stable sort, remove longest words
 * to reduce phrase length variance, and take the first 2^N entries.
 */
export const dictionary: Dict = {
  [PartType.noun]:
    takeRandomNBitsShortestItemsOf(nouns(), NOUN_ENTROPY_BITS),
  [PartType.verb]:
    takeRandomNBitsShortestItemsOf(verbs(), VERB_ENTROPY_BITS),
  [PartType.adjective]:
    takeRandomNBitsShortestItemsOf(adjectives(), ADJECTIVE_ENTROPY_BITS),
  [PartType.adverb]:
    takeRandomNBitsShortestItemsOf(adverbs(), ADVERB_ENTROPY_BITS),
  [PartType.preposition]:
    takeRandomNBitsShortestItemsOf(prepositions(), PREPOSITION_ENTROPY_BITS),
  [PartType.conjunction]:
    takeRandomNBitsShortestItemsOf(conjunctions(), CONJUNCTION_ENTROPY_BITS),
  [PartType.determiner]:
    takeRandomNBitsShortestItemsOf(determiners(), DETERMINER_ENTROPY_BITS),
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
  [PartType.noun]: {
    entropyReqBits: NOUN_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.noun].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.noun].map((entry) => entry.length)),
  },
  [PartType.verb]: {
    entropyReqBits: VERB_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.verb].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.verb].map((entry) => entry.length)),
  },
  [PartType.adjective]: {
    entropyReqBits: ADJECTIVE_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.adjective].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.adjective].map((entry) => entry.length)),
  },
  [PartType.adverb]: {
    entropyReqBits: ADVERB_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.adverb].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.adverb].map((entry) => entry.length)),
  },
  [PartType.preposition]: {
    entropyReqBits: PREPOSITION_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.preposition].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.preposition].map((entry) => entry.length)),
  },
  [PartType.conjunction]: {
    entropyReqBits: CONJUNCTION_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.conjunction].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.conjunction].map((entry) => entry.length)),
  },
  [PartType.determiner]: {
    entropyReqBits: DETERMINER_ENTROPY_BITS,
    maxLength: Math.max(...dictionary[PartType.determiner].map((entry) => entry.length)),
    minLength: Math.min(...dictionary[PartType.determiner].map((entry) => entry.length)),
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
};
