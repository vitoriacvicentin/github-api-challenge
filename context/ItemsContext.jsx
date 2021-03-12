import React, { createContext, useState } from "react";

const defaultValue = {
  items: {},
  repos:{},
  setItems: () => {},
  setRepos : () =>{}
};

export const ItemsContext = createContext(defaultValue);

export const ItemsContextProvider = ({ children }) => {
  
  const [items, setItems] = useState(defaultValue);
  const [repos, setRepos] = useState(defaultValue);

  return (
    <ItemsContext.Provider value={{ items, setItems,repos,setRepos }}>
      {children}
    </ItemsContext.Provider>
  );
};
