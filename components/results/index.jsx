import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { Container } from "./styles";
import Buttons from "../buttons";
import CardRepo from "../cardRepo.jsx";

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
              <Card.Text>Local : {card.location}</Card.Text>
              <Buttons />
              <CardRepo />
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
