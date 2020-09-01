const PC_BYTES = 100;
const BINARY_BASE = 2;
const BITS_IN_BYTE = 8;

export class ComputerEntropySource implements IEntropySource {
  /*
  All bytes except the last are full.
  The last byte has entropy in the N lower bits, where N is identified by `lowerBitsInLastByte`.
   */
  public readonly name = "your computer";
  private entropy: Uint8Array;
  private lowerBitsInLastByte: number;

  public constructor() {
    this.entropy = window.crypto.getRandomValues(new Uint8Array(PC_BYTES));
    this.lowerBitsInLastByte = BITS_IN_BYTE;
  }

  public bitsAvailable() {
    return (this.entropy.length - 1) * BITS_IN_BYTE + this.lowerBitsInLastByte;
  }

  public getBits(qty: number): number {
    if (qty > this.bitsAvailable()) {
      throw new Error("Too much entropy was requested");
    }

    let output = 0;
    let bitsNeeded = qty;
    while (bitsNeeded > 0) {
      const lastByte = this.entropy[this.entropy.length - 1];
      if (this.lowerBitsInLastByte >= bitsNeeded) {
        // only need to worry about the last byte

        output <<= bitsNeeded;
        output |= lastByte & (Math.pow(BINARY_BASE, bitsNeeded) - 1);

        this.entropy[this.entropy.length - 1] >>= bitsNeeded;
        this.lowerBitsInLastByte -= bitsNeeded;
        bitsNeeded = 0;
      } else {
        // we need to consume the entire last byte, then keep going
        output <<= this.lowerBitsInLastByte;
        output &= lastByte & Math.pow(BINARY_BASE, this.lowerBitsInLastByte);

        bitsNeeded -= this.lowerBitsInLastByte;
        this.entropy = this.entropy.slice(0, this.entropy.length - 1);
        this.lowerBitsInLastByte = BITS_IN_BYTE;
      }
    }

    return output;
  }
}
