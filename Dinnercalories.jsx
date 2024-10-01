import React, { createContext, useState } from 'react';

export const Dinnercalories = createContext();

export const DinnerProvider = ({ children }) => {
  const [sum3, setSum] = useState(null);

  return (
    <Dinnercalories.Provider value={{ sum3, setSum}}>
      {children}
    </Dinnercalories.Provider>
  );
};
