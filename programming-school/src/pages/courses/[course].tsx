import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
// Layout
import { PageFrame } from "@/layouts/pageFrame-layout"
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
import { Employment } from "@/components/courses/course/sections/employment/Employment"
import { Program } from "@/components/courses/course/sections/program/Program"
import { Projects } from "@/components/courses/course/sections/projects/Projects"
import { Teachers } from "@/components/courses/course/sections/teachers/Teachers"
import { CV } from "@/components/courses/course/sections/cv/CV"
import { Questions } from "@/components/courses/course/sections/questions/Questions"

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
    const program = course.course.program
    const projects = course.course.projects
    const cv = course.course.cv

    return(
        <PageFrame>
            <Head>
                <title>{courseName && courseName[0].toUpperCase() + courseName.slice(1)}</title>
            </Head>
            <div id={styles['course']} className={'items-center py-24'}>
                <div className={`${styles['container']} mx-auto px-2`}>
                    <Header courseAttr={courseAttr} profession={course.preview.profession} text={header.text} imgSrc={course.course.logoSrc} columnsAttr={columnsAttr} features={header.features}/>
                    <Disclaimer/>
                    <Market title={market.titleText} list={market.list}/>
                    {for_who && <ForWho list={for_who}/>}
                    <Skills courseAttr={courseAttr} skills={course.course.skills}/>
                </div>
                <Consultation courseAttr={courseAttr}/>
                <div className={`${styles['container']} mx-auto px-2`}>
                    <Employment/>
                    <Program programItems={program.programItems} countItems={program.title.counts} titleText={program.title.text} courseAttr={courseAttr}/>
                    {projects && <Projects projects={projects}/>}
                    <Teachers teachers={course.course.teachers}/>
                    {cv && <CV title={course.preview.profession} salary={cv.salary} skills={cv.skills} projects={cv.projects} tools={cv.tools}/>}
                    <Questions questions={course.course.questions}/>
                </div>
            </div>
        </PageFrame>
    )
}

export default React.memo(Course)