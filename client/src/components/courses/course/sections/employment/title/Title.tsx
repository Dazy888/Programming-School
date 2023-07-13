import React from "react"
import styles from "@/styles/Course.module.scss"
import { Animation } from "@/components/courses/course/sections/employment/title/Animation"
import { Text } from "@/components/courses/course/sections/employment/title/Text"

const TitleComponent = () => (
    <div className={`${styles.title} grid grid-cols-2 gap-12 px-24`}>
        <Animation />
        <Text />
    </div>
)

export const Title = React.memo(TitleComponent)
