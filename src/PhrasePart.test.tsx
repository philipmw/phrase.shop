import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { PhrasePart } from "./PhrasePart";
import { PartType } from "./wordbanks";

configure({ adapter: new Adapter() });

describe("PhrasePart", () => {
  describe("when no plaintext", () => {
    const wrapper = shallow(<PhrasePart type={PartType.word}/>);

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

  describe("when animating", () => {
    const wrapper = shallow(
        <PhrasePart type={PartType.word}
                    plaintext="finalword"
                    animation={{plaintext: "tempword", tempDisambig: 0}}/>);

    it("uses the right classes", () => {
      expect(wrapper.find("span.part.type-word.temp.disambig0"))
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
    const wrapper = shallow(
        <PhrasePart type={PartType.word}
                    plaintext="hello"/>);

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
