import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { PhraseBuilder } from "./PhraseBuilder";

configure({ adapter: new Adapter() });

describe("Heading", () => {
  it("renders a <h2>", () => {
    const wrapper = shallow(<PhraseBuilder/>);
    expect(wrapper.type())
        .toBe("h2");
  });

  it("puts the `text` attribute inside <h2>", () => {
    const wrapper = shallow(<PhraseBuilder/>);
    expect(wrapper.text())
        .toBe("blah");
  });
});
