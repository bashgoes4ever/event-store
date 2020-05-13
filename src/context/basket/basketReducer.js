import {
    BASKET_CHANGE_QUANTITY,
    BASKET_REMOVE_ITEM,
    BASKET_ADD_STUFF,
    BASKET_STUFF_QUANTITY,
    CUSTOMER_DATE,
    SET_CUSTOMER_DATA,
    SET_VALIDATION
} from '../types'

const handlers = {
    [BASKET_CHANGE_QUANTITY]: (state, {payload}) => ({...state, categories: [...payload]}),
    [BASKET_REMOVE_ITEM]: (state, {payload}) => ({...state, categories: [...payload]}),
    [BASKET_ADD_STUFF]: (state, {payload}) => ({...state, stuff: [...payload]}),
    [BASKET_STUFF_QUANTITY]: (state, {payload}) => ({...state, stuff: [...payload]}),
    [CUSTOMER_DATE]: (state, {payload}) => ({...state, customer_contacts: payload}),
    [SET_CUSTOMER_DATA]: (state, {payload}) => ({...state, customer_contacts: payload}),
    [SET_VALIDATION]: (state, {payload}) => ({...state, customer_contacts: payload}),
    DEFAULT: state => state
}

export const basketReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}