import React from "react"
import styles from "@/styles/Course.module.scss"
import { TitleText } from "@/components/layout/TitleText"
import { MarketItem } from "@/components/courses/course/sections/market/MarketItem"
import { ListItemText } from "@/models/course"

interface Props {
    title: string
    list: ListItemText[]
}

const MarketComponent: React.FC<Props> = ({ title, list }) => (
    <section id={styles.market} className={'mb-32'}>
        <TitleText text={'About the profession'}/>
        <p className={`${styles['subtitle']} text-2xl max-w-5xl my-20`}>{title}</p>
        <div className={`${styles['list']} grid gap-12 grid-cols-2`}>
            {list.map((item, key) => <MarketItem key={key} title={item.title} text={item.text}/>)}
        </div>
    </section>
)

export default React.memo(MarketComponent)
