import React, { useEffect, useState } from 'react';
import './Board.css';

const Status = ({ cpuBoard, playerBoard, currentPlayer, lastShotHit }) => {
  const [winner, setWinner] = useState(null);
  const totalLife = 17;

  const calculateLife = (board) => {
    return board.flat().filter(cell => cell === 1).length;
  };

  useEffect(() => {
    const cpuLife = calculateLife(cpuBoard);
    const playerLife = calculateLife(playerBoard);
    if (cpuLife === 0) {
      setWinner('Player');
    } else if (playerLife === 0) {
      setWinner('CPU');
    }
  }, [cpuBoard, playerBoard]);

  const cpuLifePercentage = (calculateLife(cpuBoard) / totalLife) * 100;
  const playerLifePercentage = (calculateLife(playerBoard) / totalLife) * 100;

  return (
    <div className="status">
      <div className="life-container">
        <span>Flota CPU: {calculateLife(cpuBoard)}</span>
        <progress className="life-bar" value={cpuLifePercentage} max="100"></progress>
      </div>
      <div className="life-container">
        <span>Flota Jugador: {calculateLife(playerBoard)}</span>
        <progress className="life-bar" value={playerLifePercentage} max="100"></progress>
      </div>
      {winner && <div className="winner-message">{winner === 'Player' ? 'Jugador gana!' : 'CPU gana!'}</div>}
    </div>
  );
};

export default Status;
