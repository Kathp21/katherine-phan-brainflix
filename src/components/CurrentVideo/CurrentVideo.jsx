import React from 'react';
import './CurrentVideo.scss';
import viewLogo from '../../assets/images/icons/views.svg';
import likeLogo from '../../assets/images/icons/likes.svg';
import formatTimestamp from '../../utilities/formatTimestamp';

const CurrentVideo = ({ video }) => {

  const {title, channel, image, description, views, likes, timestamp} = video

  return (
    <div className="video">
        <video src={video} controls className="video__source" poster={image}></video>
        <section className="video__title-container">
          <h1 className="video__title">{title}</h1>
          <div className="video__details-container">
              <div className="video__details">
                <span className="video__info">{channel}</span>
                <span className="video__info">{formatTimestamp(timestamp)}</span>
              </div>
              <div className="video__details">
                <span className="video__info"> 
                  <img src={viewLogo} alt="Views" /> {views}
                </span>
                <span className="video__info">
                  <img src={likeLogo} alt="like"/> {likes}
                </span>
              </div>
          </div>
          <p className="video__description">{description}</p>
        </section>
    </div>
  );
};

export default CurrentVideo;

