import React from "react"
import styles from "@/styles/Course.module.scss"
import { TitleText } from "@/components/common/TitleText"
import { Skill } from "@/components/courses/course/sections/skills/Skill"
import { CourseAttr, ISkill } from "@/models/course"

interface Props {
    courseAttr: CourseAttr
    skills: ISkill[]
}

const SkillsSection: React.FC<Props> = ({ skills, courseAttr}) => (
    <section id={styles.skills} className={'mb-32'}>
        <TitleText text={'What will you learn'}/>
        <div {...courseAttr} className={`${styles.content} mt-16 grid gap-12 grid-cols-3`}>
            {skills.map((item, key) => <Skill key={key} title={item?.title} text={item.text}/>)}
        </div>
    </section>
)

export default React.memo(SkillsSection)
