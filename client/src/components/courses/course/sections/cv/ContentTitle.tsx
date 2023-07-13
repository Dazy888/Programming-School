import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"
import { CVProps } from "@/models/course.models"

const ContentTitleComponent: React.FC<Pick<CVProps, 'salary' | 'title'>> = ({ title, salary}) => (
    <div className={`${styles['content__title']} flex justify-between items-center mb-12`}>
        <div className={'flex items-center'}>
            <Image width={65} height={65} alt={'Your photo'} src={'/courses/course/cv/avatar.webp'} className={'mr-6'}/>
            <h2 className={'text-2xl font-medium'}>{title}</h2>
        </div>
        <h2 className={'text-2xl font-medium'}>{salary}</h2>
    </div>
)

export const ContentTitle = React.memo(ContentTitleComponent)
