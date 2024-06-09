import Bar from "./Bar.js";
import React, { useState } from "react";
const Chart = ({ data }) => {
  const [toggleChart, setToggleChart] = useState(false);

  const style = {
    gridTemplateColumns: `repeat(${data.length}, 1fr)`,
    display: toggleChart ? "grid" : "none",
  };

  const handleToggle = () => {
    setToggleChart(!toggleChart);
  };

  return (
    <div className="outer-container">
      <div className="button-container">
        <button onClick={handleToggle}>Toggle Chart</button>
      </div>
      <div className="chart-container" style={style}>
        <span className="label-y">Number of tickets</span>
        <span className="label-x">Departments</span>
        {data.map((d, i) => {
          return <Bar key={d.id} barData={d} />;
        })}
      </div>
    </div>
  );
};

export default Chart;
