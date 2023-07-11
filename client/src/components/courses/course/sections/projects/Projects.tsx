import React, { useState } from "react"
import styles from '@/styles/Course.module.scss'
import { TitleText } from "@/components/layout/TitleText"
import { Slider } from "@/components/courses/course/sections/projects/Slider"
import { Project } from "@/models/course"

interface Props {
    projects: Project[]
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    const [slideNumber, setSlide] = useState(0)

    return(
        <div id={styles.projects} className={'mb-32'}>
            <TitleText text={'Final projects'}/>
            <Slider currentSlide={slideNumber} slidesAmount={projects.length} setSlide={setSlide} slide={projects[slideNumber]}/>
        </div>
    )
}

export default React.memo(ProjectsSection)
