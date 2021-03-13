import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

/* Botões de ação Repos e Starred */
export const Buttons = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const userContext = useContext(UserContext);

  const user = userContext.user.login;

  const getRepo = () => {
    userContext.razRepos();
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          userContext.setRepos(result);
          userContext.setVariable('repo');
        },

        (error) => {
          setIsLoaded(true);
        }
      );
  };

  const getRepoStarred = () => {
    userContext.razRepos();
    userContext.setVariable('starred');
    fetch(`https://api.github.com/users/${user}/starred`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          userContext.setRepos(result);
        },

        (error) => {
          setIsLoaded(true);
        }
      );
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
