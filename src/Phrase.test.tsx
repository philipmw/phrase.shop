import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { Phrase } from "./Phrase";

configure({ adapter: new Adapter() });

describe("Phrase", () => {
  it("renders a welcome div when there are no parts", () => {
    const wrapper = shallow(<Phrase isGenerated={false} parts={[]}/>);
    expect(wrapper.type())
      .toBe("div");
    expect(wrapper.is("#welcome"))
      .toBeTruthy();
    expect(wrapper.text())
      .toMatch(/welcome to phrase shop/);
  });
});
