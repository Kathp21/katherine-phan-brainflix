import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import Button from '../Button/Button';
import './UploadVideo.scss';
import { Link } from 'react-router-dom';

export default function UploadVideo() {

    const handleClick = (event) => {
        
        alert("Video upload successfully")
        event.preventDefault()
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
                    <form className='upload-video__form-section'>
                        <div className='upload-video__title-container'>
                            <label htmlFor='videoTitle' className='upload-video__form-title'>TITLE YOUR VIDEO</label>
                            <input type='text' name='videoTitle' id='videoTitle' placeholder='Add a title to your video'></input>
                        </div>
                        <div className='upload-video__description-container'>
                            <label htmlFor='videoDescription' className='upload-video__form-title '>ADD A VIDEO DESCRIPTION</label>
                            <input type='text' name='videoDescription' id='videoDescription' placeholder='Add a description to your video'></input>
                        </div>
                    </form>
                </div>
            </section>
            <div className='upload-video__publish-btn'>
                <Link to="/" onClick = {(event) => {handleClick()}}><Button buttonText="PUBLISH" variant="button__upload-video"/></Link>
                <h3 className='upload-video__cancel'>CANCEL</h3>
            </div>
        </section>
    )
}