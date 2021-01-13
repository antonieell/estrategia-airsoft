import React from "react";
import { Container, LinkWrapper } from "./styles";

const titleDefault = "Gostaria de testar nosso Beta ?"
export default function FormularioBeta({title = titleDefault}) {
  return (
    <Container>
      <h1>{title}</h1>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__SA9WjRUQU5PQTMyRTBSVzRWVFhOTU5CVkZZQlI5OC4u">
        <LinkWrapper>
          <span>Preencha o formulário</span>
        </LinkWrapper>
      </a>
    </Container>
  );
}
