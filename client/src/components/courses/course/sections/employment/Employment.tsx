import React from "react"
import styles from '@/styles/Course.module.scss'
import { Title } from "@/components/courses/course/sections/employment/title/Title"
import { CareerCenter } from "@/components/courses/course/sections/employment/career-center/CareerCenter"
import { Guarantees } from "@/components/courses/course/sections/employment/guarantees/Guarantees"
import { Reviews } from "@/components/courses/course/sections/employment/reviews/Reviews"

const EmploymentSection = () => (
    <section id={styles.employment} className={'rounded-xl py-16 mb-32'}>
        <Title />
        <CareerCenter />
        <Guarantees />
        <Reviews />
    </section>
)

export default React.memo(EmploymentSection)
