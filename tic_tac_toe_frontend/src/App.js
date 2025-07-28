import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';

// PUBLIC_INTERFACE
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;
    
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  return (
    <div className="App">
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <GameStatus 
          winner={winner}
          currentPlayer={isXNext ? 'X' : 'O'}
          isDraw={isDraw}
        />
        <GameBoard 
          squares={squares}
          onSquareClick={handleSquareClick}
        />
        <button 
          className="restart-button"
          onClick={handleRestart}
          aria-label="Restart game"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default App;
