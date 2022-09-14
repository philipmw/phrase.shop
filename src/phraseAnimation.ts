import * as wb from "./wordbanks";
import {PhraseStruct} from "./logic/phrase";
import {PhrasePartUiProps} from "./PhrasePartUi";

const BINARY_BASE = 2;
export const ANIMATION_TIMEOUT_MS = 50; // CSS animation is 200ms
export const ANIM_CYCLES_PER_WORD = 5;
// The number of CSS classes defined for disambiguation of animations.
// Problem: when I have just one class defined with animation applied to it,
//    then when I cycle through words, the CSS animation does not replay for each word.
// Solution: create two CSS classes, both with differing keyframes, and alternate between them.
export const DISAMBIG_MODULO = 2;

const getInsecureRandomIntBetween = (min: number, max: number): number =>
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    Math.floor(Math.random() * (max - min) + min);

export const getInsecureRandomBits = (bitsQty: number) => {
  const min = 0;
  const max = Math.pow(BINARY_BASE, bitsQty);

  return getInsecureRandomIntBetween(min, max);
};

/**
 * On each animation cycle, we increment `seqNum` and re-schedule another cycle.
 *
 * Before we start finalizing, on each cycle, we select a random phrase part to
 * animate, animate it, and update `lastIdxAnimated`.
 *
 * Once we start finalizing, we finalize one part per cycle, sequentially, while
 * continuing to animate a random non-finalized part in the same cycle.
 *
 * Once all parts are finalized, the animation is finished.
 * We call back to the App that we're finished, and stop scheduling ourselves.
 */
export interface IAnimationState {
  isFinished: boolean;
  lastIdxAnimated: number;
  phraseStruct: PhraseStruct,
  ppUiProps: PhrasePartUiProps[];
  seqNum: number;
  onFinish(): void;
  onUpdatePhraseParts(pps: PhrasePartUiProps[]): void;
}

export const getCyclesBeforeFinalizing = (phrasePartsQty: number): number =>
    phrasePartsQty * ANIM_CYCLES_PER_WORD;

export const animatePhraseCycle = (animState: IAnimationState): IAnimationState => {
  const cyclesBeforeFinalizing = getCyclesBeforeFinalizing(animState.phraseStruct.order.length);
  const idxToFinalize: number | undefined = (animState.seqNum >= cyclesBeforeFinalizing)
      ? animState.seqNum - cyclesBeforeFinalizing
      : undefined;
  const idxToAnimate = getInsecureRandomIntBetween(
      idxToFinalize !== undefined ? idxToFinalize + 1 : 0,
      animState.phraseStruct.order.length);

  const newPpUiProps = animState.ppUiProps.map((part, i) => {
    if (idxToFinalize !== undefined) {
      // we are finalizing a part
      if (i === idxToFinalize) {
        return {
          ...part,
          animation: undefined,
        };
      }
    }

    if (i === idxToAnimate) {
      return animatePhrasePart(animState.ppUiProps[i], animState.phraseStruct.order[i].getPartType());
    }

    // else no change
    return part;
  });

  animState.onUpdatePhraseParts(newPpUiProps);

  if (idxToFinalize !== undefined && idxToFinalize >= animState.phraseStruct.order.length - 1) {
    animState.onFinish();

    return {
      ...animState,
      isFinished: true,
      lastIdxAnimated: idxToAnimate,
      ppUiProps: newPpUiProps,
      seqNum: animState.seqNum + 1,
    };
  }

  // else we continue animating
  return {
    ...animState,
    lastIdxAnimated: idxToAnimate,
    ppUiProps: newPpUiProps,
    seqNum: animState.seqNum + 1,
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

const animatePhrasePart = (ppUiProps: PhrasePartUiProps, partType: wb.PartType): PhrasePartUiProps => {
  const randomIdx = getInsecureRandomBits(wb.partTypeProps[partType].entropyReqBits);

  return {
    ...ppUiProps,
    animation: {
      plaintext: wb.dictionary[partType][randomIdx],
      tempDisambig: ppUiProps.animation !== undefined ? (ppUiProps.animation.tempDisambig + 1) % DISAMBIG_MODULO : 0,
    },
  };
};

export function animatePhraseInit(phraseStruct: PhraseStruct,
                                  phrasePartsUiProps: PhrasePartUiProps[]) {
  const newPpUiProps = phrasePartsUiProps.map((ppUiProps, idx) =>
    animatePhrasePart(ppUiProps, phraseStruct.order[idx].getPartType()));

  // initialize all phrase part UI props
  return {
    isFinished: false,
    lastIdxAnimated: -1,
    ppUiProps: newPpUiProps,
    seqNum: 0,
  };
}

export function animatePhrase(phraseStruct: PhraseStruct,
                              ppUiProps: PhrasePartUiProps[],
                              onUpdatePhraseParts: (pps: PhrasePartUiProps[]) => void,
                              onFinish: () => void): void {
  animatePhraseInWindow({
    onFinish,
    onUpdatePhraseParts,
    phraseStruct,
    ...animatePhraseInit(phraseStruct, ppUiProps),
  });
}
