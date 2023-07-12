import React from "react"
import styles from '@/styles/Courses.module.scss'
import { ContentItem } from "@/components/courses/ContentItem"
import { Preview } from "@/models/course.models"
import { v4 } from "uuid"

interface Props {
    data: Preview[]
}

const ContentColumnComponent: React.FC<Props> = ({ data }) => (
    <div className={styles['content__column']}>
        {data.map(({ time, path, profession}) => <ContentItem key={v4()} title={profession} time={time} path={path} />)}
    </div>
)

export const ContentColumn = React.memo(ContentColumnComponent)
