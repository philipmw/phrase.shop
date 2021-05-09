import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import { h } from "preact";

import { Menu } from "./Menu";
import * as wb from "./wordbanks";

configure({ adapter: new Adapter() });

describe("Menu", () => {
  const addPhrasePartFn = jest.fn();
  const setPhrasePartsFn = jest.fn();
  const generatePlaintextFn = jest.fn();
  const resetFn = jest.fn();

  describe("initial state", () => {
    const wrapper = shallow(<Menu
      addPhrasePart={addPhrasePartFn}
      setPhraseParts={setPhrasePartsFn}
      entropyBitsAvailable={0}
      entropyBitsNeeded={0}
      generatePlaintext={generatePlaintextFn}
      isGenerated={false}
      qtyOfPhraseParts={0}
      reset={resetFn}
    />);

    it("has add buttons for each phrase type", () => {
      expect(wrapper.find("button.add"))
        .toHaveLength(wb.partTypeList.length);
    });

    it("has three phrase templates", () => {
      const buttonWrapper = wrapper.find("button#generate");
      expect(buttonWrapper)
        .toHaveLength(3);
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

    it("adds a phrase part on clicking an Add button", () => {
      const buttonWrapper = wrapper.find("button.add.word");
      buttonWrapper.simulate("click");
      expect(addPhrasePartFn)
        .toHaveBeenCalled();
    });
  });

  describe("when phrase exists but is not generated", () => {
    const wrapper = shallow(<Menu
      addPhrasePart={addPhrasePartFn}
      setPhraseParts={setPhrasePartsFn}
      entropyBitsAvailable={0}
      entropyBitsNeeded={0}
      generatePlaintext={generatePlaintextFn}
      isGenerated={false}
      qtyOfPhraseParts={1}
      reset={resetFn}
    />);

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

  describe("when phrase is generated", () => {
    const wrapper = shallow(<Menu
      addPhrasePart={addPhrasePartFn}
      setPhraseParts={setPhrasePartsFn}
      entropyBitsAvailable={0}
      entropyBitsNeeded={0}
      generatePlaintext={generatePlaintextFn}
      isGenerated={true}
      qtyOfPhraseParts={1}
      reset={resetFn}
    />);

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
