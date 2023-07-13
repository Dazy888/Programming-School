import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { CVProps } from "@/models/course.models"

const ProjectsComponent: React.FC<Pick<CVProps, 'projects'>> = ({ projects }) => (
    <div className={`${styles['content__projects']} flex`}>
        <h3 className={'text-lg font-medium w-56 mr-14'}>My projects:</h3>
        <ul>
            {projects.map((value) => <li key={v4()}>{value}</li>)}
        </ul>
    </div>
)

export const Projects = React.memo(ProjectsComponent)
