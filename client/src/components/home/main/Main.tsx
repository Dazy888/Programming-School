import React from "react"
// Styles
import styles from "@/styles/Home.module.scss"
// Components
import { Partners } from "@/components/home/main/sections/partners/Partners"
import { TrainingProgram } from "@/components/home/main/sections/training-program/TrainingProgram"
import { AboutUs } from "@/components/home/main/sections/about-us/AboutUs"
import { AboutCourses } from "@/components/home/main/sections/about-courses/AboutCourses"
import { News } from "@/components/home/main/sections/news/News"

const MainComponent = () => {
    return(
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
}

export const Main = React.memo(MainComponent)