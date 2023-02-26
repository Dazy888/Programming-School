import React from "react"
import styles from '@/styles/Home.module.scss'
import { TrainingProgramItemI } from "@/interfaces/home"
import { ColumnItem } from "@/components/home/main/sections/training-program/ColumnItem"

interface Props {
    content: TrainingProgramItemI[]
}

const ContentColumnComponent: React.FC<Props> = ({ content }) => {
    const items = content.map((item, key) => <ColumnItem key={key} month={item.month} text={item.text} rightLinePosition={item.rightLinePosition}/>)

    return(
        <div className={styles['content__column']}>
            {...items}
        </div>
    )
}

export const ContentColumn = React.memo(ContentColumnComponent)