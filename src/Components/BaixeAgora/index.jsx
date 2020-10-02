import React from "react";
import { Container, IconWrapper } from "./styles";
import {GooglePlay, AppleStore} from "../StoreButtons";

export default function BaixeAgora() {
  return (
    <Container>
      <h1>Em breve!</h1>
      <IconWrapper>
       <GooglePlay/>
       <AppleStore/>
      </IconWrapper>
    </Container>
  );
}
