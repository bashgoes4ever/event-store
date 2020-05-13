import React from 'react'
import {BasketContext} from "../../context/basket/basketContext";
import {useCurrentWitdh} from "../../hooks/windowResize";

export const BasketStep1Dish = props => {
    let width = useCurrentWitdh()

    const {removeDish, changeQuantity, basket} = React.useContext(BasketContext)

    const quantityHandler = num => {
        if (props.dish.quantity + num >= 1) {
            const categories = basket.categories
            const category1_index = categories.findIndex(item => item.id == props.category1)
            if (props.category2) {
                const category2_index = categories[category1_index].categories.findIndex(item => item.id == props.category2)
                const dish_index = categories[category1_index].categories[category2_index].dishes.findIndex(item => item.id == props.dish.id)
                categories[category1_index].categories[category2_index].dishes[dish_index].quantity = props.dish.quantity + num
                changeQuantity(categories)
            } else {
                const dish_index = categories[category1_index].dishes.findIndex(item => item.id == props.dish.id)
                categories[category1_index].dishes[dish_index].quantity = props.dish.quantity + num
                changeQuantity(categories)
            }
        }
    }

    const removeHandler = () => {
        const categories = basket.categories
        const category1_index = categories.findIndex(item => item.id == props.category1)
        if (props.category2) {
            const category2_index = categories[category1_index].categories.findIndex(item => item.id == props.category2)
            const dish_index = categories[category1_index].categories[category2_index].dishes.findIndex(item => item.id == props.dish.id)
            categories[category1_index].categories[category2_index].dishes.splice(dish_index, 1)
            removeDish(categories)
        } else {
            const dish_index = categories[category1_index].dishes.findIndex(item => item.id == props.dish.id)
            categories[category1_index].dishes.splice(dish_index, 1)
            removeDish(categories)
        }
    }

    return (
        <div className="set__table__dish">
            <div className="set__table__col1 set__table__dish__image">
                <img src="/img/home/block6/1.png" alt=""/>
            </div>
            <div className="set__table__col6 set__table__dish__desc">
                <div className="title">
                    <span>{props.dish.title}</span>
                </div>
            </div>
            <div className="set__table__mobile-group">
                <div className="set__table__col3 set__table__dish__price">
                    {
                        width < 708
                            ? (
                                <div className="title">Цена</div>
                            ) : null
                    }
                    <span>{props.dish.price} ₽</span>
                </div>
                <div className="set__table__col4 set__table__dish__quantity">
                    {
                        width < 708
                            ? (
                                <div className="title">Кол-во</div>
                            ) : null
                    }
                    <div className="item-card__input">
                        <input readOnly={true} type="text" value={props.dish.quantity}/>
                        <button className="sub-btn"
                                onClick={quantityHandler.bind(this, -1)}></button>
                        <button className="add-btn"
                                onClick={quantityHandler.bind(this, 1)}></button>
                    </div>
                </div>
                <div className="set__table__col5 set__table__dish__price">
                    {
                        width < 708
                            ? (
                                <div className="title">Сумма</div>
                            ) : null
                    }
                    <span>{props.dish.quantity * props.dish.price} ₽</span>
                </div>
            </div>
            <button className="remove-btn" onClick={() => removeHandler()}>
                <span className="remove-icon"></span>
            </button>
        </div>
    )
}