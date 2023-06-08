import React, { useEffect, useRef, useState } from "react"
import styles from '@/styles/Course.module.scss'
import { UseFormRegister } from "react-hook-form"
import { CourseForm } from "@/models/course"
import IMask from "imask"

interface Props {
    placeholder: string
    register: UseFormRegister<CourseForm>
    pattern: RegExp
    errorMessage: string | undefined
    name: 'name' | 'mail' | 'phoneNumber'
    isPhoneInput?: boolean
    maskValue?: string
    phoneMask?: string
}

export const InputComponent: React.FC<Props> = ({ placeholder, isPhoneInput = false, maskValue, phoneMask, register, pattern, errorMessage, name }) => {
    const nameAttr = {'name': name}
    const [focus, setFocus] = useState('')
    const inpRef: any = useRef()

    useEffect(() => {
        const element = inpRef.current.querySelector('input')
        element.onblur = () => !element.value && setFocus('')

        if (isPhoneInput) {
            element.onblur = () => element.value === maskValue && setFocus('')
            let mask: any

            mask = IMask(element, {
                mask: '',
                lazy: true
            })

            element.addEventListener('focus', () => {
                mask.updateOptions({
                    mask: phoneMask,
                    lazy: false
                })
            })

            element.addEventListener('blur', () => {
                if (element.value === maskValue) {
                    mask.updateOptions({
                        mask: '',
                        lazy: false
                    })
                }
            })
        }
    }, [])

    const focusListener = () => {
        inpRef.current.querySelector('input').focus()
        setFocus(styles['focus'])
    }

    return(
        <div onClick={focusListener} ref={inpRef} className={`${styles['content__input']} relative`}>
            <input data-testid={name} {...nameAttr} type={'text'} minLength={2} {...(register(name, {required: {value: true, message: 'Field is required'}, pattern: {value: pattern, message: `${placeholder} is wrong`}}))} className={`h-14 w-full ${errorMessage ? styles['error'] : ''}`}/>
            <span className={`${focus} absolute`}>{placeholder}</span>
            {(errorMessage && !isPhoneInput) && <p className={`mt-2 text-xs ${styles['error-text']}`} data-testid={'error-message'}>{errorMessage}</p>}
        </div>
    )
}

export const Input = React.memo(InputComponent)
