import React from 'react';

const GameBoard = ({ squares, onSquareClick }) => {
  return (
    <div className="game-board">
      {squares.map((value, index) => (
        <button
          key={index}
          className={`board-square ${value ? 'filled' : ''}`}
          onClick={() => onSquareClick(index)}
          disabled={value}
          aria-label={`Square ${index + 1}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
