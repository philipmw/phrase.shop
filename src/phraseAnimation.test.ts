import {PhrasePartUiProps} from "./PhrasePartUi";
import {animatePhraseCycle, getCyclesBeforeFinalizing} from "./phraseAnimation";
import {makePhraseSimple} from "./logic/phraseTemplates";
import {makePhrasePartUiProps} from "./ui/phrasePartUiProps";

describe("phraseAnimation", () => {
  describe(".animatePhraseCycle", () => {
    const phraseStruct = makePhraseSimple();

    describe("while we are animating", () => {
      const ANIM_STATE = {
        isFinished: false,
        lastIdxAnimated: 0,
        onFinish: () => {
          // Nothing to check
        },
        ppUiProps: makePhrasePartUiProps(phraseStruct),
        phraseStruct,
        seqNum: 0,
      };

      it("calls back with updated phrase parts having temporary word", () => {
        let updatedPhraseParts = false;

        const onUpdatePhraseParts = (newParts: PhrasePartUiProps[]) => {
          expect(newParts)
              .toHaveLength(phraseStruct.order.length);
          const partsWithAnimationDefined = newParts.filter(np => np.animation);
          expect(partsWithAnimationDefined).toHaveLength(1);
          expect(partsWithAnimationDefined[0].animation?.plaintext)
              .toBeDefined();
          updatedPhraseParts = true;
        };

        return Promise.resolve()
            .then(() => {
              animatePhraseCycle({
                ...ANIM_STATE,
                onUpdatePhraseParts,
              });
            })
            .then(() => {
              expect(updatedPhraseParts)
                  .toBeTruthy();
            });
      });

      it("increments sequence number", async () =>
          Promise.resolve()
            .then(() => {
              const newAnimState = animatePhraseCycle({
                ...ANIM_STATE,
                onUpdatePhraseParts: () => {
                  // We don't care
                },
              });
              expect(newAnimState.seqNum)
                  .toEqual(1);
            }),
      );
    });

    describe("once counter reaches a threshold", () => {
      const SEQ_NUM = getCyclesBeforeFinalizing(phraseStruct.order.length);
      const ANIM_STATE = {
        isFinished: false,
        lastIdxAnimated: 0,
        ppUiProps: [
          // all words are in progress of being animated
          { key: 0, animation: { tempDisambig: 0, plaintext: "anim-1" } },
          { key: 1, animation: { tempDisambig: 0, plaintext: "anim-2" } },
          { key: 2, animation: { tempDisambig: 0, plaintext: "anim-3" } },
        ],
        phraseStruct,
        seqNum: SEQ_NUM,
      };

      it("reveals just first phrase part", () => {
        let updatedPhraseParts = false;

        const onUpdatePhraseParts = (newParts: PhrasePartUiProps[]) => {
          expect(newParts)
              .toHaveLength(phraseStruct.order.length);
          expect(newParts[0].animation)
              .toBeUndefined();
          expect(newParts[1].animation)
              .toBeDefined();
          expect(newParts[2].animation)
            .toBeDefined();
          updatedPhraseParts = true;
        };

        return Promise.resolve()
            .then(() => {
              animatePhraseCycle({
                ...ANIM_STATE,
                onFinish: () => {
                  // We don't care
                },
                onUpdatePhraseParts,
              });
            })
            .then(() => {
              expect(updatedPhraseParts)
                  .toBeTruthy();
            });
      });

      it("increments sequence number", async () => (
        Promise.resolve()
            .then(() => {
              const newAnimState = animatePhraseCycle({
                ...ANIM_STATE,
                onFinish: () => {
                  // We don't care
                },
                onUpdatePhraseParts: () => {
                  // We don't care
                },
              });
              expect(newAnimState.seqNum)
                  .toEqual(SEQ_NUM + 1);
            })
      ));
    });

    describe("once we've revealed all parts", () => {
      const ANIM_STATE = {
        isFinished: false,
        lastIdxAnimated: 0,
        ppUiProps: makePhrasePartUiProps(phraseStruct),
        phraseStruct,
        seqNum: getCyclesBeforeFinalizing(phraseStruct.order.length) // to start finalizing
          + phraseStruct.order.length - 1, // enough to have finalized each word
      };

      it("calls back with finish status", () => {
        let finishCalled = false;

        return Promise.resolve()
            .then(() => {
              animatePhraseCycle({
                ...ANIM_STATE,
                onFinish: () => {
                  finishCalled = true;
                },
                onUpdatePhraseParts: () => {
                  // We don't care
                },
              });
            })
            .then(() => {
              expect(finishCalled)
                  .toBeTruthy();
            });
      });
    });
  });
});
