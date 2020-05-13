import React, {useReducer} from 'react'
import {MenuContext} from "./menuContext";
import {menuReducer} from "./menuReducer";
import {SHOW_MENU, HIDE_MENU, SET_HEADER_CLASSES} from "../types";

export const MenuState = ({children}) => {
    const [state, dispatch] = useReducer(menuReducer, {show: false, headerClasses: ''})

    const show = () => {
        dispatch({
            type: SHOW_MENU,
            payload: {show: true}
        })
        document.body.style.overflow = 'hidden'
    }

    const hide = () => {
        dispatch({
            type: HIDE_MENU,
            payload: {show: false}
        })
        document.body.style.overflow = 'unset'
    }

    const setHeaderClasses = classes => {
        dispatch({
            type: SET_HEADER_CLASSES,
            payload: {headerClasses: classes}
        })
    }

    return (
        <MenuContext.Provider value={{
            show, hide, setHeaderClasses, showState: state.show, headerClasses: state.headerClasses
        }}>
            {children}
        </MenuContext.Provider>
    )
}