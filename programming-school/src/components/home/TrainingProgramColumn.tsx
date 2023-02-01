import React from "react"
import styles from '@/styles/Index.module.scss'
import { TrainingProgramItemI } from "@/interfaces/home"
import { TrainingProgramItem } from "@/components/home/TrainingProgramItem"

interface Props {
    content: TrainingProgramItemI[]
}

const TrainingProgramColumnComponent: React.FC<Props> = ({ content }) => {
    const items = content.map((item, key) => <TrainingProgramItem key={key} month={item.month} text={item.text} rightLinePosition={item.rightLinePosition}/>)

    return(
        <div className={styles['training-program__column']}>
            {...items}
        </div>
    )
}

export const TrainingProgramColumn = React.memo(TrainingProgramColumnComponent)