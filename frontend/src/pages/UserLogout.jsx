import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser  = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
                    headers: { 
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error logging out:', error);
                
            }
        };

        logoutUser ();
    }, [navigate, token]); 

    return (
        <div>
            User Logout
        </div>
    );
};

export default UserLogout;