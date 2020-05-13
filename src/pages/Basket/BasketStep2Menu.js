import React from 'react'
import {BasketContext} from "../../context/basket/basketContext";
import {NavLink} from 'react-router-dom'
import {useCurrentWitdh} from "../../hooks/windowResize";

export const BasketStep2Menu = props => {
    let width = useCurrentWitdh()
    const {basket} = React.useContext(BasketContext)


    const calcPrice = (cat) => {
        if (cat.categories) {
            return cat.categories.reduce((prev, c) => {
                return prev + c.dishes.reduce((prev_dish, dish) => {
                    return prev_dish + dish.quantity * dish.price
                }, 0)
            }, 0)
        } else {
            return cat.dishes.reduce((prev_dish, dish) => {
                return prev_dish + dish.quantity * dish.price
            }, 0)
        }
    }

    const calcTotalPrice = () => {
        return basket.categories.reduce((prev, cur) => {
            return prev + calcPrice(cur)
        }, 0)
    }

    const calcStuffPrice = () => {
        return basket.stuff.reduce((prev, cur) => {
            return cur.checked ? prev + cur.price * cur.quantity : prev
        }, 0)
    }

    return (
        <aside className="set__menu basket__menu2">
            {
                width < 1260 && width > 708
                    ? (
                        <div className="menu__title">
                            Информация о вашем
                            заказе
                        </div>
                    ) : null
            }

            <div className="basket__menu__block basket__menu__block-top">

                <div className="set__menu__block">
                    <div className="set__menu__title">
                        <div className="title">Заказ</div>
                        <div className="dots"></div>
                        <div className="price-min">{new Intl.NumberFormat('ru-RU').format(calcTotalPrice())} ₽</div>
                    </div>
                </div>

                {
                    calcStuffPrice() > 0
                        ? (
                            <div className="set__menu__block">
                                <div className="set__menu__title">
                                    <div className="title">Дополнительные услуги</div>
                                    <div className="dots"></div>
                                    <div className="price-min">{new Intl.NumberFormat('ru-RU').format(calcStuffPrice())} ₽
                                    </div>
                                </div>
                            </div>
                        ) : null
                }

                {
                    basket.customer_contacts.address.deliveryPrice
                        ? (
                            <div className="set__menu__block">
                                <div className="set__menu__title">
                                    <div className="title">Доставка</div>
                                    <div className="dots"></div>
                                    <div
                                        className="price-min">{new Intl.NumberFormat('ru-RU').format(basket.customer_contacts.address.deliveryPrice)} ₽
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                }


                <div className="set__menu__block">
                    <div className="set__menu__title">
                        <div className="title">Сумма заказа</div>
                        <div className="dots"></div>
                        <div
                            className="price">{new Intl.NumberFormat('ru-RU').format(basket.customer_contacts.address.deliveryPrice + calcStuffPrice() + calcTotalPrice())} ₽
                        </div>
                    </div>
                </div>
                <div className="set__menu__block basket__next-step">
                    {
                        props.end
                            ? (
                                <NavLink to="/" className="add-to-basket basket-next-btn">
                                    <span>перейти на главную</span>
                                </NavLink>
                            ) : props.withValidation
                            ? (
                                <button disabled={!basket.customer_contacts.valid}
                                        className="add-to-basket basket-next-btn"
                                        onClick={() => {
                                            props.setStep(props.nextStep)
                                            window.scrollTo(0, 0)
                                        }}>
                                    <span>{props.buttonText}</span>
                                    {
                                        props.hasIcon
                                            ? (
                                                <img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                            ) : null
                                    }

                                </button>
                            )
                            : (
                                <button className="add-to-basket basket-next-btn"
                                        onClick={() => {
                                            props.setStep(props.nextStep)
                                            window.scrollTo(0, 0)
                                        }}>
                                    <span>{props.buttonText}</span>
                                    {
                                        props.hasIcon
                                            ? (
                                                <img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                            ) : null
                                    }

                                </button>
                            )
                    }

                    <a href="/" target="_blank" className="download">
                        <span className="download-icon"></span>
                        <span className="text">Скачать файл с заказом</span>
                    </a>
                </div>
            </div>
        </aside>
    )
}