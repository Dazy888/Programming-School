import React from "react"
import { UseFormRegister } from "react-hook-form"

interface Props {
    register: UseFormRegister<any>
    errorMessage: string | undefined
    inpName: string
    pattern: RegExp
    patternMessage: string
    minLength: number
    maxLength: number
    inpClass?: string
    divClass?: string
    placeHolder: string
}

const ValidatedInputComponent: React.FC<Props> = ({ register, placeHolder, errorMessage, inpName, pattern, patternMessage, maxLength, minLength, inpClass = '', divClass = '' }) => {
    return(
        <div className={`relative ${divClass}`}>
            {errorMessage && <span className={'absolute'} data-testid={'error-message'}>{errorMessage}</span>}
            <input placeholder={placeHolder} className={`text-black rounded-lg pl-2.5 h-9 w-72 ${inpClass}`} minLength={minLength} maxLength={maxLength} type={'text'} {...register(inpName, { required: true, pattern: {value: pattern, message: `Invalid ${patternMessage}`}})} />
            {errorMessage && <i className={'error-icon fa-solid fa-circle-exclamation absolute'}/>}
        </div>
    )
}

export const ValidatedInput = React.memo(ValidatedInputComponent)
