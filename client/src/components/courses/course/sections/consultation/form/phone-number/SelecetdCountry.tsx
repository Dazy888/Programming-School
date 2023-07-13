import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"

interface Props {
    clickListener: () => void
    arrowAnimation: string
    isErr: boolean
    activeCountry: string
}

const SelectedCountryComponent: React.FC<Props> = ({ clickListener, arrowAnimation, isErr, activeCountry }) => (
    <div onClick={clickListener} className={`${styles['selected-country']} ${isErr ? styles['error'] : ''} flex items-center cursor-pointer h-14`}>
        <div className={'flex'}>
            <Image width={20} height={16} className={'mr-1.5'} alt={'Country Flag'} src={`/courses/course/countries/${activeCountry}.webp`}/>
            <i className={`fa-solid fa-chevron-down text-xs duration-300 ${arrowAnimation}`}/>
        </div>
    </div>
)

export const SelectedCountry = React.memo(SelectedCountryComponent)
