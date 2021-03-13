import React, { createContext, useState } from "react";

/**
 * user: array do usuario
 * repos: array dos repositorios do usuario
 * variable: olha se o botao clicado foi o Repos ou Starred, para renderizar a lista
 * setUser: guarda o result do usuario no array user
 * setRepos: guarda o result do repositorio no array repo
 * razRepos: limpa o contexto do array repos
 * setVariable: recebe a string 'starred' ou 'repos' do fetch em: components/search/index
 */

const defaultValue = {
  user: {},
  repos: {},
  variable: {},
  setUser: () => {},
  setRepos: () => {},
  razRepos: () => {},
  setVariable: () => {},
};

export const UserContext = createContext(defaultValue);

export const UserContextProvider = ({ children }) => {
  /* Hooks para o uso */
  const [user, setUser] = useState(defaultValue);
  const [repos, setRepos] = useState(defaultValue);
  const [variable, setVariable] = useState(defaultValue);

  /* Limpa o array repos */
  const razRepos = () => {
    setRepos(defaultValue);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        repos,
        setRepos,
        razRepos,
        variable,
        setVariable,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
