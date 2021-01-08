import React from "react";
import HomeComponent from "../Components/HomeComponent";
import Sobre from "../Components/Sobre";
import Phones from "../Components/Phones";
import Gallery from "../Components/Gallery";
import Operadores from "../Components/Operadores";
import BaixeAgora from "../Components/BaixeAgora";
import Footer from "../Components/Footer";
import FormularioBeta from "../Components/FormularioBeta";
import Mapa from "../Components/Mapa";
import Atribuicoes from "../Components/Atribuicoes";

const Home = () => {
  return (
    <>
      <HomeComponent />
      <Sobre />
      <Phones />
      <Atribuicoes/>
      <FormularioBeta />
      <Gallery />
      <Operadores />
      <Mapa />
      <BaixeAgora />
      <FormularioBeta />
      <Footer />
    </>
  );
};

export default Home;
