import React from "react";
import { Container, RowImage, Item, FullImage } from "./styles";
import GenericsImage from "../../assets/generics.png";
import DesafieSe from "../../assets/desafie-se.jpg"
import ConvoqueSeusAmigos from "../../assets/convoqueSeusAmigosGallery.jpg"
import Desempenho from "../../assets/seuDesempenhoGallery.jpg"

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
          <img src={GenericsImage} alt="Operacoes" />
          <p>Fique por dentro das operações</p>
        </Item>
        <Item>
          <img src={ConvoqueSeusAmigos} alt="Convque Amigos" />
          <p>Convoque seus amigos</p>
        </Item>
      </RowImage>
      <FullImage>
        <img src={GenericsImage} alt="Imagem Genérica" />
        <p>Conheçam mais operadores</p>
      </FullImage>
    </Container>
  );
};

export default Gallery; 
