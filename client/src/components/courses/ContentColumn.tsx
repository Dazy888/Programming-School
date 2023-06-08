import React from "react"
import styles from '@/styles/Courses.module.scss'
import { ContentItem } from "@/components/courses/ContentItem"
import { IPreview } from "@/models/course"
import { v4 } from "uuid"

interface Props {
    data: IPreview[]
}

const ContentColumnComponent: React.FC<Props> = ({ data }) => (
    <div className={styles['content__column']}>
        {data.map(({ imgSrc, time, path, profession}) => <ContentItem key={v4()} title={profession} time={time} imgPath={imgSrc} path={path} />)}
    </div>
)

export const ContentColumn = React.memo(ContentColumnComponent)
