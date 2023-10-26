import React, { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const colorChange = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div
        style={{ height: "100vh", backgroundColor: bgColor }}
        className="d-flex justify-content-evenly align-items-center w-100"
      >
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          className="btn"
          onClick={() => colorChange("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "yellow", color: "white" }}
          className="btn"
          onClick={() => colorChange("yellow")}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          className="btn"
          onClick={() => colorChange("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          className="btn"
          onClick={() => colorChange("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          className="btn"
          onClick={() => colorChange("black")}
        >
          Black
        </button>
        <button
          style={{ backgroundColor: "indigo", color: "white" }}
          className="btn"
          onClick={() => colorChange("indigo")}
        >
          Violet
        </button>
      </div>
    </>
  );
}

export default App;
