import { useState } from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Home.module.css';

function Home() {
  let [nomeDigitado, setNomeDigitado] = useState("");

  return (
    <>
      <Header />
      <Banner image={'Home'} />
      <Container>
        <input 
        type="text" 
        placeholder="Nome" 
        onChange={(e) => setNomeDigitado(e.target.value)}
        value={nomeDigitado}
        />
        <h2>{nomeDigitado}</h2>
        {/* <Category /> */}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
