import {TreeRoot, visitTreeWithDependencies} from "./tree";
import {PhrasePart} from "./PhrasePart";

export interface SenStruct {
  order: PhrasePart[];
  depTree: TreeRoot<PhrasePart>;
}

type WordMutator = (word: PhrasePart, depWord?: PhrasePart) => void;

/** This class is responsible for understanding sentence structure (`SenStruct`)
 * and generating its phrases.
 */
export class Sentence {
  private readonly structure: SenStruct;

  constructor(structure: SenStruct) {
    this.structure = structure;
  }

  generate(mutator: WordMutator): void {
    visitTreeWithDependencies(this.structure.depTree, (wordNode , depWord) => {
      mutator(wordNode.value, depWord?.value);
    });
  }

  getOrderedWords(): PhrasePart[] {
    return this.structure.order;
  }
}
