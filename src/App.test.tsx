import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import { h } from "preact";

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

  it("allows setting entire phrase", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state("phraseParts"))
      .toHaveLength(0);

    wrapper.instance()
      .setPhraseParts([wb.PartType.word, wb.PartType.digit]);
    expect(wrapper.state("phraseParts"))
      .toHaveLength(2);
  });

  it("generates passphrases", () => {
    const mockEntropySource: IEntropySource = {
      bitsAvailable: jest.fn()
        .mockImplementation(() => (-1)),
      getBits: jest.fn()
        .mockImplementation(() => (0)),
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

  it("updates entropy attributes on entropy change", () => {
    let bitsAvailable = 5;
    const entropySourceMock: IEntropySource = {
      bitsAvailable: () => (bitsAvailable),
      getBits: () => { throw new Error("unsupported"); },
    };
    const wrapper = shallow(<App entropySource={entropySourceMock}/>);
    expect(wrapper.state()
      .entropyBitsAvailable)
      .toEqual(5);

    bitsAvailable = 17;
    wrapper.instance()
      .onEntropyChange();
    expect(wrapper.state()
      .entropyBitsAvailable)
      .toEqual(17);
  });

  it("updates entropy source when asked", () => {
    const wrapper = shallow(<App/>);
    const entropySourceMock: IEntropySource = {
      bitsAvailable: () => (5),
      getBits: () => { throw new Error("unsupported"); },
    };
    expect(wrapper.state()
      .entropySource)
      .not
      .toEqual(entropySourceMock);
    wrapper.instance()
      .setEntropySource(entropySourceMock);
    expect(wrapper.state()
      .entropySource)
      .toEqual(entropySourceMock);
  });
});
