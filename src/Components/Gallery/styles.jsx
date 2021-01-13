import styled from "styled-components";

export const Container = styled.section`
  display: block;
  margin: auto;
  padding: 32px 0px;
  align-items: center;
  width: 100%;
  min-width: 300px;
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
  gap: 16px;
  max-width: clamp(900px, 70vw, 1200px);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;

export const Item = styled.div`
  text-align: center;
  background-color: #0e0e0e;
  padding: 16px 32px;
  color: #0fa;
  border-radius: 16px;
  &:hover {
    background-color: #000;
  }
  img {
    width: 100%;
    max-width: 300px;
    object-fit: contain;
  }
`;

