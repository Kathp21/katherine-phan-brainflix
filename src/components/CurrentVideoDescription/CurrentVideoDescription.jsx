import viewLogo from '../../assets/images/icons/views.svg';
import likeLogo from '../../assets/images/icons/likes.svg';
import formatTimestamp from '../../utilities/formatTimestamp';
import './CurrentVideoDescription.scss';

const CurrentVideoDescription = ({currentVideoDescription}) => {
    const {title, channel, description, views, likes, timestamp} = currentVideoDescription
   
    return (
        <section className="video-description">
            <h1 className="video-description__title">{title}</h1>
            <div className="video-description__details-container">
                <div className="video-description__details">
                    <span className="video-description__info video-description__info--active">By {channel}</span>
                    <span className="video-description__info">{formatTimestamp(timestamp)}</span>
                </div>
                <div className="video-description__details">
                    <span className="video-description__info"> 
                        <img src={viewLogo} alt="Views" className="video-description__icon"/> {views}
                    </span>
                    <span className="video-description__info">
                        <img src={likeLogo} alt="like" className="video-description__icon"/> {likes}
                    </span>
                </div>
            </div>
            <p className="video-description__description">{description}</p>
        </section>
    )
}

export default CurrentVideoDescription;