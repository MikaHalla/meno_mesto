import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const categories = ['meno', 'mesto', 'zviera', 'vec'];
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
