import {SHOW_MENU, HIDE_MENU, SET_HEADER_CLASSES} from "../types";

const handlers = {
    [SHOW_MENU]: (state) => ({...state, show: true}),
    [HIDE_MENU]: (state) => ({...state, show: false}),
    [SET_HEADER_CLASSES]: (state, {payload}) => ({...state, headerClasses: payload}),
    DEFAULT: state => state
}

export const menuReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}