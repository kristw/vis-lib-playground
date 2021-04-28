import { Chart, registerables } from "chart.js";
import bitcoinData from "../data/bitcoin";

const width = 600;
const height = 200;
const canvas = document.createElement("canvas");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
document.getElementById("chartjs-example").appendChild(canvas);
const ctx = canvas.getContext("2d");

Chart.register(...registerables);
new Chart(ctx, {
  type: "bar",
  data: {
    labels: bitcoinData.map((d) => d.Day),
    datasets: [
      {
        label: "Price (USD)",
        data: bitcoinData.map((d) => d.Close),
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
