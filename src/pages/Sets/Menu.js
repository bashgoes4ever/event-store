import React from 'react'
import {SetDetailContext} from "../../context/setDetail/setDetailContext";
import Select, {components} from 'react-select'
import {useCurrentWitdh} from "../../hooks/windowResize";

export const SetDetailMenu = props => {
    let width = useCurrentWitdh()

    const {set_detail, changePersons} = React.useContext(SetDetailContext)

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: set_detail.occasion, label: set_detail.occasion},
        {value: set_detail.type, label: set_detail.type}
    ]

    const customSelectStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            cursor: 'pointer',
            height: '52px',
            paddingLeft: '10px',
            color: '#050708',
            borderColor: state.isFocused ? 'hsl(0,0%,80%)' : 'hsl(0,0%,80%)',
            boxShadow: 'none !important',
            '&:hover': {
                borderColor: state.isFocused ? 'hsl(0,0%,80%)' : 'hsl(0,0%,80%)'
            }
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return {
                ...styles,
                paddingLeft: '30px',
                fontSize: '13px',
                fontWeight: '300',
                color: isFocused ? '#e91e63' : '#45455b',
                backgroundColor: isFocused ? '#edf1f4' : '#fff'
            }
        },
        menu: () => ({
            marginTop: 0,
            position: 'absolute',
            width: '100%',
            zIndex: 10
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#050708'
        })
    }

    const calcTotalDishes = () => {
        return set_detail.categories.reduce((prev_cat, cat) => {
            return prev_cat + cat.dishes.reduce((prev_dish, dish) => {
                return prev_dish + dish.quantity
            }, 0)
        }, 0)
    }

    const calcTotalWeight = () => {
        return set_detail.categories.reduce((prev_cat, cat) => {
            return prev_cat + cat.dishes.reduce((prev_dish, dish) => {
                return prev_dish + dish.weight * dish.quantity
            }, 0)
        }, 0)
    }

    const calcTotalPrice = () => {
        return set_detail.categories.reduce((prev_cat, cat) => {
            return prev_cat + cat.dishes.reduce((prev_dish, dish) => {
                return prev_dish + dish.price * dish.quantity
            }, 0)
        }, 0)
    }

    const personsChangeHandler = val => {
        if (set_detail.persons + val >= 1) {
            changePersons(set_detail.persons + val)
            console.log(set_detail.persons)
        }
    }

    const calcFoodPerPerson = () => {
        return new Intl.NumberFormat('ru-RU').format(Math.round(calcTotalWeight() / set_detail.persons))
    }

    const calcPricePerPerson = () => {
        return new Intl.NumberFormat('ru-RU').format(Math.round(calcTotalPrice() / set_detail.persons))
    }

    const DropdownIndicator = props => {
        const cls = [
            "dropdown-indicator",
            props.selectProps.menuIsOpen ? "dropdown-up" : null
        ]
        return (
            <components.DropdownIndicator {...props}>
                <span className={cls.join(' ')}></span>
            </components.DropdownIndicator>
        )
    }

    return (
        <aside className="set__menu">
            <div className="set__menu__mobile-block set__menu__mobile-block__top">
                <div className="set__menu__selects-block">
                    <div className="set__menu__block">
                        <div className="title">Повод</div>
                        <Select
                            className="select"
                            options={options}
                            styles={customSelectStyles}
                            placeholder="Повод мероприятия"
                            components={{DropdownIndicator}}
                            value={options.filter(option => option.label == set_detail.occasion)}
                        />
                    </div>
                    <div className="set__menu__block">
                        <div className="title">Тип мероприятия</div>
                        <Select
                            className="select"
                            options={options}
                            styles={customSelectStyles}
                            placeholder="Тип мероприятия"
                            components={{DropdownIndicator}}
                            value={options.filter(option => option.label == set_detail.type)}
                        />
                    </div>
                </div>
                <div className="set__menu__block set__menu__persons-block">
                    <div className="set__menu__persons__header">
                        <div className="title persons-title-short">Количество человек</div>
                        <div className="item-card__input">
                            <input readOnly={true} type="text" value={set_detail.persons}/>
                            <button className="sub-btn"
                                    onClick={personsChangeHandler.bind(this, -1)}></button>
                            <button className="add-btn"
                                    onClick={personsChangeHandler.bind(this, 1)}></button>
                        </div>
                    </div>
                    <div className="chip-wrapper">
                        <div className="chip chip-green">Еды достаточно на 70 чел.</div>
                    </div>
                    <div className="set__menu__persons__recommend">
                        <div className="key">В типе «Фуршет» рекомендуется на человека</div>
                        <div className="value">500 гр.</div>
                    </div>
                </div>
            </div>
            <div className="set__menu__mobile-block set__menu__mobile-block__bottom">
                {
                    width < 1260 && width > 708
                        ? (
                            <div className="set__menu__mobile__title">
                                <div className="title">{set_detail.title}</div>
                                <div className="set__menu__persons__recommend">
                                    <div className="key">В типе «Фуршет» рекомендуется на человека</div>
                                    <div className="value">500 гр.</div>
                                </div>
                            </div>
                        ) : null
                }
                <div className="set__menu__mobile-group">
                    <div className="set__menu__block">
                        <div className="set__menu__title">
                            <div className="title">Всего блюд по меню</div>
                            <div className="dots"></div>
                            <div className="value">{calcTotalDishes()} шт.</div>
                        </div>
                    </div>
                    <div className="set__menu__block">
                        <div className="set__menu__title">
                            <div className="title">Вес блюд по меню</div>
                            <div className="dots"></div>
                            <div className="value">{new Intl.NumberFormat('ru-RU').format(calcTotalWeight())} гр.</div>
                        </div>
                    </div>
                    <div className="set__menu__block">
                        <div className="set__menu__title">
                            <div className="title">Еды на 1-го человека</div>
                            <div className="dots"></div>
                            <div className="value">{calcFoodPerPerson()} гр.</div>
                        </div>
                    </div>
                    <div className="set__menu__block">
                        <div className="set__menu__title">
                            <div className="title">Цена 1-го человека</div>
                            <div className="dots"></div>
                            <div className="value">{calcPricePerPerson()} ₽</div>
                        </div>
                    </div>
                    <div className="set__menu__block">
                        <div className="set__menu__title">
                            <div className="title">Сумма заказа</div>
                            <div className="dots"></div>
                            <div className="price">{new Intl.NumberFormat('ru-RU').format(calcTotalPrice())} ₽</div>
                        </div>
                    </div>
                    <div className="set__menu__block">
                        <button className="add-to-basket">
                            <img
                                src="data:img/png;base64,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"
                                alt=""/>
                            <span>В корзину</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}