import React from 'react';
import './CurrentVideo.scss';
// import viewLogo from '../../assets/images/icons/views.svg';
// import likeLogo from '../../assets/images/icons/likes.svg';
// import formatTimestamp from '../../utilities/formatTimestamp';

const CurrentVideo = ({ currentVideo }) => {

  const {image} = currentVideo

  return (
    <div className="video">
        <video src={currentVideo} controls className="video__source" poster={image}></video>
        {/* <section className="video__title-container">
          <h1 className="video__title">{title}</h1>
          <div className="video__details-container">
              <div className="video__details">
                <span className="video__info video__info--active">By {channel}</span>
                <span className="video__info">{formatTimestamp(timestamp)}</span>
              </div>
              <div className="video__details">
                <span className="video__info"> 
                  <img src={viewLogo} alt="Views" /> {views}
                </span>
                <span className="video__like-number">
                  <img src={likeLogo} alt="like"/> {likes}
                </span>
              </div>
          </div>
          <p className="video__description">{description}</p>
        </section> */}
    </div>
  );
};

export default CurrentVideo;

