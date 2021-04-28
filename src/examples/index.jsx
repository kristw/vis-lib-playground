import { render } from "react-dom";

import "./rough";

import ReactRoughExample from "./react-rough";
render(<ReactRoughExample />, document.getElementById("react-rough-example"));

/* eslint-disable-next-line import/first */
import "./d3";

/* eslint-disable-next-line import/first */
import "./vega-lite";

/* eslint-disable-next-line import/first */
import "./echarts";

/* eslint-disable-next-line import/first */
import VictoryExample from "./victory";
render(<VictoryExample />, document.getElementById("victory-example"));

/* eslint-disable-next-line import/first */
import NivoExample from "./nivo";
render(<NivoExample />, document.getElementById("nivo-example"));

/* eslint-disable-next-line import/first */
import "./chart";
