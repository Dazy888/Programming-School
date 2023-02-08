import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
// Layout
import { NavigationLayout } from "@/layouts/Navigation"
// Styles
import styles from '@/styles/Course.module.scss'
// Store
import { getCoursePage } from "@/store/reducers/courses/courses-selectors"
import { CoursesReducerActions } from "@/store/reducers/courses/courses-reducer"
import {TitleText} from "@/components/common/TitleText";
import Image from "next/image";
import {FeaturesItem} from "@/components/courses/course/FeaturesItem";
import {MarketItem} from "@/components/courses/course/MarketItem";
import {ForWhoItem} from "@/components/courses/course/ForWhoItem";
import {SkillsItem} from "@/components/courses/course/SkillsItem";

const Course = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const courseName: any = router.query.course
    dispatch(CoursesReducerActions.setOpenedCourse(courseName))
    const course = useSelector(getCoursePage)

    const stylesAttr = {'course' : course.preview.path}
    const gridColumns = {'columns': course.course.header.features.length}

    return(
        <NavigationLayout>
            <Head>
                <title>{courseName && courseName[0].toUpperCase() + courseName.slice(1)}</title>
            </Head>
            <div id={styles['course']} className={'flex justify-center items-center py-24 px-2'}>
                <div className={styles['course__container']}>
                    <section id={styles['header']} className={'mb-32'}>
                        <div {...stylesAttr} className={`${styles['header__title']} flex justify-between items-center py-16 px-44 rounded-2xl`}>
                            <div className={'max-w-2xl'}>
                                <TitleText text={`Profession ${course.preview.profession}`}/>
                                <p className={'text-xl my-5 font-medium'}>{course.course.header.text}</p>
                                <button className={'w-2/5 h-14 text-white rounded-xl text-lg font-medium'}>Book a course</button>
                            </div>
                            <img alt={'Logo'} src={course.course.logoSrc}/>
                        </div>
                        <div {...gridColumns} className={`${styles['header__features']} grid gap-9 mt-20 mx-auto w-fit`}>
                            {...course.course.header.features.map((feature, key) => <FeaturesItem styleAttr={stylesAttr} key={key} title={feature.title} text={feature.text} />)}
                        </div>
                    </section>
                    <section id={styles['disclaimer']} className={'max-w-6xl py-9 px-32 mx-auto mb-32 rounded-2xl'}>
                        <div className={'flex justify-between items-center'}>
                            <img alt={'Disclaimer img'} src={'/courses/course/disclaimer.png'}/>
                            <p className={'w-10/12 text-lg font-medium'}>We are constantly updating the course, so that you will get the skills that robots will need right away. Stay updated - May 2022</p>
                        </div>
                    </section>
                    <section id={styles['market']} className={'mb-32 text-white'}>
                        <TitleText text={'About the profession'}/>
                        <p className={'text-2xl max-w-5xl my-20'}>{course.course.market.titleText}</p>
                        <div className={`${styles['market__list']} grid gap-12 grid-cols-2`}>
                            {...course.course.market.list.map((item, key) => <MarketItem key={key} title={item.title} text={item.text}/>)}
                        </div>
                    </section>
                    {course.course.for_who &&
                        <section id={styles['for-who']} className={'mb-32 text-white'}>
                            <TitleText text={'Who is this course for'}/>
                            <div className={`${styles['for-who__content']} mt-14 grid gap-12 grid-cols-3`}>
                                {...course.course.for_who.map((item, key) => <ForWhoItem key={key} imgSrc={item.imgSrc} subtitle={item.subtitle} text={item.text}/>)}
                            </div>
                        </section>
                    }
                    {course.course.skills &&
                        <section id={styles['skills']} className={'text-white'}>
                            <TitleText text={'What will you learn'}/>
                            <div {...stylesAttr} className={`${styles['skills__content']} mt-16 grid gap-12 grid-cols-3`}>
                                {...course.course.skills.map((item, key) => <SkillsItem key={key} title={item?.title} text={item.text}/>)}
                            </div>
                        </section>
                    }
                </div>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Course)