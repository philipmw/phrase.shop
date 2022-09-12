import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { Menu } from "./Menu";
import { PhraseGenState } from "./Phrase";
import {makeSentenceHard, makeSentenceMedium, makeSentenceSimple} from "./logic/sentenceTemplates";

configure({ adapter: new Adapter() });

describe("Menu", () => {
  let setSentenceFn;

  beforeEach(() => {
    setSentenceFn = jest.fn();
  });

  describe("initial state", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          setSentence={setSentenceFn}
          entropyBitsAvailable={0}
          entropyBitsNeeded={0}
          phraseGenState={PhraseGenState.NOT_STARTED}
      />);
    });

    it("has three phrase templates enabled", () => {
      const buttons = wrapper.find("button.template");
      expect(buttons)
          .toHaveLength(3);
      buttons.forEach(buttonWrapper => {
        expect(buttonWrapper
          .render()
          .attr("disabled"))
          .toBeFalsy();
      });
    });

    describe("small template button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#template-small");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setSentenceFn)
            .toHaveBeenCalled();
        expect(setSentenceFn.mock.calls[0][0])
            .toEqual(makeSentenceSimple());
      });
    });

    describe("medium template button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#template-medium");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setSentenceFn)
            .toHaveBeenCalled();
        expect(setSentenceFn.mock.calls[0][0])
            .toEqual(makeSentenceMedium());
      });
    });

    describe("large template button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#template-large");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setSentenceFn)
            .toHaveBeenCalled();
        expect(setSentenceFn.mock.calls[0][0])
            .toEqual(makeSentenceHard());
      });
    });
  });

  describe("when phrase is animating", () => {
    const wrapper = shallow(<Menu
        setSentence={setSentenceFn}
        entropyBitsAvailable={0}
        entropyBitsNeeded={0}
        phraseGenState={PhraseGenState.ANIMATING}
    />);

    it("has disabled phrase template buttons", () => {
      const buttons = wrapper.find("button.template");
      expect(buttons)
        .toHaveLength(3);
      buttons.forEach(buttonWrapper => {
        expect(buttonWrapper
          .render()
          .attr("disabled"))
          .toBeTruthy();
      });
    });
  });

  describe("when phrase is generated", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          setSentence={setSentenceFn}
          entropyBitsAvailable={0}
          entropyBitsNeeded={0}
          phraseGenState={PhraseGenState.GENERATED}
      />);
    });

    it("has three phrase templates enabled", () => {
      const buttons = wrapper.find("button.template");
      expect(buttons)
        .toHaveLength(3);
      buttons.forEach(buttonWrapper => {
        expect(buttonWrapper
          .render()
          .attr("disabled"))
          .toBeFalsy();
      });
    });
  });
});
