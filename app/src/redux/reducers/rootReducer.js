import {combineReducers} from 'redux'
import filterReducer from './filterReducer'
import postsReducer from './postsReducers'
 
const rootReducer = combineReducers({
    posts: postsReducer,
    filter: filterReducer,
})

export default rootReducer