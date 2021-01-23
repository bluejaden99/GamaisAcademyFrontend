import Axios from "axios";

const AuthAxios = Axios.create();

AuthAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
  
AuthAxios.interceptors.response.use(undefined, (error) => {
    if (error.response) {
        if (error.response.status < 200 || error.response.status > 299) {
          localStorage.removeItem('academyUser');
          localStorage.removeItem('token');
          window.location.replace(`/login`);
        }
    }
    throw error;
});

export default AuthAxios;
