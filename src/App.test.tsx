import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import { h } from "preact";

import { App } from "./App";
import { PhraseGenState } from "./Phrase";
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

  it("generates passphrase if animation is disabled", () => {
    const mockEntropySource: IEntropySource = {
      bitsAvailable: jest.fn()
          .mockImplementation(() => (-1)),
      getBits: jest.fn()
          .mockImplementation(() => (0)),
    };
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);

    wrapper.instance()
        .addPhrasePart(wb.PartType.word);
    expect(wrapper.state("phraseGenState"))
        .toEqual(PhraseGenState.NOT_STARTED.valueOf());
    expect(wrapper.state("phraseParts")[0].plaintext)
        .toBeUndefined();

    wrapper.instance()
        .generatePlaintext();
    expect(wrapper.state("phraseGenState"))
        .toEqual(PhraseGenState.GENERATED.valueOf());
    expect(wrapper.state("phraseParts")[0].plaintext)
        .toBeDefined();
    expect(wrapper.state("phraseParts")[0].animation)
        .toBeUndefined();
  });

  it("starts animating passphrase generation if animation is enabled", () => {
    const mockEntropySource: IEntropySource = {
      bitsAvailable: jest.fn()
        .mockImplementation(() => (-1)),
      getBits: jest.fn()
        .mockImplementation(() => (0)),
    };
    const wrapper = shallow(<App entropySource={mockEntropySource}/>);
    // Enable feature flag
    wrapper.setState({ urlSearchParams: new URLSearchParams("?animation=y")});

    wrapper.instance()
      .addPhrasePart(wb.PartType.word);
    expect(wrapper.state("phraseGenState"))
      .toEqual(PhraseGenState.NOT_STARTED.valueOf());
    expect(wrapper.state("phraseParts")[0].plaintext)
      .toBeUndefined();

    wrapper.instance()
      .generatePlaintext();
    expect(wrapper.state("phraseGenState"))
      .toEqual(PhraseGenState.ANIMATING.valueOf());
    expect(wrapper.state("phraseParts")[0].plaintext)
      .toBeDefined();
    expect(wrapper.state("phraseParts")[0].animation.plaintext)
        .toBeDefined();
  });

  it("finishes animation", () => {
    const wrapper = shallow(<App/>);

    wrapper.instance()
        .onAnimationFinish();

    expect(wrapper.state("phraseGenState"))
        .toEqual(PhraseGenState.GENERATED.valueOf());
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
