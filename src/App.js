import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import data from './data/video-details.json';
import CommentInput from './components/CommentInput/CommentInput';
import Comment from './components/Comment/Comment';
import VideoList from './components/VideoList/VideoList';
import CurrentVideoDescription from './components/CurrentVideoDescription/CurrentVideoDescription';

function App() {

  const [ currentVideo, setCurrentVideo ] = useState(data[0])

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject)
  }

  return (
    <>
      <Header/>
      <CurrentVideo 
        currentVideo={currentVideo}
        key={data.id} 
        currentDislayVideo={currentVideo}
      />
      <div className="video-data">
        <div className="video-data__container">
          <CurrentVideoDescription currentVideoDescription={currentVideo}/>
          <CommentInput numberOfComment={currentVideo.comments.length}/>
          {currentVideo.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment}/>
          })}
        </div>
        <div className="video-data__side-bar">
          <VideoList
            data = {data}
            currentVideo= {currentVideo}
            alterVideo ={alterVideo}
          />
        </div>
      </div>
    </>
  )
}

export default App;
