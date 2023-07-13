import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { FeaturesItem } from "@/components/courses/course/sections/intro/features/FeaturesItem"
import { IntroProps } from "@/models/course.models"

const FeaturesComponent: React.FC<Pick<IntroProps, 'courseAttr' | 'columnsAttr' | 'features'>> = ({ features, columnsAttr, courseAttr}) => (
    <div {...columnsAttr} className={`${styles.features} grid gap-9 mt-20 mx-auto w-fit`}>
        {features.map((feature) => <FeaturesItem styleAttr={courseAttr} key={v4()} title={feature.title} text={feature.text}/>)}
    </div>
)

export const Features = React.memo(FeaturesComponent)
