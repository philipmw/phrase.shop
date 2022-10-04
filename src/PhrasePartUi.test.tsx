import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import {PhrasePartUi} from "./PhrasePartUi";
import {PartType} from "./wordbanks";
import {PhrasePart} from "./logic/PhrasePart";

configure({ adapter: new Adapter() });

describe("PhrasePartUi", () => {
  describe("when no plaintext", () => {
    const phrasePart = new PhrasePart(PartType.uncountNoun);
    const ppUiProps = { key: 0 };

    const wrapper = shallow(
      <PhrasePartUi phrasePart={phrasePart}
                    ppUiProps={ppUiProps}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-uncountNoun.unset"))
        .toHaveLength(1);
    });

    it("renders its type", () => {
      expect(wrapper
        .render()
        .text())
        .toEqual("{uncountNoun}");
    });
  });

  describe("when animating", () => {
    const phrasePart = new PhrasePart(PartType.uncountNoun, "finalword");
    const ppUiProps = { key: 0, animation: {plaintext: "tempword", tempDisambig: 0} };

    const wrapper = shallow(
      <PhrasePartUi phrasePart={phrasePart}
                    ppUiProps={ppUiProps}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-uncountNoun.temp.disambig0"))
          .toHaveLength(1);
    });

    it("renders animation word and not the final word", () => {
      expect(wrapper
          .render()
          .text())
          .toEqual("tempword");
      expect(wrapper
          .render()
          .text())
          .not
          .toContain("finalword");
    });
  });

  describe("when final plaintext is available", () => {
    const phrasePart = new PhrasePart(PartType.uncountNoun, "finalword");
    const ppUiProps = { key: 0 };

    const wrapper = shallow(
      <PhrasePartUi phrasePart={phrasePart}
                    ppUiProps={ppUiProps}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-uncountNoun.plain"))
        .toHaveLength(1);
    });

    it("renders plaintext", () => {
      expect(wrapper
        .render()
        .text())
        .toEqual("finalword");
    });
  });
});
