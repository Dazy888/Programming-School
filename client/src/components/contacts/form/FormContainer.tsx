import React from "react"
import styles from "@/styles/Contacs.module.scss"
import { Form } from "@/components/contacts/form/Form"

const FormContainerComponent = () => (
    <div className={`${styles['feedback__form']} w-8/12`}>
        <h1 className={'text-3xl font-bold tracking-wide mb-4'}>We are in touch</h1>
        <p>Submit your application and we will contact you)</p>
        <Form />
    </div>
)

export const FormContainer = React.memo(FormContainerComponent)
