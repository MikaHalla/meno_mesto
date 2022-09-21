import { useContext } from 'react';
import AppContext from '../context/AppContext';

const MenuButton = ({ text, action, activeStyle }) => {
  const { difficulty } = useContext(AppContext);
  return (
    <h1
      style={
        activeStyle === difficulty
          ? {
              borderBottom: '4px solid black',
              paddingBottom: '.2em',
            }
          : { color: 'lightgray' }
      }
      onClick={action}
    >
      {text}
    </h1>
  );
};
export default MenuButton;
