import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { Dice } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";

configure({ adapter: new Adapter() });

describe("Dice", () => {
  it("displays entropy collected", () => {
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();
    source.submitRoll(5, 8); // For a scoach of entropy

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    expect(wrapper.text())
      .toMatch(/Entropy collected: 3 out of 5 bits/);
  });

  it("renders six dice roll values to start", () => {
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    expect(wrapper.find("div#dice-roll-values button"))
      .toHaveLength(6);
  });

  it("submits rolls to the DiceEntropySource", () => {
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    wrapper.find("div#dice-roll-values button")
      .first()
      .simulate("click");

    expect(onEntropyChangeFn)
      .toHaveBeenCalled();
  });

  it("supports changing dice sides", () => {
    const onEntropyChangeFn = jest.fn();
    const source = new DiceEntropySource();

    const wrapper = shallow(<Dice bitsAvailable={source.bitsAvailable()}
                                  bitsNeeded={5}
                                  onEntropyChange={onEntropyChangeFn}
                                  source={source}/>);

    expect(wrapper.find("div#dice-roll-values button"))
      .toHaveLength(6);
    wrapper.find("input#dice-sides-slider")
      .simulate("change", { target: { valueAsNumber: 16 }});
    expect(wrapper.find("div#dice-roll-values button"))
      .toHaveLength(16);
  });
});
