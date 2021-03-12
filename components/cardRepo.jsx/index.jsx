import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { Container } from "./styles";
import Link from "next/link";

export const CardRepo = () => {
  const itemsContext = useContext(ItemsContext);
  const repos = itemsContext.repos;

  return (
    <>
      {repos.length > 0 && (
        <Container>
          <ul>Repositorios:</ul>
          {repos.map((slug) => (
            <Link href={slug.html_url}>
              <a target="_blank" rel="noreferrer">
                <li>{slug.name}</li>
              </a>
            </Link>
          ))}
        </Container>
      )}
    </>
  );
};

export default CardRepo;
