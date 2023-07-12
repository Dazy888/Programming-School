import React from "react"
import dynamic from "next/dynamic"
import styles from '@/styles/Home.module.scss'
// Components
import { MainLayout } from "@/layouts/MainLayout"
import { Timer } from "@/components/home/timer/Timer"
import { Booking } from "@/components/home/booking/Booking"
const AboutUs = dynamic(() => import('@/components/home/about-us/AboutUs'), { ssr: false })
const AboutCourses = dynamic(() => import('@/components/home/about-courses/AboutCourses'), { ssr: false })
const Partners = dynamic(() => import('@/components/home/partners/Partners'), { ssr: false })
const TrainingProgram = dynamic(() => import('@/components/home/training-program/TrainingProgram'), { ssr: false })
const News = dynamic(() => import('@/components/home/news/News'), { ssr: false })

const Home = () => (
    <MainLayout title={'Home'}>
        <div id={styles.home}>
            <Timer />
            <Booking />
            <div className={`${styles.container} mx-auto`}>
                <AboutUs />
                <AboutCourses />
                <Partners />
                <TrainingProgram />
                <News />
            </div>
        </div>
    </MainLayout>
)

export default React.memo(Home)
