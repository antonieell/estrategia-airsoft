import React from "react";
import { Container, List, ListsWrapper } from "./styles";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <h1>Estratégia Airsoft!</h1>
      <ListsWrapper>
        <List>
          <h2>Redes Sociais</h2>
          <ul>
            <li>
              <FaTwitter />
              <a href="https://twitter.com/Estrategia_as?s=08">Twitter</a>
            </li>
            <li>
              <FaInstagram />
              <a href="https://www.instagram.com/estrategia_airsoft/">
                Instagram
              </a>
            </li>
            <li>
              <FaFacebookSquare />{" "}
              <a href="https://www.facebook.com/estrategia.as">Facebook</a>
            </li>
          </ul>
        </List>
      </ListsWrapper>
    </Container>
  );
}
