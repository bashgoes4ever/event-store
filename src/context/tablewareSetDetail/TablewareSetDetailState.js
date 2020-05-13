import React, {useReducer} from 'react'
import {TablewareSetDetailContext} from "./tablewareSetDetailContext";
import {tablewareSetDetailReducer} from "./tablewareSetDetailReducer";
import {SET_CHANGE_QUANTITY, SET_REMOVE_DISH, SET_SHOW_LOADER, SET_CHANGE_PERSONS} from "../types";

export const TablewareSetDetailState = ({children}) => {
    const initialState = {
        loading: false,
        title: 'Весеннее вдохновение',
        categories: [
            {
                title: 'Предметы сервировки',
                id: 1,
                dishes: [
                    {
                        title: 'Вилки «Fortuna»',
                        price: 20,
                        persons: 1,
                        quantity: 10,
                        options: [
                            {
                                title: 'Длина',
                                value: '19 см.'
                            }
                        ],
                        id: 1
                    },
                    {
                        title: 'Нож столовый «Regent Inox»',
                        price: 25,
                        persons: 1,
                        quantity: 10,
                        options: [
                            {
                                title: 'Длина',
                                value: '21 см.'
                            }
                        ],
                        id: 2
                    }
                ]
            },
            {
                title: 'Посуда',
                id: 2,
                dishes: [
                    {
                        title: 'Тарелки Mason Cash',
                        price: 200,
                        persons: 1,
                        quantity: 10,
                        options: [
                            {
                                title: 'Размер',
                                value: '27 х 27 см.'
                            }
                        ],
                        id: 1
                    },
                    {
                        title: 'Салатник',
                        price: 150,
                        persons: 2,
                        quantity: 10,
                        options: [
                            {
                                title: 'Размер',
                                value: '35 х 35 см.'
                            }
                        ],
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

    const showLoader = () => dispatch({type: SET_SHOW_LOADER})

    const [state, dispatch] = useReducer(tablewareSetDetailReducer, initialState)

    return (
        <TablewareSetDetailContext.Provider value={{
            removeDish, changeQuantity, showLoader, set_detail: state
        }}>
            {children}
        </TablewareSetDetailContext.Provider>
    )
}