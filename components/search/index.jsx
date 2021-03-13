import { Header, Div } from "./styles";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useState, useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const initialState = {
  user: "",
};

export const Search = () => {
  const [state, setState] = useState(initialState);
  const [isLoaded, setIsLoaded] = useState(false);
  const itemsContext = useContext(ItemsContext);

  const getUser = () => {
    itemsContext.razRepos();
    setIsLoaded(true);
    fetch(`https://api.github.com/users/${state.user}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          itemsContext.setItems(result);
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  };

  return (
    <>
      <Header>
        <Div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Procure um usuario..."
              onChange={(event) =>
                setState({ user: event.currentTarget.value })
              }
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setState({ user: event.currentTarget.value });
                  getUser();
                }
              }}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={getUser}>
                {isLoaded === true ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role={isLoaded}
                    aria-hidden="true"
                  />
                ) : (
                  <BsSearch size={20} />
                )}
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Div>
      </Header>
    </>
  );
};

export default Search;
