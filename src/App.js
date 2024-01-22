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
          {currentVideo.comments.map((comment, index) => {
            const isLastComment = index === currentVideo.comments.length - 1;
            return (
              <div>
                <Comment key={comment.id} comment={comment}/>
                {!isLastComment && <div className="comment__divider"></div>}
                {isLastComment && <div className="comment__last-divider"></div>}
              </div>
            )
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
