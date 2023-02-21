import React, { useEffect, useState } from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Components
import { Header } from "@/components/courses/course/sections/employment/Header"
import { CareerCenter } from "@/components/courses/course/sections/employment/CareerCenter"
import { Guarantees } from "@/components/courses/course/sections/employment/Guarantees"
import { Reviews } from "@/components/courses/course/sections/employment/Reviews"

const EmploymentComponent = () => {
    const [isSliders, setSliders] = useState(true)

    useEffect(() => {
        if (window.innerWidth <= 1024) {
            setSliders(false)
        } else if (window.innerWidth <= 1440) {
            setSliders(true)
        }

        window.onresize = () => {
            if (window.innerWidth <= 1024) {
                setSliders(false)
            } else if (window.innerWidth <= 1440) {
                setSliders(true)
            }
        }
    }, [])

    return(
        <section id={styles['employment']} className={'rounded-xl py-16 mb-32'}>
            <div className={`${styles['employment__container']} max-w-7xl mx-auto px-16`}>
                <Header/>
            </div>
            <CareerCenter isSlider={isSliders}/>
            <div className={`${styles['employment__container']} max-w-7xl mx-auto px-16`}>
                <Guarantees/>
            </div>
            <Reviews isSlider={isSliders}/>
        </section>
    )
}

export const Employment = React.memo(EmploymentComponent)