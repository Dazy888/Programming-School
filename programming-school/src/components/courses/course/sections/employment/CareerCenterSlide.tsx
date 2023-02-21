import React from "react"
import styles from "@/styles/Course.module.scss"
interface Props {
    number: number
    hiddenText: string
    title: string
    subtitle: string
    bgColor?: string
    margin?: string
    isSlider?: boolean
}

const CareerCenterSlideComponent: React.FC<Props> = ({ number, subtitle, hiddenText, title, bgColor = '', isSlider = true }) => {
    return(
        <div className={`${styles['employment__career-center-slide']} ${bgColor} p-7 cursor-pointer rounded-3xl relative`}>
            {isSlider
                ?   <>
                        <span className={'w-11 h-11 rounded-full flex justify-center items-center'}>
                            <p className={'text-lg font-bold text-white'}>{number}</p>
                        </span>
                        <p className={`${styles['invisible-text']} w-72 absolute opacity-0 duration-500 text-lg font-medium bottom-8`}>{hiddenText}</p>
                        <div className={`${styles['title']} duration-500`}>
                            <h3 className={'text-2xl font-bold my-20'}>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                    </>
                :   <>
                        <div className={'flex justify-between items-center h-12'}>
                            <h3 className={'text-2xl font-bold my-20'}>{title}</h3>
                            <span className={'w-11 h-11 rounded-full flex justify-center items-center'}>
                                <p className={'text-lg font-bold text-white'}>{number}</p>
                            </span>
                        </div>
                        <p className={`${styles['invisible-text']} text-lg font-medium mt-6`}>{hiddenText}</p>
                    </>
            }
        </div>
    )
}

export const CareerCenterSlide = React.memo(CareerCenterSlideComponent)