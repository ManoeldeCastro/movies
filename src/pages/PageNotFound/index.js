import Banner from '../../components/Banner';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css'
import ErroImg from './erro404.png'

function PageNotFound() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.container}>
          <h1>Page not found</h1>
          <img src={ErroImg} alt="Logo with Error" />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default PageNotFound;