import * as React from "react";
import * as ReactDOM from "react-dom";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { Menu } from "./Menu";
import { IPartProps, Phrase } from "./Phrase";
import * as wb from "./wordbanks";

interface IState {
  entropySource: IEntropySource;
  phraseParts: IPartProps[];
}

class App extends React.PureComponent<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      entropySource: new ComputerEntropySource(),
      phraseParts: [],
    };
  }

  public render() {
    return <div>
      <Phrase parts={this.state.phraseParts}/>
      <Menu addPhrasePart={this.addPhrasePart} generatePlaintext={this.generatePlaintext}/>
      <Entropy sourceName={this.state.entropySource.name} bitsAvailable={this.state.entropySource.bitsAvailable()}/>
    </div>;
  }

  private readonly addPhrasePart = (type: wb.PartType) => {
    this.setState((state) => ({
      phraseParts: state.phraseParts.concat({key: this.state.phraseParts.length, type}),
    }));
  }

  private readonly generatePlaintext = () => {
    this.setState((state) => ({
      phraseParts: state.phraseParts.map((part) => ({
        ...part,
        plaintext: wb.dictionary[part.type][
          this.state.entropySource.getBits(wb.entropyReq[part.type])
          ],
      })),
    }));
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById("app-root"),
);
