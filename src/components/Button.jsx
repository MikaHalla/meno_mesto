import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Button = () => {
  const { nextTurn, categories } = useContext(AppContext);
  return (
    <button
      className="button-next-turn"
      onClick={() => nextTurn()}
      disabled={categories.length === 0}
    >
      {categories.length === 0 ? '0 CATEGORIES' : 'NEXT'}
    </button>
  );
};
export default Button;
