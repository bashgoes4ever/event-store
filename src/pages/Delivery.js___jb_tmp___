import React from 'react'
import {MenuContext} from "../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import {YMaps, Map, Polygon} from "react-yandex-maps";
import {zones} from '../zones'
import {Loader} from "../misc/Loader";
import {Input} from "./About/Input";
import {useCurrentWitdh} from "../hooks/windowResize";

export const Delivery = () => {
    let width = useCurrentWitdh()

    document.title = 'Оплата и доставка'

    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])
    const [loading, setLoad] = React.useState(true)

    const mapData = {
        center: [43.096618, 131.921289],
        zoom: 11,
    }

    return (
        <section className="contacts-page confident-page delivery-page">
            <div className="container">
                <div className="breadcrumbs">
                    <NavLink to="/">Главная</NavLink>
                    <span> | Оплата и доставка</span>
                </div>
                <h2>Оплата и доставка</h2>
                {
                    width > 1064
                        ? (<h1>Доставим в любую точку <br/>города вовремя</h1>)
                        : null
                }

                <div className="delivery-page__flex">
                    <img src="img/delivery/1.png" alt="" className="flex-bg1"/>
                    <img src="img/delivery/3.png" alt="" className="flex-bg2"/>
                    <img src="img/delivery/4.png" alt="" className="flex-bg3"/>
                    <img src="img/delivery/2.png" alt="" className="flex-bg4"/>

                    <div className="delivery-page__item">
                        <img src="img/delivery/9.png" alt="" className="item-bg1"/>
                        <img src="img/delivery/8.png" alt="" className="item-bg2"/>
                        {
                            width <= 1064
                                ? (<h1>Доставим в любую точку <br/>города вовремя</h1>)
                                : null
                        }

                        <div className="title">Условия доставки</div>
                        <div className="text">Доставка осуществляется в день, который вы выбрали при оформлении заказа.
                            Время доставки оговаривается с менеджером, который свяжется с вами после того, как вы
                            оформите заказ.
                        </div>
                        <div className="title2">Стоимость доставки</div>
                        <div className="delivery-page__zones">
                            <div className="delivery-page__zone">
                                <div className="circle blue"></div>
                                <span>Синяя зона - 500 рублей</span>
                            </div>
                            <div className="delivery-page__zone">
                                <div className="circle red"></div>
                                <span>Красная зона - 700 рублей</span>
                            </div>
                            <div className="delivery-page__zone">
                                <div className="circle yellow"></div>
                                <span>Желтая зона - 1000 рублей</span>
                            </div>
                        </div>
                    </div>

                    <div className="map-wrapper">
                        <YMaps>
                            {
                                loading
                                    ? (<Loader></Loader>)
                                    : null
                            }
                            <Map defaultState={mapData} className="map" onLoad={() => setLoad(false)}>
                                {
                                    zones.map((zone, index) => {
                                        return (
                                            <Polygon
                                                key={index}
                                                geometry={[zone.coordinates]}
                                                options={zone.options}
                                            />
                                        )
                                    })
                                }

                            </Map>
                        </YMaps>
                    </div>

                </div>

                <div className="delivery-page__pickup-flex">
                    <div className="title">Точки <br/>самовывоза</div>
                    <div className="delivery-page__pickup-item">
                        <div className="circle">
                            <img
                                src="data:img/png;base64,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"
                                alt=""/>
                        </div>
                        <div className="text">г. Владивосток, <br/>ЖК "Адмирал", ул. Набережная 5В</div>
                    </div>
                    <div className="delivery-page__pickup-item">
                        <div className="circle">
                            <img
                                src="data:img/png;base64,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"
                                alt=""/>
                        </div>
                        <div className="text">г. Владивосток, <br/>ул. Светланская 137</div>
                    </div>
                </div>

                <div className="delivery-page__bottom">
                    <img src="img/delivery/7.png" alt="" className="bg"/>
                    <div className="title">Способы оплаты</div>
                    <div className="delivery-page__bottom-flex">
                        <div className="delivery-page__bottom-item">
                            <div className="title2">
                                <img
                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAABXCAMAAAD1XgFEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACalBMVEUAAAAdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAAAVoK2QAAAAzHRSTlMAKYDE7uKsVwYIXcPcSC2T8Apgxn3hOCAnXsr+O/uuSgIByd56GIoyC2OtRpowlvJ28w0W+maqzUVDNDPanXP1DhT5aqbQQDbO16A5jN/g9u/bt3lwEMf8oxcS+G1s6DrTPf1PkeQR1qLUBLOSTncDuPekHKuZLrrAa8jY2Wl0nAyekBmwGuMqS1Q8hiMlblzrH4PmNwkVQQ9Qts+lWyKOBVO70uok1fHRVr0ohYIevoTLlY3MWaGH6WVkYR01aFIxWPSJ7bxab7SplFEjgRr1AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+QFChEfL50zZqAAAATVSURBVGjexZr7QxRVFMevi49VFo2NlXQDZ5V8AYawgAgIAkKgwFasi4sKSKVSRkAEtpWGxELkK3yFj6SX0fslPSjLyp7zR3XO7MzszDKzTjJ37veXe+45d+5nzsydmTt3hhCammdLmM/zCxYuslPFaGrxkkRekiPJYvjSZffxStksZCc77+djlcIgcZdteeoDK1ai6X7Q4sTT0ldxgs9jw+pqSxNfk/FQ1L8WPevostdvWC0nvjGTU4bsC8CZRROevelhzcQjygH35lx6ia/USzyiPC+E8lkkHlEBBAvpJu4t2MLpNSvCBlvNhhdnyYk7cvLiNPSUQJNSU9m5+YXRxIs88Rtvg1Zl5WYmvtlY4hFtr4CGlSwSj6gK2u5gkXhE1di8Zs7s8spHJHZFVbWhxAV5amGLOs3Qzl2J9Q0G1Rh9iPru3vrRxx5PFSFNsEWjfzZ8626epgLNewRMsAUqe2fR96VRpYP2twqgZjDbYulNtOGgRmHItaPZqqa3H0BnSUbSumwKqul4QpgBPPkUsg6CdUhF5w5jNKVzzheEroJPI+EZNPeC0RJUBo9g7Fl6cFDXc4DoxvT9eNU0KWM94Cg0fvHek3q7AeJEqw6Mg8pQPU9tGhDV8wDpQ6MVj3W7IuKG+gu08fi06xesNrB6FBHcndR769S4nAAZEKyjYFVsZ4YvLwNzmxr/4gBlhWQ8KQXzJY8Kb4lEfA3a1czwZAfYVezwL4PtzVPiX3FS1jEFPhcnSjmMRj4oCyoOafBZjy9GZBEzPME5cgE7fD4Ovj3M8MfxvSyDGZ5sguoajhk+G6GZMv7VQcrqV+MJvpJvlPGW3vVQG6CedoIZfj3OflOY4ckycLg4ET9oo6yhWPxSxK5iNPJBuPQ5xA6PnsBrzPDJPl5YZGeEJ4PgGu5ihg8jeIQZnuCXlh52+H3gc7DD7wSfmx1eeOwp8KO6E9XXaeBHwedT4Bt0b9d1/x94dzwuLOxmhi8OgG+MFf4NpLlPKvBZQ3o6ZTa+8/QZ5PYxuemefXNcOKihXJPxvdUd585DeeHikeWXtPGdb024I6c01EvMxHNLLmNn3VeuDmDpnYgunsv4a2Pj0oC6Iiwum4a/kDBryL7dpcJfn+x3S6F3xBUGs/CX2jQumWMK/Ltj+yX3e2vflzYzC18qdDz+QYVQ3vgw8rljKoqX9dGU4l8Gk/Af42Gtv0iI/5MAf+b0dWKvxKVMBxeDVyRuJv5TvIN/JphJl88K5SR23arCqxI3E/85dPOFaHNi+SUvraI4tRKPwYcNLtGHtfAhcd6u1Ffg+1rGf6P594qRe75aDVrd4MetmzG+afB9K+MHCEV8Oi+9sxKP+JdC8nfg+94a/A8YWYHW4mnvDJZduHbP/2gYn2DwO16CVjfHMVV+OvOnWw4oJ37+5bbwB0k6MYyfm2a0DtSvJ63Ck99m01tGiBH8PDPwJP93kSp9ZT18TgqdgtodzY2GIfKHKXji//NOg692esv5mb9c80N/T3FyBEeh9owtXXfHzFPwBkBuaYau4mG6TRd/CBCBE5ohuwvP1iKK8M5/MMNmnei/wjCZGL3mp6Fg+GgJ9u/r1du7XQbvdnPRgRE9OvHQ55dNxjs7HS669MQwiSv7zYXDlNBptX1xXpD/A6TbM9deBX7TAAAAAElFTkSuQmCC"
                                    alt=""/>
                                <span>Безналичный расчет</span>
                            </div>
                            <div className="text">Имеется спорная точка зрения, гласящая примерно следующее: стремящиеся
                                вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль
                                ключевых факторов.
                            </div>
                            <div className="delivery-payments">
                                <img src="img/delivery/payment/1.png" alt=""/>
                                <img src="img/delivery/payment/2.png" alt=""/>
                                <img src="img/delivery/payment/3.png" alt=""/>
                                <img src="img/delivery/payment/4.png" alt=""/>
                                <img src="img/delivery/payment/5.png" alt=""/>
                                <img src="img/delivery/payment/6.png" alt=""/>
                                <img src="img/delivery/payment/7.png" alt=""/>
                            </div>
                        </div>
                        <div className="delivery-page__bottom-item">
                            <div className="title2">
                                <img
                                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAABXCAMAAAD1XgFEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACWFBMVEUAAAAdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAACJ94paAAAAxnRSTlMAGVyg59RXDU2QXwU9gcT84gEucbX0+B5ipemiXRd1chFSltr3unMb/rYIQobL/dGLRb31BgIzd7thQCNnrO0PhBWc4NKNqskKSIzQo15PEAM5fcD6L+5RBCltsfGdVpokodjTSVsrfmPPJcqHe/nzm0Z86nYME1iYem/hKN/v5IB5aSEdH1PmtFroMManbK2URJc3TPCz9ibDsBqv3tfyLRKSHFWu1fvMNTTCjgcWv+snUJ845Q6yPiLd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"
                                    alt=""/>
                                <span>Оплата наличными</span>
                            </div>
                            <div className="text">Имеется спорная точка зрения, гласящая примерно следующее: стремящиеся
                                вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль
                                ключевых факторов.
                            </div>

                        </div>
                    </div>
                </div>

                <img src="img/delivery/5.png" alt="" className="delivery-bg1"/>
                <img src="img/delivery/6.png" alt="" className="delivery-bg2"/>
            </div>
        </section>
    )
}