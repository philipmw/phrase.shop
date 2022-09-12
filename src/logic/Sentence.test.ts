import {PartType} from '../wordbanks';
import {SenStruct, Sentence} from "./Sentence";
import {PhrasePart} from "./PhrasePart";

describe("Sentence", () => {
  const testMutator = (word: PhrasePart, depWord?: PhrasePart) => {
    word.setPlainValue(`plain ${word.getPartType()} (dep: ${depWord?.getPartType()})`);
  };

  it("generates and returns ordered sentence", () => {
    const noun = new PhrasePart(PartType.noun);
    const digit = new PhrasePart(PartType.digit);

    const senStruct: SenStruct = {
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

    const sentence = new Sentence(senStruct);

    const orderedWords = sentence.getOrderedWords();
    expect(orderedWords).toHaveLength(2);

    sentence.generate(testMutator);

    expect(orderedWords[0].getPlaintext()).toBe("plain digit (dep: undefined)");
    expect(orderedWords[1].getPlaintext()).toBe("plain noun (dep: digit)");
  });
});
