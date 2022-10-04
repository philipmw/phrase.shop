import {generatePlainValueForPhrasePart, mutatePhrasePartWithPlainValue} from "./wordGenerator";
import {PartType} from "../wordbanks";
import {PhrasePart} from "./PhrasePart";

describe("wordGenerator", () => {
  let mockEntropy;

  beforeEach(() => {
    mockEntropy = ({
      bitsAvailable: 40,
      getBits: () => 77,
    });
  });

  describe("generatePlainValueForPhrasePart()", () => {
    it("generates an independent digit", () => {
      const pp = new PhrasePart(PartType.digit);
      const plainValue = generatePlainValueForPhrasePart(mockEntropy, pp);

      expect(plainValue).toBe("78");
    });

    it("refuses to generate a part with unexpected dependent", () => {
      const pp = new PhrasePart(PartType.digit);
      const depPp = new PhrasePart(PartType.adjective, "red");
      expect(() => generatePlainValueForPhrasePart(mockEntropy, pp, depPp))
        .toThrow("Dependent phrase part adjective is not supported");
    });

    it("generates singular countable noun", () => {
      const pp = new PhrasePart(PartType.countNoun);
      const depPp = new PhrasePart(PartType.digit, 1);
      const plainValue = generatePlainValueForPhrasePart(mockEntropy, pp, depPp);

      expect(plainValue).toBe("Rub");
    });

    it("generates a pluralized countable noun", () => {
      const pp = new PhrasePart(PartType.countNoun);
      const depPp = new PhrasePart(PartType.digit, 6);
      const plainValue = generatePlainValueForPhrasePart(mockEntropy, pp, depPp);

      expect(plainValue).toBe("Rubs");
    });

    it("generates singular verb", () => {
      const pp = new PhrasePart(PartType.verb);
      const depPp = new PhrasePart(PartType.digit, 1);
      const plainValue = generatePlainValueForPhrasePart(mockEntropy, pp, depPp);

      expect(plainValue).toBe("Bars");
    });

    it("generates a pluralized verb", () => {
      const pp = new PhrasePart(PartType.verb);
      const depPp = new PhrasePart(PartType.digit, 6);
      const plainValue = generatePlainValueForPhrasePart(mockEntropy, pp, depPp);

      expect(plainValue).toBe("Bar");
    });
  });

  describe("mutatePhrasePartWithPlainValue()", () => {
    it("mutates given phrase part", () => {
      const depPp = new PhrasePart(PartType.digit, 6);
      const pp = new PhrasePart(PartType.countNoun);

      const uut = mutatePhrasePartWithPlainValue(mockEntropy);

      expect(pp.getPlainValue()).toBeUndefined();

      uut(pp, depPp);

      expect(pp.getPlainValue()).toBe("Rubs");
    })
  });
});
