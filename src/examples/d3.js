import * as d3 from "d3";
import bitcoinData from "../data/bitcoin";

/*
 * Example:
 * https://bl.ocks.org/d3noob/8952219
 */

/* Initialize variables */
const width = 600;
const height = 200;
const padding = 40;

/* Setup SVG */
const svg = d3
  .select("#d3-example")
  .append("svg")
  .attr("width", width + padding * 2)
  .attr("height", height + padding * 2);

/* Setup scales */
const xScale = d3
  .scaleBand()
  .domain(bitcoinData.map((d) => d.Date))
  .range([0, width]);
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(bitcoinData, (d) => d.Close)])
  .range([height, 0]);

/* Bind data to rectangle and encode rectangles */
svg
  .selectAll("rect")
  .data(bitcoinData)
  .enter()
  .append("rect")
  /* TODO: Uncomment and edit */
  // .attr("x", (d) => ...)
  // .attr("y", (d) => ...)
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => height - yScale(d.Close))
  .style("stroke", "black");

/* Challenge 1: Customize the bar colors */
/* Challenge 2: Add y-axis */
/* Challenge 3: Add x-axis */
