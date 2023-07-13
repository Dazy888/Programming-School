import React from "react"
import styles from '@/styles/Course.module.scss'
import { Text } from "@/components/courses/course/sections/employment/guarantees/text/Text"
import { Stats } from "@/components/courses/course/sections/employment/guarantees/stats/Stats"

const GuaranteesComponent = () => (
    <div className={`${styles.guarantees} grid grid-cols-2 px-24`}>
        <Text />
        <Stats />
    </div>
)

export const Guarantees = React.memo(GuaranteesComponent)
