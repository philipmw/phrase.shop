import { IEntropySource } from "./IEntropySource";

const BINARY_BASE = 2;
const MAX_BITS = 32;
const BITS_ADVERTISED = 9999;

export class ComputerEntropySource implements IEntropySource {
  // We support infinite bits!
  // But, psst... don't request more than 32 at a time.
  // This is a compromise to simplify the code.
  // It is fine until we have a phrase part that demands >32 bits.  Unlikely.
  public readonly bitsAvailable = () => (BITS_ADVERTISED);

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
