import { useContext } from 'react';
import AppContext from '../context/AppContext';
import MenuButton from './MenuButton';
import CategoryButton from './CategoryButton';

const Settings = () => {
  const {
    mobileMenu,
    tgMobileMenu,
    categories,
    increaseDifficulty,
    decreaseDifficulty,
  } = useContext(AppContext);

  return (
    <div className={`settings-panel ${mobileMenu && 'visible'}`}>
      <i className="fa-solid fa-xmark" onClick={tgMobileMenu}></i>
      <div className="difficulty">
        <MenuButton
          text="ABCD"
          action={decreaseDifficulty}
          activeStyle="easy"
        />
        <MenuButton
          text="ĎChQW"
          action={increaseDifficulty}
          activeStyle="hard"
        />
      </div>
      <div className="categories">
        {categories.map((category) => (
          <CategoryButton key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
export default Settings;
