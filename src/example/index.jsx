import { render } from "react-dom";
import "./rough";
import "./d3";
import "./vega-lite";
import "./echarts";

import ReactRoughExample from "./react-rough";
import VictoryExample from "./victory";

render(<ReactRoughExample />, document.getElementById("react-rough-example"));
render(<VictoryExample />, document.getElementById("victory-example"));
