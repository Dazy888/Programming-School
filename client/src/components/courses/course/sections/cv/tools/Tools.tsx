import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { CVProps } from "@/models/course.models"
import { Tool } from "@/components/courses/course/sections/cv/tools/Tool"

const ToolsComponent: React.FC<Pick<CVProps, 'tools'>> = ({ tools }) => (
    <div className={`${styles['content__tools']} flex`}>
        <h3 className={'text-lg font-medium w-56 mr-14'}>I own tools:</h3>
        <div className={'flex flex-wrap'}>
            {tools.map((value) => <Tool title={value} key={v4()}/>)}
        </div>
    </div>
)

export const Tools = React.memo(ToolsComponent)
