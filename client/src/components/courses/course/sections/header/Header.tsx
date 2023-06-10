import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"
import { TitleText } from "@/components/common/TitleText"
import { FeaturesItem } from "@/components/courses/course/sections/header/FeaturesItem"
import { CourseAttr, ListItemText } from "@/models/course"
import { v4 } from "uuid"
import { useAppSelector } from "@/hooks/redux"

interface Props {
    courseAttr: CourseAttr
    profession: string
    text: string
    columnsAttr: any
    features: ListItemText[]
}

const HeaderSection: React.FC<Props> = ({ courseAttr, text, profession, columnsAttr, features }) => {
    const openedCourse = useAppSelector(state => state.coursesReducer.openedCourse)

    return(
        <section id={styles.header} className={'mb-32'}>
            <div {...courseAttr} className={`${styles['header__title']} flex justify-between items-center py-16 px-44 rounded-2xl text-black`}>
                <div className={'max-w-2xl'}>
                    <TitleText text={`Profession ${profession}`}/>
                    <p className={'text-xl my-5 font-medium'}>{text}</p>
                    <button className={'w-2/5 h-14 text-white rounded-xl text-lg font-medium'}>Book a course</button>
                </div>
                <Image priority width={486} height={486} alt={'Course Logo'} src={`/courses/course/logos/${openedCourse}.png`}/>
            </div>
            <div {...columnsAttr} className={`${styles['header__features']} grid gap-9 mt-20 mx-auto w-fit`}>
                {features.map((feature) => <FeaturesItem styleAttr={courseAttr} key={v4()} title={feature.title} text={feature.text}/>)}
            </div>
        </section>
    )
}

export const Header = React.memo(HeaderSection)
