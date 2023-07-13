import React from "react"
import styles from '@/styles/Course.module.scss'
import { QuestionsProps } from "@/models/course.models"
import { TitleText } from "@/components/layout/TitleText"
import { QuestionsContent } from "@/components/courses/course/sections/questions/QuestionsContent"

const QuestionsSection: React.FC<QuestionsProps> = ({ questions }) => (
    <div id={styles.questions} className={'flex justify-between mb-32'}>
        <TitleText text={'FAQ'} />
        <QuestionsContent questions={questions} />
    </div>
)

export default React.memo(QuestionsSection)
