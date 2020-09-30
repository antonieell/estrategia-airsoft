import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html {
    font-size: 62.5%;
    @media (max-width: 1279px){
      font-size: 54%;
    }
  }
  body, #root {
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    background:#1C1C1C;
    color: white;
    font-size: 1.6rem;
    margin: 0 auto;
  }
  ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
  }
    ::-webkit-scrollbar-track {
      background: #aaa;
    }
    ::-webkit-scrollbar-thumb {
    background:#07D697;
    }
  
`;
