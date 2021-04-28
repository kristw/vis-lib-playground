import React from "react";
import { ReactRough, Rectangle } from "react-rough";
import bitcoinData from "../data/bitcoin";

export default function ReactRoughExample() {
  /* Initialize variables */
  const width = 600;
  const height = 200;
  const padding = 4;
  const barWidth = width / bitcoinData.length;
  const max = Math.max(...bitcoinData.map((d) => d.Close));

  /* Documentation https://react-rough.dev.adegbuyi.me/?path=/story/basic-rough-renders--basic-canvas-rough-element */

  return (
    <ReactRough
      renderer="svg"
      width={width + padding * 2}
      height={height + padding * 2}
    >
      {/* <Rectangle x={15} y={15} width={90} height={80} /> */}
      {bitcoinData.map((row, i) => {
        const x = i * barWidth + padding;
        const barHeight = (height * row.Close) / max;
        const y = height - barHeight + padding;

        return (
          <Rectangle
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
            fill="orange"
          />
        );
      })}
    </ReactRough>
  );
}
