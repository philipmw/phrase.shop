import { q2 } from "./loadeddice";

const ARRAY_SIZE = 100;
const BINARY_BASE = 2;
const BITS_PER_ARRAY_ELEM = 8;

export class DiceEntropySource implements IEntropySource {
  /*
  Entropy is stored in `entropy`.  The actual size of this array is fixed, so we use
  `entropyIdx` to index to the partial element.

  In `entropy[entropyIdx], the partial element, `lowerBitsInIdx0` represents how many
  lower bits hold entropy.  In that partial element, entropy may be represented
  as an integer, such that when we add bits of entropy, we increase the number.
   */

  private readonly entropy: Uint8Array;
  private entropyIdx: number;
  private lowerBitsInIdx0: number;

  public constructor() {
    this.entropy = new Uint8Array(ARRAY_SIZE);
    this.entropyIdx = 0;
    this.lowerBitsInIdx0 = 0;
  }

  public bitsAvailable() {
    return this.entropyIdx * BITS_PER_ARRAY_ELEM + this.lowerBitsInIdx0;
  }

  public getBits(qty: number): number {
    if (qty > this.bitsAvailable()) {
      throw new Error("Too much entropy was requested");
    }

    let output = 0;
    let bitsNeeded = qty;
    while (bitsNeeded > 0) {
      if (this.lowerBitsInIdx0 === 0) {
        // this element is exhausted
        this.entropyIdx -= 1;
        this.lowerBitsInIdx0 = BITS_PER_ARRAY_ELEM;
      }

      output <<= 1; // make space
      output += this.entropy[this.entropyIdx] % BINARY_BASE; // accumulate entropy into output
      this.entropy[this.entropyIdx] >>= 1; // bottom bit has been consumed
      this.lowerBitsInIdx0 -= 1;
      bitsNeeded -= 1;
    }

    return output;
  }

  public submitRoll(face: number, numSides: number) {
    if (face > numSides) {
      throw new Error("Face must exist on the die");
    }

    const remainingBitsToAdd = q2(face, numSides);
    while (remainingBitsToAdd.length > 0) {
      if (BITS_PER_ARRAY_ELEM - this.lowerBitsInIdx0 === 0) { // this element is full
        this.entropyIdx += 1;
        this.lowerBitsInIdx0 = 0;
      }
      this.entropy[this.entropyIdx] <<= 1; // make space in bottom bit
      this.entropy[this.entropyIdx] += remainingBitsToAdd.shift() === true ? 1 : 0; // accumulate into bottom bit
      this.lowerBitsInIdx0 += 1;
    }
  }
}
