import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Container } from "./styles";
import Buttons from "../buttons";
import ListResults from "../listRepos/index";
import Link from "next/link";

/* Card do resultado de busca, exibido somente se encontrar algo */

export const CardResults = () => {
  const userContext = useContext(UserContext);
  const card = userContext.user;

  return (
    <>
      {card?.login ? (
        <Container>
          <Card style={{ width: "18rem" }} border="warning">
            <Link href={"userDetail"} as={card?.login}>
              <Card.Img
                variant="top"
                src={card.avatar_url}
                className="img-cursor"
                alt={"Avatar Imagem"}
              />
            </Link>
            <Card.Body>
              <Card.Title>{card?.name}</Card.Title>
              <Card.Text>
                <span>Local: </span>
                {card?.location ? card?.location : " Não registrado"}
              </Card.Text>
              <Buttons />
              <ListResults />
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

export default CardResults;
