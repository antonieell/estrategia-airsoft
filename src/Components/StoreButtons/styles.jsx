import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: ${props => props.stroke ? "1px solid white" : "none"};
  svg {
    color: white;
    height: 32px;
    width: 32px;
  }
  p {
    font-size: 1.2rem;
  }
`;

export const IconWrapper = styled.div``;
