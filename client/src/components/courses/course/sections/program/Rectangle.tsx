import React from "react"
import styles from "@/styles/Course.module.scss"
import { ProgramProps } from "@/models/course.models"

const RectangleComponent: React.FC<Pick<ProgramProps, 'courseAttr'>> = ({ courseAttr }) => (
    <div className={`${styles.rectangle} absolute`}>
        <div {...courseAttr}>{null}</div>
    </div>
)

export const Rectangle = React.memo(RectangleComponent)
