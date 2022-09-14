import { Component } from "preact";

import { PhraseGenState } from "./Phrase";
import {entropyNeededForPhrase, PhraseStruct} from "./logic/phrase";
import {makePhraseHard, makePhraseMedium, makePhraseSimple} from "./logic/phraseTemplates";

interface IProps {
  entropyBitsAvailable: number;
  phraseGenState: PhraseGenState;

  setPhraseStruct(phraseStruct: PhraseStruct): void;
}

// Create these statically rather than in render so we aren't creating a bunch of objects needlessly.
const SIMPLE_PHRASE = makePhraseSimple();
const MEDIUM_PHRASE = makePhraseMedium();
const HARD_PHRASE = makePhraseHard();

export class Menu extends Component<IProps> {
  public render() {
    const phraseTemplateButtons = <span>
      <button type="button"
              id="template-small"
              class="template"
              disabled={this.props.phraseGenState === PhraseGenState.ANIMATING
                || this.props.entropyBitsAvailable < entropyNeededForPhrase(SIMPLE_PHRASE)}
              onClick={() => { this.props.setPhraseStruct(makePhraseSimple()); }}>
        <span className="callToAction">🍱 🔒 💪</span>
      </button>
      <button type="button"
              id="template-medium"
              class="template"
              disabled={this.props.phraseGenState === PhraseGenState.ANIMATING
                || this.props.entropyBitsAvailable < entropyNeededForPhrase(MEDIUM_PHRASE)}
              onClick={() => { this.props.setPhraseStruct(makePhraseMedium()); }}>
        <span className="callToAction">🍱 🔒 💪💪</span>
      </button>
      <button type="button"
              id="template-large"
              class="template"
              disabled={this.props.phraseGenState === PhraseGenState.ANIMATING
                || this.props.entropyBitsAvailable < entropyNeededForPhrase(HARD_PHRASE)}
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
