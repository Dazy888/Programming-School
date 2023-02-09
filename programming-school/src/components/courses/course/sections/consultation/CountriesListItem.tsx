import React from "react"
import styles from '@/styles/Course.module.scss'

interface Props {
    imgSrc: string
    name: string
    phoneNumber: string
    active: string
    clickListener: (country: string) => void
    countryName: string
}

const CountriesListItemComponent: React.FC<Props> = ({ name, phoneNumber, imgSrc, active, clickListener, countryName }) => {
    return(
        <div onClick={() => clickListener(countryName)} className={`${styles['consultation__country']} flex justify-between items-center cursor-pointer mb-2.5 ${active}`}>
            <div className={'flex items-center'}>
                <img className={'w-5 h-4 mr-2'} alt={'Country IMG'} src={imgSrc}/>
                <p>{name}</p>
            </div>
            <p>{phoneNumber}</p>
        </div>
    )
}

export const CountriesListItem = React.memo(CountriesListItemComponent)