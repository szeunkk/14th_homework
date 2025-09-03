import { useState } from 'react'
import GetThumbnailUrl from './getThumbnailUrl'
import GetVideoFromUrl from './getVideoIdFromUrl'
import styles from './YoutubeUrl.module.css'

export default function YoutubeUrl (props:{youtubeUrl: string}){

    if(!props.youtubeUrl){
        return null
    }

    const videoId = GetVideoFromUrl(props.youtubeUrl)
    const ImageSrc = GetThumbnailUrl(videoId)
    const IframeSrc = "https://www.youtube.com/embed/" + videoId + "?autoplay=1"

    const [isPlaying,setIsPlaying] = useState(false)

    const onClickThumbnail =() => {
        setIsPlaying(isPlaying => true)
    }
    
    return(
        <div className={styles.boardsDetail__youtube__group}>
            <img src="/icons/play.svg" className={`${styles.youtube__icon} ${isPlaying ? styles.hidden : "" }`} onClick={onClickThumbnail} />
            {ImageSrc && <img src={ImageSrc} className={`${styles.youtube__thumbnail__image} ${isPlaying ? styles.hidden : "" }`} onClick={onClickThumbnail}/>}
            {isPlaying && <iframe 
                id="ytplayer" 
                type="text/html"
                src={IframeSrc}
                frameborder="0" 
                allowfullscreen
                allow="autoplay; encrypted-media"
                className={`${styles.youtube__iframe}`}></iframe>}
        </div>
    )
}