import React from "react"
import styles from '@/styles/Home.module.scss'
import Image from "next/image"

interface Props {
    imgPath: string
    subtitle: string
    text: string
    imgAlt: string
}

const ContentItemComponent: React.FC<Props> = ({ imgPath, subtitle, text, imgAlt }) => {
    return(
        <div className={styles['about-courses__item']}>
            <Image width={100} height={100} alt={imgAlt} src={imgPath}/>
            <h3 className={"subtitle"}>{subtitle}</h3>
            <p className={"light-grey-txt"}>{text}</p>
        </div>
    )
}

export const ContentItem = React.memo(ContentItemComponent)