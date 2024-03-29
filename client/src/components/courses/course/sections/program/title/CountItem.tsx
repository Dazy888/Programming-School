import React from "react"
import styles from '@/styles/Course.module.scss'
import { Count } from "@/models/course.models"

const CountItemComponent: React.FC<Count> = ({ number, text }) => (
    <div className={`${styles['title__count-item']} flex items-center`}>
        <div className={'w-16 h-9 flex justify-center items-center mr-2 rounded-full font-medium text-black'}>{number}</div>
        <p>{text}</p>
    </div>
)

export const CountItem = React.memo(CountItemComponent)
