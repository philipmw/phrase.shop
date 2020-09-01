import React from "react";

interface IProps {
  bitsAvailable: number;
  sourceName: string;
}

export class Entropy extends React.PureComponent<IProps> {
  public render() {
    return <div id="entropy">
      Entropy source: {this.props.sourceName}.  Bits available: {this.props.bitsAvailable}.
    </div>;
  }
}
