const BINARY_BASE = 2;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function maxBitsForList(items: any[]): number {
  return Math.floor(Math.log2(items.length));
}

/**
 * For all wordbanks, we want a whole number of entropy bits, but most of the time we have
 * more entries than that. For example, we may have 1,000 entries. This is not quite 1,024 (2^10),
 * so we declare 9 bits of entropy, with a bunch of words unused.
 *
 * Which 2^N words should we use?
 *
 * The simplest is to just take the first from the list.
 *
 * Another approach I used to do is to shuffle, to ensure that all words can be probablistically
 * part of the wordbank. But this hurt unit-testability since I could never rely on a specific
 * word being returned for a given input.
 *
 * Now I use an optimization function to pick the "best" 2^N words in a deterministic manner.
 * This typically means we pick the *shortest* words.
 */
export function takeNBitsBestItemsOf<T>(items: T[], bits: number, optimFn: (T) => number): T[] {
  const minSize = Math.pow(BINARY_BASE, bits);
  if (items.length < minSize) {
    // Internal error indicating that our entropy variables are wrong; customer should never see this.
    throw new Error(`Input list has size ${items.length}, but expected >= ${minSize}`);
  }
  return items
      .sort((a, b) => optimFn(a) - optimFn(b))
      .slice(0, Math.pow(BINARY_BASE, bits));
}
