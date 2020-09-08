import * as React from "react";

import { PartType, partTypeList, partTypeProps } from "./wordbanks";

interface IProps {
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
      return <div id="main-action">
        <button type="button" onClick={() => { this.props.reset(); }}>start over</button>
      </div>;
    }

    const menuItems = partTypeList.map((menuItem) => {
      const lengthStr = partTypeProps[menuItem].minLength === partTypeProps[menuItem].maxLength
        ? `${partTypeProps[menuItem].minLength}`
        : `${partTypeProps[menuItem].minLength}-${partTypeProps[menuItem].maxLength}`;

      return <button type="button" key={menuItem} onClick={() => { this.props.addPhrasePart(menuItem); }}>
        <span className="callToAction">
          + { menuData[menuItem].name }
        </span> ({partTypeProps[menuItem].entropyReqBits} bits, length {lengthStr})
      </button>;
    });

    return <div id="menu">
      <div id="add-components">
        {menuItems}
      </div>

      <div id="main-action">
        <button type="button"
                disabled={this.props.qtyOfPhraseParts === 0}
                onClick={() => { this.props.generatePlaintext(); }}>
          <span className="callToAction" >generate!</span>
        </button>
      </div>
    </div>;
  }
}
