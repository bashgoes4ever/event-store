import React from 'react';
import {MenuContext} from "../../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import {BasketStep1} from "./BasketStep1";
import {BasketStep2} from "./BasketStep2";
import {BasketStep3} from "./BasketStep3";
import {BasketStep4} from "./BasketStep4";
import {BasketStep5} from './BasketStep5'

export const Basket = () => {
    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    document.title = 'Корзина'

    const [step, setStep] = React.useState(1)

    const stepClasses = s => {
        const cls = [
            'step',
            step >= s ? 'active' : null,
            step == s ? 'current' : null
        ]
        return cls.join(' ')
    }

    return (
        <section className="list__detail sets__detail basket-wrapper">
            <div className="container">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <span> | Корзина</span>
                </div>
                <h2>Корзина</h2>

                {
                    step != 5
                        ? (
                            <div className="basket__steps">
                                <div className={stepClasses(1)}>
                                    <div className="num"><span>1</span></div>
                                    <div className="title">Заказ</div>
                                </div>
                                <div className={stepClasses(2)}>
                                    <div className="num"><span>2</span></div>
                                    <div className="title">Доп. услуги</div>
                                </div>
                                <div className={stepClasses(3)}>
                                    <div className="num"><span>3</span></div>
                                    <div className="title">Оформление</div>
                                </div>
                                <div className={stepClasses(4)}>
                                    <div className="num"><span>4</span></div>
                                    <div className="title">Доставка</div>
                                </div>
                            </div>
                        ) : null
                }


                {
                    step == 1
                        ? (
                            <BasketStep1 setStep={setStep}></BasketStep1>
                        ) : null
                }

                {
                    step == 2
                        ? (
                            <BasketStep2 setStep={setStep}></BasketStep2>
                        ) : null
                }

                {
                    step == 3
                        ? (
                            <BasketStep3 setStep={setStep}></BasketStep3>
                        ) : null
                }

                {
                    step == 4
                        ? (
                            <BasketStep4 setStep={setStep}></BasketStep4>
                        ) : null
                }

                {
                    step == 5
                        ? (
                            <BasketStep5></BasketStep5>
                        ) : null
                }


            </div>
        </section>
    )
}