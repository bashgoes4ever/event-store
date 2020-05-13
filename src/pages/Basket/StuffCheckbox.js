import React from 'react';
import {BasketContext} from "../../context/basket/basketContext";


export const StuffCheckbox = props => {
    const {addStuff, stuffQuantity, basket} = React.useContext(BasketContext)

    const addStuffHandler = () => {
        const stuff = basket.stuff
        const index = stuff.findIndex(item => item.title == props.stuff.title)
        stuff[index].checked = !stuff[index].checked
        addStuff(stuff)
    }

    const changeQuantityHandler = num => {
        if (props.stuff.quantity + num >= 1) {
            const stuff = basket.stuff
            const index = stuff.findIndex(item => item.title == props.stuff.title)
            stuff[index].quantity = props.stuff.quantity + num
            stuffQuantity(stuff)
        }
    }

    const calcPrice = () => {
        return new Intl.NumberFormat('ru-RU').format(props.stuff.quantity*props.stuff.price)
    }

    return (
        <div className="basket__step2__item">
            <div className="input-wrapper">
                <input type="checkbox" onChange={() => addStuffHandler()} checked={props.stuff.checked} name="stuff"
                       id={`stuff${props.index}`}
                       value={props.stuff.title}/>
                <label htmlFor={`stuff${props.index}`}>{props.stuff.title}</label>
            </div>
            <div className="item-card__input">
                <input readOnly={true} type="text" value={props.stuff.quantity}/>
                <button className="sub-btn" onClick={() => changeQuantityHandler(-1)}></button>
                <button className="add-btn" onClick={() => changeQuantityHandler(1)}></button>
            </div>
            <div className="price">{calcPrice()} ₽</div>
        </div>
    )
}