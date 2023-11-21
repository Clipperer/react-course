import React, { useState } from "react";

const initialAppContext = {
  count: 0,
  setCount: () => "",
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
