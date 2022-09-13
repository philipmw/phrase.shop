import {PhraseStruct} from "../logic/phrase";
import {PhrasePartUiProps} from "../PhrasePartUi";

const getUniqueId = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER);

export function makePhrasePartUiProps(phrStr: PhraseStruct): PhrasePartUiProps[] {
  return phrStr.order.map(() => ({
    key: getUniqueId(),
  }));
}
