import React from 'react'
import {BasketContext} from "../../context/basket/basketContext";

export const BasketInput = props => {
    const {basket, setCustomerData, setValidation} = React.useContext(BasketContext)

    const [hasErrors, setErrors] = React.useState(false)
    const [touched, setTouched] = React.useState(false)

    const classes = [
        'basket-input',
        'input-wrap',
        touched ? hasErrors || !basket.customer_contacts[props.type].length ? 'error' : 'success' : null
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

    const validationHandler = () => {
        if (validation.isString(basket.customer_contacts.name)
            && validation.isNumber(basket.customer_contacts.phone)
            && validation.isEmailAddress(basket.customer_contacts.email)
            && basket.customer_contacts.name
            && basket.customer_contacts.phone
            && basket.customer_contacts.email) {
            basket.customer_contacts.valid = true
            setValidation(basket.customer_contacts)
        } else {
            basket.customer_contacts.valid = false
            setValidation(basket.customer_contacts)
        }
    }

    const inputHandler = value => {
        setTouched(true)
        switch (props.type) {
            case 'name':
                basket.customer_contacts.name = value
                setCustomerData(basket.customer_contacts)
                validation.isString(basket.customer_contacts.name) ? setErrors(false) : setErrors(true)
                break
            case 'phone':
                basket.customer_contacts.phone = value
                setCustomerData(basket.customer_contacts)
                validation.isNumber(basket.customer_contacts.phone) ? setErrors(false) : setErrors(true)
                break
            case 'email':
                basket.customer_contacts.email = value
                setCustomerData(basket.customer_contacts)
                validation.isEmailAddress(basket.customer_contacts.email) ? setErrors(false) : setErrors(true)
                break
            default:
                break
        }
        validationHandler()
    }

    return (
        <div className={classes.join(' ')}>
            <input onChange={e => inputHandler(e.target.value)} value={basket.customer_contacts[props.type]}
                   type="text" id={props.id}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}