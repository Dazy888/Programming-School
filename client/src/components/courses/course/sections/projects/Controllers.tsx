import React from "react"
import styles from "@/styles/Course.module.scss"
import { Arrow } from "@/components/courses/course/sections/projects/Arrow"

interface Props {
    prevSlide: () => void
    nextSlide: () => void
    currentSlide: number
    slidesAmount: number
}

const ControllersComponent: React.FC<Props> = ({ slidesAmount, prevSlide, currentSlide, nextSlide}) => (
    <div className={`${styles['slider__controllers']} flex justify-between w-32`}>
        <Arrow changeSlide={prevSlide} direction={'left'}/>
        <div>{currentSlide + 1} / {slidesAmount}</div>
        <Arrow changeSlide={nextSlide} direction={'right'}/>
    </div>
)

export const Controllers = React.memo(ControllersComponent)
