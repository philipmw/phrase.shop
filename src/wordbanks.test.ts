import { PartType, partTypeList, wordbanks } from "./wordbanks";

type BitsDict = {
  [key in PartType]: number;
};

const BITS_EXPECTED: BitsDict = {
  [PartType.adjective]: 9,
  [PartType.adverb]: 6,
  [PartType.conjunction]: 5,
  [PartType.countNoun]: 10,
  [PartType.digit]: 3,
  [PartType.preposition]: 5,
  [PartType.symbol]: 4,
  [PartType.uncountNoun]: 7,
  [PartType.verb]: 11,
};

describe("wordbanks", () => {
  partTypeList.forEach(partType => {
    describe(`for ${partType}`, () => {
      const wordbank = wordbanks[partType];

      it("supports expected number of bits", () => {
        expect(wordbank.bits()).toEqual(BITS_EXPECTED[partType]);
      });

      it("has all unique entries", () => {
        const words: string[] = [];
        for (let i=0; i < Math.pow(2, wordbank.bits()); ++i) {
          words.push(wordbank.getEntry(i));
        }
        const wordsSet = new Set(words);
        expect(wordsSet.size).toBe(words.length);
      });
    });
  });
});