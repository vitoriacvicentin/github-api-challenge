import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
  }

  body {
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,252,200,1) 0%, rgba(255,247,94,1) 90% );
    font: 400 16px Roboto, sans-serif;
  }
`;

export const ContainerCard = styled.div`
  ul {
    text-align: center;
    font-weight: bold;
  }
  li {
    font-size: 12px;
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
