import React from "react";
import { Container } from "./styles";
import MapaImage from '../../assets/MAPA/2.png'

export default function Mapa() {
  return (
    <Container>
      <img src={MapaImage} alt="Mapa"/>
    </Container>
  );
}
