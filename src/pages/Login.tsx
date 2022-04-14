import React from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/login/login-form";

function Login(){
    const navigate = useNavigate();
    const handleClick = () => { 
        console.log('logged in')
        navigate('/timer') 
    }

    return (
        <LoginForm />
    )
}

export default Login;