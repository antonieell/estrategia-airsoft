import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-shrink: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 16px 0px;;
  align-items: center;
  width: 100%;
`;

export const WrapperImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 35%;
    max-width: 650px;
    height: auto;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
