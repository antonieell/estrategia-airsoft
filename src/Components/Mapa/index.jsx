import React from "react";
import { Container } from "./styles";
import Map from "pigeon-maps";
import Marker from 'pigeon-marker'

export default function Mapa() {
  return (
    <Container>
      <h1>Mapa de Operações</h1>
      <h1 className="subtitle">Veja operações próximas a sua localização.</h1>
      <Map twoFingerDrag={true} defaultZoom={12} center={[-23.5489,  -46.6388]} zoom={12}  height={400}>
          <Marker anchor={[-23.5489,  -46.6388]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      </Map>
    </Container>
  );
}
