import React from "react"
import styles from "@/styles/Course.module.scss"

interface Props {
    clickListener: () => void
    title: string
}

const QuestionTitleComponent: React.FC<Props> = ({ title, clickListener }) => (
    <div className={`${styles['content__title']} flex justify-between items-center cursor-pointer p-5`} onClick={clickListener}>
        <h3 className={'text-lg font-medium'}>{title}</h3>
        <button className={'w-8 h-8 flex justify-center items-center rounded-full'}>
            <i className={'fa-solid fa-chevron-down'} />
        </button>
    </div>
)

export const QuestionTitle = React.memo(QuestionTitleComponent)
