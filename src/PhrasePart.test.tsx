import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import { h } from "preact";

import { PhraseGenState } from "./Phrase";
import { PhrasePart } from "./PhrasePart";
import { PartType } from "./wordbanks";

configure({ adapter: new Adapter() });

describe("PhrasePart", () => {
  describe("when no plaintext", () => {
    const wrapper = shallow(<PhrasePart phraseGenState={PhraseGenState.NOT_STARTED}
                                        type={PartType.word}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-word.unset"))
        .toHaveLength(1);
    });

    it("renders its type", () => {
      expect(wrapper
        .render()
        .text())
        .toEqual("{word}");
    });
  });

  describe("when final plaintext is available", () => {
    const wrapper = shallow(
        <PhrasePart phraseGenState={PhraseGenState.GENERATED}
                    type={PartType.word}
                    plaintext={{isFinal: true, text: "hello"}}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-word.plain"))
        .toHaveLength(1);
    });

    it("renders plaintext", () => {
      expect(wrapper
        .render()
        .text())
        .toEqual("hello");
    });
  });
});
