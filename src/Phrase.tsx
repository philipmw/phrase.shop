import { h } from "preact";
import { PureComponent } from "preact/compat";

import * as pp from "./PhrasePart";
import * as wb from "./wordbanks";

export interface IPartProps extends pp.IProps {
  key: number;
}

interface IProps {
  isGenerated: boolean;
  parts: IPartProps[];
}

export class Phrase extends PureComponent<IProps> {
  public render() {
    if (this.props.parts.length === 0) {
      return this.renderEmpty();
    }

    return this.renderPhrase();
  }

  private readonly renderEmpty = () => <div>
      <p id="stats">Build your next passphrase:</p>
      <div id="phrase" class="empty">* * *</div>
    </div>

  private renderPhrase() {
    const len = this.props.parts.reduce(
      (acc, pprops) => ({
        max: acc.max + (pprops.plaintext === undefined
          ? wb.partTypeProps[pprops.type].maxLength
          : pprops.plaintext.length),
        min: acc.min + (pprops.plaintext === undefined
          ? wb.partTypeProps[pprops.type].minLength
          : pprops.plaintext.length),
      }),
      {max: 0, min: 0});
    const lengthText = len.min === len.max ? `${len.min}` : `${len.min}-${len.max}`;

    return <div>
      <p id="stats">
        {
          this.props.isGenerated
            ? `Thank you for your patronage. Your new passphrase is ${lengthText} characters long.`
            : `This passphrase will be ${lengthText} characters long.`
        }
      </p>
      <div id="phrase">
        {this.props.parts.map((part) => <span key={part.key}><pp.PhrasePart {...part}/></span>)}
      </div>
    </div>;
  }
}
