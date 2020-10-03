import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  position: absolute;
  width: 100%;
  height: 70px;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 0.9;
  background: transparent linear-gradient(0deg, #1c1c1c 0%, #5a5a5a 100%) 0% 0%
    no-repeat padding-box;
`;

export const LogoWrapper = styled.div`
  h1{
    text-align:center;
  }
`;
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  font-weight: 300;
  a{
    color: white;
    text-decoration: none;
  }
  a.active{
    font-weight: 700;
    border-bottom: 1px solid #07d697;
  }
  button{
    margin: 16px;
    cursor: pointer;
    border: none;
    background-color: #07D697;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
  }
`;
