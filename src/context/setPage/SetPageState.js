import React, {useReducer} from 'react'
import {setPageContext} from "./setPageContext";
import {setPageReducer} from "./setPageReducer";
import {SET_FILTERS} from "../types";

export const SetPageState = ({children}) => {
    const initialState = {
        filters: {
            price: {
                value: {min: 0, max: 150},
                is_open: true
            },
            persons: {
                value: {min: 0, max: 150},
                is_open: true
            },
            occasions: {
                value: [],
                is_open: true
            },

        }
    }

    const setFilters = filters => dispatch({type: SET_FILTERS, payload: filters})

    const [state, dispatch] = useReducer(setPageReducer, initialState)

    return (
        <setPageContext.Provider value={{
            setFilters, set_page: state
        }}>
            {children}
        </setPageContext.Provider>
    )
}