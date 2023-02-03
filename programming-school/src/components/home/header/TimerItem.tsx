import React from "react"
import styles from "@/styles/Home.module.scss"

interface Props {
    text: string
    time: number
}

const TimerItemComponent: React.FC<Props> = ({ text, time }) => {
    return(
        <div className={`${styles['timer__item']} flex-center`}>
            <div>
                <span className={`${styles['big-number']}`}>{(time < 10) ? `0${time}` : time}</span>
                <p className={styles['grey-txt']}>{text}</p>
            </div>
        </div>
    )
}

export const TimerItem = React.memo(TimerItemComponent)