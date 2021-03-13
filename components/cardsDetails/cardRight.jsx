import { Card } from "react-bootstrap";
import { useContext } from "react";
import { ContainerRight } from "./styles";
import { ItemsContext } from "../../context/ItemsContext";
import { GoRepo } from "react-icons/go";

export const CardRight = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
  return (
    <>
      {card?.login && (
        <ContainerRight>
          <Card className="mb-2">
            <Card.Header>Detalhes</Card.Header>
            <Card.Body>
              <Card.Text>
                <span>Biografia: </span>
                {card?.bio}
              </Card.Text>
              <Card.Text>
                <span>Email: </span>
                {card?.email}
              </Card.Text>
              <Card.Text>
                <span>Blog: </span>
                {card?.blog}
              </Card.Text>
              <Card.Text>
                <span>Tipo: </span>
                {card?.type}
              </Card.Text>
              <Card.Text>
                <span>Criado em: </span>
                {card?.created_at}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Header>
              Repositorios publicos <GoRepo size={15} />
            </Card.Header>
            <Card.Body>
              <Card.Title>{card?.public_repos}</Card.Title>
            </Card.Body>
          </Card>
        </ContainerRight>
      )}
    </>
  );
};
export default CardRight;