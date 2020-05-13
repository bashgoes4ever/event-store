import React from 'react';
import {BasketStep1Dish} from "./BasketStep1Dish";

export const BasketStep1Category = props => {
    return (
        <React.Fragment>
            {
                props.category.dishes.length
                    ? (
                        <div className="set__table__category">
                            <div className="set__table__category__header">
                                <div className="title">{props.category.title}</div>
                            </div>
                            {
                                props.category.dishes.map((item, index) => {
                                    return (
                                        <BasketStep1Dish key={index} dish={item}
                                                         category2={props.category.id}
                                                         category1={props.category1}></BasketStep1Dish>
                                    )
                                })
                            }
                        </div>
                    )
                    : null
            }
        </React.Fragment>
    )
}