import React, {useState} from "react"
import Head from "next/head"
// Layout
import { PageFrame } from "@/layouts/PageFrame"
// Styles
import styles from '@/styles/Courses.module.scss'
// Component
import { ContentColumn } from "@/components/courses/ContentColumn"
// Hooks
import { useAppSelector } from "@/hooks/redux"

const Courses = () => {
    const [data, setData] = useState<any>([])
    const courses = Object.values(useAppSelector(state => state.coursesReducer.courses))
    for (const course of courses) setData([...data, course.preview])

    return(
        <PageFrame>
            <Head>
                <title>Courses</title>
            </Head>
            <div id={styles.courses} className={'py-24 text-black'}>
                <h1 className={'text-5xl font-bold text-center tracking-wide'}>Courses</h1>
                <div className={`${styles['content']} flex justify-between mt-24 mx-auto`}>
                    <ContentColumn data={[data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]]}/>
                    <ContentColumn data={[data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17]]}/>
                </div>
            </div>
        </PageFrame>
    )
}

export default React.memo(Courses)
