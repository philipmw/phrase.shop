import { bitOfAt, bitsOfFrom, q2 } from "./loadeddice";

const RADIX = 10;

describe("HtTLDiFC algorithms", () => {
  describe("q2", () => {
    const expectedResults = {
      1: [false, true],
      2: [true, false],
      3: [true, true],
      4: [false, false],
      5: [true],
      6: [false],
      7: [],
    };

    for (const roll of Object.keys(expectedResults)) {
      it(`returns ${JSON.stringify(expectedResults[roll])} for rolling ${roll} on d7`, () => {
        expect(q2(parseInt(roll, RADIX), 7))
          .toEqual(expectedResults[roll]);
      });
    }
  });

  describe("bitOfAt", () => {
    it("returns first bit of value 111", () => {
      expect(bitOfAt(111, 1))
        .toEqual(true);
    });

    it("returns first bit of value 2", () => {
      expect(bitOfAt(2, 1))
        .toEqual(false);
    });

    it("returns 11th bit of value 1024", () => {
      expect(bitOfAt(1024, 11))
        .toEqual(true);
    });
  });

  describe("bitsOfFrom", () => {
    it("returns bits of 42 (101010b) from 3rd", () => {
      expect(bitsOfFrom(42, 3))
        .toEqual([false, true, false]);
    });

    it("returns bits of 14 (1110b) from 3rd", () => {
      expect(bitsOfFrom(14, 3))
        .toEqual([true, true, false]);
    });

    it("returns bits of 15 (1111b) from 5th", () => {
      expect(bitsOfFrom(15, 5))
        .toEqual([false, true, true, true, true]);
    });
  });
});
