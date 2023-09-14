import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';

function AuthRoute() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {

        if (token) {
            setLoading(false)
        } else {
            const AuthCheck = onAuthStateChanged(auth, (user,) => {
                console.log(auth, user);
                if (user) {
                    setLoading(false);
                } else {
                    console.log('unauthorized');
                    navigate('/login');
                }

            });
            return () => AuthCheck();
        }
        
    }, [auth, navigate, token]);

    if (loading) return <p>loading ...</p>;

    return <><HomePage /></>;
}

export default AuthRoute;