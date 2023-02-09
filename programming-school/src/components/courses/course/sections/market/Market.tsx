import React from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Components
import { TitleText } from "@/components/common/TitleText"
import { MarketItem } from "@/components/courses/course/sections/market/MarketItem"
// Interface
import { ListItemTextI } from "@/interfaces/courses"

interface Props {
    title: string
    list: ListItemTextI[]
}

const MarketComponent: React.FC<Props> = ({ title, list }) => {
    return(
        <section id={styles['market']} className={'mb-32 text-white'}>
            <TitleText text={'About the profession'}/>
            <p className={'text-2xl max-w-5xl my-20'}>{title}</p>
            <div className={`${styles['market__list']} grid gap-12 grid-cols-2`}>
                {...list.map((item, key) => <MarketItem key={key} title={item.title} text={item.text}/>)}
            </div>
        </section>
    )
}

export const Market = React.memo(MarketComponent)