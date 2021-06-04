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

export interface IAnimationState {
  isFinished: boolean;
  phraseParts: IPartProps[];
  showingTempWordNum: number;
  onFinish(): void;
  onUpdatePhraseParts(pps: IPartProps[]): void;
}

export const animatePhraseCycle = (animState: IAnimationState): IAnimationState => {
  if (animState.showingTempWordNum < MAX_TEMP_WORDS) {
    // continue animation

    const newPhraseParts = animState.phraseParts.map((part) => {
      const randomIdx = getInsecureRandomBits(wb.partTypeProps[part.type].entropyReqBits);

      return {
        ...part,
        animation: {
          plaintext: wb.dictionary[part.type][randomIdx],
          tempDisambig: animState.showingTempWordNum % DISAMBIG_MODULO,
        },
      };
    });

    animState.onUpdatePhraseParts(newPhraseParts);

    return {
      ...animState,
      showingTempWordNum: animState.showingTempWordNum + 1,
    };
  }

  // else we're finished
  {
    const newPhraseParts = animState.phraseParts.map((part) => ({
      ...part,
      animation: undefined,
    }));

    animState.onUpdatePhraseParts(newPhraseParts);
    animState.onFinish();

    return {
      ...animState,
      isFinished: true,
    };
  }
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
    isFinished: false,
    onFinish,
    onUpdatePhraseParts,
    phraseParts,
    showingTempWordNum: 0,
  });
};
