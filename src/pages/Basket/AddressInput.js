import React from 'react'
import {BasketContext} from "../../context/basket/basketContext";
import axios from 'axios'
import {zones} from "../../zones";

const inside = require('point-in-polygon');

export const AddressInput = props => {
    const {basket, setCustomerData, setValidation} = React.useContext(BasketContext)

    const [hasErrors, setErrors] = React.useState(false)
    const [touched, setTouched] = React.useState(false)

    const classes = [
        'basket-input',
        'input-wrap',
        touched ? hasErrors || !basket.customer_contacts.address[props.type].length ? 'error' : 'success' : null
    ]

    const validation = {
        isEmailAddress: function (str) {
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return pattern.test(str)
        },
        isNumber: function (str) {
            var pattern = /^\d+$/;
            return pattern.test(str)
        },
        isString: function (str) {
            const pattern = new RegExp("^[a-zA-Zа-яА-Я]*$",)
            return pattern.test(str)
        }
    };

    const inputHandler = value => {
        setTouched(true)
        switch (props.type) {
            case 'name':
                basket.customer_contacts.name = value
                setCustomerData(basket.customer_contacts)
                validation.isString(basket.customer_contacts.name) ? setErrors(false) : setErrors(true)
                break
            case 'house':
                basket.customer_contacts.address[props.type] = value
                setCustomerData(basket.customer_contacts)
                getCoords()
            default:
                basket.customer_contacts.address[props.type] = value
                setCustomerData(basket.customer_contacts)
                break
        }
    }

    const getCoords = async () => {
        try {
            const address = `${basket.customer_contacts.address.city} ${basket.customer_contacts.address.street} ${basket.customer_contacts.address.house}`
            const response = await axios.get(`https://geocode-maps.yandex.ru/1.x?apikey=1fb7da93-19a2-43b1-8fd2-70ec8221fd77&format=json&geocode=${address}`)
            let raw = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
            raw = [raw.split(' ')[1], raw.split(' ')[0]]
            basket.customer_contacts.address.coords = raw
            checkAddress()
        } catch (e) {
            console.log(e)
        }
    }

    const checkAddress = () => {
        let is_indide = false
        zones.forEach(zone => {
            if (inside(basket.customer_contacts.address.coords, zone.coordinates)) {
                basket.customer_contacts.address.deliveryPrice = zone.price
                basket.customer_contacts.address.deliveryType = zone.type
                is_indide = true
            }
        })
        if (!is_indide) {
            basket.customer_contacts.address.deliveryPrice = null
            basket.customer_contacts.address.deliveryType = 4
        }
        setCustomerData(basket.customer_contacts)
    }

    return (
        <div className={classes.join(' ')}>
            <input onChange={e => inputHandler(e.target.value)} value={basket.customer_contacts.address[props.type]}
                   type="text" id={props.id}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}