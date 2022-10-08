import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";
import { IWordbank } from "../IWordbank";

const CONJUNCTIONS_ALL = [
  "after", // VoA, Fry
  "although", // VoA, Fry
  "and", // VoA, Fry
  "as", // VoA, Fry
  "because", // VoA
  "before", // VoA
  "but", // VoA
  "except", // VoA
  "however", // VoA
  "if", // VoA
  "once", // VoA
  "or", // VoA
  "since", // VoA
  "so", // VoA
  "unless", // VoA
  "until", // VoA
  "when", // VoA
  "whereas", // VoA
  "while", // VoA
  "yet", // VoA
];

const BITS = maxBitsForList(CONJUNCTIONS_ALL);
const CONJUNCTIONS = takeNBitsBestItemsOf(CONJUNCTIONS_ALL, BITS, (w) => w.length);

export class ConjunctionBank implements IWordbank {
  bits() {
    return BITS;
  }

  getEntry(i: number) {
    return CONJUNCTIONS[i];
  }
}