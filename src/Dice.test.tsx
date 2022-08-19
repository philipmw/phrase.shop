import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { Dice } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";

configure({ adapter: new Adapter() });

describe("Dice", () => {
  it("displays entropy collected", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();
    source.submitRoll(5, 8); // For a scoach of entropy

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  diceSides={6}
                                  onDiceSidesChange={onDiceSidesChangeFn}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    expect(wrapper.text())
      .toMatch(/Entropy collected: 3 out of 5 bits/);
  });

  it("renders as many roll buttons as there are sides", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  diceSides={8}
                                  onDiceSidesChange={onDiceSidesChangeFn}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    expect(wrapper.find("div#dice-roll-values button"))
      .toHaveLength(8);
  });

  it("renders unicode dice for the first six", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  diceSides={8}
                                  onDiceSidesChange={onDiceSidesChangeFn}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    expect(wrapper.find("div#dice-roll-values button")
      .at(5)
      .text())
      .toEqual("⚅");
  });

  it("submits rolls to the DiceEntropySource", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  diceSides={6}
                                  onDiceSidesChange={onDiceSidesChangeFn}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    wrapper.find("div#dice-roll-values button")
      .first()
      .simulate("click");

    expect(onEntropyChangeFn)
      .toHaveBeenCalled();
  });

  it("supports changing dice sides through input field", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = mount(<Dice bitsAvailable={source.bitsAvailable()}
                                bitsNeeded={5}
                                diceSides={6}
                                onDiceSidesChange={onDiceSidesChangeFn}
                                onEntropyChange={onEntropyChangeFn}
                                source={source}/>);

    const numField = wrapper.find("input#number-input");
    numField.getDOMNode().value = "16";
    numField.simulate("change");
    expect(onDiceSidesChangeFn)
      .toHaveBeenCalledWith(16);
  });

  it("does not allow setting sides to a NaN value", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = mount(<Dice bitsAvailable={source.bitsAvailable()}
                                bitsNeeded={5}
                                diceSides={6}
                                onDiceSidesChange={onDiceSidesChangeFn}
                                onEntropyChange={onEntropyChangeFn}
                                source={source}/>);

    const numField = wrapper.find("input#number-input");
    numField.getDOMNode().value = NaN;
    numField.simulate("change");
    expect(onDiceSidesChangeFn)
      .not
      .toHaveBeenCalled();
  });

  it("supports decrementing dice sides through button", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  diceSides={6}
                                  onDiceSidesChange={onDiceSidesChangeFn}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    wrapper.find("button#decrement")
      .simulate("click");
    expect(onDiceSidesChangeFn)
      .toHaveBeenCalledWith(5);
  });

  it("supports incrementing dice sides through button", () => {
    const onDiceSidesChangeFn = jest.fn();
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  diceSides={6}
                                  onDiceSidesChange={onDiceSidesChangeFn}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    wrapper.find("button#increment")
      .simulate("click");
    expect(onDiceSidesChangeFn)
      .toHaveBeenCalledWith(7);
  });
});
