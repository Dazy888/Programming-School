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

const Course = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const courseName: any = router.query.course
    dispatch(CoursesReducerActions.setOpenedCourse(courseName))
    const course = useSelector(getCoursePage)

    const stylesAttr = {'course' : course.preview.path}

    return(
        <NavigationLayout>
            <Head>
                <title>{courseName && courseName[0].toUpperCase() + courseName.slice(1)}</title>
            </Head>
            <div id={styles['course']} className={'flex justify-center items-center py-24 px-2'}>
                <section id={styles['header']}>
                    <div {...stylesAttr} className={`${styles['header__title']} flex justify-between items-center py-16 px-44 rounded-2xl`}>
                        <div className={'max-w-2xl'}>
                            <TitleText text={`Profession ${course.preview.occupation}`}/>
                            <p className={'text-xl my-5 font-medium'}>{course.course.header.text}</p>
                            <button className={'w-2/5 h-14 text-white rounded-xl text-lg font-medium'}>Book a course</button>
                        </div>
                        <img alt={'Logo'} src={course.course.logoSrc}/>
                    </div>
                    <div className={`${styles['header__features']} flex justify-between mt-20 mx-auto w-11/12`}>
                        {...course.course.header.features.map((feature, key) => <FeaturesItem styleAttr={stylesAttr} key={key} title={feature.title} text={feature.text} />)}
                    </div>
                </section>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Course)