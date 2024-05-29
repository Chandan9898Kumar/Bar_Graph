import React, { memo } from "react";
import "./toolTip.css";
import PropTypes from "prop-types";
const ToolTip = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );
};

ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(ToolTip);
