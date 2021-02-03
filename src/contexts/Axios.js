import Axios from "axios";

const AuthAxios = Axios.create();

AuthAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default AuthAxios;
