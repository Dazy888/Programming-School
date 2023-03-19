import React from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Components
import { TitleText } from "@/components/common/TitleText"
import { SkillsItem } from "@/components/courses/course/sections/skills/SkillsItem"
// Models
import { CourseAttr, ISkill } from "@/models/course"

interface Props {
    courseAttr: CourseAttr
    skills: ISkill[]
}

const SkillsSection: React.FC<Props> = ({ skills, courseAttr}) => {
    return(
        <section id={styles.skills} className={'mb-32'}>
            <TitleText text={'What will you learn'}/>
            <div {...courseAttr} className={`${styles.content} mt-16 grid gap-12 grid-cols-3`}>
                {...skills.map((item, key) => <SkillsItem key={key} title={item?.title} text={item.text}/>)}
            </div>
        </section>
    )
}

export const Skills = React.memo(SkillsSection)
