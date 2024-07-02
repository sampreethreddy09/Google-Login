import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useGlobalContext } from './Context';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';

function Login() {
    const { setIsValid } = useGlobalContext();
    const navigate = useNavigate(); 

    const responseMessage = (response) => {
        setIsValid(true);
        console.log(response);
        const token = response.credential;
        const decoded = jwtDecode(token);
        console.log(decoded.name);
        navigate('/home', {state:{decoded}}); 
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    );
}

export default Login;
