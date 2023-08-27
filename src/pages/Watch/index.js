import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Watch.module.css'

const Watch = () => {
  return (
    <>
    <Header />
    <Container style={{ padding: "0px" }}>
      <section className={styles.watch}>
        <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=kdXauHwDMtFiHLTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </Container>
    <Footer />
  </>
  )
}

export default Watch
