import * as React from "react";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { Menu } from "./Menu";
import { IPartProps, Phrase } from "./Phrase";
import * as wb from "./wordbanks";

interface IProps {
  entropySource?: IEntropySource;
}

interface IState {
  entropySource: IEntropySource;
  isGenerated: boolean;
  phraseParts: IPartProps[];
}

export class App extends React.PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      entropySource: props.entropySource !== undefined ? props.entropySource : new ComputerEntropySource(),
      isGenerated: false,
      phraseParts: [],
    };
  }

  public componentDidMount = () => {
    console.log("Welcome to phrase.shop.");
    wb.partTypeList.forEach((partType) => {
      console.log(`${partType} dictionary initialized with ${wb.dictionary[partType].length} elements`);
    });
  }

  public render() {
    return <div>
      <Phrase isGenerated={this.state.isGenerated}
              parts={this.state.phraseParts}/>
      <Menu addPhrasePart={this.addPhrasePart}
            generatePlaintext={this.generatePlaintext}
            isGenerated={this.state.isGenerated}
            qtyOfPhraseParts={this.state.phraseParts.length}
            reset={this.reset}/>
      <Entropy sourceName={this.state.entropySource.name}
               bitsAvailable={this.state.entropySource.bitsAvailable()}/>
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

  private readonly reset = () => {
    this.setState((state) => ({
      isGenerated: false,
      phraseParts: [],
    }));
  }
}
