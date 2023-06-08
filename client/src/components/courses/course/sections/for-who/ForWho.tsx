import React from "react"
import styles from "@/styles/Course.module.scss"
import { TitleText } from "@/components/common/TitleText"
import { ForWhoItem } from "@/components/courses/course/sections/for-who/ForWhoItem"
import { IForWho } from "@/models/course"

interface Props {
    list: IForWho[]
}

const ForWhoComponent: React.FC<Props> = ({ list }) => (
    <section id={styles['for-who']} className={'mb-32'}>
        <TitleText text={'Who is this course for'}/>
        <div className={`${styles['content']} mt-14 grid gap-12 grid-cols-3`}>
            {list.map((item, key) => <ForWhoItem key={key} imgSrc={item.imgSrc} subtitle={item.subtitle} text={item.text}/>)}
        </div>
    </section>
)

export default React.memo(ForWhoComponent)
