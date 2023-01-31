import React from "react"
import styles from '@/styles/Index.module.scss'

export function Spinner() {
    return(
        <div className={styles['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}