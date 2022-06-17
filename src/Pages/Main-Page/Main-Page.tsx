import React, {useEffect} from "react"
import './Styles/Reset.css'
import './Styles/Media.css'
import './Styles/Main-Page.css'
import {NavLink} from "react-router-dom"
import {Spinner} from "./Spinner"

export function MainPage() {
    const timerRef: any = React.createRef()
    const navigationRef: any = React.createRef()

    useEffect(() => {
        const timer = timerRef.current
        const navigation = navigationRef.current

        const days: any = timer.querySelector('.days')
        const hours: any = timer.querySelector('.hours')
        const minutes: any = timer.querySelector('.minutes')
        const seconds: any = timer.querySelector('.seconds')

        const release: any = new Date(2022, 8, 1)
        function startTimer() {
            const now: any = new Date()
            let ms: number = 0

            release > now ? ms = release - now : ms = 31536000000 - Date.parse(now) + Date.parse(release)

            days.innerText = Math.round(ms / 86400000)
            hours.innerText = 24 - now.getHours()
            minutes.innerText = 60 - now.getMinutes()
            seconds.innerText = 60 - now.getSeconds()
        }

        startTimer()
        setInterval(() => {
            startTimer()
        }, 1000)

        const burgerOpen: any = navigation.querySelector('.burger_open')
        const burgerClose: any = navigation.querySelector('.burger_close')
        burgerOpen.onclick = () => {
            navigation.classList.add('show-nav')
            burgerOpen.style.display = 'none'
            burgerClose.style.display = 'block'
        }
        burgerClose.onclick = () => {
            navigation.classList.remove('show-nav')
            burgerOpen.style.display = 'block'
            burgerClose.style.display = 'none'
        }
    }, [])

    return(
        <div id={'wrapper'}>
            <header id="header">
                <div className="main">
                    <div className="navigation flex-property-set_between">
                        <div className="navigation__img">
                            <img className="img__logo" src="/Photographs/Logo.png" alt="Logo" />
                        </div>
                        <nav className="navigation__links white-txt" ref={navigationRef}>
                            <button className="burger_close"><i className="fa-solid fa-square-xmark"></i></button>
                            <button className="burger burger_open"><i className="fa-solid fa-bars"></i></button>
                            <NavLink to={'/home'} className="links__item">Home</NavLink>
                            <NavLink to={'/courses'} className="links__item">Courses</NavLink>
                            <NavLink to={'/schedule'} className="links__item">Schedule</NavLink>
                            <NavLink to={'/teachers'} className="links__item">Teachers</NavLink>
                            <NavLink to={'/newsfeed'} className="links__item">Newsfeed</NavLink>
                            <NavLink to={'/contacts'} className="links__item">Contacts</NavLink>
                        </nav>
                        <div className="navigation__btn white-txt">
                            <button className="btn__cabinet">Go to office</button>
                        </div>
                    </div>
                    <div className="timer">
                        <h1 className="timer__title">Left before the start <br/> of the school year</h1>
                        <div className="timer__row flex-property-set_between" ref={timerRef}>
                            <div className="timer__item">
                                <span className="days big-number"></span>
                                <p className="time-txt grey-txt">Days</p>
                            </div>
                            <div className="timer__item">
                                <span className="hours big-number"></span>
                                <p className="time-txt grey-txt">Minutes</p>
                            </div>
                            <div className="timer__item">
                                <span className="minutes big-number"></span>
                                <p className="time-txt grey-txt">Seconds</p>
                            </div>
                            <div className="timer__item">
                                <span className="seconds big-number"></span>
                                <p className="time-txt grey-txt">Milliseconds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking flex-property-set_center">
                    <div className="booking__container flex-property-set_between">
                        <div className="container__btn">
                            <button className="btn__book-course flex-property-set_center">Book a course</button>
                        </div>
                        <div className="container__students">
                    <span className="students__bl flex-property-set_between">
                        <p className="grey-txt">Total students:</p>
                        <p className="number">1200</p>
                    </span>
                            <span className="students__bl flex-property-set_between">
                        <p className="grey-txt">Successfully completed the course:</p>
                        <p className="number">1000</p>
                    </span>
                        </div>
                        <div className="container__income">
                            <div className="income__stats flex-property-set_between">
                                <p className="grey-txt">Places left:</p>
                                <p className="number">40</p>
                            </div>
                            <div className="income__progress">
                                <div className="progress__bar_earned"></div>
                                <div className="progress__bar_deficiency"></div>
                            </div>
                            <div className="income__goal flex-property-set_between">
                                <p className="grey-txt">0</p>
                                <p className="grey-txt">100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main id="main">
                <div className="container">
                    <section id="about-us" className="flex-property-set_between">
                        <div className="about__img">
                            <img alt={'Computer'} className="img__computer" src="/Photographs/Computer.png"/>
                        </div>
                        <div className="about__txt">
                            <h1 className="title">What are we doing?</h1>
                            <p className="txt__text">We are engaged training of highly qualified specialists who are ready <br/> to cope with
                                the difficulties at work. Thanks to our sponsors, our <br/> classrooms are equipped with the best equipment. We have the best <br/>teachers and in our courses you will learn the newest technologies. <br/> After completing our courses, you will receive a certificate and a 100 <br/> percent job placement
                            </p>
                        </div>
                    </section>
                    <section id="about-course">
                        <h1 className="title">Get a profession right now</h1>
                        <div className="about-course__content flex-property-set_between">
                            <div className="content__item">
                                <img alt={'Computer'} className="item__img" src="/Photographs/Computer-Icon.png"/>
                                <p className="item__subtitle subtitle">Only practical skills at work</p>
                                <p className="light-grey-txt">In our courses you will learn only practical <br/> and modern skills,
                                    that will help you in your work.Also, <br/> our teachers will teach you how to work in a team,
                                    ask the right <br/> questions and how to pass your the first interview</p>
                            </div>
                            <div className="content__item">
                                <img alt={'Flash Drive'} className="item__img" src="/Photographs/Flash-Drive.png" />
                                <p className="item__subtitle subtitle">Work on modern equipment</p>
                                <p className="light-grey-txt">Thanks to our sponsors in our classrooms
                                    are <br/> equipped with the bests computers, mice, keyboards, <br/> headphones, monitors, chairs and
                                    other equipment.You will <br/> enjoy every second being in classroom
                                </p>
                            </div>
                            <div className="content__item">
                                <img alt={'Usb'} className="item__img" src="/Photographs/Usb.png" />
                                <p className="item__subtitle subtitle">Certification upon graduation</p>
                                <p className="light-grey-txt">Our courses are different from others, at <br/> the end
                                    you will receive not only our certificate <br/> (which is appreciated in many
                                    places), but we also <br/> promise you a 100% job placement</p>
                            </div>
                        </div>
                    </section>
                    <section id="partners">
                        <div className="partners__title flex-property-set_between">
                            <Spinner/>
                            <p className="title">Partners - top brands</p>
                        </div>
                        <div className="partners__photographs">
                            <div className="photographs__row">
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Msi Logo'} className="item__img" src="/Photographs/Msi-Logo.png"/>
                                </div>
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Nvidia Logo'} className="item__img" src="/Photographs/Nvidia-Logo.jpg"/>
                                </div>
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Logitech Logo'} className="item__img" src="/Photographs/Logitech-Logo.png"/>
                                </div>
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Intel Logo'} className="item__img" src="/Photographs/Intel-Logo.jpg"/>
                                </div>
                            </div>
                            <div className="photographs__row">
                                <div className="row__item flex-property-set_center">
                                    <img alt={'HyperX Logo'} className="item__img" src="/Photographs/HyperX-Logo.jpg"/>
                                </div>
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Acer Logo'} className="item__img" src="/Photographs/Acer-Logo.jpg"/>
                                </div>
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Samsung Logo'} className="item__img" src="/Photographs/Samsung-logo.jpg"/>
                                </div>
                                <div className="row__item flex-property-set_center">
                                    <img alt={'Gigabyte Logo'} className="item__img" src="/Photographs/Gigabyte-Logo.png"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="training-program">
                        <div className="training-program__title">
                            <Spinner/>
                            <h1 className="title">Training program</h1>
                            <p className="grey-subtitle">This is our training program developed by the bests teachers</p>
                        </div>
                        <div className="training-program__content flex-property-set_center">
                            <div className="content__column">
                                <div className="column__item flex-property-set_between">
                                    <div className="item__txt">
                                        <h4 className="small-grey">Month №1</h4>
                                        <p className="txt__text">Meeting teachers and learning the basics of programming</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className="column__item flex-property-set_between">
                                    <div className="item__txt">
                                        <h4 className="small-grey">Month №3</h4>
                                        <p className="txt__text">Deepening into programming and building a portfolio</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className="column__item flex-property-set_between">
                                    <div className="item__txt">
                                        <h4 className="small-grey">Month №5</h4>
                                        <p className="txt__text">Continue to study complex technologies and create a good portfolio</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className="column__item flex-property-set_between">
                                    <div className="item__txt">
                                        <h4 className="small-grey">Week №7</h4>
                                        <p className="txt__text">Writing the final work, obtaining a certificate and the first work</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <hr className="content__line" />
                            <div className="content__column">
                                <div className="column__item flex-property-set_between">
                                    <hr />
                                    <div className="item__txt">
                                        <h4 className="small-grey">Month №2</h4>
                                        <p className="txt__text">Thoroughly study the basics of programming and perform simple tasks</p>
                                    </div>
                                </div>
                                <div className="column__item flex-property-set_between">
                                    <hr />
                                    <div className="item__txt">
                                        <h4 className="small-grey">Month №4</h4>
                                        <p className="txt__text">Builded portfolio and start studying complex technologies</p>
                                    </div>
                                </div>
                                <div className="column__item flex-property-set_between">
                                    <hr />
                                    <div className="item__txt">
                                        <h4 className="small-grey">Month №6</h4>
                                        <p className="txt__text">Finish studying programming and builded a good portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="teachers">
                        <div className="teachers__title flex-property-set_between">
                            <Spinner/>
                            <h1 className="title">Our teachers</h1>
                        </div>
                        <div className="teachers__content flex-property-set_between">
                            <div className="content__item">
                                <img alt={'Avatar'} className="item__img" src="/Photographs/Avatar-1.png" />
                                <h1 className="item__title subtitle">Dmitry Novikov</h1>
                                <p className="light-grey-txt">Senior Front-End Developer</p>
                                <button className="item__btn flex-property-set_center">Biography</button>
                            </div>
                            <div className="content__item">
                                <img alt={'Avatar'} className="item__img" src="/Photographs/Avatar-2.png" />
                                <h1 className="item__title subtitle">Kirill Rilchenko</h1>
                                <p className="light-grey-txt">Senior C/C++ Developer</p>
                                <button className="item__btn flex-property-set_center">Biography</button>
                            </div>
                            <div className="content__item">
                                <img alt={'Avatar'} className="item__img" src="/Photographs/Avatar-3.png" />
                                <h1 className="item__title subtitle">Sergey Yevtushenko</h1>
                                <p className="light-grey-txt">Senior Back-End Developer</p>
                                <button className="item__btn flex-property-set_center">Biography</button>
                            </div>
                        </div>
                    </section>
                    <section id="social-networks">
                        <h1 className="title">News every week</h1>
                        <p className="social-networks__subtitle grey-subtitle">If you subscribe, you will receive the latest news and discount notifications</p>
                        <div className="social-networks__email">
                            <input type="email" className="email__input" placeholder="E-mail" />
                            <button className="email__btn flex-property-set_center">Subscribe</button>
                        </div>
                        <div className="social-networks__links flex-property-set_between">
                            <a href={'https://www.youtube.com/'} className="links__item flex-property-set_center"><i className="fa-brands fa-youtube item__icon"></i></a>
                            <a href={'https://www.facebook.com/'} className="links__item flex-property-set_center"><i className="fa-brands fa-facebook-f item__icon"></i></a>
                            <a href={'https://www.instagram.com/'} className="links__item flex-property-set_center"><i className="fa-brands fa-instagram item__icon"></i></a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}