import React from "react";
import { Container, RowImage, Item, FullImage } from "./styles";
import GenericsImage from "../../assets/generics.png";

const Gallery = () => {
  return (
    <Container>
      <RowImage>
        <Item>
          <img src={GenericsImage} alt="Imagem Genérica" />
          <p>Desafie-se</p>
        </Item>
        <Item>
          <img src={GenericsImage} alt="Imagem Genérica" />
          <p>Acompanhe seu desempenho</p>
        </Item>
        <Item>
          <img src={GenericsImage} alt="Imagem Genérica" />
          <p>Fique por dentro das operações</p>
        </Item>
        <Item>
          <img src={GenericsImage} alt="Imagem Genérica" />
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
