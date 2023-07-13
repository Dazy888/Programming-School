import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { CountItem } from "@/components/courses/course/sections/program/title/CountItem"
import { ProgramProps } from "@/models/course.models"

const ProgramTitleComponent: React.FC<Pick<ProgramProps, 'titleText' | 'countItems'>> = ({ titleText, countItems}) => (
    <div className={`${styles.title} flex justify-between mb-20`}>
        <h1 className={'text-5xl font-bold tracking-wide'}>Program</h1>
        <div className={`${styles['title__subtitle']} w-5/12`}>
            <p className={'text-lg mb-4'}>{titleText}.</p>
            <div className={`${styles['title__counts']} grid gap-5 grid-cols-2`}>
                {countItems.map((item) => <CountItem key={v4()} number={item.number} text={item.text} />)}
            </div>
        </div>
    </div>
)

export const ProgramTitle = React.memo(ProgramTitleComponent)
