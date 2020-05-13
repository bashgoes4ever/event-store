import React from 'react'
import {Input} from "./Input";
import {NavLink} from 'react-router-dom'

export const Loaylty = () => {
    return (
        <div className="loyalty-page">
            <h2>Программа лояльности</h2>
            <div className="description">Мы разработали специальную программу скидок для того, чтобы ваше мероприятие
                стало более <br/>выгодным и его стало еще приятнее организовывать.
            </div>
            <div className="loyalty__top__flex">
                <div className="loyalty__top__item">
                    <div className="circle">
                        <img src="img/about/loyalty/1.png" alt="" className="stars"/>
                        <span>-5<sup>%</sup></span>
                    </div>
                    <div className="content">
                        <div className="text">При заказе <br/>на сумму от 30 000 ₽</div>
                        <img src="img/about/loyalty/2.png" className="bg"/>
                    </div>
                </div>
                <div className="loyalty__top__item">
                    <div className="circle">
                        <img src="img/about/loyalty/3.png" alt="" className="stars"/>
                        <span>-7<sup>%</sup></span>
                    </div>
                    <div className="content">
                        <div className="text">При заказе <br/>на сумму от 50 000 ₽</div>
                        <img src="img/about/loyalty/4.png" className="bg"/>
                    </div>
                </div>
                <div className="loyalty__top__item">
                    <div className="circle">
                        <img src="img/about/loyalty/5.png" alt="" className="stars"/>
                        <span>-10<sup>%</sup></span>
                    </div>
                    <div className="content">
                        <div className="text">При заказе <br/>на сумму от 100 000 ₽</div>
                        <img src="img/about/loyalty/6.png" className="bg"/>
                    </div>
                </div>
            </div>

            <div className="loyalty__middle__flex">
                <div className="title">Как получить <br/>скидку?</div>
                <div className="loyalty__middle__right loyalty-sale">
                    <div className="loyalty__middle__flex1">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="66"
                                 height="66" viewBox="0 0 22 22">

                                <image id="Векторный_смарт-объект4" data-name="Векторный смарт-объект4" width="22"
                                       height="22"
                                       href="data:img/png;base64,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"/>
                            </svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="72"
                                 height="72" viewBox="0 0 24 24">

                                <image id="Векторный_смарт-объект5" data-name="Векторный смарт-объект5" width="24"
                                       height="24"
                                       href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQULECzKcB0lAAAJdElEQVRo3r2aeZAV1RXGf/1mgGGcYUiRYZEkosCALMooKSgVt2hUIJFUNKUpjEuECia4RSNuFWMFtFiMSUglmlSpWQSTlEYUJRUCGIgShgiWrOIoREYHCcMy4yzMdH/5o+/cd/tN97yFMfef97r73O9+95xzT597bnsU1FTMRKoZz2hOoZIyPKCNFhrZww728Bb/8loLw86fzGl6WS2SpA7FtfBum9bqPg3/fxA6S7m1QIGkTbpF/T5dQn0czXTE6CfIoCV9oiUalBu6VxClHZwOHOUttrCXOg5yHCinnEqqGM0EBgMBqXQX2ljEQq/p09HRHfquTlc3k9Gpull/VKsk39FWvb72qRDKmXg/3ag3HFKBpGXq312fgkwGoFLOYTJVjGUoZZwENNNMPdvZTQ3rvaNW8nwe5BJrQFHHld6bPTnvAbpF/1S7pCBikLD58iUFelN3aIjtc4F2ORLH9Y2eIjNRz6vDKD/bopcCrdQ5pmex7tZxM4FA0l0nTqZaqzOcNJxv50L3uyz5UHq9JhqECXrfkZgXN0qOPqT+zGcOiixkjw5q2U4tjTTiUcEA41PRJR/g8ST3eQ2gcp4hvdLu8RYWppvz9JEzM19SnRbqEpXGSg/WNXpGzRFtBqrXFAB5WuJo8JuF0LnXcV5f0gpdqFTWXqW6TjscUr4C3RvGLj1sabZrUncggzUq406RfhPRzKsak8dUPF2pdyM+9bSKALTIYn6kAckAT6tdj6UDl3rrpYjSv1qAfnvrPrU7xntJvUGelhknCPRCUtdLjECDZpj5/cGZ20p9Nn86Bvls7XV88M8qAvXVDkvz2rhOffWBEejQBAA95tB5RAXHdABVaL2DtgRAo9ViotWhmNeJHrDi8wF0tQMw90TIWNO96CBeBaDZ1h0WZYoP1CfGyd5RH9AINVsl/+DE6RhKq63fNGk4KKUaY5V2fT4q/KgdfhrI0zpr36U9QwdApXrb4PpaA6BqS/FxV7BMx4zYOgDNtIuyRr17jhBopJrs1K8G0HJDsVWfSYvNtba9CNRHB02nFg3rBnxSCJknpeus33yo3qAxluAdaaEtCiT52gqg71h6id6jwXpWUrOG5k3I01rrDjcC6GWTsGzpFBllCXwbVKQPzWJ8X8UJoFfosHxJvp4rQEdjrd/UygNNs+NXhQL3G4E2VYCm2sc3JADOjiRmFxdA6Tnb/3xQsQ6ZqwfCxxuMwV4A0J+McH28fnRN5N3ka0/+bq9q2/sJAP3UGG09oDK1m8ezQKU6btS5IBaqUo1dkrB5ebEJcbYZlKNKOVY5rhI0xQIPA11qr2Lf6ta8bmvJCGq5ELrT9p4AKrMmnJKi2sg0eHuBLyEA6rwdsUhTYnLMPjyet4petf8uBK+Jf5urs1KcgQ+IzQBMxgMCViUA+YawM1k8BqssPz7eTg4AEHA2AFvxAZ8RKU6lCBDbAAgNlaImAentDEIBDVzrnVvAFnkjAZBiLAC7KQJSjEoxzFDYD+pHpRHflQjjJq9iC2O85XmTAdhpjD8CgHdCxVGVYqAR2A+kU7B3E2D+ToereW72Pi6IDtQaQuVKgTEglKcoMX+bgHQd51g8itfIagJHQ7cXSAeO2H/9gEbzvzRFZ/hrASqcgZPaE47RPL6lMwoklJ5yuVEHQEl0O9Nmp56csL6MayTxVLiPyLulR26HtNbTtyscno6uMpvXwSMR2LO4uyBC6U1mK2DDRopm868MsCUUutthPMGByOJfoIsKIHSy+fU56hD6JMV/HQof2TU0KhnJa+HOSLwWL+h05/IyPZ3DC3eYMdMBT2DDzaEU7xmeo8DrMFcwujss71lWOWstRTlrNdLQ+QoruJ4V8ft+p1WbSdUCUGXu1qbYTgAUmRj9NgEQMCUL3I0cjlCqZJOmKKW7+Au9gC+zRhXJ3ZXii+YltdkQ8oGA7ehW8549BE523Zht7ejijJKwL1/7I9c70xW0Lr0nWblrAfQPczUXXWAfjQONzT0T1E3qvvnaqxEJfX9s09iBoBK12QxSJSYlk74HoDoD9ttshEBzslI6qPFxBjO6NIm9LjTyrSoBtM6ksCsN9860K4figmabA4TktqdrLUlX2Kd3AmiB2VasCR/fbx52qBI00grPz04INE1NMbVYGQ20xhWktMGWNQaBPH1g5MNk2KEwF0B/M+KNqsyJ0nBtSTBYU5wn6jL7/PcAOt/26PQ4bTIq2y4PNNnO73e5EAL10jy1Zegp0L6wrNNFdreVHA+gZ8yeY2Occ04D0Crb5dLcKIFO07NmvxYokK+fx8chPWQJh/r5gg0fs9NCFWo2SqwB0Aiz8nwd0sk58QlxxutnWqOVujdpi+0M36rPAeiX1kHKXcF0qXYGgB60dt6Y9SWQR9MArVVYyQ+DzHAbgR6NCg5Rq1FknUpBxXrDHgO8ol49Rwk0XXv0hikQdzpHc5cgY+OP4aqharCe9GJPaglUHDqCvm7HfKirUJnqbTi/AEDnqtXe2ZhbCMiL1lAdMqu7Tn3jBGZYv/lYAwE01R6nBPq4oDSsOy29bi0wNUmos5jta32YYmm6Wm1VMNAvnLLbiRLqLDoHeipZqMLWqqXl5hDgHB1xjigbdHu+2+bYkW611nivWzxVq82+LH9lKA3TpkgMPqIF2U48kmpv5ukcO8EWjc3G/Spn6GXGcMWar47IYZO0TYs1PTNsqpfO1Cwt12ENThzhNgdnei7qvM2h9FpnfNAYvaboeWJnBNmt1/WK/qqN2m+KX74UP5R6aamDMDsHOgCa58yhXufZ+5drg5SYbLgt0MMxuKdEjD8nRzoAut2B9vWwSuyTyXpSjVlpBWG65yB6mqljNvoHmpUHHQBdHUko9uly51kfTdViveXkih2Oj/napsXR1ENjtEGyQaU5MfJ0dwisalYw1EgEpNjAD701EYnejKCKIZRRBoiDHKCWndEvhzSGe5hJetv+LlcmFAyzaqlCy5Q+o/clbdZNuX98o16apuczTmx/rZMKImNBZ6g+Y2W1apmuD7OZxF79NUNL1ZDha//JnvDlcE6oMuZxF32cW+Gp/D7eZAe7qecYjfiUU8YgRlLFBMbhRc7uoYkF/KTHPgPTEC1RszI/sfBj1lrQZUcrHdGPuv8mpjBSFZqjGhupc4lFUqB1uqFns6lMWiN1v9aZnDv+o7hQay1ape/nX+Mv8KxZJUziTKoYx2kMsNWwYxxmF7vYzVZqvI5CkP8HMnsSIzYDo3EAAAAASUVORK5CYII="/>
                            </svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="72"
                                 height="72" viewBox="0 0 24 24">

                                <image id="Векторный_смарт-объект7" data-name="Векторный смарт-объект7" width="24"
                                       height="24"
                                       href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfkBQULEQDhs0CHAAAE90lEQVRo3s3Zb0idVRzA8Z/XJdOgQWO1RkFBsEZj5ovF2Ju0tupFK2dJ9CLmWhaxioLRGlERhLBgWY0sXLHsTaywKSuZxGBayAihJCuT3Gbqnfd6vd6r7upM/fbCc4/n/nme++h97n06757n/Hk+nHvO7/y5IsJ11DFIgABDtPM4heJloohu5lhOMfwcocg7UF0CZynNMEKlV6BB0qcobazzAhRUgAhDhBNIC4yw3TvQkAib+ZKxBNQ4B/INGlafDnGniAgbaSVikCZ5P7+gH/Snm/S7Cvws6vdTNFGQP1A1V3Uf3aTfruNHYpp0la/yB1rDFf3hVuN9AR8xqXOmOW5R/3ZepJMRLvKIW6TDzOiZVpGQ86oxmiY5nJB3I0/SwjAhFvQEqHarj4b1Z/2JsYf9RHXeBLtEWMtuPmOAINdSYpdrpEr92UU6EwcwtUYvBeklwDTWyTXS93pWxfgwKa+RKezTgrH8uEPiBvzGaHlFvS2iAT8hIwQkpzCjdHKQdmbdJm1nXDcZoUZEhE/TLLzx2BTgV97hnqUfmELOuk961pjmEWpFGEmBzBKkn08oT96g5IZ0zBgtERoJ6ad5xviHb6iy3gHkhtSk4zZM6bEzxHPc6qC2+yQKOGWQ4r1T67h+TnqpIWmaj3Gbwj5PD5fo5ol8k95I2IDEuMSj+GjTfTfF5/kmPWwM6KXYlBiho+zKN+l37FObbW23SRQTyADqydBCId+5SOJBPV5mkrb+8XQ6YxsFNLtG4gvdUAOltBBMmnkRJ+cRF0lc1PPpPhERiimnWS8tEd4yym5gJxVsTXcEd4nEen04CphrFvfTRg/fLvcOZfQSZJIYYQJ8nHoEd4XEU3qV/8W23E5jhwAwx8+p/eQCiTO6+ts2pcytbzzNckjlbuICD7hE0tuOMKU2pcrVQJ+nn691Xw2o3A4gSi93Z03iDh2lR+0OiLyuS5WI8G78SUSEKrVLD7Ex617iZX2w6bAtV69KXRYRoVI9jYlwvdoQx+I/YFYkflJVFnjBtlydKjckIsI+9RQU4STzAPyJL6HG6kh6qM7Rbne9x9PqsxFeYgt/qFp+ylRsD7Mtpc5qSPxtzJmz1iRu1lc3Mcb17vIM/QD8S2PaWisnsceILvak4/oQHk9jvKcuKUYosai1ClJ1EsliruHjpLH0znGFx1SvRdlj037WpGbr6c9mjnKOLk5zgGI6VJ1zGdrPJcmoE48+Y/Ho4ynJjD6spYYWLnCeerZ6RNLRp48d+I3LmglOpZ8YuR1LZUyo6PNQ0k0uXOOEw17a6xIJn44+J2hVpRcZN+4vLUZVEmk4I8gZiSMq+vgp0Rc7fWzhoDrhzfOMZfulxgEr4ACUmcQmtT+IUmlcxe8TEeGyejpq0fY24wdetF/OHZN09DkvIqI/UCkiwl/q6QMHnL4V/LtiTaJKbf5D3CIiwqgqdUwEn/4B33SVY0eiixkgxmvqeUBP91a61bCeZrfLHGsSPmoYXN77cChlyYXhlBu37Dm2veRjvS5TSFfSHXY4+WrCJY4dKaHMGuoJEGaaKEF+496ccZySRPBxF+XsYENKjrsc5ySLuu5zsiHliLNaUg45qyHlmLNSUh44KyHlieOUlEeOE1KeOZlIHnDsSB5xrEgectKSSj3lpCFNe8xJIXnPSUvylpNC8p6TQPp/cERE2MsoQTpWzvkPrZRUPWxV8vQAAAAASUVORK5CYII="/>
                            </svg>
                        </div>
                    </div>
                    <div className="loyalty__middle__flex2">
                        <div className="loyalty__step-item">
                            <span className="num">1</span>
                            <span className="text">Оформляете <br/>свой заказ на сайте</span>
                        </div>
                        <div className="loyalty__step-item">
                            <span className="num">2</span>
                            <span className="text">Дожидаетесь <br/>звонка от менеджера</span>
                        </div>
                        <div className="loyalty__step-item">
                            <span className="num">3</span>
                            <span className="text">Узнаете сумму <br/>скидки от менеджера</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loyalty__middle__flex">
                <div className="title">Подробнее <br/>об условиях</div>
                <div className="loyalty__middle__right">
                    <p>Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности
                        обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и
                        административных условий. Реализация намеченных плановых заданий позволяет оценить значение
                        новых предложений. <br/><br/>Идейные соображения высшего порядка, а также сложившаяся структура
                        организации способствует подготовки и реализации новых предложений. Разнообразный и богатый опыт
                        реализация намеченных плановых заданий представляет собой интересный эксперимент проверки
                        соответствующий условий активизации. С другой стороны консультация с широким активом позволяет
                        выполнять важные задания по разработке модели развития.</p>
                </div>
            </div>
            <div className="loyalty__form-wrapper">
                <img src="img/about/loyalty/7.png" alt="" className="bg1"/>
                <img src="img/about/loyalty/8.png" alt="" className="bg2"/>
                <img src="img/about/loyalty/9.png" alt="" className="bg3"/>
                <div className="loyalty__form">
                    <div className="title-wrap">
                        <div className="title">Остались вопросы?</div>
                        <div className="text">Заполните форму, мы с удовольствием с вами свяжемся и ответим на них.
                        </div>
                    </div>
                    <div className="inputs-wrap">
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
                        <div className="button-wrap">
                            <button>Отправить</button>
                            <div className="rules">Нажимая на кнопку "Отправить" я соглашаюсь <br/>с <NavLink
                                to="/">правилами
                                обработки персональных
                                данных.</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}