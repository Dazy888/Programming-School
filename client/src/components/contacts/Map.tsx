import React from "react"
import styles from "@/styles/Contacs.module.scss"

const MapComponents = () => (
    <div className={`${styles.map} mt-40 mb-32`}>
        <iframe className={'w-full h-96 rounded-lg'} referrerPolicy={'no-referrer-when-downgrade'}
                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68361.92759686733!2d30.456578117746258!3d50.45012771430198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf8e2a6aea1d%3A0xb229d398f9539240!2sVI%20Software%20Solutions!5e0!3m2!1sen!2sua!4v1675593084849!5m2!1sen!2sua'} />
    </div>
)

export const Map = React.memo(MapComponents)
