import React, { createContext, useState } from 'react';

export const Lunchcalories = createContext();

export const LunchProvider = ({ children }) => {
  const [sum1, setSum] = useState(null);

  return (
    <Lunchcalories.Provider value={{ sum1, setSum}}>
      {children}
    </Lunchcalories.Provider>
  );
};
