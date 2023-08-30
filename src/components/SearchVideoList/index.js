import styles from './SearchVideoList.module.css'
import VideoList from '../VideoList'
import { useState } from 'react'


const filterVideos = (videos, searchText) => {
    return videos.filter(video => video.category.includes(searchText)).length > 0
}

const SearchVideoList = ({videos}) => {

  const [searchText, setSearchText] = useState("")
  const foundVideos = filterVideos(videos, searchText)

  return (
    <section className={styles.container}>
        <input type="search" placeholder='Pesquisar...'
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        />
        <VideoList videos={videos}/>


    </section>
  )
}

export default SearchVideoList
