import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { App } from "./App";
import * as wb from "./wordbanks";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("adds phrase parts", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state("phraseParts"))
      .toHaveLength(0);

    wrapper.instance()
      .addPhrasePart(wb.PartType.word);
    expect(wrapper.state("phraseParts"))
      .toHaveLength(1);
  });

  it("generates passphrases", () => {
    const mockEntropySource: IEntropySource = {
      bitsAvailable: jest.fn()
        .mockImplementation(() => (-1)),
      getBits: jest.fn()
        .mockImplementation(() => (0)),
      name: "test entropy source",
    };
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

    wrapper.instance()
      .addPhrasePart(wb.PartType.word);
    expect(wrapper.state("isGenerated"))
      .toBeFalsy();
    expect(wrapper.state("phraseParts")[0].plaintext)
      .toBeUndefined();

    wrapper.instance()
      .generatePlaintext();
    expect(wrapper.state("isGenerated"))
      .toBeTruthy();
    expect(wrapper.state("phraseParts")[0].plaintext)
      .toBeDefined();
  });

  it("resets when asked", () => {
    const wrapper = shallow(<App/>);

    const initialState = wrapper.state();
    wrapper.instance()
      .addPhrasePart(wb.PartType.word);

    expect(wrapper.state())
      .not
      .toEqual(initialState);

    wrapper.instance()
      .reset();
    expect(wrapper.state())
      .toEqual(initialState);
  });
});
