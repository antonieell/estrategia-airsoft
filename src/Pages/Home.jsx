import React from 'react'
import HomeComponent from '../Components/HomeComponent'
import Phones from '../Components/Phones'
import Gallery from '../Components/Gallery'
import Operadores from '../Components/Operadores'
import BaixeAgora from '../Components/BaixeAgora'
import Footer from '../Components/Footer'
import FormularioBeta from '../Components/FormularioBeta'

const Home = () => {
  return (
    <>
      <HomeComponent />
      <Phones />
      <Gallery />
      <Operadores />
      <BaixeAgora />
      <FormularioBeta/>
      <Footer />
    </>
  );
};

export default Home;
