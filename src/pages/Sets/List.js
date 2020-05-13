import React from 'react';
import {MenuContext} from "../../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import {SetCard} from '../../misc/SetCard'
import Select, {components} from 'react-select'
import {useCurrentWitdh} from "../../hooks/windowResize";
import {MenuFilters} from "./Filters";
import {SetFiltersMobile} from "./FiltersMobile";

export const SetsList = () => {
    let width = useCurrentWitdh()

    const [filterShow, setVisibility] = React.useState(false)

    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    document.title = 'Меню | Список'

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '26px',
            cursor: 'pointer',
            height: '52px',
            paddingLeft: '18px',
            color: '#050708'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#050708'
        })
    }

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <span className="dropdown-indicator"></span>
            </components.DropdownIndicator>
        )
    }

    const options = [
        {value: '1', label: 'По популярности'},
        {value: '2', label: 'По цене'}
    ]

    const filterButtonStyles = () => {
        let classes = 'filter-btn'
        if (filterShow) classes += ' filter-btn-close'
        return classes
    }

    const submitFilterHandler = () => {
        console.log('submit')
    }

    const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <React.Fragment>
            {
                width <= 1260 && filterShow
                    ? (
                        <SetFiltersMobile></SetFiltersMobile>
                    )
                    : null
            }
            <section className="list__block1">
                <div className="container">
                    <div className="breadcrumbs">
                        <NavLink to="/">Главная</NavLink>
                        <span> | Готовые сеты</span>
                    </div>
                    <div className="list__block1__content">
                        {
                            width > 1260
                                ? (
                                    <MenuFilters></MenuFilters>
                                ) : null
                        }
                        <main className="list__items-wrapper">
                            <div className="list__items__head">

                                {
                                    width <= 1260
                                        ? (
                                            <React.Fragment>
                                                <h2>Готовые сеты</h2>
                                                <button
                                                    onClick={() => setVisibility(!filterShow)}
                                                    className={filterButtonStyles()}>
                                                    Фильтры
                                                    <span className="filter-icon"></span>
                                                    <svg
                                                        className="close-icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xlink="http://www.w3.org/1999/xlink"
                                                        width="13px" height="12px">
                                                        <defs>
                                                            <filter id="Filter_0">
                                                                <feFlood flood-color="rgb(255, 255, 255)" flood-opacity="1"
                                                                         result="floodOut"/>
                                                                <feComposite operator="atop" in="floodOut"
                                                                             in2="SourceGraphic" result="compOut"/>
                                                                <feBlend mode="normal" in="compOut" in2="SourceGraphic"/>
                                                            </filter>

                                                        </defs>
                                                        <g filter="url(#Filter_0)">
                                                            <path fill-rule="evenodd" fill="rgb(31, 30, 30)"
                                                                  d="M12.993,0.798 L7.378,5.980 L12.993,11.163 L12.093,11.993 L6.479,6.811 L0.865,11.993 L0.007,11.201 L5.621,6.019 L0.007,0.837 L0.907,0.007 L6.521,5.189 L12.135,0.006 L12.993,0.798 Z"/>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </React.Fragment>
                                        )
                                        : null
                                }

                                <div className="list__chips">
                                    <div className="chip">
                                        <span>Свадьба</span>
                                        <button>&times;</button>
                                    </div>
                                    <div className="chip">
                                        <span>от 0 до 4 562 ₽</span>
                                        <button>&times;</button>
                                    </div>
                                </div>

                                {
                                    width <= 1260
                                        ? (
                                            <button className="remove-filters sets-remove-filters">сбросить фильтры</button>

                                        ) : (
                                            <Select
                                                className="select"
                                                options={options}
                                                styles={customSelectStyles}
                                                placeholder="Сортировка"
                                                components={{DropdownIndicator}}
                                            />
                                        )
                                }

                            </div>
                            <div className="list__items">
                                {cards.map((item, index) => (
                                    <SetCard
                                        key={index}
                                    ></SetCard>
                                ))}
                            </div>
                            <button className="load-more">показать еще</button>

                            <div className="promo-banner promo-banner-small">
                                <h2 className="section__title">Программа лояльности</h2>
                                <p>Чем больше ваш заказ, тем больше у вас скидка! <br/>Узнай как получить скидку от 5 до
                                    10%.</p>
                                <div className="promo-banner__steps">
                                    <div className="step">
                                        5<sup>%</sup>
                                    </div>
                                    <div className="step">
                                        7<sup>%</sup>
                                    </div>
                                    <div className="step">
                                        10<sup>%</sup>
                                    </div>
                                </div>
                                <NavLink to="#" className="btn">подробнее о программе</NavLink>
                                <img src="/img/home/block5/1.png" alt=""/>
                                <div className="bg-percent1 bg-percent">%</div>
                                <div className="bg-percent2 bg-percent">%</div>
                                <div className="bg-percent3 bg-percent">%</div>
                                <div className="bg-percent4 bg-percent">%</div>
                                <div className="bg-percent5 bg-percent">%</div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}