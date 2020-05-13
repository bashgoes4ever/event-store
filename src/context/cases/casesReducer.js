import {SET_CASE} from '../types'

const handlers = {
    [SET_CASE]: (state, {payload}) => ({...state, ...payload}),
    DEFAULT: state => state
}

export const casesReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}