import * as React from "react";
import * as pp from "./PhrasePart";

interface IProps {
}

interface IState {
  parts: PartProps[]
}

interface PartProps extends pp.IProps {
  key: number;
}

export class PhraseBuilder extends React.PureComponent<IProps, IState> {
  public constructor(props) {
    super(props);
    this.state = {parts: []};
  }

  public addPhrasePart(type: pp.PartType) {
    this.setState((state) => ({
      parts: state.parts.concat({key: this.state.parts.length, type}),
    }))
  }

  public generatePlaintext() {
    this.setState((state) => ({
      parts: state.parts.map(part => { return {...part, plaintext: pp.dictionary[part.type][0]}; })
    }));
  }

  public render(): JSX.Element {
    return <div id="phrase-builder">
      {this.state.parts.map(part => <span key={part.key}><pp.PhrasePart {...part}/></span>)}
      <input type="button" onClick={() => this.addPhrasePart(pp.PartType.English)} value="+ simple english"/>
      <input type="button" onClick={() => this.addPhrasePart(pp.PartType.USState)} value="+ US state abbr"/>
      <input type="button" onClick={() => this.addPhrasePart(pp.PartType.Color)} value="+ color"/>
      <input type="button" onClick={() => this.addPhrasePart(pp.PartType.Digit)} value="+ digit"/>
      <input type="button" onClick={() => this.addPhrasePart(pp.PartType.Symbol)} value="+ symbol"/>
      <input type="button" onClick={() => this.generatePlaintext()} value="generate plaintext!"/>
    </div>
  }
}
