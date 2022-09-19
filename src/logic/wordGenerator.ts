import {PhrasePart, PhrasePartPlainValue} from "./PhrasePart";
import * as wb from "../wordbanks";
import {IEntropySource} from "../IEntropySource";
import {getCountNoun} from "../wordbanks";

function generateIndependentPlainValue(
  entropySource: IEntropySource,
  partType: wb.PartType
): PhrasePartPlainValue {
  if (partType === wb.PartType.countNoun) {
    // Internal error indicating we called this function in the wrong context.
    // Customer should never see this error.
    // This phrase type requires metadata, so we cannot generate it independently.
    throw new Error("Not supported");
  }

  const randomIdx = entropySource.getBits(wb.partTypeProps[partType].entropyReqBits);

  if (partType === wb.PartType.digit) {
    return randomIdx + 1;
  } else {
    return wb.indepDict[partType][randomIdx];
  }
}

function generatePhrasePartQuantity(
  entropySource: IEntropySource,
  partType: wb.PartType,
  qty: number
): PhrasePartPlainValue {
  if (partType === wb.PartType.countNoun) {
    const randomIdx = entropySource.getBits(wb.partTypeProps[partType].entropyReqBits);
    return getCountNoun(randomIdx, qty);
  }
  if (partType === wb.PartType.verb) {
    return generateVerbQuantity(entropySource, qty);
  }

  return generateIndependentPlainValue(entropySource, partType);
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
