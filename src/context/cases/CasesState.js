import React, {useReducer} from 'react'
import {CasesContext} from "./casesContext";
import {casesReducer} from "./casesReducer";
import {SET_CASE} from '../types'

export const CasesState = ({children}) => {
    const initialState = {
        years: [
            {
                year: 2019,
                cases: [
                    {
                        title: 'Фуршет в компании «Ростелеком»',
                        text: 'Слаженная работа 20 сотрудников помогла организовать бесперебойное обслуживание на протяжении всего мероприятия.',
                        persons: 200,
                        show_menu: false,
                        menu: [
                            'Салат с гребешком и спаржей',
                            'Салат «Греческий»',
                            'Овощи гриль',
                            'Салат с гребешком и спаржей',
                            'Салат «Греческий»',
                            'Овощи гриль',
                        ],
                        equipment: [
                            'Набор посуды «Марокко»'
                        ]
                    }
                ]
            },
            {
                year: 2018,
                cases: [
                    {
                        title: 'Фуршет в компании «Ростелеком»',
                        text: 'Слаженная работа 20 сотрудников помогла организовать бесперебойное обслуживание на протяжении всего мероприятия.',
                        persons: 200,
                        show_menu: false,
                        menu: [
                            'Салат с гребешком и спаржей',
                            'Салат «Греческий»',
                            'Овощи гриль',
                            'Салат с гребешком и спаржей',
                            'Салат «Греческий»',
                            'Овощи гриль',
                        ],
                        equipment: [
                            'Набор посуды «Марокко»'
                        ]
                    },
                    {
                        title: 'Фуршет в компании «Ростелеком»',
                        text: 'Слаженная работа 20 сотрудников помогла организовать бесперебойное обслуживание на протяжении всего мероприятия.',
                        persons: 200,
                        show_menu: false,
                        menu: [
                            'Салат с гребешком и спаржей',
                            'Салат «Греческий»',
                            'Овощи гриль',
                            'Салат с гребешком и спаржей',
                            'Салат «Греческий»',
                            'Овощи гриль',
                        ],
                        equipment: [
                            'Набор посуды «Марокко»'
                        ]
                    }
                ]
            },
        ]
    }

    const setCases = cases => dispatch({type: SET_CASE, payload: cases})

    const [state, dispatch] = useReducer(casesReducer, initialState)

    return (
        <CasesContext.Provider value={{
            setCases, cases: state
        }}>
            {children}
        </CasesContext.Provider>
    )
}