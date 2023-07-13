import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { CVProps } from "@/models/course.models"

const SkillsComponent: React.FC<Pick<CVProps, 'skills'>> = ({ skills }) => (
    <div className={`${styles['content__skills']} flex my-12`}>
        <h3 className={'text-lg font-medium w-56 mr-14'}>My skills:</h3>
        <ul>
            {skills.map((value) => <li className={'relative'} key={v4()}>{value}</li>)}
        </ul>
    </div>
)

export const Skills = React.memo(SkillsComponent)
