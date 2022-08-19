import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

import { Phrase, PhraseGenState } from "./Phrase";
import { PartType } from "./wordbanks";

configure({ adapter: new Adapter() });

describe("Phrase", () => {
  describe("when there are no parts", () => {
    const wrapper = shallow(<Phrase genState={PhraseGenState.NOT_STARTED} parts={[]}/>);

    it("renders a call to action", () => {
      expect(wrapper.find("div#phrase.empty"))
        .toHaveLength(1);
      expect(wrapper.text())
        .toMatch(/Build your next passphrase/);
    });
  });

  describe("when not generated", () => {
    const phraseParts = [
      {
        key: 1,
        type: PartType.word,
      },
      {
        key: 2,
        type: PartType.digit,
      },
    ];
    const wrapper = shallow(<Phrase genState={PhraseGenState.NOT_STARTED} parts={phraseParts}/>);

    it("renders stats", () => {
      expect(wrapper
        .find("#stats")
        .render()
        .text())
        .toEqual("This passphrase will be 5-8 characters long.");
    });

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
        .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePart");
      expect(phrasePartsWrapper)
        .toHaveLength(phraseParts.length);

      expect(phrasePartsWrapper
          .at(0)
          .render()
          .text())
          .toEqual("{word}");
      expect(phrasePartsWrapper
          .at(1)
          .render()
          .text())
          .toEqual("{digit}");
    });
  });

  describe("when animating", () => {
    const phraseParts = [
      {
        animation: {
          plaintext: "tempword",
          tempDisambig: 0,
        },
        key: 1,
        plaintext: "finalword",
        type: PartType.word,
      },
      {
        key: 2,
        type: PartType.digit,
      },
    ];
    const wrapper = shallow(<Phrase genState={PhraseGenState.ANIMATING} parts={phraseParts}/>);

    it("renders stats", () => {
      expect(wrapper
          .find("#stats")
          .render()
          .text())
          .toEqual("Generating your perfect passphrase...");
    });

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
          .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePart");
      expect(phrasePartsWrapper)
          .toHaveLength(phraseParts.length);

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
    const phraseParts = [
      {
        key: 1,
        plaintext: "hello",
        type: PartType.word,
      },
      {
        key: 2,
        plaintext: "0",
        type: PartType.digit,
      },
    ];
    const wrapper = shallow(<Phrase genState={PhraseGenState.GENERATED} parts={phraseParts}/>);

    it("renders stats", () => {
      expect(wrapper
        .find("#stats")
        .render()
        .text())
        .toEqual("Thank you for your patronage. Your new passphrase is 6 characters long.");
    });

    it("renders phrase parts", () => {
      const phraseWrapper = wrapper.find("#phrase");
      expect(phraseWrapper)
        .toHaveLength(1);

      const phrasePartsWrapper = phraseWrapper.find("PhrasePart");
      expect(phrasePartsWrapper)
        .toHaveLength(phraseParts.length);

      expect(phrasePartsWrapper
          .at(0)
          .render()
          .text())
          .toEqual("hello");
      expect(phrasePartsWrapper
          .at(1)
          .render()
          .text())
          .toEqual("0");
    });
  });
});
