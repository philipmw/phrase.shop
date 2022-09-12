import {pluralizeNoun} from "./wordGenerator";

describe("wordGenerator", () => {
  describe(".pluralizeNoun", () => {
    it("works", () => {
      // sibilants
      expect(pluralizeNoun("kiss")).toBe("kisses");
      expect(pluralizeNoun("phase")).toBe("phases");

      // voiceless consonants
      expect(pluralizeNoun("clock")).toBe("clocks");

      // nouns in -o preceded by a consonant
      expect(pluralizeNoun("potato")).toBe("potatoes");

      // nouns in -y
      expect(pluralizeNoun("cherry")).toBe("cherries");

      // nouns in -quy
      expect(pluralizeNoun("soliloquy")).toBe("soliloquies");

      // nouns in -i
      expect(pluralizeNoun("bikini")).toBe("bikinis");

      // once we give up on life
      expect(pluralizeNoun("foot")).toBe("foots");
    });
  });
});
