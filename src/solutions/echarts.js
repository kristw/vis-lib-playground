import { init } from "echarts";
import bitcoinData from "../data/bitcoin";

const container = document.getElementById("echarts-example");
const width = 600;
const height = 200;
container.style.width = `${width}px`;
container.style.height = `${height}px`;

const myChart = init(container);

myChart.setOption({
  tooltip: {},
  xAxis: {
    data: bitcoinData.map((d) => d.Date)
  },
  yAxis: {},
  series: [
    {
      name: "Sales",
      type: "bar",
      data: bitcoinData.map((d) => d.Close)
    }
  ]
});
