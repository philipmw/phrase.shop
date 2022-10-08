import { maxBitsForList, takeNBitsBestItemsOf } from "./utils";
import { IWordbank } from "../IWordbank";

const UNCOUNT_NOUNS_ALL = [
  "aggression", // VoA
  "agriculture", // VoA
  "aid", // VoA
  "air", // VoA
  "alcohol", // VoA
  "ammunition", // VoA
  "anarchy", // VoA
  "anger", // VoA
  "archeology", // VoA
  "arms", // VoA
  "ash", // VoA
  "ashes", // VoA
  "assist", // VoA
  "astronomy", // VoA
  "atmosphere", // VoA
  "autumn", // VoA
  "biology", // VoA
  "blame", // VoA
  "blood", // VoA
  "bread", // VoA
  "calm", // VoA
  "capitalism", // VoA
  "cold", // VoA
  "congress", // VoA
  "corn", // VoA
  "depression", // VoA
  "dirt", // VoA
  "dust", // VoA
  "earth", // VoA
  "ease", // VoA
  "ecology", // VoA
  "education", // VoA
  "electricity", // VoA
  "energy", // VoA
  "equipment", // VoA
  "evidence", // VoA
  "exile", // VoA
  "fast", // VoA
  "feed", // VoA
  "fit", // VoA
  "fog", // VoA
  "freeze", // VoA
  "fun", // VoA
  "future", // VoA
  "gold", // VoA
  "grass", // VoA
  "hatred", // VoA
  "headquarters", // VoA
  "health", // VoA
  "heat", // VoA
  "help", // VoA
  "hunger", // VoA
  "hurry", // VoA
  "ice", // VoA
  "inflation", // VoA
  "information", // VoA
  "ingelligence", // VoA
  "knowledge", // VoA
  "labor", // VoA
  "lack", // VoA
  "lightning", // VoA
  "literature", // VoA
  "luck", // VoA
  "mail", // VoA
  "mathematics", // VoA
  "mercy", // VoA
  "middle", // VoA
  "milk", // VoA
  "money", // VoA
  "music", // VoA
  "must", // VoA
  "nature", // VoA
  "news", // VoA
  "noon", // VoA
  "north", // VoA
  "nowhere", // VoA
  "physics", // VoA
  "plenty", // VoA
  "police", // VoA
  "politics", // VoA
  "poverty", // VoA
  "produce", // VoA
  "progress", // VoA
  "propaganda", // VoA
  "public", // VoA
  "quiet", // VoA
  "radar", // VoA
  "radiation", // VoA
  "refuse", // VoA
  "remains", // VoA
  "research", // VoA
  "rice", // VoA
  "riches", // VoA
  "senate", // VoA
  "sex", // VoA
  "soil", // VoA
  "subversion", // VoA
  "today", // VoA
  "tomorrow", // VoA
  "tonight", // VoA
  "traffic", // VoA
  "truce", // VoA
  "violence", // VoA
  "wealth", // VoA
  "wear", // VoA
  "weather", // VoA
  "welcome", // VoA
  "west", // VoA
  "wheat", // VoA
  "worth", // VoA
  "yesterday", // VoA
];

const BITS = maxBitsForList(UNCOUNT_NOUNS_ALL);
const UNCOUNT_NOUNS = takeNBitsBestItemsOf(UNCOUNT_NOUNS_ALL, BITS, (w) => w.length);

export class UncountNounBank implements IWordbank {
  bits() {
    return BITS;
  }

  getEntry(i: number) {
    return UNCOUNT_NOUNS[i];
  }
}