import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { Phrase, PhraseGenState } from "./Phrase";
import {makeSentenceSimple} from "./logic/sentenceTemplates";
import {makePhrasePartUiProps} from "./ui/phrasePartUiProps";
import {makeTestSentenceOfOneNoun} from "./test/testSentenceTemplates";

configure({ adapter: new Adapter() });

describe("Phrase", () => {
  describe("when animating", () => {
    const testSentence = makeSentenceSimple();
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
    ];

    const wrapper = shallow(
      <Phrase genState={PhraseGenState.ANIMATING}
              sentence={testSentence}
              ppUiProps={testPpUiProps}/>);

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
          .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePartUi");
      expect(phrasePartsWrapper)
          .toHaveLength(testSentence.getOrderedWords().length);

      expect(phrasePartsWrapper
          .at(0)
          .render()
          .text())
          .toEqual("tempword");
      expect(phrasePartsWrapper
          .at(1)
          .render()
          .text())
          .toEqual("{adjective}");
    });
  });

  describe("when generated", () => {
    const testSentence = makeTestSentenceOfOneNoun("testworld");
    const wrapper = shallow(
      <Phrase genState={PhraseGenState.GENERATED}
              ppUiProps={makePhrasePartUiProps(testSentence)}
              sentence={testSentence}/>);

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
        .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePartUi");
      expect(phrasePartsWrapper)
        .toHaveLength(testSentence.getOrderedWords().length);

      expect(phrasePartsWrapper
          .at(0)
          .render()
          .text())
          .toEqual("testworld");
    });
  });
});
