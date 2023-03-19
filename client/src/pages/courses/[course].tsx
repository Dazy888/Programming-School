import React, { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
// Layout
import { PageFrame } from "@/layouts/PageFrame"
// Styles
import styles from '@/styles/Course.module.scss'
// Sections
import { Header } from "@/components/courses/course/sections/header/Header"
import { Disclaimer } from "@/components/courses/course/sections/disclaimer/Disclaimer"
import { Market } from "@/components/courses/course/sections/market/Market"
import { ForWho } from "@/components/courses/course/sections/for-who/ForWho"
import { Skills } from "@/components/courses/course/sections/skills/Skills"
import { Consultation } from "@/components/courses/course/sections/consultation/Consultation"
import { Employment } from "@/components/courses/course/sections/employment/Employment"
import { Program } from "@/components/courses/course/sections/program/Program"
import { Projects } from "@/components/courses/course/sections/projects/Projects"
import { Teachers } from "@/components/courses/course/sections/teachers/Teachers"
import { CV } from "@/components/courses/course/sections/cv/CV"
import { Questions } from "@/components/courses/course/sections/questions/Questions"
// Store
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { setOpenedCourse } from "@/store/reducers/CoursesSlice"
// Model
import { ICourse } from "@/models/course"

const Course = () => {
    const [courseData, setCourse] = useState<ICourse>(useAppSelector(state => state.coursesReducer.courses.python))
    const dispatch = useAppDispatch()
    const router = useRouter()

    const courseName: any = router.query.course
    dispatch(setOpenedCourse(courseName))

    const openedCourse = useAppSelector(state => state.coursesReducer.openedCourse)
    const courses = Object.values(useAppSelector(state => state.coursesReducer.courses))

    for (const course of courses) {
        if (course.preview.path === openedCourse) setCourse(course)
    }

    const courseAttr = { 'course' : courseData.preview.path }
    const columnsAttr = { 'columns': courseData.course.header.features.length }

    const header = courseData.course.header
    const market = courseData.course.market
    const for_who = courseData.course.for_who
    const program = courseData.course.program
    const projects = courseData.course.projects
    const cv = courseData.course.cv

    return(
        <PageFrame>
            <Head>
                <title>{courseName && courseName[0].toUpperCase() + courseName.slice(1)}</title>
            </Head>
            <div id={styles['course']} className={'items-center py-24'}>
                <div className={`${styles['container']} mx-auto px-2`}>
                    <Header courseAttr={courseAttr} profession={courseData.preview.profession} text={header.text} imgSrc={courseData.course.logoSrc} columnsAttr={columnsAttr} features={header.features}/>
                    <Disclaimer/>
                    <Market title={market.titleText} list={market.list}/>
                    {for_who && <ForWho list={for_who}/>}
                    <Skills courseAttr={courseAttr} skills={courseData.course.skills}/>
                </div>
                <Consultation courseAttr={courseAttr}/>
                <div className={`${styles['container']} mx-auto px-2`}>
                    <Employment/>
                    <Program programItems={program.programItems} countItems={program.title.counts} titleText={program.title.text} courseAttr={courseAttr}/>
                    {projects && <Projects projects={projects}/>}
                    <Teachers teachers={courseData.course.teachers}/>
                    {cv && <CV title={courseData.preview.profession} salary={cv.salary} skills={cv.skills} projects={cv.projects} tools={cv.tools}/>}
                    <Questions questions={courseData.course.questions}/>
                </div>
            </div>
        </PageFrame>
    )
}

export default React.memo(Course)
