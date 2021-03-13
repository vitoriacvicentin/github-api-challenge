import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { ContainerLeft, Header } from "../style/pages/userDetail";
import { BiCurrentLocation } from "react-icons/bi";

export const UserDetail = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
  return (
    <>
      <Header />
      {card?.name ? (
        <ContainerLeft>
          <Card  className="card-container">
            <Card.Img variant="top" src={card.avatar_url} />
            <Card.Body >
              
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.login}</Card.Text>
              <Card.Text>
                <BiCurrentLocation size={20} />
                {card.location}
              </Card.Text>
              
            </Card.Body>
            <Button variant="outline-secondary" className="button">Ir para o Github</Button>
          </Card>
        </ContainerLeft>
      ) : null}
    </>
  );
};
export default UserDetail;
