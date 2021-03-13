import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Header, Container } from "../style/pages/userDetail";
import { BsFillHouseDoorFill } from "react-icons/bs";
import Link from "next/link";
import CardLeft from "../components/cardsDetails/cardLeft";
import CardRight from "../components/cardsDetails/cardRight";


export const UserDetail = () => {
  const itemsContext = useContext(ItemsContext);
  const card = itemsContext.items;
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
