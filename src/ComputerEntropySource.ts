const BINARY_BASE = 2;
const MAX_BITS = 32;

export class ComputerEntropySource implements IEntropySource {
  public readonly name = "your computer";

  public readonly bitsAvailable = () => (-1);

  public readonly getBits = (qty: number): number => {
    if (qty > MAX_BITS) {
      throw new Error("More than UInt32Array's worth of random bits is not supported");
    }

    // This is wasteful with bits, but it is simple and maybe even bugfree.
    const modulus = Math.pow(BINARY_BASE, qty);
    const randomData = window.crypto.getRandomValues(new Uint32Array(1))[0];

    return randomData % modulus;
  }
}
