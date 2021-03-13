import styled from "styled-components";

export const Container = styled.div`
  ul {
    text-align: center;
    font-weight: bold;
  }
  li {
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;