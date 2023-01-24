import React from "react";
import "./ColorBlock.css";

const ColorBlock = ({ color }) => {
  return <div className="ColorBlock" style={{ backgroundColor: color }}></div>;
};

export default ColorBlock;
