import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

/* Botões de ação Repos e Starred */

export const Buttons = () => {
  const userContext = useContext(UserContext);

  const user = userContext.user.login;

  const getRepo = async (abortController = new AbortController()) => {
    userContext.razRepos();
    return await fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then((result) => {
        userContext.setRepos(result);
        userContext.setVariable("repo");
      })
      .catch((error) => console.log(error), abortController);
  };

  const getRepoStarred = async (abortController = new AbortController()) => {
    userContext.razRepos();
    userContext.setVariable("starred");
    fetch(`https://api.github.com/users/${user}/starred`)
      .then((res) => res.json())
      .then((result) => {
        userContext.setRepos(result);
      })
      .catch((error) => console.log(error), abortController);
  };

  return (
    <>
      <div>
        <Button variant="warning" onClick={getRepo}>
          {"Repos "}
        </Button>
        <Button variant="warning" onClick={getRepoStarred}>
          {"Starred"}
        </Button>
      </div>
    </>
  );
};

export default Buttons;
