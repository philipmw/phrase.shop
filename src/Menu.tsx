import * as React from "react";

import * as wb from "./wordbanks";

interface IProps {
  addPhrasePart(type: wb.PartType): void;
  generatePlaintext(): void;
}

export class Menu extends React.PureComponent<IProps> {
  public render() {
    return <div id="menu">
      <div id="add-components">
        <input type="button" onClick={() => { this.props.addPhrasePart(wb.PartType.english); }}
          value="+ simple english"/>
        <input type="button" onClick={() => { this.props.addPhrasePart(wb.PartType.usstate); }}
          value="+ US state abbr"/>
        <input type="button" onClick={() => { this.props.addPhrasePart(wb.PartType.color); }}
          value="+ color"/>
        <input type="button" onClick={() => { this.props.addPhrasePart(wb.PartType.digit); }}
          value="+ digit"/>
        <input type="button" onClick={() => { this.props.addPhrasePart(wb.PartType.symbol); }}
          value="+ symbol"/>
        <input type="button" onClick={() => { this.props.addPhrasePart(wb.PartType.musicalnote); }}
          value="+ musical note"/>
      </div>
      <div id="generate">
        <input type="button" onClick={() => { this.props.generatePlaintext(); }}
          value="generate!"/>
      </div>
    </div>;
  }
}
