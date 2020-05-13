import React from 'react';
import {NavLink} from 'react-router-dom'
import {SetCard} from "../../misc/SetCard";
import {useCurrentWitdh} from "../../hooks/windowResize";
import OwlCarousel from 'react-owl-carousel2';

export const HomeBlock4 = () => {
    let width = useCurrentWitdh()

    let items = 2
    if (width < 1064) items = 1
    let margin = 38
    if (width < 708) margin = 10

    const carouselOptions = {
        items: items,
        nav: false,
        margin: margin,
        autoWidth: true,
        loop: true
    }

    return (
        <section className="home__block4">
            <div className="container">
                <img src="/img/home/block4/bg1.png" alt="" className="home__block4__bg"/>
                <div className="title-wrapper">
                    <h2>Готовые сеты</h2>
                    <NavLink to="#" className="title-wrapper-link link">Все Готовые сеты</NavLink>
                </div>
                {
                    width > 1260
                        ? (
                            <div className="home__block4__flex">
                                <SetCard></SetCard>
                                <SetCard></SetCard>
                                <SetCard></SetCard>
                            </div>
                        )
                        : (
                            <OwlCarousel options={carouselOptions} className="owl-carousel home__block4__flex">
                                <SetCard></SetCard>
                                <SetCard></SetCard>
                                <SetCard></SetCard>
                            </OwlCarousel>
                        )
                }

                {

                    width < 708
                        ? (
                            <div className="link-wrapper">
                                <NavLink to="#" className="title-wrapper-link link">Все Готовые сеты</NavLink>
                            </div>
                        )
                        : null
                }

            </div>
        </section>
    )
}