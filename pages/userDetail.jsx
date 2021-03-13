import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import {
  ContainerLeft,
  Header,
  ContainerRigth,
  Container,
} from "../style/pages/userDetail";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoRepo } from "react-icons/go";
import Link from "next/link";

export const UserDetail = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
  return (
    <>
      <Header>
        <Link href={"/"}>
          <BsFillHouseDoorFill size={20} color={"grey"} />
        </Link>
      </Header>
      <Container>
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
            <Button variant="outline-dark" className="button">
              <Link href={card?.html_url}>
                <a target="_blank" rel="noreferrer">
                  Ir para o Github
                </a>
              </Link>
            </Button>
          </Card>
        </ContainerLeft>

        <ContainerRigth>
          <Card className="mb-2">
            <Card.Header>Detalhes</Card.Header>
            <Card.Body>
              <Card.Text><span>Biografia: </span>{card?.bio}</Card.Text>
              <Card.Text><span>Email: </span>{card?.email}</Card.Text>
              <Card.Text><span>Blog: </span>{card?.blog}</Card.Text>
              <Card.Text><span>Tipo: </span>{card?.type}</Card.Text>
              <Card.Text><span>Criado em: </span>{card?.created_at}</Card.Text>
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
        </ContainerRigth>
      </Container>
    </>
  );
};
export default UserDetail;
