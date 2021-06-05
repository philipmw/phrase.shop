import { IPartProps } from "./Phrase";
import { animatePhraseCycle, getCyclesBeforeFinalizing } from "./phraseAnimation";
import { PartType } from "./wordbanks";

describe("phraseAnimation", () => {
  describe(".animatePhraseCycle", () => {
    describe("while we are animating", () => {
      const ANIM_STATE = {
        isFinished: false,
        lastIdxAnimated: 0,
        onFinish: () => {
          // Nothing to check
        },
        phraseParts: [{
          key: 0,
          type: PartType.color,
        }],
        seqNum: 0,
      };

      it("calls back with updated phrase parts having temporary word", async () => {
        let updatedPhraseParts = false;

        const onUpdatePhraseParts = (newParts: IPartProps[]) => {
          expect(newParts)
              .toHaveLength(1);
          expect(newParts[0].animation)
              .toBeDefined();
          expect(newParts[0].animation!.plaintext)
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
      const SEQ_NUM = getCyclesBeforeFinalizing(2);
      const ANIM_STATE = {
        isFinished: false,
        lastIdxAnimated: 0,
        phraseParts: [
          {
            animation: {
              plaintext: "red",
              tempDisambig: 0,
            },
            key: 0,
            type: PartType.color,
          },
          {
            animation: {
              plaintext: "green",
              tempDisambig: 0,
            },
            key: 1,
            type: PartType.color,
          },
        ],
        seqNum: SEQ_NUM,
      };

      it("reveals just first phrase part", async () => {
        let updatedPhraseParts = false;

        const onUpdatePhraseParts = (newParts: IPartProps[]) => {
          expect(newParts)
              .toHaveLength(2);
          expect(newParts[0].animation)
              .toBeUndefined();
          expect(newParts[1].animation)
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
        phraseParts: [{
          key: 0,
          type: PartType.color,
        }],
        seqNum: getCyclesBeforeFinalizing(1) + 1,
      };

      it("calls back with finish status", async () => {
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
