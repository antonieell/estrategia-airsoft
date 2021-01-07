import styled from "styled-components";
import Background from "../../assets/fullScreenImage.png";

export const Container = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  pointer-events: none;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    content: "";
    height: 100vh;
    background: transparent
      linear-gradient(180deg, #39393900 0%, #333333cc 80%, #1c1c1ce6 100%) 0% 0%
      no-repeat padding-box;
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
  padding: 120px 0px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  text-align: center;
  height: 100%;
  h2{
    font-size: 8rem;
    color: #07D697;
  }
  h1{
    font-size: 6.6rem;
  }
`;
