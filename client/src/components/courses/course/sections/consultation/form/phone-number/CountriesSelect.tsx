import React from "react"
import styles from "@/styles/Course.module.scss"
import { CountriesListItem } from "@/components/courses/course/sections/consultation/form/phone-number/CountriesListItem"

interface Props {
    displayCountriesList: string
    clickListener: (country: string) => void
    activeCountry: string
}

const CountriesSelectComponent: React.FC<Props> = ({ activeCountry, displayCountriesList, clickListener}) => (
    <div className={`${styles['countries-list']} ${displayCountriesList} absolute z-10`}>
        <CountriesListItem countryName={'ukraine'} clickListener={clickListener} active={(activeCountry === 'ukraine') ? styles['active'] : ''} imgSrc={'ukraine'}
                           name={'Ukraine (Україна)'} phoneNumber={'+380'}
        />
        <CountriesListItem countryName={'belarus'} clickListener={clickListener} active={(activeCountry === 'belarus') ? styles['active'] : ''} imgSrc={'belarus'}
                           name={'Belarus (Беларусь)'} phoneNumber={'+375'}
        />
        <CountriesListItem countryName={'kazakhstan'} clickListener={clickListener} active={(activeCountry === 'kazakhstan') ? styles['active'] : ''} imgSrc={'kazakhstan'}
                           name={'Kazakhstan (Казахстан)'} phoneNumber={'+7'}
        />
        <CountriesListItem countryName={'us'} clickListener={clickListener} active={(activeCountry === 'us') ? styles['active'] : ''} imgSrc={'us'}
                           name={'United States'} phoneNumber={'+1'}
        />
        <CountriesListItem countryName={'canada'} clickListener={clickListener} active={(activeCountry === 'canada') ? styles['active'] : ''} imgSrc={'canada'}
                           name={'Canada'} phoneNumber={'+1'}
        />
    </div>
)

export const CountriesSelect = React.memo(CountriesSelectComponent)
