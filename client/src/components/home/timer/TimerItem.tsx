import React from "react"
import styles from "@/styles/Home.module.scss"

interface Props {
    text: string
    time: number
}

const TimerItemComponent: React.FC<Props> = ({ text, time }) => (
    <div className={`${styles['timer__item']} w-32 h-32 flex-center`}>
        <div>
            <span className={'text-4xl font-bold'}>{(time < 10) && '0'}{time}</span>
            <p className={'opacity-50'}>{text}</p>
        </div>
    </div>
)

export const TimerItem = React.memo(TimerItemComponent)
