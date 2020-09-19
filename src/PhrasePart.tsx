import { h, JSX } from "preact";
import { PureComponent } from "preact/compat";

import { PartType } from "./wordbanks";

export interface IProps {
  plaintext?: string;
  type: PartType;
}

export class PhrasePart extends PureComponent<IProps> {
  public render(): JSX.Element {
    return <span className={`part type-${PartType[this.props.type]} ${this.props.plaintext !== undefined ? "plain" : "unset"}`}>
      { this.props.plaintext !== undefined ? this.props.plaintext : `{${PartType[this.props.type]}}`}
    </span>;
  }
}
