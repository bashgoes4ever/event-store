import React from 'react'
import {MenuContext} from "../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel2';
import {useCurrentWitdh} from "../hooks/windowResize";

export const Confident = () => {
    let width = useCurrentWitdh()

    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    let items = 3
    if (width < 1260 && width > 708) items = 2
    if (width <= 708) items = 1

    const owlOptions = {
        items: items,
        autoWidth: true,
        margin: 20,
        nav: true,
        loop: true,
        navText: ['<img src="/img/icons/arrow-right.png"/>', '<img src="/img/icons/arrow-right.png"/>']
    }

    return (
        <section className="contacts-page confident-page">
            <div className="container">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <span> | Политика конфидециальности</span>
                </div>
                <h2>Политика конфидециальности</h2>
                <div className="confident-content">
                    <h3>1. Общие положения</h3>
                    <p>1.1 Настоящая политика обработки персональных данных составлена в соответствии с требованиями
                        Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок
                        обработки
                        персональных данных и меры по обеспечению безопасности персональных данных Иванова Ивана
                        Ивановича
                        (далее – Оператор). <br/><br/>1.2. Оператор ставит своей важнейшей целью и условием
                        осуществления
                        своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных
                        данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную
                        тайну. <br/><br/>1.3 Настоящая политика Оператора в отношении обработки персональных данных
                        (далее
                        – Политика)
                        применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта
                        https://mysite.ru.</p>
                    <h3>2. Основные понятия</h3>
                    <p>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью
                        средств вычислительной техники; <br/><br/>2.2. Блокирование персональных данных – временное
                        прекращение обработки персональных данных (за
                        исключением случаев, если обработка необходима для уточнения персональных данных); <br/><br/>2.3.
                        Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз
                        данных, обеспечивающих их доступность в сети интернет по сетевому адресу
                        https://mysite.ru; <br/><br/>2.4. Информационная система персональных данных — совокупность
                        содержащихся в базах данных
                        персональных данных, и обеспечивающих их обработку информационных технологий и технических
                        средств;</p>
                    <div className="confident__item">
                        <img
                            src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAqFBMVEUAAAAdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAAAKQi/qAAAANnRSTlMAAzh2ocno9Emn8Qpw5gJm7Cph9ZUGqwv9kUFTyFvNV+XR+2v+aQEeypwPWXdkF1TTFRbicaSYRNK6AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+QFCRIxGtB0uhgAAAGBSURBVEjHndbncsIwDABgZTiLTAJ0FzroHnTp/R+tDkk4POI40k9fPvBJsi0ANRzX81kQIoYB8z3XAYtwojhBIZI4GpOzNENNZOnMgPKixIEoi3xIVQwNwSq9mtdojHquS8UCR2OhpGa5GleIq6X0X1aKO/H/LHbY7VPIhq1CPMpLVduz+lCHnNkrXr++7sUUhVi06qScxsq2P9NpCjHdlyybyrKmeNFUhRhxFo98c3p2fnEpLsV8j8mIumo69lpYSxxwLZTSRi54NgrW4rIHvo2SE+CD0libm1tF3UnfMAjEhfvtAzw+SWor/3QAobjw3Hz2wswKQ5AWXqF3BoUoszfo3btBobzJzUfnPk0qlFOCuy/hktEqnhKlAILTK14AtdxHbkDxcmua6+CGFG8uXSt3blDxVtYenN23UfGDoz+mP7/rv0HVHFPqpUC8gogXHvV6JV7m1KeD+FBRn0XqI0x98okDBnWcAeLwBNRRjToYNv1JGUP3qaEMva0cH7H/Ad2LtXdutOJJAAAAAElFTkSuQmCC"
                            alt=""/>
                        Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности представляет собой
                        интересный эксперимент проверки дальнейших направлений развития.
                    </div>
                    <div className="confident__item">
                        <img
                            src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAqFBMVEUAAAAdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAAAKQi/qAAAANnRSTlMAAzh2ocno9Emn8Qpw5gJm7Cph9ZUGqwv9kUFTyFvNV+XR+2v+aQEeypwPWXdkF1TTFRbicaSYRNK6AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+QFCRIxGtB0uhgAAAGBSURBVEjHndbncsIwDABgZTiLTAJ0FzroHnTp/R+tDkk4POI40k9fPvBJsi0ANRzX81kQIoYB8z3XAYtwojhBIZI4GpOzNENNZOnMgPKixIEoi3xIVQwNwSq9mtdojHquS8UCR2OhpGa5GleIq6X0X1aKO/H/LHbY7VPIhq1CPMpLVduz+lCHnNkrXr++7sUUhVi06qScxsq2P9NpCjHdlyybyrKmeNFUhRhxFo98c3p2fnEpLsV8j8mIumo69lpYSxxwLZTSRi54NgrW4rIHvo2SE+CD0libm1tF3UnfMAjEhfvtAzw+SWor/3QAobjw3Hz2wswKQ5AWXqF3BoUoszfo3btBobzJzUfnPk0qlFOCuy/hktEqnhKlAILTK14AtdxHbkDxcmua6+CGFG8uXSt3blDxVtYenN23UfGDoz+mP7/rv0HVHFPqpUC8gogXHvV6JV7m1KeD+FBRn0XqI0x98okDBnWcAeLwBNRRjToYNv1JGUP3qaEMva0cH7H/Ad2LtXdutOJJAAAAAElFTkSuQmCC"
                            alt=""/>
                        Задача организации, в особенности же консультация с широким активом позволяет выполнять важные
                        задания по разработке позиций, занимаемых участниками в отношении поставленных задач.
                    </div>
                </div>

                <OwlCarousel options={owlOptions} className="confident__slider owl-carousel">
                    <div className="confident-img">
                        <img src="img/confident/1.png" alt=""/>
                    </div>
                    <div className="confident-img">
                        <img src="img/confident/2.png" alt=""/>
                    </div>
                    <div className="confident-img">
                        <img src="img/confident/3.png" alt=""/>
                    </div>
                    <div className="confident-img">
                        <img src="img/confident/2.png" alt=""/>
                    </div>
                </OwlCarousel>

            </div>
        </section>
    )
}