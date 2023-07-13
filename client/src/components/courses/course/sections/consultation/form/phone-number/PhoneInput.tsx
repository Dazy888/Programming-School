import React, { useEffect, useRef, useState } from "react"
import styles from '@/styles/Course.module.scss'
import { UseFormRegister } from "react-hook-form"
import { CourseForm } from "@/models/course.models"
import IMask from "imask"

interface Props {
    register: UseFormRegister<CourseForm>
    errMessage: string | undefined
    maskValue?: string
    phoneMask?: string
}

export const PhoneInputComponent: React.FC<Props> = ({ maskValue, phoneMask, register, errMessage }) => {
    const nameAttr = {'name': name}
    const [focus, setFocus] = useState('')
    const inpRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const element = inpRef.current?.querySelector('input')

        if (element) {
            element.onblur = () => element.value === maskValue && setFocus('')
            let mask: any

            mask = IMask(element, {
                mask: '',
                lazy: true
            })

            element.addEventListener('focus', () => {
                mask.updateOptions({ mask: phoneMask, lazy: false })
            })

            element.addEventListener('blur', () => {
                if (element.value === maskValue) mask.updateOptions({ mask: '', lazy: false })
            })
        }
    }, [])

    const focusListener = () => {
        inpRef.current?.querySelector('input')?.focus()
        setFocus(styles['focus'])
    }

    return(
        <div onClick={focusListener} ref={inpRef} className={`${styles['content__input']} relative`}>
            <input required data-testid={'phoneNumber'} {...nameAttr} type={'text'} minLength={2} {...(register('phoneNumber'))}
                   className={`h-14 w-full ${errMessage ? styles['error'] : ''}`}
            />
            <span className={`${focus} absolute`}>Phone number</span>
        </div>
    )
}

export const PhoneInput = React.memo(PhoneInputComponent)
