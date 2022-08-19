import { Component } from "preact";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { IEntropySource } from "./IEntropySource";
import { Dice, DICE_SIDES_MAX, DICE_SIDES_MIN } from "./Dice";
import { DiceEntropySource } from "./DiceEntropySource";
import { PhraseGenState } from "./Phrase";

interface IProps {
  bitsAvailable: number;
  bitsNeeded: number;
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
    if (this.props.bitsNeeded === 0) {
      return <div></div>;
    }

    const charge = <span id="charge">
      { this.props.phraseGenState === PhraseGenState.NOT_STARTED
          ? `Generating this passphrase will cost ${this.props.bitsNeeded} bits of entropy.`
          : (this.props.phraseGenState === PhraseGenState.GENERATED
              ? `Regenerating this passphrase will cost ${this.props.bitsNeeded} bits of entropy.`
              : `Consuming ${this.props.bitsNeeded} bits of entropy to generate your passphrase...`)
      }
    </span>;

    return <div id="entropy">
      {charge}
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
                   value="computer"/> 🖥 my computer will make randomness
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
                bitsNeeded={this.props.bitsNeeded}
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
