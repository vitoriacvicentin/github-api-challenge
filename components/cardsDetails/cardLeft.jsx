import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { ContainerLeft } from "./styles";
import { BiCurrentLocation } from "react-icons/bi";
import Link from "next/link";

export const CardLeft = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
  return (
    <>
      {card?.login && (
        <ContainerLeft>
          <Card className="card-container">
            <Card.Img variant="top" src={card?.avatar_url} />
            <Card.Body>
              <Card.Title>{card?.name}</Card.Title>
              <Card.Text>{card?.login}</Card.Text>
              <Card.Text>
                <BiCurrentLocation size={20} />
                {card?.location}
              </Card.Text>
            </Card.Body>
            <Button
              href={card?.html_url}
              variant="outline-dark"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Ir para o Github
            </Button>
          </Card>
        </ContainerLeft>
      )}
    </>
  );
};
export default CardLeft;