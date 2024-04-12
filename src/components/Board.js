// Author: Ina Räisänen
// Date: 13.04.2024
// Following a tutorial by Thomas Weibenfalk
import React from "react";
import Square from "./Square";

// Creating 9 squares
const style = {
  border: "4px solid #fb4e90",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)", // Creating a 3x3 board using the CSS GridTemplate
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
