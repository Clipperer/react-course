import React, { useState } from "react";

const initialAppContext = {
  count: 4,
  setCount: () => {
    console.log("test");
  },
};

export const AppContext = React.createContext(initialAppContext);

export const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const appContext = {
    count,
    setCount,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};
