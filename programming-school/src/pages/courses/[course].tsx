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
// Sections
import { Header } from "@/components/courses/course/sections/header/Header"
import { Disclaimer } from "@/components/courses/course/sections/disclaimer/Disclaimer"
import { Market } from "@/components/courses/course/sections/market/Market"
import { ForWho } from "@/components/courses/course/sections/for-who/ForWho"
import { Skills } from "@/components/courses/course/sections/skills/Skills"
import { Consultation } from "@/components/courses/course/sections/consultation/Consultation"
import {Employment} from "@/components/courses/course/sections/employment/Employment";

const Course = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const courseName: any = router.query.course
    dispatch(CoursesReducerActions.setOpenedCourse(courseName))
    const course = useSelector(getCoursePage)

    const courseAttr = {'course' : course.preview.path}
    const columnsAttr = {'columns': course.course.header.features.length}

    const header = course.course.header
    const market = course.course.market
    const for_who = course.course.for_who

    return(
        <NavigationLayout>
            <Head>
                <title>{courseName && courseName[0].toUpperCase() + courseName.slice(1)}</title>
            </Head>
            <div id={styles['course']} className={'items-center py-24'}>
                <div className={`${styles['course__container']} mx-auto px-2`}>
                    <Header courseAttr={courseAttr} profession={course.preview.profession} text={header.text} imgSrc={course.course.logoSrc} columnsAttr={columnsAttr} features={header.features}/>
                    <Disclaimer/>
                    <Market title={market.titleText} list={market.list}/>
                    {for_who && <ForWho list={for_who}/>}
                    <Skills courseAttr={courseAttr} skills={course.course.skills}/>
                </div>
                <Consultation courseAttr={courseAttr}/>
                <div className={`${styles['course__container']} mx-auto px-2`}>
                    <Employment courseAttr={courseAttr}/>
                </div>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Course)