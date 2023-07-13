import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { QuestionsProps} from "@/models/course.models"
import { Question } from "@/components/courses/course/sections/questions/question/Question"

const QuestionsContentComponent: React.FC<QuestionsProps> = ({ questions }) => (
    <div className={styles.content}>
        {questions.map((question) => <Question key={v4()} title={question.title} text={question.text} texts={question.texts} listItems={question.listItems}
                                               terms={question.terms}
        />)}
    </div>
)

export const QuestionsContent = React.memo(QuestionsContentComponent)
