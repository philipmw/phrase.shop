import React from "react";

import { DiceEntropySource } from "./DiceEntropySource";

interface IProps {
  bitsAvailable: number;
  bitsNeeded: number;
  diceSides: number;
  source: DiceEntropySource;
  onDiceSidesChange(newSides: number): void;
  onEntropyChange(): void;
}

export class Dice extends React.PureComponent<IProps> {
  public render() {
    const a: number[] = new Array(this.props.diceSides);
    for (let i = 0; i < this.props.diceSides; i += 1) {
      a[i] = i + 1; // dice are 1-based
    }

    return <div id="dice-interaction">
      <p>
        Entropy collected: { this.props.source.bitsAvailable() } out of { this.props.bitsNeeded } bits
      </p>
      <progress id="entropyBits" max={this.props.bitsNeeded} value={this.props.source.bitsAvailable()}/>

      <div id="dice-sides">
        <p>
          How many sides do your dice have?&nbsp;
          <input type="number"
                 id="number-input"
                 min="2"
                 max="100"
                 value={ this.props.diceSides }
                 onChange={(what) => {
                   const newSides = what.target.valueAsNumber;
                   this.props.onDiceSidesChange(newSides);
                 }}/>
        </p>

      </div>

      <p>
        Roll your physical dice, then record the outcomes here.
        Not all your rolls may add entropy.
        Keep rolling until you collect enough entropy for your phrase.</p>

      <div id="dice-roll-values">
        { a.map((i: number) =>
          <button key={i}
                  name="rollValue"
                  onClick={() => {
                    this.props.source.submitRoll(i, this.props.diceSides);
                    this.props.onEntropyChange();
                  }}
                  value={i}>
            {i}</button>) }
      </div>
    </div>;
  }
}
