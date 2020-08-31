import * as React from "react";

export interface IProps {
  type: PartType;
  plaintext?: string;
}

export enum PartType {
  English,
  Digit,
  USState,
  Color,
  Symbol,
}

export const dictionary = {
  [PartType.English]: ["hello", "world"],
  [PartType.Digit]: ["0", "1"],
  [PartType.USState]: ["WA", "UT"],
  [PartType.Color]: ["red", "orange"],
  [PartType.Symbol]: ["`", "~"],
};

export class PhrasePart extends React.PureComponent<IProps> {
  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div
      className={"part type-" + this.props.type}>{this.props.plaintext || "{" + PartType[this.props.type] + "}"}</div>
  }
}
