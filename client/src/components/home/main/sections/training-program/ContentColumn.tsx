import React from "react"
// Styles
import styles from '@/styles/Home.module.scss'
// Model
import { TrainingProgramItem } from "@/models/home"
// Component
import { ContentItem } from "@/components/home/main/sections/training-program/ContentItem"

interface Props {
    content: TrainingProgramItem[]
}

const ContentColumnComponent: React.FC<Props> = ({ content }) => {
    const items = content.map((item, key) => <ContentItem key={key} month={item.month} text={item.text} rightLinePosition={item.rightLinePosition}/>)

    return(
        <div className={styles['content__column']}>
            {...items}
        </div>
    )
}

export const ContentColumn = React.memo(ContentColumnComponent)
