import { Component } from "preact";

import {PhrasePartUi, PhrasePartUiProps} from "./PhrasePartUi";
import {Sentence} from "./logic/Sentence";

export enum PhraseGenState {
  NOT_STARTED,
  ANIMATING,
  GENERATED,
}

interface IProps {
  genState: PhraseGenState;
  sentence: Sentence;
  ppUiProps: PhrasePartUiProps[]; // indexed by `senSetruct.order`
}

export class Phrase extends Component<IProps> {
  public render() {
    const orderedPhraseParts = this.props.sentence.getOrderedWords();
    return <div id="phrase">
      {orderedPhraseParts.map((part, i) =>
        <span key={this.props.ppUiProps[i].key}>
          <PhrasePartUi phrasePart={part} ppUiProps={this.props.ppUiProps[i]}/>
        </span>
      )}
    </div>;
  }
}
