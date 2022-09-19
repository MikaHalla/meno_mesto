import { createContext, useState } from 'react';
import { categories } from '../constants/categories';
import { letters } from '../constants/letters';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [letter, setLetter] = useState('');
  const [category, setCategory] = useState('');

  const randomNumber = (max) => Math.floor(Math.random() * max);

  const nextTurn = () => {
    setLetter(letters[randomNumber(letters.length)]);
    setCategory(categories[randomNumber(categories.length)]);
  };

  return (
    <AppContext.Provider value={{ letter, category, nextTurn }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
