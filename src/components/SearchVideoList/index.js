import styles from './SearchVideoList.module.css';
import VideoList from '../VideoList';
import { useState } from 'react';

function filterVideos(videos, searchText) {
  const searchTextLower = searchText.toLowerCase();
  return videos.filter(
    (video) =>
      video.category.toLowerCase().includes(searchTextLower) ||
      video.title.toLowerCase().includes(searchTextLower),
  );
}

const SearchVideoList = ({ videos }) => {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <VideoList videos={foundVideos} emptyHeading={`Sem Vídeos sobre "${searchText}"`}/>
    </section>
  );
};

export default SearchVideoList;
