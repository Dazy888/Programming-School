import React from "react"
import styles from "@/styles/Home.module.scss"

interface Props {
    text: string
    amount: string
}

const StudentsCounterItemComponent: React.FC<Props> = ({ amount, text }) => {
    return(
        <div className={'flex-between'}>
            <p className={styles['grey-txt']}>{text}:</p>
            <p className={'number'}>{amount}</p>
        </div>
    )
}

export const StudentsCounterItem = React.memo(StudentsCounterItemComponent)