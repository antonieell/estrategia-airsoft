import React from "react";
import { Container } from "./styles";
import Map from "pigeon-maps";
import Marker from 'pigeon-marker'
import MapaImage from '../../assets/MAPA/MAPA.png'

export default function Mapa() {
  return (
    <Container>
      <h1>Mapa de Operações</h1>
      <h2 className="subtitle">Pesquise operações da maneira que desejar.</h2>
      <img src={MapaImage} alt="Mapa"/>
      {/*
<Map twoFingerDrag={true} defaultZoom={12} center={[-23.5489,  -46.6388]} zoom={12}  height={400}>
          <Marker anchor={[-23.5489,  -46.6388]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      </Map>

*/}   
    </Container>
  );
}
