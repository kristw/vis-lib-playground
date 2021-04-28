import rough from "roughjs/bin/rough";
import bitcoinData from "../data/bitcoin";

/* Initialize variables */
const width = 600;
const height = 200;
const padding = 4;
const barWidth = width / bitcoinData.length;
const max = Math.max(...bitcoinData.map((d) => d.Close));

/* Update canvas size */
const canvas = document.getElementById("rough-example");
canvas.setAttribute("width", width + padding * 2);
canvas.setAttribute("height", height + padding * 2);
const rc = rough.canvas(canvas);

/* Test drawing simple rectangle */
/* Documentation https://github.com/rough-stuff/rough */
// rc.rectangle(10, 10, 200, 100); // x, y, width, height

bitcoinData.forEach((row, i) => {
  const x = i * barWidth + padding;
  const barHeight = (height * row.Close) / max;
  const y = height - barHeight + padding;
  rc.rectangle(x, y, barWidth, barHeight, { roughness: 0.5, fill: "blue" });
});
