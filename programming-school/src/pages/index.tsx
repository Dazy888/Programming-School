import React, { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
// Styles
import styles from '@/styles/Index.module.scss'
// Layout
import { NavigationLayout } from "@/layouts/Navigation"
// Components
import { StudentsCounterItem } from "@/components/home/StudentsCounterItem"
import { AboutCoursesItem } from "@/components/home/AboutCoursesItem"
import { Partners } from "@/components/home/Parthners"
import { Title } from "@/components/home/Title"
import { Timer } from "@/components/home/Timer"
import { TrainingProgram } from "@/components/home/TrainingProgram"
// Form
import {SubmitHandler, useForm} from "react-hook-form"
import {Link} from "@/components/home/Link";

const Index = () => {
    const router = useRouter()

    interface FormI {
        email: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormI>({mode: 'onChange'})
    const onSubmit: SubmitHandler<FormI> = data => console.log(data);

    return (
        <NavigationLayout>
            <Head>
                <title>Home</title>
            </Head>
            <div id={styles['home']}>
                <header>
                    <Timer/>
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
                            <Title title={'Partners - top brands'}/>
                            <div className={styles['partners__logos']}>
                                <Partners imgAlts={['Msi Logo', 'Nvidia Logo', 'Logitech Logo', 'Intel Logo']} imgPaths={['/msi-logo.png', '/nvidia-logo.jpg', '/logitech-logo.png', '/intel-logo.jpg']}/>
                                <Partners imgAlts={['HyperX Logo', 'Acer Logo', 'Samsung Logo', 'Gigabyte Logo']} imgPaths={['/hyperx-logo.jpg', '/acer-logo.jpg', '/samsung-logo.jpg', '/gigabyte-logo.png']}/>
                            </div>
                        </section>
                        <TrainingProgram/>
                        <section id={styles['news']}>
                            <h1 className={'title'}>News every week</h1>
                            <h3 className={styles['grey-subtitle']}>If you subscribe, you will receive the latest news and discount notifications</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {errors.email && <p className={'error-text'}>{errors.email.message}</p>}
                                <input maxLength={19} type={'text'} {...register('email', { required: { value: true, message: 'Field is required '}, pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid e-mail'}  })} />
                                {errors.email && <i className={'error-icon fa-solid fa-circle-exclamation'}/>}
                                <button className={'number'}>Subscribe</button>
                            </form>
                            <div className={`${styles['news__social-networks']} flex-between`}>
                                <Link className={'fa-brands fa-youtube'} href={'https://www.youtube.com/'}/>
                                <Link className={'fa-brands fa-facebook-f'} href={'https://www.facebook.com/'}/>
                                <Link className={'fa-brands fa-instagram'} href={'https://www.instagram.com/'}/>
                            </div>
                        </section>
                    </div>
                </main>
                <footer></footer>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Index)