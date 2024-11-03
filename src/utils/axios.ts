import axios from "axios";
export const API_URL = "https://backend.uksein.com/api";
export const MEDIA_URL = "https://backend.uksein.com";
axios.defaults.baseURL = API_URL;

export default axios;
