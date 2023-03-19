import React from "react"
import styles from '@/styles/Course.module.scss'

interface Props {
    title: string
    text: string
}

const StatsItemComponent: React.FC<Props> = ({ text, title }) => {
    return(
        <div className={`${styles['guarantees__stats-item']} p-4 rounded-xl`}>
            <h1 className={'text-3xl font-bold'}>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export const StatsItem = React.memo(StatsItemComponent)
