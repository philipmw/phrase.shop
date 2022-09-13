import * as wb from '../wordbanks';
import {PhrasePart} from "../logic/PhrasePart";
import {PhraseStruct} from "../logic/phrase";

export function makeTestPhraseOfOneNoun(noun: string): PhraseStruct {
  const testNoun = new PhrasePart(wb.PartType.noun, noun);
  return {
    order: [testNoun],
    depTree: {
      leaves: [
        {
          leaves: [],
          value: testNoun,
        },
      ],
    },
  };
}
