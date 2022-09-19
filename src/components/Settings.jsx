import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Settings = () => {
  const { mobileMenu, tgMobileMenu } = useContext(AppContext);
  return (
    <div className={`settings-panel ${mobileMenu && 'visible'}`}>
      <i className="fa-solid fa-xmark" onClick={tgMobileMenu}></i>
    </div>
  );
};
export default Settings;
