import axios from "axios";
import { authform } from "../components/login/login-form";
const baseUrl: string = 'http://localhost:5000/api/v1/users';

export const signIn = (formdata: authform) => {
    axios.put(baseUrl, formdata).then(res => console.log(res)).catch(err => console.log(err))
}

export const signUp = (formdata: authform) => {
    axios.put(baseUrl, formdata).then(res => console.log(res)).catch(err => console.log(err))
}