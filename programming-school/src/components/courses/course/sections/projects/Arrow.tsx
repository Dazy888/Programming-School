import React from "react"
import styles from '@/styles/Course.module.scss'

interface Props {
    direction: 'left' | 'right'
    changeSlide: () => void
}

const ArrowComponent: React.FC<Props> = ({ direction, changeSlide }) => {
    return(
        <div onClick={changeSlide} className={`${styles['projects__arrow']} w-7 h-7 rounded-full flex justify-center items-center cursor-pointer`}>
            <i className={`fa-solid fa-angle-${direction}`}/>
        </div>
    )
}

export const Arrow = React.memo(ArrowComponent)