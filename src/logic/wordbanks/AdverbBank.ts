import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";
import { IWordbank } from "../IWordbank";

const ADVERBS_ALL = [
  "about", // Fry
  "above", // Fry
  "across", // Fry
  "actually", // Fry
  "after", // Fry
  "afterward", // VoA
  "again", // VoA, Fry
  "ahead", // Fry
  "almost", // VoA, Fry
  "alone", // VoA, Fry
  "along", // VoA, Fry
  "already", // VoA, Fry
  "also", // VoA, Fry
  "always", // VoA, Fry
  "around", // Fry
  "away", // VoA, Fry
  "back", // VoA
  "badly", // VoA
  "before", // VoA
  "behind", // VoA
  "below", // VoA
  "best", // VoA
  "better", // VoA
  "by", // VoA
  "clearly", // VoA
  "deeply", // VoA
  "differently", // VoA
  "directly", // VoA
  "down", // VoA
  "early", // VoA
  "easy", // VoA
  "enough", // VoA
  "especially", // VoA
  "evenly", // VoA
  "extra", // VoA
  "fairly", // VoA
  "falsely", // VoA
  "far", // VoA
  "finely", // VoA
  "first", // VoA
  "flatly", // VoA
  "forward", // VoA
  "freely", // VoA
  "freshly", // VoA
  "hard", // VoA
  "here", // VoA
  "high", // VoA
  "home", // VoA
  "instead", // VoA
  "justly", // VoA
  "lastly", // VoA
  "late", // VoA
  "left", // VoA
  "less", // VoA
  "lightly", // VoA
  "little", // VoA
  "lively", // VoA
  "locally", // VoA
  "long", // VoA
  "low", // VoA
  "more", // VoA
  "near", // VoA
  "never", // VoA
  "nicely", // VoA
  "north", // VoA
  "now", // VoA
  "nowhere", // VoA
  "off", // VoA
  "often", // VoA
  "once", // VoA
  "only", // VoA
  "out", // VoA
  "over", // VoA
  "past", // VoA
  "plenty", // VoA
  "probably", // VoA
  "quickly", // VoA
  "right", // VoA
  "second", // VoA
  "short", // VoA
  "some", // VoA
  "soon", // VoA
  "south", // VoA
  "still", // VoA
  "straight", // VoA
  "strongly", // VoA
  "surely", // VoA
  "there", // VoA
  "thickly", // VoA
  "thinly", // VoA
  "through", // VoA
  "today", // VoA
  "together", // VoA
  "tomorrow", // VoA
  "tonight", // VoA
  "true", // VoA
  "under", // VoA
  "up", // VoA
  "well", // VoA
  "west", // VoA
  "wide", // VoA
  "worse", // VoA
  "yesterday", // VoA
];

const BITS = maxBitsForList(ADVERBS_ALL);
const ADVERBS = takeNBitsBestItemsOf(ADVERBS_ALL, BITS, (w) => w.length);

export class AdverbBank implements IWordbank {
  bits() {
    return BITS;
  }

  getEntry(i: number) {
    return ADVERBS[i];
  }
}