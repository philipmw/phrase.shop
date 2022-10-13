import { CountNounBank } from "./logic/wordbanks/CountNounBank";
import { UncountNounBank } from "./logic/wordbanks/UncountNounBank";
import { IntransitiveVerbBank } from "./logic/wordbanks/IntransitiveVerbBank";
import { TransitiveVerbBank } from "./logic/wordbanks/TransitiveVerbBank";
import { AdjectiveBank } from "./logic/wordbanks/AdjectiveBank";
import { AdverbBank } from "./logic/wordbanks/AdverbBank";
import { PrepositionBank } from "./logic/wordbanks/PrepositionBank";
import { ConjunctionBank } from "./logic/wordbanks/ConjunctionBank";
import { DigitBank } from "./logic/wordbanks/DigitBank";
import { SymbolBank } from "./logic/wordbanks/SymbolBank";
import { IWordbank } from "./logic/IWordbank";
import { Capitalizable } from "./logic/wordbanks/Capitalizable";

export enum PartType {
  countNoun = "countNoun",
  uncountNoun = "uncountNoun",
  transitiveVerb = "transitiveVerb",
  intransitiveVerb = "intransitiveVerb",
  adjective = "adjective",
  adverb = "adverb",
  preposition = "preposition",
  conjunction = "conjunction",
  digit = "digit",
  symbol = "symbol",
}

// This exists because iterating over an enum appears to be discouraged in TypeScript.
export const partTypeList: PartType[] = [
  PartType.countNoun,
  PartType.uncountNoun,
  PartType.transitiveVerb,
  PartType.intransitiveVerb,
  PartType.adjective,
  PartType.adverb,
  PartType.preposition,
  PartType.conjunction,
  PartType.digit,
  PartType.symbol,
];

type WordbankDict = {
  [key in PartType]: IWordbank;
};

export const wordbanks: WordbankDict = {
  [PartType.countNoun]: new Capitalizable(new CountNounBank()),
  [PartType.uncountNoun]: new Capitalizable(new UncountNounBank()),
  [PartType.transitiveVerb]: new Capitalizable(new TransitiveVerbBank()),
  [PartType.intransitiveVerb]: new Capitalizable(new IntransitiveVerbBank()),
  [PartType.adjective]: new Capitalizable(new AdjectiveBank()),
  [PartType.adverb]: new AdverbBank(),
  [PartType.preposition]: new PrepositionBank(),
  [PartType.conjunction]: new Capitalizable(new ConjunctionBank()),
  [PartType.digit]: new DigitBank(),
  [PartType.symbol]: new SymbolBank(),
};