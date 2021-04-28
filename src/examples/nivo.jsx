/* Documentation
 * https://nivo.rocks/bar/
 */

import { ResponsiveBar } from "@nivo/bar";
import nivoData from "../data/nivoData";
import bitcoinData from "../data/bitcoin";

export default function NivoExample() {
  return (
    <div style={{ width: "600px", height: "200px", minWidth: 0 }}>
      <ResponsiveBar
        width={600}
        height={200}
        /* TODO: Change data to bitcoinData */
        data={nivoData}
        /* TODO: Update keys and index */
        keys={["fries"]}
        indexBy="country"
        margin={{ top: 20, right: 20, bottom: 40, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        enableLabel={false}
      />
    </div>
  );
}
