import React from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Components
import { TitleText } from "@/components/common/TitleText"
import { ForWhoItem } from "@/components/courses/course/sections/for-who/ForWhoItem"
// Interface
import { ForWhoI } from "@/interfaces/courses"

interface Props {
    list: ForWhoI[]
}

const ForWhoComponent: React.FC<Props> = ({ list }) => {
    return(
        <section id={styles['for-who']} className={'mb-32 text-white'}>
            <TitleText text={'Who is this course for'}/>
            <div className={`${styles['for-who__content']} mt-14 grid gap-12 grid-cols-3`}>
                {...list.map((item, key) => <ForWhoItem key={key} imgSrc={item.imgSrc} subtitle={item.subtitle} text={item.text}/>)}
            </div>
        </section>
    )
}

export const ForWho = React.memo(ForWhoComponent)