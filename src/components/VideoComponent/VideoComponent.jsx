import React from 'react';
import './VideoComponent.scss';
import viewLogo from '../../assets/images/icons/views.svg';
import likeLogo from '../../assets/images/icons/likes.svg';

const VideoComponent = ({ video }) => {
  return (
    <div className="video">
      <div className="video__thumbnail">
        <video src={video.video} controls className="video__source"></video>
          <img src={video.image} alt="thumbnail" className="video__image" />
        </div>
        <section>
          <h2>{video.title}</h2>
          <div className="video__details-container">
              <div className="video__details">
                <span className="video__info">{video.channel}</span>
                <span className="video__info">{formatTimestamp(video.timestamp)}</span>
              </div>
              <div className="video__details">
                <span className="video__info"> 
                  <img src={viewLogo} alt="Views" /> {video.views}
                </span>
                <span className="video__info">
                  <img src={likeLogo} alt="like"/> {video.likes}
                </span>
              </div>
          </div>
        </section>
        <p>{video.description}</p>

    </div>
  );
};

export default VideoComponent;

function formatTimestamp(timestamp) {
  let date = new Date(timestamp)
  let day = date.getDate()
  let month = date.getMonth() +1
  const year = date.getFullYear()
        
    if (day < 10) {
      day = '0' + day
    } 

    if (month < 10) {
        month = '0' + month
    }
    return `${month}/${day}/${year}`

}