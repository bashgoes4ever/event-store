import {SET_FILTERS} from "../types";

const handlers = {
    [SET_FILTERS]: (state, {payload}) => ({...state, filters: {...payload}}),
    DEFAULT: state => state
}

export const tablewarePageReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}