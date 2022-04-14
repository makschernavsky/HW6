import { ADD_POST, DELETE_ALL_POSTS, DELETE_POST, SET_POSTS, UPDATE_POST } from "../types/postsTypes";

const postsReducer = (store = [], action) => {
    switch (action.type) {
        case SET_POSTS:
            return action.payload

        case DELETE_POST:
            return store.filter((post) => post.id !== action.payload)

        case DELETE_ALL_POSTS:
                return []  
        
        case UPDATE_POST: 
            return store.length
              ? store.map((post) => {
                if(post.id === action.payload.id) {
                    return action.payload
                }
                return post
            }) : [action.payload]

        case ADD_POST:
            return [...store, action.payload]  
            
       default:
           return store 
    }
}

export default postsReducer