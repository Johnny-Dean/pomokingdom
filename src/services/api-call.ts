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

// axios.get(`http://localhost:5000/api/v1/users/tasks?userId=${userId}`)
const getTask = () => {
    return axios.get(`${BASE_URL}/tasks?userId=${USER_ID}`)
}

const postTask = (task: string) => {
    return axios.post(`http://localhost:5000/api/v1/users/tasks`, {
        user_id: USER_ID, 
        task_name: task
    })
}

    // const res = await axios.get("/users/friends/" + userId);
    // http://localhost:5000/api/v1/users/friends/61a940b766d11ba235666732
    // 'http://localhost:5000/api/v1/users';
    // `http://localhost:5000/api/v1/users/friends/?userId=${userId}`
const getFriendsList = () => {
    return axios.get(`${BASE_URL}/friends/?userId=${USER_ID}`).then(res => res.data).catch(err => console.log(err))
}

const API = {
    signUp,
    signIn,
    getCharacter,
    getItemShop,
    postTask,
    getTask,
    getFriendsList

}
export default API;