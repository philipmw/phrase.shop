import { Component } from "preact";

import {PhrasePartUi, PhrasePartUiProps} from "./PhrasePartUi";
import {PhraseStruct} from "./logic/phrase";

export type PhraseGenState = "not-started" | "animating" | "generated";

interface IProps {
  genState: PhraseGenState;
  phraseStruct: PhraseStruct;
  ppUiProps: PhrasePartUiProps[]; // indexed by `phraseSetruct.order`
}

export class Phrase extends Component<IProps> {
  public render() {
    const orderedPhraseParts = this.props.phraseStruct.order;
    /**
     * Notes on visual implementation of phrase:
     * I use a flexbox of a fixed height so that elements below the phrase don't jump around
     * during animation.
     * I use an inner div, stretched to 100% width, to ensure that multiple lines of the phrase
     * don't stretch to the full height of flexbox. I did not find a setting of `align-items`
     * that works without an inner div.
     */
    return <div id="phrase" class={this.props.genState}>
      <div id="phrase-inner">
        {orderedPhraseParts.map((part, i) =>
          <span key={this.props.ppUiProps[i].key}>
            <PhrasePartUi phrasePart={part} ppUiProps={this.props.ppUiProps[i]}/>
            <span class={"part space"}> </span>
          </span>
        )}
      </div>
    </div>;
  }
}
