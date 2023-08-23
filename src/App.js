import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header />
      <Banner />
      <Container>
      <h1>Hello World!</h1>
      <p>Olá mundo! Estou aprendnedo React JS</p>
      </Container>
    <Footer />
    </>
  );
}

export default App;
