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
import { AboutCoursesItem } from "@/components/home/AboutCoursesItem"
import { Spinner } from "@/components/home/Spinner"
import { Partners } from "@/components/home/Parthners"

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
                        <section id={styles['about-courses']}>
                            <h1 className={"title"}>Get a profession right now</h1>
                            <div className={`${styles['about-courses__content']} flex-between`}>
                                <AboutCoursesItem imgAlt={'Computer Icon'} imgPath={'/computer-icon.png'} subtitle={'Only practical skills at work'} text={'In our courses you will learn only practical and modern skills, that will help you in your work.Also, our teachers will teach you how to work in a team, ask the right questions and how to pass your the first interview'}/>
                                <AboutCoursesItem imgAlt={'Flash Drive Icon'} imgPath={'/flash-drive.png'} subtitle={'Work on modern equipment'} text={'Thanks to our sponsors in our classrooms are equipped with the bests computers, computer mice, keyboards, headphones, monitors, chairs and other equipment.You will enjoy every second being in classroom'}/>
                                <AboutCoursesItem imgAlt={'USB Icon'} imgPath={'/usb.png'} subtitle={'Certification upon graduation'} text={'Our courses are different from others, at the end you will receive not only our certificate (which is appreciated in many places), but we also promise you a 100% job placement'}/>
                            </div>
                        </section>
                        <section id={styles['partners']}>
                            <div className={`${styles['partners__title']} flex-between`}>
                                <Spinner/>
                                <h1 className={"title"}>Partners - top brands</h1>
                            </div>
                            <div className={styles['partners__logos']}>
                                <Partners imgAlts={['Msi Logo', 'Nvidia Logo', 'Logitech Logo', 'Intel Logo']} imgPaths={['/msi-logo.png', '/nvidia-logo.jpg', '/logitech-logo.png', '/intel-logo.jpg']}/>
                                <Partners imgAlts={['HyperX Logo', 'Acer Logo', 'Samsung Logo', 'Gigabyte Logo']} imgPaths={['/hyperx-logo.jpg', '/acer-logo.jpg', '/samsung-logo.jpg', '/gigabyte-logo.png']}/>
                            </div>
                        </section>
                        {/*<section id="training-program">
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