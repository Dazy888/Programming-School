import React from "react"
import styles from "@/styles/Home.module.scss"

interface Props {
    text: string
    time: number
}

const TimerItemComponent: React.FC<Props> = ({ text, time }) => {
    return(
        <div className={`${styles['timer__item']} w-32 h-32 flex items-center justify-center`}>
            <div>
                <span className={'text-4xl font-bold'}>{(time < 10) ? `0${time}` : time}</span>
                <p className={'opacity-50'}>{text}</p>
            </div>
        </div>
    )
}

export const TimerItem = React.memo(TimerItemComponent)
