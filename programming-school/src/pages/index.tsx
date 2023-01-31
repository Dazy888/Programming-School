import React, { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
// Styles
import styles from '@/styles/Index.module.scss'
// Layout
import { NavigationLayout } from "@/layouts/Navigation"
// Components
import { TimerItem } from "@/components/home/TimerItem"
import { StudentsCounterItem } from "@/components/home/StudentsCounterItem"

const Index = () => {
    const router = useRouter()

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const release: any = new Date(2022, 8, 1)

        function startTimer() {
            const currentTime: any = new Date()
            let ms: number

            (release > currentTime) ? ms = release - currentTime : ms = 31536000000 - Date.parse(currentTime) + Date.parse(release)

            setDays(Math.round(ms / 86400000))
            setHours(24 - currentTime.getHours())
            setMinutes(60 - currentTime.getMinutes())
            setSeconds(60 - currentTime.getSeconds())
        }

        startTimer()
        setInterval(() => startTimer(), 1000)
    }, [])

    return (
        <NavigationLayout>
            <Head>
                <title>Home</title>
            </Head>
            <div id={styles['home']}>
                <header>
                    <div className={styles['timer']}>
                        <h1>Left before the start <br/> of the school year</h1>
                        <div className={`${styles['timer__row']} flex-between`}>
                            <TimerItem time={days} text={'Days'}/>
                            <TimerItem time={hours} text={'Hours'}/>
                            <TimerItem time={minutes} text={'Minutes'}/>
                            <TimerItem time={seconds} text={'Seconds'}/>
                        </div>
                    </div>
                    <div className={`${styles['booking']} flex-center`}>
                        <div className={`${styles['booking__content']} flex-between`}>
                            <button onClick={() => router.push('/courses')} className={`${styles['booking__btn']} flex-center number`}>Book a course</button>
                            <div className={styles['booking__students-counter']}>
                                <StudentsCounterItem text={'Total students'} amount={'1200'}/>
                                <StudentsCounterItem text={'Successfully completed the courses'} amount={'1000'}/>
                            </div>
                            <div className={styles['booking__orders']}>
                                <div className={`${styles['booking__orders_places']} flex-between`}>
                                    <p className={styles['grey-txt']}>Places left:</p>
                                    <p className={'number'}>120</p>
                                </div>
                                <div className={styles['booking__orders_progress-bar']}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={'flex-between'}>
                                    <p className={styles['grey-txt']}>0</p>
                                    <p className={styles['grey-txt']}>300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className={'flex-center'}>
                    <div className={styles['container']}>
                        <section id={styles['about-us']} className={'flex-between'}>
                            <div className={styles['about-us__img']}>
                                <img alt={'Computer'} src="/computer.png"/>
                            </div>
                            <div className={styles['about-us__text']}>
                                <h1 className={'title'}>What are we doing?</h1>
                                <p>We are engaged training of highly qualified specialists who are
                                    ready to cope with the difficulties at work. Thanks to our sponsors, our classrooms are equipped with
                                    the best equipment. We have the best teachers and in our courses you will learn the
                                    newest technologies. After completing our courses, you will receive a certificate
                                    and a 100 percent job placement
                                </p>
                            </div>
                        </section>
                        {/*<section id="about-course">
                            <h1 className="title">Get a profession right now</h1>
                            <div className="about-course__content flex-property-set_between">
                                <div className="content__item">
                                    <img alt={'Computer'} className="item__img"
                                         src="/Photographs/Main-Page/Computer-Icon.png"/>
                                    <p className="item__subtitle subtitle">Only practical skills at work</p>
                                    <p className="light-grey-txt">In our courses you will learn only practical <br/> and
                                        modern skills,
                                        that will help you in your work.Also, <br/> our teachers will teach you how to work
                                        in a team,
                                        ask the right <br/> questions and how to pass your the first interview</p>
                                </div>
                                <div className="content__item">
                                    <img alt={'Flash Drive'} className="item__img"
                                         src="/Photographs/Main-Page/Flash-Drive.png"/>
                                    <p className="item__subtitle subtitle">Work on modern equipment</p>
                                    <p className="light-grey-txt">Thanks to our sponsors in our classrooms
                                        are <br/> equipped with the bests computers, mice, keyboards, <br/> headphones,
                                        monitors, chairs and
                                        other equipment.You will <br/> enjoy every second being in classroom
                                    </p>
                                </div>
                                <div className="content__item">
                                    <img alt={'Usb'} className="item__img" src="/Photographs/Main-Page/Usb.png"/>
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
                                        <img alt={'Msi Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Msi-Logo.png"/>
                                    </div>
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'Nvidia Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Nvidia-Logo.jpg"/>
                                    </div>
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'Logitech Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Logitech-Logo.png"/>
                                    </div>
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'Intel Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Intel-Logo.jpg"/>
                                    </div>
                                </div>
                                <div className="photographs__row">
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'HyperX Logo'} className="item__img"
                                             src="/Photographs/Main-Page/HyperX-Logo.jpg"/>
                                    </div>
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'Acer Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Acer-Logo.jpg"/>
                                    </div>
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'Samsung Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Samsung-logo.jpg"/>
                                    </div>
                                    <div className="row__item flex-property-set_center">
                                        <img alt={'Gigabyte Logo'} className="item__img"
                                             src="/Photographs/Main-Page/Gigabyte-Logo.png"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="training-program">
                            <div className="training-program__title">
                                <Spinner/>
                                <h1 className="title">Training program</h1>
                                <p className="grey-subtitle">This is our training program developed by the bests
                                    teachers</p>
                            </div>
                            <div className="training-program__content flex-property-set_center">
                                <div className="content__column">
                                    <div className="column__item flex-property-set_between">
                                        <div className="item__txt">
                                            <h4 className="small-grey">Month №1</h4>
                                            <p className="txt__text">Meeting teachers and learning the basics of
                                                programming</p>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="column__item flex-property-set_between">
                                        <div className="item__txt">
                                            <h4 className="small-grey">Month №3</h4>
                                            <p className="txt__text">Deepening into programming and building a portfolio</p>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="column__item flex-property-set_between">
                                        <div className="item__txt">
                                            <h4 className="small-grey">Month №5</h4>
                                            <p className="txt__text">Continue to study complex technologies and create a
                                                good portfolio</p>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="column__item flex-property-set_between">
                                        <div className="item__txt">
                                            <h4 className="small-grey">Week №7</h4>
                                            <p className="txt__text">Writing the final work, obtaining a certificate and the
                                                first work</p>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                                <hr className="content__line"/>
                                <div className="content__column">
                                    <div className="column__item flex-property-set_between">
                                        <hr/>
                                        <div className="item__txt">
                                            <h4 className="small-grey">Month №2</h4>
                                            <p className="txt__text">Thoroughly study the basics of programming and perform
                                                simple tasks</p>
                                        </div>
                                    </div>
                                    <div className="column__item flex-property-set_between">
                                        <hr/>
                                        <div className="item__txt">
                                            <h4 className="small-grey">Month №4</h4>
                                            <p className="txt__text">Builded portfolio and start studying complex
                                                technologies</p>
                                        </div>
                                    </div>
                                    <div className="column__item flex-property-set_between">
                                        <hr/>
                                        <div className="item__txt">
                                            <h4 className="small-grey">Month №6</h4>
                                            <p className="txt__text">Finish studying programming and builded a good
                                                portfolio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="social-networks">
                            <h1 className="title">News every week</h1>
                            <p className="social-networks__subtitle grey-subtitle">If you subscribe, you will receive the
                                latest news and discount notifications</p>
                            <div className="social-networks__email">
                                <Formik initialValues={{email: ''}} onSubmit={submit}>
                                    {({errors, touched}) => (
                                        <Form>
                                            <div className={'error-container'}>
                                                {errors.email && touched.email ?
                                                    <p className={'error__txt'}>{errors.email}</p> : null}
                                                <Field name={'email'} type="email" className="email__input light-grey-txt"
                                                       placeholder="E-mail" validate={emailValidator}/>
                                                {errors.email && touched.email ?
                                                    <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                            </div>
                                            <Field as={'button'} name={'submit'} type="submit"
                                                   className="email__submit number flex-property-set_center">Subscribe</Field>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div className="social-networks__links flex-property-set_between">
                                <a href={'https://www.youtube.com/'} className="links__item flex-property-set_center"><i
                                    className="fa-brands fa-youtube item__icon"></i></a>
                                <a href={'https://www.facebook.com/'} className="links__item flex-property-set_center"><i
                                    className="fa-brands fa-facebook-f item__icon"></i></a>
                                <a href={'https://www.instagram.com/'} className="links__item flex-property-set_center"><i
                                    className="fa-brands fa-instagram item__icon"></i></a>
                            </div>
                        </section>*/}
                    </div>
                </main>
                <footer></footer>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Index)