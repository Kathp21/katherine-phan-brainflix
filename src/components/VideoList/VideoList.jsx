import './VideoList.scss';
import { VideoApi } from '../../video-api';
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


const api = new VideoApi("1359f8ac-1e45-4a18-ab86-1326899beee7")

const displayVideo = async () => {
    const video = await api.getVideos()
    console.log(video)
}

displayVideo()


const displayVideoDetails = async(id) => {
    const videoDetails = await api.getVideoDetails(id)
    console.log(videoDetails)
}

displayVideoDetails("84e96018-4022-434e-80bf-000ce4cd12b8")

export default VideoList;