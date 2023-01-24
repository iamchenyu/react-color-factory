import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Color from "./Color";
import ColorForm from "./ColorForm";
import Colors from "./Colors";
import INITIAL_COLORS from "./helper";

const ColorRoutes = () => {
  const [colors, setColors] = useState(INITIAL_COLORS);

  const addColors = (color) => {
    setColors((colors) => [color, ...colors]);
  };

  return (
    <Routes>
      <Route path="/colors/:name" element={<Color colors={colors} />} />
      <Route path="/colors/new" element={<ColorForm add={addColors} />} />
      <Route path="/colors" element={<Colors colors={colors} />} />
      <Route path="*" element={<Navigate to="/colors" replace />} />
    </Routes>
  );
};

export default ColorRoutes;
