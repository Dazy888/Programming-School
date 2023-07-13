import React, { useState } from "react"
import styles from '@/styles/Course.module.scss'
import { TitleText } from "@/components/layout/TitleText"
import { ProjectsSlider } from "@/components/courses/course/sections/projects/ProjectsSlider"
import { Project } from "@/models/course.models"

interface Props {
    projects: Project[]
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    const [slideNumber, setSlide] = useState(0)

    return(
        <div id={styles.projects} className={'mb-32'}>
            <TitleText text={'Final projects'} />
            <ProjectsSlider currentSlide={slideNumber} slidesAmount={projects.length} setSlide={setSlide} slide={projects[slideNumber]} />
        </div>
    )
}

export default React.memo(ProjectsSection)
