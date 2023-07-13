import React from "react"
import styles from "@/styles/Course.module.scss"

const DisclaimerComponent = () => (
    <div className={`${styles.disclaimer} flex justify-between items-center mt-20 w-5/12`}>
        <div className={`${styles['disclaimer__icon']} w-11 h-11 flex justify-center items-center rounded-full`}>
            <i className={'fa-solid fa-exclamation text-black'} />
        </div>
        <div>
            <h3 className={'text-xl font-bold mb-2'}>Already completed any courses?</h3>
            <p>Tell the manager about it - you won't have to pay for them.</p>
        </div>
    </div>
)

export const Disclaimer = React.memo(DisclaimerComponent)
