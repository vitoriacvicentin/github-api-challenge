import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { Container } from "./styles";
import Buttons from "../buttons";
import ListResults from "../listRepos/index";
import Link from "next/link";

export const CardResults = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
  return (
    <>
      {card?.name ? (
        <Container>
          <Card style={{ width: "18rem" }} border="warning">
            <Link href={"userDetail"} as={(card?.login ? "" : card?.login)} >
              <Card.Img
                variant="top"
                src={card?.avatar_url}
                class="img-cursor"
              />
            </Link>
            <Card.Body>
              <Card.Title>{card?.name}</Card.Title>
              <Card.Text>
                <span>Local: </span>
                {card?.location}
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
