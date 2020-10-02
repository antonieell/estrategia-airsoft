import React from 'react'
import HomeComponent from '../Components/HomeComponent'
import Phones from '../Components/Phones'
import Gallery from '../Components/Gallery'
import Operadores from '../Components/Operadores'
import BaixeAgora from '../Components/BaixeAgora'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <HomeComponent />
      <Phones />
      <Gallery />
      <Operadores />
      <BaixeAgora />
      <Footer />
    </>
  );
};

export default Home;
