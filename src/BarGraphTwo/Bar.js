import React, { useState } from "react";

const Bar = ({ barData }) => {
  const [isHover, setIsHover] = useState(false);

  const style = {
    backgroundColor: barData.colour,
    height: `${(150 / 60) * barData.ticketCount}px`,
    "--to-height": `${(150 / 60) * barData.ticketCount}px`,
    "--from-height": "0px",
  };

  //console.log(style)

  const handleMouseHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className="bar"
      style={style}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <label
        className="bar-label"
        style={{ display: isHover ? "block" : "none" }}
      >{`${barData.name} - ${barData.ticketCount}`}</label>
    </div>
  );
};

export default Bar;
