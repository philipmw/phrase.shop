import React from "react";

interface IProps {
  bitsAvailable: number;
  sourceName: string;
}

export class Entropy extends React.PureComponent<IProps> {
  public render() {
    const entropyDetails = this.props.bitsAvailable > 0
      ? <span>Bits available: {this.props.bitsAvailable}.</span>
      : undefined;

    return <div id="entropy">
      Entropy source: {this.props.sourceName}.
      {entropyDetails}
    </div>;
  }
}
