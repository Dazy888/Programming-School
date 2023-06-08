import React, { useState } from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { CourseForm } from "@/models/course"
import { Input } from "@/components/courses/course/sections/consultation/Input"
import { CountriesListItem } from "@/components/courses/course/sections/consultation/CountriesListItem"

const FormComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CourseForm>({ mode: 'onChange' })
    const onSubmit: SubmitHandler<CourseForm> = () => console.log('Sent')

    const [displayCountriesList, setDisplayCountriesList] = useState('hidden')
    const [activeCountry, setActiveCountry] = useState('ukraine')
    const [arrowAnimation, setArrowAnimation] = useState('')

    const consultationCountriesListener = () => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name={'name'} errorMessage={errors.name?.message} pattern={/^[a-zA-Z]+$/} register={register} placeholder={'Name'}/>
            <div className={`${styles['content__inputs']} grid grid-cols-2 gap-4 mt-4`}>
                <div className={`${styles['content__phone-number']} relative`}>
                    <div className={'flex'}>
                        <div onClick={consultationCountriesListener} className={`${styles['content__selected-country']} ${errors.phoneNumber?.message ? styles['error'] : ''} flex items-center cursor-pointer h-14`}>
                            <div className={'flex'}>
                                <Image width={20} height={15} className={'mr-1.5'} alt={'Country Flag'} src={`/courses/course/countries/${activeCountry}.png`}/>
                                <i className={`fa-solid fa-chevron-down text-xs duration-300 ${arrowAnimation}`}/>
                            </div>
                        </div>
                        {activeCountry === 'ukraine' && <Input pattern={/.*/} isPhoneInput={true} name={'phoneNumber'} maskValue={'+380 __ ___ __ __'} phoneMask={'+{38\\0} 00 000 00 00'} errorMessage={errors.phoneNumber?.message} register={register} placeholder={'Phone'}/>}
                        {activeCountry === 'belarus' && <Input pattern={/.*/} isPhoneInput={true} name={'phoneNumber'} maskValue={'+375 __ ___ __ __'} phoneMask={'+{375} 00 000 00 00'} errorMessage={errors.phoneNumber?.message} register={register} placeholder={'Phone'}/>}
                        {activeCountry === 'kazakhstan' && <Input pattern={/.*/} isPhoneInput={true} name={'phoneNumber'} maskValue={'+7 ___ ___ __ __'} phoneMask={'+{7} 000 000 00 00'} errorMessage={errors.phoneNumber?.message} register={register} placeholder={'Phone'}/>}
                        {activeCountry === 'usa' && <Input pattern={/.*/} isPhoneInput={true} name={'phoneNumber'} maskValue={'+1 ___ ___ ____'} phoneMask={'+{1} 000 000 0000'} errorMessage={errors.phoneNumber?.message} register={register} placeholder={'Phone'}/>}
                        {activeCountry === 'canada' && <Input pattern={/.*/} isPhoneInput={true} name={'phoneNumber'} maskValue={'+1 ___ ___ ____'} phoneMask={'+{1} 000 000 0000'} errorMessage={errors.phoneNumber?.message} register={register} placeholder={'Phone'}/>}
                    </div>
                    {errors.phoneNumber?.message && <p className={`mt-2 text-xs ${styles['error-text']}`}>{errors.phoneNumber?.message}</p>}
                    <div className={`${styles['content__countries-list']} ${displayCountriesList} absolute z-10`}>
                        <CountriesListItem countryName={'ukraine'} clickListener={clickListener} active={(activeCountry === 'ukraine') ? styles['active'] : ''} imgSrc={'/courses/course/countries/ukraine.png'} name={'Ukraine (Україна)'} phoneNumber={'+380'}/>
                        <CountriesListItem countryName={'belarus'} clickListener={clickListener} active={(activeCountry === 'belarus') ? styles['active'] : ''} imgSrc={'/courses/course/countries/belarus.png'} name={'Belarus (Беларусь)'} phoneNumber={'+375'}/>
                        <CountriesListItem countryName={'kazakhstan'} clickListener={clickListener} active={(activeCountry === 'kazakhstan') ? styles['active'] : ''} imgSrc={'/courses/course/countries/kazakhstan.png'} name={'Kazakhstan (Казахстан)'} phoneNumber={'+7'}/>
                        <CountriesListItem countryName={'usa'} clickListener={clickListener} active={(activeCountry === 'usa') ? styles['active'] : ''} imgSrc={'/courses/course/countries/usa.png'} name={'United States'} phoneNumber={'+1'}/>
                        <CountriesListItem countryName={'canada'} clickListener={clickListener} active={(activeCountry === 'canada') ? styles['active'] : ''} imgSrc={'/courses/course/countries/canada.png'} name={'Canada'} phoneNumber={'+1'}/>
                    </div>
                </div>
                <Input name={'mail'} errorMessage={errors.mail?.message} pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/} register={register} placeholder={'Mail'}/>
            </div>
            <button className={'w-1/2 h-14 my-4 text-lg text-white rounded-xl'}>Enroll in course</button>
            <p className={`${styles['content__agreement']} text-xs grey-color`}>By clicking on the button, I agree to the processing of personal data and the terms of use of the Platform</p>
        </form>
    )
}

export const Form = React.memo(FormComponent)
