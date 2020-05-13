import React from 'react'
import {SetDetailDish} from "./Dish";

export const SetDetailCategory = (props) => {
    const calculateWeight = () => {
        return props.category.dishes.reduce((prev, item) => {
            return prev + item.weight*item.quantity
        }, 0)
    }

    const calculatePersons = () => {
        return props.category.dishes.reduce((prev, item) => {
            return prev + item.persons*item.quantity
        }, 0)
    }

    const calculatePrice = () => {
        return props.category.dishes.reduce((prev, item) => {
            return prev + item.price*item.quantity
        }, 0)
    }

    return (
        <React.Fragment>
            {
                props.category.dishes.length
                    ? (
                        <React.Fragment>
                            <div className="set__table__category">
                                <div className="set__table__category__header">
                                    <div className="title">{props.category.title}</div>
                                </div>
                                {
                                    props.category.dishes.map((item, index) => {
                                        return (
                                            <SetDetailDish key={index} dish={item}
                                                           category={props.category.id}></SetDetailDish>
                                        )
                                    })
                                }
                            </div>
                            <div className="set__category__stats">
                                <div className="item">
                                    <div className="key">Общий вес</div>
                                    <div className="value">{calculateWeight()} гр.</div>
                                </div>
                                <div className="item">
                                    <div className="key">Количество</div>
                                    <div className="value">{calculatePersons()} чел.</div>
                                </div>
                                <div className="item">
                                    <div className="key">{props.category.title} на сумму</div>
                                    <div className="value">{calculatePrice()} ₽</div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    : null
            }
        </React.Fragment>
    )
}