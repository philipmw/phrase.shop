import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";
import { IWordbank } from "../IWordbank";

const CONJUNCTIONS_ALL = [
  "after",
  "although",
  "and",
  "as",
  "because",
  "before",
  "but",
  "except",
  "however",
  "if",
  "once",
  "or",
  "since",
  "so",
  "unless",
  "until",
  "when",
  "whereas",
  "while",
  "yet",
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