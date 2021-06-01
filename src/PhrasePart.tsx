import { h, JSX } from "preact";
import { PureComponent } from "preact/compat";

import { PhraseGenState } from "./Phrase";
import { PartType } from "./wordbanks";

interface IPlaintext {
  isFinal: boolean; // false for animation
  tempDisambig?: number;
  text: string;
}

export interface IPhraseProps {
  plaintext?: IPlaintext;
  type: PartType;
}

interface IProps extends IPhraseProps {
  phraseGenState: PhraseGenState;
}

export class PhrasePart extends PureComponent<IProps> {
  public render(): JSX.Element {
    const plaintextType = this.props.plaintext === undefined
        ? "unset"
        : (this.props.plaintext.isFinal
            ? "plain"
            : `temp disambig${this.props.plaintext.tempDisambig}`);

    return <span className={`part type-${PartType[this.props.type]} ${plaintextType}`}>
      { this.props.plaintext !== undefined
          ? this.props.plaintext.text
          : (this.props.phraseGenState === PhraseGenState.ANIMATING
              ? undefined // part-types jump around during animation, so turn them off
              : `{${PartType[this.props.type]}}`) }
    </span>;
  }
}
