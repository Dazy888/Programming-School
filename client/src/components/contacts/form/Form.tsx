import React, { useEffect, useRef } from "react"
import { Input } from "@/components/contacts/form/Input"
import { SubmitHandler, useForm,} from "react-hook-form"
import IMask from "imask"
import { ContactsForm } from "@/models/contacts.models"
import { toast } from "react-toastify"
import styles from '@/styles/Contacs.module.scss'

export function notify(message: string, type: 'success' | 'error' | 'warning') {
    toast(message, {
        type: type,
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
    })
}

const FormComponent = () => {
    const phoneRef: any = useRef()

    useEffect(() => {
        let element = phoneRef.current.querySelector('.phone')
        let mask: any

        mask = IMask(element, {
            mask: '',
            lazy: true
        })

        element.addEventListener('focus', () => {
            mask.updateOptions({
                mask: '+{38\\0} 00 000 00 00',
                lazy: false
            })
        })

        element.addEventListener('blur', () => {
            if (element.value === '+380 __ ___ __ __') {
                mask.updateOptions({
                    mask: '',
                    lazy: false
                })
            }
        })
    }, [])

    const { handleSubmit, reset, register, watch,
        formState: { errors, touchedFields, dirtyFields }
    } = useForm<ContactsForm>({ mode: 'onChange' })

    const phoneNumber = watch('phone')

    const onSubmit: SubmitHandler<ContactsForm> = () => {
        if (!/(\d)$/.test(phoneNumber)) {
            notify('Invalid phone number', 'error')
        } else {
            notify('Form submitted successfully', 'success')
            reset()
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles['feedback__form-container'] || ''} grid grid-cols-2 my-10`}>
                <div ref={phoneRef} className={styles.inputs || ''}>
                    <Input placeholder={'Name'} register={register} isErr={!!(errors.name && touchedFields.name)} inpName={'name'} pattern={/^[a-zA-Z]+$/}
                           minLength={3} maxLength={20}
                    />
                    <Input placeholder={'Application topic'} divClass={'my-10'} register={register} isErr={!!(errors.topic?.message && touchedFields.topic)} inpName={'topic'}
                           minLength={5} maxLength={20}
                    />
                    <Input placeholder={'Phone number'} inpClass={'phone'} register={register} isErr={!!(errors.phone?.message && touchedFields.phone)} inpName={'phone'} pattern={/.*/}
                           minLength={10} maxLength={20}
                    />
                </div>
                <textarea placeholder={'Describe your question...'} className={'text-black rounded-md p-2.5'} minLength={20} {...(register('description', { required: true }))}/>
            </div>
            <p className={'text-center'}>By clicking the send button you agree to the processing of personal data in accordance with the privacy policy.</p>
            <button className={'w-full text-xl font-medium rounded-lg mt-5 duration-300 py-1'}>Send</button>
        </form>
    )
}

export const Form = React.memo(FormComponent)
