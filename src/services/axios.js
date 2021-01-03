import axios from 'axios';
import Cookie from 'universal-cookie';

const cookie = new Cookie();
axios.defaults.withCredentials = true;

const axiosCall = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

axiosCall.interceptors.request.use(function (config) {
    const accessToken = cookie.get('accessToken');
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return config;
})

export default axiosCall;