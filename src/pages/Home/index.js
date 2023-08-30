import { useState } from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


function Home() {


  return (
    <>
      <Header />
      <Banner image={'Home'} />
      <Container>
         <Category />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
