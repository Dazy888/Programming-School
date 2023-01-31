import React from "react"
import styles from '@/styles/Index.module.scss'

interface Props {
    imgPath: string
    subtitle: string
    text: string
    imgAlt: string
}

const AboutCoursesItemComponent: React.FC<Props> = ({ imgPath, subtitle, text, imgAlt }) => {
    return(
        <div className={styles['about-courses__item']}>
            <img alt={imgAlt} src={imgPath}/>
            <h3 className={"subtitle"}>{subtitle}</h3>
            <p className={"light-grey-txt"}>{text}</p>
        </div>
    )
}

export const AboutCoursesItem = React.memo(AboutCoursesItemComponent)