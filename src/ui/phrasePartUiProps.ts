import {Sentence} from "../logic/Sentence";
import {PhrasePartUiProps} from "../PhrasePartUi";

const getUniqueId = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER);

export function makePhrasePartUiProps(sentence: Sentence): PhrasePartUiProps[] {
  return sentence.getOrderedWords().map(() => ({
    key: getUniqueId(),
  }));
}
