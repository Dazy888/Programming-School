import React from "react"
import styles from '@/styles/Home.module.scss'
import { TrainingProgramItemI } from "@/interfaces/home"
import { ContentItem } from "@/components/home/main/sections/training-program/ContentItem"

interface Props {
    content: TrainingProgramItemI[]
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