import styled from "styled-components";

export const Container = styled.section`
  display: block;
  margin: auto;
  padding: 140px 16px;
  align-items: center;
  width: 100%;
  min-width: 300px;
  p {
    font-weight: bold;
  }
`;

export const RowImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  align-items: flex-start;
  justify-content: center;
`;

export const Item = styled.div`
  transform: scale(0.9);
  width: max(288px, 25%);
  text-align: center;
  img {
    width: 100%;
    max-height: 260px;
    height: 100%;
    object-fit: contain;
  }
`;

export const FullImage = styled.div`
  text-align: center;
  width: max(288px, 100%);
  p {
    font-weight: bold;
    font-size: 1.8rem;
  }
  img {
    height: 100%;
    min-height: 185px;
    max-height: 400px;
    width: 70%;
    min-width: 288px;
    object-fit: cover;
    object-position: 0% top;
  }
`;
