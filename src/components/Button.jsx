import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Button = () => {
  const { nextTurn } = useContext(AppContext);
  return (
    <button className="button-next-turn" onClick={() => nextTurn()}>
      NEXT
    </button>
  );
};
export default Button;
