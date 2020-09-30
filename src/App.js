import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar/>
        <Routes />
      </Router>
    </>
  );
}

export default App;
