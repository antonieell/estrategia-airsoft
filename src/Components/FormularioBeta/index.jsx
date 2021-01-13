import React from "react";
import { Container, LinkWrapper } from "./styles";

const titleDefault = "Gostaria de testar nosso Beta ?"
export default function FormularioBeta({title = titleDefault}) {
  return (
    <Container>
      <h1>{title}</h1>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeBpKHlvXMyKNu_nXkzRwC58IHoLjbE8j_Hm1I93gZCm7Y7g/viewform?usp=sf_link">
        <LinkWrapper>
          <span>Preencha o formulário</span>
        </LinkWrapper>
      </a>
    </Container>
  );
}
