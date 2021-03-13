import { Card } from "react-bootstrap";
import { useContext } from "react";
import { ContainerRight } from "./styles";
import { UserContext } from "../../context/userContext";
import { GoRepo } from "react-icons/go";

/* Card a direita da tela de detalhes, exibido somente se encontrar algo 
   as condições {card?.compo &&()} verificam se tem conteudo para exibir
*/

export const CardRight = () => {
  const userContext = useContext(UserContext);
  const card = userContext.user;
  return (
    <>
      {card?.login && (
        <ContainerRight>
          <Card className="mb-2">
            <Card.Header>Detalhes</Card.Header>
            <Card.Body>
              {card?.bio && (
                <Card.Text>
                  <span>Biografia: </span>
                  {card?.bio}
                </Card.Text>
              )}
              {card?.email && (
                <Card.Text>
                  <span>Email: </span>
                  {card?.email}
                </Card.Text>
              )}
              {card?.blog && (
                <Card.Text>
                  <span>Blog: </span>
                  {card?.blog}
                </Card.Text>
              )}
              {card?.type && (
                <Card.Text>
                  <span>Tipo: </span>
                  {card?.type}
                </Card.Text>
              )}
              {card?.created_at && (
                <Card.Text>
                  <span>Criado em: </span>
                  {card?.created_at}
                </Card.Text>
              )}
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
