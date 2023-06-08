import React, { useState } from "react"
import styles from '@/styles/Course.module.scss'
import { TitleText } from "@/components/common/TitleText"
import { Slider } from "@/components/courses/course/sections/projects/Slider"
import { IProject } from "@/models/course"

interface Props {
    projects: IProject[]
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
