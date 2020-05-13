import React from 'react'
import {NavLink} from 'react-router-dom'
import {useCurrentWitdh} from "../hooks/windowResize";
import {MenuContext} from "../context/menu/menuContext";

export const Footer = () => {
    let width = useCurrentWitdh()

    const {show} = React.useContext(MenuContext)

    return (
        <footer>
            <div className="container">
                {
                    width < 708
                        ? (
                            <div className="header__left">
                                <div className="header__logo">
                                    <NavLink to="/">
                                        <img src="img/logo-white.png" alt=""/>
                                    </NavLink>
                                </div>
                                <div className="header__nav">

                                    <nav>
                                        <ul>
                                            <li onClick={show}><span className="menu-icon"></span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        ) : null
                }

                <div className="footer__top-flex">
                    <NavLink to="/" className="footer__logo">
                        <img src="/img/logo-white.png" alt=""/>
                    </NavLink>
                    <ul className="footer__links footer__col1">
                        <li><NavLink to="/menu">Меню</NavLink></li>
                        <li><NavLink to="#">Готовые сеты</NavLink></li>
                        <li><NavLink to="#">Посуда и оборудование</NavLink></li>
                        <li><NavLink to="#">Наборы посуды</NavLink></li>
                        {
                            width <= 1064
                                ? (
                                    <React.Fragment>
                                        <li><NavLink to="#">Об Edwin Group</NavLink></li>
                                        <li><NavLink to="#">Оплата и доставка</NavLink></li>
                                        <li><NavLink to="#">Контакты</NavLink></li>
                                    </React.Fragment>
                                )
                                : null
                        }


                    </ul>
                    <ul className="footer__links footer__col2">
                        <li><NavLink to="#">Об Edwin Group</NavLink></li>
                        <li><NavLink to="#">Оплата и доставка</NavLink></li>
                        <li><NavLink to="#">Контакты</NavLink></li>
                    </ul>
                    <ul className="footer__links footer__col3">
                        <li>+7 (423) 2-800-100</li>
                        <li><a className='mail-link' href="mailto:zakaz@eventstore.ru">zakaz@eventstore.ru</a></li>

                        <li className="footer__socials-mobile">
                            <a href="#" target="_blank">
                                <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAQAAABCQyBJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHRZtVZSBAAACmElEQVRYw8VYv2tTURT+bkgIpujQJEMNpIKtdbc/cJB2sbSDduriIJQOJXYrFDr5N7QIuvkHFEoLGRzsYHEQS81UWhRKE6hDNeIgWAyNn0Pfuzkvuffl13vxTPede8733R/n3nPuU6gTRvAAjzCBEaTRunzHZ3xEHu/VXx8rxrjMU3Yjp1xmzAY/zuOuwF055rgJfpGVQOBJssJFF1c58Dm89PD9wQd8RbnFHUghg/uIe3TP1Kva6GdZFfwFzjPRxgZfYSQ4z4JAqXLW7UryXKhXGWkXXJNEuCqGes7klXpdwM91Cq5J5gTFOgD280Ir1joEneAbfuEWRwCAaxrvgv1gTn8eMdoR/F3+dhC+MQUwyiONmYtgWltuqMsmUGkOc5j1J/wJrjmtNB4D6hIbum8aLGq2AStwggvMs6wty8xzwY00Phex8xQAOKC/i9BbYol5RrkioKWUucIowCx/unC84Xi5HlUILhN8lvu+Z3afWYB3+Jrv+II3tZ9eF18CDvGs6bVwxiGDpybwiRsmsYuMUJzgLUoABvEQt7U2g13eUz/sMNYZcFOM85Aznr4ZHoreTfsMrAScEgDbjXcTE9wWFlPtE+yIjYzDIIyLANhpk4B9IjuMWpd3VNtU2GcmsN2cY3ATX0Ed2AjUAQpOM4Yxs42NoBYle/CTPYNHSwTXdcs/q5UNHi0R/NKtlC9ByuDREsGJbk36EkwaPLwSdhT9r3PQg5Mc1F2kSEdXUrfqjJL4hEHPxptuU6CEhtuURe1pn0Ew+SCQjOZP0HVONnqJnNx1VWGw91QVtWBbQhOx1EWNdku1AA+gsjMsqqjsAqlN6wi8tWno1XUP3gfhvnB680YDwntlSopw38lAOC991RgJwf6r+AdULmpkZ7TmTQAAAABJRU5ErkJggg==" alt=""/>
                                <span>Instagram</span>
                            </a>
                            <a href="#" target="_blank">
                                <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAzCAQAAAAqC3DBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHSM75lCiAAAA+UlEQVRIx+3Uv2oCQRDH8e8eBwpqc41FQkhtEQ5S+Q6CTyDkUezS5l2SIm0srARrw0FO7AISEMWgkEl/mf3DbRESbsof89mdZe/W4Cm5YcSQARe0ADhy4syOLVs3HMtCHGWHmTyKp2z0UgoftWBpy9JPbfg+hIoYhfYpaftuASBRskkYhVTJRpbeIzNWfLhvd68e8Eky7yjSV+m7dELO3FXXfDaHENxT8UYLE8LqHIP5RziVu0pypfblP/rgzTjeA189xIz9GoVjxr6ujz/p1B+7MF8ROOYjWUHKSyXscqu0rikryVzpklx9Saba5n/0r2pwgxvc4F/G3z3EIgyO3eD0AAAAAElFTkSuQmCC" alt=""/>
                                <span>Facebook</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__links">
                        <li className='social-link'><a href="#">
                            <span className="link__icon"><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAQAAABCQyBJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHRZtVZSBAAACmElEQVRYw8VYv2tTURT+bkgIpujQJEMNpIKtdbc/cJB2sbSDduriIJQOJXYrFDr5N7QIuvkHFEoLGRzsYHEQS81UWhRKE6hDNeIgWAyNn0Pfuzkvuffl13vxTPede8733R/n3nPuU6gTRvAAjzCBEaTRunzHZ3xEHu/VXx8rxrjMU3Yjp1xmzAY/zuOuwF055rgJfpGVQOBJssJFF1c58Dm89PD9wQd8RbnFHUghg/uIe3TP1Kva6GdZFfwFzjPRxgZfYSQ4z4JAqXLW7UryXKhXGWkXXJNEuCqGes7klXpdwM91Cq5J5gTFOgD280Ir1joEneAbfuEWRwCAaxrvgv1gTn8eMdoR/F3+dhC+MQUwyiONmYtgWltuqMsmUGkOc5j1J/wJrjmtNB4D6hIbum8aLGq2AStwggvMs6wty8xzwY00Phex8xQAOKC/i9BbYol5RrkioKWUucIowCx/unC84Xi5HlUILhN8lvu+Z3afWYB3+Jrv+II3tZ9eF18CDvGs6bVwxiGDpybwiRsmsYuMUJzgLUoABvEQt7U2g13eUz/sMNYZcFOM85Aznr4ZHoreTfsMrAScEgDbjXcTE9wWFlPtE+yIjYzDIIyLANhpk4B9IjuMWpd3VNtU2GcmsN2cY3ATX0Ed2AjUAQpOM4Yxs42NoBYle/CTPYNHSwTXdcs/q5UNHi0R/NKtlC9ByuDREsGJbk36EkwaPLwSdhT9r3PQg5Mc1F2kSEdXUrfqjJL4hEHPxptuU6CEhtuURe1pn0Ew+SCQjOZP0HVONnqJnNx1VWGw91QVtWBbQhOx1EWNdku1AA+gsjMsqqjsAqlN6wi8tWno1XUP3gfhvnB680YDwntlSopw38lAOC991RgJwf6r+AdULmpkZ7TmTQAAAABJRU5ErkJggg==" alt=""/></span>
                            Instagram
                        </a></li>
                        <li className='social-link'><a href="#">
                            <span className="link__icon"><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAzCAQAAAAqC3DBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHSM75lCiAAAA+UlEQVRIx+3Uv2oCQRDH8e8eBwpqc41FQkhtEQ5S+Q6CTyDkUezS5l2SIm0srARrw0FO7AISEMWgkEl/mf3DbRESbsof89mdZe/W4Cm5YcSQARe0ADhy4syOLVs3HMtCHGWHmTyKp2z0UgoftWBpy9JPbfg+hIoYhfYpaftuASBRskkYhVTJRpbeIzNWfLhvd68e8Eky7yjSV+m7dELO3FXXfDaHENxT8UYLE8LqHIP5RziVu0pypfblP/rgzTjeA189xIz9GoVjxr6ujz/p1B+7MF8ROOYjWUHKSyXscqu0rikryVzpklx9Saba5n/0r2pwgxvc4F/G3z3EIgyO3eD0AAAAAElFTkSuQmCC" alt=""/></span>
                            Facebook
                        </a></li>
                    </ul>
                </div>
                <ul className="footer__bottom-flex">
                    <li className="footer__col1">© 2011-2020 ИП Багдасарян Э.Г.</li>
                    <li className="footer__col2"><NavLink to="/confident">Политика конфиденциальности</NavLink></li>
                    <li className="footer__col3">Разработка сайта <a href="http://housevl.ru/" target="_blank">Digital-агентство
                        House</a></li>
                </ul>
            </div>
        </footer>
    )
}