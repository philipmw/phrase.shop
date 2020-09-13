/**
 * This module implements algorithm Q2 from the paper "How to Turn Loaded Dice into Fair Coins",
 * http://markus-jakobsson.com/papers/jakobsson-ieeeit00.pdf
 */

/* tslint:disable:no-magic-numbers */

export const q2 = (r: number, s: number): boolean[] => {
  const k = 32; // FIXME
  for (let i = k; i >= 2; i -= 1) {
    const si = bitOfAt(s, i);
    const ri = bitOfAt(r - 1, i);
    if (si && !ri) {
      return bitsOfFrom(r, i - 1);
    }
  }

  return [];
};

// Return the `b`th bit (1-indexed) of `n`.
export const bitOfAt = (n: number, b: number): boolean =>
  ((n >> (b - 1)) % 2 === 1);

// Return the bottom `b` bits (1-indexed) of `n`.
export const bitsOfFrom = (n: number, b: number): boolean[] => {
  const output = new Array(b);
  for (let i = b; i > 0; i -= 1) {
    const iz = i - 1; // 0-indexed i
    output[b - i] = ((n >> iz) % 2) === 1;
  }

  return output;
};
