import Header from "../../components/Header/Header";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import { useRef, useState } from "react";

export default function UploadPage () {

    const formRef = useRef();
    const [videos, setVideos] = useState([])

    const api = new VideoApi()

    const addVideo = async (event) => {
        event.preventDefault()
            const newVideoData = {
                title: formRef.current.title.value,
                description: formRef.current.description.value,
            }
        event.target.reset()
        try {
            const newVideo = await api.postVideo()
        } catch(error) {
            console.error(error)
        }
    }


    return (
        <>
            <Header/>
            <UploadVideo/>
        </>
        
    )
}