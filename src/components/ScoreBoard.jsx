import { useContext } from 'react';
import AppContext from '../context/AppContext';
import ScoreCounter from './ScoreCounter';

const ScoreBoard = () => {
  const { players } = useContext(AppContext);
  return (
    <ul className="score-board">
      {players.map((player) => (
        <ScoreCounter />
      ))}
    </ul>
  );
};
export default ScoreBoard;
