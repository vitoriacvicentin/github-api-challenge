import { Div, Header } from "./styles";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
/* 
  Barra de busca da pagina principal
  Contexto: foi usado para armazenar os dados do result do fetch
  isLoaded: seta o carregamento do Spinner
*/

const initialState = {
  user: "",
};

export const Search = () => {
  const [state, setState] = useState(initialState);
  const [isLoaded, setIsLoaded] = useState(false);
  const userContext = useContext(UserContext);

  const getUser = async (abortController = new AbortController()) => {
    userContext.razRepos();
    setIsLoaded(true);
    return await fetch(`https://api.github.com/users/${state.user}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(false);
        userContext.setUser(result);
      })
      .catch((error) => console.log(error), abortController);
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
