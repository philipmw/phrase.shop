import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Dice } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";
import { Entropy } from "./Entropy";
import { IEntropySource } from "./IEntropySource";
import { PhraseGenState } from "./Phrase";

configure({ adapter: new Adapter() });

describe("Entropy", () => {
  const emptyOnEntropyChangeFn = jest.fn();
  const emptySetEntropySourceFn = jest.fn();
  const testSource: IEntropySource = {
    bitsAvailable: () => (1),
    getBits: () => { throw new Error("unsupported"); },
  };

  describe("when phrase is being generated", () => {
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseGenState={PhraseGenState.ANIMATING}
                                     setEntropySource={emptySetEntropySourceFn}
                                     source={testSource}/>);

    it("disables selection of entropy source", () => {
      const inputWrappers = wrapper.find("input");
      expect(inputWrappers).toHaveLength(2);
      inputWrappers.forEach(input =>
        expect(input.render().attr("disabled")).toBeTruthy()
      );
    });
  });

  describe("when phrase is generated", () => {
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseGenState={PhraseGenState.GENERATED}
                                     setEntropySource={emptySetEntropySourceFn}
                                     source={testSource}/>);

    it("enables selection of entropy source", () => {
      const inputWrappers = wrapper.find("input");
      expect(inputWrappers).toHaveLength(2);
      inputWrappers.forEach(input =>
        expect(input.render().attr("disabled")).toBeFalsy()
      );
    });
  });

  describe("when entropy source is Computer", () => {
    const setEntropySourceFn = jest.fn();
    const wrapper = shallow(<Entropy bitsAvailable={0}
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseGenState={PhraseGenState.NOT_STARTED}
                                     setEntropySource={setEntropySourceFn}
                                     source={new ComputerEntropySource()}/>);

    it("has computer radio button checked", () => {
      expect(wrapper.find("input.computer")
        .prop("checked"))
        .toBeTruthy();
      expect(wrapper.find("input.dice")
        .prop("checked"))
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
                                     onEntropyChange={emptyOnEntropyChangeFn}
                                     phraseGenState={PhraseGenState.NOT_STARTED}
                                     setEntropySource={setEntropySourceFn}
                                     source={new DiceEntropySource()}/>);

    it("has dice radio button checked", () => {
      expect(wrapper.find("input.computer")
        .prop("checked"))
        .toBeFalsy();
      expect(wrapper.find("input.dice")
        .prop("checked"))
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

    it("supports changing dice sides", () => {
      const initialDiceSides: number = wrapper.state()
        .diceSides;
      wrapper.instance()
        .onDiceSidesChange(initialDiceSides + 5);
      expect(wrapper.state().diceSides)
        .toEqual(initialDiceSides + 5);
    });

    it("rejects proposed dice sides out of range", () => {
      const initialDiceSides = wrapper.state().diceSides;
      wrapper.instance()
        .onDiceSidesChange(1);
      expect(wrapper.state()
        .diceSides)
        .toEqual(initialDiceSides);
      wrapper.instance()
        .onDiceSidesChange(101);
      expect(wrapper.state()
        .diceSides)
        .toEqual(initialDiceSides);
    });

    it("propagates entropy changes", () => {
      const dice = wrapper.find(Dice);
      dice.get(0)
        .props
        .onEntropyChange();
      expect(emptyOnEntropyChangeFn)
        .toHaveBeenCalled();
    });
  });
});
