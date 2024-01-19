import React from 'react';
import './VideoComponent.scss';
import viewLogo from '../../assets/images/icons/views.svg';
import likeLogo from '../../assets/images/icons/likes.svg';
import formatTimestamp from '../Utilities/FormatTimestamp';

const VideoComponent = ({ video }) => {
  return (
    <div className="video">
        <video src={video.video} controls className="video__source" poster={video.image}></video>
        <section className="video__title-container">
          <h1 className="video__title">{video.title}</h1>
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
          <p className="video__description">{video.description}</p>
        </section>
    </div>
  );
};

export default VideoComponent;

