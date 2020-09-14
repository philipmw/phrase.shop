import React from "react";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Dice, DICE_SIDES_MAX, DICE_SIDES_MIN } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";

interface IProps {
  bitsAvailable: number;
  bitsNeeded: number;
  phraseIsGenerated: boolean;
  source: IEntropySource;
  onEntropyChange(): void;
  setEntropySource(source: IEntropySource): void;
}

interface IState {
  diceSides: number;
}

export class Entropy extends React.PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      diceSides: 6, // can't go wrong with good ol' 6
    };
  }

  public render() {
    if (this.props.bitsNeeded === 0) {
      return <div id="entropy"></div>;
    }

    const charge = <span id="charge">
      { this.props.phraseIsGenerated ? "Regenerating" : "Generating" } this passphrase
      will cost {this.props.bitsNeeded} bits of entropy.
    </span>;

    return <div id="entropy">
      {charge}
      <ul>
        <li>
          <input type="radio"
                 name="source"
                 className="computer"
                 onChange={() => {
                   this.props.setEntropySource(new ComputerEntropySource());
                 }}
                 checked={this.props.source instanceof ComputerEntropySource}
                 value="computer"/> 🖥 my computer will make randomness</li>
        <li>
          <input type="radio"
                 name="source"
                 className="dice"
                 onChange={() => {
                   this.props.setEntropySource(new DiceEntropySource());
                 }}
                 checked={this.props.source instanceof DiceEntropySource}
                 value="dice"/> 🎲 I will roll my dice</li>
      </ul>

      {
        this.props.source instanceof DiceEntropySource
        ? <Dice bitsAvailable={this.props.bitsAvailable}
                bitsNeeded={this.props.bitsNeeded}
                diceSides={this.state.diceSides}
                onDiceSidesChange={this.onDiceSidesChange}
                onEntropyChange={this.props.onEntropyChange}
                source={this.props.source}/>
        : undefined
      }
    </div>;
  }

  private readonly onDiceSidesChange = (newSides: number) => {
    if (newSides < DICE_SIDES_MIN || newSides > DICE_SIDES_MAX) {
      return;
    }
    this.setState((state) => ({
      diceSides: newSides,
    }));
  }
}
