import React from "react";
import { Container, LinkWrapper} from "./styles";

export default function FormularioBeta() {
  return (
    <Container>
      <h1>Gostaria de testar nosso Beta ?</h1>
      <LinkWrapper href="#">
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__SA9WjRUQU5PQTMyRTBSVzRWVFhOTU5CVkZZQlI5OC4u"> Preencha o formulário</a>
      </LinkWrapper>
    </Container>
  );
}