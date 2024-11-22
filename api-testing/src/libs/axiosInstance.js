import axios, { Axios } from "axios";

const axiosInstance = axios.create({
    baseURL : 'https://demoqa.com/webtables'
})

export default axiosInstance