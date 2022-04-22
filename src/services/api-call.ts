import axios from "axios";
import { authform } from "../components/login/login-form";
const BASE_URL: string = 'http://localhost:5000/api/v1/users';
let USER_ID: string | null = null;
let storedID = localStorage.getItem('id');
if (storedID) {
    USER_ID = JSON.parse(storedID);
}

const signIn = (formdata: authform) => {
    return axios.put(BASE_URL, formdata).then(res => {
        localStorage.setItem('id', JSON.stringify(res.data.result._id));
        return {hasError: false}
    }).catch(err => {
        console.log(err);
        return {hasError: true}
    })
}

const signUp = (formdata: authform) => {
    return axios.post(BASE_URL, formdata).then(res => console.log(res)).catch(err => console.log(err))
}

const getCharacter = () => {
    return axios.get(`${BASE_URL}/character?userId=${USER_ID}`).then(res => res.data)
}

const getItemShop = () => {
    const request = axios.get("http://localhost:5000/api/v1/itemshop/");
    return request.then(res =>  res.data.items);
}

const API = {
    signUp,
    signIn,
    getCharacter,
    getItemShop

}
export default API;