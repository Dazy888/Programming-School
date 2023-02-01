import React from "react"
import styles from '@/styles/Index.module.scss'
import { TrainingProgramItemI } from "@/interfaces/home"
const TrainingProgramItemComponent: React.FC<TrainingProgramItemI> = ({ month, text, rightLinePosition }) => {
    return(
        <div className={`${styles['training-program__item']} flex-between`}>
            {rightLinePosition ? null : <hr/>}
            <div>
                <h4 className={styles['small-grey']}>Month №{month}</h4>
                <p>{text}</p>
            </div>
            {rightLinePosition ? <hr/> : null}
        </div>
    )
}

export const TrainingProgramItem = React.memo(TrainingProgramItemComponent)