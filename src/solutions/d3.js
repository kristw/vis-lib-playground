import * as d3 from "d3";
import bitcoinData from "../data/bitcoin";

/* Initialize variables */
const width = 600;
const height = 200;
const padding = 40;

const svg = d3
  .select("#d3-example")
  .append("svg")
  .attr("width", width + padding * 2)
  .attr("height", height + padding * 2);

const xScale = d3
  .scaleBand()
  .domain(bitcoinData.map((d) => d.Date))
  .range([0, width]);
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(bitcoinData, (d) => d.Close)])
  .range([height, 0]);

svg
  .selectAll("rect")
  .data(bitcoinData)
  .enter()
  .append("rect")
  .attr("x", (d) => padding + xScale(d.Date))
  .attr("y", (d) => padding + yScale(d.Close))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => height - yScale(d.Close))
  .style("stroke", "black")
  .style("fill", "steelblue");

svg
  .append("g")
  .attr("transform", `translate(${padding}, ${padding})`)
  .call(d3.axisLeft(yScale));

svg
  .append("g")
  .attr("transform", `translate(${padding}, ${padding + height})`)
  .call(
    d3.axisBottom(
      d3
        .scaleUtc()
        .domain(d3.extent(bitcoinData, (d) => d.Date))
        .range([0, width])
    )
  );
