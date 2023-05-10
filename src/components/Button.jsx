import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Button = () => {
  const { nextTurn, categories, letter } = useContext(AppContext);
  return (
    <button
      className="button-next-turn"
      onClick={() => nextTurn()}
      disabled={categories.length === 0}
    >
      {letter === null
        ? 'START'
        : categories.length === 0
        ? 'NO CATEGORIES'
        : 'NEXT'}
    </button>
  );
};
export default Button;
