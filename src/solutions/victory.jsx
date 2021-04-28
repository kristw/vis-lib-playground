/* Documentation
 * https://formidable.com/open-source/victory/gallery/alternative-events
 */

import { VictoryChart, VictoryBar, Bar, VictoryCandlestick } from "victory";
import bitcoinData from "../data/bitcoin";

export default function VictoryExample() {
  const width = 600;
  const height = 200;

  return (
    <VictoryChart
      height={height}
      width={width}
      domainPadding={{ x: 5, y: [0, 20] }}
      scale={{ x: "time" }}
    >
      <VictoryBar
        dataComponent={<Bar />}
        data={bitcoinData.map((d) => ({
          x: d.Date,
          y: d.Close
        }))}
      />
      {/* <VictoryCandlestick
        candleColors={{ positive: "#25D561", negative: "#c43a31" }}
        data={bitcoinData.map((d) => ({
          x: d.Date,
          close: d.Close,
          open: d.Open,
          high: d.High,
          low: d.Low
        }))}
      /> */}
    </VictoryChart>
  );
}
