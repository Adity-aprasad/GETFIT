import React, { createContext, useState } from 'react';

export const CaloriesContext = createContext();

export const CaloriesProvider = ({ children }) => {
  const [calories, setCalories] = useState(null);

  return (
    <CaloriesContext.Provider value={{ calories, setCalories }}>
      {children}
    </CaloriesContext.Provider>
  );
};
