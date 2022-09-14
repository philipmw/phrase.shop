import { Component } from "preact";

import { DiceEntropySource } from "./DiceEntropySource";
import {entropyNeededForPhrase} from "./logic/phrase";
import {makePhraseHard, makePhraseSimple} from "./logic/phraseTemplates";

interface IProps {
  bitsAvailable: number;
  diceSides: number;
  source: DiceEntropySource;
  onDiceSidesChange(newSides: number): void;
  onEntropyChange(): void;
}

const DICE_FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
export const DICE_SIDES_MIN = 2;
export const DICE_SIDES_MAX = 100;

export class Dice extends Component<IProps> {
  public render() {
    const a: number[] = new Array(this.props.diceSides);
    for (let i = 0; i < this.props.diceSides; i += 1) {
      a[i] = i + 1; // dice are 1-based
    }

    return <div id="dice-interaction">
      <p>
        Entropy collected from your dice: { this.props.bitsAvailable } bits.
        The shortest phrase needs { entropyNeededForPhrase(makePhraseSimple()) } bits,
        while the longest needs { entropyNeededForPhrase(makePhraseHard()) } bits.
      </p>
      <div id="dice-sides">
        <p>
          How many sides do your dice have?&nbsp;
          <div id="dice-sides-change-elements">
            <button id="decrement"
                    onClick={() => {
                      this.props.onDiceSidesChange(this.props.diceSides - 1);
                    }}>&lt;-</button>
            <input type="number"
                   id="number-input"
                   min={DICE_SIDES_MIN}
                   max={DICE_SIDES_MAX}
                   value={ this.props.diceSides }
                   onChange={(e) => {
                     // This conditional exists primarily for TypeScript's benefit, because
                     // `e` is a generic Event rather than the specific Change Event, so
                     // typescript claims that `target` is nullable.
                     if (e.target !== null && e.target instanceof HTMLInputElement) {
                       const newSides = e.target.valueAsNumber;
                       if (!Number.isNaN(newSides)) {
                         this.props.onDiceSidesChange(newSides);
                       }
                     }
                   }}/>
            <button id="increment"
                    onClick={() => {
                      this.props.onDiceSidesChange(this.props.diceSides + 1);
                    }}>+&gt;</button>
          </div>
        </p>

      </div>

      <p>
        Roll your physical dice, then record the outcomes here.
        Not all your rolls may add entropy.
        Keep rolling until you collect enough entropy for your next phrase.</p>

      <div id="dice-roll-values">
        { a.map((i: number) =>
          <button key={i}
                  className="diceRollValue"
                  name="rollValue"
                  onClick={() => {
                    this.props.source.submitRoll(i, this.props.diceSides);
                    this.props.onEntropyChange();
                  }}
                  value={i}>
            {this.diceSideRender(i)}</button>) }
      </div>
    </div>;
  }

  private readonly diceSideRender = (side: number): string => {
    if (side <= DICE_FACES.length) {
      return DICE_FACES[side - 1];
    }

    return side.toString();
  }
}
