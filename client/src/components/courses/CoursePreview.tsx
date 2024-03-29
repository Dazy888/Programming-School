import React from "react"
import { useRouter } from "next/router"
import styles from '@/styles/Courses.module.scss'

interface Props {
    title: string
    time: string
    path: string
}

const CoursePreviewComponent: React.FC<Props> = ({ path, time, title }) => {
    const router = useRouter()

    return(
        <div onClick={() => router.push(`/courses/${path}`)} className={`${styles['content__item']} h-48 flex justify-between items-center cursor-pointer duration-300 p-4 mb-14 rounded-xl`}>
            <div className={'flex flex-col justify-between h-full'}>
                <h2 className={'text-2xl font-medium'}>{title}</h2>
                <p className={'font-medium'}>{time}</p>
            </div>
            <img className={'w-28 h-28'} alt={'Logo'} src={`/courses/previews/${path}.webp`}/>
        </div>
    )
}

export const CoursePreview = React.memo(CoursePreviewComponent)
