import { Component } from "preact";

import { PhraseGenState } from "./Phrase";
import { Sentence } from "./logic/Sentence";
import {makeSentenceHard, makeSentenceMedium, makeSentenceSimple} from "./logic/sentenceTemplates";

interface IProps {
  entropyBitsAvailable: number;
  entropyBitsNeeded: number;
  phraseGenState: PhraseGenState;

  setSentence(sentence: Sentence): void;
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
              onClick={() => { this.props.setSentence(makeSentenceSimple()); }}>
        <span className="callToAction">🍱 🔒 💪</span>
      </button>
      <button type="button"
              id="template-medium"
              class="template"
              disabled={isDisabled}
              onClick={() => { this.props.setSentence(makeSentenceMedium()); }}>
        <span className="callToAction">🍱 🔒 💪💪</span>
      </button>
      <button type="button"
              id="template-large"
              class="template"
              disabled={isDisabled}
              onClick={() => { this.props.setSentence(makeSentenceHard()); }}>
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
