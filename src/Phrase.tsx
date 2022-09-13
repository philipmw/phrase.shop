import { Component } from "preact";

import {PhrasePartUi, PhrasePartUiProps} from "./PhrasePartUi";
import {PhraseStruct} from "./logic/phrase";

export enum PhraseGenState {
  NOT_STARTED,
  ANIMATING,
  GENERATED,
}

interface IProps {
  genState: PhraseGenState;
  phraseStruct: PhraseStruct;
  ppUiProps: PhrasePartUiProps[]; // indexed by `phraseSetruct.order`
}

export class Phrase extends Component<IProps> {
  public render() {
    const orderedPhraseParts = this.props.phraseStruct.order;
    return <div id="phrase">
      {orderedPhraseParts.map((part, i) =>
        <span key={this.props.ppUiProps[i].key}>
          <PhrasePartUi phrasePart={part} ppUiProps={this.props.ppUiProps[i]}/>
        </span>
      )}
    </div>;
  }
}
