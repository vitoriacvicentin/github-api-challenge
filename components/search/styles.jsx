import styled from 'styled-components'

export const Div = styled.div`
  height: auto;
  width:50rem;
  margin-top:2vh;
  @media screen and (max-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left:2vh;
    margin-right:2vh;
  }
`;
export const Header = styled.header`
  height: auto;
  overflow: hidden;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  display:flex;
  justify-content:center;
  @media screen and (max-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;