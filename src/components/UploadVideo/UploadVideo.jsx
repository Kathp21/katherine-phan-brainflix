import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import Button from '../Button/Button';
import './UploadVideo.scss';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";
import { VideoApi } from "../../api/video-api";

export default function UploadVideo() {

    const formRef = useRef()
    const [videos, setVideos] = useState([])
    const navigate = useNavigate()

    const api = new VideoApi()

    const addVideo = async (event) => {
        event.preventDefault()
            const newVideoData = {
                title: formRef.current.videoTitle.value,
                description: formRef.current.videoDescription.value,
            }
        event.target.reset()
        try {
            let newVideo = await api.postVideo(newVideoData)
            setVideos([...videos,newVideo])
            alert('Video loaded successfully')
            navigate('/')
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <section className='upload-video'>
            <h1 className='upload-video__page-header'>Upload Video</h1>
            <section className='upload-video__main-section'>
                <div className='upload-video__video-thumbnail'>
                    <h2 className='upload-video__subheader'>VIDEO THUMBNAIL</h2>
                    <img src={videoThumbnail} alt='upload video preview' className='upload-video__thumbnail'/>
                </div>
                <div className='upload-video__container'>
                    <form onSubmit={addVideo} ref={formRef} className='upload-video__form-section'>
                        <div className='upload-video__title-container'>
                            <label htmlFor='videoTitle' className='upload-video__form-title'>TITLE YOUR VIDEO</label>
                            <input type='text' name='videoTitle' id='videoTitle' placeholder='Add a title to your video'></input>
                        </div>
                        <div className='upload-video__description-container'>
                            <label htmlFor='videoDescription' className='upload-video__form-title '>ADD A VIDEO DESCRIPTION</label>
                            <input type='text' name='videoDescription' id='videoDescription' placeholder='Add a description to your video'></input>
                        </div>
                        <div className='upload-video__btn-container'>
                            <Button buttonText="PUBLISH" variant="button__upload-video" type="submit"/>
                            <h3 className='upload-video__cancel'>CANCEL</h3>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}