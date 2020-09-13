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

  public static readonly entropyBitsPerRoll = (numSides: number): number => Math.floor(Math.log2(numSides));

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

    const bitsToAdd = DiceEntropySource.entropyBitsPerRoll(numSides);
    const zeroIdxFace = face - 1; // face is 1-indexed, but we want 0-indexed
    const moduloFace = zeroIdxFace % Math.pow(BINARY_BASE, bitsToAdd);
    if (zeroIdxFace > moduloFace) {
      // we do not support bit accumulation across rolls, so for now we just discard this roll.
      return;
    }

    // we need to accumulate `bitsToAdd` worth of bits from `moduloFace`.
    let remainingBitsToAdd = bitsToAdd;
    let remainingEntropy = moduloFace;
    while (remainingBitsToAdd > 0) {
      if (BITS_PER_ARRAY_ELEM - this.lowerBitsInIdx0 === 0) { // this element is full
        this.entropyIdx += 1;
        this.lowerBitsInIdx0 = 0;
      }
      this.entropy[this.entropyIdx] <<= 1; // make space in bottom bit
      this.entropy[this.entropyIdx] += (remainingEntropy % BINARY_BASE); // accumulate bottom bit
      this.lowerBitsInIdx0 += 1;
      remainingEntropy >>= 1; // bottom bit has been consumed
      remainingBitsToAdd -= 1;
    }
  }
}
