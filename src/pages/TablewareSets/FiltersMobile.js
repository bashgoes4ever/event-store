import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import {menuPageContext} from "../../context/menuPage/menuPageContext";

export const MenuFiltersMobile = () => {
    const {menu_page, setFilters} = React.useContext(menuPageContext)

    const closeButtonStyles = key => {
        let classes = 'filter-close'
        if (!menu_page.filters[key].is_open) classes += ' filter-open'
        return classes
    }

    const closeHandler = key => {
        menu_page.filters[key].is_open = !menu_page.filters[key].is_open
        setFilters(menu_page.filters)
    }

    const sliderHandlerMin = (v, key) => {
        if (!isNaN(+v.target.value)
            && +v.target.value >= 0
            && +v.target.value < menu_page.filters[key].value.max) {
            menu_page.filters[key].value.min = +v.target.value
            setFilters(menu_page.filters)
        }
    }

    const sliderHandlerMax = (v, key) => {
        if (!isNaN(+v.target.value)
            && +v.target.value <= 150
            && +v.target.value > menu_page.filters[key].value.min) {
            menu_page.filters[key].value.max = +v.target.value
            setFilters(menu_page.filters)
        }
    }

    const sliderChangeHandler = (v, key) => {
        menu_page.filters[key].value = {min: v.min, max: v.max}
        setFilters(menu_page.filters)
    }

    const submitFilterHandler = () => {
        console.log('submit')
    }

    return (
        <aside className="list__filter-wrapper">

            {/*price filters*/}
            <div className="list__filter">
                <div className="container">
                    <div className="list__filter__header">
                        <div className="title">Цена</div>
                        <div
                            className={closeButtonStyles('price')}
                            onClick={() => closeHandler('price')}></div>
                    </div>
                    {
                        menu_page.filters.price.is_open
                            ? (
                                <div className="list__filter__body">
                                    <div className="list__filter__numbers">
                                        <div className="list__filter__number-inputs">
                                            <input
                                                onChange={(v) => sliderHandlerMin(v, 'price')}
                                                value={menu_page.filters.price.value.min}
                                                type="number"/>
                                            <input
                                                onChange={(v) => sliderHandlerMax(v, 'price')}
                                                value={menu_page.filters.price.value.max}
                                                type="number"/>
                                        </div>
                                        <div className="filter-range">
                                            <InputRange
                                                classNames={{
                                                    track: 'range-track',
                                                    activeTrack: 'range-track range-track-active',
                                                    slider: 'range-slider',
                                                    valueLabel: 'range-label',
                                                    maxLabel: 'range-value-label range-value-label-max',
                                                    minLabel: 'range-value-label range-value-label-min',
                                                }}
                                                maxValue={150}
                                                minValue={0}
                                                formatLabel={(v) => `${v} ₽`}
                                                onChange={value => sliderChangeHandler(value, 'price')}
                                                value={menu_page.filters.price.value}/>
                                        </div>
                                    </div>
                                </div>
                            )
                            : null
                    }
                </div>
            </div>


            {/*filter buttons*/}
            <div className="list__filter list__filter__buttons">
                <div className="container">
                    <button className="apply">применить все</button>
                    <button className="remove-filters">сбросить фильтры</button>
                </div>
            </div>
        </aside>
    )
}
