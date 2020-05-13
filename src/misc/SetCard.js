import React from 'react'
import {NavLink} from 'react-router-dom'

export const SetCard = () => {
    return (
        <div className="set-card">
            <div className="image">
                <img src="/img/home/block4/1.png" alt=""/>
            </div>
            <div className="set-card__body">
                <div className="title">Деловой завтрак в формате банкет</div>
                <div className="set-params">
                    <div className="set-param">
                        <div className="key">Количество:</div>
                        <div className="value">10 человек</div>
                    </div>
                    <div className="set-param">
                        <div className="key">Вес на чел.:</div>
                        <div className="value">1000 гр./чел.</div>
                    </div>
                </div>
                <div className="set-menu">
                    <div className="set-menu__title">Состав меню:</div>
                    <div className="chips">
                        <div className="chip">горячие блюда</div>
                        <div className="chip">закуски</div>
                        <div className="chip">салаты</div>
                        <div className="chip">гарнир</div>
                        <div className="chip">напитки</div>
                    </div>
                </div>
            </div>
            <div className="set-card__footer">
                <div className="price">
                    <div className="price-title">Стоимость:</div>
                    <span>25 700 ₽</span>
                </div>
                <NavLink to="/sets/detail" className="btn">Посмотреть меню</NavLink>
            </div>
        </div>
    )
}