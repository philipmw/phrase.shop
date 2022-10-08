import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";
import { IWordbank } from "../IWordbank";

const PREPOSITIONS_ALL = [
  "about", // VoA, Fry
  "above", // VoA, Fry
  "across", // VoA, Fry
  "after", // VoA
  "against", // VoA, Fry
  "along", // VoA, Fry
  "among", // VoA, Fry
  "around", // VoA, Fry
  "as", // VoA
  "at", // VoA, Fry
  "before", // VoA
  "behind", // VoA
  "below", // VoA
  "between", // VoA
  "but", // VoA
  "by", // VoA
  "down", // VoA
  "during", // VoA
  "except", // VoA
  "from", // VoA
  "in", // VoA
  "less", // VoA
  "near", // VoA
  "no", // VoA
  "of", // VoA
  "off", // VoA
  "on", // VoA
  "opposite", // VoA
  "out", // VoA
  "over", // VoA
  "past", // VoA
  "since", // VoA
  "than", // VoA
  "through", // VoA
  "to", // VoA
  "toward", // VoA
  "under", // VoA
  "until", // VoA
  "up", // VoA
  "with", // VoA
  "without", // VoA
];

const BITS = maxBitsForList(PREPOSITIONS_ALL);
const PREPOSITIONS = takeNBitsBestItemsOf(PREPOSITIONS_ALL, BITS, (w) => w.length);

export class PrepositionBank implements IWordbank {
  bits() {
    return BITS;
  }

  getEntry(i: number) {
    return PREPOSITIONS[i];
  }
}