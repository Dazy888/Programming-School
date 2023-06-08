import React from "react"
import styles from "@/styles/Course.module.scss"
import { IProject } from "@/models/course"
import { Arrow } from "@/components/courses/course/sections/projects/Arrow"

interface Props {
    slide: IProject
    currentSlide: number
    slidesAmount: number
    setSlide: (slideNumber: number) => void
}

const SliderComponent: React.FC<Props> = ({ slide, currentSlide, slidesAmount, setSlide }) => {
    const prevSlide = () => (currentSlide >= 1) && setSlide(currentSlide - 1)
    const nextSlide = () => (currentSlide < slidesAmount - 1) && setSlide(currentSlide + 1)

    return(
        <div className={`${styles.slider} mt-12 grid grid-cols-2 gap-16`}>
            <img alt={"Project's img"} src={slide.imgSrc}/>
            <div className={`${styles['slider__content']} text-white flex justify-between flex-col`}>
                <div className={`${styles['slider__text']}`}>
                    <h3 className={'text-2xl font-medium mb-2'}>{slide.title}</h3>
                    {slide.text && <p>{slide.text}</p>}
                    {slide.firstParagraph && <p>{slide.firstParagraph}</p>}
                    {slide.listItems &&
                        <ul className={'my-4'}>
                            {slide.listItems.map((item, key) => <li key={key}>{item}</li>)}
                        </ul>
                    }
                    {slide.secondParagraph && <p className={'mb-4'}>{slide.secondParagraph}</p>}
                </div>
                <div className={`${styles['slider__controllers']} flex justify-between w-32`}>
                    <Arrow changeSlide={prevSlide} direction={'left'}/>
                    <div>{currentSlide + 1} / {slidesAmount}</div>
                    <Arrow changeSlide={nextSlide} direction={'right'}/>
                </div>
            </div>
        </div>
    )
}

export const Slider = React.memo(SliderComponent)
