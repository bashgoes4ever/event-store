import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";
import {BasketStep2Menu} from "./BasketStep2Menu";
import {BasketDelivery} from "./BasketDelivery";
import {BasketPickup} from './BasketPickup'

export const BasketStep4 = props => {
    const {basket, setCustomerData} = React.useContext(BasketContext)

    const deliveryHandler = () => {
        basket.customer_contacts.address.delivery = !basket.customer_contacts.address.delivery
        if (!basket.customer_contacts.address.delivery) {
            basket.customer_contacts.address.city = ''
            basket.customer_contacts.address.street = ''
            basket.customer_contacts.address.house = ''
            basket.customer_contacts.address.flat = ''
            basket.customer_contacts.address.coords = []
            basket.customer_contacts.address.deliveryPrice = null
            basket.customer_contacts.address.deliveryType = null
        } else {
            basket.customer_contacts.address.pickup = ''
        }
        setCustomerData(basket.customer_contacts)
    }

    return (
        <div className="sets__flex">
            <div className="set__table address__table">
                <div className="set__table__title delivery__title">
                    <div className="title">Доставка</div>
                    <div className="address__buttons">
                        <button
                            onClick={() => deliveryHandler()}
                            disabled={basket.customer_contacts.address.delivery ? false : true}
                            className={["address-btn", basket.customer_contacts.address.delivery ? null : 'active'].join(' ')}
                        >Самовывоз
                        </button>
                        <button
                            onClick={() => deliveryHandler()}
                            disabled={basket.customer_contacts.address.delivery ? true : false}
                            className={["address-btn", basket.customer_contacts.address.delivery ? 'active' : null].join(' ')}
                        >Доставка
                        </button>
                    </div>
                </div>

                {
                    basket.customer_contacts.address.delivery
                        ? (
                            <BasketDelivery></BasketDelivery>
                        )
                        : (
                            <BasketPickup></BasketPickup>
                        )
                }


            </div>
            <BasketStep2Menu withValidation={false} setStep={props.setStep} nextStep={5}
                             buttonText={'Оформить'} hasIcon={false}></BasketStep2Menu>
        </div>
    )
}