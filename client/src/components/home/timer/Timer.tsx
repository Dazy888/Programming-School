import React from "react"
import styles from "@/styles/Home.module.scss"
import { TimerItem } from "@/components/home/timer/TimerItem"
import { useTimer } from "react-timer-hook"

const TimerComponent = () => {
    const { days, hours, minutes, seconds} = useTimer({ expiryTimestamp: new Date('2023-09-1') })

    return (
        <section id={styles.timer} className={'w-fit my-48 mx-auto text-center'}>
            <h1 className={'text-7xl font-bold mb-12'}>Start of the school <br/> year in</h1>
            <div className={`${styles['timer__row']} w-fit grid grid-cols-4 gap-4 mx-auto`}>
                <TimerItem time={days} text={'Days'}/>
                <TimerItem time={hours} text={'Hours'}/>
                <TimerItem time={minutes} text={'Minutes'}/>
                <TimerItem time={seconds} text={'Seconds'}/>
            </div>
        </section>
    )
}

export const Timer = React.memo(TimerComponent)
