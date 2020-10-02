import React from "react";
import { Container, List, ListsWrapper } from "./styles";

export default function Footer() {
  return (
    <Container>
      <h1>Estratégia Airsoft!</h1>
      <ListsWrapper>
        <List>
          <h2>Titulo 5</h2>
          <ul>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
          </ul>
        </List>
        <List>
          <h2>Titulo 5</h2>
          <ul>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
          </ul>
        </List>
        <List>
          <h2>Titulo 5</h2>
          <ul>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
            <li>Corpo de texto</li>
          </ul>
        </List>
      </ListsWrapper>
    </Container>
  );
}
