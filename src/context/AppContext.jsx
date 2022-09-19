import { createContext, useState } from 'react';
import { categories } from '../constants/categories';
import { letters } from '../constants/letters';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [letter, setLetter] = useState('');
  const [category, setCategory] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const randomNumber = (max) => Math.floor(Math.random() * max);

  const nextTurn = () => {
    setLetter(letters[randomNumber(letters.length)]);
    setCategory(categories[randomNumber(categories.length)]);
  };

  const tgMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <AppContext.Provider
      value={{ letter, category, nextTurn, mobileMenu, tgMobileMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
