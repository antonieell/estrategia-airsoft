import styled from "styled-components";
//import Background from "../../assets/fullScreenImage.png";

export const Container = styled.div`
  //background-image: url();
`;

export const Content = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
  padding: 32px 32px 64px;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  h1 {
    font-size: 5rem;
    color: #07d697;
  }
  h2 {
    font-size: 3rem;
    font-weight: normal;
    margin: 48px 0;
  }
  p {
    font-size: 1.8rem;
    color: #848484;
    margin: 4px 0;
  }
  @media (min-width: 790px){
    max-width: 1200px;
    width: 50%;
    margin: 0 auto;
    > * {
      width: 75%;

    }
  }
`;
