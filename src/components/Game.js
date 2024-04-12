// Author: Ina Räisänen
// Date: 13.04.2024
// Following a tutorial by Thomas Weibenfalk
import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "0 auto",
  textAlign: "center",
  fontWeight: "bold",
};

const Game = () => {
  // [board, setBoard] is ES6 structure
  // The board will be an array of 9 elements
  // Using React Hooks (useState) to set the state
  // The starting value is set as null, as the board is empty
  const [board, setBoard] = useState(Array(9).fill(null));
  // Creating a variable "xisNext" that defines which player's turn it's to select a square
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    // Using ES6 spreading to create a copy of the elements of the array
    // Spreading works when the state doesn't have a lot of data
    const boardCopy = [...board];
    // If the user clicks on an occupied square or if the game is won, return
    // Using 'i' to access the clicked square
    if (winner || boardCopy[i]) return;
    // Add an X or an O on the clicked square
    // Mutating the board copy array with the new value (either X or O)
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    // Setting xisNext's value to be the other player's turn
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <>
      <h1 style={{textAlign: "center"}}>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        {/* Using JSX requires curly brackets*/}
        {/*If winner is true, we show the winner. Otherwise we show who is the next player (X or O)*/}
        <p>
          {winner
            ? "Wohoo! The winner is: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
