import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";
import {BasketStep2Menu} from "./BasketStep2Menu";

export const BasketStep5 = props => {
    const {basket} = React.useContext(BasketContext)

    return (
        <div className="sets__flex">
            <div className="set__table address__table">
                <div className="set__table__title delivery__title basket__step5__title">
                    <div className="title">Спасибо, ваш заказ принят!</div>
                    <p>В ближайшее время мы свяжемся с вами, чтобы уточнить детали заказа. <br/>Ваша
                        заявка <strong>#3442</strong></p>
                </div>
                <div className="basket__step3__item__title basket__step5__item__title">
                    Информация по заказу
                </div>

                <div className="basket__step5__items">

                    <div className="basket__step5__item">
                        <div className="key">Имя</div>
                        <div className="dots"></div>
                        <div className="value">{basket.customer_contacts.name}</div>
                    </div>
                    <div className="basket__step5__item">
                        <div className="key">Телефон</div>
                        <div className="dots"></div>
                        <div className="value">{basket.customer_contacts.phone}</div>
                    </div>
                    <div className="basket__step5__item">
                        <div className="key">Email</div>
                        <div className="dots"></div>
                        <div className="value">{basket.customer_contacts.email}</div>
                    </div>
                    <div className="basket__step5__item">
                        <div className="key">Способ доставки</div>
                        <div className="dots"></div>
                        <div
                            className="value">{basket.customer_contacts.address.delivery ? 'Доставка' : 'Самовывоз'}</div>
                    </div>
                    {
                        basket.customer_contacts.address.delivery
                            ? (
                                <div className="basket__step5__item">
                                    <div className="key">Адрес доставки</div>
                                    <div className="dots"></div>
                                    <div className="value">{`${basket.customer_contacts.address.city}, ${basket.customer_contacts.address.street} ${basket.customer_contacts.address.house}`}{basket.customer_contacts.address.flat ? `, кв. ${basket.customer_contacts.address.flat}` : null}</div>
                                </div>
                            )
                            : (
                                <div className="basket__step5__item">
                                    <div className="key">Адрес самовывоза</div>
                                    <div className="dots"></div>
                                    <div className="value">{basket.customer_contacts.address.pickup}</div>
                                </div>
                            )
                    }
                    <div className="basket__step5__item">
                        <div className="key">Дата</div>
                        <div className="dots"></div>
                        <div className="value">{basket.customer_contacts.date}</div>
                    </div>


                </div>

            </div>
            <BasketStep2Menu end={true} withValidation={false} setStep={props.setStep} nextStep={4}
                             buttonText={'Оформить'} hasIcon={false}></BasketStep2Menu>
        </div>
    )
}