import React, {useReducer} from 'react'
import {basketReducer} from "./basketReducer";
import {BasketContext} from "./basketContext";
import {
    BASKET_REMOVE_ITEM,
    BASKET_CHANGE_QUANTITY,
    BASKET_STUFF_QUANTITY,
    BASKET_ADD_STUFF,
    CUSTOMER_DATE,
    SET_CUSTOMER_DATA,
    SET_VALIDATION
} from "../types";

export const BasketState = ({children}) => {
    const initialState = {
        customer_contacts: {
            date: '',
            name: '',
            phone: '',
            email: '',
            address: {
                delivery: true,
                pickup: '',
                city: '',
                street: '',
                house: '',
                flat: '',
                coords: [],
                deliveryPrice: null,
                deliveryType: null
            },
            valid: false
        },
        stuff: [
            {
                title: 'Повар',
                quantity: 1,
                price: 5000,
                checked: false
            },
            {
                title: 'Официант',
                quantity: 1,
                price: 4000,
                checked: false
            },
            {
                title: 'Бармен',
                quantity: 1,
                price: 5000,
                checked: false
            },
            {
                title: 'Грузчик',
                quantity: 1,
                price: 5000,
                checked: false
            },
            {
                title: 'Уборщица',
                quantity: 1,
                price: 5000,
                checked: false
            },
            {
                title: 'Охранник',
                quantity: 1,
                price: 5000,
                checked: false
            }
        ],
        categories: [
            {
                id: 1,
                title: 'Сет «Вечеринка в формате фуршет»',
                categories: [
                    {
                        id: 1,
                        title: 'Салаты',
                        dishes: [
                            {
                                title: 'Салат с гребешком и спаржей',
                                price: 310,
                                quantity: 10,
                                id: 1
                            },
                            {
                                title: 'Салат «Греческий»',
                                price: 270,
                                quantity: 10,
                                id: 2
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Закуски',
                        dishes: [
                            {
                                title: 'Фруктовое ассорти',
                                price: 500,
                                quantity: 10,
                                id: 1
                            },
                            {
                                title: 'Закуска «Капрезе»',
                                price: 150,
                                quantity: 5,
                                id: 2
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: 'Дополнительные блюда',
                dishes: [
                    {
                        title: 'Салат с гребешком и спаржей',
                        price: 310,
                        quantity: 7,
                        id: 1
                    },
                    {
                        title: 'Салат «Греческий»',
                        price: 270,
                        quantity: 10,
                        id: 2
                    }
                ]
            }
        ]
    }

    const removeDish = payload => {
        dispatch({type: BASKET_REMOVE_ITEM, payload})
    }

    const changeQuantity = payload => {
        dispatch({type: BASKET_CHANGE_QUANTITY, payload})
    }

    const addStuff = payload => {
        dispatch({type: BASKET_ADD_STUFF, payload})
    }

    const stuffQuantity = payload => {
        dispatch({type: BASKET_STUFF_QUANTITY, payload})
    }

    const setDate = payload => {
        dispatch({type: CUSTOMER_DATE, payload})
    }

    const setCustomerData = payload => {
        dispatch({type: SET_CUSTOMER_DATA, payload})
    }

    const setValidation = payload => {
        dispatch({type: SET_VALIDATION, payload})
    }

    const [state, dispatch] = useReducer(basketReducer, initialState)

    return (
        <BasketContext.Provider value={{
            setValidation, removeDish, changeQuantity, addStuff, stuffQuantity, setDate, setCustomerData, basket: state
        }}>
            {children}
        </BasketContext.Provider>
    )

}