import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AuthAxios from './Axios';

const AuthContext = createContext();
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const academyUser = JSON.parse(localStorage.getItem('academyUser'));
        if (academyUser) {
            // Masukkin autentitasi token?

            setCurrentUser(academyUser);
        }
    }, []);

    const login = async (email, password) => {
        await axios.post(`${backendUrl}/users/login`, {
            email, password
        }).then(res => {
            if (res.status >= 200 || res.status <= 299){
                const loggedUser = res.data.data.user;

                // Save user data in local storage
                localStorage.setItem('academyUser', JSON.stringify(loggedUser));
                localStorage.setItem('token', res.data.token);
                setCurrentUser(loggedUser);
            }
        })
    }

    const register = async (nama, email, password, passwordConfirm, tanggalLahir, domisili) => {
        await axios.post(`${backendUrl}/users/signup`, {
            nama,
            email,
            password,
            passwordConfirm,
            tanggalLahir,
            domisili
        }).then(res => {
            if (res.status >= 200 || res.status <= 299) {
                const loggedUser = res.data.data.user;
                // Save user data in local storage
                localStorage.setItem('academyUser', JSON.stringify(loggedUser));
                localStorage.setItem('token', res.data.token);
                setCurrentUser(loggedUser);
            }
        })
    }

    const logout = () => {
        localStorage.removeItem('academyUser');
        localStorage.removeItem('token');
        window.location.reload();
        // Manggil API logout
    }

    const forgetPassword = async (email) => {
        await axios.post(`${backendUrl}/users/forgotPassword`, {
            email
        })
    }

    const resetPassword = async (password, passwordConfirm, token) => {
        await AuthAxios.patch(`${backendUrl}/users/resetPassword/${token}`, {
            password, passwordConfirm
        }).then(res=>{
            const loggedUser = res.data.data.user;
            localStorage.setItem('academyUser', JSON.stringify(loggedUser));
            localStorage.setItem('token', res.data.token);
            setCurrentUser(loggedUser);
        })
    }

    const value = {
        currentUser,
        login,
        logout,
        register,
        forgetPassword,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
