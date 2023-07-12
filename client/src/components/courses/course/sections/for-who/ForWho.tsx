import React from "react"
import styles from "@/styles/Course.module.scss"
import { TitleText } from "@/components/layout/TitleText"
import { ForWhoItem } from "@/components/courses/course/sections/for-who/ForWhoItem"
import { ForWho } from "@/models/course.models"
import { v4 } from "uuid"

interface Props {
    list: ForWho[]
}

const ForWhoComponent: React.FC<Props> = ({ list }) => (
    <section id={styles['for-who']} className={'mb-32'}>
        <TitleText text={'Who is this course for'}/>
        <div className={`${styles['content']} mt-14 grid gap-12 grid-cols-3`}>
            {list.map(({ subtitle, text }, index) => <ForWhoItem key={v4()} {...{ text, subtitle, index }} />)}
        </div>
    </section>
)

export default React.memo(ForWhoComponent)
