import axios from 'axios';
import { UrlUser } from '../Constants/User-uri-constants'

export function signup(newUser) {

    return axios.post(UrlUser.SIGNUP_URL,newUser)

}


export function login() {

    return axios.post(UrlUser.LOGIN_URL)


}

export function updateUser() {

    return axios.post(UrlUser.UPDATE_USER_URL)


}


