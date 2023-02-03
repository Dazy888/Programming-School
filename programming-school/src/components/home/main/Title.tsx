import React from "react"
import styles from '@/styles/Home.module.scss'

interface Props {
    title: string
    text?: string
    column?: boolean
}

const TitleComponent: React.FC<Props> = ({ title, text, column = false }) => {
    return(
        <div className={`${styles['title-block']} ${column && styles['title-column']} flex-center`}>
            <div className={styles['lds-ring']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1 className={"title"}>{title}</h1>
            {text && <p className={styles['grey-subtitle']}>{text}</p>}
        </div>
    )
}

export const Title = React.memo(TitleComponent)