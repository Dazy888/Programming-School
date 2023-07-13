import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { CourseAttr, ISkill } from "@/models/course.models"
import { TitleText } from "@/components/layout/TitleText"
import { Skill } from "@/components/courses/course/sections/skills/Skill"

interface Props {
    courseAttr: CourseAttr
    skills: ISkill[]
}

const SkillsSection: React.FC<Props> = ({ skills, courseAttr}) => (
    <section id={styles.skills} className={'mb-32'}>
        <TitleText text={'What will you learn'}/>
        <div {...courseAttr} className={`${styles.content} mt-16 grid gap-12 grid-cols-3`}>
            {skills.map((skill) => <Skill key={v4()} title={skill?.title} text={skill.text}/>)}
        </div>
    </section>
)

export default React.memo(SkillsSection)
