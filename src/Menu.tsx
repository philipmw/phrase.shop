import { h } from "preact";
import { PureComponent } from "preact/compat";

import { PartType, partTypeList, partTypeProps } from "./wordbanks";

interface IProps {
  entropyBitsAvailable: number;
  entropyBitsNeeded: number;
  isGenerated: boolean;
  qtyOfPhraseParts: number;

  addPhrasePart(type: PartType): void;
  generatePlaintext(): void;
  reset(): void;
  setPhraseParts(types: PartType[]): void;
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
  [PartType.noun]: {
    name: "noun",
  },
  [PartType.verb]: {
    name: "verb",
  },
  [PartType.adjective]: {
    name: "adjective",
  },
  [PartType.adverb]: {
    name: "adverb",
  },
  [PartType.preposition]: {
    name: "preposition",
  },
  [PartType.conjunction]: {
    name: "conjunction",
  },
  [PartType.determiner]: {
    name: "determiner",
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
  [PartType.usairport]: {
    name: "US airport abbr",
  },
};

export class Menu extends PureComponent<IProps> {
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
      const optLength = partTypeProps[menuItem].maxLength - partTypeProps[menuItem].minLength;
      const lengthStr = Array(partTypeProps[menuItem].minLength)
        .fill("🀫")
        .concat(Array(optLength)
          .fill("🀆"))
        .join("");

      return <div className="menu-item">
        <div className="detail">
          <p className={`part type-${menuItem}`}>{ menuData[menuItem].name }</p>
          <p>{lengthStr}</p>
          <p>{partTypeProps[menuItem].entropyReqBits} bits of entropy</p>
        </div>
        <button type="button"
                className={`add ${menuItem}`}
                key={menuItem}
                onClick={() => { this.props.addPhrasePart(menuItem); }}>+</button>
      </div>;
    });

    const phraseTemplateButtons = <span>
      <button type="button"
              id="generate"
              onClick={() => { this.props.setPhraseParts([
                PartType.determiner,
                PartType.digit,
                PartType.adjective,
                PartType.noun,
              ]); }}>
        <span className="callToAction">🍱 🔒 💪</span>
      </button>
      <button type="button"
              id="generate"
              onClick={() => { this.props.setPhraseParts([
                PartType.determiner,
                PartType.digit,
                PartType.adjective,
                PartType.noun,
                PartType.conjunction,
                PartType.noun,
              ]); }}>
        <span className="callToAction">🍱 🔒 💪💪</span>
      </button>
      <button type="button"
              id="generate"
              onClick={() => { this.props.setPhraseParts([
                PartType.determiner,
                PartType.digit,
                PartType.adjective,
                PartType.noun,
                PartType.verb,
                PartType.conjunction,
                PartType.digit,
                PartType.noun,
                PartType.verb,
              ]); }}>
        <span className="callToAction">🍱 🔒 💪💪💪</span>
      </button>
    </span>;

    const phraseInProgressButtons = <span>
        <button type="button"
                id="reset"
                onClick={() => { this.props.reset(); }}>
          ⇠ start over</button>
      <button type="button"
              id="generate"
              disabled={this.props.entropyBitsAvailable < this.props.entropyBitsNeeded}
              onClick={() => { this.props.generatePlaintext(); }}>
          <span className="callToAction" >📜 generate!</span>
        </button>
    </span>;

    return <div id="menu">
      <div id="main-actions">
        { this.props.qtyOfPhraseParts === 0 ? phraseTemplateButtons : phraseInProgressButtons }
      </div>

      <div id="add-components">
        <section class="accordion">
          <input type="checkbox" name="collapse" id="phrase-components"/>
          <label for="phrase-components">
            &nbsp;Shop for phrase parts à la carte
          </label>
          <div class="accordion-content">
            {menuItems}
          </div>
        </section>
      </div>
    </div>;
  }
}
