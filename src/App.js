import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import VideoComponent from './components/VideoComponent/VideoComponent';
import data from './data/video-details.json';
import CommentInput from './components/CommentInput/CommentInput';
import Comment from './components/Comment/Comment';

function App() {

  return (
    <>
      <Header/>
      <VideoComponent key={data[0].id} video={data[0]} />
      <CommentInput/>
      {data[0].comments.map((comment) => {
        return <Comment key={comment.id} comment={comment}/>
      })}
    </>
  )
}

export default App;
