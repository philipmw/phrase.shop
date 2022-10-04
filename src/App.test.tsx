import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { App } from "./App";
import { IEntropySource } from "./IEntropySource";
import { PhraseGenState } from "./Phrase";
import {makePhraseHard, makePhraseMedium} from "./logic/phraseTemplates";

configure({ adapter: new Adapter() });

describe("App", () => {
  let mockEntropySource: IEntropySource;

  beforeEach(() => {
    mockEntropySource = {
      bitsAvailable: jest.fn()
        .mockImplementation(() => (42)), // enough for medium but not enough for hard
      getBits: jest.fn()
        .mockImplementation(() => (0)),
    };
  });

  it("allows changing phrase template, as long as we have enough entropy", () => {
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

    expect(wrapper.state("phrasePartsUiProps"))
      .toHaveLength(4); // starting with easy

    wrapper.instance()
      .setPhraseStruct(makePhraseMedium());

    expect(wrapper.state("phrasePartsUiProps"))
      .toHaveLength(6); // now medium

    expect(() => wrapper.instance().setPhraseStruct(makePhraseHard()))
      .toThrow("New phrase needs more entropy than we have available");

    expect(wrapper.state("phrasePartsUiProps"))
      .toHaveLength(6); // unchanged from medium
  });

  it("starts animating passphrase", () => {
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

    expect(wrapper.state("phraseGenState"))
      .toEqual(PhraseGenState.ANIMATING.valueOf());
  });

  it("finishes animation", () => {
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

    wrapper.instance()
        .onAnimationFinish();

    expect(wrapper.state("phraseGenState"))
        .toEqual(PhraseGenState.GENERATED.valueOf());
  });

  it("updates entropy attributes on entropy change", () => {
    let bitsAvailable = 5;
    const entropySourceMock: IEntropySource = {
      bitsAvailable: () => (bitsAvailable),
      getBits: () => 1,
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
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

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
