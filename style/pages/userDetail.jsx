import styled from "styled-components";

export const Header = styled.header`
  height: auto;
  overflow: hidden;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  a{
    color:grey;
    cursor:pointer;
    &:hover {
    color: white;
    }
  }
`;
export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex: 1;
  @media screen and (max-width: 785px) {
    display: block;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
