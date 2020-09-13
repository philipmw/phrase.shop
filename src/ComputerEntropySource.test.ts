import { ComputerEntropySource } from "./ComputerEntropySource";

describe("ComputerEntropySource", () => {
  it("claims at least 32 bits available", () => {
    const ces = new ComputerEntropySource();
    expect(ces.bitsAvailable())
      .toBeGreaterThanOrEqual(32);
  });

  it("throws error if you try to read more than 32 bits", () => {
    const ces = new ComputerEntropySource();
    expect(() => ces.getBits(50))
      .toThrow("More than UInt32Array's worth of random bits is not supported");
  });

  // We can't test actual generation of numbers because that relies on `window.crypto`.
});
