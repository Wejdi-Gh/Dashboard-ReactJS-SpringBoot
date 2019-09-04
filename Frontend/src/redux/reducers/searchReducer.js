
import {SEARCH_MOVIE} from '../actionTypes/actionTypes'

const intitialstate={searchedMovieTitle:""}

function SearchReducer (state=intitialstate,action) {

if (action.type === SEARCH_MOVIE) {

    return {searchedMovieTitle : action.payload }

}

else return state
}

export default SearchReducer