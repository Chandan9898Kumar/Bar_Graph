import React from "react";
import "./main.css";
import CHART_DATA from './data.js';
import Chart from "./Chart.js";
export default function MainChart() {
  return (
    <main>
      <Chart data={CHART_DATA} />
    </main>
  );
}