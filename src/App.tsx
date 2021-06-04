import { h } from "preact";
import { PureComponent } from "preact/compat";

import { ComputerEntropySource } from "./ComputerEntropySource";
import { Entropy } from "./Entropy";
import { getUrlSearchParams, isAnimationEnabled } from "./featureflags";
import { Menu } from "./Menu";
import { IPartProps, Phrase, PhraseGenState } from "./Phrase";
import {
  ANIMATION_TIMEOUT_MS,
  DISAMBIG_MODULO,
  getInsecureRandomBits,
  IAnimationState,
  MAX_TEMP_WORDS,
} from "./phraseAnimation";
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

  /**
   * For ow, animation is too tightly coupled with this `App` component.
   * Biggest problem is that animation needs to repeatedly read and write this component's state.
   */

  private readonly animateAllWords = (animStateStart?: IAnimationState) => {
    let animState: IAnimationState = animStateStart !== undefined
        ? animStateStart
        : { phrasePartIdx: 0, showingTempWordNum: 0 };

    this.setState((state) => ({
      phraseParts: state.phraseParts.map((part, i) => {
        if (i < animState.phrasePartIdx) {
          // no change to this word because it's already been finalized
          return part;
        }

        if (animState.showingTempWordNum >= MAX_TEMP_WORDS && i === animState.phrasePartIdx) {
          // finalize this word
          const randomIdx = this.state.entropySource.getBits(wb.partTypeProps[part.type].entropyReqBits);

          return {
            ...part,
            plaintext: {
              isFinal: true,
              text: wb.dictionary[part.type][randomIdx],
            },
          };
        }

        {
          // this word continues animating
          const randomIdx = getInsecureRandomBits(wb.partTypeProps[part.type].entropyReqBits);

          return {
            ...part,
            plaintext: {
              isFinal: false,
              tempDisambig: animState.showingTempWordNum % DISAMBIG_MODULO,
              text: wb.dictionary[part.type][randomIdx],
            },
          };
        }
      }),
    }));

    if (animState.showingTempWordNum >= MAX_TEMP_WORDS) {
      // advance to the next word
      animState = {
        phrasePartIdx: animState.phrasePartIdx + 1,
        showingTempWordNum: 0,
      };
    } else {
      animState = {
        phrasePartIdx: animState.phrasePartIdx,
        showingTempWordNum: animState.showingTempWordNum + 1,
      };
    }

    if (animState.phrasePartIdx >= this.state.phraseParts.length) {
      // finished
      this.setState((state) => ({
        phraseGenState: PhraseGenState.GENERATED,
      }));
    } else {
      // not finished yet
      window.setTimeout(
          () => {
            this.animateAllWords(animState);
          },
          ANIMATION_TIMEOUT_MS);
    }
  }

  private readonly animateOneWordAtATime = (animStateStart?: IAnimationState) => {
    let animState: IAnimationState = animStateStart !== undefined
        ? animStateStart
        : { phrasePartIdx: 0, showingTempWordNum: 0 };

    if (animState.showingTempWordNum >= MAX_TEMP_WORDS) {
      // finalize this word and advance to the next word
      this.setState((state) => ({
        phraseParts: state.phraseParts.map((part, i) => {
          if (i === animState.phrasePartIdx) {
            // cryptographically secure random
            const randomIdx = this.state.entropySource.getBits(wb.partTypeProps[part.type].entropyReqBits);

            return {
              ...part,
              plaintext: {
                isFinal: true,
                text: wb.dictionary[part.type][randomIdx],
              },
            };
          }

          return part;
        }),
      }));
      animState = {
        phrasePartIdx: animState.phrasePartIdx + 1,
        showingTempWordNum: 0,
      };
    }

    if (animState.phrasePartIdx < this.state.phraseParts.length) {
      // select new random word
      this.setState((state) => ({
        phraseParts: state.phraseParts.map((part, i) => {
          if (i === animState.phrasePartIdx) {
            const randomIdx = getInsecureRandomBits(wb.partTypeProps[part.type].entropyReqBits);

            return {
              ...part,
              plaintext: {
                isFinal: false,
                tempDisambig: animState.showingTempWordNum % DISAMBIG_MODULO,
                text: wb.dictionary[part.type][randomIdx],
              },
            };
          }

          return part;
        }),
      }));
      animState = {
        phrasePartIdx: animState.phrasePartIdx,
        showingTempWordNum: animState.showingTempWordNum + 1,
      };
    }

    if (animState.phrasePartIdx >= this.state.phraseParts.length) {
      // finished
      this.setState((state) => ({
        phraseGenState: PhraseGenState.GENERATED,
      }));
    } else {
      // not finished yet
      window.setTimeout(
          () => {
            this.animateOneWordAtATime(animState);
          },
          ANIMATION_TIMEOUT_MS);
    }
  }

  private readonly generatePlaintext = () => {
    if (isAnimationEnabled(this.state.urlSearchParams)) {
      this.setState({
        phraseGenState: PhraseGenState.ANIMATING,
        phraseParts: this.state.phraseParts.map((part) => ({
          ...part,
          plaintext: undefined,
        })),
      });
      this.animateAllWords();
    } else {
      this.setState((state) => ({
        phraseGenState: PhraseGenState.GENERATED,
        phraseParts: state.phraseParts.map((part) => {
          // cryptographically secure random
          const randomIdx = this.state.entropySource.getBits(wb.partTypeProps[part.type].entropyReqBits);

          return {
            ...part,
            plaintext: {
              isFinal: true,
              text: wb.dictionary[part.type][randomIdx],
            },
          };
        }),
      }));
    }
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
