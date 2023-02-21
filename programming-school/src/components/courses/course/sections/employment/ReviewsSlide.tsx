import React from "react"
import styles from '@/styles/Course.module.scss'

interface Props {
    imgSrc: string
    name: string
    profession: string
    text: string
}

const ReviewsSlideComponent: React.FC<Props> = ({ imgSrc, text, profession, name }) => {
    return(
        <div className={`${styles['employment__reviews-slide']} p-10 rounded-3xl text-white`}>
            <div className={'flex items-center mb-5'}>
                <img className={'w-14 h-14 rounded-full mr-6'} alt={'Avatar'} src={imgSrc}/>
                <div>
                    <h3 className={'text-xl font-medium mb-2'}>{name}</h3>
                    <p className={'text-sm opacity-70'}>{profession}</p>
                </div>
            </div>
            <p className={'light-grey-txt'}>{text}</p>
        </div>
    )
}

export const ReviewsSlide = React.memo(ReviewsSlideComponent)