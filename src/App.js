import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import VideoComponent from './components/VideoComponent/VideoComponent';
import data from './data/video-details.json';
import Comment from './components/Comment/Comment';

function App() {
  return (
    <>
      <Header/>
      <VideoComponent key={data[0].id} video={data[0]} />
      <Comment/>
    </>
  )
}

export default App;
