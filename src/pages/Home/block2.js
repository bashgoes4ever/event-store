import React from 'react';
import {NavLink} from 'react-router-dom'
import {useCurrentWitdh} from "../../hooks/windowResize";
import OwlCarousel from 'react-owl-carousel2';

export const HomeBlock2 = () => {
    let width = useCurrentWitdh()

    let items = 2
    if (width < 1064) items = 1
    let margin = 38
    if (width < 708) margin = 14

    const carouselOptions = {
        items: items,
        nav: false,
        margin: margin,
        autoWidth: true,
        loop: true
    }

    return (
        <section className="home__block2">
            <div className="container">
                <img src="/img/home/block2/bg1.png" alt="" className="home__block2__bg"/>
                <div className="title-wrapper">
                    <h2>Оборудование</h2>
                    <NavLink to="#" className="title-wrapper-link link">Всё оборудование</NavLink>
                </div>
                {
                    width > 1260
                        ? (
                            <div className="home__block2__flex">
                                <NavLink to="#" className="equipment__item equipment__item-big">
                                    <div className="title">Барное стекло <img src="/img/icons/arrow-right.png"/></div>
                                    <div className="text">Мы подобрали более 500 видов <br/>различой посуды и оборудования
                                        для <br/>вашего
                                        события.
                                    </div>
                                    <div className="chip">
                                        <div className="icon"><img src="data:img/png;base64,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" alt=""/></div>
                                        <div className="chip-title">Идеально <br/>для вашего события</div>
                                    </div>
                                    <img src="/img/home/block2/1.png" alt="" className="image"/>
                                </NavLink>
                                <NavLink to="#" className="equipment__item">
                                    <div className="title">Посуда <img src="/img/icons/arrow-right.png"/></div>
                                    <img src="/img/home/block2/2.png" alt="" className="image"/>
                                </NavLink>
                                <NavLink to="#" className="equipment__item">
                                    <div className="title">Мебель <img src="/img/icons/arrow-right.png"/></div>
                                    <img src="/img/home/block2/3.png" alt="" className="image"/>
                                </NavLink>
                            </div>
                        )
                        : (
                            <OwlCarousel options={carouselOptions} className="owl-carousel home__block2__flex">
                                <NavLink to="#" className="equipment__item equipment__item-big">
                                    <div className="title">Барное стекло <img src="/img/icons/arrow-right.png"/></div>
                                    <div className="text">Мы подобрали более 500 видов <br/>различой посуды и оборудования
                                        для <br/>вашего
                                        события.
                                    </div>
                                    <div className="chip">
                                        <div className="icon"><img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABRCAQAAAANmPL6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcSLTEXGRcZAAAHeUlEQVRo3u1aaYwURRT+ZmZZcFkXXSIiogiCB0JAEQ/ARFDEA/BASQRFROO1EQ0eeEREUSEbFQUVNIhGgndQkeABLqiARzxQhARcUWHDtYosWVbY6/MHr99UXzM90z0OP3j9Y6q+9+q9r7urq17VFIjIr5Z8j/X8gkdE7zt6suCN3C/TovcdR/TSUX7bR+86F3RzKAfpHqR7kO5BujZJIAHEcTE2YxuuzzebNDIeu7ELY8BtMgfdEdncM1k8vhq5x7/jKBb+z+C+fD9CH5mGh6UUj2OqwlMxJd/MXBLD85go5WaUgeD9TMo0xg6gzpDgbGVWzxFWRna3QXhWaMJR0U1wvkF2OJFMIG81CM9hIlSYB9VPGC+FfEcZ1XHQfjSpHssmVc8PRbg3G0mSl4ciu1DZ1HCghZsmow3CC1gYIlhfTuLgEO2L+JlB9sykxm42nPVqtpCtQva9bK8SViiLap5q6pymQ1mnphUsygPZIn6jDHawp13rNh9kEL4rD3STH30Vuzq17hSnAoOxW8pH52FiKJLfjTgXla5Zg15NzsRilKIG52CNDT82Bxncv9huq7fDKhyPtbgQVR7WPq/kcJ7NwxzYdOZGPuUhtjgJHu03VQXvU31zRJYkJwVl4d0ZvKQCAyPvCJbsQVdsC2IYtC9ekkOyQGtNEdNIsKcbx2r01Foj+mKXj+UAzLPVb8anvl4X4RQtN+EUrA/AJFCfGevoa2U+di34i8Oy0ndu7OmwXBCESRCyh3CTw/VqH8uJxtduyRQf25muD65/NHTvMUJb0sfDrpPOh5+zgN9LeR9P9nwEu0Q/n7VSWhkF3VJ1vIhxbpTybA/LD0XXwO4E+2h+t8xjFL1Wb/xkPqrlK8LTfVJcNbMHwYektputHXaXa9CpgjyjyHUur1+K5kuCxdwutfUsCEe3E/eKq7kEwQ76zMba7Iq5WfA/NI8rYZVg1Sy1WXfXG7mWIFim9VvD0X1N3PzLYxyv3N7TntSAwwz0CkXtC6GnBP1Hxo0CbhBkG4uzp9uLzeKmXLFhSqG7Ydco2Ps+/ZkcoFhL/iXYTMVGqN3k7Ol+LC52GulOAbcI+pQgcX4lyB4e6+pMe0S3li0EG6XUzOR7pWC1PCo7uuep27tt+GOC/iXruZvU7l4PL8lNgfsEWSb1VTa7/mr3YjZ0YzpybnLMTF20i4wk2I7/SO0XfX7mVcCfRF/H4wh2VVrjHJYLBG/kSZnTvVrdjnHplopmCcF5Hr3Tfp2lt7eYYLmU3UPhib5fQFq6hToh/My4SztSdM0cp2TnpuhWL6jVKO6Q0gsedrPS3XqBT+ZzCzpL6TuMcWlbohlxADHMUWwdxvrmUetBxAAAr6BQsFoP+z+1VI7+8EgWvRPIVqhC2wDpXC7lUix0g97p+Ul5JwsM9gK96W5Cbb7ZOtbgIn6riZF4U3obsAXVHhZF6Cal33VfIrUcii5S2oodHvo2OE7Ly3EBGjxsfL/m8fqVVrGjh75IE8ugez03q8ezPLSH6jhPrmabTMdd8AltvtaRUe2/nhPtuoB0vxP7NZ4DZ3L9sdF/Gk7lPsa56mKlx/Zeb9WeE4BsL7W+wyNScp+8mt38vaQOkeAidfOhxxa19bxeDUDXWpvt9XhTT2uUWvZN5SVdkCKuMuYt5yLGSm7qXBtUzquVZhavu3QTNEI9h6T2k/6ptOU6dfe4Q1ei6eFtabyMVh8DfTXkNenYpKcLHqOLGHK8Q/eyfsupfSwTu0rHG7rA2K+fkJ5LELpgD32VzRxp0/TTYH1StE8mjRNt+Om6aE8m+xHQBQfoHkI9z7dp1gj+UorW1pDYwPa2m6hWsvOC/ZsXlC54ma6Ba3iagd8pqDt/ta4CbhUbc2PpSP6mZD8O+j9TcLrJ82HkduNfg1LuE/QGn3bDtd3FipXwB0W/9b3RUHTBSRqiku0UfV2wr31aWavhzZroF3KJetqQyWm+zOia64IfWCLYIMV6erTooEuayYLE+Ia22MLOmcTPlG6C72qopdLjYqwUZIZHiwd0TOkkyHT1UMNemcXPlC7Ykp9ruLfk9VpHDHa6dnOTt/KRIMmF/D6em2n0zOmCbXQpTj5LEGzPBp95KdlRRhA0dx6beGXmsbOhC3bgHxr2AYLg+1Jb7rC0Mq3tbEFwiDGHlWUTOTu64AnGED+O4CVaO8GwKtX9y3La57BHs4ubLV3wDJ3nmjiUCd0wLTdsbjduwpzD5mR7IiV7uuCF+mrr2I+PSHmHsfVk9fHltjnsg+wPd4ShC45RCjt5kW4tjRBt8n/OMmMOWxHm2EE4uuawVKV/Un0iuhelvke39sm1PDxMvLB0zYWLJfsnhNbc7dJs9lxT/690zWWhJVMIXu9Cdxr77XmjCxbyE9dTTHCFA6tjv/CxoqALFuua2JJ7HfUmDo0iUjR0wSP4q41eo4PuuGjiREUX7KJHa93yYFRRoqML9maNJ9kZ0cWIki44yEhhLHk75InKHNIFrzIOJpJkRajDiTmna260kj/6bXweOHSTfxNutO0qHLB0Y5zOBm5wHwkMf/0H3TIjrQZC3tMAAAAASUVORK5CYII=" alt=""/></div>
                                        <div className="chip-title">Идеально <br/>для вашего события</div>
                                    </div>
                                    <img src="/img/home/block2/1.png" alt="" className="image"/>
                                </NavLink>
                                <NavLink to="#" className="equipment__item">
                                    <div className="title">Посуда <img src="/img/icons/arrow-right.png"/></div>
                                    <img src="/img/home/block2/2.png" alt="" className="image image2"/>
                                </NavLink>
                                <NavLink to="#" className="equipment__item">
                                    <div className="title">Мебель <img src="/img/icons/arrow-right.png"/></div>
                                    <img src="/img/home/block2/3.png" alt="" className="image"/>
                                </NavLink>
                            </OwlCarousel>
                        )
                }

                {

                    width < 708
                        ? (
                            <div className="link-wrapper">
                                <NavLink to="#" className="title-wrapper-link link">Всё оборудование</NavLink>
                            </div>
                        )
                        : null
                }

            </div>
        </section>
    )
}