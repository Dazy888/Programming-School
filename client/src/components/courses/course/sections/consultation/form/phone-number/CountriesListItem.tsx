import React from "react"
import Image from "next/image"
import styles from '@/styles/Course.module.scss'

interface Props {
    imgSrc: string
    name: string
    phoneNumber: string
    active: string
    clickListener: (country: string) => void
    countryName: string
}

const CountriesListItemComponent: React.FC<Props> = ({ name, phoneNumber, imgSrc, active, clickListener, countryName }) => (
    <div onClick={() => clickListener(countryName)} className={`${styles['countries-list__country']} flex justify-between items-center cursor-pointer mb-2.5 duration-300 ${active}`}>
        <div className={'flex items-center'}>
            <Image width={20} height={15} className={'mr-2 object-cover'} src={`/courses/course/countries/${imgSrc}.webp`} alt={'Country Flag'}/>
            <p>{name}</p>
        </div>
        <p>{phoneNumber}</p>
    </div>
)

export const CountriesListItem = React.memo(CountriesListItemComponent)
