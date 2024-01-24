import Header from "../../components/Header/Header";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDescription from "../../components/CurrentVideoDescription/CurrentVideoDescription";
import Comment from "../../components/Comment/Comment";
import CommentInput from "../../components/CommentInput/CommentInput";
import VideoList from "../../components/VideoList/VideoList";
import data from "../../data/video-details.json";
import { useState, useEffect } from "react";
// import axios from "axios";

const HomePage = () => {

    const [ currentVideo, setCurrentVideo ] = useState(data[0])

    const alterVideo = (videoObject) => {
        setCurrentVideo(videoObject)
    }

    // const baseUrl = "https://project-2-api.herokuapp.com"
    // const apiKey = `${baseUrl}/videos?api_key=1359f8ac-1e45-4a18-ab86-1326899beee7`
    
    // const fetchVideoList = async() => {
    //    try {
    //         const videoData = await axios.get(apiKey)
    //         alterVideo(videoData.data)
    //         return videoData.data
    //    } catch(error) {
    //     console.error(error.message)
    //    }
    // }

    // useEffect(() => {
    //     fetchVideoList();
    // }, [])

    return (
        <>
        <Header/>
        <CurrentVideo 
            currentVideo={currentVideo}
            key={data.id} 
            currentDislayVideo={currentVideo}
        />
        <main className="video-data">
            <div className="video-data__container">
                <CurrentVideoDescription currentVideoDescription={currentVideo}/>
                <CommentInput numberOfComment={currentVideo.comments.length}/>
                {currentVideo.comments.map((comment, index) => {
                    const isLastComment = index === currentVideo.comments.length - 1
                    return (
                <div className="comment__divider-container" key={comment.id}>
                    <Comment comment={comment}/>
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
        </main>
        </>
    )
}

export default HomePage;