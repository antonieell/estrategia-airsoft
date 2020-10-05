import React from "react";
import { Container, RowImage, Item, FullImage } from "./styles";
import DesafieSe from "../../assets/desafie-se.jpg"
import ConvoqueSeusAmigos from "../../assets/convoqueSeusAmigosGallery.jpg"
import Desempenho from "../../assets/seuDesempenhoGallery.jpg"
import Operacoes from '../../assets/porDentroDasOperacoes.jpeg'
import ConhecaOperadores from '../../assets/conhecaOperadores.jpeg'

const Gallery = () => {
  return (
    <Container>
      <RowImage>
        <Item>
          <img src={DesafieSe} alt="Desafie-se" />
          <p>Desafie-se</p>
        </Item>
        <Item>
          <img src={Desempenho} alt="Desempenho" />
          <p>Acompanhe seu desempenho</p>
        </Item>
        <Item>
          <img src={Operacoes} alt="Operacoes" />
          <p>Fique por dentro das operações</p>
        </Item>
        <Item>
          <img src={ConvoqueSeusAmigos} alt="Convque Amigos" />
          <p>Convoque seus amigos</p>
        </Item>
      </RowImage>
      <FullImage>
        <img src={ConhecaOperadores} alt="Imagem Genérica" />
        <p>Conheçam mais operadores</p>
      </FullImage>
    </Container>
  );
};

export default Gallery; 
