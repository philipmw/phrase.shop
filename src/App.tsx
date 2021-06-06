import { h } from "preact";
import { PureComponent } from "preact/compat";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { getUrlSearchParams, isAnimationDisabled } from "./featureflags";
import { Menu } from "./Menu";
import { IPartProps, Phrase, PhraseGenState } from "./Phrase";
import { animatePhrase } from "./phraseAnimation";
import * as wb from "./wordbanks";

interface IProps {
  entropySource?: IEntropySource;
}

interface IState {
  entropyBitsAvailable: number;
  entropySource: IEntropySource;
  phraseGenState: PhraseGenState;
  phraseParts: IPartProps[];
  urlSearchParams: URLSearchParams;
}

const getUniqueId = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER);

export class App extends PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    const entropySource: IEntropySource =
      props.entropySource !== undefined ? props.entropySource : new ComputerEntropySource();
    this.state = {
      entropyBitsAvailable: entropySource.bitsAvailable(),
      entropySource,
      phraseGenState: PhraseGenState.NOT_STARTED,
      phraseParts: [],
      urlSearchParams: getUrlSearchParams(),
    };
  }

  public render() {
    const bitsOfEntropy = this.state.phraseParts.reduce(
      (acc, pprops) => (acc + wb.partTypeProps[pprops.type].entropyReqBits), 0);

    return <div>
      <Phrase genState={this.state.phraseGenState}
              parts={this.state.phraseParts}/>
      <Menu addPhrasePart={this.addPhrasePart}
            setPhraseParts={this.setPhraseParts}
            entropyBitsAvailable={this.state.entropySource.bitsAvailable()}
            entropyBitsNeeded={bitsOfEntropy}
            generatePlaintext={this.generatePlaintext}
            phraseGenState={this.state.phraseGenState}
            qtyOfPhraseParts={this.state.phraseParts.length}
            reset={this.reset}/>
      <Entropy bitsAvailable={this.state.entropySource.bitsAvailable()}
               bitsNeeded={bitsOfEntropy}
               phraseGenState={this.state.phraseGenState}
               onEntropyChange={this.onEntropyChange}
               setEntropySource={this.setEntropySource}
               source={this.state.entropySource}/>
    </div>;
  }

  private readonly addPhrasePart = (type: wb.PartType) => {
    this.setState((state) => ({
      phraseGenState: PhraseGenState.NOT_STARTED,
      phraseParts: state.phraseParts.concat({key: getUniqueId(), type}),
    }));
  }

  private readonly generatePlaintext = () => {
    // first, generate the final secure plaintext, before considering animation
    const phrasePartsWithPlaintext =
        this.state.phraseParts.map((part) => {
          // cryptographically secure random
          const randomIdx = this.state.entropySource.getBits(wb.partTypeProps[part.type].entropyReqBits);

          return {
            ...part,
            plaintext: wb.dictionary[part.type][randomIdx],
          };
        });

    // update component state, but this may happen asynchronously, hence don't rely on it later.
    this.setState({
      phraseParts: phrasePartsWithPlaintext,
    });

    if (isAnimationDisabled(this.state.urlSearchParams)) {
      this.setState({
        phraseGenState: PhraseGenState.GENERATED,
      });
    } else {
      this.setState({
        phraseGenState: PhraseGenState.ANIMATING,
      });

      animatePhrase(
          phrasePartsWithPlaintext,
          this.onAnimationUpdatePhraseParts,
          this.onAnimationFinish,
      );
    }
  }

  private readonly onAnimationFinish = () => {
    this.setState({
      phraseGenState: PhraseGenState.GENERATED,
    });
  }

  private readonly onAnimationUpdatePhraseParts = (newParts: IPartProps[]) => {
    this.setState({
      phraseParts: newParts,
    });
  }

  private readonly onEntropyChange = () => {
    this.setState((state) => ({
      entropyBitsAvailable: state.entropySource.bitsAvailable(),
    }));
  }

  private readonly reset = () => {
    this.setState((state) => ({
      phraseGenState: PhraseGenState.NOT_STARTED,
      phraseParts: [],
    }));
  }

  private readonly setEntropySource = (source: IEntropySource) => {
    this.setState((state) => ({
      entropyBitsAvailable: source.bitsAvailable(),
      entropySource: source,
    }));
  }

  private readonly setPhraseParts = (types: wb.PartType[]) => {
    this.setState({
      phraseGenState: PhraseGenState.NOT_STARTED,
      phraseParts: types.map((type) => ({key: getUniqueId(), type})),
    });
  }
}
