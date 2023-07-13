import React from "react"
import styles from "@/styles/Course.module.scss"
import { IntroProps } from "@/models/course.models"
import { Title } from "@/components/courses/course/sections/intro/Title"
import { Features } from "@/components/courses/course/sections/intro/features/Features"

const IntroSection: React.FC<IntroProps> = ({ courseAttr, text, profession, columnsAttr, features }) => (
    <section id={styles.intro} className={'mb-32'}>
        <Title {...{ courseAttr, text, profession }} />
        <Features {...{ courseAttr, features, columnsAttr }} />
    </section>
)

export const Intro = React.memo(IntroSection)
