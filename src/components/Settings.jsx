import { useContext } from 'react';
import AppContext from '../context/AppContext';
import MenuButton from './MenuButton';
import CategoryButton from './CategoryButton';
import { defaultCategories } from '../constants/categories';

const Settings = () => {
  const {
    mobileMenu,
    tgMobileMenu,
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
        <span></span>
        <MenuButton
          text="ĎChQW"
          action={increaseDifficulty}
          activeStyle="hard"
        />
      </div>
      <div className="categories">
        {defaultCategories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            id={category}
          />
        ))}
      </div>
    </div>
  );
};
export default Settings;
