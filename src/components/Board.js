import React from "react";
import Square from "./Square";

// In this component, we create the 9 squares

// Creating styling
const style = {
  border: "4px solid #fb4e90",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)", // Using CSS GridTemplate, we are creating a 3x3 board
};

// Using props ("squares" & "onClick") to send values to the component
const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares?.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
