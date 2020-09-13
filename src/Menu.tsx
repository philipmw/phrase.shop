import * as React from "react";

import { PartType, partTypeList, partTypeProps } from "./wordbanks";

interface IProps {
  entropyBitsAvailable: number;
  entropyBitsNeeded: number;
  isGenerated: boolean;
  qtyOfPhraseParts: number;

  addPhrasePart(type: PartType): void;
  generatePlaintext(): void;
  reset(): void;
}

interface IMenuEntry {
  name: string;
}

type MenuData = {
  [key in PartType]: IMenuEntry
};

const menuData: MenuData = {
  [PartType.word]: {
    name: "word",
  },
  [PartType.digit]: {
    name: "digit",
  },
  [PartType.usstate]: {
    name: "US state abbr",
  },
  [PartType.color]: {
    name: "color",
  },
  [PartType.symbol]: {
    name: "symbol",
  },
  [PartType.musicalnote]: {
    name: "musical note",
  },
};

export class Menu extends React.PureComponent<IProps> {
  public render() {
    if (this.props.isGenerated) {
      return <div id="main-actions">
        <button type="button"
                id="reset"
                onClick={() => { this.props.reset(); }}>⇠ start over</button>
        <button type="button"
                id="generate"
                disabled={
                  this.props.qtyOfPhraseParts === 0 ||
                  this.props.entropyBitsAvailable < this.props.entropyBitsNeeded}
                onClick={() => { this.props.generatePlaintext(); }}>
          <span className="callToAction" >↻ regenerate</span>
        </button>
      </div>;
    }

    const menuItems = partTypeList.map((menuItem) => {
      const lengthStr = partTypeProps[menuItem].minLength === partTypeProps[menuItem].maxLength
        ? `${partTypeProps[menuItem].minLength}`
        : `${partTypeProps[menuItem].minLength}-${partTypeProps[menuItem].maxLength}`;

      return <button type="button"
                     className={`add ${menuItem}`}
                     key={menuItem}
                     onClick={() => { this.props.addPhrasePart(menuItem); }}>
        <span className="callToAction">
          + { menuData[menuItem].name }
        </span> ({partTypeProps[menuItem].entropyReqBits} bits, length {lengthStr})
      </button>;
    });

    return <div id="menu">
      <div id="add-components">
        {menuItems}
      </div>

      <div id="main-actions">
        <button type="button"
                id="reset"
                disabled={this.props.qtyOfPhraseParts === 0}
                onClick={() => { this.props.reset(); }}>
          ⇠ start over</button>
        <button type="button"
                id="generate"
                disabled={
                  this.props.qtyOfPhraseParts === 0 ||
                  this.props.entropyBitsAvailable < this.props.entropyBitsNeeded}
                onClick={() => { this.props.generatePlaintext(); }}>
          <span className="callToAction" >generate!</span>
        </button>
      </div>
    </div>;
  }
}
