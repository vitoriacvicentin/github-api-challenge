import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Link from "next/link";
import { Container } from "./styles";

/* Lista dos repositorios*/

export const ListResults = () => {
  const userContext = useContext(UserContext);
  const repos = userContext.repos;
  
  return (
    <div>
      {repos.length > 0 && (
        <Container>
          {userContext.variable === "repo" ? (
            <ul>Repositorios:</ul>
          ) : (
            <ul>Repositorios Mais Visitados:</ul>
          )}
          {repos.map((slug) => (
            <Link href={slug.html_url} key={slug.id}>
              <a target="_blank" rel="noreferrer">
                <li>{slug?.name}</li>
              </a>
            </Link>
          ))}
        </Container>
      )}
      {repos.length <= 0 && <a>Nenhum repositorio encontrado</a>}
    </div>
  );
};

export default ListResults;
