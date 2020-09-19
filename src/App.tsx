import { h } from "preact";
import { PureComponent } from "preact/compat";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { Menu } from "./Menu";
import { IPartProps, Phrase } from "./Phrase";
import * as wb from "./wordbanks";

interface IProps {
  entropySource?: IEntropySource;
}

interface IState {
  entropyBitsAvailable: number;
  entropySource: IEntropySource;
  isGenerated: boolean;
  phraseParts: IPartProps[];
}

export class App extends PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    const entropySource: IEntropySource =
      props.entropySource !== undefined ? props.entropySource : new ComputerEntropySource();
    this.state = {
      entropyBitsAvailable: entropySource.bitsAvailable(),
      entropySource,
      isGenerated: false,
      phraseParts: [],
    };
  }

  public render() {
    const bitsOfEntropy = this.state.phraseParts.reduce(
      (acc, pprops) => (acc + wb.partTypeProps[pprops.type].entropyReqBits), 0);

    return <div>
      <Phrase isGenerated={this.state.isGenerated}
              parts={this.state.phraseParts}/>
      <Menu addPhrasePart={this.addPhrasePart}
            entropyBitsAvailable={this.state.entropySource.bitsAvailable()}
            entropyBitsNeeded={bitsOfEntropy}
            generatePlaintext={this.generatePlaintext}
            isGenerated={this.state.isGenerated}
            qtyOfPhraseParts={this.state.phraseParts.length}
            reset={this.reset}/>
      <Entropy bitsAvailable={this.state.entropySource.bitsAvailable()}
               bitsNeeded={bitsOfEntropy}
               phraseIsGenerated={this.state.isGenerated}
               onEntropyChange={this.onEntropyChange}
               setEntropySource={this.setEntropySource}
               source={this.state.entropySource}/>
    </div>;
  }

  private readonly addPhrasePart = (type: wb.PartType) => {
    this.setState((state) => ({
      isGenerated: false,
      phraseParts: state.phraseParts.concat({key: this.state.phraseParts.length, type}),
    }));
  }

  private readonly generatePlaintext = () => {
    this.setState((state) => ({
      isGenerated: true,
      phraseParts: state.phraseParts.map((part) => ({
        ...part,
        plaintext: wb.dictionary[part.type][
          this.state.entropySource.getBits(wb.partTypeProps[part.type].entropyReqBits)
          ],
      })),
    }));
  }

  private readonly onEntropyChange = () => {
    this.setState((state) => ({
      entropyBitsAvailable: state.entropySource.bitsAvailable(),
    }));
  }

  private readonly reset = () => {
    this.setState((state) => ({
      isGenerated: false,
      phraseParts: [],
    }));
  }

  private readonly setEntropySource = (source: IEntropySource) => {
    this.setState((state) => ({
      entropyBitsAvailable: source.bitsAvailable(),
      entropySource: source,
    }));
  }

}
