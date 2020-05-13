import React from 'react'
import {NavLink} from 'react-router-dom'

export const TablewareSetCard = () => {
    return (
        <div className="set-card">
            <div className="image">
                <img src="/img/servis.png" alt=""/>
            </div>
            <div className="set-card__body">
                <div className="title">Весеннее вдохновение</div>
                <div className="set-params">
                    <p>Стоимость комплекта указана из расчета <br/>на одну персону.</p>
                </div>
                <div className="set-menu">
                    <div className="set-menu__title">В набор входит:</div>
                    <div className="chips">
                        <div className="chip">предметы сервировки</div>
                        <div className="chip">посуда</div>
                        <div className="chip">текстиль</div>
                    </div>
                </div>
            </div>
            <div className="set-card__footer">
                <div className="price">
                    <div className="price-title">Стоимость:</div>
                    <span>900 ₽</span>
                </div>
                <NavLink to="/tableware/detail" className="btn">Посмотреть набор</NavLink>
            </div>
        </div>
    )
}