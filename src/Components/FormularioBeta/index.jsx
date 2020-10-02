import React from "react";
import { Container, LinkWrapper} from "./styles";

export default function FormularioBeta() {
  return (
    <Container>
      <h1>Gostaria de testar nosso Beta ?</h1>
      <LinkWrapper href="#">
        <a href="#!"> Preencha o formulário</a>
      </LinkWrapper>
    </Container>
  );
}
