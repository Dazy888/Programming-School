import React from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Interface
import { ProjectI } from "@/interfaces/courses"
// Component
import { Arrow } from "@/components/courses/course/sections/projects/Arrow"

interface Props {
    slide: ProjectI
    currentSlide: number
    slidesAmount: number
    setSlide: (slideNumber: number) => void
}

const SliderComponent: React.FC<Props> = ({ slide, currentSlide, slidesAmount, setSlide }) => {
    const prevSlide = () => {
        if (currentSlide >= 1) setSlide(currentSlide - 1)
    }

    const nextSlide = () => {
        if (currentSlide < 2) setSlide(currentSlide + 1)
    }

    return(
        <div className={`${styles['projects__slider']} mt-12 grid grid-cols-2 gap-16`}>
            <img alt={"Project's img"} src={slide.imgSrc}/>
            <div className={`${styles['projects__slider-content']} text-white flex justify-between flex-col`}>
                <div className={`${styles['projects__slider-text']}`}>
                    <h3 className={'text-2xl font-medium mb-2'}>{slide.title}</h3>
                    {slide.text && <p>{slide.text}</p>}
                    {slide.firstParagraph && <p>{slide.firstParagraph}</p>}
                    {slide.listItems &&
                        <ul className={'my-4'}>
                            {...slide.listItems.map((item, key) => <li key={key}>{item}</li>)}
                        </ul>
                    }
                    {slide.secondParagraph && <p className={'mb-4'}>{slide.secondParagraph}</p>}
                </div>
                <div className={`${styles['projects__slider-controllers']} flex justify-between w-32`}>
                    <Arrow changeSlide={prevSlide} direction={'left'}/>
                    <div>
                        {currentSlide + 1} / {slidesAmount}
                    </div>
                    <Arrow changeSlide={nextSlide} direction={'right'}/>
                </div>
            </div>
        </div>
    )
}

export const Slider = React.memo(SliderComponent)