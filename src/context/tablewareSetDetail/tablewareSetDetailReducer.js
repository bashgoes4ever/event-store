import {SET_CHANGE_QUANTITY, SET_REMOVE_DISH, SET_SHOW_LOADER, SET_CHANGE_PERSONS} from "../types";

const handlers = {
    [SET_CHANGE_QUANTITY]: (state, {payload}) => ({...state, ...payload}),
    [SET_REMOVE_DISH]: (state, {payload}) => ({...state, ...payload}),
    [SET_SHOW_LOADER]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const tablewareSetDetailReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}