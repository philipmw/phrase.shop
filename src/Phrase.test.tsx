import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { Phrase } from "./Phrase";
import {makePhraseSimple} from "./logic/phraseTemplates";
import {makePhrasePartUiProps} from "./ui/phrasePartUiProps";
import {makeTestPhraseOfOneNoun} from "./test/testPhraseTemplates";

configure({ adapter: new Adapter() });

describe("Phrase", () => {
  describe("when animating", () => {
    const testPhraseStruct = makePhraseSimple();
    const testPpUiProps = [
      {
        animation: {
          plaintext: "tempword",
          tempDisambig: 0,
        },
        key: 1,
      },
      {
        key: 2,
      },
      {
        key: 3,
      },
      {
        key: 4,
      },
    ];

    const wrapper = shallow(
      <Phrase genState={"animating"}
              phraseStruct={testPhraseStruct}
              ppUiProps={testPpUiProps}/>);

    it("indicates animation state on phrase div", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
        .toHaveLength(1);
      expect(phraseWrapper.render().attr("class")).toBe("animating");
    });

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
          .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePartUi");
      expect(phrasePartsWrapper)
          .toHaveLength(testPhraseStruct.order.length);

      expect(phrasePartsWrapper
          .at(0)
          .render()
          .text())
          .toEqual("tempword");
      expect(phrasePartsWrapper
          .at(1)
          .render()
          .text())
          .toEqual("{digit}");
    });
  });

  describe("when generated", () => {
    const testPhraseStruct = makeTestPhraseOfOneNoun("testworld");
    const wrapper = shallow(
      <Phrase genState={"generated"}
              ppUiProps={makePhrasePartUiProps(testPhraseStruct)}
              phraseStruct={testPhraseStruct}/>);

    it("indicates animation state on phrase div", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
        .toHaveLength(1);
      expect(phraseWrapper.render().attr("class")).toBe("generated");
    });

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
        .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePartUi");
      expect(phrasePartsWrapper)
        .toHaveLength(testPhraseStruct.order.length);

      expect(phrasePartsWrapper
          .at(0)
          .render()
          .text())
          .toEqual("testworld");
    });
  });
});
