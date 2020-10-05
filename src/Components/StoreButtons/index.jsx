import React from "react";
import { Container } from "./styles";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export const GooglePlay= ({stroke}) => {
  return (
    <Container stroke={stroke}>
      <FaGooglePlay />
      <div>
        <p>Em breve no</p>
        <p>Google Play</p>
      </div>
    </Container>
  );
}
export const AppleStore= ({stroke}) => {
  return (
    <Container stroke={stroke}>
      <FaApple/>
      <div>
        <p>Em breve na</p>
        <p>AppStore</p>
      </div>
    </Container>
  );
}
