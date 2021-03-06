import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import { h } from "preact";

import { Menu } from "./Menu";
import { PhraseGenState } from "./Phrase";
import * as wb from "./wordbanks";

configure({ adapter: new Adapter() });

describe("Menu", () => {
  let addPhrasePartFn;
  let setPhrasePartsFn;
  let generatePlaintextFn;
  let resetFn;

  beforeEach(() => {
    addPhrasePartFn = jest.fn();
    setPhrasePartsFn = jest.fn();
    generatePlaintextFn = jest.fn();
    resetFn = jest.fn();
  });

  describe("initial state", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          addPhrasePart={addPhrasePartFn}
          setPhraseParts={setPhrasePartsFn}
          entropyBitsAvailable={0}
          entropyBitsNeeded={0}
          generatePlaintext={generatePlaintextFn}
          phraseGenState={PhraseGenState.NOT_STARTED}
          qtyOfPhraseParts={0}
          reset={resetFn}
      />);
    });

    it("has add buttons for each phrase type", () => {
      expect(wrapper.find("button.add"))
        .toHaveLength(wb.partTypeList.length);
    });

    it("has three phrase templates", () => {
      expect(wrapper.find("button.package"))
          .toHaveLength(3);
    });

    it("has does not have a Start Over button", () => {
      const buttonWrapper = wrapper.find("button#reset");
      expect(buttonWrapper)
        .toHaveLength(0);
    });

    it("adds a phrase part on clicking an Add button", () => {
      const buttonWrapper = wrapper.find("button.add.word");
      buttonWrapper.simulate("click");
      expect(addPhrasePartFn)
        .toHaveBeenCalled();
    });

    describe("small package button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#package-small");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setPhrasePartsFn)
            .toHaveBeenCalled();
        expect(setPhrasePartsFn.mock.calls[0][0])
            .toHaveLength(4);
      });
    });

    describe("medium package button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#package-medium");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setPhrasePartsFn)
            .toHaveBeenCalled();
        expect(setPhrasePartsFn.mock.calls[0][0])
            .toHaveLength(6);
      });
    });

    describe("large package button", () => {
      it("registers a small set of preconfigured phrase parts", () => {
        const buttonWrapper = wrapper.find("button#package-large");
        expect(buttonWrapper)
            .toHaveLength(1);
        buttonWrapper.simulate("click");
        expect(setPhrasePartsFn)
            .toHaveBeenCalled();
        expect(setPhrasePartsFn.mock.calls[0][0])
            .toHaveLength(8);
      });
    });
  });

  describe("when phrase exists but is not generated", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          addPhrasePart={addPhrasePartFn}
          setPhraseParts={setPhrasePartsFn}
          entropyBitsAvailable={0}
          entropyBitsNeeded={0}
          generatePlaintext={generatePlaintextFn}
          phraseGenState={PhraseGenState.NOT_STARTED}
          qtyOfPhraseParts={1}
          reset={resetFn}
      />);
    });

    it("has an enabled Generate button", () => {
      const buttonWrapper = wrapper.find("button#generate");
      expect(buttonWrapper)
        .toHaveLength(1);
      expect(buttonWrapper
        .render()
        .text())
        .toContain("generate");
      expect(buttonWrapper
        .render()
        .attr("disabled"))
        .toBeFalsy();
    });

    it("has an enabled Start Over button", () => {
      const buttonWrapper = wrapper.find("button#reset");
      expect(buttonWrapper)
        .toHaveLength(1);
      expect(buttonWrapper
        .render()
        .attr("disabled"))
        .toBeFalsy();
    });

    it("generates the phrase on clicking the Generate button", () => {
      const buttonWrapper = wrapper.find("button#generate");
      buttonWrapper.simulate("click");
      expect(generatePlaintextFn)
        .toHaveBeenCalled();
    });

    it("resets the phrase on clicking the Start Over button", () => {
      const buttonWrapper = wrapper.find("button#reset");
      buttonWrapper.simulate("click");
      expect(resetFn)
        .toHaveBeenCalled();
    });
  });

  describe("when phrase is animating", () => {
    const wrapper = shallow(<Menu
        addPhrasePart={addPhrasePartFn}
        setPhraseParts={setPhrasePartsFn}
        entropyBitsAvailable={0}
        entropyBitsNeeded={0}
        generatePlaintext={generatePlaintextFn}
        phraseGenState={PhraseGenState.ANIMATING}
        qtyOfPhraseParts={1}
        reset={resetFn}
    />);

    it("does not have Add buttons", () => {
      expect(wrapper.find("button.add"))
          .toHaveLength(0);
    });

    it("has a disabled Start Over button", () => {
      const buttonWrapper = wrapper.find("button#reset");
      expect(buttonWrapper)
          .toHaveLength(1);
      expect(buttonWrapper
          .render()
          .attr("disabled"))
          .toBeTruthy();
    });

    it("has a disabled Generate button", () => {
      const buttonWrapper = wrapper.find("button#generate");
      expect(buttonWrapper)
          .toHaveLength(1);
      expect(buttonWrapper
          .render()
          .attr("disabled"))
          .toBeTruthy();
    });
  });

  describe("when phrase is generated", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu
          addPhrasePart={addPhrasePartFn}
          setPhraseParts={setPhrasePartsFn}
          entropyBitsAvailable={0}
          entropyBitsNeeded={0}
          generatePlaintext={generatePlaintextFn}
          phraseGenState={PhraseGenState.GENERATED}
          qtyOfPhraseParts={1}
          reset={resetFn}
      />);
    });

    it("does not have Add buttons", () => {
      expect(wrapper.find("button.add"))
        .toHaveLength(0);
    });

    it("has an enabled Generate button", () => {
      const buttonWrapper = wrapper.find("button#generate");
      expect(buttonWrapper)
        .toHaveLength(1);
      expect(buttonWrapper
        .render()
        .attr("disabled"))
        .toBeFalsy();
    });

    it("regenerates the phrase on clicking the Generate button", () => {
      const buttonWrapper = wrapper.find("button#generate");
      buttonWrapper.simulate("click");
      expect(generatePlaintextFn)
        .toHaveBeenCalled();
    });

    it("has a Start Over button", () => {
      const buttonWrapper = wrapper.find("button#reset");
      expect(buttonWrapper)
        .toHaveLength(1);
    });

    it("resets the phrase on clicking the Start Over button", () => {
      const buttonWrapper = wrapper.find("button#reset");
      buttonWrapper.simulate("click");
      expect(resetFn)
        .toHaveBeenCalled();
    });
  });
});
