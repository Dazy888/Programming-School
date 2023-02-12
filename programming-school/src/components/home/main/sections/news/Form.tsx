import React from "react"
import { UseFormRegister } from "react-hook-form"

interface Props {
    handleSubmit: any
    onSubmit: any
    errorMessage: string | undefined
    register: UseFormRegister<any>
}

const FormComponent: React.FC<Props> = ({ onSubmit, handleSubmit, errorMessage, register }) => {
    return(
        <form onSubmit={handleSubmit(onSubmit)} className={'relative'}>
            {errorMessage && <p className={'error-text'} data-testid={'error-message'}>{errorMessage}</p>}
            <input className={'font-base text-white h-11 pl-6 rounded-full'} maxLength={25} type={'text'} {...register('email', { required: { value: true, message: 'Field is required '}, pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid e-mail'}  })} />
            {errorMessage && <i className={'error-icon fa-solid fa-circle-exclamation'}/>}
            <button className={'font-bold text-white text-base block mx-auto duration-300 rounded-full mt-3'}>Subscribe</button>
        </form>
    )
}

export const Form = React.memo(FormComponent)