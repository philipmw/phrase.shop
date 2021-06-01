export interface IAnimationState {
  phrasePartIdx: number;
  showingTempWordNum: number;
}

const BINARY_BASE = 2;
export const ANIMATION_TIMEOUT_MS = 95; // CSS animation is 100ms
export const MAX_TEMP_WORDS = 5;
// The number of CSS classes defined for disambiguation of animations.
// Problem: when I have just one class defined with animation applied to it,
//    then when I cycle through words, the CSS animation does not replay for each word.
// Solution: create two CSS classes, both with differing keyframes, and alternate between them.
export const DISAMBIG_MODULO = 2;

export const getInsecureRandomBits = (bitsQty: number) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const min = 0;
  const max = Math.pow(BINARY_BASE, bitsQty);

  return Math.floor(Math.random() * (max - min) + min);
};
