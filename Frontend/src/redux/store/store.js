import { combineReducers, createStore } from "redux";
import SearchReducer  from "../reducers/searchReducer";


const rootReducer = combineReducers({SearchReducer})

const store = createStore (rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

export default store;