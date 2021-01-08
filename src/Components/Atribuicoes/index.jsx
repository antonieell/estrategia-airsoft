import React from "react";
import { Container, GridImage, Item } from "./styles";
import PhoneRight from "../../assets/rightIphone.png";
import { FaDeskpro } from "react-icons/fa";

const Atribuicoes = () => {
  return (
    <Container>
      <GridImage>
        <Item>
          <FaDeskpro width={100} height={100} />
          <h1>Operador</h1>
          <ul>
            <li>
              Conquiste novos níves em combate, conforme seu desempenho nas
              operações.
            </li>
            <li>A cada combate você obtém experiência e gera estatísticas.</li>
            <li>Cadastre seu loadout e compartilhe com seus amigos.</li>
            <li>Receba notificações das operações e amigos.</li>
            <li>Pesquise com filtros inteligentes as operações.</li>
          </ul>
        </Item>
        <Item>
          <FaDeskpro width={100} height={100} />
          <h1>Capitão</h1>
          <ul>
            <li>Reúna seus amigos, crie sua equipe</li>
            <li>
              Aceite, recuese, promova e rebaixe seus subordinados, gerencie de
              uma forma mais simples
            </li>
            <li>Visualize de forma inteligente o efetivo de sua equipe</li>
            <li>Tenha acesso a estatísticas</li>
            <li>Gestão financeira de forma transparente</li>
          </ul>
        </Item>
        <Item>
          <FaDeskpro width={100} height={100} />
          <h1>Organizador</h1>
          <ul>
            <li>Crie seus eventos pela plataforma</li>
            <li>
              Divulgue suas opreações através das principais mídias digitais
            </li>
            <li>Receba o FeedBack dos operadores ao final de cada evento</li>
            <li>
              Evite imprevisto, as arrecadações são feitas de forma antecipada
            </li>
          </ul>
        </Item>
      </GridImage>
    </Container>
  );
};

export default Atribuicoes; 
