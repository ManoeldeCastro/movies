import styles from './Category.module.css';
import videos from '../../json/videos.json';
import Card from '../Card';

export const Categories = [...new Set(videos.map(video => video.category))].map(category => {
  return <>
    <h2>{category}</h2>
    <div className='cards'>
      {videos.map(video => video.category === category && <Card id={video.id} key={video.id} />)}
    </div>
  </>
  })



const Category = () => {
  return (
    <section className={styles.category}>
      {Categories}
    </section>
  )
}

export default Category;
