import React from "react"
import styles from "@/styles/Contacs.module.scss"

const ContactInfoComponent = () => (
    <div className={`${styles['feedback__information']} text-left`}>
        <h1 className={'text-3xl font-bold tracking-wide mb-4'}>Contact Information</h1>
        <ul>
            <li>Address: Antonovycha Street, 172, Kyiv, 03150.</li>
            <li className={'my-2.5'}>Phone number: <a className={'duration-300'} href={'tel:+380668205414'}>+38 (066)-820-5414.</a></li>
            <li>Work time: 10:00-18:00.</li>
        </ul>
    </div>
)

export const ContactInfo = React.memo(ContactInfoComponent)
