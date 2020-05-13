import React from 'react'
import {MenuContext} from "../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import {YMaps, Map, Placemark} from "react-yandex-maps";
import {Loader} from "../misc/Loader";
import {Input} from "./About/Input";
import {useCurrentWitdh} from "../hooks/windowResize";

export const Contacts = () => {
    let width = useCurrentWitdh()

    document.title = 'Контакты'

    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])
    const [loading, setLoad] = React.useState(true)

    const mapData = {
        center: [43.110241, 131.8819935],
        zoom: 13,
    }

    return (
        <section className="contacts-page">
            <div className="container">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <span> | Контакты</span>
                </div>
                <h2>Контакты</h2>
                <div className="contacts__flex">
                    {
                        width > 1064
                            ? (
                                <React.Fragment>
                                    <div className="contacts__item">
                                        <div className="contacts__address">
                                            г. Владивосток <br/>ЖК "Адмирал", Набережная 5В
                                        </div>
                                        <div className="socials">
                                            <a href="#" target="_blank">
                                                <img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAQAAABCQyBJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHRZtVZSBAAACmElEQVRYw8VYv2tTURT+bkgIpujQJEMNpIKtdbc/cJB2sbSDduriIJQOJXYrFDr5N7QIuvkHFEoLGRzsYHEQS81UWhRKE6hDNeIgWAyNn0Pfuzkvuffl13vxTPede8733R/n3nPuU6gTRvAAjzCBEaTRunzHZ3xEHu/VXx8rxrjMU3Yjp1xmzAY/zuOuwF055rgJfpGVQOBJssJFF1c58Dm89PD9wQd8RbnFHUghg/uIe3TP1Kva6GdZFfwFzjPRxgZfYSQ4z4JAqXLW7UryXKhXGWkXXJNEuCqGes7klXpdwM91Cq5J5gTFOgD280Ir1joEneAbfuEWRwCAaxrvgv1gTn8eMdoR/F3+dhC+MQUwyiONmYtgWltuqMsmUGkOc5j1J/wJrjmtNB4D6hIbum8aLGq2AStwggvMs6wty8xzwY00Phex8xQAOKC/i9BbYol5RrkioKWUucIowCx/unC84Xi5HlUILhN8lvu+Z3afWYB3+Jrv+II3tZ9eF18CDvGs6bVwxiGDpybwiRsmsYuMUJzgLUoABvEQt7U2g13eUz/sMNYZcFOM85Aznr4ZHoreTfsMrAScEgDbjXcTE9wWFlPtE+yIjYzDIIyLANhpk4B9IjuMWpd3VNtU2GcmsN2cY3ATX0Ed2AjUAQpOM4Yxs42NoBYle/CTPYNHSwTXdcs/q5UNHi0R/NKtlC9ByuDREsGJbk36EkwaPLwSdhT9r3PQg5Mc1F2kSEdXUrfqjJL4hEHPxptuU6CEhtuURe1pn0Ew+SCQjOZP0HVONnqJnNx1VWGw91QVtWBbQhOx1EWNdku1AA+gsjMsqqjsAqlN6wi8tWno1XUP3gfhvnB680YDwntlSopw38lAOC991RgJwf6r+AdULmpkZ7TmTQAAAABJRU5ErkJggg=="
                                                    alt=""/>
                                                <span>Instagram</span>
                                            </a>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAzCAQAAAAqC3DBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHSM75lCiAAAA+UlEQVRIx+3Uv2oCQRDH8e8eBwpqc41FQkhtEQ5S+Q6CTyDkUezS5l2SIm0srARrw0FO7AISEMWgkEl/mf3DbRESbsof89mdZe/W4Cm5YcSQARe0ADhy4syOLVs3HMtCHGWHmTyKp2z0UgoftWBpy9JPbfg+hIoYhfYpaftuASBRskkYhVTJRpbeIzNWfLhvd68e8Eky7yjSV+m7dELO3FXXfDaHENxT8UYLE8LqHIP5RziVu0pypfblP/rgzTjeA189xIz9GoVjxr6ujz/p1B+7MF8ROOYjWUHKSyXscqu0rikryVzpklx9Saba5n/0r2pwgxvc4F/G3z3EIgyO3eD0AAAAAElFTkSuQmCC"
                                                    alt=""/>
                                                <span>Facebook</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contacts__item">
                                        <div className="contacts__phone">
                                            +7 (423) 2-800-100
                                        </div>
                                        <div className="contacts__phone">
                                            +7 (423) 2-800-200
                                        </div>
                                        <div className="contacts__email"><a
                                            href="mailto:zakaz@eventstore.ru">zakaz@eventstore.ru</a>
                                        </div>
                                    </div>
                                    <div className="contacts__item">
                                        <div className="title">График работы</div>
                                        <div className="contacts__time">Пн.-пт.: 11:00-20:00 <br/>Сб, вс: выходной</div>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <div className="contacts__item">
                                        <div className="contacts__address">
                                            г. Владивосток <br/>ЖК "Адмирал", Набережная 5В
                                        </div>
                                        <div className="socials">
                                            <a href="#" target="_blank">
                                                <img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAQAAABCQyBJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHRZtVZSBAAACmElEQVRYw8VYv2tTURT+bkgIpujQJEMNpIKtdbc/cJB2sbSDduriIJQOJXYrFDr5N7QIuvkHFEoLGRzsYHEQS81UWhRKE6hDNeIgWAyNn0Pfuzkvuffl13vxTPede8733R/n3nPuU6gTRvAAjzCBEaTRunzHZ3xEHu/VXx8rxrjMU3Yjp1xmzAY/zuOuwF055rgJfpGVQOBJssJFF1c58Dm89PD9wQd8RbnFHUghg/uIe3TP1Kva6GdZFfwFzjPRxgZfYSQ4z4JAqXLW7UryXKhXGWkXXJNEuCqGes7klXpdwM91Cq5J5gTFOgD280Ir1joEneAbfuEWRwCAaxrvgv1gTn8eMdoR/F3+dhC+MQUwyiONmYtgWltuqMsmUGkOc5j1J/wJrjmtNB4D6hIbum8aLGq2AStwggvMs6wty8xzwY00Phex8xQAOKC/i9BbYol5RrkioKWUucIowCx/unC84Xi5HlUILhN8lvu+Z3afWYB3+Jrv+II3tZ9eF18CDvGs6bVwxiGDpybwiRsmsYuMUJzgLUoABvEQt7U2g13eUz/sMNYZcFOM85Aznr4ZHoreTfsMrAScEgDbjXcTE9wWFlPtE+yIjYzDIIyLANhpk4B9IjuMWpd3VNtU2GcmsN2cY3ATX0Ed2AjUAQpOM4Yxs42NoBYle/CTPYNHSwTXdcs/q5UNHi0R/NKtlC9ByuDREsGJbk36EkwaPLwSdhT9r3PQg5Mc1F2kSEdXUrfqjJL4hEHPxptuU6CEhtuURe1pn0Ew+SCQjOZP0HVONnqJnNx1VWGw91QVtWBbQhOx1EWNdku1AA+gsjMsqqjsAqlN6wi8tWno1XUP3gfhvnB680YDwntlSopw38lAOC991RgJwf6r+AdULmpkZ7TmTQAAAABJRU5ErkJggg=="
                                                    alt=""/>
                                                <span>Instagram</span>
                                            </a>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAzCAQAAAAqC3DBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSHSM75lCiAAAA+UlEQVRIx+3Uv2oCQRDH8e8eBwpqc41FQkhtEQ5S+Q6CTyDkUezS5l2SIm0srARrw0FO7AISEMWgkEl/mf3DbRESbsof89mdZe/W4Cm5YcSQARe0ADhy4syOLVs3HMtCHGWHmTyKp2z0UgoftWBpy9JPbfg+hIoYhfYpaftuASBRskkYhVTJRpbeIzNWfLhvd68e8Eky7yjSV+m7dELO3FXXfDaHENxT8UYLE8LqHIP5RziVu0pypfblP/rgzTjeA189xIz9GoVjxr6ujz/p1B+7MF8ROOYjWUHKSyXscqu0rikryVzpklx9Saba5n/0r2pwgxvc4F/G3z3EIgyO3eD0AAAAAElFTkSuQmCC"
                                                    alt=""/>
                                                <span>Facebook</span>
                                            </a>
                                        </div>
                                        <div className="contacts__email"><a
                                            href="mailto:zakaz@eventstore.ru">zakaz@eventstore.ru</a>
                                        </div>
                                    </div>
                                    <div className="contacts__item">
                                        <div className="contacts__phone">
                                            +7 (423) 2-800-100
                                        </div>
                                        <div className="contacts__phone">
                                            +7 (423) 2-800-200
                                        </div>
                                        <div className="title">График работы</div>
                                        <div className="contacts__time">Пн.-пт.: 11:00-20:00 <br/>Сб, вс: выходной</div>
                                    </div>
                                </React.Fragment>
                            )
                    }


                </div>

                <div className="contacts-map">
                    <img src="img/contacts/1.png" alt="" className="bg"/>
                    <YMaps>
                        {
                            loading
                                ? (<Loader></Loader>)
                                : null
                        }
                        <Map defaultState={mapData} className="map" onLoad={() => setLoad(false)}>

                            <Placemark
                                geometry={[43.113417, 131.873591]}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: '/img/icons/map.png',
                                    iconImageSize: [98, 68],
                                    iconImageOffset: [-45, -45],
                                }}
                            ></Placemark>

                        </Map>
                    </YMaps>
                </div>


            </div>

            <div className="contacts-form-wrapper">
                <div className="container">
                    <div className="contacts-form__flex">
                        <div className="title">Мы с удовольствием <br/>ответим на все ваши <br/>вопросы</div>
                        <div className="review-form contacts-form">
                            <div className="review-form__block">
                                <Input
                                    type="name"
                                    label="Имя"
                                    id="name-input"
                                ></Input>
                                <Input
                                    type="phone"
                                    label="Телефон"
                                    id="phone-input"
                                ></Input>
                                <Input
                                    type="email"
                                    label="Email"
                                    id="email-input"
                                ></Input>
                            </div>
                            <div className="review-form__block">
                                <textarea name="text" placeholder="Сообщение"></textarea>
                                <button>Отправить письмо</button>
                                <div className="rules">Нажимая на кнопку «Отправить письмо» я соглашаюсь
                                    <br/>с <NavLink
                                        to="/">правилами
                                        обработки персональных
                                        данных.</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}