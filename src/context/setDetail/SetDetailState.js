import React, {useReducer} from 'react'
import {SetDetailContext} from "./setDetailContext";
import {setDetailReducer} from "./setDetailReducer";
import {SET_CHANGE_QUANTITY, SET_REMOVE_DISH, SET_SHOW_LOADER, SET_CHANGE_PERSONS} from "../types";

export const SetDetailState = ({children}) => {
    const initialState = {
        loading: false,
        persons: 10,
        title: 'Вечеринка в формате фуршет',
        occasion: 'Корпоратив',
        type: 'Фуршет',
        categories: [
            {
                title: 'Салаты',
                id: 1,
                dishes: [
                    {
                        title: 'Салат с гребешком и спаржей',
                        price: 310,
                        weight: 200,
                        persons: 3,
                        quantity: 10,
                        id: 1
                    },
                    {
                        title: 'Салат «Греческий»',
                        price: 270,
                        weight: 200,
                        persons: 3,
                        quantity: 10,
                        id: 2
                    }
                ]
            },
            {
                title: 'Закуски',
                id: 2,
                dishes: [
                    {
                        title: 'Фруктовое ассорти',
                        price: 150,
                        weight: 500,
                        persons: 5,
                        quantity: 23,
                        id: 1
                    },
                    {
                        title: 'Закуска «Капрезе»',
                        price: 270,
                        weight: 200,
                        persons: 3,
                        quantity: 10,
                        id: 2
                    }
                ]
            }
        ]
    }

    const removeDish = payload => {
        dispatch({type: SET_REMOVE_DISH, payload})
    }

    const changeQuantity = payload => {
        dispatch({type: SET_CHANGE_QUANTITY, payload})
    }

    const changePersons = persons => {
        dispatch({type: SET_CHANGE_PERSONS, payload: persons})
    }

    const showLoader = () => dispatch({type: SET_SHOW_LOADER})

    const [state, dispatch] = useReducer(setDetailReducer, initialState)

    return (
        <SetDetailContext.Provider value={{
            changePersons, removeDish, changeQuantity, showLoader, set_detail: state
        }}>
            {children}
        </SetDetailContext.Provider>
    )
}