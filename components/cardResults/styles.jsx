import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  Button {
    align-items:center;
    align-content:center;
    display: -webkit-inline-box;
    justify-content:center;
    margin: 1rem;
    width:35%;
  }
  span{
    font-weight:bold;
  }
  .img-cursor{
    cursor:pointer;
    &:hover {
      opacity: 0.5;
    }
    @media screen and (max-width: 785px) {
      width:auto;
    }
  }
  @media screen and (max-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
