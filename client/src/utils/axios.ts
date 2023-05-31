import axios from 'axios';
import {environment} from "../environment";

const instance = axios.create({
    baseURL: environment.baseApiURL,
});

instance.interceptors.request.use((config) => {
    (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});

export default instance;
