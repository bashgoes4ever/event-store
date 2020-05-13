import React from 'react';
import {NavLink} from 'react-router-dom'
import ItemCard from "../../misc/ItemCard";
import {useCurrentWitdh} from "../../hooks/windowResize";
import OwlCarousel from 'react-owl-carousel2';

export const HomeBlock6 = () => {
    let width = useCurrentWitdh()

    let items = 3
    if (width < 1064) items = 2
    if (width < 708) items = 1
    let margin = 38
    if (width < 708) margin = 10

    const carouselOptions = {
        items: items,
        nav: false,
        margin: margin,
        loop: true
    }

    const cards = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
    ]

    return (
        <section className="home__block6">
            <div className="container">
                <div className="title-wrapper">
                    <h2>Популярные блюда</h2>
                    <NavLink to="/menu" className="title-wrapper-link link">посмотреть меню</NavLink>
                </div>

                {
                    width > 1260
                        ? (
                            <div className="home__block6__flex">
                                {cards.map(item => (
                                    <ItemCard
                                        key={item.id}
                                        price={100}
                                        minWeight={200}
                                        unit={100}
                                        appendUnitsText={' гр.'}
                                    ></ItemCard>
                                ))}
                            </div>
                        )
                        : (
                            <OwlCarousel options={carouselOptions} className="owl-carousel home__block6__flex">
                                {cards.map(item => (
                                    <ItemCard
                                        key={item.id}
                                        price={100}
                                        minWeight={200}
                                        unit={100}
                                        appendUnitsText={' гр.'}
                                    ></ItemCard>
                                ))}
                            </OwlCarousel>
                        )
                }

                {

                    width < 708
                        ? (
                            <div className="link-wrapper">
                                <NavLink to="#" className="title-wrapper-link link">посмотреть меню</NavLink>
                            </div>
                        )
                        : null
                }

            </div>
        </section>
    )
}