import React from 'react'
import {NavLink} from 'react-router-dom'
import {MenuContext} from "../../context/menu/menuContext";
import {AboutUs} from "./AboutUs";
import {Route, Switch, HashRouter} from 'react-router-dom'
import ScrollToTop from '../../hooks/ScrollToTop'
import {Reviews} from "./Reviews";
import {Loaylty} from "./Loyalty";
import {Cases} from "./Cases";

import {CasesState} from "../../context/cases/CasesState";

export const About = () => {
    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/about";
    }

    document.title = 'Об Edvin Group'

    return (
        <section className="about-page">
            <div className="container">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <span> | О нас</span>
                </div>

                <div className="about__flex">
                    <div className="about__menu-wrapper">
                        <aside className="about__menu">
                            <ul>
                                <NavLink isActive={checkActive} activeClassName='active' className="link" to="/about">О
                                    нас</NavLink>
                                <NavLink activeClassName='active' className="link" to="/about/reviews">Отзывы</NavLink>
                                <NavLink activeClassName='active' className="link" to="/about/loyalty">Программа
                                    лояльности</NavLink>
                                <NavLink activeClassName='active' className="link" to="/about/cases">Кейсы</NavLink>
                            </ul>
                        </aside>
                        <img src="img/about/1.png" alt="" className="menu__bg"/>
                    </div>

                    <CasesState>
                        <HashRouter>
                            <ScrollToTop>
                                <Switch>
                                    <Route path={'/about'} exact
                                           component={AboutUs}></Route>
                                    <Route path={'/about/reviews'} exact
                                           component={Reviews}></Route>
                                    <Route path={'/about/loyalty'} exact
                                           component={Loaylty}></Route>
                                    <Route path={'/about/cases'} exact
                                           component={Cases}></Route>
                                </Switch>
                            </ScrollToTop>
                        </HashRouter>
                    </CasesState>
                </div>
            </div>
        </section>
    )
}