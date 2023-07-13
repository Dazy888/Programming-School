import React, { useEffect, useRef, useState } from "react"
import styles from '@/styles/Course.module.scss'
import { UseFormRegister } from "react-hook-form"
import { CourseForm } from "@/models/course.models"

interface Props {
    placeholder: string
    register: UseFormRegister<CourseForm>
    pattern?: RegExp
    errorMessage: string | undefined
    name: 'name' | 'email'
    minLength: number
    maxLength: number
    type: 'text' | 'email'
    value: string | null
}

export const InputComponent: React.FC<Props> = ({ placeholder, register, value, type, pattern = /.*/, errorMessage, name, maxLength, minLength }) => {
    const nameAttr = { 'name': name }
    const [focus, setFocus] = useState('')
    const inpRef: any = useRef()

    useEffect(() => {
        if (value) setFocus(styles['focus'])
    }, [value])

    useEffect(() => {
        const element = inpRef.current.querySelector('input')
        element.onblur = () => !element.value && setFocus('')
    }, [])

    const focusListener = () => {
        inpRef.current.querySelector('input').focus()
        setFocus(styles['focus'])
    }

    return(
        <div onClick={focusListener} ref={inpRef} className={`${styles['content__input']} relative`}>
            <input required {...{ minLength, maxLength, type }} data-testid={name} {...nameAttr} className={`h-14 w-full ${errorMessage ? styles['error'] : ''}`}
                   {...(register(name, { pattern: { value: pattern, message: `Invalid ${placeholder}` }}))} />
            <span className={`${focus} absolute`}>{placeholder}</span>
            {errorMessage && <p className={`mt-2 text-xs ${styles['error-text']}`} data-testid={'error-message'}>{errorMessage}</p>}
        </div>
    )
}

export const Input = React.memo(InputComponent)
