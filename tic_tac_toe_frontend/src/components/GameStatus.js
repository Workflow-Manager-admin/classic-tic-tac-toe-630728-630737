import React from 'react';

const GameStatus = ({ winner, currentPlayer, isDraw }) => {
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Game Draw!";
  } else {
    status = `Current Player: ${currentPlayer}`;
  }

  return (
    <div className="game-status">
      <h2>{status}</h2>
    </div>
  );
};

export default GameStatus;
