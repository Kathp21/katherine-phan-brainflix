import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import Button from '../Button/Button';
import './UploadVideo.scss';

export default function UploadVideo() {
    return (
        <section className='upload-video'>
            <h1 className='upload-video__page-header'>Upload Video</h1>
            <div>
                <h2 className='upload-video__subheader'>VIDEO THUMBNAIL</h2>
                <img src={videoThumbnail} alt='upload video preview' className='upload-video__thumbnail'/>
            </div>
            <section className='upload-video__container'>
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
            <div className='upload-video__publish-btn'>
                <Button buttonText="PUBLISH" variant="button__upload-video"/>
                <h3 className='upload-video__cancel'>CANCEL</h3>
            </div>
            </section>
        </section>
    )
}