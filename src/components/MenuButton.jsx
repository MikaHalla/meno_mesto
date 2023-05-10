import { useContext } from 'react';
import AppContext from '../context/AppContext';

const MenuButton = ({ text, action, activeStyle }) => {
  const { difficulty } = useContext(AppContext);
  return (
    <h1
      className={activeStyle === difficulty ? 'easy' : 'hard'}
      onClick={action}
    >
      {text}
    </h1>
  );
};
export default MenuButton;
