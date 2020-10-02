import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 64px;
  width: 80%;
  min-height: 80px;
  background-color: #07d697;
  font-weight: bold;
  margin: auto;
  margin-bottom: 64px;
  color: #000;
  @media(max-width: 860px){
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

