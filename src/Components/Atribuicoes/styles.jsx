import styled from "styled-components";
import bg from "../../assets/atribuicoesBg.jpg";

export const Container = styled.section`
  display: block;
  margin: auto;
  padding: 32px 0px;
  align-items: center;
  width: 100%;
  min-width: 300px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  p {
    font-weight: bold;
  }
  @media (max-width: 790px) {
    padding: 16px 0px;
  }
`;

export const GridImage = styled.div`
  display: grid;
  margin: auto;
  max-width: clamp(900px, 70vw, 1200px);
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  text-align: center;
  padding: 16px 32px;
  color: white;
  img {
    max-height: 200px;
  }
  ul {
    text-align: left;
    width: 70%;
    margin: 16px auto 0;
  }
`;

