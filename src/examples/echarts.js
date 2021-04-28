import { init } from "echarts";

const container = document.getElementById("echarts-example");
const width = 600;
const height = 200;
container.style.width = `${width}px`;
container.style.height = `${height}px`;

const myChart = init(container);

myChart.setOption({
  tooltip: {},
  xAxis: {
    /* TODO: Change data to bitcoinData */
    data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
  },
  yAxis: {},
  series: [
    {
      name: "Sales",
      type: "bar",
      /* TODO: Change data to bitcoinData */
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
