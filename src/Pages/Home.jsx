import React from "react";
import HomeComponent from "../Components/HomeComponent";
import Sobre from "../Components/Sobre";
import Phones from "../Components/Phones";
import Gallery from "../Components/Gallery";
import BaixeAgora from "../Components/BaixeAgora";
import Footer from "../Components/Footer";
import FormularioBeta from "../Components/FormularioBeta";
import Mapa from "../Components/Mapa";
import Atribuicoes from "../Components/Atribuicoes";
import ModalidadesERegras from "../Components/ModalidadesERegras";

const Home = () => {
  return (
    <>
      <HomeComponent />
      <Sobre />
      <Phones />
      <Atribuicoes />
      <FormularioBeta title="Nos ajude a criarmos nossa plataforma" />
      <Gallery />
      <ModalidadesERegras />
      <Mapa />
      <BaixeAgora />
      <FormularioBeta />
      <Footer />
    </>
  );
};

export default Home;
