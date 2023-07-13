import React from "react"
import styles from '@/styles/Course.module.scss'
import { ProgramProps } from "@/models/course.models"
// Components
import { Rectangle } from "@/components/courses/course/sections/program/Rectangle"
import { ProgramTitle } from "@/components/courses/course/sections/program/title/ProgramTitle"
import { Content } from "@/components/courses/course/sections/program/content/Content"
import { Disclaimer } from "@/components/courses/course/sections/program/Disclaimer"

const ProgramSection: React.FC<ProgramProps> = ({ courseAttr, titleText, countItems, programItems }) => (
    <div {...courseAttr} id={styles.program} className={'mb-32 pt-16 px-28 pb-20 relative rounded-3xl'}>
        <Rectangle courseAttr={courseAttr} />
        <ProgramTitle {...{ countItems, titleText }} />
        <Content {...{ courseAttr, programItems }} />
        <Disclaimer />
    </div>
)

export default React.memo(ProgramSection)
