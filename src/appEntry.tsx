import { h } from "preact";
import * as ReactDOM from "preact/compat";

import { App } from "./App";

ReactDOM.render(
  <App/>,
  document.getElementById("app-root") as HTMLElement,
);
