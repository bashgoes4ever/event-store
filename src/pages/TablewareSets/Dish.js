import React from 'react'
import {TablewareSetDetailContext} from "../../context/tablewareSetDetail/tablewareSetDetailContext";
import {useCurrentWitdh} from "../../hooks/windowResize";

export const TablewareSetDetailDish = props => {
    let width = useCurrentWitdh()
    const {removeDish, changeQuantity, set_detail} = React.useContext(TablewareSetDetailContext)

    const quantityHandler = num => {
        if (props.dish.quantity + num >= 1) {
            const set = set_detail
            const category_index = set.categories.findIndex(item => item.id == props.category)
            const dish_index = set.categories[category_index].dishes.findIndex(item => item.id == props.dish.id)
            set.categories[category_index].dishes[dish_index].quantity = props.dish.quantity + num
            changeQuantity(set)
        }
    }

    const removeHandler = () => {
        const set = set_detail
        const category_index = set.categories.findIndex(item => item.id == props.category)
        const dish_index = set.categories[category_index].dishes.findIndex(item => item.id == props.dish.id)
        set.categories[category_index].dishes.splice(dish_index, 1)
        removeDish(set)
    }

    return (
        <div className="set__table__dish">
            <div className="set__table__col1 set__table__dish__image">
                <img src="/img/fork.png" alt=""/>
            </div>
            <div className="set__table__col2 set__table__dish__desc tableware__options">
                <div className="title">
                    <span>{props.dish.title}</span>
                </div>
                {
                    props.dish.options.map((item, index) => {
                        return (
                            <div className="set__table__dish__desc__item" key={index}>
                                <div className="key">{item.title}</div>
                                <div className="dots"></div>
                                <div className="value">{item.value}</div>
                            </div>
                        )
                    })
                }

                <div className="set__table__dish__desc__item">
                    <div className="key">Блюдо на</div>
                    <div className="dots"></div>
                    <div className="value">{props.dish.persons} чел.</div>
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
            <button className="remove-btn" onClick={removeHandler}>
                <span className="remove-icon"></span>
            </button>
        </div>
    )
}