import React from "react"
import Image from "next/image"
import styles from '@/styles/Course.module.scss'

interface Props {
    imgSrc: string
    name: string
    profession: string
    text: string
}

const ReviewsSlideComponent: React.FC<Props> = ({ imgSrc, text, profession, name }) => (
    <div className={`${styles['reviews__slide']} p-10 rounded-3xl text-white`}>
        <div className={'flex items-center mb-5'}>
            <Image width={56} height={56} className={'rounded-full mr-6'} alt={'Avatar'} src={imgSrc}/>
            <div>
                <h3 className={'text-xl font-medium mb-2'}>{name}</h3>
                <p className={'text-sm opacity-70'}>{profession}</p>
            </div>
        </div>
        <p>{text}</p>
    </div>
)

export const ReviewsSlide = React.memo(ReviewsSlideComponent)
