import React from "react";
import ColorBlock from "./ColorBlock";
import "./Colors.css";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <>
      <Link to="/colors/new" className="Colors-link">
        <button>I want to add a new color</button>
      </Link>
      <h1 className="Colors-h1">Here are all colors we have right now</h1>
      <div className="Colors-allcolors">
        {colors.map((color, idx) => (
          <Link to={`/colors/${color}`} key={idx}>
            <ColorBlock color={color} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Colors;
