import React from "react"
import { useRouter } from "next/router"
import styles from '@/styles/Courses.module.scss'

interface Props {
    title: string
    time: string
    imgPath: string
    path: string
}

const ColumnItemComponent: React.FC<Props> = ({ path, imgPath, time, title }) => {
    const router = useRouter()

    return(
        <div onClick={() => router.push(`/courses/${path}`)} className={`${styles['courses__item']} flex-between`}>
            <div>
                <h2>{title}</h2>
                <p>{time}</p>
            </div>
            <img alt={'Logo'} src={imgPath}/>
        </div>
    )
}

export const ColumnItem = React.memo(ColumnItemComponent)