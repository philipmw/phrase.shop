import { Component } from "preact";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { IEntropySource } from "./IEntropySource";
import { Dice, DICE_SIDES_MAX, DICE_SIDES_MIN } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";
import { PhraseGenState } from "./Phrase";

interface IProps {
  bitsAvailable: number;
  phraseGenState: PhraseGenState;
  source: IEntropySource;
  onEntropyChange(): void;
  setEntropySource(source: IEntropySource): void;
}

interface IState {
  diceSides: number;
}

export class Entropy extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      diceSides: 6, // can't go wrong with good ol' 6
    };
  }

  public render() {
    return <div id="entropy">
      Select the source of entropy for your next phrase. Longer phrases need more entropy.
      <ul>
        <li>
          <label>
            <input type="radio"
                   name="source"
                   className="computer"
                   onChange={() => {
                     this.props.setEntropySource(new ComputerEntropySource());
                   }}
                   checked={this.props.source instanceof ComputerEntropySource}
                   disabled={this.props.phraseGenState === PhraseGenState.ANIMATING}
                   value="computer"/> 🖥 use my computer's random number generator
          </label>
        </li>
        <li>
          <label>
            <input type="radio"
                   name="source"
                   className="dice"
                   onChange={() => {
                     this.props.setEntropySource(new DiceEntropySource());
                   }}
                   checked={this.props.source instanceof DiceEntropySource}
                   disabled={this.props.phraseGenState === PhraseGenState.ANIMATING}
                   value="dice"/> 🎲 I will roll my dice
          </label>
        </li>
      </ul>

      {
        this.props.source instanceof DiceEntropySource
            && this.props.phraseGenState !== PhraseGenState.ANIMATING
        ? <Dice bitsAvailable={this.props.bitsAvailable}
                diceSides={this.state.diceSides}
                onDiceSidesChange={this.onDiceSidesChange}
                onEntropyChange={() => {
                  this.props.onEntropyChange();
                }}
                source={this.props.source}/>
        : undefined
      }
    </div>;
  }

  private readonly onDiceSidesChange = (newSides: number) => {
    if (newSides < DICE_SIDES_MIN || newSides > DICE_SIDES_MAX) {
      return;
    }
    this.setState(() => ({
      diceSides: newSides,
    }));
  }
}
