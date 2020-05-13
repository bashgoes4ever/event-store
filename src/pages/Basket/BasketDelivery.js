import React from 'react';
import {YMaps, Map, Polygon, Placemark} from "react-yandex-maps";
import {zones} from '../../zones'
import {AddressInput} from "./AddressInput";
import {BasketContext} from "../../context/basket/basketContext";
import {Loader} from "../../misc/Loader";

export const BasketDelivery = props => {
    const {basket} = React.useContext(BasketContext)

    const map = React.useRef(null)

    const [loading, setLoad] = React.useState(true)

    const mapData = {
        center: [43.096618, 131.921289],
        zoom: 11,
    }

    return (
        <React.Fragment>

            <div className="basket__step3__item__title">
                Введите адрес доставки
            </div>

            <div className="address_form">
                <AddressInput
                    type="city"
                    label="Город"
                    id="city-input">
                </AddressInput>
                <AddressInput
                    type="street"
                    label="Улица"
                    id="street-input">
                </AddressInput>
                <AddressInput
                    type="house"
                    label="Дом"
                    id="house-input">
                </AddressInput>
                <AddressInput
                    type="flat"
                    label="Кв."
                    id="flat-input">
                </AddressInput>
            </div>

            {
                basket.customer_contacts.address.deliveryType == 1
                    ? (
                        <div className="address-alert">
                            <div className="circle circle-blue"></div>
                            <div className="line"></div>
                            <p>Введенный адрес находится в синей зоне. <br/>Стоимость
                                доставки {basket.customer_contacts.address.deliveryPrice} ₽</p>
                        </div>
                    )
                    : null
            }

            {
                basket.customer_contacts.address.deliveryType == 2
                    ? (
                        <div className="address-alert">
                            <div className="circle circle-red"></div>
                            <div className="line"></div>
                            <p>Введенный адрес находится в красной зоне. <br/>Стоимость
                                доставки {basket.customer_contacts.address.deliveryPrice} ₽</p>
                        </div>
                    )
                    : null
            }

            {
                basket.customer_contacts.address.deliveryType == 3
                    ? (
                        <div className="address-alert">
                            <div className="circle circle-orange"></div>
                            <div className="line"></div>
                            <p>Введенный адрес находится в оранжевой зоне. <br/>Стоимость
                                доставки {basket.customer_contacts.address.deliveryPrice} ₽</p>
                        </div>
                    )
                    : null
            }

            <div className="map__flex">
                <div className="map-wrapper">
                    <YMaps>
                        {
                            loading
                                ? (<Loader></Loader>)
                                : null
                        }
                        <Map defaultState={mapData} className="map" onLoad={() => setLoad(false)}>
                            {

                                basket.customer_contacts.address.coords.length
                                    ? (
                                        <Placemark geometry={basket.customer_contacts.address.coords}></Placemark>
                                    )
                                    : null
                            }
                            {
                                zones.map((zone, index) => {
                                    return (
                                        <Polygon
                                            instanceRef={map}
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

                <div className="map__prices">
                    <div className="title">Тарифы</div>
                    <div className="map__prices-wrapper">
                        <div className="map__prices__head map__prices__row">
                            <div className="col1">Зона</div>
                            <div className="col1">Стоимость</div>
                        </div>
                        <div className="map__prices__row">
                            <div className="col1">
                                <div className="circle circle-blue"></div>
                            </div>
                            <div className="col2">
                                500 ₽
                            </div>
                        </div>
                        <div className="map__prices__row">
                            <div className="col1">
                                <div className="circle circle-red"></div>
                            </div>
                            <div className="col2">
                                700 ₽
                            </div>
                        </div>
                        <div className="map__prices__row">
                            <div className="col1">
                                <div className="circle circle-orange"></div>
                            </div>
                            <div className="col2">
                                1000 ₽
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}