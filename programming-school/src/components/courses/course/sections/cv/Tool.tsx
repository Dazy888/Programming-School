import React from "react"
import styles from '@/styles/Course.module.scss'

interface Props {
    title: string
}

const ToolComponent: React.FC<Props> = ({ title }) => {
    return(
        <div className={`${styles['cv__tool']} rounded-lg py-1.5 px-3 mr-2 mb-2`}>
            <p>{title}</p>
        </div>
    )
}

export const Tool = React.memo(ToolComponent)