import React from 'react'
import {BasketContext} from "../../context/basket/basketContext";

export const BasketStep1Menu = props => {
    const {basket} = React.useContext(BasketContext)

    const calcDishes = (cat) => {
        if (cat.categories) {
            return cat.categories.reduce((prev, c) => {
                return prev + c.dishes.reduce((prev_dish, dish) => {
                    return prev_dish + dish.quantity
                }, 0)
            }, 0)
        } else {
            return cat.dishes.reduce((prev_dish, dish) => {
                return prev_dish + dish.quantity
            }, 0)
        }
    }

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

    return (
        <aside className="set__menu">
            <div className="basket__menu__block basket__menu__block-top">

                {
                    basket.categories.map((category, index) => {
                        if (calcDishes(category) !== 0) {
                            return (
                                <div className="set__menu__block" key={index}>
                                    <div className="set__menu__title">
                                        <div className="title">{category.title}</div>
                                    </div>
                                    <div className="basket__step1__menu__items">
                                        <div className="basket__step1__menu__item">
                                            <div className="key">Кол-во блюд</div>
                                            <div className="dots"></div>
                                            <div className="value">{calcDishes(category)} шт.</div>
                                        </div>
                                        <div className="basket__step1__menu__item">
                                            <div className="key">Цена</div>
                                            <div className="dots"></div>
                                            <div
                                                className="value">{new Intl.NumberFormat('ru-RU').format(calcPrice(category))} ₽
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className="basket__menu__block">

                <div className="set__menu__block set__menu__block-price">
                    <div className="set__menu__title">
                        <div className="title">Сумма заказа</div>
                        <div className="dots"></div>
                        <div className="price">{new Intl.NumberFormat('ru-RU').format(calcTotalPrice())} ₽</div>
                    </div>
                </div>
                <div className="set__menu__block basket__next-step">
                    <button className="add-to-basket basket-next-btn" onClick={() => {
                        props.setStep(2)
                        window.scrollTo(0, 0)
                    }}>
                        <span>Далее</span>
                        <img
                            src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                    </button>
                    <a href="/" target="_blank" className="download">
                        <span className="download-icon"></span>
                        <span className="text">Скачать файл с заказом</span>
                    </a>
                </div>
            </div>
        </aside>
    )
}