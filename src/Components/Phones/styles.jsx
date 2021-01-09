import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-shrink: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  margin: auto;
  background-color: #383838;
  align-items: center;
  width: 100%;
`;

export const WrapperImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 35%;
    max-width: 300px;
    height: auto;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media (max-width:500px){
    div svg {
      display: none;
    }
  }
`;

