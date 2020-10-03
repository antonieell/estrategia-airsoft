import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 50%;
  max-width: 200px;
  min-width: 100px;
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
    white-space: nowrap;
  }
`;

export const IconWrapper = styled.div``;
