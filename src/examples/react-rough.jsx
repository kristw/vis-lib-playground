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
      {/* TODO: Change this to draw 100x150 rectangle at x=20 y=20 */}
      {/* TODO2: Fill the rectangle with some colors and the pattern of your choice. */}
      <Rectangle x={15} y={15} width={90} height={80} />
      {/* {bitcoinData.map((row, i) => {
        const barHeight = (height * row.Close) / max;
        // TODO2: Modify the computation of x and y 
        const x = 0;
        const y = 0;

        return (
          <Rectangle
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={barHeight}
          />
        );
      })} */}
    </ReactRough>
  );
}
