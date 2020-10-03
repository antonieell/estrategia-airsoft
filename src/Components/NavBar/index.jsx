import React from "react";
import { Container, LogoWrapper, NavItems } from "./styles";
import { Link, useRouteMatch } from "react-router-dom";

function ActiveLink({ to, children }) {
  let match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link className={match ? "active" : ""} to={to}>
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <Container>
      <LogoWrapper>
        <h1>Estratégia Airsoft</h1>
      </LogoWrapper>
      <NavItems>
        {/*<ActiveLink to="/">Início</ActiveLink>
        <ActiveLink to="/sobre">Sobre</ActiveLink>
        <ActiveLink to="/contato">Contato</ActiveLink>
        <ActiveLink to="/#">Loren</ActiveLink>*/}
        <button>Em breve</button>
      </NavItems>
    </Container>
  );
}
