import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { App } from "./App";
import { IEntropySource } from "./IEntropySource";
import { PhraseGenState } from "./Phrase";
import {makeSentenceHard} from "./logic/sentenceTemplates";

configure({ adapter: new Adapter() });

describe("App", () => {
  let mockEntropySource: IEntropySource;

  beforeEach(() => {
    mockEntropySource = {
      bitsAvailable: jest.fn()
        .mockImplementation(() => (-1)),
      getBits: jest.fn()
        .mockImplementation(() => (0)),
    };
  });

  it("allows changing phrase template", () => {
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

    expect(wrapper.state("phrasePartsUiProps"))
      .toHaveLength(3);

    wrapper.instance()
      .setSentence(makeSentenceHard());

    expect(wrapper.state("phrasePartsUiProps"))
      .toHaveLength(8);
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
