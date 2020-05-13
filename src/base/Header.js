import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {useCurrentWitdh} from "../hooks/windowResize";
import {MenuContext} from "../context/menu/menuContext";

export const Header = props => {
    let width = useCurrentWitdh()

    const {show, hide, showState, headerClasses} = React.useContext(MenuContext)

    let menuClasses = [
        'mobile-menu',
        showState ? '' : 'mobile-menu-hidden'
    ]

    const history = useHistory();

    const submitSearch = () => {
        history.push("/search");
    }

    return (
        <React.Fragment>
            {
                width <= 1260
                    ? (
                        <div className={menuClasses.join(' ')}>
                            <div className="container">
                                <img
                                    src="data:img/png;base64,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"
                                    onClick={hide} className="menu-close"/>
                                <form className="header__search">
                                    <input type="text" placeholder="Поиск"/>
                                    <button><span className="search-icon"></span></button>
                                </form>
                                <div className="mobile-menu__flex">
                                    <div className="mobile-menu__col">
                                        <ul className="mobile-menu__ul1">
                                            <li><NavLink to="/menu" onClick={hide}>меню</NavLink></li>
                                            <li><NavLink to="/sets" onClick={hide}>готовые сеты</NavLink></li>
                                            <li><NavLink to="/equipment" onClick={hide}>посуда и оборудование</NavLink></li>
                                            <li><NavLink to="/tableware" onClick={hide}>наборы посуды</NavLink></li>
                                        </ul>
                                        {
                                            width < 708
                                                ? (
                                                    <ul className="mobile-menu__ul2">
                                                        <li><NavLink to="/about">Об Edvin Group</NavLink></li>
                                                        <li><NavLink to="/delivery">Оплата и доставка</NavLink></li>
                                                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                                                    </ul>
                                                )
                                                : null
                                        }
                                        <div className="mobile-menu__phone">
                                            <div className="phone">+7 (423) 2-800-100</div>

                                            {
                                                width < 708
                                                    ? (
                                                        <ul className="mobile-menu__socials">
                                                            <li className='social-link'><a href="#">
                                                                <span className="link__icon"><img
                                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAQAAABCQyBJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHRZtVZSBAAACmElEQVRYw8VYv2tTURT+bkgIpujQJEMNpIKtdbc/cJB2sbSDduriIJQOJXYrFDr5N7QIuvkHFEoLGRzsYHEQS81UWhRKE6hDNeIgWAyNn0Pfuzkvuffl13vxTPede8733R/n3nPuU6gTRvAAjzCBEaTRunzHZ3xEHu/VXx8rxrjMU3Yjp1xmzAY/zuOuwF055rgJfpGVQOBJssJFF1c58Dm89PD9wQd8RbnFHUghg/uIe3TP1Kva6GdZFfwFzjPRxgZfYSQ4z4JAqXLW7UryXKhXGWkXXJNEuCqGes7klXpdwM91Cq5J5gTFOgD280Ir1joEneAbfuEWRwCAaxrvgv1gTn8eMdoR/F3+dhC+MQUwyiONmYtgWltuqMsmUGkOc5j1J/wJrjmtNB4D6hIbum8aLGq2AStwggvMs6wty8xzwY00Phex8xQAOKC/i9BbYol5RrkioKWUucIowCx/unC84Xi5HlUILhN8lvu+Z3afWYB3+Jrv+II3tZ9eF18CDvGs6bVwxiGDpybwiRsmsYuMUJzgLUoABvEQt7U2g13eUz/sMNYZcFOM85Aznr4ZHoreTfsMrAScEgDbjXcTE9wWFlPtE+yIjYzDIIyLANhpk4B9IjuMWpd3VNtU2GcmsN2cY3ATX0Ed2AjUAQpOM4Yxs42NoBYle/CTPYNHSwTXdcs/q5UNHi0R/NKtlC9ByuDREsGJbk36EkwaPLwSdhT9r3PQg5Mc1F2kSEdXUrfqjJL4hEHPxptuU6CEhtuURe1pn0Ew+SCQjOZP0HVONnqJnNx1VWGw91QVtWBbQhOx1EWNdku1AA+gsjMsqqjsAqlN6wi8tWno1XUP3gfhvnB680YDwntlSopw38lAOC991RgJwf6r+AdULmpkZ7TmTQAAAABJRU5ErkJggg=="
                                                                    alt=""/></span>
                                                                Instagram
                                                            </a></li>
                                                            <li className='social-link'><a href="#">
                                                                <span className="link__icon"><img
                                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAzCAQAAAAqC3DBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHSM75lCiAAAA+UlEQVRIx+3Uv2oCQRDH8e8eBwpqc41FQkhtEQ5S+Q6CTyDkUezS5l2SIm0srARrw0FO7AISEMWgkEl/mf3DbRESbsof89mdZe/W4Cm5YcSQARe0ADhy4syOLVs3HMtCHGWHmTyKp2z0UgoftWBpy9JPbfg+hIoYhfYpaftuASBRskkYhVTJRpbeIzNWfLhvd68e8Eky7yjSV+m7dELO3FXXfDaHENxT8UYLE8LqHIP5RziVu0pypfblP/rgzTjeA189xIz9GoVjxr6ujz/p1B+7MF8ROOYjWUHKSyXscqu0rikryVzpklx9Saba5n/0r2pwgxvc4F/G3z3EIgyO3eD0AAAAAElFTkSuQmCC"
                                                                    alt=""/></span>
                                                                Facebook
                                                            </a></li>
                                                        </ul>
                                                    )
                                                    : null
                                            }

                                            <button>Заказать звонок</button>
                                        </div>
                                    </div>
                                    <div className="mobile-menu__col">
                                        <ul className="mobile-menu__ul2">
                                            <li><NavLink to="/about">Об Edvin Group</NavLink></li>
                                            <li><NavLink to="/delivery">Оплата и доставка</NavLink></li>
                                            <li><NavLink to="/contacts">Контакты</NavLink></li>
                                        </ul>
                                        <ul className="mobile-menu__socials">
                                            <li className='social-link'><a href="#">
                                                <span className="link__icon"><img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAQAAABCQyBJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHRZtVZSBAAACmElEQVRYw8VYv2tTURT+bkgIpujQJEMNpIKtdbc/cJB2sbSDduriIJQOJXYrFDr5N7QIuvkHFEoLGRzsYHEQS81UWhRKE6hDNeIgWAyNn0Pfuzkvuffl13vxTPede8733R/n3nPuU6gTRvAAjzCBEaTRunzHZ3xEHu/VXx8rxrjMU3Yjp1xmzAY/zuOuwF055rgJfpGVQOBJssJFF1c58Dm89PD9wQd8RbnFHUghg/uIe3TP1Kva6GdZFfwFzjPRxgZfYSQ4z4JAqXLW7UryXKhXGWkXXJNEuCqGes7klXpdwM91Cq5J5gTFOgD280Ir1joEneAbfuEWRwCAaxrvgv1gTn8eMdoR/F3+dhC+MQUwyiONmYtgWltuqMsmUGkOc5j1J/wJrjmtNB4D6hIbum8aLGq2AStwggvMs6wty8xzwY00Phex8xQAOKC/i9BbYol5RrkioKWUucIowCx/unC84Xi5HlUILhN8lvu+Z3afWYB3+Jrv+II3tZ9eF18CDvGs6bVwxiGDpybwiRsmsYuMUJzgLUoABvEQt7U2g13eUz/sMNYZcFOM85Aznr4ZHoreTfsMrAScEgDbjXcTE9wWFlPtE+yIjYzDIIyLANhpk4B9IjuMWpd3VNtU2GcmsN2cY3ATX0Ed2AjUAQpOM4Yxs42NoBYle/CTPYNHSwTXdcs/q5UNHi0R/NKtlC9ByuDREsGJbk36EkwaPLwSdhT9r3PQg5Mc1F2kSEdXUrfqjJL4hEHPxptuU6CEhtuURe1pn0Ew+SCQjOZP0HVONnqJnNx1VWGw91QVtWBbQhOx1EWNdku1AA+gsjMsqqjsAqlN6wi8tWno1XUP3gfhvnB680YDwntlSopw38lAOC991RgJwf6r+AdULmpkZ7TmTQAAAABJRU5ErkJggg=="
                                                    alt=""/></span>
                                                Instagram
                                            </a></li>
                                            <li className='social-link'><a href="#">
                                                <span className="link__icon"><img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAzCAQAAAAqC3DBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHSM75lCiAAAA+UlEQVRIx+3Uv2oCQRDH8e8eBwpqc41FQkhtEQ5S+Q6CTyDkUezS5l2SIm0srARrw0FO7AISEMWgkEl/mf3DbRESbsof89mdZe/W4Cm5YcSQARe0ADhy4syOLVs3HMtCHGWHmTyKp2z0UgoftWBpy9JPbfg+hIoYhfYpaftuASBRskkYhVTJRpbeIzNWfLhvd68e8Eky7yjSV+m7dELO3FXXfDaHENxT8UYLE8LqHIP5RziVu0pypfblP/rgzTjeA189xIz9GoVjxr6ujz/p1B+7MF8ROOYjWUHKSyXscqu0rikryVzpklx9Saba5n/0r2pwgxvc4F/G3z3EIgyO3eD0AAAAAElFTkSuQmCC"
                                                    alt=""/></span>
                                                Facebook
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : null
            }
            <header className={headerClasses.headerClasses}>
                <div className="container">
                    <img src="/img/menu/1.png" className="header__bg header__bg1"/>
                    <img src="/img/menu/2.png" className="header__bg header__bg2"/>
                    <img src="/img/menu/3.png" className="header__bg header__bg3"/>
                    <img src="/img/menu/4.png" className="header__bg header__bg4"/>
                    <img src="/img/menu/5.png" className="header__bg header__bg5"/>
                    <div className="header__flex">
                        <div className="header__left">
                            <div className="header__logo">
                                <NavLink to="/">
                                    <img src="img/logo.png" alt=""/>
                                </NavLink>
                            </div>
                            <div className="header__nav">
                                {
                                    width > 1260
                                        ? (
                                            <form onSubmit={() => submitSearch()} className="header__search">
                                                <input type="text" name="q" placeholder="Поиск"/>
                                            </form>
                                        )
                                        : null
                                }

                                <nav>
                                    <ul>
                                        {
                                            width > 1260
                                                ? (
                                                    <React.Fragment>
                                                        <li><NavLink to='/menu'>Меню</NavLink></li>
                                                        <li><NavLink to='/sets'>готовые сеты</NavLink></li>
                                                        <li><NavLink to='/equipment'>посуда и оборудование</NavLink></li>
                                                        <li><NavLink to='/tableware'>Наборы посуды</NavLink></li>
                                                    </React.Fragment>
                                                )
                                                : (
                                                    <li><span className="menu-icon" onClick={show}></span></li>
                                                )
                                        }
                                        <li><NavLink to='/basket'><span className="basket-icon"></span></NavLink></li>
                                        {
                                            width <= 1260 && width > 708
                                                ? (
                                                    <li><span className="search-icon" onClick={show}></span></li>
                                                )
                                                : null
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header__right">
                            <ul className="header__right__links">
                                <li><NavLink to="/about">Об Edvin Group</NavLink></li>
                                <li><NavLink to="/delivery">Оплата и доставка</NavLink></li>
                                <li><NavLink to="/contacts">Контакты</NavLink></li>
                            </ul>
                            <div className="header__right__phone">
                                <div className="phone">+7 (423) 2-800-100</div>
                                <button>Заказать звонок</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}