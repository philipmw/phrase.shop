import { PartType, partTypeList, wordbanks } from "./wordbanks";

type BitsDict = {
  [key in PartType]: number;
};

const BITS_EXPECTED: BitsDict = {
  [PartType.adjective]: 8,
  [PartType.adverb]: 6,
  [PartType.conjunction]: 4,
  [PartType.countNoun]: 9,
  [PartType.digit]: 3,
  [PartType.preposition]: 5,
  [PartType.symbol]: 4,
  [PartType.uncountNoun]: 6,
  [PartType.verb]: 9,
};

describe("wordbanks", () => {
  partTypeList.forEach(partType => {
    it(`has expected number of bits for ${partType}`, () => {
      expect(wordbanks[partType].bits()).toEqual(BITS_EXPECTED[partType]);
    });
  });
});