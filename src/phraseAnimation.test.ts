import { IPartProps } from "./Phrase";
import { animatePhraseCycle } from "./phraseAnimation";
import { PartType } from "./wordbanks";

describe("phraseAnimation", () => {
  describe(".animatePhraseCycle", () => {
    describe("while we are animating", () => {
      const ANIM_STATE = {
        isFinished: false,
        onFinish: () => {
          // Nothing to check
        },
        phraseParts: [{
          key: 0,
          type: PartType.color,
        }],
        showingTempWordNum: 0,
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

      it("increments counter in its own state", async () =>
          Promise.resolve()
            .then(() => {
              const newAnimState = animatePhraseCycle({
                ...ANIM_STATE,
                onUpdatePhraseParts: () => {
                  // We don't care
                },
              });
              expect(newAnimState.showingTempWordNum)
                  .toEqual(1);
            }),
      );
    });

    describe("once counter reaches limit", () => {
      const ANIM_STATE = {
        isFinished: false,
        phraseParts: [{
          key: 0,
          type: PartType.color,
        }],
        showingTempWordNum: 10,
      };

      it("calls back with updated phrase parts having no animation", async () => {
        let updatedPhraseParts = false;

        const onUpdatePhraseParts = (newParts: IPartProps[]) => {
          expect(newParts)
              .toHaveLength(1);
          expect(newParts[0].animation)
              .toBeUndefined();
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
