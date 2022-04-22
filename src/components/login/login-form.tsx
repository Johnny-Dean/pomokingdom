import { useState } from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../../services/api-call";

export interface authform {
    auth: number,
    user_name: string,
    password: string,
    confirm_password: string
}

function LoginForm(){
    const navigate = useNavigate();
    const [form, setForm] = useState<authform>({ auth: 1, user_name: '', password: '', confirm_password: ''});
    const [signup, setSignup] = useState<boolean>(false);
    const handleChange = (e: any) => setForm({...form, [e.target.name]: e.target.value})
    
    const handleClick = () => {
        if (signup){
            API.signUp(form).then((res: any) => {
                if (!res.hasError) navigate('/timer');
                else alert("User does not exist.")
            });
        }
        else {
            API.signIn(form).then((res: any) => {
                if (!res.hasError) navigate('/timer');
                else alert("User does not exist.")
            });
        }
        
    }
    
    if(!signup){
        return (
            <Card sx={{display: "flex", flexDirection: "column", maxWidth: "150px"}}>
                <input name="user_name" onChange={handleChange} placeholder={'Username'}></input>
                <input name="password" onChange={handleChange} placeholder={'Password'}></input>
                <button onClick={handleClick}>Log In</button>
                <button onClick={() => setSignup(true)}>Not signed up?</button>
            </Card>
        )
    }
    else {
        return (
            <Card sx={{display: "flex", flexDirection: "column", maxWidth: "150px"}}>
                <input name="user_name" onChange={handleChange} placeholder={'Username'}></input>
                <input name="password" onChange={handleChange} placeholder={'Password'}></input>
                <input name="confirm_password" onChange={handleChange} placeholder={'Repeat Password'}></input>
                <button onClick={() => setSignup(false)}>Already signed up?</button>
            </Card>
        )
    }
}
export default LoginForm;