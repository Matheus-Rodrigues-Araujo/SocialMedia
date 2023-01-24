import axios from "axios";

export const LOGIN = 'login'

const ROOT_URL = "http://localhost:4000/api"

export const login = ()=>{
    const request = axios
    .get(ROOT_URL)
    .then(res => console.log(res.data))


    return {
        type: "LOGIN",
        payload: request
    }
}