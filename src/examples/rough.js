import rough from "roughjs/bin/rough";
import bitcoinData from "../data/bitcoin";

/* Initialize variables */
const width = 600;
const height = 200;
const padding = 4;

/* Update canvas size */
const canvas = document.getElementById("rough-example");
canvas.setAttribute("width", width + padding * 2);
canvas.setAttribute("height", height + padding * 2);
const rc = rough.canvas(canvas);

/* Test drawing simple rectangle */
/* Documentation https://github.com/rough-stuff/rough */

/* TODO: Change this to draw 100x150 rectangle at x=20 y=20 */
/* TODO2: Fill the rectangle with some colors and the pattern of your choice. */
rc.rectangle(10, 10, 40, 40); // x, y, width, height

/* TODO3: Uncomment below */

// const barWidth = width / bitcoinData.length;
// const max = Math.max(...bitcoinData.map((d) => d.Close));
// bitcoinData.forEach((row, i) => {
//   const barHeight = (row.Close / max) * height;
//   /* TODO4: Modify the computation of x and y */
//   const x = 0;
//   const y = 0;
//   rc.rectangle(x, y, barWidth, barHeight);
// });

/* Challenge 1: Change color of the rectangle to
 * - green if d.Close > d.Open
 * - red if d.Close < d.Open
 */
