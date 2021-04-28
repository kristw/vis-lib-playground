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
    /* TODO: Change data to bitcoinData */
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        /* TODO: Change data to bitcoinData */
        data: [12, 19, 3, 5, 2, 3]
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
