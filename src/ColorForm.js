import React, { useState } from "react";
import "./ColorForm.css";
import { useNavigate } from "react-router-dom";

const ColorForm = ({ add }) => {
  const [colorPicker, setColorPicker] = useState("bisque");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setColorPicker(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(e.target.color.value);
    navigate("/colors");
  };

  return (
    <form className="ColorForm" onSubmit={handleSubmit}>
      <label>Please pick a color to add to the display</label>
      <div className="ColorForm-showcolor">
        <select
          value={colorPicker}
          name="color"
          onChange={handleChange}
          style={{ backgroundColor: colorPicker }}
        >
          <option value="bisque">bisque</option>
          <option value="chocolate">chocolate</option>
          <option value="azure">azure</option>
          <option value="lavender">lavender</option>
          <option value="mediumaquamarine">mediumaquamarine</option>
          <option value="honeydew">honeydew</option>
          <option value="limegreen">limegreen</option>
          <option value="dodgerblue">dodgerblue</option>
          <option value="mediumvioletred">mediumvioletred</option>
        </select>
        <div
          style={{ backgroundColor: colorPicker }}
          className="ColorForm-block"
        ></div>
      </div>
      <button>I want try this one</button>
    </form>
  );
};

export default ColorForm;
