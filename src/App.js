import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import data from './data/video-details.json';
import CommentInput from './components/CommentInput/CommentInput';
import Comment from './components/Comment/Comment';
import VideoList from './components/VideoList/VideoList';
// import nextVideo from './data/videos.json';

function App() {

  const [ currentVideo, setCurrentVideo ] = useState(data[0])

  const alterVideo = (videoObject, event) => {
    event.preventDefault();
    setCurrentVideo(videoObject)
  }

  return (
    <>
      <Header/>
      <CurrentVideo 
        key={data[0].id} video={data[0]} 
        currentVideo={currentVideo}
        />
      <CommentInput/>
      {data[0].comments.map((comment) => {
        return <Comment key={comment.id} comment={comment}/>
      })}
      <VideoList
        data = {data}
        currentVideo= {currentVideo}
        alterVideo ={alterVideo}
      />
    </>
  )
}

export default App;
