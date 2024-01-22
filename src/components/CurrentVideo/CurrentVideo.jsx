import React from 'react';
import './CurrentVideo.scss';

const CurrentVideo = ({ currentVideo }) => {

  const {image} = currentVideo

  return (
    <div className="video">
        <video src={currentVideo} controls className="video__source" poster={image}></video>
    </div>
  );
};

export default CurrentVideo;

