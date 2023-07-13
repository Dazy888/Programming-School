import React from "react"
import styles from "@/styles/Course.module.scss"
import { Project } from "@/models/course.models"
import { useAppSelector } from "@/hooks/redux"
import { SliderText } from "@/components/courses/course/sections/projects/SliderText"
import { Controllers } from "@/components/courses/course/sections/projects/Controllers"

interface Props {
    slide: Project
    currentSlide: number
    slidesAmount: number
    setSlide: (slideNumber: number) => void
}

const ProjectsSliderComponent: React.FC<Props> = ({ slide, currentSlide, slidesAmount, setSlide }) => {
    const prevSlide = () => (currentSlide >= 1) && setSlide(currentSlide - 1)
    const nextSlide = () => (currentSlide < slidesAmount - 1) && setSlide(currentSlide + 1)

    const openedCourse = useAppSelector(state => state.coursesReducer.openedCourse)

    const { text, listItems, secondParagraph, firstParagraph, imgSrc, title } = slide

    return(
        <div className={`${styles.slider} mt-12 grid grid-cols-2 gap-16`}>
            <img alt={"Project's img"} src={`/courses/course/projects/${imgSrc ? imgSrc : `${openedCourse}/${currentSlide + 1}`}.webp`}/>
            <div className={`${styles['slider__content']} text-white flex justify-between flex-col`}>
                <SliderText {...{ title, text, firstParagraph, secondParagraph, listItems }} />
                <Controllers {...{ currentSlide, nextSlide, prevSlide, slidesAmount }} />
            </div>
        </div>
    )
}

export const ProjectsSlider = React.memo(ProjectsSliderComponent)
