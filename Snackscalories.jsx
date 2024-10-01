import React, { createContext, useState } from 'react';

export const Snackscalories = createContext();

export const SnacksProvider = ({ children }) => {
  const [sum2, setSum] = useState(null);

  return (
    <Snackscalories.Provider value={{ sum2, setSum}}>
      {children}
    </Snackscalories.Provider>
  );
};
