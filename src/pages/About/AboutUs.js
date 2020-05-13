import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import ModalVideo from 'react-modal-video'
import {NavLink} from 'react-router-dom'
import {useCurrentWitdh} from "../../hooks/windowResize";

export const AboutUs = () => {
    let width = useCurrentWitdh()

    const [isOpen, setModal] = React.useState(false)
    const [video, setVideo] = React.useState(null)

    const block1Options = {
        items: 1,
        nav: true,
        navText: ['<img src="/img/icons/arrow-right.png"/>', '<img src="/img/icons/arrow-right.png"/>']
    }

    const block4Options1 = {
        items: 2,
        margin: 20
    }

    const block4Options2 = {
        items: 1,
        nav: true,
        navText: ['<img src="/img/icons/arrow-right.png"/>', '<img src="/img/icons/arrow-right.png"/>']
    }

    let items = 2
    if (width < 1064) items = 1

    const reviewsOptions = {
        items: items,
        autoWidth: true,
        margin: 25,
        loop: true,
        nav: true,
        navText: ['<img src="/img/icons/arrow-right.png"/>', '<img src="/img/icons/arrow-right.png"/>']
    }

    const block4CarouselMin = React.useRef(null)

    const block4Carousel2Events = {
        onChanged: (e) => {
            if (e.item.count - 1 > e.item.index) {
                block4CarouselMin.current.goTo(e.item.index)
            }
        }
    }

    return (
        <div className="about__content-page">
            <div className="about-us__wrapper">
                <div className="block1">
                    {
                        width > 708
                            ? (<h1>Event Store Catering — лучший сервис <br/>по выездному обслуживанию во Владивостоке
                            </h1>)
                            : (<h1>Event Store Catering — <br/>лучший сервис по выездному обслуживанию во Владивостоке
                            </h1>)
                    }

                    <div className="text">Event Store Catering – это выездное обслуживание гостей на любых локациях: в
                        офисе, собственном доме или обслуживание <br/>свадьбы в чистом поле! Выездной ресторан
                        индивидуального
                        обслуживания пользуется популярностью как среди молодёжи, <br/>которые делают свои первые
                        мероприятия,
                        так и среди тех, кто предпочитает бизнес мероприятия.
                    </div>
                    <OwlCarousel options={block1Options} className="about-us__carousel owl-carousel">
                        <div className="img">
                            <img src="img/about/slide.png" alt=""/>
                        </div>
                        <div className="img">
                            <img src="img/about/slide.png" alt=""/>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="block2">
                    <img src="img/about/2.png" alt="" className="bg"/>
                    <div className="block2__item">
                        <div className="title">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="117"
                                     height="117" viewBox="0 0 39 39">
                                    <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="39"
                                           height="39"
                                           href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC5VBMVEUAAAAdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAACKaJprAAAA9XRSTlMAQqrs+dB3DAut/eo8D8z++LxmdeOIEQrH1sEV15KXASJyjVkJBI7860dToPHz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"/>
                                </svg>
                            </div>
                            <span>Собственное производство</span>
                        </div>
                        <div className="text">У нас работает профессиональная команда, весь наш персонал проходит
                            строгий
                            отбор и длительное обучение.
                        </div>
                    </div>
                    <div className="block2__item">
                        <div className="title">
                            <div className="icon-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                    width="41px" height="38px">
                                    <image x="0px" y="0px" width="41px" height="38px"
                                           href="data:img/png;base64,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"/>
                                </svg>
                            </div>
                            <span>Доступные цены</span>
                        </div>
                        <div className="text">Так как у нас собственное производство,
                            у нас есть возможность предоставлять доступные цены.
                        </div>
                    </div>
                    <div className="block2__item">
                        <div className="title">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="117"
                                     height="117" viewBox="0 0 39 39">
                                    <image id="Векторный_смарт-объект2" data-name="Векторный смарт-объект2" width="39"
                                           height="39"
                                           href="data:img/png;base64,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"/>
                                </svg>
                            </div>
                            <span>Оперативная консультация</span>
                        </div>
                        <div className="text">Мы ценим наших клиентов, поэтому всегда готовы быстро проконсультировать
                            вас
                            по всем интересующим вопросам.
                        </div>
                    </div>
                    <div className="block2__item">
                        <div className="title">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="114"
                                     height="117" viewBox="0 0 38 39">

                                    <image id="Векторный_смарт-объект3" data-name="Векторный смарт-объект3" width="38"
                                           height="39"
                                           href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAB1CAMAAAClBkX3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACW1BMVEUAAAAdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwdHBwAAAB8SOZiAAAAx3RSTlMAEKvc5OPUZwyT0+HZsSER2vSVOeDqcu4tJubxZJ7I4g7lwcn6wO3723Uw98RuBIn8votoF8db6MrS8Oe4bAv+X3DpIvOyzo3y1hR0WQcn/QinV9AGD1hqSbooXvXfLoGtBV3DOBt4iiysJaPsHx1LWiDvfZAWtUrYA7a7ftVluS98qd1TCU+Onz2hVBP5jM2aAb0e0Yc8puveYfbLP/hvwryzUbQZv0Z3cQrXbX+WTsY6z2s7HCoyYnbMomaYGLc2r52UUnubCet0cQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQQOHjdg4VzJAAAEoUlEQVRo3u3b/1+TRRwA8NvcEAcR4GgylLEBPhNwTgVGiGAI5PgSmFtFieF3TAjFNBcKFSl+L8oSksxK81tftOybmn1T79/y7tnzZc+227zXPXsKez4/7Ha3ez7vh93dM7bdADAYZ5lUDHPabKCI9DmWDHPmE1lyy5PZUOXIyY0U51rDrXlPSU1GtUUIbfNkMd8uthbMF9tmqU/CBTJZKLc6ioQ2E6o4XapFcQnKVyqJWQtRlXOnFWBzUQRZCFSLsnKUr0KqLsZUoQcs8aJyqSbkMkwuB6AyD5VV2pHVABh8qKzRjnza5aqoReWKupX1GpFyNFhXaU1CWPuM5iRsXK0F6USXXtzcxOFas5YztuXZNeg2U9tF4ke3Zm1JfMU1yWTr7DZStHekhHzOSX5l6LR0pYJM+LrZ2Z4Kcm0i0vt8KsgscwNR5NYFUjJ9gi+8SIqXPCmZPiqFTuqkTurkDCAXFzJG98uU5CvrIWv0dNCRdcwiLNiQjCxWkK82MGDhsBuSkb3oNlsiNzZbGT+XyN6UdCyDmzP8Wx7TN3v/JXLrtmVMsb3dQ0n2rWCdsF4XJbmDfV3aXqMjd7KT/QN05Os9HKO4xkg7feoHq5liV9lMWCT/Btm6my26aMn04sZaphgy76Ek32BfJL69dOQ+drKgj458s5aZ3B+inD6Db3UzxfCC1pmwSP4X5IEWP1Mc3LyBkhwpZ56x1qT/OivJURXW5dt05DteZtIZpCND77rH2ML/3gyYsTqpkzqpkzqpkzqpkzqpk48peejweO6uQxqSwSNWDkLv2FHNyEGr+G6nUiNyZb/0DuuYNuTxhWGuM0l39cgTZnzsyYOnbKh4XxPyA3zo0PYJvvxQBTIzcqdN9UdxMp1Gvco/Bp/gHXze5ZTkmba2PZNRpDL6R9NjMo1B/GXVbv7pnQpQkmKQSXknohxu1Gqdl4EfbPoUpIA8OxidaRpP1kl+yjYDCnI8Mu2w0Fgah4Q7ozMtkj4vaQnQkJ+di8j6udDYcR4vNZjzhTB7xvExX0Zn8viFwyxBXP2qxu2/kPUIZMCBJ8eBNr4YkForeDNPGKKys/HIrS1h8ZwxBMDFr5vwffuly9Onp69MJCL5EfEevoqH75rcKpi2b8jkiDTiXM2Jb8Xty0P4uJLSQCLyO9xx7fd4b/AoIJhxyIHrkV+N+0qU495ZvNdQTyRv4HQ/nMEdfwQEM5a8Inzn12MckiFbBOo0mdw3CaQHLyz7fjyUPwGCGUNW+vi8OXVFYJVPQNZf/7mKw3+h9IF8JoEMD+akcij52DjKCWYMuYV/VjP4Xee/9PD5rb8CEPrtluXW5UviSThI5BzxpOqip2SoWzBjyK4p1NwbDFcMxjFn9u0i+dGb4ZOALhJ5Q5wHdwDJ/D1mLPP3Dc8FxDAscblc54+kk0iP+IOAu4BocvHW5SNHDAmqwuS1eL0FE6pMCpfZP+J2l001yT/5wWyYH79/6C/hKmxX6zcIOCn/ktd4l3COE70noQrxtyIp/2OLNOLzoopp61PkPJVkqFQwc/5RpsxH18nyewnGfyLXwbQHx2EZiU55f2rqQUT1IV41/NoDRgWMAAAAAElFTkSuQmCC"/>
                                </svg>
                            </div>
                            <span>Заключение договора</span>
                        </div>
                        <div className="text">Чтобы вы были спокойны за то, что вас не обманут, вы имеете возможность
                            заключить с нами договор.
                        </div>
                    </div>
                </div>

                <div className="block3">
                    <img src="img/about/3.png" alt="" className="block3__bg1"/>
                    <img src="img/about/4.png" alt="" className="block3__bg2"/>
                    <img src="img/about/5.png" alt="" className="block3__bg3"/>
                    <h2>Как мы работаем</h2>
                    <div className="block3__block">
                        <img src="img/about/line.png" alt="" className="line"/>

                        <div className="block3__item block3__item-left">
                            <div className="title">
                                <span className="num num1">1</span>
                                <span className="text">Оставляете заявку <br/>+7 (423) 2-800-100</span>
                            </div>
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="66"
                                     height="66" viewBox="0 0 22 22">

                                    <image id="Векторный_смарт-объект4" data-name="Векторный смарт-объект4" width="22"
                                           height="22"
                                           href="data:img/png;base64,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"/>
                                </svg>
                            </div>
                        </div>

                        <div className="block3__item block3__item-right">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="60"
                                     height="57" viewBox="0 0 20 19">

                                    <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="20"
                                           height="19"
                                           href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA5CAQAAADAOIBKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQQPBhKoPHrgAAAC8klEQVRYw+2YS0hWQRTH/6OflqapQYSaRBj0UnARadmihUlC0YOgAlu0qIXQJqiVVFBBywoCiSwqKFoELSqKqIVkUdkDLAjM6C0mvbRMLf21+D6v95rea91HIP13587h/GbmHmbOHEnkUMcnBmhipSQxjRN00s99qhSeyOAxQ9rGTN5YVj+bwgMfwKk2h9VFdljgN7irOhxuTPkeHoW2SWaoWBN8M3v00PTG1KnJrm4dFrZC5z18x6o2qsQ5140eYFYCm8RbgtNdUcR3F4ej1noLAsQCklhH/yijDaRb4Al0B8h9HQ+6dcTBR2TZfww7AgRXm0TQWu0dlgCtKjftzk8s1WKl+k6tXl0zTUNBDzpm1Eahj9B/IgynLewXiiPCShKpXAKgmyURYiWJdBr5wYqIsZJEFov+Afa/xrPIpxjbmUQB8/F/83pAZ3MbgE52YiRKuJc4RraHic2j3XZUHqGMrzZ7V3jg+mH3Rq/D+olXafTX4A8eF9iWcLgxTfHwsK2YuVoo45vZrwbzMqYOTXV1e2VhN6s+AKwk9bFK1LludB/TEtgUPgVYgbSIPN67ONRa6w2h2Cvl2yijp7C2lmQ6AuQ+iQetpG+EwYuk2H8Mq+kJCNvF0sFib73OKMmRAI2qNN3OnCBXC5TsO7V+6o6x3ieixjGnZmdpG6rYbWFbyY0MK0kcBqB98L0UHdhwli+URIyVJJIj3uT/GscyksRElStDzeZ5/CNpKle2HgzaIYkKq7d1kjSJtdZ1cAz/r+FRsc4eyBWqHY2J4+GBL3jcJHPC4SapwsNjWTjgmCZ5eNiKQdaoXDHfzD5dNdfFC4+t3mBh9wVUBgDUiP2uDp/JTGDThpX6/tQuMnnq4mD1bskPEEu82JsxauvY9nLC0BIg92Y8aBEfRxg85MwJSnkXELaFeYPFXpluKM3BOaNqwzB0imd3eyxCr83AkLXcUeJeDvGw/G0iGxlIYG8NdW2jQW8DoJmcSLGSxB6eMT0K0i+4eWvt3b/fkwAAAABJRU5ErkJggg=="/>
                                </svg>
                            </div>
                            <div className="title">
                                <span className="num">2</span>
                                <span className="text">Формируем <br/>ваши пожелания</span>
                            </div>
                        </div>

                        <div className="block3__item block3__item-left">
                            <div className="title">
                                <span className="num">3</span>
                                <span className="text">Производим <br/>расчет стоимости</span>
                            </div>
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="66"
                                     height="69" viewBox="0 0 22 23">

                                    <image id="Векторный_смарт-объект6" data-name="Векторный смарт-объект6" width="22"
                                           height="23"
                                           href="data:img/png;base64,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"/>
                                </svg>
                            </div>
                        </div>

                        <div className="block3__item block3__item-right">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="81"
                                     height="57" viewBox="0 0 27 19">

                                    <image id="Векторный_смарт-объект5" data-name="Векторный смарт-объект5" width="27"
                                           height="19"
                                           href="data:img/png;base64,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"/>
                                </svg>
                            </div>
                            <div className="title">
                                <span className="num">4</span>
                                <span className="text">Обсуждаем <br/>детали мероприятия</span>
                            </div>
                        </div>

                        <div className="block3__item block3__item-left">
                            <div className="title">
                                <span className="num">5</span>
                                <span className="text">Заключаем <br/>с вами договор</span>
                            </div>
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="90"
                                     height="60" viewBox="0 0 30 20">

                                    <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="30"
                                           height="20"
                                           href="data:img/png;base64,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"/>
                                </svg>
                            </div>
                        </div>

                        <div className="block3__item block3__item-right">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="63"
                                     height="60" viewBox="0 0 21 20">

                                    <image id="Векторный_смарт-объект61" data-name="Векторный смарт-объект61" width="21"
                                           height="20"
                                           href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAQAAAB7wqr6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQQPBzf6I5/mAAADnklEQVRYw+WYQWgUVxjH/28T0mSljVXjQQrNVmnTg6BBEUEltlDSHiwFW5G2Qg8tCCIIHjwI3sRD60GIh1wExVy8aCw9WAyKQnHrwTYXE7PWQkEw1JocErq4/DzszNvZdebNzCY7C/pdZt73/vN+HzPf+968J4Uaq7kGTDGoSKNAEShScGgGmQKusVppjDNU7Z5DM+5pxh2ae57mTDr8hPdYxaEpeZqSQ1PxNBPh/Tm5/VH9ktTRcG1iHNfwGVhnsEFe72qtjKSV1jcU+Wy3f3VofFvJkCT0RH+bhZB+dnKFRVpvi1xhZz06z1gG4KCNkffhPdzOGA5wm54qfqQNcIARyfChJu3Uearzuq//JR3TB57vu8h0+lHVWvavjkZqznnXKZ2S9IYGdECrPF9FG8VpG81d+mw23PCd0cnMI0/yyKHx7Yb19HHXek/nNGxj2WdmYyfQks3Map/8Wjqck79gFE2p2SFTBlBS0bst5GzxeFKn8UN56Bin1HANs4ehGp/VXfs6l4P99DMNzDEcPTKDPAYeOxflYeaAafrrvJdtZoXjJTpYb0tD1OBdbKArRpNnPQ2LUg3fGfWYqSg2F0xZM7GaBdc4bV7xXm+8sXVtsWHqtdLWqqcR3xZ7vb99bd7P66/MqAW95d1FVb1WWq3qvZrfngKjXOLzeGELXj4bmfVG3RHa38qXzzbd0hqvMeTWLjuej3RdvbY5mSmePfpZK2zzrMbjHljGb89+yoH/+JORuvi/nSbg39vdPMAxhzI5nl6+4StvQ+SCH6nbwRx0apPieZMHAPxR24KE6k4E0BW+jgk1Mf5L2z8ZFQCGnwLwcnyxSY7/NDBwaAB0MBrQLPBxHDwNvpNfXQHQxcVA/xzb4+HpUi/P9QDgAe8E+rrt4RrALJuSwFNOPLrqIDN+AKywx28A/zCQDJ563ocFQC936nz9SeFNlJ2XAtjMn3U5sS45vKmq1xBA0O64a4ILn3jJMWXt1dWQjpv6pPljiRQrnilrr8YanL/oMzPXLDzlgmvKOlAXwCV9EXpG2Rq8ZCqBAM5pvykvBd5wppssAL7VhLboN10wS9+gJc385bSwzDfZ4WusnOa9u/cyxPuseVG0r393Nmx2W2JRHA+sWLsygO+yWxA4bujTjN1vSr9rWs9bxu7U+9pqW/PaIInDtMcO+y+kHSf6I8EvcohnGaKfcajKtTOQVfpBezSgt1uaef/pvsY1ap5Wmy8Ak3j13Ve70Q4AAAAASUVORK5CYII="/>
                                </svg>
                            </div>
                            <div className="title">
                                <span className="num">6</span>
                                <span className="text">Проводим <br/>для вас мероприятие</span>
                            </div>
                        </div>

                        <div className="block3__item block3__item-left">
                            <div className="title">
                                <span className="num">7</span>
                                <span className="text">Принимаем <br/>ваши благодарности</span>
                            </div>
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="60"
                                     height="63" viewBox="0 0 20 21">

                                    <image id="Векторный_смарт-объект7" data-name="Векторный смарт-объект7" width="20"
                                           height="21"
                                           href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA/CAQAAAAWYWNXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQQPCAzMsGoNAAAE6ElEQVRYw72ZbYhUVRjHf2f27uqo2476ZUklbRex+rJEBoZClOSHJDAhohdMoahEhaAP0iuEEtEXibDAXj4YYaRQgVQYKmHmKrGlYWm6hhar5bq7rrtz5778+zBn7s7dmd12dvbeZz7M3Oeec37nf85zz5znXKjDdJd+lVTQMb2utnpaqg2b04BCFc1TqK+0KB3wMyqo3DwN6YE0wB8qlORLChVYuKuOidXO1EGehwEaWMxaOgkBcPhEJmnF31uVTSCjl+x8h7o/aXCnBWft9ZfyJfnamTT4RJEbXd9nO9KVNPhCMZaj65kWfDFZbIuN5EtlPleSdHki9Scf1c8TACGHIqyhEYBrSerNqtfG8KrIN98O9YEkFa+jGYDzfBv5OggAn2PJ6W3U33aRXF/m3a6CJF8PJwd+Vp4kqVdNZd6f7VDPSwrbpMuSpIK2lnlb7cp1Lnm9A5oV8xYkeXo7ab1euV7QjzbKVyQF3mj19sf03mwH+qrq+b8bB9usa1bvCzH/JjvQ7yal940onrMxf5eN6GQGWvPsauxrY8zfarE1DLRTE3kbxd3FX7wf8y/HxyFgjwlBjSymnVuZz2xmI67xJyc5aPomq7cj2mOsGXVns/KS8tqvz3VOgaRArp0UKVRBvgJ9o2WTwTbopAJJvg5X3Fst38LGs0DSbs2oFfyqVRBoScW9Zg2NgoRyI82Fsg55+qmInuCOUBv4AACf7ea1Kvc38g6GAOGQ5zdOcYbL9NOPQ452VnIPAQ7gs8c8MVG199rZ9XVajWOUWaPPtEvrdUf1yFabTkSzflvJabRWX6tHN2KfHn2hVaCsehRKCjVUOcw1TNY0dSmQ5OqVoqNFBxRGWVC5+ZL26U3bU7fe5UGrLWUvoIwOR0NQzUr3Am2oDwvqsG3thQyPstxOeqX5jCwxF/i4XjAr8ICAbkA/2JA/olZl1FLWv/n6LsoH/fJNzqQVd9u2NgPK26YXaYV6JJ1Re1QwFz2BQ/E/hUmCL9rWBpTD/syrQVdt2lm2S9QZ28fd9WNBD8q34/sykaKFUTgVyor+bsFrpwIM2mLRp0bA0zVoF7vTFWBNNN3+X/CM0qMZrTImzwYKwAB1PzZjmxmiB4CmSDGA5ujOUTuLKVYM+leSdCO2ETC99CanFkC3MBeAs8nsCcfCzuE9fMBjX21bn/qwt3OcJhzA8FGaih+x2IBt5mKa4F9sUpxhR33nXDWa2ccfAIQsSxUMHATAZ0Ha4NkAZHBTBStD8cyvkbPpKn7KKh6kM0WwtrKLDOCz03gQW6urFJ+itVo5exwX6h/lID3FjiV5PFRM3tICB/b7uDla/JEWeK79dkuOtMBLKB4vR0euaYFX4gMFRrZVNmqHq5efmqjWQg3bdpaWfEYuxWPBBeZSRYWZXKGYSJ+jm2566aOfPvoZYJAbFOgnb/JjAnO0soClvMgsHOA87cae6Dt0cTfg86k2cSFWr523KJ1VttEG+ARAQ/zkRFCwCVAej+L0ZXGYbgt4lFLbLUYj1Z60j3a1xG28ZK5WC7QjPhwZHRkXMPI2LZQnV3kNK6+8vFHv2aqbJ1euQg3pufg0GNAc9rN0jPgOOcRjZJlLM81kmUEL08nSQDPQguEmpmFwAIfSwcp1PMQgw1znClc4z1EzWC0IHD2trgrdrjr1eFLvzf4Dg/VNH8biEskAAAAASUVORK5CYII="/>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="block4">
                    {
                        width < 1064
                            ? (<h2>Более 50 человек, которые сделают твой <br/>праздник идеальным</h2>)
                            : null
                    }

                    <div className="block4__left">
                        {
                            width >= 1064
                                ? (<h2>Более 50 человек, <br/>которые сделают твой <br/>праздник идеальным</h2>)
                                : null
                        }
                        <OwlCarousel ref={block4CarouselMin} options={block4Options1} className="owl-carousel">
                            <div className="img">
                                <img src="img/about/stuff/1.png" alt=""/>
                            </div>
                            <div className="img">
                                <img src="img/about/stuff/2.png" alt=""/>
                            </div>
                            <div className="img">
                                <img src="img/about/stuff/3.png" alt=""/>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="block4__right">
                        <img src="img/about/6.png" alt="" className="bg"/>
                        <OwlCarousel events={block4Carousel2Events} options={block4Options2} className="owl-carousel">
                            <div className="block4__slide">
                                <div className="img">
                                    <img src="img/about/stuff/1.png" alt=""/>
                                </div>
                                <div className="block4__slide__text">
                                    <div className="title">Гордон Рамзи</div>
                                    <div className="job">Шеф-повар</div>
                                    <div className="text">Благодаря именно этому человеку
                                        вы не останитесь голодными на своем
                                        мероприятии. Огромный опыт нашего
                                        шеф-повара позволит почувствовать
                                        не только качество еды, но и ее
                                        прекрасный вкус.
                                    </div>
                                </div>
                            </div>
                            <div className="block4__slide">
                                <div className="img">
                                    <img src="img/about/stuff/2.png" alt=""/>
                                </div>
                                <div className="block4__slide__text">
                                    <div className="title">Гордон Рамзи</div>
                                    <div className="job">Шеф-повар</div>
                                    <div className="text">Благодаря именно этому человеку
                                        вы не останитесь голодными на своем
                                        мероприятии. Огромный опыт нашего
                                        шеф-повара позволит почувствовать
                                        не только качество еды, но и ее
                                        прекрасный вкус.
                                    </div>
                                </div>
                            </div>
                            <div className="block4__slide">
                                <div className="img">
                                    <img src="img/about/stuff/3.png" alt=""/>
                                </div>
                                <div className="block4__slide__text">
                                    <div className="title">Гордон Рамзи</div>
                                    <div className="job">Шеф-повар</div>
                                    <div className="text">Благодаря именно этому человеку
                                        вы не останитесь голодными на своем
                                        мероприятии. Огромный опыт нашего
                                        шеф-повара позволит почувствовать
                                        не только качество еды, но и ее
                                        прекрасный вкус.
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

                <div className="block5">
                    <h2>Видеоотзывы</h2>
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId={video} onClose={() => setModal(false)}/>
                    <OwlCarousel options={reviewsOptions} className="block5__slider owl-carousel">
                        <div onClick={() => {
                            setModal(true)
                            setVideo('uQttds5YOjQ')
                        }} className="block5__item">
                            <img src="img/about/video/1.png" alt=""/>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="135"
                                 height="135" viewBox="0 0 45 45">

                                <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="45"
                                       height="45"
                                       href="data:img/png;base64,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"/>
                            </svg>
                        </div>
                        <div onClick={() => {
                            setModal(true)
                            setVideo('s-uDMX4X2jQ')
                        }} className="block5__item">
                            <img src="img/about/video/2.png" alt=""/>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="135"
                                 height="135" viewBox="0 0 45 45">

                                <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="45"
                                       height="45"
                                       href="data:img/png;base64,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"/>
                            </svg>
                        </div>
                        <div onClick={() => {
                            setModal(true)
                            setVideo('uQttds5YOjQ')
                        }} className="block5__item">
                            <img src="img/about/video/1.png" alt=""/>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="135"
                                 height="135" viewBox="0 0 45 45">

                                <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="45"
                                       height="45"
                                       href="data:img/png;base64,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"/>
                            </svg>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="block6">
                    <img src="/img/home/block5/bg1.png" alt="" className="home__block5__bg1"/>
                    <img src="/img/home/block5/bg2.png" alt="" className="home__block5__bg2"/>
                    <img src="/img/home/block5/bg3.png" alt="" className="home__block5__bg3"/>
                    <img src="/img/home/block5/bg4.png" alt="" className="home__block5__bg4"/>
                    <img src="/img/home/block5/bg5.png" alt="" className="home__block5__bg5"/>
                    <div className="promo-banner about-banner promo-banner-small">
                        <h2 className="section__title">Программа лояльности</h2>
                        <p>Мы ценим наших клиентов, поэтому разработали <br/>для вас специальную систему скидок!</p>
                        <div className="about-banner__steps">
                            <div className="about-banner__step">
                                <div className="step">
                                    -5<sup>%</sup>
                                </div>
                                <div className="text">при заказе мероприятия <br/>от 30 000 ₽</div>
                            </div>
                            <div className="about-banner__step">
                                <div className="step">
                                    -7<sup>%</sup>
                                </div>
                                <div className="text">при заказе мероприятия <br/>от 50 000 ₽</div>
                            </div>
                            <div className="about-banner__step">
                                <div className="step">
                                    -10<sup>%</sup>
                                </div>
                                <div className="text">при заказе мероприятия <br/>от 100 000 ₽</div>
                            </div>
                        </div>
                        <NavLink to="#" className="btn">подробнее о программе</NavLink>
                        <img src="/img/home/block5/1.png" alt=""/>
                        <div className="bg-percent1 bg-percent">%</div>
                        <div className="bg-percent2 bg-percent">%</div>
                        <div className="bg-percent3 bg-percent">%</div>
                        <div className="bg-percent4 bg-percent">%</div>
                        <div className="bg-percent5 bg-percent">%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}