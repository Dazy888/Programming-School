import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { ProgramProps } from "@/models/course.models"
import { ContentItem } from "@/components/courses/course/sections/program/content/ContentItem"

const ContentComponent: React.FC<Pick<ProgramProps, 'programItems' | 'courseAttr'>> = ({ programItems, courseAttr }) => (
    <div className={styles.content} {...courseAttr}>
        {programItems.map((item, index) => (
            <ContentItem courseAttr={courseAttr} key={v4()} title={item.title} subtitle={item.subtitle} number={index + 1} listItems={item.listItems}
                         text={item.text}
            />
        ))}
    </div>
)

export const Content = React.memo(ContentComponent)
