import React, { useState } from "react"
import { UseFormRegister } from "react-hook-form"
import { CourseForm } from "@/models/course.models"
import styles from "@/styles/Course.module.scss"
// Components
import { SelectedCountry } from "@/components/courses/course/sections/consultation/form/phone-number/SelecetdCountry"
import { PhoneInput } from "@/components/courses/course/sections/consultation/form/phone-number/PhoneInput"
import { CountriesSelect } from "@/components/courses/course/sections/consultation/form/phone-number/CountriesSelect"

interface Props {
    register: UseFormRegister<CourseForm>
    errMessage: string | undefined
}

const PhoneNumberComponent: React.FC<Props> = ({ register, errMessage }) => {
    const [displayCountriesList, setDisplayCountriesList] = useState('hidden')
    const [activeCountry, setActiveCountry] = useState('ukraine')
    const [arrowAnimation, setArrowAnimation] = useState('')

    const countriesSelectListener = () => {
        if (displayCountriesList === 'hidden') {
            setArrowAnimation(styles['arrow-up'])
            setDisplayCountriesList('block')
        } else {
            setArrowAnimation('')
            setDisplayCountriesList('hidden')
        }
    }

    const clickListener = (country: string) => {
        setActiveCountry(country)
        setDisplayCountriesList('hidden')
        setArrowAnimation('')
    }

    return(
        <div className={`${styles['phone-number']} relative`}>
            <div className={'flex'}>
                <SelectedCountry clickListener={countriesSelectListener} isErr={!!errMessage} {...{ arrowAnimation, activeCountry }} />
                {(activeCountry === 'ukraine') && <PhoneInput maskValue={'+380 __ ___ __ __'} phoneMask={'+{38\\0} 00 000 00 00'} {...{ errMessage, register }} />}
                {(activeCountry === 'belarus') && <PhoneInput maskValue={'+375 __ ___ __ __'} phoneMask={'+{375} 00 000 00 00'} {...{ errMessage, register }} />}
                {(activeCountry === 'kazakhstan') && <PhoneInput maskValue={'+7 ___ ___ __ __'} phoneMask={'+{7} 000 000 00 00'} {...{ errMessage, register }} />}
                {(activeCountry === 'us') && <PhoneInput maskValue={'+1 ___ ___ ____'} phoneMask={'+{1} 000 000 0000'} {...{ errMessage, register }}/>}
                {(activeCountry === 'canada') && <PhoneInput maskValue={'+1 ___ ___ ____'} phoneMask={'+{1} 000 000 0000'} {...{ errMessage, register }} />}
            </div>
            {errMessage && <p className={`mt-2 text-xs ${styles['error-text']}`}>{errMessage}</p>}
            <CountriesSelect {...{ displayCountriesList, activeCountry, clickListener }} />
        </div>
    )
}

export const  PhoneNumber = React.memo(PhoneNumberComponent)
