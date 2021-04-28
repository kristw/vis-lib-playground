import embed from "vega-embed";
import bitcoinData from "../data/bitcoin";

/* Example https://vega.github.io/vega-lite/examples/bar.html */

embed("#vega-lite-example", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    values: bitcoinData
  },
  mark: "bar",
  width: 600,
  height: 200,
  encoding: {
    x: { field: "Date", scale: { type: "utc" }, type: "temporal" },
    y: { field: "Close", type: "quantitative" }
  }
});
