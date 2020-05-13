import React from 'react';
import {MenuContext} from "../../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import {TablewareSetDetailContext} from "../../context/tablewareSetDetail/tablewareSetDetailContext";
import {TablewareSetDetailCategory} from "./Category";
import {SetDetailMenu} from "./Menu";
import {useCurrentWitdh} from "../../hooks/windowResize";

export const TablewareSetsDetail = () => {
    let width = useCurrentWitdh()
    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    const {showLoader, set_detail} = React.useContext(TablewareSetDetailContext)

    document.title = `Сеты | ${set_detail.title}`




    return (
        <React.Fragment>
            <section className="list__detail sets__detail">
                <div className="container">
                    <div className="breadcrumbs">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/sets"> | Готовые сеты</NavLink>
                        <span> | Вечеринка в формате фуршет</span>
                    </div>
                    <h2>{set_detail.title}</h2>

                    <div className="sets__flex">

                        <div className="set__table">
                            <div className="set__table__title">
                                <div className="title">Меню сета</div>
                            </div>
                            <div className="set__table__header">
                                <div className="set__table__col1">
                                    <span>Фото</span>
                                </div>
                                <div className="set__table__col2">
                                    <span>Название</span>
                                </div>
                                <div className="set__table__col3">
                                    <span>Цена</span>
                                </div>
                                <div className="set__table__col4">
                                    <span>Кол-во</span>
                                </div>
                                <div className="set__table__col5">
                                    <span>Сумма</span>
                                </div>
                            </div>

                            {
                                set_detail.categories.map((item, index) => {
                                    return (
                                        <TablewareSetDetailCategory key={index} category={item}></TablewareSetDetailCategory>
                                    )
                                })
                            }

                            {
                                width <= 1260
                                    ? (
                                        <div className="set__detail__menu-wrapper">
                                            <SetDetailMenu></SetDetailMenu>
                                        </div>
                                    )
                                    : null
                            }

                            <div className="promo-banner promo-banner-xsmall">
                                <h2 className="section__title">Программа лояльности</h2>
                                <p>Чем больше ваш заказ, тем больше у вас скидка! <br/>Узнай как получить скидку от 5 до
                                    10%.</p>
                                <div className="promo-banner__steps">
                                    <div className="step">
                                        5<sup>%</sup>
                                    </div>
                                    <div className="step">
                                        7<sup>%</sup>
                                    </div>
                                    <div className="step">
                                        10<sup>%</sup>
                                    </div>
                                </div>
                                <NavLink to="#" className="btn">подробнее о программе</NavLink>
                                <img src="/img/home/block5/1.png" alt=""/>
                                <div className="bg-percent1 bg-percent">%</div>
                                <div className="bg-percent2 bg-percent">%</div>
                                <div className="bg-percent3 bg-percent">%</div>
                                <div className="bg-percent4 bg-percent">%</div>
                                <div className="bg-percent5 bg-percent">%</div>
                            </div>

                        </div>

                        {
                            width > 1260
                                ? (<SetDetailMenu></SetDetailMenu>)
                                : null
                        }


                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}