import React from "react"
import Head from "next/head"
import { MainLayout } from "@/layouts/MainLayout"
import styles from '@/styles/Courses.module.scss'
import { ContentColumn } from "@/components/courses/ContentColumn"
import { useAppSelector } from "@/hooks/redux"

const Courses = () => {
    const coursesData = []
    const courses = Object.values(useAppSelector(state => state.coursesReducer.courses))
    for (const course of courses) coursesData.push(course.preview)

    return(
        <MainLayout>
            <Head>
                <title>Courses</title>
            </Head>
            <div id={styles.courses} className={'py-24 text-black'}>
                <h1 className={'text-5xl font-bold text-center tracking-wide'}>Courses</h1>
                <div className={`${styles['content']} flex justify-between mt-24 mx-auto`}>
                    <ContentColumn data={[coursesData[0], coursesData[1], coursesData[2], coursesData[3], coursesData[4], coursesData[5], coursesData[6], coursesData[7], coursesData[8]]}/>
                    <ContentColumn data={[coursesData[9], coursesData[10], coursesData[11], coursesData[12], coursesData[13], coursesData[14], coursesData[15], coursesData[16], coursesData[17]]}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default React.memo(Courses)
