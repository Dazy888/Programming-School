import React, { useState } from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Components
import { TitleText } from "@/components/common/TitleText"
import { Slider } from "@/components/courses/course/sections/projects/Slider"
// Interface
import { ProjectI } from "@/interfaces/courses"

interface Props {
    projects: ProjectI[]
}

const ProjectsComponent: React.FC<Props> = ({ projects }) => {
    const [slideNumber, setSlide] = useState(0)

    return(
        <div id={styles['projects']} className={'mb-32'}>
            <TitleText text={'Final projects'}/>
            <Slider currentSlide={slideNumber} slidesAmount={projects.length} setSlide={setSlide} slide={projects[slideNumber]}/>
        </div>
    )
}

export const Projects = React.memo(ProjectsComponent)