import React from "react"
import { UseFormRegister } from "react-hook-form"
import styles from '@/styles/Contacs.module.scss'
import { ContactsForm } from "@/models/contacts.models"

interface Props {
    register: UseFormRegister<ContactsForm>
    isErr: boolean
    inpName: 'name' | 'topic' | 'phone' | 'description'
    minLength: number
    maxLength: number
    placeholder: string
    pattern?: RegExp
    inpClass?: string
    divClass?: string
}

const InputComponent: React.FC<Props> = ({ register, placeholder, isErr, inpName, pattern = /.*/, maxLength, minLength, inpClass = '', divClass = '' }) => (
    <div className={`relative ${divClass}`}>
        {isErr && <span className={'absolute left-1'} data-testid={'error-message'}>Invalid value</span>}
        <input required {...{ placeholder, minLength, maxLength}} className={`text-black rounded-md pl-2.5 py-2 w-72 ${inpClass} ${isErr ? styles['border-red'] : ''}`} type={'text'}
               {...register(inpName, { pattern: pattern })}
        />
    </div>
)

export const Input = React.memo(InputComponent)
