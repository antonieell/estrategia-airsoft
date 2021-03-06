import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-weight: bold;
  margin: auto;
  background-color: #07070a;
  img {
    object-fit: cover;
    object-position: center 30%;
    width: 100%;
  }
`;

export const LinkWrapper = styled.div`
  background-color: #07d697;
  object-fit: cover;
  color: black;
  padding: 16px 0px;
  border-radius: 10px;
  margin: auto;
  h1 {
    margin-bottom: 32px;
  }
  img {
    object-fit: contain;
    width: 100%;
  }
  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

