import './App.scss';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import VideoComponent from './components/VideoComponent/VideoComponent';
import data from './data/video-details.json';

function App() {
  return (
    <>
      <Header/>
      <VideoComponent key={data[0].id} video={data[0]} />
    </>
  )
}

export default App;
