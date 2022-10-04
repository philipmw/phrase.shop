import {wordbanks} from "../wordbanks";
import {TreeRoot, visitTreeWithDependencies} from "./tree";
import {PhrasePart} from "./PhrasePart";

export interface PhraseStruct {
  order: PhrasePart[];
  depTree: TreeRoot<PhrasePart>;
}

type WordMutator = (word: PhrasePart, depWord?: PhrasePart) => void;

export function generatePhrasePlain(phrStr: PhraseStruct, mutator: WordMutator): void {
  visitTreeWithDependencies(phrStr.depTree, (wordNode , depWord) => {
    mutator(wordNode.value, depWord?.value);
  });
}

export function entropyNeededForPhrase(phrStr: PhraseStruct): number {
  return phrStr.order.reduce(
    (acc, word) => (acc + wordbanks[word.getPartType()].bits()), 0);
}
