import{ http } from '../../Common/Service/interceptor-service';


import {get_all_movies_MovieDB }from '../Constants/movie-uri-constants'

 export function getAllMovies () {

return http.get(get_all_movies_MovieDB)

}

