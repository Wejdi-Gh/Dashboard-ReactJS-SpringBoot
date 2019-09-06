import{ http } from '../../Common/Service/interceptor-service';
import { UrlUser } from '../Constants/User-uri-constants'

export function signup(newUser) {

    return http.post(UrlUser.SIGNUP_URL,newUser)

}


export function login() {

    return http.post(UrlUser.LOGIN_URL)


}

export function updateUser(updatedUser) {

    return http.post(UrlUser.UPDATE_USER_URL,updatedUser)


}


export function getAllUsers() {

    return http.get(UrlUser.GET_ALL_USERS_URL)


}


export function deleteUser(email) {

    return http.delete(UrlUser.DELETE_USER_URL+`/${email}`)
    
}


