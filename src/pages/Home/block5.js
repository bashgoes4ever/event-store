import React from 'react';
import {NavLink} from 'react-router-dom'

export const HomeBlock5 = props => {
    return (
        <section className="home__block5">
            <div className="container">
                {
                    !props.hideBg
                        ? (
                            <React.Fragment>
                                <img src="/img/home/block5/bg1.png" alt="" className="home__block5__bg1"/>
                                <img src="/img/home/block5/bg2.png" alt="" className="home__block5__bg2"/>
                                <img src="/img/home/block5/bg3.png" alt="" className="home__block5__bg3"/>
                                <img src="/img/home/block5/bg4.png" alt="" className="home__block5__bg4"/>
                                <img src="/img/home/block5/bg5.png" alt="" className="home__block5__bg5"/>
                                <img src="/img/home/block5/bg6.png" alt="" className="home__block5__bg6"/>
                            </React.Fragment>
                        )
                        : null
                }

                <div className="promo-banner">
                    <h2 className="section__title">Программа лояльности</h2>
                    <p>Чем больше ваш заказ, тем больше у вас скидка! <br/>Узнай как получить скидку от 5 до 10%.</p>
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

            </div>
        </section>
    )
}