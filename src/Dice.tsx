import React from "react";

import { DiceEntropySource } from "./DiceEntropySource";

interface IProps {
  bitsAvailable: number;
  bitsNeeded: number;
  source: DiceEntropySource;
  onEntropyChange(): void;
}

interface IState {
  diceSides: number;
}

export class Dice extends React.PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      diceSides: 6,
    };
  }

  public render() {
    const a: number[] = new Array(this.state.diceSides);
    for (let i = 0; i < this.state.diceSides; i += 1) {
      a[i] = i + 1; // dice are 1-based
    }

    return <div id="dice-interaction">
      <p>
        Entropy collected: { this.props.source.bitsAvailable() } out of { this.props.bitsNeeded } bits
      </p>
      <progress id="entropyBits" max={this.props.bitsNeeded} value={this.props.source.bitsAvailable()}/>

      <p>
        How many sides do your dice have?
        <input type="range"
               id="dice-sides-slider"
               min="2"
               max="100"
               value={ this.state.diceSides }
               onChange={(what) => {
                 const newSides = what.target.valueAsNumber;
                 this.setState((state) => ({
                   diceSides: newSides,
                 }));
               }}/>
        { this.state.diceSides }
      </p>

      <p>Roll your physical dice, then record the outcome here.</p>

      <div id="dice-roll-values">
        { a.map((i: number) =>
          <button key={i}
                  name="rollValue"
                  onClick={() => {
                    this.props.source.submitRoll(i, this.state.diceSides);
                    this.props.onEntropyChange();
                  }}
                  value={i}>
            {i}</button>) }
      </div>
    </div>;
  }
}
