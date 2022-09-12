import * as wb from '../wordbanks';
import {PhrasePart} from "../logic/PhrasePart";
import {Sentence} from "../logic/Sentence";

export function makeTestSentenceOfOneNoun(noun: string) {
  const testNoun = new PhrasePart(wb.PartType.noun, noun);
  return new Sentence({
    order: [testNoun],
    depTree: {
      leaves: [
        {
          leaves: [],
          value: testNoun,
        },
      ],
    },
  });
}
