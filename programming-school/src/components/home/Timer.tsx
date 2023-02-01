import React, { useEffect, useState } from "react"
import styles from "@/styles/Index.module.scss"
import { TimerItem } from "@/components/home/TimerItem"

const TimerComponent = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const release: any = new Date(2022, 8, 1)

        function startTimer() {
            const currentTime: any = new Date()
            let ms: number

            (release > currentTime) ? ms = release - currentTime : ms = 31536000000 - Date.parse(currentTime) + Date.parse(release)

            setDays(Math.round(ms / 86400000))
            setHours(24 - currentTime.getHours())
            setMinutes(60 - currentTime.getMinutes())
            setSeconds(60 - currentTime.getSeconds())
        }

        startTimer()
        setInterval(() => startTimer(), 1000)
    }, [])

    return (
        <div className={styles['timer']}>
            <h1>Left before the start <br/> of the school year</h1>
            <div className={`${styles['timer__row']} flex-between`}>
                <TimerItem time={days} text={'Days'}/>
                <TimerItem time={hours} text={'Hours'}/>
                <TimerItem time={minutes} text={'Minutes'}/>
                <TimerItem time={seconds} text={'Seconds'}/>
            </div>
        </div>
    )
}

export const Timer = React.memo(TimerComponent);