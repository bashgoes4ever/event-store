import React from 'react'
import ModalVideo from 'react-modal-video'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {Input} from "./Input";
import {NavLink} from 'react-router-dom'

export const Reviews = () => {
    const [isVideoOpen, setVideoModal] = React.useState(false)
    const [isImageOpen, setImageModal] = React.useState(false)
    const [video, setVideo] = React.useState(null)
    const [image, setImage] = React.useState(null)

    const [formSubmit, setForm] = React.useState(false)

    const reviews = [
        {
            title: 'Вадим и Маргарита',
            date: '19 августа 2019',
            text: 'Ребята!!! Спасибо вам огромное, всей вашей команде за замечательный праздник, который вы сделали для нас! Благодаря вам, мы не волновались в этот день и все прошло на высоком уровне (наши гости с Австралии сказали, что было все слажено, красиво, вкусно как заграницей). Еда вся вкуснейшая! Шеф повар большой профессионал своего дела! Спасибо официантам, которые так помогали в обслуживании гостей. Ведущие - это просто БОМБА! Спасибо большое менеджерам ,которые с нами работали! Вы действительно лучшие в городе, развивайтесь, достигайте новых высот в этой сфере!',
            image: 'img/about/reviews/1.png',
            video: 's-uDMX4X2jQ',
            vl_link: 'https://vl.ru',
            image_show: false
        },
        {
            title: 'Екатерина',
            date: '19 августа 2019',
            text: 'Ребята!!! Спасибо вам огромное, всей вашей команде за замечательный праздник, который вы сделали для нас! Благодаря вам, мы не волновались в этот день и все прошло на высоком уровне (наши гости с Австралии сказали, что было все слажено, красиво, вкусно как заграницей).',
            image: 'img/about/reviews/1.png',
            video: '',
            vl_link: 'https://vl.ru',
            image_show: true
        },
        {
            title: 'Анна Иванова',
            date: '19 августа 2019',
            text: 'Ребята!!! Спасибо вам огромное, всей вашей команде за замечательный праздник, который вы сделали для нас! Благодаря вам, мы не волновались в этот день и все прошло на высоком уровне (наши гости с Австралии сказали, что было все слажено, красиво, вкусно как заграницей).',
            image: '/img/about/reviews/1.png',
            video: '',
            vl_link: 'https://vl.ru',
            image_show: false
        }
    ]

    return (
        <div className="reviews-page">
            <ModalVideo channel='youtube' isOpen={isVideoOpen} videoId={video} onClose={() => setVideoModal(false)}/>
            {
                isImageOpen
                    ? (
                        <Lightbox
                            mainSrc={image}
                            onCloseRequest={() => setImageModal(false)}
                        />
                    ) : null
            }

            <div className="reviews-wrapper">
                <h2>Отзывы наших клиентов</h2>
                {
                    reviews.map((review, index) => {
                        return (
                            <div key={index} className="review__item">
                                <div className="review__top">
                                    <div className="name">{review.title}</div>
                                    <div className="date">{review.date}</div>
                                </div>
                                <p>{review.text}</p>
                                {
                                    review.image_show
                                        ? (
                                            <img src={review.image} className="review__image"/>
                                        ) : null
                                }
                                <div className="review__bottom">
                                    <a target='_blank' className="link" href={review.vl_link}>отзыв на vl.ru</a>
                                    {
                                        review.image
                                            ? (
                                                <div onClick={() => {
                                                    setImageModal(true)
                                                    setImage(review.image)
                                                }} className="review__link photo">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         xlink="http://www.w3.org/1999/xlink"
                                                         width="51" height="45" viewBox="0 0 17 15">
                                                        <image id="Векторный_смарт-объект4"
                                                               data-name="Векторный смарт-объект4"
                                                               width="17" height="15"
                                                               href="data:img/png;base64,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"/>
                                                    </svg>
                                                    <span>фото</span>
                                                </div>
                                            ) : null
                                    }
                                    {
                                        review.video
                                            ? (
                                                <div onClick={() => {
                                                    setVideoModal(true)
                                                    setVideo(review.video)
                                                }} className="review__link video">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         xlink="http://www.w3.org/1999/xlink"
                                                         width="45" height="45" viewBox="0 0 15 15">
                                                        <image id="Векторный_смарт-объект5"
                                                               data-name="Векторный смарт-объект5"
                                                               width="15" height="15"
                                                               href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEUAAAD////7+/vZ2dnX19fLysrAwMC8u7u1tbW8u7vKysrW1tbY2Nj////09PTY2NjMy8uIiIiJiYnKysrY2Nj09PTx8fHY2NilpKTW1tbx8fH////b29uqqqqrqqra2trt7e3W1tZmZWWOjo6joqKsq6vW1tbs7Ozd3d29vLylpKTS0tLW1tbv7+/////////////e3t7b29upqanEw8Pc29v///+oqKja2tqlpaXc29vR0dHn5+fZ2dn////////////l5eX////JycnX19f4+Pi5ubnb29v///9bWlrS0tLj4+ONjIze3t7y8vJbWlrT0tK6urrc29v///+OjY2OjY3Y2Nj////s7OzW1tbJycn///+joqLY2NjLysrCwsLa2trk5OSjoqLX19fb29vV1dXt7e1JSUkgHx8dHBwfHh5ISEg8Ozs7OjovLi5PTk5OTU0qKSlFREQkIyM5ODhycXE3NjYiISEoJydlZGREQ0M9PDw4NzdDQkIAAADPr8t/AAAAZ3RSTlMAAzWOxdTf4+fi08SMAiup4PTz3qcqMcbtwi8MqO3spTTe/u/p5N0xXurs1KJXKxUQWW/v5KEi7W3tq+JD1xYPKU5A+cIe6I8G/dxP8vZk/Nvnjirv8cEdV6H4Ieyi4OOrRO7Yp94z9uPEswAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQQVHTYsuHMNAAACh0lEQVRIx41VZ0MaQRBdjiJYQNQABlGkGDoXKYZqSdX0aBKNvSCcEBEkRTH/PTsLwu1ekfmw3M48Zt/OzM4gRIuG0+r0hiGjyTA8MsqNITUxW8at5YrQkYvqxOTUI0Wsze6oCbT8dEw/lsU6Z1yXglQuZ+ecUrB7vt611zxen9/n9dyfc7XwhAUHgg1iaobCkWgszsdj0Ug41CS6RvApDV5MkLuVk6m0SJtOJcugriw9ozwnQHmdyfLMkXw2cw2mJZF3dxA8t3J5mcvncy3wHuxxd84D52ahKBurYgHYNxbuIzMD0WgVlhXSsFwA71dz3aS4gHOuiJSkmAPus5002SEpmTxSlnwG0jRNasMBocsiNclCIB1QMxbIWZJXRfNJqJkpXKLjEI9U37KyKgNPQVwmxxBnxb8hUQbXnr94KUGnQxg1wSEtUAqLDGu/fr96/YaFhzGqOop0OI21CIUWhPWNtww6gm93MYL0+E+eKIMW/rxj6EQ9WDuMDHj1xli0IDB0Yl6sM6AhvPriUjRDJ+7DGhMy4tXPy6GFv+8/9CPuxwqjiu+Pn1YlvhV5f/4i5r25RXgrxOTrt+9UTLZvsFYvH2+KBJEdXOMVnWwuaRK9XJa1MnXygyEBsruHUVZuwBrcv8WoAw2u7/YA9X2IMW0LGuztHFXh7Zjh8+F3eXwC79JOvgd88y5bZ/dQPzm9w/b6WXfrLKn2qtN/0KtKvS6u1gePc3ekD573Vco99uiE9NhEQKyV79+7+4dV0r8Ti7QTyWzY3N4J7912Z0OAORK5S/Tc2bppdff10jmSiNJMc53JzDRE5mWbwbYddpti1qhZXClbDyxmpCadOW/Cc16v03Iaxvofq1US4QpIaqAAAAAASUVORK5CYII="/>
                                                    </svg>
                                                    <span>видео</span>
                                                </div>
                                            ) : null
                                    }

                                </div>
                            </div>
                        )
                    })
                }
                <button className="load-more">показать еще</button>
            </div>

            {
                !formSubmit
                    ? (
                        <div className="review-form">
                            <div className="review-form__block">
                                <div className="title">Ваш отзыв очень важен для нас!</div>
                                <Input
                                    type="name"
                                    label="Имя"
                                    id="name-input"
                                ></Input>
                                <Input
                                    type="phone"
                                    label="Телефон"
                                    id="phone-input"
                                ></Input>
                                <Input
                                    type="email"
                                    label="Email"
                                    id="email-input"
                                ></Input>
                            </div>
                            <div className="review-form__block">
                                <textarea name="text" placeholder="Сообщение"></textarea>
                                <button onClick={() => setForm(true)}>Оставить отзыв</button>
                                <div className="rules">Нажимая на кнопку «Оставить отзыв» <br/>я соглашаюсь с <NavLink
                                    to="/">правилами
                                    обработки <br/>персональных
                                    данных.</NavLink>
                                </div>
                            </div>
                        </div>
                    ) : null
            }


            {
                formSubmit
                    ? (
                        <div className="review-thank">
                            <div className="title">Благодарим за ваш отзыв!</div>
                            <div className="text">После проверки модератором ваш отзыв будет опубликован на нашем сайте.
                            </div>
                            <img src="img/about/reviews/2.png" alt=""/>
                        </div>
                    ) : null
            }

        </div>
    )
}