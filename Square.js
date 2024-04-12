import React from "react";

const style = {
  background: "#f3fcff",
  border: "2px solid #e1dbe0",
  fontSize: "30px",
  fontWeight: "800",
  curor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
