import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ColorBlock from "./ColorBlock";
import "./Color.css";

const Color = ({ colors }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  // useNavigate will cause rerender, to aviod this, we can use <Navigate />
  useEffect(() => {
    if (!colors.includes(name)) return navigate(-1);
  }, [colors]);

  return (
    <>
      <h1 className="Color-title">
        Hello, my name is <span style={{ color: name }}>{name}</span>
      </h1>

      <ColorBlock color={name} />

      <Link to="/colors" className="Color-link">
        <button className="Color-button">Go Back</button>
      </Link>
    </>
  );
};

export default Color;
