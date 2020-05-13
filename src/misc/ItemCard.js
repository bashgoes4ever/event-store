import React from 'react';
import {NavLink} from 'react-router-dom'

class ItemCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: this.props.price,
            minWeight: this.props.minWeight,
            weight: this.props.minWeight,
            appendUnitsText: this.props.appendUnitsText,
            weightString: this.props.minWeight + this.props.appendUnitsText,
            unit: this.props.unit,
            currentPrice: (this.props.minWeight / this.props.unit) * this.props.price
        }
    }

    changeWeightHandler = unit => {
        const weight = this.state.weight + unit
        if (weight >= this.state.minWeight) {
            const weightString = weight >= 1000 ? (weight / 1000) + ' кг.' : weight + ' гр'
            const currentPrice = (weight / this.state.unit) * this.state.price
            this.setState({
                weight,
                weightString,
                currentPrice
            })
        }
    }

    render() {
        return (
            <div className="item-card">
                <NavLink to="/menu/detail" className="item-card__img">
                    <img src="/img/home/block6/1.png" alt=""/>
                </NavLink>
                <div className="item-card__body">
                    <div className="title">Салат с гребешком и спаржей</div>
                    <div className="description">Цена за 100 гр. - {this.state.price} ₽<br/>Мин.
                        заказ {this.state.minWeight} гр.
                    </div>
                </div>
                <div className="item-card__footer">
                    <div className="price">{this.state.currentPrice} ₽</div>
                    <div className="item-card__footer__flex">
                        <div className="item-card__input">
                            <input readOnly={true} type="text" value={this.state.weightString}/>
                            <button className="sub-btn"
                                    onClick={this.changeWeightHandler.bind(this, -this.state.unit)}></button>
                            <button className="add-btn"
                                    onClick={this.changeWeightHandler.bind(this, this.state.unit)}></button>
                        </div>
                        <button className="add-to-basket">
                            <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA5CAMAAACiTZ0RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABklBMVEUdHBz///8dHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAABYoizIAAAAhHRSTlMAAA+s++51A7xYj6helV82+PYrGeVaB8eJnbVt2BBB/PAoIO39SgvSd9EBq6Z8zQkKTv7pHSny+jwtMDXakibF4VCAitb0oh57R1FwEmRnFRRlmSXoLOoFwqSy68/d0K4T4IQ+XDK4t449wcvZzpiXlJGMDr3AERfJDEYjIsx5sHonBKmj1Zy2AAAAAWJLR0SFFddq5wAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+QEFxEyHJ3a+6sAAAMnSURBVFjDrZd3WxpBEMZXQVCMEXsvWIgBJXbsCnbFgr33rjHFxCQak2jug+d2Zg8ObuF2nzB/vTvzzo/zbm/2JIQT6RZrho1ww5ZhtaTrE2kseGZ7pqJGFq+URSuZdkGQg7qVbF4pG0oOMdArMCs5PFAO1l6LgHKd4M3L54Hy86DozDUHFRTijxbxb3YRVgsLzEDFJegsJQmiFOslxSagMvSV2xOB7OXoKEsOqkBXZRVJGFWV6KlIBqquAU+tiyQJVy2YaqoTg+rqwdLQSJJGYwPY6usSgdxv8KKbiEk0oe+tmw/yeLHe7DEDeZrR6fVwQS1Y9b0z4xDS6kNvCw/U1g61jk5zDiGdHWBubzOCurqh5O8R4RDS4wd7d1cUZO/tU6N/AC92sE8wBtE/0E8XvfY0MsQI/xcDQ2Q4FRxFGSap4SgKGUkNZ4QE/Kng+APqc7cFg6OwGgtKxhi0jQaDti62jzzjNOMT20LRgP097tFvSJaS47Cfj9nZE3CRk3KgSWiaiAFNQW5aDjQNTVMxoBnIzUY8obn5BU0vhsOLml6YnwtFTLPQNBMDckFuSbMsr6gDcJWV1hRljc3eVXWErixrriVocsWA1q00t6FZNulqC7WFagvqLao3NdcGXVnXY8cIbIltbbVDV7uo96jeQ71L9Y7m2obNFzeP9uEyD4iu+dAIOtRpcgAt+3GgI8gey4COoeUoDnQC2bAMKAwtJ3GgU8g6ZED4GXUaB2qF7JkM6Axa3PHD/1DXKwbCDsMpco58cZAbGs4NoAv8i8VBeFcvDCD2DMRB7DkbQJe4K8RBuPMuDaAQ7lNxEL4LIePZj2+OOIi9nUbQFb7LoK+pvsE8vMDvUd9QfQ0S58UVB3SL0yX6CD9g/iPVn1DDp+pnkDjBbjkgNu9A331RlK/3mL9XLzXzDvW37+ru/wFSm6lG0ANOYLZ6fIxW9HroJxM45R84IHYmEMHQzh3Op5/cIYknIfcb8knmkMTD8YkLkjokIzeCA/oFtY3fQgEniPKHCwoo0hHggp7lQc9c0ItTluN84f8v4pUF/SV80MJ+jQwmz5uuA/0DFzwfMs4MRMoAAAAASUVORK5CYII=" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard