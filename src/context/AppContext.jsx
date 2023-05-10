import { createContext, useState } from 'react';
import { defaultCategories } from '../constants/categories';
import { easyLetters, hardLetters } from '../constants/letters';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [letters, setLetters] = useState(easyLetters);
  const [difficulty, setDifficulty] = useState('easy');
  const [categories, setCategories] = useState(defaultCategories);
  const [letter, setLetter] = useState(null);
  const [category, setCategory] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [players, setPlayers] = useState([1, 2, 3, 4]);
  const [pointAwarded, setPointAwarded] = useState(false);

  const randomNumber = (max) => Math.floor(Math.random() * max);

  const nextTurn = () => {
    let randomLetter = letters[randomNumber(letters.length)];
    randomLetter === '1' && (randomLetter = 'Ch');
    setLetter(randomLetter);
    setCategory(categories[randomNumber(categories.length)]);
    setPointAwarded(false);
  };

  const tgMobileMenu = () => setMobileMenu(!mobileMenu);

  const increaseDifficulty = () => {
    setDifficulty('hard');
    setLetters(hardLetters);
  };
  const decreaseDifficulty = () => {
    setDifficulty('easy');
    setLetters(easyLetters);
  };

  const tgCategory = (category) => {
    const clickedCategory = categories.find(
      (element) => element === category
    );
    if (clickedCategory) {
      const filteredCategories = categories.filter(
        (element) => element !== clickedCategory
      );
      setCategories(filteredCategories);
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        letter,
        category,
        categories,
        players,
        nextTurn,
        mobileMenu,
        tgMobileMenu,
        difficulty,
        increaseDifficulty,
        decreaseDifficulty,
        tgCategory,
        pointAwarded,
        setPointAwarded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
