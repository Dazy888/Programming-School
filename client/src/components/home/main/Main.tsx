import React from "react"
import dynamic from "next/dynamic"
import styles from "@/styles/Home.module.scss"
import { AboutUs } from "@/components/home/main/sections/about-us/AboutUs"
const AboutCourses = dynamic(() => import('@/components/home/main/sections/about-courses/AboutCourses'), { ssr: false })
const Partners = dynamic(() => import('@/components/home/main/sections/partners/Partners'), { ssr: false })
const TrainingProgram = dynamic(() => import('@/components/home/main/sections/training-program/TrainingProgram'), { ssr: false })
const News = dynamic(() => import('@/components/home/main/sections/news/News'), { ssr: false })

const MainComponent = () => (
    <div id={styles.main} className={'flex justify-center'}>
        <div className={styles.container}>
            <AboutUs/>
            <AboutCourses/>
            <Partners/>
            <TrainingProgram/>
            <News/>
        </div>
    </div>
)

export const Main = React.memo(MainComponent)