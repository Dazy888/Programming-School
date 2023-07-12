import React from "react"
import { v4 } from "uuid"
import styles from '@/styles/Courses.module.scss'
import { useAppSelector } from "@/hooks/redux"
// Components
import { MainLayout } from "@/layouts/MainLayout"
import { CoursePreview } from "@/components/courses/CoursePreview"

const Courses = () => {
    const coursesData = []
    const courses = Object.values(useAppSelector(state => state.coursesReducer.courses))
    for (const course of courses) coursesData.push(course.preview)

    return(
        <MainLayout title={'Courses'}>
            <div id={styles.courses} className={'py-24 text-black'}>
                <h1 className={'text-5xl font-bold text-center tracking-wide text-white'}>Courses</h1>
                <div className={`${styles['content']} grid grid-cols-2 gap-16 mt-24 mx-auto`}>
                    {coursesData.map(({ time, path, profession}) => <CoursePreview key={v4()} title={profession} time={time} path={path} />)}
                </div>
            </div>
        </MainLayout>
    )
}

export default React.memo(Courses)
