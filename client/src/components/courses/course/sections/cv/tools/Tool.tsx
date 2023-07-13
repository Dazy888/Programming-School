import React from "react"
import styles from '@/styles/Course.module.scss'

interface Props {
    title: string
}

const ToolComponent: React.FC<Props> = ({ title }) => (
    <div className={`${styles['content__tool']} rounded-lg py-1.5 px-3 mr-2 mb-2 text-black`}>
        <p>{title}</p>
    </div>
)

export const Tool = React.memo(ToolComponent)
