import React from "react"
import styles from "@/styles/Course.module.scss"
import { CVProps } from "@/models/course.models"
// Components
import { ContentTitle } from "@/components/courses/course/sections/cv/ContentTitle"
import { Tools } from "@/components/courses/course/sections/cv/tools/Tools"
import { Skills } from "@/components/courses/course/sections/cv/Skills"
import { Projects } from "@/components/courses/course/sections/cv/Projects"

const CVContentComponent: React.FC<CVProps> = ({ projects, salary, skills, tools, title }) => (
    <div className={`${styles.content} mt-14 rounded-xl p-12`}>
        <ContentTitle {...{ title, salary }} />
        <Tools tools={tools} />
        <Skills skills={skills} />
        <Projects projects={projects} />
    </div>
)

export const CVContent= React.memo(CVContentComponent)
