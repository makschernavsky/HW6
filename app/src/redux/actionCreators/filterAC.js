import { SET_FILTER } from "../types/filterTypes";

export const setFilter = (newFilterValue) => ({
    type: SET_FILTER,
    payload: newFilterValue,
})