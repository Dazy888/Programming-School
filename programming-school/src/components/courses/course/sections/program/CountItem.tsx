import React from "react"
import styles from '@/styles/Course.module.scss'
import { CountI } from "@/interfaces/course"

const CountItemComponent: React.FC<CountI> = ({ number, text }) => {
    return(
        <div className={`${styles['title__count-item']} flex items-center`}>
            <div className={'w-16 h-9 flex justify-center items-center mr-2 rounded-full font-medium text-black'}>{number}</div>
            <p>{text}</p>
        </div>
    )
}

export const CountItem = React.memo(CountItemComponent)