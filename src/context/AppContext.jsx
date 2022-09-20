import { createContext, useEffect, useState } from 'react';
import { defaultCategories } from '../constants/categories';
import { easyLetters, hardLetters } from '../constants/letters';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [letters, setLetters] = useState(easyLetters);
  const [difficulty, setDifficulty] = useState('easy');
  const [categories, setCategories] = useState(defaultCategories);
  const [letter, setLetter] = useState('');
  const [category, setCategory] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const randomNumber = (max) => Math.floor(Math.random() * max);

  const nextTurn = () => {
    let randomLetter = letters[randomNumber(letters.length)];
    randomLetter === '1' && (randomLetter = 'Ch');
    setLetter(randomLetter);
    setCategory(categories[randomNumber(categories.length)]);
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

  return (
    <AppContext.Provider
      value={{
        letter,
        category,
        categories,
        nextTurn,
        mobileMenu,
        tgMobileMenu,
        difficulty,
        increaseDifficulty,
        decreaseDifficulty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
