import React from "react";
import { Container, IconWrapper } from "./styles";
import {GooglePlay, AppleStore} from "../StoreButtons";

export default function BaixeAgora() {
  return (
    <Container>
      <h1>Baixe agora!</h1>
      <IconWrapper>
       <GooglePlay/>
       <AppleStore/>
      </IconWrapper>
    </Container>
  );
}
