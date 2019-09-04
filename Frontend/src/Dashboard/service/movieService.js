import axios from 'axios';


import {get_all_movies_MovieDB }from '../Constants/movie-uri-constants'

 export function getAllMovies () {

return axios.get(get_all_movies_MovieDB)

}

