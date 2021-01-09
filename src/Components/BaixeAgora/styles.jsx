import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 90%;
  min-height: 80px;
  background-color: #07d697;
  font-weight: bold;
  margin: auto;
  margin-bottom: 64px;
  color: #000;
  @media(max-width: 860px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media(max-width: 480px){
    padding: 8px;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 500px){
    div  svg {
      display: none;
    }
  }
`;

