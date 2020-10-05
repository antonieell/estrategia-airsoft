import React from "react";
import { Container, Row, Item, Content } from "./styles";
import Operador from "../../assets/operador.png";
import Capitao from "../../assets/capitao.png";
import Generic from "../../assets/operacoes.png";

const Operadores = () => {
  return (
    <Container>
      <Row>
        <Content>
          <h2>Operador</h2>
          <h4>Estatística</h4>
          <p>
            Crie sua conta e comece a sua competição contra seu pior
            adversário... Você... Gere estatísticas de equipe e suas operações
          </p>
          <h4>Equipamento</h4>
          <p>Cadastre o seu Loadout e compartilhe com seus amigos.</p>
          <h4>Suba seu nível</h4>
          <p>Conquiste novos níveis evolua em combate.</p>
        </Content>
        <Item>
          <img src={Operador} alt="Imagem Genérica" />
        </Item>
      </Row>
      <Row className="revertRow">
        <Content>
          <h2>Capitão</h2>
          <h4>Reúna seus amigos e crie sua equipe.</h4>
          <p>
            Você sempre poderá acompanhar o progresso na seção estatística
            Visualize sua Equipe em números da forma que você desejar através de
            aplicação de filtros. Realize a Gestão de sua equipe através da
            Plataforma.
          </p>
          <h4>Prove com números.</h4>
          <p>
            Suas estáticas são atualizar ao final de cada operação. Compare seus
            resultados com seus amigos, a brincadeira chegou a um novo nível.
          </p>
          <h4>Estatística.</h4>
          <p>Analise de dados.</p>
          <p>Acompanhe a quantidade de operadores, classes, jogos e etc...</p>
        </Content>
        <Item>
          <img src={Capitao} alt="Imagem Genérica" />
        </Item>
      </Row>
      <Row>
        <Content>
          <h2>Organizador</h2>
          <h4>Gestão de operações</h4>
          <p>Faça sua gestão de operadores pelo app.</p>
          <h4>Alcance mais gente</h4>
          <p>Divulgação através do app e mídias sociais.</p>
          <h4>Evite imprevistos</h4>
          <p>Receba antecipado.</p>
          <h4>Finanças</h4>
          <p>Faça sua gestão financeira pelo app.</p>
        </Content>
        <Item>
          <img src={Generic} alt="Imagem Genérica" />
        </Item>
      </Row>
    </Container>
  );
};

export default Operadores; 
