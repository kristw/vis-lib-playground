import embed from "vega-embed";
import bitcoinData from "../data/bitcoin";

/* Example https://vega.github.io/vega-lite/examples/bar.html */

embed("#vega-lite-example", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    /* TODO: Change data to bitcoinData */
    values: [
      { day: "Mon", value: 120 },
      { day: "Tue", value: 200 },
      { day: "Wed", value: 150 },
      { day: "Thu", value: 70 },
      { day: "Fri", value: 110 }
    ]
  },
  mark: "bar",
  width: 600,
  height: 200,
  /* TODO: Update the encoding to display bitcoin price over time */
  encoding: {
    x: { field: "day", type: "nominal" },
    y: { field: "value", type: "quantitative" }
    /* Challenge 1: Try customizing the bar color */
  }
});
