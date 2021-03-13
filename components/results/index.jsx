import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { Container } from "./styles";
import Buttons from "../buttons";
import CardRepos from "../cardRepos/index";

export const Results = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
  return (
    <>
      {card?.name ? (
        <Container>
          <Card style={{ width: "18rem"}} border="warning">
            <Card.Img variant="top" src={card.avatar_url} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text><a>Local: </a>{card.location}</Card.Text>
              <Buttons />
              <CardRepos />
            </Card.Body>
          </Card>
        </Container>
      ) : (
        <Container>
          <h1>Pesquise um usuario</h1>
        </Container>
      )}
    </>
  );
};

export default Results;
