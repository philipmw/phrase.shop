import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

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

  describe("when plaintext is available", () => {
    const wrapper = shallow(<PhrasePart type={PartType.word} plaintext={"hello"}/>);

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
