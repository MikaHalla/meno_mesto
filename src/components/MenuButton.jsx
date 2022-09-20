import { useContext } from 'react';
import AppContext from '../context/AppContext';

const MenuButton = ({ text, action, activeStyle }) => {
  const { difficulty } = useContext(AppContext);
  return (
    <h2
      style={
        activeStyle === difficulty
          ? { textDecoration: 'underline' }
          : { color: 'lightgray' }
      }
      onClick={action}
    >
      {text}
    </h2>
  );
};
export default MenuButton;
