/* Documentation
 * https://formidable.com/open-source/victory/gallery/alternative-events
 */

import { VictoryChart, VictoryBar, Bar } from "victory";
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
    </VictoryChart>
  );
}
