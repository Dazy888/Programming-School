import React from "react"
import styles from '@/styles/Course.module.scss'
import { QuestionI } from "@/interfaces/courses"

const QuestionComponent: React.FC<QuestionI> = ({ title, terms, text, texts, listItems }) => {
    return(
        <div className={`${styles['questions__question']}`}>
            <h3></h3>
            <div>

            </div>
        </div>
    )
}

export const Question = React.memo(QuestionComponent)