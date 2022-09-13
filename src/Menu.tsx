import { Component } from "preact";

import { PhraseGenState } from "./Phrase";
import { PhraseStruct } from "./logic/phrase";
import {makePhraseHard, makePhraseMedium, makePhraseSimple} from "./logic/phraseTemplates";

interface IProps {
  entropyBitsAvailable: number;
  entropyBitsNeeded: number;
  phraseGenState: PhraseGenState;

  setPhraseStruct(phraseStruct: PhraseStruct): void;
}

export class Menu extends Component<IProps> {
  public render() {
    const isDisabled = this.props.phraseGenState === PhraseGenState.ANIMATING
      || this.props.entropyBitsAvailable < this.props.entropyBitsNeeded;

    const phraseTemplateButtons = <span>
      <button type="button"
              id="template-small"
              class="template"
              disabled={isDisabled}
              onClick={() => { this.props.setPhraseStruct(makePhraseSimple()); }}>
        <span className="callToAction">🍱 🔒 💪</span>
      </button>
      <button type="button"
              id="template-medium"
              class="template"
              disabled={isDisabled}
              onClick={() => { this.props.setPhraseStruct(makePhraseMedium()); }}>
        <span className="callToAction">🍱 🔒 💪💪</span>
      </button>
      <button type="button"
              id="template-large"
              class="template"
              disabled={isDisabled}
              onClick={() => { this.props.setPhraseStruct(makePhraseHard()); }}>
        <span className="callToAction">🍱 🔒 💪💪💪</span>
      </button>
    </span>;

    return <div id="menu">
      <div id="main-actions">
        { phraseTemplateButtons }
      </div>
    </div>;
  }
}
