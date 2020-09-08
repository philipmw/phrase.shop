import * as React from "react";

import * as pp from "./PhrasePart";
import * as wb from "./wordbanks";

export interface IPartProps extends pp.IProps {
  key: number;
}

interface IProps {
  isGenerated: boolean;
  parts: IPartProps[];
}

export class Phrase extends React.PureComponent<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    if (this.props.parts.length === 0) {
      return <div id="welcome">
        <h1>welcome to phrase shop</h1>
        <p>Build your memorable and secure passphrase!</p>
      </div>;
    }

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
    const bitsOfEntropy = this.props.parts.reduce(
      (acc, pprops) => (acc + wb.partTypeProps[pprops.type].entropyReqBits), 0);

    return <div>
      <p>
        This passphrase { this.props.isGenerated ? "is" : "will be" } { lengthText } characters in length
        and { this.props.isGenerated ? "" : "will" } cost this shop { bitsOfEntropy } bits of entropy to generate:</p>
      <div id="phrase">
        {this.props.parts.map((part) => <span key={part.key}><pp.PhrasePart {...part}/></span>)}
      </div>
    </div>;
  }
}
