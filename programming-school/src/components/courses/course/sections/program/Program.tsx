import React from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Components
import { CountItem } from "@/components/courses/course/sections/program/CountItem"
import { ProgramItem } from "@/components/courses/course/sections/program/ProgramItem"
// Interface
import { CountI, CourseAttrI, ProgramItemI } from "@/interfaces/course"

interface Props {
    courseAttr: CourseAttrI
    countItems: CountI[]
    titleText: string
    programItems: ProgramItemI[]
}

const ProgramSection: React.FC<Props> = ({ courseAttr, titleText, countItems, programItems }) => {
    return(
        <div {...courseAttr} id={styles['program']} className={'mb-32 pt-16 px-28 pb-20 relative rounded-3xl'}>
            <div className={`${styles['rectangle']} absolute`}>
                <div {...courseAttr}></div>
            </div>
            <div className={`${styles['title']} flex justify-between mb-20`}>
                <h1 className={'text-5xl font-bold tracking-wide'}>Program</h1>
                <div className={`${styles['title__subtitle']} w-5/12`}>
                    <p className={'text-lg mb-4'}>{titleText}</p>
                    <div className={`${styles['title__counts']} grid gap-5 grid-cols-2`}>
                        {...countItems.map((item, key) => <CountItem key={key} number={item.number} text={item.text}/>)}
                    </div>
                </div>
            </div>
            <div className={styles['content']} {...courseAttr}>
                {...programItems.map((item, key) => <ProgramItem courseAttr={courseAttr} key={key} title={item.title} subtitle={item.subtitle} number={item.number} listItems={item.listItems} text={item.text}/>)}
            </div>
            <div className={`${styles['disclaimer']} flex justify-between items-center mt-20 w-5/12`}>
                <div className={`${styles['disclaimer__icon']} w-11 h-11 flex justify-center items-center rounded-full`}>
                    <i className={'fa-solid fa-exclamation text-black'}/>
                </div>
                <div>
                    <h3 className={'text-xl font-bold mb-2'}>Already completed any courses?</h3>
                    <p>Tell the manager about it - you won't have to pay for them</p>
                </div>
            </div>
        </div>
    )
}

export const Program = React.memo(ProgramSection)