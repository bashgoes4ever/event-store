import React, {useReducer} from 'react'
import {EquipmentContext} from "./EquipmentPageContext";
import {equipmentPageReducer} from "./EquipmentPageReducer";
import {SET_FILTERS} from "../types";

export const EquipmentPageState = ({children}) => {
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
            category: {
                value: 'all',
                is_open: true
            },
            occasions: {
                value: [],
                is_open: true
            },

        }
    }

    const setFilters = filters => dispatch({type: SET_FILTERS, payload: filters})

    const [state, dispatch] = useReducer(equipmentPageReducer, initialState)

    return (
        <EquipmentContext.Provider value={{
            setFilters, menu_page: state
        }}>
            {children}
        </EquipmentContext.Provider>
    )
}