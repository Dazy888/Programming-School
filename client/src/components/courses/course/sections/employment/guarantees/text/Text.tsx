import React from "react"
import styles from "@/styles/Course.module.scss"
import { TextItem } from "@/components/courses/course/sections/employment/guarantees/text/TextItem"

const TextComponent = () => (
    <div className={`${styles['guarantees__text']}`}>
        <h1 className={'text-5xl font-bold mb-10'}>Why are we confident in your animation?</h1>
        <TextItem title={'Determine the needs of the market'}
                  text={'We carefully analyze the professions in which we help with animation: we interview specialists, evaluate vacancies, the need for candidates and the availability of the profession for beginners'}
        />
        <TextItem title={'We provide quality knowledge'}
                  text={'We help you get the skills you need here and now. All speakers are practitioners, and their knowledge is in demand in the market'}
        />
        <TextItem title={'Support at the start of a career'}
                  text={'Our consultants control every step of the way to your career. They help to avoid mistakes and plan a professional path'}
        />
    </div>
)

export const Text = React.memo(TextComponent)
