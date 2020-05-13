import React from 'react';
import {MenuContext} from "../../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import 'react-input-range/lib/css/index.css'
import ItemCard from '../../misc/ItemCard'
import OwlCarousel from 'react-owl-carousel2';
import {HomeBlock6} from "../Home/block6";
import {HomeBlock5} from "../Home/block5";
import {Recomended} from '../Menu/Recomended'

export const EquipmentDetail = () => {
    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    document.title = 'Меню | Детальная'


    const carouselImages = [
        '/img/menu/detail/1.png',
        '/img/home/block6/1.png',
        '/img/menu/detail/1.png',
        '/img/home/block6/1.png',
        '/img/menu/detail/1.png',
        '/img/home/block6/1.png',
    ]

    const carouselMainRef = React.useRef(null)

    const carouselMainOptions = {
        items: 1,
        mouseDrag: false,
        nav: false
    }

    let items = 3
    const carouselThumbsOptions = {
        items: items,
        nav: true,
        navText: ['<span class="icon-arrow"></span>', '<span class="icon-arrow"></span>'],
        mouseDrag: false
    }

    const carouselEvents = {
        onChanged: (e) => {
            carouselMainRef.current.goTo(e.item.index)
        }
    }

    const carouselSlideOnClick = index => {
        carouselMainRef.current.goTo(index)
    }

    const [options, setOptions] = React.useState({
        price: 100,
        minWeight: 200,
        weight: 200,
        appendUnitsText: ' гр.',
        weightString: '200 гр.',
        unit: 100,
        currentPrice: 200
    })

    const changeWeightHandler = unit => {
        const weight = options.weight + unit
        if (weight >= options.minWeight) {
            const weightString = weight >= 1000 ? (weight / 1000) + ' кг.' : weight + ' гр'
            const currentPrice = (weight / options.unit) * options.price
            setOptions({
                ...options,
                weight,
                weightString,
                currentPrice
            })
        }
    }

    return (
        <React.Fragment>
            <section className="list__detail">
                <div className="container">
                    <div className="breadcrumbs">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/menu"> | Меню</NavLink>
                        <span> | Салат с гребешком и спаржей</span>
                    </div>
                    <div className="detail__flex">

                        <div className="detail__left">
                            <div className="detail__left__item">
                                <div className="title">Особенности блюда</div>
                                <div className="detail__left__chips">
                                    <div className="chip chip-green">для вегетарианцев</div>
                                    <div className="chip chip-red">острое</div>
                                </div>
                            </div>
                            <div className="detail__left__item">
                                <div className="title">Повод</div>
                                <div className="detail__left__chips">
                                    <div className="chip">день рождения</div>
                                    <div className="chip">корпоратив</div>
                                    <div className="chip">юбилей</div>
                                </div>
                            </div>
                            <div className="detail__left__item">
                                <div className="title">Тип мероприятия</div>
                                <div className="detail__left__chips">
                                    <div className="chip">банкет</div>
                                </div>
                            </div>
                            <div className="detail__left__item">
                                <div className="title">Входит в сет</div>
                                <NavLink className="set-link" to="#">Деловой завтрак в формате банкет</NavLink>
                            </div>
                        </div>

                        <div className="detail__images">
                            <OwlCarousel
                                options={carouselMainOptions}
                                ref={carouselMainRef}
                            >
                                {
                                    carouselImages.map((item, index) => {
                                        return (
                                            <div key={index} className="detail__image-wrapper">
                                                <img src={item} className="detail__image"/>
                                            </div>
                                        )
                                    })
                                }
                            </OwlCarousel>

                            <OwlCarousel
                                options={carouselThumbsOptions}
                                events={carouselEvents}
                                className="detail__carousel owl-carousel"
                            >
                                {
                                    carouselImages.map((item, index) => {
                                        return (
                                            <div onClick={() => carouselSlideOnClick(index)}
                                                 className="detail__image-min" key={index}>
                                                <img src={item} alt=""/>
                                            </div>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </div>

                        <div className="detail__description">
                            <div className="title">Салат с гребешком <br/>и спаржей</div>
                            <p>Тёплый салат с приморским гребешком, свежей спаржей, болгарским <br/>перцем и помидорами
                                черри со
                                <br/>специальной горчичной заправкой.</p>
                            <div className="detail__table">
                                <div className="row">
                                    <div className="key">Цена за 100гр.</div>
                                    <div className="dots"></div>
                                    <div className="value">100 ₽</div>
                                </div>
                                <div className="row">
                                    <div className="key">Минимальный заказ</div>
                                    <div className="dots"></div>
                                    <div className="value">200 гр</div>
                                </div>
                            </div>
                            <div className="price">{options.currentPrice} ₽</div>
                            <div className="item-card__footer__flex detail-input">
                                <div className="item-card__input">
                                    <input readOnly={true} type="text" value={options.weightString}/>
                                    <button className="sub-btn"
                                            onClick={changeWeightHandler.bind(this, -options.unit)}></button>
                                    <button className="add-btn"
                                            onClick={changeWeightHandler.bind(this, options.unit)}></button>
                                </div>
                                <button className="add-to-basket">
                                    <img
                                        src="data:img/png;base64,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"
                                        alt=""/>
                                    <span>В корзину</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Recomended></Recomended>
            <HomeBlock6></HomeBlock6>
            <HomeBlock5 hideBg={true}></HomeBlock5>
        </React.Fragment>

    )
}