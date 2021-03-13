import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Header, Container } from "../style/pages/userDetail";
import { BsFillHouseDoorFill } from "react-icons/bs";
import Link from "next/link";
import CardLeft from "../components/cardsDetails/cardLeft";
import CardRight from "../components/cardsDetails/cardRight";

/* Pagina de detalhes do usuario */
export const UserDetail = () => {
  const userContext = useContext(UserContext);
  const card = userContext.user;
  return (
    <>
      {card?.login && (
        <div>
          <Header>
            <Link href={"/"}>
              <a>
                <BsFillHouseDoorFill size={25} />
              </a>
            </Link>
          </Header>
          <Container>
            <CardLeft />
            <CardRight />
          </Container>
        </div>
      )}
    </>
  );
};
export default UserDetail;
