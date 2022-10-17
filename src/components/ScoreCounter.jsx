import { useState } from 'react';

const ScoreCounter = () => {
  const [points, setPoints] = useState(0);
  return (
    <button
      className="score-counter"
      onClick={() => setPoints((prev) => prev + 1)}
    >
      {points}
    </button>
  );
};
export default ScoreCounter;
