import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { Menu } from "./Menu";
import { PhraseGenState } from "./Phrase";
import {makePhraseHard, makePhraseMedium, makePhraseSimple} from "./logic/phraseTemplates";

configure({ adapter: new Adapter() });

describe("Menu", () => {
  let setPhraseStructFn;

  beforeEach(() => {
    setPhraseStructFn = jest.fn();
  });

  describe("initial state with lots of entropy", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          setPhraseStruct={setPhraseStructFn}
          entropyBitsAvailable={100}
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
        expect(setPhraseStructFn)
            .toHaveBeenCalled();
        expect(setPhraseStructFn.mock.calls[0][0])
            .toEqual(makePhraseSimple());
      });
    });

    describe("medium template button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#template-medium");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setPhraseStructFn)
            .toHaveBeenCalled();
        expect(setPhraseStructFn.mock.calls[0][0])
            .toEqual(makePhraseMedium());
      });
    });

    describe("large template button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#template-large");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setPhraseStructFn)
            .toHaveBeenCalled();
        expect(setPhraseStructFn.mock.calls[0][0])
            .toEqual(makePhraseHard());
      });
    });
  });

  describe("when phrase is animating", () => {
    const wrapper = shallow(<Menu
        setPhraseStruct={setPhraseStructFn}
        entropyBitsAvailable={100}
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

  describe("when phrase is generated and we still have a lot of entropy", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          setPhraseStruct={setPhraseStructFn}
          entropyBitsAvailable={1000}
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

  describe("when phrase is generated and we have just a little entropy", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
        setPhraseStruct={setPhraseStructFn}
        entropyBitsAvailable={30}
        phraseGenState={PhraseGenState.GENERATED}
      />);
    });

    it("has the first of three phrase templates enabled", () => {
      const buttons = wrapper.find("button.template");
      expect(buttons)
        .toHaveLength(3);
      // simple phrase template
      expect(buttons.at(0).render().attr("disabled")).toBeFalsy();
      // medium phrase template
      expect(buttons.at(1).render().attr("disabled")).toBeTruthy();
      // hard phrase template
      expect(buttons.at(2).render().attr("disabled")).toBeTruthy();
    });
  });
});
