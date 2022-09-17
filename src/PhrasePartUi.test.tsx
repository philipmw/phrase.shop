import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import {PhrasePartUi} from "./PhrasePartUi";
import {PartType} from "./wordbanks";
import {PhrasePart} from "./logic/PhrasePart";

configure({ adapter: new Adapter() });

describe("PhrasePartUi", () => {
  describe("when no plaintext", () => {
    const phrasePart = new PhrasePart(PartType.noun);
    const ppUiProps = { key: 0 };

    const wrapper = shallow(
      <PhrasePartUi phrasePart={phrasePart}
                    ppUiProps={ppUiProps}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-noun.unset"))
        .toHaveLength(1);
    });

    it("renders its type", () => {
      expect(wrapper
        .render()
        .text())
        .toEqual("{noun}");
    });
  });

  describe("when animating", () => {
    const phrasePart = new PhrasePart(PartType.noun, "finalword");
    const ppUiProps = { key: 0, animation: {plaintext: "tempword", tempDisambig: 0} };

    const wrapper = shallow(
      <PhrasePartUi phrasePart={phrasePart}
                    ppUiProps={ppUiProps}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-noun.temp.disambig0"))
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
    const phrasePart = new PhrasePart(PartType.noun, "finalword");
    const ppUiProps = { key: 0 };

    const wrapper = shallow(
      <PhrasePartUi phrasePart={phrasePart}
                    ppUiProps={ppUiProps}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-noun.plain"))
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