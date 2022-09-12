import { Component } from "preact";

import { PartType } from "./wordbanks";
import {PhrasePart} from "./logic/PhrasePart";

interface IAnimation {
  plaintext: string;
  tempDisambig: number;
}

export interface PhrasePartUiProps {
  key: number;
  animation?: IAnimation;
}

interface IProps {
  phrasePart: PhrasePart;
  ppUiProps: PhrasePartUiProps;
}

/**
 * Phrase part lifecycle:
 *
 * When customer selects this part in UI, it starts having just a `type`, with all other
 * properties unset.
 *
 * Once customer clicks Generate, we create and set the `plaintext`.  If animation is
 * disabled, we stop here.
 *
 * If animation is enabled, we also create and set `animation`, then update `animation`
 * properties many times. Once the animation finishes, we unset `animation`, and then
 * only `type` and `plaintext` remain set.
 */
export class PhrasePartUi extends Component<IProps> {
  public render() {
    const plaintextType = this.props.phrasePart.getPlainValue() === undefined
        ? "unset"
        : (this.props.ppUiProps.animation === undefined
            ? "plain"
            : `temp disambig${this.props.ppUiProps.animation.tempDisambig}`);

    return <span className={`part type-${PartType[this.props.phrasePart.getPartType()]} ${plaintextType}`}>
      { this.props.ppUiProps.animation !== undefined
          ? this.props.ppUiProps.animation.plaintext
          : (this.props.phrasePart.getPlainValue() !== undefined
              ? this.props.phrasePart.getPlaintext()
              : `{${PartType[this.props.phrasePart.getPartType()]}}`) }
    </span>;
  }
}
