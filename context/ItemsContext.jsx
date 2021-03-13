import React, { createContext, useState } from "react";

const defaultValue = {
  items: {},
  repos: {},
  variable: {},
  setItems: () => {},
  setRepos: () => {},
  razRepos: () => {},
  setVariable: () => {},
};

export const ItemsContext = createContext(defaultValue);

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(defaultValue);
  const [repos, setRepos] = useState(defaultValue);
  const [variable, setVariable] = useState(defaultValue);

  const razRepos = () => {
    setRepos(defaultValue);
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        repos,
        setRepos,
        razRepos,
        variable,
        setVariable,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
