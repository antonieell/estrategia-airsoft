import React from "react";
import { Container, GridImage, Item } from "./styles";
import PhoneRight from "../../assets/rightIphone.png";

const Gallery = () => {
  return (
    <Container>
      <GridImage>
        <Item>
          <p>Receba notificações das operações</p>
          <img src={PhoneRight} alt="Desafie-se" />
        </Item>
        <Item>
          <p>Pesquisa de operações inteligentes</p>
          <img src={PhoneRight} alt="Desempenho" />
        </Item>
        <Item>
          <p>Organize o financeiro da sua equipe</p>
          <img src={PhoneRight} alt="Operacoes" />
        </Item>
        <Item>
          <p>Compartilhe o legado de sua equipe</p>
          <img src={PhoneRight} alt="Convque Amigos" />
        </Item>
      </GridImage>
    </Container>
  );
};

export default Gallery; 
