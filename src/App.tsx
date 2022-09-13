import { Component } from "preact";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { getUrlSearchParams } from "./featureflags";
import { IEntropySource } from "./IEntropySource";
import { Menu } from "./Menu";
import { Phrase, PhraseGenState } from "./Phrase";
import { PhrasePartUiProps } from "./PhrasePartUi";
import { animatePhrase } from "./phraseAnimation";
import * as wb from "./wordbanks";
import {generatePhrasePlain, PhraseStruct} from "./logic/phrase";
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
      phraseGenState: PhraseGenState.NOT_STARTED,
      phraseStruct: makePhraseSimple(),
      phrasePartsUiProps: makePhrasePartUiProps(makePhraseSimple()),
      urlSearchParams: getUrlSearchParams(),
    };

    this.generatePlaintext();
  }

  public render() {
    const bitsOfEntropy = this.state.phraseStruct.order.reduce(
      (acc, word) => (acc + wb.partTypeProps[word.getPartType()].entropyReqBits), 0);

    return <div>
      <Phrase genState={this.state.phraseGenState}
              phraseStruct={this.state.phraseStruct}
              ppUiProps={this.state.phrasePartsUiProps}/>
      <Menu setPhraseStruct={this.setPhraseStruct}
            entropyBitsAvailable={this.state.entropySource.bitsAvailable()}
            entropyBitsNeeded={bitsOfEntropy}
            phraseGenState={this.state.phraseGenState}/>
      <Entropy bitsAvailable={this.state.entropySource.bitsAvailable()}
               bitsNeeded={bitsOfEntropy}
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
        phraseGenState: PhraseGenState.ANIMATING,
      };
    });
  }

  private readonly onAnimationFinish = () => {
    this.setState({
      phraseGenState: PhraseGenState.GENERATED,
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
    const newPpUiProps = makePhrasePartUiProps(phraseStruct);
    this.setState(() => ({
      phraseGenState: PhraseGenState.NOT_STARTED,
      phraseStruct,
      phrasePartsUiProps: newPpUiProps,
    }));
    this.generatePlaintext();
  }
}
