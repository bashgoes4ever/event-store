import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";
import {StuffCheckbox} from "./StuffCheckbox";
import {BasketStep2Menu} from "./BasketStep2Menu";


export const BasketStep2 = props => {
    const {basket} = React.useContext(BasketContext)

    return (
        <div className="sets__flex">
            <div className="set__table">
                <div className="set__table__title">
                    <div className="title">Дополнительные услуги</div>
                </div>

                <div className="basket__step2__flex">

                    <div className="basket__step2__items">

                        {
                            basket.stuff.map((stuff, index) => {
                                return (
                                    <StuffCheckbox stuff={stuff} index={index} key={index}></StuffCheckbox>
                                )
                            })
                        }

                    </div>

                    <div className="basket__step2__info">
                        <p>Если вы не уверены, какое количество персонала <br/>вам потребуется, не беспокойтесь.
                            Выберите <br/>на свое усмотрение, а когда наш менеджер <br/>с вами свяжется, он
                            проконсультирует <br/>вас по данному вопросу.</p>
                    </div>

                </div>


            </div>
            <BasketStep2Menu withValidation={false} setStep={props.setStep} nextStep={3} buttonText={'Перейти к оформлению'}></BasketStep2Menu>
        </div>
    )
}