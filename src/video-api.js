import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";

export class VideoApi {
    constructor(apiKey) {
        this.baseUrl = "https://project-2-api.herokuapp.com"
        this.apiKey = apiKey
    }

    getVideos = async () => {
        try {
            const videoData = await axios.get(`${this.baseUrl}/videos?api_key=${this.apiKey}`)
            return videoData.data
        } catch(error) {
            console.error(error.message)
        }
    }

    getVideoDetails = async (id) => {
        try {
            const videoDetails = await axios.get(`${this.baseUrl}/videos/${id}?api_key=${this.apiKey}`)
            return videoDetails.data
        } catch(error) {
            console.error(error.message)
        }
    }
}

