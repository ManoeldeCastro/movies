import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Watch.module.css'
import videos from '../../json/videos.json'
import PageNotFound from '../PageNotFound'

const Watch = () => {
  const params = useParams()
  console.log(params, 'testing')
  const video = videos.find(v => v.id === params.id) 
  if(!video) {
    return <PageNotFound/>
  }
  return (
    <>
    <Header />
    <Container>
      <section className={styles.watch}>
        <iframe 
            width="854" 
            height="480" 
            src={`https://www.youtube.com/embed/${video.id}?si=bxvPFmGHrBI-4r2d`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        ></iframe>
      </section>
    </Container>
    <Footer />
  </>
  )
}

export default Watch
