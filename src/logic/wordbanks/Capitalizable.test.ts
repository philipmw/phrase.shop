import { IWordbank } from "../IWordbank";
import { Capitalizable } from "./Capitalizable";

class TestWordbank implements IWordbank {
  bits() {
    return 1;
  }

  getEntry(i, qty) {
    return `entry ${i}/${qty}`;
  }
}

describe("Capitalizable", () => {
  const testWordbank = new TestWordbank();
  const uut = new Capitalizable(testWordbank);

  it("returns expected number of bits", () => {
    expect(uut.bits()).toBe(testWordbank.bits() + 1);
  });

  describe("when entropy has 0 for LSB", () => {
    it("does not capitalize", () => {
      expect(uut.getEntry(100, 3)).toBe("entry 50/3");
    });
  })

  describe("when entropy has 1 for LSB", () => {
    it("capitalizes", () => {
      expect(uut.getEntry(111, 3)).toBe("Entry 55/3");
    });
  })
});