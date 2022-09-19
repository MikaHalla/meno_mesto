import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [letter, setLetter] = useState('C');

  return (
    <AppContext.Provider value={{ letter }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
