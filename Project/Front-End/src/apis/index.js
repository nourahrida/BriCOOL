import axios from "axios";
import config from "../configs/config";

const API = axios.create({ baseURL : config.API_HOST });
//this function is called before set a request to the backend
API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');
    if(profile){
        req.headers.authorization = `Bearer ${JSON.parse(profile).token}`
    }

    return req;
})

export default API;