import * as React from "react";

import * as pp from "./PhrasePart";
import * as wb from "./wordbanks";

export interface IPartProps extends pp.IProps {
  key: number;
}

interface IProps {
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
        <p>secure yet memorable passphrases in stock</p>
      </div>;
    }

    return <div>
      <p>Your passphrase has {
        this.props.parts.reduce((acc, pprops) => (acc + wb.entropyReq[pprops.type]), 0)
      } bits of entropy:</p>
      <div id="phrase">
        {this.props.parts.map((part) => <span key={part.key}><pp.PhrasePart {...part}/></span>)}
      </div>
    </div>;
  }
}
