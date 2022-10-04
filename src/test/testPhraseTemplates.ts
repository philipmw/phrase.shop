import {PartType} from '../wordbanks';
import {PhrasePart} from "../logic/PhrasePart";
import {PhraseStruct} from "../logic/phrase";

export function makeTestPhraseOfOneNoun(noun: string): PhraseStruct {
  const testNoun = new PhrasePart(PartType.countNoun, noun);
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
