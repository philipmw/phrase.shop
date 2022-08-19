import { Component } from "preact";

import { PartType } from "./wordbanks";

interface IAnimation {
  plaintext: string;
  tempDisambig: number;
}

export interface IPhraseProps {
  animation?: IAnimation;
  plaintext?: string;
  type: PartType;
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
export class PhrasePart extends Component<IPhraseProps> {
  public render() {
    const plaintextType = this.props.plaintext === undefined
        ? "unset"
        : (this.props.animation === undefined
            ? "plain"
            : `temp disambig${this.props.animation.tempDisambig}`);

    return <span className={`part type-${PartType[this.props.type]} ${plaintextType}`}>
      { this.props.animation !== undefined
          ? this.props.animation.plaintext
          : (this.props.plaintext !== undefined
              ? this.props.plaintext
              : `{${PartType[this.props.type]}}`) }
    </span>;
  }
}
