import React from "react"
import styles from '@/styles/Home.module.scss'
import { TrainingProgramItemI } from "@/interfaces/home"
const ColumnItemComponent: React.FC<TrainingProgramItemI> = ({ month, text, rightLinePosition }) => {
    return(
        <div className={`${styles['training-program__item']} flex justify-between items-center text-right mb-24 w-80 h-24`}>
            {rightLinePosition ? null : <hr className={'w-10 h-px'}/>}
            <div className={'mr-9'}>
                <h4 className={'text-sm text-white opacity-50'}>Month №{month}</h4>
                <p className={'mt-4 text-lg text-white'}>{text}</p>
            </div>
            {rightLinePosition ? <hr className={'w-10 h-px'}/> : null}
        </div>
    )
}

export const ColumnItem = React.memo(ColumnItemComponent)