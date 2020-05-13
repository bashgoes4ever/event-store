import React from 'react';
import {BasketStep1Category} from "./BasketStep1Category";
import {BasketStep1Dish} from "./BasketStep1Dish";

export const BasketStep1Item = props => {

    const categoryHasDishes = () => {
        let hasDishes = 0
        for (let i = 0; i < props.category.categories.length; i++) {
            hasDishes = props.category.categories[i].dishes.length ? hasDishes + 1 : hasDishes
        }
        return hasDishes > 0 ? true : false
    }

    return (
        <React.Fragment>
            {
                (props.category.categories ? categoryHasDishes() : false)
                || (props.category.dishes ? props.category.dishes.length : false)
                    ? (
                        <div className="basket__step1__item">
                            <div className="set__table__title">
                                <div className="title">{props.category.title}</div>
                            </div>
                            {
                                props.category.categories
                                    ? props.category.categories.map((item, index) => {
                                        return (
                                            <BasketStep1Category category={item} key={index}
                                                                 category1={props.category.id}></BasketStep1Category>
                                        )
                                    })
                                    : props.category.dishes.map((item, index) => {
                                        return (
                                            <BasketStep1Dish dish={item} key={index} category1={props.category.id}
                                                             category2={false}></BasketStep1Dish>
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