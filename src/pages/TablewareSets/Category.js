import React from 'react'
import {TablewareSetDetailDish} from "./Dish";

export const TablewareSetDetailCategory = (props) => {
    const calculateQuantity = () => {
        return props.category.dishes.reduce((prev, item) => {
            return prev + item.quantity
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
                                            <TablewareSetDetailDish key={index} dish={item}
                                                           category={props.category.id}></TablewareSetDetailDish>
                                        )
                                    })
                                }
                            </div>
                            <div className="set__category__stats tableware__stats">
                                <div className="item">
                                    <div className="key">Количество</div>
                                    <div className="value">{calculateQuantity()} чел.</div>
                                </div>
                                <div className="item">
                                    <div className="key">Предметов сервировки на сумму</div>
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