import React from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Component
import { Form } from "@/components/courses/course/sections/consultation/Form"
// Model
import { CourseAttr } from "@/models/course"

interface Props {
    courseAttr: CourseAttr
}

const ConsultationSection: React.FC<Props> = ({ courseAttr }) => {
    return(
        <section {...courseAttr} id={styles.consultation} className={'text-black mb-32 py-28'}>
            <div className={`${styles.content} grid grid-cols-2 gap-12 max-w-6xl mx-auto p-12 rounded-xl`}>
                <h1 className={'text-4xl font-bold max-w-md'}>Sign up for a course or get a free consultation</h1>
                <Form/>
            </div>
        </section>
    )
}

export const Consultation = React.memo(ConsultationSection)
