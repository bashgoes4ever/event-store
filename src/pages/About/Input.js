import React from 'react'

export const Input = props => {
    const [hasErrors, setErrors] = React.useState(false)
    const [touched, setTouched] = React.useState(false)

    const classes = [
        'basket-input',
        'input-wrap',
        touched ? hasErrors ? 'error' : 'success' : null
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
    }

    return (
        <div className={classes.join(' ')}>
            <input onChange={e => inputHandler(e.target.value)}
                   type="text" id={props.id}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}