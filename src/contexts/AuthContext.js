import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

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
        await axios.post('users/login', {
            email, password
        }).then(res => {
            if (res.status == 200) {
                const loggedUser = res.data.data.user;

                // Save user data in local storage
                localStorage.setItem('academyUser', JSON.stringify(loggedUser));

                setCurrentUser(loggedUser);
            }
        })
    }

    const logout = () => {
        localStorage.removeItem('acadamyUser');
        // Manggil API logout
    }

    const value = {
        currentUser,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}