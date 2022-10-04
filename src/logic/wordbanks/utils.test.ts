import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";

describe("wordbank utilities", () => {
  describe("maxBitsForList()", () => {
    it("returns expected value", () => {
      expect(maxBitsForList(["a", "b"])).toBe(1);
      expect(maxBitsForList(["a", "b", "c"])).toBe(1);
      expect(maxBitsForList(["a", "b", "c", "d"])).toBe(2);
    });
  });

  describe("takeNBitsBestItemsOf()", () => {
    describe("expected usage", () => {
      const WORDS = ["a", "aa", "long word", "b", "bb"];

      it("returns expected sub-list", () => {
        const bestWords = takeNBitsBestItemsOf(WORDS, 2, w => w.length);

        expect(bestWords).toHaveLength(4);
        // we don't care about the order, so don't over-specify the expected result
        expect(new Set(bestWords)).toEqual(new Set(["a", "aa", "b", "bb"]));
      });
    });

    describe("when bits requested are too large", () => {
      const WORDS = ["a"];

      it("throws", () => {
        expect(() => takeNBitsBestItemsOf(WORDS, 2, w => w.length))
            .toThrow("Input list has size 1, but expected >= 4");
      });
    });
  });
});