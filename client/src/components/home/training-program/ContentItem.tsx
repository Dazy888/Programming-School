import React from "react"
import styles from '@/styles/Home.module.scss'
import { TrainingProgramItem } from "@/models/home.models"

const ContentItemComponent: React.FC<TrainingProgramItem> = ({ month, text, rightLinePosition }) => (
    <div className={`${styles['content__item']} flex justify-between items-center text-right mb-24 w-80 h-24`}>
        {!rightLinePosition && <hr className={'w-10 h-px'}/>}
        <div className={'mr-9'}>
            <h4 className={'text-sm opacity-50'}>Month №{month}</h4>
            <p className={'mt-4 text-lg'}>{text}</p>
        </div>
        {rightLinePosition && <hr className={'w-10 h-px'}/>}
    </div>
)

export const ContentItem = React.memo(ContentItemComponent)
