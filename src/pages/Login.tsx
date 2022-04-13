import React from "react";
import { useNavigate } from "react-router";

function Login(){
    const navigate = useNavigate();
    const handleClick = () => { 
        console.log('logged in')
        navigate('/timer') 
    }

    return (
        <button onClick={handleClick}>hey</button>
    )
}

export default Login;