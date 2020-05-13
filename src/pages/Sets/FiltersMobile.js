import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import {setPageContext} from "../../context/setPage/setPageContext";

export const SetFiltersMobile = () => {
    const {set_page, setFilters} = React.useContext(setPageContext)

    const occasionsList = ['Корпоратив', "Свадьба", "День рождения", "Юбилей", "Выпускной", "Мальчишник", "Девичник", "Выпускной", "Мальчишник", "Девичник"]

    const occasionsChangeHandler = e => {
        if (e.target.checked) {
            set_page.filters.occasions.value.push(e.target.value)
            setFilters(set_page.filters)
        } else {
            const index = set_page.filters.occasions.value.indexOf(e.target.value)
            set_page.filters.occasions.value.splice(index, 1)
            setFilters(set_page.filters)
        }
    }

    const closeButtonStyles = key => {
        let classes = 'filter-close'
        if (!set_page.filters[key].is_open) classes += ' filter-open'
        return classes
    }

    const closeHandler = key => {
        set_page.filters[key].is_open = !set_page.filters[key].is_open
        setFilters(set_page.filters)
    }

    const sliderHandlerMin = (v, key) => {
        if (!isNaN(+v.target.value)
            && +v.target.value >= 0
            && +v.target.value < set_page.filters[key].value.max) {
            set_page.filters[key].value.min = +v.target.value
            setFilters(set_page.filters)
        }
    }

    const sliderHandlerMax = (v, key) => {
        if (!isNaN(+v.target.value)
            && +v.target.value <= 150
            && +v.target.value > set_page.filters[key].value.min) {
            set_page.filters[key].value.max = +v.target.value
            setFilters(set_page.filters)
        }
    }

    const sliderChangeHandler = (v, key) => {
        set_page.filters[key].value = {min: v.min, max: v.max}
        setFilters(set_page.filters)
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
                        set_page.filters.price.is_open
                            ? (
                                <div className="list__filter__body">
                                    <div className="list__filter__numbers">
                                        <div className="list__filter__number-inputs">
                                            <input
                                                onChange={(v) => sliderHandlerMin(v, 'price')}
                                                value={set_page.filters.price.value.min}
                                                type="number"/>
                                            <input
                                                onChange={(v) => sliderHandlerMax(v, 'price')}
                                                value={set_page.filters.price.value.max}
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
                                                value={set_page.filters.price.value}/>
                                        </div>
                                    </div>
                                </div>
                            )
                            : null
                    }
                </div>
            </div>

            {/*persons filters*/}
            <div className="list__filter">
                <div className="container">
                    <div className="list__filter__header">
                        <div className="title">Количество человек</div>
                        <div
                            className={closeButtonStyles('persons')}
                            onClick={() => closeHandler('persons')}></div>
                    </div>
                    {
                        set_page.filters.persons.is_open
                            ? (
                                <div className="list__filter__body">
                                    <div className="list__filter__numbers">
                                        <div className="list__filter__number-inputs">
                                            <input
                                                onChange={(v) => sliderHandlerMin(v, 'persons')}
                                                value={set_page.filters.persons.value.min}
                                                type="number"/>
                                            <input
                                                onChange={(v) => sliderHandlerMax(v, 'persons')}
                                                value={set_page.filters.persons.value.max}
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
                                                formatLabel={(v) => v}
                                                onChange={value => sliderChangeHandler(value, 'persons')}
                                                value={set_page.filters.persons.value}/>
                                        </div>
                                    </div>
                                </div>
                            )
                            : null
                    }
                </div>
            </div>
            {/*occasions filters*/}
            <div className="list__filter">
                <div className="container">
                    <div className="list__filter__header">
                        <div className="title">Повод</div>
                        <div
                            className={closeButtonStyles('occasions')}
                            onClick={() => closeHandler('occasions')}></div>
                    </div>
                    {
                        set_page.filters.occasions.is_open
                            ? (
                                <div className="list__filter__body">
                                    <div className="list__filter__checkboxes">
                                        {
                                            occasionsList.map((item, index) => {
                                                return (
                                                    <div className="list__filter__checkbox"
                                                         key={index}>
                                                        <input
                                                            onChange={(event) => occasionsChangeHandler(event)}
                                                            type="checkbox" value={item}
                                                            id={`occasion${index}`}
                                                            name="occasions"/>
                                                        <label
                                                            htmlFor={`occasion${index}`}>{item}</label>
                                                    </div>
                                                )
                                            })
                                        }
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
