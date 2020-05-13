import React from 'react';
import Select, {components} from 'react-select'
import {NavLink} from 'react-router-dom'
import {useCurrentWitdh} from "../../hooks/windowResize";
import OwlCarousel from 'react-owl-carousel2';

export const HomeBlock1 = () => {
    let width = useCurrentWitdh()

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '26px',
            cursor: 'pointer',
            height: '52px',
            paddingLeft: '18px',
            color: '#050708'
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#050708'
        })
    }

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <span className="dropdown-indicator"></span>
            </components.DropdownIndicator>
        )
    }

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

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
        <section className="home__block1">
            <div className="container">
                <img src="/img/home/block1/1.png" alt="" className="home__block1__bg1"/>
                <img src="/img/home/block1/2.png" alt="" className="home__block1__bg2"/>
                <img src="/img/home/block1/3.png" alt="" className="home__block1__bg3"/>
                <img src="/img/home/block1/4.png" alt="" className="home__block1__bg4"/>
                <img src="/img/home/block1/5.png" alt="" className="home__block1__bg5"/>
                <img src="/img/home/block1/6.png" alt="" className="home__block1__bg6"/>
                <h1>Кейтеринг, банкеты и фуршеты</h1>
                <div className="description">Выездное обслуживание гостей {width < 708 ? (<br/>) : null}на любых локациях</div>

                <form className="home__block1__form">
                    <Select
                        className="select"
                        options={options}
                        styles={customSelectStyles}
                        placeholder="Повод мероприятия"
                        components={{DropdownIndicator}}
                    />
                    <Select
                        className="select"
                        options={options}
                        styles={customSelectStyles}
                        placeholder="Формат мероприятия"
                        components={{DropdownIndicator}}
                    />
                    <div className="input-block">
                        <div className="icon">
                            <img src="data:img/png;base64,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" alt=""/>
                        </div>
                        <input type="text" defaultValue="10"/>
                    </div>
                    <button>Подобрать меню</button>
                </form>

                {
                    width > 1260
                        ? (
                            <div className="home__block1__cards">
                                <NavLink to='#' className="block1__card card1">
                                    <span className="chip">Более 20 блюд</span>
                                    <div className="title">Закуски <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/1.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card2">
                                    <span className="chip">Более 35 блюд</span>
                                    <div className="title">Салаты <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/2.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card3">
                                    <span className="chip">Более 50 блюд</span>
                                    <div className="title">Горячие блюда <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/3.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card4">
                                    <span className="chip">Более 10 блюд</span>
                                    <div className="title">Гарниры <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/4.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card5">
                                    <span className="chip">Более 10 видов</span>
                                    <div className="title">Напитки <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/5.png"/>
                                </NavLink>
                            </div>
                        ) : (
                            <OwlCarousel options={carouselOptions} className="home__block1__cards owl-carousel">
                                <NavLink to='#' className="block1__card card1">
                                    <span className="chip">Более 20 блюд</span>
                                    <div className="title">Закуски <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/1.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card2">
                                    <span className="chip">Более 35 блюд</span>
                                    <div className="title">Салаты <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/2.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card3">
                                    <span className="chip">Более 50 блюд</span>
                                    <div className="title">Горячие блюда <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/3.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card4">
                                    <span className="chip">Более 10 блюд</span>
                                    <div className="title">Гарниры <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/4.png"/>
                                </NavLink>
                                <NavLink to='#' className="block1__card card5">
                                    <span className="chip">Более 10 видов</span>
                                    <div className="title">Напитки <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAbCAQAAACg7NXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBBcROgk43pVIAAAA4UlEQVRIx9XVsQrCMBQF0JtSXAo6SEFodXLUf5Cimw7+hpMf5OZfOAmC6KgVcajg0E13wQ7XwVoUq0P6MviWFwg5XEJ4ATSKNqdMuGFT5/Q3dMBHxfmspaU6afcwF0tLh1vyd1od1mVomj3Rl2MPGRvJsT6jv2U9E2xIF1AsY4RaQbeBYbbeIVCcoScU+VlzxQS2MAoLC2kSS8UqxqgXZDx0s/URHYFgBt7q2wwwQMYseo05pMQANEFWTJBrabLEVUae2RIgAfZfyPbnvt4XfU37BYEKRXICtDjhjfu8lABwB674FTL27ViSAAAAAElFTkSuQmCC"/></div>
                                    <img className='image' src="/img/home/block1/cards/5.png"/>
                                </NavLink>
                            </OwlCarousel>
                        )
                }

            </div>
        </section>
    )

}