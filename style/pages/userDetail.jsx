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

export const ContainerLeft = styled.div`
  img {
    border-radius: 50%;
    width: 50%;
    @media screen and (max-width: 785px) {
      border-radius: 50%;
    }
  }
  .card-container {
    margin-top: 1rem;
    margin-left: 1rem;
    background: transparent;
    border-color: transparent;
    width: 35rem;
    @media screen and (max-width: 785px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
    }
  }
  span {
    font-weight: bold;
  }
  .button {
    width: 50%;
    margin-left: 2rem;
    @media screen and (max-width: 785px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0;
    }
  }
  a {
    color: black;
  }
`;
export const ContainerRigth = styled.div`
  flex: 1;
  margin-right: 1rem;
  margin-top:1rem;
  @media screen and (max-width: 785px) {
    margin-left:1rem;
  }
`;
