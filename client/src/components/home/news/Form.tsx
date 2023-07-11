import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface HomeForm {
    email: string
}

const FormComponent = () => {
    const {
        register, reset, handleSubmit } = useForm<HomeForm>({ mode: 'onChange' })

    const onSubmit: SubmitHandler<HomeForm> = () => reset()

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={'w-fit mx-auto'}>
            <input className={'font-base text-white pl-6 py-3 rounded-full'} minLength={5} maxLength={30} type={'email'} {...register('email')} />
            <button className={'font-bold text-white text-base block mx-auto duration-300 rounded-full mt-3 py-2 px-6'}>Subscribe</button>
        </form>
    )
}

export const Form = React.memo(FormComponent)
