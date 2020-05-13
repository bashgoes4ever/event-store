import React from 'react'
import {MenuContext} from "../context/menu/menuContext";
import {useCurrentWitdh} from "../hooks/windowResize";
import {NavLink} from 'react-router-dom'
import ItemCard from '../misc/ItemCard'

export const Search = props => {
    let width = useCurrentWitdh()

    const [query, setQuery] = React.useState(window.location.search.split('=')[1] ? decodeURI(window.location.search.split('=')[1]).replace('+', ' ') : null)

    document.title = 'Контакты'

    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <section className="search-page">
            <div className="container">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <span> | Поиск</span>
                </div>
                <h2>Результаты поиска</h2>
                <form>
                    <input type="text" name="q" value={query} onChange={e => setQuery(e.target.value)}
                           placeholder="Поиск"/>
                </form>

                <div className="search-menu-wrapper">
                    <aside className="about__menu search-menu">
                        <ul>
                            <li className="link active">Блюда</li>
                            <li className="link">Посуда и оборудование</li>
                            <li className="link">Сеты</li>
                            <li className="link">Наборы посуды</li>
                        </ul>
                    </aside>
                </div>

                <div className="search-items-wrapper">
                    <div className="list__items">
                        {cards.map((item, index) => (
                            <ItemCard
                                key={index}
                                price={100}
                                minWeight={200}
                                unit={100}
                                appendUnitsText={' гр.'}
                            ></ItemCard>
                        ))}
                    </div>
                    <button className="load-more">показать еще</button>
                </div>


            </div>
        </section>
    )
}