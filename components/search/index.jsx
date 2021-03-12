import { Header, Div } from "./styles";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const initialState = {
  user: "",
};
export const Search = () => {
  const [state, setState] = useState(initialState);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getUser = () => {
    fetch(`https://api.github.com/users/${state.user}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={getUser}>
                <BsSearch size={20} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Div>
      </Header>
    </>
  );
};

export default Search;
