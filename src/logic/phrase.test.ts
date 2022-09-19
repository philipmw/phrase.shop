import {PartType} from '../wordbanks';
import {entropyNeededForPhrase, generatePhrasePlain, PhraseStruct} from "./phrase";
import {PhrasePart} from "./PhrasePart";
import {makePhraseSimple} from "./phraseTemplates";

describe("phrase", () => {
  const testMutator = (word: PhrasePart, depWord?: PhrasePart) => {
    word.setPlainValue(`plain ${word.getPartType()} (dep: ${depWord?.getPartType()})`);
  };

  describe("generatePhrasePlain()", () => {
    it("mutates phrase parts", () => {
      const noun = new PhrasePart(PartType.countNoun);
      const digit = new PhrasePart(PartType.digit);

      const phrStruct: PhraseStruct = {
        order: [digit, noun],
        depTree: {
          leaves: [
            {
              value: digit,
              leaves: [
                {
                  value: noun,
                  leaves: [],
                }
              ]
            }
          ]
        }
      };

      generatePhrasePlain(phrStruct, testMutator);

      expect(phrStruct.order[0].getPlaintext()).toBe("plain digit (dep: undefined)");
      expect(phrStruct.order[1].getPlaintext()).toBe("plain countNoun (dep: digit)");
    });
  })

  describe("entropyNeededForPhrase()", () => {
    it("returns expected value", () => {
      expect(entropyNeededForPhrase(makePhraseSimple())).toBe(24);
    });
  });
});
