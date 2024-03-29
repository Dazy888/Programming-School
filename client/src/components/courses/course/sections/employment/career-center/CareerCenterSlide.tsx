import React from "react"
import styles from "@/styles/Course.module.scss"

interface Props {
    number: number
    hiddenText: string
    title: string
    subtitle: string
    bgColor?: string
    margin?: string
}

const CareerCenterSlideComponent: React.FC<Props> = ({ number, subtitle, hiddenText, title, bgColor = '' }) => (
    <div className={`${styles['career-center__slide']} ${bgColor} p-7 rounded-3xl relative`}>
        <span className={'w-11 h-11 rounded-full flex justify-center items-center'}>
            <p className={'text-lg font-bold'}>{number}</p>
        </span>
        <p className={`${styles['invisible-text']} w-72 absolute opacity-0 duration-500 text-lg font-medium bottom-8`}>{hiddenText}</p>
        <div className={`${styles['title']} duration-500 text-black`}>
            <h3 className={'text-2xl font-bold my-20'}>{title}</h3>
            <p className={'text-base'}>{subtitle}</p>
        </div>
    </div>
)

export const CareerCenterSlide = React.memo(CareerCenterSlideComponent)
