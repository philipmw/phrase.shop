import { IPartProps } from "./Phrase";
import * as wb from "./wordbanks";

const BINARY_BASE = 2;
export const ANIMATION_TIMEOUT_MS = 200; // CSS animation is 100ms
export const MAX_TEMP_WORDS = 10;
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

/**
 * On each animation cycle, we increment `showingTempWordNum` and re-schedule another cycle.
 *
 * For the first `MAX_TEMP_WORDS`, we keep `idxToReveal` at 0, so all phrase parts are cycling.
 *
 * After we've cycled through `MAX_TEMP_WORDS`, we increment `idxToReveal` on each cycle, thus
 * revealing one phrase part at a time.
 *
 * Once `idxToReveal` has revealed all parts, the animation is finished.
 * We call back to the App that we're finished, and stop scheduling ourselves.
 */
export interface IAnimationState {
  idxToReveal: number;
  isFinished: boolean;
  phraseParts: IPartProps[];
  showingTempWordNum: number;
  onFinish(): void;
  onUpdatePhraseParts(pps: IPartProps[]): void;
}

export const animatePhraseCycle = (animState: IAnimationState): IAnimationState => {
  const newPhraseParts = animState.phraseParts.map((part, i) => {
    if (animState.showingTempWordNum < MAX_TEMP_WORDS // we haven't started revealing
        // or we are in the process of revealing, but not this part yet
        || i > animState.idxToReveal) {
      // continue animation
      const randomIdx = getInsecureRandomBits(wb.partTypeProps[part.type].entropyReqBits);

      return {
        ...part,
        animation: {
          plaintext: wb.dictionary[part.type][randomIdx],
          tempDisambig: animState.showingTempWordNum % DISAMBIG_MODULO,
        },
      };
    }

    // else we've started revealing
    if (i === animState.idxToReveal) {
      // finalize this phrase part
      return {
        ...part,
        animation: undefined,
      };
    }

    // else this phrase part has already been finalized; no change
    return part;
  });

  animState.onUpdatePhraseParts(newPhraseParts);

  if (animState.showingTempWordNum < MAX_TEMP_WORDS) {
    // we have not started revealing
    return {
      ...animState,
      showingTempWordNum: animState.showingTempWordNum + 1,
    };
  }
  // else we've started revealing
  if (animState.idxToReveal === animState.phraseParts.length - 1) {
    // we just revealed the last phrase part; we are finished.
    animState.onFinish();

    return {
      ...animState,
      isFinished: true,
    };
  }

  // else we are in the process of revealing
  return {
    ...animState,
    idxToReveal: animState.idxToReveal + 1,
    showingTempWordNum: animState.showingTempWordNum + 1,
  };
};

const animatePhraseInWindow = (animState: IAnimationState): void => {
  const newAnimState = animatePhraseCycle(animState);
  if (!newAnimState.isFinished) {
    window.setTimeout(
        () => {
          animatePhraseInWindow(newAnimState);
        },
        ANIMATION_TIMEOUT_MS);
  }
};

export const animatePhrase = (phraseParts: IPartProps[],
                              onUpdatePhraseParts: (pps: IPartProps[]) => void,
                              onFinish: () => void) => {
  animatePhraseInWindow({
    idxToReveal: 0,
    isFinished: false,
    onFinish,
    onUpdatePhraseParts,
    phraseParts,
    showingTempWordNum: 0,
  });
};
