import React, { useState } from "react"
import styles from '@/styles/Course.module.scss'
import { IQuestion } from "@/models/course.models"
import { QuestionTitle } from "@/components/courses/course/sections/questions/question/QuestionTitle"
import { QuestionText } from "@/components/courses/course/sections/questions/question/QuestionText"

const QuestionComponent: React.FC<IQuestion> = ({ title, terms, text, texts, listItems }) => {
    const [isOpened, setOpenedState] = useState(false)
    const clickListener = () => (isOpened) ? setOpenedState(false) : setOpenedState(true)

    return(
        <div className={`${styles['content__question']} ${isOpened ? styles['show-answer'] : ''} mb-1 pb-0.5`}>
            <QuestionTitle {...{ title, clickListener }} />
            <QuestionText {...{ text, listItems, texts, terms }} />
        </div>
    )
}

export const Question = React.memo(QuestionComponent)
