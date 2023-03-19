import React from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Components
import { TitleText } from "@/components/common/TitleText"
import { Question } from "@/components/courses/course/sections/questions/Question"
// Model
import { IQuestion } from "@/models/course"

interface Props {
    questions: IQuestion[]
}

const QuestionsSection: React.FC<Props> = ({ questions }) => {
    return(
        <div id={styles.questions} className={'flex justify-between mb-32'}>
            <TitleText text={'FAQ'}/>
            <div className={styles.content}>
                {questions.map((question, key) => <Question key={key} title={question.title} text={question.text} texts={question.texts} listItems={question.listItems} terms={question.terms}/>)}
            </div>
        </div>
    )
}

export const Questions = React.memo(QuestionsSection)
