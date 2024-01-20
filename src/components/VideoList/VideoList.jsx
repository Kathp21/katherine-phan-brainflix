import './VideoList.scss';


const VideoList = ({data, currentVideo, alterVideo}) => {
    return (
        <ul className="video-list">
            {data.map((video) => {
                return ( video.title!==currentVideo.title &&
                <li className="video-list__container"
                    key = {video.title}
                    onClick={() => alterVideo ({
                        video: video.video,
                        title: video.title, 
                        thumbnail: video.image,
                        views: video.views,
                        likes:  video.likes,
                        channel: video.channel,
                        date: video.timestamp,
                        comments: video.comments,
                    })}>
                        <img src={video.image} className="video-list__thumbnail"/>
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