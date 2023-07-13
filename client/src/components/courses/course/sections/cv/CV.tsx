import React from "react"
import styles from '@/styles/Course.module.scss'
import { CVProps } from "@/models/course.models"
import { TitleText } from "@/components/layout/TitleText"
import { CVContent } from "@/components/courses/course/sections/cv/CVContent"

const CVSection: React.FC<CVProps> = ({ projects, salary, skills, tools, title }) => (
    <div id={styles.cv} className={'mb-32'}>
        <TitleText text={'Your CV after completing the course'}/>
        <CVContent {...{ title, tools, skills, salary, projects }} />
    </div>
)

export default React.memo(CVSection)
