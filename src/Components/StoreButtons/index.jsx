import React from "react";
import { Container } from "./styles";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export const GooglePlay= () => {
  return (
    <Container>
      <FaGooglePlay />
      <div>
        <p>Disponivel no</p>
        <p>Google Play</p>
      </div>
    </Container>
  );
}
export const AppleStore= () => {
  return (
    <Container>
      <FaApple/>
      <div>
        <p>Disponivel na</p>
        <p>AppStore</p>
      </div>
    </Container>
  );
}
