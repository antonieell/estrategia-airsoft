import styled from "styled-components";

export const Container = styled.section`
  display: block;
  margin: auto;
  align-items: center;
  width: 100%;
  min-width: 300px;
  p {
    font-weight: bold;
  }
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 128px;
  gap: 32px;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 480px;
    background-color: #056E4E;
  }
  &.revertRow{
    flex-direction: row-reverse;
    & > div{
      text-align: left;
    }
  }
  @media(max-width: 750px){
    flex-wrap: wrap;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #056E4E;
  }
  }
`;

export const Item = styled.div`
  position: relative;
  z-index: 2;
  flex-basis: 25%;
  img{
  width: 100%; 
  min-width: 100px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  flex-basis: 70%;
  max-width: 600px;
  text-align: end;
  h2{
    font-weight: bold;
    font-size: 5rem;
  }
  h4{
    font-weight:bold;
    font-size: 2rem;
    margin-top: 2rem;
  }
  p{
    font-weight: normal;
    font-size: 1.6rem;
  }
`;

