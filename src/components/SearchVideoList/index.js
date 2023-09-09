import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import Loader from "../Loader"
import { useState } from "react";
import { useEffect } from "react";

// filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    
    return ( 
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Research..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            
            {loading ? <Loader /> : <VideoList
                videos={foundVideos}
                emptyHeading={`No videos about "${searchText}"`}
            />}
            
        </section>
    );
}

export default SearchVideoList;
