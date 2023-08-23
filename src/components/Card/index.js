import styles from './Card.module.css'

const Card = ({ id }) => {
  return (
    <div className={styles.card}>
        <a 
          href={`https://www.youtube.com/watch?v=${id}`} rel='noreferrer noopener'
          target='_blank'
        >
            <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
        </a>
    </div>
  )
}

export default Card
