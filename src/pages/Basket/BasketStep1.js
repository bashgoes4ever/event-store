import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";
import {BasketStep1Item} from "./BasketStep1Item";
import {BasketStep1Menu} from "./BasketStep1Menu";


export const BasketStep1 = props => {
    const {basket} = React.useContext(BasketContext)
    return (
        <div className="sets__flex basket__step1__flex">
            <div className="set__table">

                {
                    basket.categories.map((item, index) => {
                        return (
                           <BasketStep1Item category={item} key={index}></BasketStep1Item>
                        )
                    })
                }


            </div>
            <BasketStep1Menu setStep={props.setStep}></BasketStep1Menu>
        </div>
    )
}