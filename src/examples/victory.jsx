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
      domainPadding={{ x: 50, y: [0, 20] }}
      scale={{ x: "time" }}
    >
      <VictoryBar
        data={[
          { x: new Date(1986, 1, 1), y: 2 },
          { x: new Date(1996, 1, 1), y: 3 },
          { x: new Date(2006, 1, 1), y: 5 },
          { x: new Date(2016, 1, 1), y: 4 }
        ]}
      />
    </VictoryChart>
  );
}
