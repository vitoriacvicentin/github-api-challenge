import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Link from "next/link";
import { ContainerCard } from "../../style/global";

export const CardRepos = () => {
  const itemsContext = useContext(ItemsContext);
  const repos = itemsContext.repos;
  console.log(itemsContext.variable);

  return (
    <>
      {repos.length > 0 && (
        <ContainerCard>
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
        </ContainerCard>
      )}
    </>
  );
};

export default CardRepos;
