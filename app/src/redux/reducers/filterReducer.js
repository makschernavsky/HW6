import { SET_FILTER } from "../types/filterTypes";

const filterReducer = (store='', action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.payload

        default: 
        return store
    }
}

export default filterReducer