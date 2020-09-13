import { DiceEntropySource } from "./DiceEntropySource";

describe("DiceEntropySource", () => {
  it("starts with 0 bits available", () => {
    const des = new DiceEntropySource();
    expect(des.bitsAvailable())
      .toEqual(0);
  });

  it("increases bits available as we submit rolls", () => {
    const des = new DiceEntropySource();
    des.submitRoll(1, 6);
    expect(des.bitsAvailable())
      .toEqual(2);
    des.submitRoll(1, 16);
    expect(des.bitsAvailable())
      .toEqual(6);
  });

  it("supports getting out at most as many entropy bits as we put in", () => {
    const des = new DiceEntropySource();
    des.submitRoll(1, 6);
    des.submitRoll(3, 6);
    des.submitRoll(2, 6);
    des.getBits(3);
    des.getBits(2);
    des.getBits(1);
    expect(() => des.getBits(1))
      .toThrow("Too much entropy was requested");
  });

  it("rejects larger faces than claimed sides", () => {
    const des = new DiceEntropySource();
    expect(() => {
      des.submitRoll(5, 4);
    })
      .toThrow("Face must exist on the die");
  });

  it("discards rolls that map outside of the power-of-two", () => {
    const des = new DiceEntropySource();
    des.submitRoll(17, 17);
    expect(des.bitsAvailable())
      .toEqual(0);
  });

  it("supports accumulating and getting entropy across internal array element boundaries", () => {
    const des = new DiceEntropySource();
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    des.submitRoll(11, 16);
    expect(des.bitsAvailable())
      .toEqual(40);

    des.getBits(40);
    expect(des.bitsAvailable())
      .toEqual(0);
  });

  it("resets when all bits are consumed", () => {
    const des = new DiceEntropySource();
    des.submitRoll(1, 16);
    des.submitRoll(3, 16);
    des.submitRoll(5, 16);
    des.submitRoll(7, 16);
    des.submitRoll(9, 16);
    const firstRunEntropy = des.getBits(20);
    des.submitRoll(1, 16);
    des.submitRoll(3, 16);
    des.submitRoll(5, 16);
    des.submitRoll(7, 16);
    des.submitRoll(9, 16);
    const secondRunEntropy = des.getBits(20);
    expect(firstRunEntropy)
      .toEqual(secondRunEntropy);
  });
});
