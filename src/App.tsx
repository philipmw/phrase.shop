import { Component } from "preact";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { getUrlSearchParams } from "./featureflags";
import { IEntropySource } from "./IEntropySource";
import { Menu } from "./Menu";
import { Phrase, PhraseGenState } from "./Phrase";
import { PhrasePartUiProps } from "./PhrasePartUi";
import { animatePhrase } from "./phraseAnimation";
import {entropyNeededForPhrase, generatePhrasePlain, PhraseStruct} from "./logic/phrase";
import {makePhraseSimple} from "./logic/phraseTemplates";
import {mutatePhrasePartWithPlainValue} from "./logic/wordGenerator";
import {makePhrasePartUiProps} from "./ui/phrasePartUiProps";

interface IProps {
  entropySource?: IEntropySource;
}

interface IState {
  entropyBitsAvailable: number;
  entropySource: IEntropySource;
  phraseGenState: PhraseGenState;
  phraseStruct: PhraseStruct;
  phrasePartsUiProps: PhrasePartUiProps[];
  urlSearchParams: URLSearchParams;
}

export class App extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    const entropySource: IEntropySource =
      props.entropySource !== undefined ? props.entropySource : new ComputerEntropySource();
    this.state = {
      entropyBitsAvailable: entropySource.bitsAvailable(),
      entropySource,
      phraseGenState: "not-started",
      phraseStruct: makePhraseSimple(),
      phrasePartsUiProps: makePhrasePartUiProps(makePhraseSimple()),
      urlSearchParams: getUrlSearchParams(),
    };

    this.generatePlaintext();
  }

  public render() {
    return <div>
      <Phrase genState={this.state.phraseGenState}
              phraseStruct={this.state.phraseStruct}
              ppUiProps={this.state.phrasePartsUiProps}/>
      <Menu setPhraseStruct={this.setPhraseStruct}
            entropyBitsAvailable={this.state.entropySource.bitsAvailable()}
            phraseGenState={this.state.phraseGenState}/>
      <Entropy bitsAvailable={this.state.entropySource.bitsAvailable()}
               phraseGenState={this.state.phraseGenState}
               onEntropyChange={this.onEntropyChange}
               setEntropySource={this.setEntropySource}
               source={this.state.entropySource}/>
    </div>;
  }

  private readonly generatePlaintext = () => {
    // first, generate the final secure plaintext, before considering animation
    this.setState(prev => {
      // Putting all the side effects here and praying to the React deities.
      generatePhrasePlain(prev.phraseStruct, mutatePhrasePartWithPlainValue(prev.entropySource));

      animatePhrase(
        prev.phraseStruct,
        prev.phrasePartsUiProps,
        this.onAnimationUpdatePhraseParts,
        this.onAnimationFinish,
      );

      return {
        phraseGenState: "animating",
      };
    });
  }

  private readonly onAnimationFinish = () => {
    this.setState({
      phraseGenState: "generated",
      phrasePartsUiProps: this.state.phrasePartsUiProps.map(prop => ({
        ...prop,
        animation: undefined,
      })),
    });
  }

  private readonly onAnimationUpdatePhraseParts = (newParts: PhrasePartUiProps[]) => {
    this.setState({
      phrasePartsUiProps: newParts,
    });
  }

  private readonly onEntropyChange = () => {
    this.setState((state) => ({
      entropyBitsAvailable: state.entropySource.bitsAvailable(),
    }));
  }

  private readonly setEntropySource = (source: IEntropySource) => {
    this.setState(() => ({
      entropyBitsAvailable: source.bitsAvailable(),
      entropySource: source,
    }));
  }

  private readonly setPhraseStruct = (phraseStruct: PhraseStruct) => {
    // Verify that we have the entropy. The caller should have verified this already,
    // so if this is false, throw an exception.
    if (this.state.entropyBitsAvailable < entropyNeededForPhrase(phraseStruct)) {
      throw new Error("New phrase needs more entropy than we have available");
    }

    const newPpUiProps = makePhrasePartUiProps(phraseStruct);
    this.setState(() => ({
      phraseGenState: "not-started",
      phraseStruct,
      phrasePartsUiProps: newPpUiProps,
    }));
    this.generatePlaintext();
  }
}
