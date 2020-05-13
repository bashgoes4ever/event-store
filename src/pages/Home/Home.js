import React from 'react';
import {HomeBlock1} from './block1'
import {HomeBlock2} from './block2'
import {HomeBlock3} from './block3'
import {HomeBlock4} from './block4'
import {HomeBlock5} from './block5'
import {HomeBlock6} from './block6'
import {MenuContext} from "../../context/menu/menuContext";

export const Home = () => {
    const {setHeaderClasses} = React.useContext(MenuContext)

    document.title = 'Главная'

    React.useEffect(() => {
        setHeaderClasses('header-absolute')
        //eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            <HomeBlock1></HomeBlock1>
            <HomeBlock2></HomeBlock2>
            <HomeBlock3></HomeBlock3>
            <HomeBlock4></HomeBlock4>
            <HomeBlock5></HomeBlock5>
            <HomeBlock6></HomeBlock6>
        </React.Fragment>
    )
}