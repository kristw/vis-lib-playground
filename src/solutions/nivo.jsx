/* Documentation
 * https://nivo.rocks/bar/
 */

import { ResponsiveBar } from "@nivo/bar";
import bitcoinData from "../data/bitcoin";

export default function NivoExample() {
  return (
    <div style={{ width: 600, height: 200 }}>
      <ResponsiveBar
        data={bitcoinData}
        keys={["Close"]}
        indexBy="Day"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        enableLabel={false}
      />
    </div>
  );
}
