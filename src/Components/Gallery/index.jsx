import React from "react";
import { Container, GridImage, Item } from "./styles";
import Notificacao from "../../assets/Notificacao.png";
import Detalhes from "../../assets/detalhes.png";
import Pesquisa from "../../assets/pesquisa.png";
import Mensalidade from "../../assets/mensalidade.png";

const Gallery = () => {
  return (
    <Container>
      <GridImage>
        <Item>
          <p>Receba notificações das operações</p>
          <img src={Notificacao} alt="Desafie-se" />
        </Item>
        <Item>
          <p>Pesquisa de operações inteligentes</p>
          <img src={Pesquisa} alt="Desempenho" />
        </Item>
        <Item>
          <p>Organize o financeiro da sua equipe</p>
          <img src={Mensalidade} alt="Operacoes" />
        </Item>
        <Item>
          <p>Compartilhe o legado de sua equipe</p>
          <img src={Detalhes} alt="Convque Amigos" />
        </Item>
      </GridImage>
    </Container>
  );
};

export default Gallery; 
