import {PhrasePart, PhrasePartPlainValue} from "./PhrasePart";
import * as wb from "../wordbanks";
import {IEntropySource} from "../IEntropySource";

function generateIndependentPlainValue(
  entropySource: IEntropySource,
  partType: wb.PartType
): PhrasePartPlainValue {
  const randomIdx = entropySource.getBits(wb.partTypeProps[partType].entropyReqBits);

  if (partType === wb.PartType.digit) {
    return randomIdx + 1;
  } else {
    return wb.dictionary[partType][randomIdx];
  }
}

function generatePhrasePartQuantity(
  entropySource: IEntropySource,
  partType: wb.PartType,
  qty: number
): PhrasePartPlainValue {
  if (partType === wb.PartType.noun) {
    return generateNounQuantity(entropySource, qty);
  }
  if (partType === wb.PartType.verb) {
    return generateVerbQuantity(entropySource, qty);
  }

  return generateIndependentPlainValue(entropySource, partType);
}

function generateNounQuantity(entropySource: IEntropySource, qty: number): PhrasePartPlainValue {
  const singularNoun = generateIndependentPlainValue(entropySource, wb.PartType.noun) as string;

  if (qty === 1) {
    return singularNoun;
  }

  return pluralizeNoun(singularNoun);
}

const SIBILANTS = ["s", "se", "sh", "ge", "ch"];
const VOICELESS_CONS = ["p", "t", "k", "f", "th"];
const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];

export function pluralizeNoun(singular: string): string {
  // https://en.wikipedia.org/wiki/English_plurals

  if (SIBILANTS.some(s => singular.endsWith(s))) {
    if (singular.endsWith("e")) {
      return `${singular}s`;
    }
    return `${singular}es`;
  }
  if (VOICELESS_CONS.some(s => singular.endsWith(s))) {
    return `${singular}s`;
  }
  if (CONSONANTS.some(c => singular.endsWith(`${c}o`))) {
    return `${singular}es`;
  }
  if (CONSONANTS.some(c => singular.endsWith(`${c}y`))) {
    return `${singular.slice(0, singular.length-1)}ies`;
  }
  if (singular.endsWith("quy")) {
    return `${singular.slice(0, singular.length-3)}quies`;
  }
  if (singular.endsWith("i")) {
    return `${singular}s`;
  }

  // screw it; did you see how long that Wikipedia article is?!
  return `${singular}s`;
}

function generateVerbQuantity(entropySource: IEntropySource, qty: number): PhrasePartPlainValue {
  const pluralVerb = generateIndependentPlainValue(entropySource, wb.PartType.verb) as string;

  if (qty !== 1) {
    return pluralVerb;
  }

  // dumb heuristic
  if (pluralVerb.endsWith("h") || pluralVerb.endsWith("s")) {
    return `${pluralVerb}es`;
  }
  return `${pluralVerb}s`;
}

function generateDependentPlainValue(
  entropySource: IEntropySource,
  pp: PhrasePart,
  depPp: PhrasePart
): PhrasePartPlainValue {
  if (depPp.getPartType() === wb.PartType.digit) {
    return generatePhrasePartQuantity(entropySource, pp.getPartType(), depPp.getPlainValue() as number);
  }

  throw new Error(`Dependent phrase part ${depPp.getPartType()} is not supported`);
}

export function generatePlainValueForPhrasePart(
  entropySource: IEntropySource,
  pp: PhrasePart,
  depPp?: PhrasePart
): PhrasePartPlainValue {
  if (!depPp) {
    // simple case
    return generatePhrasePartQuantity(entropySource, pp.getPartType(), 1);
  } else {
    // there is a dependency
    return generateDependentPlainValue(entropySource, pp, depPp);
  }
}

export function mutatePhrasePartWithPlainValue(entropySource: IEntropySource) {
  return (pp: PhrasePart, depPp?: PhrasePart) => {
    pp.setPlainValue(generatePlainValueForPhrasePart(entropySource, pp, depPp));
  };
}
