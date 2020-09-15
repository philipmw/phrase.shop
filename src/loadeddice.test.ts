import { bitOfAt, bitsOfFrom, q2 } from "./loadeddice";

const RADIX = 10;

describe("HtTLDiFC algorithms", () => {
  describe("q2", () => {
    const expectedResults = {
      1: [false, false],
      2: [false, true],
      3: [true, false],
      4: [true, true],
      5: [false],
      6: [true],
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
    it("returns expected bits of value 111", () => {
      expect(bitOfAt(111, 7))
        .toEqual(true);
      expect(bitOfAt(111, 6))
        .toEqual(true);
      expect(bitOfAt(111, 5))
        .toEqual(false);
      expect(bitOfAt(111, 4))
        .toEqual(true);
      expect(bitOfAt(111, 3))
        .toEqual(true);
      expect(bitOfAt(111, 2))
        .toEqual(true);
      expect(bitOfAt(111, 1))
        .toEqual(true);
    });

    it("returns expected bits of value 6", () => {
      expect(bitOfAt(6, 3))
        .toEqual(true);
      expect(bitOfAt(6, 2))
        .toEqual(true);
      expect(bitOfAt(6, 1))
        .toEqual(false);
    });
  });

  describe("bitsOfFrom", () => {
    it("returns bits of 42 (101010b) from 3rd", () => {
      expect(bitsOfFrom(42, 3))
        .toEqual([false, true, false]);
    });

    it("returns bits of 6 (110b) from 3rd", () => {
      expect(bitsOfFrom(6, 3))
        .toEqual([true, true, false]);
    });

    it("returns bits of 7 (111b) from 5th", () => {
      expect(bitsOfFrom(7, 5))
        .toEqual([false, false, true, true, true]);
    });
  });
});
