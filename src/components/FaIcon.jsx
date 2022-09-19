import { useContext } from 'react';
import AppContext from '../context/AppContext';

const FaIcon = () => {
  const { tgMobileMenu } = useContext(AppContext);
  return (
    <div className="fa-icon">
      <i className="fa-solid fa-gear" onClick={tgMobileMenu}></i>
    </div>
  );
};
export default FaIcon;
