import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";

export const BasketPickup = props => {
    const {basket, setCustomerData} = React.useContext(BasketContext)

    const radioHandler = val => {
        basket.customer_contacts.address.pickup = val
        setCustomerData(basket.customer_contacts)
    }

    return (
        <React.Fragment>

            <div className="basket__step3__item__title">
                Выберите адрес самовывоза
            </div>

            <div className="pickup__addresses">
                <div className="pickup__address">
                    <input onChange={e => radioHandler(e.target.value)} name="pickup" type="radio" id="p1" value='г. Владивосток, ЖК "Адмирал", Набережная 5В'/>
                    <label htmlFor="p1">г. Владивосток, ЖК "Адмирал", Набережная 5В</label>
                </div>
                <div className="pickup__address">
                    <input onChange={e => radioHandler(e.target.value)} name="pickup" type="radio" id="p2" value='г. Владивосток, Светланская 137'/>
                    <label htmlFor="p2">г. Владивосток, Светланская 137</label>
                </div>
            </div>

        </React.Fragment>
    )
}