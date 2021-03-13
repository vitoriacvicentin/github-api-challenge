import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Link from "next/link";
import { Container } from "./styles";

export const ListResults = () => {
  const itemsContext = useContext(ItemsContext);
  const repos = itemsContext.repos;

  return (
    <>
      <Container>
        {repos.length > 0 && (
          <div>
            {itemsContext.variable === "repo" ? (
              <ul>Repositorios:</ul>
            ) : (
              <ul>Repositorios Mais Visitados:</ul>
            )}
            {repos.map((slug) => (
              <Link href={slug.html_url}>
                <a target="_blank" rel="noreferrer">
                  <li>{slug.name}</li>
                </a>
              </Link>
            ))}
          </div>
        )}
        {repos.length <= 0 && <a>Nenhum repositorio encontrado</a>}
      </Container>
    </>
  );
};

export default ListResults;
