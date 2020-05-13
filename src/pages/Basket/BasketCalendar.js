import React from 'react'
import Calendar from 'react-calendar'
import {BasketContext} from "../../context/basket/basketContext";

export const BasketCalendar = () => {
    const {basket, setDate} = React.useContext(BasketContext)

    const monthNames = ['Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    const setDateHandler = value => {
        const customer_data = basket.customer_contacts
        customer_data.date = value.toLocaleDateString()
        setDate(customer_data)
    }

    return (
        <div className="basket__calendar">
            <div className="basket__step3__item__title">
                Выберите дату заказа
            </div>
            <Calendar
                navigationLabel={({date, label, locale, view}) => {
                    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
                }}
                onClickDay={value => setDateHandler(value)}
                minDate={new Date()}
                showNeighboringMonth={false}
                nextLabel={<img
                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>}
                prevLabel={<img
                    src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>}
            ></Calendar>
            {
                basket.customer_contacts.date
                    ? (
                        <div className="basket__step3__calendar__date">
                            <div className="key">Ваша дата:</div>
                            <div className="value">{basket.customer_contacts.date}</div>
                        </div>
                    ) : null
            }

        </div>
    )
}