import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Search.module.css';
import videos from '../../json/videos.json'
import SearchVideoList from '../../components/SearchVideoList';

const Search = () => {

  return (
    <>
      <Header />
      <Container>
        <section className={styles.search}>
          <h2>Search:</h2>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
