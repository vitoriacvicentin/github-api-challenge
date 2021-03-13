import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";

export const Buttons = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const itemsContext = useContext(ItemsContext);

  const user = itemsContext.items.login;

  const getRepo = () => {
    itemsContext.razRepos();
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          itemsContext.setRepos(result);
          itemsContext.setVariable('repo');
        },

        (error) => {
          setIsLoaded(true);
        }
      );
  };

  const getRepoStarred = () => {
    itemsContext.razRepos();
    itemsContext.setVariable('starred');
    fetch(`https://api.github.com/users/${user}/starred`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          itemsContext.setRepos(result);
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
