import React from 'react'
import {MenuContext} from "../context/menu/menuContext";
import {NavLink} from 'react-router-dom'
import {useCurrentWitdh} from "../hooks/windowResize";
import OwlCarousel from 'react-owl-carousel2';

export const NoMatch = () => {
    let width = useCurrentWitdh()

    document.title = '404'

    const {setHeaderClasses} = React.useContext(MenuContext)

    React.useEffect(() => {
        setHeaderClasses('')
        //eslint-disable-next-line
    }, [])

    let items = 3
    if (width < 1064) items = 2
    let margin = 38
    if (width < 708) margin = 10

    const carouselOptions = {
        items: items,
        nav: false,
        margin: margin,
        loop: true
    }

    return (
        <section className="page-not-found">
            <div className="container">
                <div className="page-not-found__block">
                    <img src="img/home/block1/7.png" alt="" className="bg"/>
                    <h1>404</h1>
                    <h2>Страница, которую вы <br/>ищите устарела или не существует</h2>
                    <NavLink to="/">на главную</NavLink>
                </div>
                <div className="title2">Зато у нас есть другие</div>
                {
                    width > 1260
                        ? (
                            <div className="home__block1__cards">
                                <NavLink to='#' className="block1__card card1">
                                    <span className="chip">Более 20 блюд</span>
                                    <div className="title">Закуски <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/1.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card2">
                                    <span className="chip">Более 35 блюд</span>
                                    <div className="title">Салаты <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/2.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card3">
                                    <span className="chip">Более 50 блюд</span>
                                    <div className="title">Горячие блюда <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/3.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card4">
                                    <span className="chip">Более 10 блюд</span>
                                    <div className="title">Гарниры <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/4.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card5">
                                    <span className="chip">Более 10 видов</span>
                                    <div className="title">Напитки <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/5.png"/>
                                </NavLink>
                            </div>
                        ) : (
                            <OwlCarousel options={carouselOptions} className="home__block1__cards owl-carousel">
                                <NavLink to='#' className="block1__card card1">
                                    <span className="chip">Более 20 блюд</span>
                                    <div className="title">Закуски <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/1.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card2">
                                    <span className="chip">Более 35 блюд</span>
                                    <div className="title">Салаты <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/2.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card3">
                                    <span className="chip">Более 50 блюд</span>
                                    <div className="title">Горячие блюда <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/3.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card4">
                                    <span className="chip">Более 10 блюд</span>
                                    <div className="title">Гарниры <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/4.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card5">
                                    <span className="chip">Более 10 видов</span>
                                    <div className="title">Напитки <img
                                        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/>
                                    </div>
                                    <img className='image' src="/img/home/block1/cards/5.png"/>
                                </NavLink>
                            </OwlCarousel>
                        )
                }
            </div>
        </section>
    )
}