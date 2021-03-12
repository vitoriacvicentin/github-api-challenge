import React, { createContext, useState } from "react";

const defaultValue = {
  items: {},
  repos: {},
  setItems: () => {},
  setRepos: () => {},
  razRepos: () =>{},
};

export const ItemsContext = createContext(defaultValue);

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(defaultValue);
  const [repos, setRepos] = useState(defaultValue);

  const razRepos = () => {
    setRepos(defaultValue);
  };

  return (
    <ItemsContext.Provider
      value={{ items, setItems, repos, setRepos, razRepos }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
