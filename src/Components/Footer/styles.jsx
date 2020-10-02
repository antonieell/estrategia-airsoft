import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 80%;
  margin: auto;
  margin-bottom: 64px;
  align-items: start;
  background-color: transparent;
  color: white;
  padding-top: 32px;
  border-top: 1px solid #07d697;
  h1 {
    font-weight: bold;
  }
`;

export const ListsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h2{
    color: #707070;
  }
  li{
    list-style: none;
  }
  a{
    padding: 0 8px;
    text-decoration: none;
    color: #fff;
  }
`;
