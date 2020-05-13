import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";
import {StuffCheckbox} from "./StuffCheckbox";
import {BasketStep2Menu} from "./BasketStep2Menu";
import {BasketCalendar} from "./BasketCalendar";
import {BasketInput} from "./BasketInput";


export const BasketStep3 = props => {
    const {basket} = React.useContext(BasketContext)

    return (
        <div className="sets__flex">
            <div className="set__table">
                <div className="set__table__title">
                    <div className="title">Оформление заказа</div>
                </div>

                <div className="basket__step2__flex basket__step3__flex">

                    <div className="basket__form">
                        <div className="basket__step3__item__title">
                            Ваши контактные данные
                        </div>
                        <BasketInput
                            type="name"
                            label="Имя"
                            id="name-input"
                        ></BasketInput>
                        <BasketInput
                            type="phone"
                            label="Телефон"
                            id="phone-input"
                        ></BasketInput>
                        <BasketInput
                            type="email"
                            label="Email"
                            id="email-input"
                        ></BasketInput>
                    </div>

                    <BasketCalendar></BasketCalendar>


                </div>


            </div>
            <BasketStep2Menu withValidation={true} setStep={props.setStep} nextStep={4} buttonText={'Перейти к Доставке'}></BasketStep2Menu>
        </div>
    )
}