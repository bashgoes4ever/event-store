import React, {Component} from 'react'
import {MenuContext} from "../context/menu/menuContext";

class Layout extends Component {
    render() {
        const {show, hide, showState} = React.useContext(MenuContext)
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Layout