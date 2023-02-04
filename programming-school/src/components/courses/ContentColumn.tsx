import React from "react"
import styles from '@/styles/Courses.module.scss'
import { ColumnItem } from "@/components/courses/ColumnItem"
import { PreviewI } from "@/interfaces/courses"

interface Props {
    data: PreviewI[]
}

const ContentColumnComponent: React.FC<Props> = ({ data }) => {
    return(
        <div className={styles['courses__column']}>
            <ColumnItem title={data[0].occupation} imgPath={data[0].imgPath} path={data[0].path} time={data[0].time}/>
            <ColumnItem title={data[1].occupation} imgPath={data[1].imgPath} path={data[1].path} time={data[1].time}/>
            <ColumnItem title={data[2].occupation} imgPath={data[2].imgPath} path={data[2].path} time={data[2].time}/>
            <ColumnItem title={data[3].occupation} imgPath={data[3].imgPath} path={data[3].path} time={data[3].time}/>
            <ColumnItem title={data[4].occupation} imgPath={data[4].imgPath} path={data[4].path} time={data[4].time}/>
            <ColumnItem title={data[5].occupation} imgPath={data[5].imgPath} path={data[5].path} time={data[5].time}/>
            <ColumnItem title={data[6].occupation} imgPath={data[6].imgPath} path={data[6].path} time={data[6].time}/>
            <ColumnItem title={data[7].occupation} imgPath={data[7].imgPath} path={data[7].path} time={data[7].time}/>
            <ColumnItem title={data[8].occupation} imgPath={data[8].imgPath} path={data[8].path} time={data[8].time}/>
        </div>
    )
}

export const ContentColumn = React.memo(ContentColumnComponent)