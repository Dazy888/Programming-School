import React from "react"
import Head from "next/head"
import { useSelector } from "react-redux"
// Layouts
import { NavigationLayout } from "@/layouts/Navigation"
// Styles
import styles from '@/styles/Courses.module.scss'
// Components
import { ContentColumn } from "@/components/courses/ContentColumn"
// Store
import { getAllPreviewData } from "@/store/reducers/courses/courses-selectors"

const Courses = () => {
    const data = useSelector(getAllPreviewData)

    console.log(data)

    return(
        <NavigationLayout>
            <Head>
                <title>Courses</title>
            </Head>
            <div id={styles['courses']}>
                <h1>Courses</h1>
                <div className={`${styles['courses__content']} flex-between`}>
                    <ContentColumn data={[data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]]}/>
                    <ContentColumn data={[data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17]]}/>
                </div>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Courses)