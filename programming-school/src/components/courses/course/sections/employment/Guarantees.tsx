import React from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Components
import { StatsItem } from "@/components/courses/course/sections/employment/StatsItem"
import { TextItem } from "@/components/courses/course/sections/employment/TextItem"

const GuaranteesComponent = () => {
    return(
        <div className={`${styles['employment__guarantees']} grid grid-cols-2`}>
            <div className={`${styles['employment__text']}`}>
                <h1 className={'text-5xl font-bold mb-10'}>Why are we confident in your animation?</h1>
                <TextItem title={'Determine the needs of the market'} text={'We carefully analyze the professions in which we help with animation: we interview specialists, evaluate vacancies, the need for candidates and the availability of the profession for beginners'}/>
                <TextItem title={'We provide quality knowledge'} text={'We help you get the skills you need here and now. All speakers are practitioners, and their knowledge is in demand in the market'}/>
                <TextItem title={'Support at the start of a career'} text={'Our consultants control every step of the way to your career. They help to avoid mistakes and plan a professional path'}/>
            </div>
            <div className={`${styles['employment__stats']} text-white w-fit rounded-2xl`}>
                <div className={'mx-auto mb-24'}>
                    <h1 className={'text-5xl font-bold'}>1300</h1>
                    <h3 className={'text-xl font-medium'}>users already employed in 2022</h3>
                </div>
                <StatsItem title={'500+'} text={'users find jobs quarterly using the Career Center'}/>
                <StatsItem title={'1400+'} text={'users improved their careers in 2022'}/>
            </div>
        </div>
    )
}

export const Guarantees = React.memo(GuaranteesComponent)