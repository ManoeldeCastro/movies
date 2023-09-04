import styles from './Favorites.module.css';
import Header from "../../components/Header";
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import VideoList from '../../components/VideoList';
import { useFavoriteContext } from '../../contexts/Favorites';


const Favorites = () => {
  const { favorite } = useFavoriteContext();
  
  return (
    <>
        <Header/>
        <Container>
          <section className={styles.favorites}>
          <h2>{favorite.length > 1 ? "My favorites" : "My Favorite"}</h2>
              {<VideoList videos={favorite} emptyHeading="Not Favorite"/>}
          </section>
        </Container>
        <Footer/>
    </>
  )
}

export default Favorites
