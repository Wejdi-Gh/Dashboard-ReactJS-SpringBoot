import axios from 'axios';
import { UrlUser } from '../Constants/User-uri-constants'

export function signup(newUser) {

    return axios.post(UrlUser.SIGNUP_URL,newUser)

}


export function login() {

    return axios.post(UrlUser.LOGIN_URL)


}

export function updateUser(updatedUser) {

    return axios.post(UrlUser.UPDATE_USER_URL,updatedUser)


}


export function getAllUsers() {

    return axios.get(UrlUser.GET_ALL_USERS_URL)


}


export function deleteUser(email) {

    return axios.delete(UrlUser.DELETE_USER_URL+`/${email}`)
    
}


