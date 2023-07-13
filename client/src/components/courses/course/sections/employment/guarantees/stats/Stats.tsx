import React from "react"
import styles from "@/styles/Course.module.scss"
import { StatsItem } from "@/components/courses/course/sections/employment/guarantees/stats/StatsItem"

const StatsComponent = () => (
    <div className={`${styles['guarantees__stats']} text-black w-fit rounded-2xl`}>
        <div className={`${styles['guarantees__stats-title']} mx-auto mb-24`}>
            <h1 className={'text-5xl font-bold'}>1300</h1>
            <h3 className={'text-xl font-medium'}>users already employed in 2022</h3>
        </div>
        <div>
            <StatsItem title={'500+'} text={'users find jobs quarterly using the Career Center.'}/>
            <StatsItem title={'1400+'} text={'users improved their careers in 2022.'}/>
        </div>
    </div>
)

export const Stats = React.memo(StatsComponent)
