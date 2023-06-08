import React from "react"
import styles from '@/styles/Home.module.scss'
import { TitleText } from "@/components/common/TitleText"
import { Subtitle } from "@/components/home/main/Subtitle"
import { v4 } from "uuid"

interface Props {
    title: string
    text?: string
    column?: boolean
}

const TitleComponent: React.FC<Props> = ({ title, text, column = false }) => (
    <div className={`${styles['title-block']} ${column && styles['title-column']} flex justify-center items-center`}>
        <div className={styles['lds-ring']}>
            {[1,2,3,4].map(() => <div key={v4()}></div>)}
        </div>
        <TitleText text={title}/>
        {text && <Subtitle text={text}/>}
    </div>
)

export const Title = React.memo(TitleComponent)
