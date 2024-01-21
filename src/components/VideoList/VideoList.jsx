import './VideoList.scss';


const VideoList = ({data, currentVideo, alterVideo}) => {
    return (
        <ul className="video-list">
            <p className="video-list__section-header">NEXT VIDEOS</p>
            {data.map((video) => {
                return ( video.title!==currentVideo.title &&
                <li className="video-list__container"
                    key = {video.title}
                    onClick={() => alterVideo (video)}>
                        <img src={video.image} className="video-list__thumbnail" alt="thumbnail"/>
                        <div className="video-list__info">
                            <p className="video-list__video-title">{video.title}</p>
                            <p className="video-list__channel">{video.channel}</p>
                        </div>
                </li>
                )
            })}
        </ul>
    )
}

export default VideoList;