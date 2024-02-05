import './VideoList.scss';
import { Link } from 'react-router-dom';

const VideoList = ({data, currentVideo}) => {
    return (
        <ul className="video-list">
            <p className="video-list__section-header">NEXT VIDEOS</p>
            {data.map((video) => {
                return ( video.id!==currentVideo.id &&
                    <Link to={`/video/${video.id}`} key={video.id} style={{textDecoration: 'none'}}>
                        <li className="video-list__container">
                            <img src={video.image} className="video-list__thumbnail" alt="thumbnail"/>
                            <div className="video-list__info">
                                <p className="video-list__video-title">{video.title}</p>
                                <p className="video-list__channel">{video.channel}</p>
                            </div>
                        </li> 
                    </Link>
                )
            })}
        </ul>
    )
}

export default VideoList;
