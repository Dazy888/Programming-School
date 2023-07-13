import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"
import { TitleText } from "@/components/layout/TitleText"
import { IntroProps } from "@/models/course.models"
import { useAppSelector } from "@/hooks/redux"

const TitleComponent: React.FC<Pick<IntroProps, 'text' | 'profession' | 'courseAttr'>> = ({ courseAttr, profession, text }) => {
    const openedCourse = useAppSelector(state => state.coursesReducer.openedCourse)

    return(
        <div {...courseAttr} className={`${styles.title} flex justify-between items-center py-16 px-44 rounded-2xl text-black`}>
            <div className={'max-w-2xl'}>
                <TitleText text={`Profession ${profession}`}/>
                <p className={'text-xl my-5 font-medium'}>{text}.</p>
                <button className={'py-3 px-10 text-white rounded-xl text-lg font-medium duration-300'}>Book a course</button>
            </div>
            <Image priority width={486} height={486} alt={'Course Logo'} src={`/courses/course/logos/${openedCourse}.webp`}/>
        </div>
    )
}

export const Title = React.memo(TitleComponent)
