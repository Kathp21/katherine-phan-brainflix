import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import VideoComponent from './components/VideoComponent/VideoComponent';
import data from './data/video-details.json';
import CommentInput from './components/CommentInput/CommentInput';

function App() {
  return (
    <>
      <Header/>
      <VideoComponent key={data[0].id} video={data[0]} />
      <CommentInput/>
    </>
  )
}

export default App;
