import {PhrasePart, PhrasePartPlainValue} from "./PhrasePart";
import {PartType, wordbanks} from "../wordbanks";
import {IEntropySource} from "../IEntropySource";

function generateIndependentPlainValue(
  entropySource: IEntropySource,
  partType: PartType
): PhrasePartPlainValue {
  const wordbank = wordbanks[partType];
  const randomIdx = entropySource.getBits(wordbank.bits());

  return wordbank.getEntry(randomIdx);
}

function generatePhrasePartQuantity(
  entropySource: IEntropySource,
  partType: PartType,
  qty: number
): PhrasePartPlainValue {
  const wordbank = wordbanks[partType];
  const randomIdx = entropySource.getBits(wordbank.bits());

  return wordbank.getEntry(randomIdx, qty);
}

function generateDependentPlainValue(
  entropySource: IEntropySource,
  pp: PhrasePart,
  depPp: PhrasePart
): PhrasePartPlainValue {
  if (depPp.getPartType() === PartType.digit) {
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
    return generateIndependentPlainValue(entropySource, pp.getPartType());
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
