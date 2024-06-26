import Header from "../../components/Header/Header";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDescription from "../../components/CurrentVideoDescription/CurrentVideoDescription";
import Comment from "../../components/Comment/Comment";
import CommentInput from "../../components/CommentInput/CommentInput";
import VideoList from "../../components/VideoList/VideoList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoApi } from "../../api/video-api";

const HomePage = () => {

    const api = new VideoApi()

    const [ currentVideo, setCurrentVideo ] = useState()
    const [ videoList, setVideoList ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ startingVideoId, setStartingVideoId ] = useState()

    const {videoId} = useParams()
    
    const fetchVideoDetails = async (id) => {
        if (id == null) {
            return
        }
        const videoDetails = await api.getVideoDetails(id)
        setCurrentVideo(videoDetails)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchVideoDetails(videoId)
    },[videoId])

    useEffect(() => {
        fetchVideoDetails(startingVideoId)
    }, [startingVideoId])

    const fetchVideos = async () => {
        const videos = await api.getVideos()
        setVideoList(videos)
        setStartingVideoId(videos[0].id)
    }

    useEffect(() => {
        fetchVideos()
    }, [])

    if (isLoading) {
        return (<Header/>)
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