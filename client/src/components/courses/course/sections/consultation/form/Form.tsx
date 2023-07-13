import React from "react"
import styles from "@/styles/Course.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { CourseForm } from "@/models/course.models"
import { notify } from "@/components/contacts/form/Form"
// Components
import { Input } from "@/components/courses/course/sections/consultation/form/Input"
import { PhoneNumber } from "@/components/courses/course/sections/consultation/form/phone-number/PhoneNumber"

const FormComponent = () => {
    const { register, handleSubmit, watch, reset,
        formState: { errors}
    } = useForm<CourseForm>({ mode: 'onChange' })

    const onSubmit: SubmitHandler<CourseForm> = () => notify('Form submitted successfully', 'success')

    const name = watch('name')
    const email = watch('email')

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input value={name} type={'text'} minLength={2} maxLength={15} name={'name'} errorMessage={errors.name?.message} pattern={/^[a-zA-Z]+$/} register={register}
                   placeholder={'Name'}
            />
            <div className={`${styles['inputs-row']} grid grid-cols-2 gap-4 mt-4`}>
                <PhoneNumber register={register} errMessage={errors.phoneNumber?.message} />
                <Input value={email} type={'email'} minLength={5} maxLength={35} name={'email'} errorMessage={errors.email?.message} register={register} placeholder={'E-mail'} />
            </div>
            <button className={'py-4 w-1/2 my-4 text-lg text-white rounded-xl duration-300'}>Enroll in course</button>
            <p className={`${styles['content__agreement']} text-xs grey-color`}>By clicking on the button, I agree to the processing of personal data and the terms of use of the Platform.</p>
        </form>
    )
}

export const Form = React.memo(FormComponent)
