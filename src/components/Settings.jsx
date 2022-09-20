import { useContext } from 'react';
import AppContext from '../context/AppContext';
import MenuButton from './MenuButton';

const Settings = () => {
  const {
    mobileMenu,
    tgMobileMenu,
    categories,
    difficulty,
    increaseDifficulty,
    decreaseDifficulty,
  } = useContext(AppContext);

  return (
    <div className={`settings-panel ${mobileMenu && 'visible'}`}>
      <i className="fa-solid fa-xmark" onClick={tgMobileMenu}></i>
      <div className="difficulty">
        <MenuButton
          text="ABCDEFG"
          action={decreaseDifficulty}
          activeStyle="easy"
        />
        <MenuButton
          text="ĎChQWYŽ"
          action={increaseDifficulty}
          activeStyle="hard"
        />
        {/* <h2
          style={
            difficulty === 'easy'
              ? { textDecoration: 'underline' }
              : { color: 'lightgray' }
          }
          
        ></h2>
        <h2
          style={
            difficulty === 'hard'
              ? { textDecoration: 'underline' }
              : { color: 'lightgray' }
          }
          onClick={() => increaseDifficulty()}
        ></h2> */}
      </div>
      <div className="categories">
        {categories.map((category) => (
          <MenuButton key={category} text={category} />
        ))}
      </div>
    </div>
  );
};
export default Settings;
