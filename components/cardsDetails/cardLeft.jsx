import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ContainerLeft } from "./styles";
import { BiCurrentLocation } from "react-icons/bi";

/* Card da esquerda da tela de detalhes */

export const CardLeft = () => {
  const userContext = useContext(UserContext);
  const card = userContext.user;
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
                {card?.location ? card?.location : " Não registrado"}
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
