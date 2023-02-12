import React, { useEffect, useRef } from "react"
// Components
import { ValidatedInput } from "@/components/contacts/ValidatedInput"
// Form
import { SubmitHandler, useForm,} from "react-hook-form"
import { FormI } from "@/interfaces/contacts"
// Phone Mask
import IMask from "imask"

const FormComponent = ({  }) => {
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

    const { handleSubmit, reset, register, formState: { errors } } = useForm<FormI>({mode: 'onChange'})
    const onSubmit: SubmitHandler<FormI> = (data) => reset()

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex justify-between my-10'}>
                <div ref={phoneRef}>
                    <ValidatedInput placeHolder={'Your name'} register={register} errorMessage={errors.name?.message} inpName={'name'} pattern={/^[a-zA-Z]+$/} patternMessage={'name'} minLength={3} maxLength={20}/>
                    <ValidatedInput placeHolder={'Reason of the application'} divClass={'my-10'} register={register} errorMessage={errors.reason?.message} inpName={'reason'} pattern={/.*/} patternMessage={'reason'} minLength={5} maxLength={20}/>
                    <ValidatedInput placeHolder={'Your phone number'} inpClass={'phone'} register={register} errorMessage={errors.phone?.message} inpName={'phone'} pattern={/.*/} patternMessage={'phone number'} minLength={10} maxLength={20}/>
                </div>
                <textarea className={'w-1/2 text-black rounded-lg p-2.5'} minLength={20} {...(register('description', {required: true}))}/>
            </div>
            <p className={'text-base font-normal text-center'}>By clicking the send button you agree to the processing of personal data in accordance with the privacy policy</p>
            <button className={'w-full text-xl rounded h-9 mt-5'}>Send</button>
        </form>
    )
}

export const Form = React.memo(FormComponent)