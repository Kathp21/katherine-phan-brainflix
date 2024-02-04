import axios from "axios";

export class VideoApi {
    constructor() {
        this.baseUrl = "http://localhost:8000"
    }

    getVideos = async () => {
        try {
            const videoData = await axios.get(`${this.baseUrl}/videos`)
            return videoData.data
        } catch(error) {
            console.error(error)
        }
    }

    getVideoDetails = async (id) => {
        try {
            const videoDetails = await axios.get(`${this.baseUrl}/videos/${id}`)
            return videoDetails.data
        } catch(error) {
            console.error(error)
        }
    }

    postVideo = async () => {
        try {
            const newVideo = await axios.post(`${this.baseUrl}/videos`)
            return newVideo.data
        }catch(error) {
            console.error(error)
        }
    }
}

