import React, {useEffect, useState} from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { MainLayout } from "@/layouts/MainLayout"
import styles from '@/styles/Course.module.scss'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { CourseAttr, ICourse } from "@/models/course.models"
import { setOpenedCourse } from "@/store/reducers/CoursesSlice"
// Sections
import { Header } from "@/components/courses/course/sections/header/Header"
import { Disclaimer } from "@/components/courses/course/sections/disclaimer/Disclaimer"
const Market = dynamic(() => import('@/components/courses/course/sections/market/Market'), { ssr: false })
const ForWho = dynamic(() => import('@/components/courses/course/sections/for-who/ForWho'), { ssr: false })
const Skills = dynamic(() => import('@/components/courses/course/sections/skills/Skills'), { ssr: false })
const Consultation = dynamic(() => import('@/components/courses/course/sections/consultation/Consultation'), { ssr: false })
const Employment = dynamic(() => import('@/components/courses/course/sections/employment/Employment'), { ssr: false })
const Program = dynamic(() => import('@/components/courses/course/sections/program/Program'), { ssr: false })
const Projects = dynamic(() => import('@/components/courses/course/sections/projects/Projects'), { ssr: false })
const Teachers = dynamic(() => import('@/components/courses/course/sections/teachers/Teachers'), { ssr: false })
const CV = dynamic(() => import('@/components/courses/course/sections/cv/CV'), { ssr: false })
const Questions = dynamic(() => import('@/components/courses/course/sections/questions/Questions'), { ssr: false })

const Course = () => {
    const [courseData, setCourseData] = useState<ICourse>()
    const dispatch = useAppDispatch()
    const router = useRouter()

    const courseName: any = router.query.course
    const courses = Object.values(useAppSelector(state => state.coursesReducer.courses))

    useEffect(() => {
        if (courseName) for (const course of courses) {
            if (course.preview.path === courseName) {
                dispatch(setOpenedCourse(course.preview.path))
                return setCourseData(course)
            }
        }
    }, [courseName])

    const courseAttr = { 'course' : courseData?.preview.path }
    const columnsAttr = { 'columns': courseData?.course.header.features.length }

    const header = courseData?.course.header
    const market = courseData?.course.market
    const for_who = courseData?.course.for_who
    const program = courseData?.course.program
    const projects = courseData?.course.projects
    const cv = courseData?.course.cv

    return(
        <MainLayout>
            <Head>
                <title>{courseData?.preview.profession}</title>
            </Head>
            <div id={styles['course']} className={'items-center py-24'}>
                {(courseData && header && market && program && courseAttr) &&
                    <>
                        <div className={`${styles['container']} mx-auto px-2`}>
                            <Header courseAttr={courseAttr as CourseAttr} profession={courseData.preview.profession} text={header.text} columnsAttr={columnsAttr} features={header.features}/>
                            <Disclaimer/>
                            <Market title={market.title} list={market.list}/>
                            {for_who && <ForWho list={for_who}/>}
                            <Skills courseAttr={courseAttr as CourseAttr} skills={courseData.course.skills}/>
                        </div>
                        <Consultation courseAttr={courseAttr as CourseAttr}/>
                        <div className={`${styles['container']} mx-auto px-2`}>
                            <Employment/>
                            <Program programItems={program.programItems} countItems={program.title.counts} titleText={program.title.text} courseAttr={courseAttr as CourseAttr}/>
                            {projects && <Projects projects={projects}/>}
                            <Teachers teachers={courseData.course.teachers}/>
                            {cv && <CV title={courseData.preview.profession} salary={cv.salary} skills={cv.skills} projects={cv.projects} tools={cv.tools}/>}
                            <Questions questions={courseData.course.questions}/>
                        </div>
                    </>
                }
            </div>
        </MainLayout>
    )
}

export default React.memo(Course)
