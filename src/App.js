import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import data from './data/video-details.json';
import CommentInput from './components/CommentInput/CommentInput';
import Comment from './components/Comment/Comment';
import VideoList from './components/VideoList/VideoList';
import CurrentVideoDescription from './components/CurrentVideoDescription/CurrentVideoDescription';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {

  const [ currentVideo, setCurrentVideo ] = useState(data[0])

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<HomePage/>}/>
          <Route path ="/video/:videoId" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
