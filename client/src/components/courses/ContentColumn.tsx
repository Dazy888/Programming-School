import React from "react"
// Styles
import styles from '@/styles/Courses.module.scss'
// Component
import { ContentItem } from "@/components/courses/ContentItem"
// Model
import { IPreview } from "@/models/course"

interface Props {
    data: IPreview[]
}

const ContentColumnComponent: React.FC<Props> = ({ data }) => {
    return(
        <div className={styles['content__column']}>
            <ContentItem title={data[0].profession} imgPath={data[0].imgSrc} path={data[0].path} time={data[0].time}/>
            <ContentItem title={data[1].profession} imgPath={data[1].imgSrc} path={data[1].path} time={data[1].time}/>
            <ContentItem title={data[2].profession} imgPath={data[2].imgSrc} path={data[2].path} time={data[2].time}/>
            <ContentItem title={data[3].profession} imgPath={data[3].imgSrc} path={data[3].path} time={data[3].time}/>
            <ContentItem title={data[4].profession} imgPath={data[4].imgSrc} path={data[4].path} time={data[4].time}/>
            <ContentItem title={data[5].profession} imgPath={data[5].imgSrc} path={data[5].path} time={data[5].time}/>
            <ContentItem title={data[6].profession} imgPath={data[6].imgSrc} path={data[6].path} time={data[6].time}/>
            <ContentItem title={data[7].profession} imgPath={data[7].imgSrc} path={data[7].path} time={data[7].time}/>
            <ContentItem title={data[8].profession} imgPath={data[8].imgSrc} path={data[8].path} time={data[8].time}/>
        </div>
    )
}

export const ContentColumn = React.memo(ContentColumnComponent)
