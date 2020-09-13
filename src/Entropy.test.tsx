import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Dice } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";
import { Entropy } from "./Entropy";

configure({ adapter: new Adapter() });

describe("Entropy", () => {
  const emptyOnEntropyChangeFn = jest.fn();
  const emptySetEntropySourceFn = jest.fn();
  const testSource: IEntropySource = {
    bitsAvailable: () => (1),
    getBits: () => { throw new Error("unsupported"); },
  };

  describe("when no phrase parts", () => {
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     bitsNeeded={0}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseIsGenerated={false}
                                     setEntropySource={emptySetEntropySourceFn}
                                     source={testSource}/>);

    it("does not render anything", () => {
      expect(wrapper.render()
        .text())
        .toEqual("");
    });
  });

  describe("when phrase parts exist but phrase is not generated", () => {
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     bitsNeeded={10}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseIsGenerated={false}
                                     setEntropySource={emptySetEntropySourceFn}
                                     source={testSource}/>);

    it("says how much generating will cost", () => {
      expect(wrapper.render()
        .text())
        .toMatch(/Generating this passphrase will cost 10 bits of entropy./);
    });
  });

  describe("when phrase is generated", () => {
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     bitsNeeded={10}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseIsGenerated={true}
                                     setEntropySource={emptySetEntropySourceFn}
                                     source={testSource}/>);

    it("says how much regenerating will cost", () => {
      expect(wrapper.render()
        .text())
        .toMatch(/Regenerating this passphrase will cost 10 bits of entropy./);
    });
  });

  describe("when entropy source is Computer", () => {
    const setEntropySourceFn = jest.fn();
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     bitsNeeded={10}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseIsGenerated={false}
                                     setEntropySource={setEntropySourceFn}
                                     source={new ComputerEntropySource()}/>);

    it("has computer radio button checked", () => {
      expect(wrapper.render()
        .find("input.computer")
        .attr("checked"))
        .toBeTruthy();
      expect(wrapper.render()
        .find("input.dice")
        .attr("checked"))
        .toBeFalsy();
    });

    it("supports switching to Dice", () => {
      wrapper.find("input.dice")
        .simulate("change");
      expect(setEntropySourceFn)
        .toHaveBeenCalled();
      expect(setEntropySourceFn.mock.calls[0][0])
        .toBeInstanceOf(DiceEntropySource);
    });
  });

  describe("when entropy source is Dice", () => {
    const setEntropySourceFn = jest.fn();
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     bitsNeeded={10}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseIsGenerated={false}
                                     setEntropySource={setEntropySourceFn}
                                     source={new DiceEntropySource()}/>);

    it("has dice radio button checked", () => {
      expect(wrapper.render()
        .find("input.computer")
        .attr("checked"))
        .toBeFalsy();
      expect(wrapper.render()
        .find("input.dice")
        .attr("checked"))
        .toBeTruthy();
    });

    it("supports switching to Dice", () => {
      wrapper.find("input.computer")
        .simulate("change");
      expect(setEntropySourceFn)
        .toHaveBeenCalled();
      expect(setEntropySourceFn.mock.calls[0][0])
        .toBeInstanceOf(ComputerEntropySource);
    });

    it("renders dice component", () => {
      expect(wrapper.find(Dice))
        .toBeTruthy();
    });
  });
});
