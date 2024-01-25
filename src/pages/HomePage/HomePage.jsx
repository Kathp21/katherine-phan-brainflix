import Header from "../../components/Header/Header";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDescription from "../../components/CurrentVideoDescription/CurrentVideoDescription";
import Comment from "../../components/Comment/Comment";
import CommentInput from "../../components/CommentInput/CommentInput";
import VideoList from "../../components/VideoList/VideoList";
// import data from "../../data/video-details.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { VideoApi } from "../../video-api";

const HomePage = () => {

    const api = new VideoApi("1359f8ac-1e45-4a18-ab86-1326899beee7")

    const [ currentVideo, setCurrentVideo ] = useState()
    const [ videoList, setVideoList ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    const {videoId} = useParams()

    const fetchVideoDetails = async (id) => {
        const videoDetails = await api.getVideoDetails(id)
        setCurrentVideo(videoDetails)
        setIsLoading(false)
    }

    useEffect(() => {
        console.log(videoId)
        fetchVideoDetails(videoId)
    },[videoId])

    const fetchVideos = async () => {
        const videos = await api.getVideos()
        console.log(videos)
        setVideoList(videos)
    }

    useEffect(() => {
        fetchVideos()
    }, [])

    // useEffect(() => {
    //     console.log(videoId)
    //     data.forEach((videoData)=> {
    //         if (videoData.id === videoId) {
    //             setCurrentVideo(videoData)
    //         }
    //     })

    // }, [videoId])

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    return (
        <>
        <Header/>
        <CurrentVideo 
            currentVideo={currentVideo}
            key={currentVideo.id} 
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
                    data = {videoList}
                    currentVideo= {currentVideo}
                />
            </div>
        </main>
        </>
    )
}

export default HomePage;